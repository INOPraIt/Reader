const nodemailer = require('nodemailer');

class MailService {

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        type: 'OAuth2',
        user: 'ryzevdmitrij@gmail.com',
        clientId: '433796302708-cush6uviuocq3r4pcc194dm6icsoocr7.apps.googleusercontent.com',
        clientSecret: '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',
        refreshToken: '1//047iwCe4pWdg2CgYIARAAGAQSNwF-L9Ir4_PWZ-em6w41skfMjJPDGQdYrYJodQk7cGwNMvKpRxATofQVpVMhd7Gw4A50sgjO5AI'
      }
    }, {
      from: 'Mailer Test inoprait@gmail.com'
    })
  }

  async sendActivationMail(to, link) {
    await this.transporter.sendMail({
      from: 'ryzevdmitrij@gmail.com',
      to,
      subject: 'Активация аккаунта на ' + 'http://localhost:1234',
      text: '',
      html: 
      `
        <div>
          <h1>Для активации перейдите по ссылке</h1>
          <a href="${link}">${link}</a>
        </div>
      `
    })
  }
}

module.exports = new MailService();

