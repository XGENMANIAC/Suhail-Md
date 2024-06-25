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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_30_06_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDcsXG4gICAgICAgIDcxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTk1LFxuICAgICAgICA2MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjksXG4gICAgICAgIDU3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExMixcbiAgICAgICAgODAsXG4gICAgICAgIDcwLFxuICAgICAgICAxLFxuICAgICAgICA1NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAwLFxuICAgICAgICA1MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDk1LFxuICAgICAgICA3NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDU4LFxuICAgICAgICA1MixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDkzLFxuICAgICAgICAxODcsXG4gICAgICAgIDUxLFxuICAgICAgICAzMCxcbiAgICAgICAgODcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUzLFxuICAgICAgICA1MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODcsXG4gICAgICAgIDMzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDMsXG4gICAgICAgIDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDMwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTcsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDM0LFxuICAgICAgICAyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1LFxuICAgICAgICAzMixcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDk3LFxuICAgICAgICA2NyxcbiAgICAgICAgODEsXG4gICAgICAgIDY0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTEzLFxuICAgICAgICA2MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNixcbiAgICAgICAgNDQsXG4gICAgICAgIDc2LFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzksXG4gICAgICAgIDExLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAzNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDcxLFxuICAgICAgICAyMixcbiAgICAgICAgMTE4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDY4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjM2LFxuICAgICAgICA4MCxcbiAgICAgICAgODIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5LFxuICAgICAgICA3MixcbiAgICAgICAgMjQzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTIzLFxuICAgICAgICA0NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTYwLFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOCxcbiAgICAgICAgNjksXG4gICAgICAgIDYwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDU1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTk1LFxuICAgICAgICA3NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAzOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDc1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTI0LFxuICAgICAgICA0NixcbiAgICAgICAgMixcbiAgICAgICAgNTgsXG4gICAgICAgIDM4LFxuICAgICAgICA2MixcbiAgICAgICAgMjE2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJsMDczU0Y4WXU2YnVJUVZYS3R1NlhFR21iOVN0UDBxOEZCRWtQaXM2NFYwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc0NTQwNTY3MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNURBMjIwNzVFNTAwODBBNzhGOThBRTQ4NEVCQkQyMkNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5Mjg2MjI4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInlsal9xVWFyU3o2RjlUeTFRTkdSYXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGY0NDI2NDUtYjNhZC00NDA0LWFkZjYtNGNjMjY3NGQ4YTFiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOSxcbiAgICAgIDE5LFxuICAgICAgMjEzLFxuICAgICAgMTQwLFxuICAgICAgMTYxLFxuICAgICAgMTY2LFxuICAgICAgNDYsXG4gICAgICAyMDMsXG4gICAgICAyMTAsXG4gICAgICA1MCxcbiAgICAgIDExLFxuICAgICAgMTY2LFxuICAgICAgMjU0LFxuICAgICAgMjA1LFxuICAgICAgMjUwLFxuICAgICAgMjAsXG4gICAgICAyNDAsXG4gICAgICAyNixcbiAgICAgIDEwOSxcbiAgICAgIDIzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NCxcbiAgICAgIDIwNyxcbiAgICAgIDQ4LFxuICAgICAgMjEzLFxuICAgICAgNSxcbiAgICAgIDI1MyxcbiAgICAgIDQ4LFxuICAgICAgNjYsXG4gICAgICAyNTUsXG4gICAgICAxNDYsXG4gICAgICAzOSxcbiAgICAgIDEyNCxcbiAgICAgIDE1NyxcbiAgICAgIDIzNyxcbiAgICAgIDcwLFxuICAgICAgOTgsXG4gICAgICAxNTgsXG4gICAgICAxOTQsXG4gICAgICAxODAsXG4gICAgICA5MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWRFg1WUZQNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzQ1NDA1NjcyOjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTmVyZHkgTmlja1wiLFxuICAgIFwibGlkXCI6IFwiOTg1MzEwNzk3NDE1NToxM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPRE11YXNFRU12ejZMTUdHQWdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImthamxMWTcvRlVGeStyRnNBY0hjZUlCY0Y3MHV1Qm5aUlBocTdYQ3dMejA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTDZzWW5yMUtoeWgybC83NnJvdjBMczFEZUFTdlJsYTJOdVlyL3lRRHViOXh3RE5RRUtKbzhVRnN2MU1KdDBlaU5QbUhmeU8xUHBoWGVKNFptRnBUQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNGd5RG96VU9qK29RcDcxaWNWd2Y4eWZta1EyVDVVcE0wTUFad2JnUlJKdWo4S2FscXVBNmhBNkxvVGR0SWRoSG45Wm1FVUkzOHNEbWMwS21IN3FZakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzQ1NDA1NjcyOjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA2MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5Mjg2MjIzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRi9HXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGL0cuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
