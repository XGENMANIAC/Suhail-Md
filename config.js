okconst fs = require('fs-extra')
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254745405672";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_25_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIsXG4gICAgICAgIDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgyLFxuICAgICAgICA0NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDkzLFxuICAgICAgICA0NCxcbiAgICAgICAgNixcbiAgICAgICAgMjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA2LFxuICAgICAgICA2NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI5LFxuICAgICAgICA0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAzNCxcbiAgICAgICAgODQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAzMixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODksXG4gICAgICAgIDE5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTIsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDc5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjE4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTksXG4gICAgICAgIDI5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTU0LFxuICAgICAgICA2MyxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzEsXG4gICAgICAgIDg1LFxuICAgICAgICA0MixcbiAgICAgICAgNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgODEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTksXG4gICAgICAgIDkzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzksXG4gICAgICAgIDc4LFxuICAgICAgICA0NixcbiAgICAgICAgMjUzLFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc1LFxuICAgICAgICAyMSxcbiAgICAgICAgODQsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjcsXG4gICAgICAgIDg1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTU1LFxuICAgICAgICA5MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTA0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTEyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDM0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY0LFxuICAgICAgICA1NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjUxLFxuICAgICAgICA4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDg2LFxuICAgICAgICAyNixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMixcbiAgICAgICAgMzEsXG4gICAgICAgIDEzLFxuICAgICAgICA2NyxcbiAgICAgICAgOSxcbiAgICAgICAgMTgxLFxuICAgICAgICA0MyxcbiAgICAgICAgNjksXG4gICAgICAgIDc3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzksXG4gICAgICAgIDk1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAzNixcbiAgICAgICAgMTMyLFxuICAgICAgICA1LFxuICAgICAgICA0OSxcbiAgICAgICAgMzksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjcsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjcrMVd1OE8rK0VLYlZoRHVZcTlXSXdER1ZxMzhxMkhDY2tnR1NIditCRXc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImQtQnRGV21oUW1hRmVYWjEwMmU1eFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjNiM2EwMjMtZTA1NS00MDVjLWIxNDQtMjA4ODdlMjQ1ZDViXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwOSxcbiAgICAgIDYwLFxuICAgICAgMjEwLFxuICAgICAgNTYsXG4gICAgICAyMDYsXG4gICAgICAzMCxcbiAgICAgIDExNixcbiAgICAgIDE4NSxcbiAgICAgIDM2LFxuICAgICAgMTI4LFxuICAgICAgMTc2LFxuICAgICAgMTA5LFxuICAgICAgMTgyLFxuICAgICAgOTcsXG4gICAgICAyMjMsXG4gICAgICAxNzMsXG4gICAgICAxMzksXG4gICAgICAyNDksXG4gICAgICAxODksXG4gICAgICA3NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDIsXG4gICAgICAxMTUsXG4gICAgICAxNzYsXG4gICAgICAxMzQsXG4gICAgICAxNTcsXG4gICAgICAxNCxcbiAgICAgIDMzLFxuICAgICAgNTUsXG4gICAgICAyNDIsXG4gICAgICA4NSxcbiAgICAgIDEzOSxcbiAgICAgIDQyLFxuICAgICAgMTI0LFxuICAgICAgNzYsXG4gICAgICAxMzcsXG4gICAgICAzMCxcbiAgICAgIDE2OSxcbiAgICAgIDI0MixcbiAgICAgIDE4MCxcbiAgICAgIDI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldSTUQ3U1hEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NDU0MDU2NzI6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk5lcmR5IE5pY2tcIixcbiAgICBcImxpZFwiOiBcIjk4NTMxMDc5NzQxNTU6OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPRE11YXNFRU4zWDVyTUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImthamxMWTcvRlVGeStyRnNBY0hjZUlCY0Y3MHV1Qm5aUlBocTdYQ3dMejA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicWo4d1BXckxtY2hvdDBoSXBEU3JBV1BEbHk5TkZzZ1k4cDJnWDA2VDRKcVVidWhZNVI0WjJBQU5VOTBtcEREY0c1bG5walhlV3JleXltekxPMS9EQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRE9RZVp2N3QxcS9QVzZuOG5PcWJ5Q296TzdiT2FyQkxNRDdlMjJDUDZrZVYzNitjMFdkdXdlNW9mbStabU9yZzRreEdQU09sS0EvZjQ5UVFMKy9sREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzQ1NDA1NjcyOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDYxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkyNDk4ODhcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
