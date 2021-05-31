const conf = require('dotenv');

let path;
switch (process.env.NODE_ENV) {
  case 'test':
    path = `${__dirname}/.env.test`;
    break;
  case 'production':
    path = `${__dirname}/.env.production`;
    break;
  default:
    path = `${__dirname}/.env`;
}
console.log('Config file path is: %s', path);
conf.config({path});
