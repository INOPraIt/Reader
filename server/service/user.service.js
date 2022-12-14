const UserModel = require('../models/user.model');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const mailService = require('./mail.service');
const tokenService = require('./token.service');
const UserDto = require('../dtos/user.dto');
const ApiError = require('../exceptions/api.error');

class UserService {
  async registration(email, password) {
    const candidate = await UserModel.findOne({ email });
    if(candidate) {
      throw new ApiError.BadRequest(`Пользователь с почтовым адресом ${ email } уже сущесвует`);
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4(); //hashPassword

    const user = await UserModel.create({ email, password: hashPassword, activationLink });
    await mailService.sendActivationMail(email, `http://localhost:5000/api/activate/${activationLink}`);

    const userDto = new UserDto(user); // id, email, isActivated
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  };

  async activate(activationLink) {
    const user = await UserModel.findOne({ activationLink });
    if(!user) {
      ApiError.BadRequest('Некоректная ссылка активации');
    }
    user.isActivated = true;
    await user.save();
  };

  async login(email, password) {
    const user = await UserModel.findOne({email});
    if(!user) {
      throw ApiError.BadRequest('Пользователь с таким email не найден');
    }
    const isPostEquals = await bcrypt.compare(password, user.password);
    if(!isPostEquals) {
      throw ApiError.BadRequest('Некоректный пароль');
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return {...tokens, user: userDto};
  };

  async logout(refreshToken) {
    const token =  await tokenService.removeToken(refreshToken);
    return token;
  };
  
  async refreshToken(refreshToken) {
    if(!refreshToken) {
      throw ApiError.UnauthorizedError();
    };
    const userData = tokenService.validateAccessToken( refreshToken );
    const tokenFromDataBase = await tokenService.findToken( refreshToken );
    if(!userData || !tokenFromDataBase) {
      throw ApiError.UnauthorizedError();
    };

    const user = await UserModel.findById(userData.id);
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return {...tokens, user: userDto};
  }
}

module.exports = new UserService();
