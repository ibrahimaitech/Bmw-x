"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "sc", reaction: "🚘", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '*BMW MD REPO*\n\n ' + "*MADE BY IBRAHIM ADAMS*";
    let d =  \n\n '*BOTLINK*\n\nhttps://github.com/kingibrahimtech/Bmw-xmd\n\n ' + " *WACHANNEL*\n\nhttps://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";
    let varmess = z + d;
    var img = 'https://telegra.ph/file/fd124f7e9271111c3bcc1.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *FLASH-MD* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *France King*'
      let varmess=z+d
      var img='https://telegra.ph/file/13d63c21c1a665bfd8324.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
