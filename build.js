const fs = require('fs');
const os = require('os');

const encoding = 'UTF-8';
const envs = ['dev', 'test', 'prod'];

const env = process.argv.splice(2)[0] || 'dev';

if (!envs.includes(env)) {
  console.log(`不可用环境${env}`);
  return;
}

const envFilePath = './config.json';
const sourceConfigData = fs.readFileSync(
  `./config/config.${env}.json`,
  encoding,
);

const targetConfigData = {
  ...JSON.parse(sourceConfigData.toString()),
  ip: getIPAddress(),
};

try {
  fs.writeFileSync(envFilePath, JSON.stringify(targetConfigData, null, 2));
} catch (e) {
  console.log('配置文件写入失败', e);
}

function getIPAddress() {
  const interfaces = os.networkInterfaces();
  for (let name in interfaces) {
    if (name) {
      const items = interfaces[name];
      for (let i = 0, len = items.length; i < len; i++) {
        const alias = items[i];
        if (
          alias.family === 'IPv4' &&
          alias.address !== '127.0.0.1' &&
          !alias.internal
        ) {
          return alias.address;
        }
      }
    }
  }
}
