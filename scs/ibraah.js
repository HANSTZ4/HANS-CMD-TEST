"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "ibrahim", reaction: "🧒", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '*Yes you called me whats up Ok anyway support me by following my channel and fork my repo on my github link* 🙏 \n\n ' + "║❒ 𝙒𝘼𝘾𝙃𝘼𝙉𝙉𝙀𝙇 https://whatsapp.com/channel/0029VajweHxKQuJP6qnjLM31";
    let d = '                                                     ║❒ https://wa.me/message/R4N3KQOD7APXD1';
    let varmess = z + d;
    var mp4 = 'https://i.imgur.com/lfqWcEv.jpeg';
    await zk.sendMessage(dest, { video: { url: mp4 }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");

zokou({ nomCom: "hans", reaction: "🚀", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '𝒀𝒆𝒔😉 𝑨𝒎 HANS 𝑴𝑫 𝑨 𝑾𝒉𝒂𝒕𝒔𝒂𝒑𝒑 𝑩𝒐𝒕 𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 HansTz\n\n ' + "𝑰𝒇 𝒚𝒐𝒖 𝒘𝒂𝒏𝒕 𝒕𝒐 𝒖𝒔𝒆 𝒎𝒆 𝒋𝒖𝒔𝒕 𝒕𝒚𝒑𝒆 𝒎𝒆𝒏𝒖 𝒕𝒐 𝒄𝒐𝒎𝒎𝒂𝒏𝒅 𝒎𝒆";
    let d = '                                                🏁𝑨𝒎 𝒕𝒉𝒆 𝒇𝒂𝒔𝒕𝒆𝒔𝒕 𝒃𝒐𝒕 𝒊𝒏 𝒕𝒉𝒆 𝒘𝒐𝒓𝒍𝒅';
    let varmess = z + d;
    var mp4 = 'https://i.imgur.com/lfqWcEv.jpeg';
    await zk.sendMessage(dest, { video: { url: mp4 }, caption: varmess });
    //console.log("montest")
    
});
console.log("mon test");
