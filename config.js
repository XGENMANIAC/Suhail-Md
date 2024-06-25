const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_41_06_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAzNyxcbiAgICAgICAgODMsXG4gICAgICAgIDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMixcbiAgICAgICAgMTgsXG4gICAgICAgIDQxLFxuICAgICAgICAxODEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTgzLFxuICAgICAgICA5NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTY4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDY2LFxuICAgICAgICA3OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDM2LFxuICAgICAgICA2MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxODksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDMzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxLFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDQ0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAzNixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzksXG4gICAgICAgIDU5LFxuICAgICAgICA3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDk3LFxuICAgICAgICAxODYsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcsXG4gICAgICAgIDExLFxuICAgICAgICAxODYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQxLFxuICAgICAgICA2NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDc0LFxuICAgICAgICA0NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzLFxuICAgICAgICA0NSxcbiAgICAgICAgMCxcbiAgICAgICAgODUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgNTQsXG4gICAgICAgIDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEsXG4gICAgICAgIDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDY4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjM5LFxuICAgICAgICA0MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjEsXG4gICAgICAgIDExLFxuICAgICAgICA3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTIwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAzNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgOTgsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDY5LFxuICAgICAgICA3MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc3LFxuICAgICAgICA4MixcbiAgICAgICAgNzksXG4gICAgICAgIDkzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2NSxcbiAgICAgICAgNjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDg1LFxuICAgICAgICA5NixcbiAgICAgICAgMTMzLFxuICAgICAgICA3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDc2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc5LFxuICAgICAgICA3NyxcbiAgICAgICAgODgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE4LFxuICAgICAgICA5NSxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicUhXaWFmd0tDV2syWkRPOVhTY25PYUZIb2NUOTBVdVpjemFDQmdoR08vdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3NDU0MDU2NzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkE1QjhDNTZFNEIyMzQxRkY3OTUyMjExRTI5MTBEQzQ3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTI4NjkxNlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJUUGc4Y1p3Z1NpYUp1UUhFX2tYLXNBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjVlYjZmNjYwLWRjMDMtNDNkMy05YWNmLWEwM2EyMjA2NDNiMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NixcbiAgICAgIDE5MixcbiAgICAgIDE2OCxcbiAgICAgIDMyLFxuICAgICAgMjExLFxuICAgICAgMTk5LFxuICAgICAgMjI3LFxuICAgICAgODQsXG4gICAgICA2OCxcbiAgICAgIDYwLFxuICAgICAgOTAsXG4gICAgICAxMjcsXG4gICAgICA2LFxuICAgICAgMzgsXG4gICAgICA0MSxcbiAgICAgIDIxMCxcbiAgICAgIDE5NixcbiAgICAgIDI3LFxuICAgICAgMjQ2LFxuICAgICAgNjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc2LFxuICAgICAgMjQ4LFxuICAgICAgMjQyLFxuICAgICAgMTU5LFxuICAgICAgODYsXG4gICAgICA1MSxcbiAgICAgIDEzNixcbiAgICAgIDEyNyxcbiAgICAgIDE1OSxcbiAgICAgIDI0OCxcbiAgICAgIDUzLFxuICAgICAgMTA0LFxuICAgICAgMTM3LFxuICAgICAgMjQ1LFxuICAgICAgNzMsXG4gICAgICAxNzQsXG4gICAgICAyNDAsXG4gICAgICA3NyxcbiAgICAgIDY4LFxuICAgICAgMTY3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhXM1NLNUpSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NDU0MDU2NzI6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJOZXJkeSBOaWNrXCIsXG4gICAgXCJsaWRcIjogXCI5ODUzMTA3OTc0MTU1OjE0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09ETXVhc0VFUHY0NkxNR0dBa2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwia2FqbExZNy9GVUZ5K3JGc0FjSGNlSUJjRjcwdXVCblpSUGhxN1hDd0x6MD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI1aGdoZHBFV3BsaXNXaEhRZ1I2cGZSa3l5SmdHUWZKY1BRUUlzRFFBM3hvOHBqUzgrZGxDb1llaitndi9adGZEOE9OQmFrUDJibW5MVkp4SmR0dVVCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJtT29zVEp2VEI1dEFiOGtvTTdTSE53YUhnOFBDajhZTHRFcjA2dGhZTWlTSDRRUE5aaEN1MmR4TCtzWjdaRTZuY0xzMFRCMEJLZmVZeFJpc3ZOYm9BZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NDU0MDU2NzI6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDYxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkyODY5MTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGL0dcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUYvRy5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
