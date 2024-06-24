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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_55_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDM0LFxuICAgICAgICA0NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDg0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjEyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDM0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDU2LFxuICAgICAgICAzMyxcbiAgICAgICAgODIsXG4gICAgICAgIDkxLFxuICAgICAgICA1NSxcbiAgICAgICAgODEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjksXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTgyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjM5LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjU0LFxuICAgICAgICA3NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjUzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTA5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDc1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTMsXG4gICAgICAgIDQ4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTcyLFxuICAgICAgICA3NSxcbiAgICAgICAgNzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM0LFxuICAgICAgICA1MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDU0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI0LFxuICAgICAgICAyNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDExLFxuICAgICAgICAxNCxcbiAgICAgICAgMTEwLFxuICAgICAgICA0MixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgODMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1LFxuICAgICAgICA4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDksXG4gICAgICAgIDk3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMixcbiAgICAgICAgODIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDksXG4gICAgICAgIDcyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDYsXG4gICAgICAgIDIwLFxuICAgICAgICA0MixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDM5LFxuICAgICAgICA2NixcbiAgICAgICAgODIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIxR0Z2Rm9ocUpZa2Zlb2prOWd4cktVTk5yUmhvVklOSUNMU1FST2t4d3NZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJqaGpoOFJyR1I2bU0yM3NzRzBXRmlBXCIsXG4gIFwicGhvbmVJZFwiOiBcImEyNDRjY2VhLWFjYmMtNDU5OC1iM2IxLWYwMDhkNzg3M2Y2OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMCxcbiAgICAgIDg1LFxuICAgICAgMTc4LFxuICAgICAgNTMsXG4gICAgICAzNyxcbiAgICAgIDI0MixcbiAgICAgIDE1MCxcbiAgICAgIDE2MixcbiAgICAgIDE4OSxcbiAgICAgIDIwMCxcbiAgICAgIDE2NSxcbiAgICAgIDE2OCxcbiAgICAgIDE5MixcbiAgICAgIDEzLFxuICAgICAgMTAyLFxuICAgICAgODcsXG4gICAgICAxMzksXG4gICAgICA5OCxcbiAgICAgIDExMCxcbiAgICAgIDM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NSxcbiAgICAgIDI0MixcbiAgICAgIDg2LFxuICAgICAgMTY4LFxuICAgICAgMTQwLFxuICAgICAgMTAyLFxuICAgICAgMTExLFxuICAgICAgMTU4LFxuICAgICAgMTgsXG4gICAgICAyNDgsXG4gICAgICAxMzAsXG4gICAgICA3MSxcbiAgICAgIDgzLFxuICAgICAgMTMsXG4gICAgICAyMjMsXG4gICAgICAyMDYsXG4gICAgICA0OCxcbiAgICAgIDE0MSxcbiAgICAgIDk2LFxuICAgICAgMTQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkRGOUpHVzdRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NDU0MDU2NzI6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJOZXJkeSBOaWNrXCIsXG4gICAgXCJsaWRcIjogXCI5ODUzMTA3OTc0MTU1OjEyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09ETXVhc0VFUFhsNXJNR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwia2FqbExZNy9GVUZ5K3JGc0FjSGNlSUJjRjcwdXVCblpSUGhxN1hDd0x6MD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJIUzF4bUsweG93bGNLSFJKK1loZ1lkbEZuYVR4N2VQQm9yTTgydDdneTlyRGw4T2V3cUhGNlRFeDBMZmFyMnd0WHNTZWpJMWNIRGVTSk9ZWFg2K2NEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJnaEpqSEIyWk10Q3UwMXRnWER2eEpOQ3BWOXlNdEw1Z3ZOZVE3dzdMVWxPOEIyTEhoL25Yd0p4L0pvajl2ZCt1TGErOXdCUExubEFHRnJCUS9xVHRBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NDU0MDU2NzI6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDYxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkyNTE3MDUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGL0dcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUYvRy5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
