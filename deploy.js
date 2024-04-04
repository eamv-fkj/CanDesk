/*
 * this will deploy the build project to the ftp server
 * using: npm run deploy
 * (see: package.json, for the script)
 * 
 * FTP host, user and password is set in environment variables
 * in the './.env' file (_not_ commited to git!):
 * 
 * CANDESK_JS_FTP_HOST=<not shown>
 * CANDESK_JS_FTP_USER=<not shown>
 * CANDESK_JS_FTP_PASSWORD=<not shown>
 */

// https://www.npmjs.com/package/basic-ftp
const { Client } = require("basic-ftp");

// https://www.npmjs.com/package/dotenv
require('dotenv').config();

async function deploy() {
    let client = new Client();

    // http://fkj.dk/test/candesk.js/index.html
    let remoteDir = '/www/test/candesk.js/';

    let localDir = './dist/';

    try {
      await client.access({
          host:     process.env.CANDESK_JS_FTP_HOST,
          user:     process.env.CANDESK_JS_FTP_USER,
          password: process.env.CANDESK_JS_FTP_PASSWORD,
          secure:   false // Set to true if using FTPS
      });
      await client.removeDir(remoteDir, true);
      await client.ensureDir(remoteDir);
      await client.cd(remoteDir);
      await client.uploadFromDir(localDir);

      console.log("Deployment succeeded!");

    } catch (error) {
      console.error("Deployment failed:", error);
    }

    client.close();
}

deploy();