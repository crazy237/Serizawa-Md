const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : '923184474176';
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Suhail:suhail@cluster0.rzhkoqf.mongodb.net/?retryWrites=true&w=majority" ;
global.port= false // Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000  ; 
global.audio = '' ; 
global.video = '' ;
global.blockJids = process.env.BLOCK_JID ||'120363023983262391@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363022922797633@g.us' ;
global.email = 'francisvoufo@gmail.com' ;
global.location = 'Yaounde Cameroun' ;
global.timezone  = process.env.TIME_ZONE || 'Asia/Karachi'
global.gurl = 'https://chat.whatsapp.com/LmbPuR6u0P98vcXL5bfeSQ' ; // add your username
global.sudo =  process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : '237694268225'; ;
global.devs = "237694268225"; //Dont change it From here
global.github  = process.env.YOUR_GITHUB || 'https://github.com/Crazy237/Serizawa-Md';
global.scan  = process.env.QR_URL || 'https://replit.com/@SuhailTechInfo/Suhail-Md?v=1';
global.website = 'https://github.com/Crazy237/Serizawa-Md' ; //wa.me/237694268225
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/e28bc04da8e18ad26b67a.jpg' ;
module.exports = {
  sessionName: process.env.SESSION_ID || "",      //Put Your Session Id Here
  botname: process.env.BOT_NAME || 'Serizawa-Md',
  botbgm: process.env.BOT_BGM || 'false',
  ownername:  process.env.OWNER_NAME || `໒ཞศƶƴ_♇ཞརས໒ཛ👑`,
  author:  process.env.PACK_AUTHER || '',
  errorChat : process.env.ERROR_CHAT|| '', // put 'chat' here to send error in chat ,where it accures
  read_status : process.env.AUTO_READ_STATUS || 'false',
  save_status : process.env.AUTO_SAVE_STATUS || 'false',
  packname:  process.env.PACK_NAME || "\t   ໒ཞศƶƴ_♇ཞརས໒ཛ👑 \n\nғᷫʀᷢᴀͣɴᷡᴄͨɪͥsᷤ ᴠͮғᷫ𓀮𓀬\n\n𝝤𝝥𝝦𝝨𝝩𝝪𝝫𝝬𝝭𝝮\n\n🖖Vie sur nous\n\n\n   Hommage à Damso \n\n🖖Vie sur nous" ,
  autoreaction: process.env.AUTO_REACTION || 'false',  //  | 'cmd' | 'true' | 'all' |
  antibadword : process.env.ANTI_BAD_WORD || 'Fuck',
  alwaysonline: process.env.WAPRESENCE || '', // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
  antifake : '229', // process.env.FAKE_COUNTRY_CODE ||'212',
  readmessage: process.env.READ_MESSAGE || 'false',   //  | 'false' | 'true' | 
  readcmds : process.env.READ_COMMANDS || 'false',    //  | 'false' | 'true' | 
  HANDLERS: process.env.PREFIX || ',',
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "false",   
  MsgsInLog:process.env.MSGS_IN_LOG ||'false',
  pmMsgsInLog:process.env.PM_MSGS_IN_LOGS ||'false',
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',  //  | 'false' | 'true' | 
  antilink_values: process.env.ANTILINK_VALUES || 'https://,chat.whatsapp.com,www.,http://',
  //antilinkaction: process.env.BRANCH || 'remove',
  BRANCH: process.env.BRANCH || 'main',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  caption :process.env.CAPTION || "```Developpé par ໒ཞศƶƴ_♇ཞརས໒ཛ👑```",   //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ||'' ,
  VERSION: process.env.VERSION || 'v.1.2.2',
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : 'SUHAIL',
  menu : process.env.MENU || '', /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || 'private',
  KOYEB_API : process.env.KOYEB_API || ''
};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 