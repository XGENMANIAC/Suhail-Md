Iconst fs = require('fs-extra')
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_18_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDUyLFxuICAgICAgICA3NixcbiAgICAgICAgMzksXG4gICAgICAgIDIxLFxuICAgICAgICA5MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDksXG4gICAgICAgIDUsXG4gICAgICAgIDcwLFxuICAgICAgICAxODEsXG4gICAgICAgIDI5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ2LFxuICAgICAgICA0LFxuICAgICAgICA3NixcbiAgICAgICAgNjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU1LFxuICAgICAgICA4NyxcbiAgICAgICAgODIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODEsXG4gICAgICAgIDIwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI3LFxuICAgICAgICA1MixcbiAgICAgICAgODIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDksXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkxLFxuICAgICAgICA5NixcbiAgICAgICAgMTU1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDksXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTk3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTY2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjksXG4gICAgICAgIDc0LFxuICAgICAgICAyNSxcbiAgICAgICAgODYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI0LFxuICAgICAgICA3MixcbiAgICAgICAgNzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNixcbiAgICAgICAgMjMsXG4gICAgICAgIDY5LFxuICAgICAgICA0MixcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAzMyxcbiAgICAgICAgMyxcbiAgICAgICAgMTkxLFxuICAgICAgICA0MixcbiAgICAgICAgMTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgyLFxuICAgICAgICA1MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDc5LFxuICAgICAgICAwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxODgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTA0LFxuICAgICAgICA5MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDMwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjIwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiR0tVVllTQSt5L2cyUWN3VXVkUk9MM1hhOGZvTFdhTjdhT1diY29oblhvcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibFZxVWJlaTZSSHVUamRUNUJrRGtFZ1wiLFxuICBcInBob25lSWRcIjogXCIxMzI3YTMyOC01Y2EyLTRjM2YtYjc1OS0yYzA4MTBhMmY1YjJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE0LFxuICAgICAgNTgsXG4gICAgICAxMTYsXG4gICAgICA2OSxcbiAgICAgIDU1LFxuICAgICAgMjM0LFxuICAgICAgODksXG4gICAgICAxMixcbiAgICAgIDE0MCxcbiAgICAgIDEzNCxcbiAgICAgIDEwMSxcbiAgICAgIDIxOCxcbiAgICAgIDMsXG4gICAgICAxMjQsXG4gICAgICAyNDMsXG4gICAgICAyMDYsXG4gICAgICAyMTAsXG4gICAgICA2NixcbiAgICAgIDIyOSxcbiAgICAgIDE3MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTQsXG4gICAgICAxMjQsXG4gICAgICAxOTQsXG4gICAgICAxMzQsXG4gICAgICAyNTMsXG4gICAgICA4NCxcbiAgICAgIDIwMSxcbiAgICAgIDkyLFxuICAgICAgMSxcbiAgICAgIDg3LFxuICAgICAgMTk0LFxuICAgICAgMTI5LFxuICAgICAgMTQ1LFxuICAgICAgMjI4LFxuICAgICAgOTgsXG4gICAgICA0NCxcbiAgICAgIDE2MixcbiAgICAgIDExMCxcbiAgICAgIDIzNixcbiAgICAgIDI0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHN0o5WjVCNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzQ1NDA1NjcyOjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJOZXJkeSBOaWNrXCIsXG4gICAgXCJsaWRcIjogXCI5ODUzMTA3OTc0MTU1OjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0RNdWFzRUVNdTQ1ck1HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJrYWpsTFk3L0ZVRnkrckZzQWNIY2VJQmNGNzB1dUJuWlJQaHE3WEN3THowPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlVTMmpGOUVhR2JmdWc4RUJ0OG4vTWFHNld4TkQ0UEJpQUwzZklZbko5dFBTSHlwWGJkck1VUmo5SXVER2ExSCtuWWROUVgybkxNZUplRDlXMWV3Q0JBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImlXNTBrSTdDOXZjTnJqUHNDeS9Gdi9XVkxMOGtrSk1MTkRrN0R2azhwS2FKaTdRLzhnVVlqUGZuOHVwVEVCQ05BT1hIbklnNWp6TW0rSVMreHVDMURnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc0NTQwNTY3Mjo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA2MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MjQ1OTAyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
