const {zokou} =require("../framework/zokou");
const axios =require("axios");


zokou({ nomCom: "mix",
        reaction: "🎶",
        categorie: "Search" }, async (dest, zk, commandeOptions) => {
    
    const { repondre, arg, ms } = commandeOptions;  
        
   try {

    if (!arg || arg.length === 0) return repondre("Where is the name of musique");

    let  result  = await axios.get(`https://api.maher-zubair.tech/search/lyrics?q=${arg.join(' ')}`);

    let lyrics = result.data.data;

    if (lyrics.error) return repondre("no lyrics found");

    let msg = `---------𝑩𝒎𝒘-𝒎𝒅-𝒍𝒚𝒓𝒊𝒄𝒔---------

* *Artist :* ${lyrics.artist}


* *Title :* ${lyrics.title}


${lyrics.lyrics}`

    zk.sendMessage(dest,{image : { url : './media/lyrics-img.jpg'} , caption : msg}, { quoted : ms });
    
   } catch (err) {
       repondre('Sorry i didnt find that song')
   }
        })

            
Zokou({'nomCom': "lyrics",
  reaction: '📂',
  categorie: "Search"
}, async (dest, zk, commandeOptions) => {
  const { repondre, arg, ms } = commandeOptions;
  try {
    if _0x47ee56.join(" ");
    const _0x19a972 = await Client.songs.search(_0x2d6993);
    const _0x349a1c = _0x19a972[0x0];
    const _0x3e8204 = await _0x349a1c.lyrics();
    await _0x24921b.sendMessage(_0x16b585, {
      'text': _0x3e8204
    }, {
      'quoted': _0x26dbd3
    });
  } catch (_0xe736b5) {
    reply("I did not find any lyrics for " + text + ". Try searching a different song.");
    console.log(_0xe736b5);
  }
});

