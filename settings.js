
const fs = require('fs')
const chalk = require('chalk')

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['919037072660'] //ur owner number
global.ownername = "MR H4X" //ur owner name
global.ytname = "YT: H4XMODS" //ur yt chanel name
global.socialm = "GitHub: MUHAMMEDHASHIRM009" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//bot bomdy 
global.ownernomer = "919037072660" //ur number
global.premium = ['919037072660'] //ur premium number
global.botname = 'H4X BOT' //ur bot name
global.linkz = "https://chat.whatsapp.com/" //your theme url which will be displayed on whatsapp
global.websitex = "https://hashir.live" //ur website to be displayed
global.botscript = 'https://github.com/Muhammedhashirm009/CheemsBot-MD6' //script link
global.themeemoji = "š½" //ur theme emoji
global.packname = "Sticker By" //ur sticker watermark packname
global.author = "H4X Bot\n\n\nA whatsapp bot developed by\nš½ H4X HASHIR\n\n\n\n\n\n\n\n       --------______-------\n\n\n\n\n\n\n\nContact No. : +919037072660" //ur sticker watermark author
global.wm = "H4X MODS Inc." //ur watermark

// Other
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''

//messages
global.mess = {
    success: 'Here you go!',
    admin: 'This feature could be used by admins only!',
    botAdmin: 'Bot Must Be Admin First!',
    premime: 'Premium Special Features If You Want to Register Type Rent',
    owner: 'This feature could be used by owner only',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature could be used by bot only',
    wait: 'In process...',
    linkm: 'Where is the link?',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
}

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//adventure1
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}

//adventure2
global.emot = {
role: 'š',
level: 'šļø',
limit: 'š',
health: 'ā¤ļø',
exp: 'š«',
money: 'šµ',
potion: 'š„¤',
diamond: 'š',
common: 'š¦',
uncommon: 'š',
mythic: 'š³ļø',
legendary: 'šļø',
pet: 'š',
trash: 'š',
armor: 'š',
sword: 'āļø',
wood: 'šŖµ',
batu: 'šŖØ',
string: 'šøļø',
horse: 'š',
cat: 'š',
dog: 'š',
fox: 'š¦',
petFood: 'š',
iron: 'āļø',
gold: 'š',
emerald: 'š',
budak: 'š',
busur: 'š¹',
panah: 'š',
kapak: 'šŖ'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
