import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk' 
import { fileURLToPath } from 'url' 
import yts from 'yt-search' 
import fg from 'api-dylux'
import fs from 'fs'
global.owner = [
  ['593968058145', "Joel", true],
  ['573142051545', "Soporte", true],
  ['50557865603', "Asistencia Piña", true],
  ['5212431268546', "Im Fz", true],
  ['5215534215245', "LAn", true]
  ];
 //número del owner
    


global.mods = ['5212431268546']
global.prems = ['50489079501', '573143917092']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'm2XBbNvz' //-- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = 'Ares | WhatsApp bot' 
global.author = 'Brawl Comunity and Fz ~' 

//--info FG
global.wm = 'Ares | WhatsApp bot';
global.botName = 'Ares'
global.fgig = 'https://instagram.com/fg98_ff'
global.fgsc = 'https://github.com/FG98F/dylux-fg' 
global.fgyt = 'https://youtube.com/fg98f'
global.fgpyp = 'https://paypal.me/fg98f'
global.fglog = 'https://qu.ax/yyRTQ.jpg' 
global.fs = fs
//--- Grupos WA
global.id_canal = '120363316151291984@newsletter' //-ID de canal de WhatsApp
global.fgcanal = 'https://whatsapp.com/channel/0029VaCeuZd6mYPQiWqxXj1F'
global.bgp = 'https://chat.whatsapp.com/BESBo5xjvIZE4YVvth6Yzr'
global.bgp2 = 'https://chat.whatsapp.com/I7bvd8XCAOUHjgkHteqFC7'
global.bgp3 = 'https://chat.whatsapp.com/F0JTTyZ3hsoL7OlU8TEpuH' //--GP NSFW
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: wm, orderTitle: 'Bang', thumbnail: fs.readFileSync('./src/Menu2.jpg'), sellerJid: '0@s.whatsapp.net'}}}
global.wait = '⌛ _Cargando..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 
global.yts = yts
global.fg = fg
global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
