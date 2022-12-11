const {Schema, model} = require('mongoose');

const UserSchema = new Schema ({
  email: {type: String, unique: true, required: true},
  password: {type: String, unique: false, required: true},
  isActivated: {type: Boolean, default: false},
  activatedLink: {type: Boolean, required: false},
});

module.exports = model('User', UserSchema);