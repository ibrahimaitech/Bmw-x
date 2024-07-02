const {zokou} = require("../framework/zokou");
const Genius = require('genius-lyrics');
const Client = new Genius.Client('jKTbbU-6X2B9yWWl-KOm7Mh3_Z6hQsgE4mmvwV3P3Qe7oNa9-hsrLxQV5l5FiAZO');
zokou({
  'nomCom': "poll",
  'reaction': '✨',
  'categorie': 'General'
}, async (_0x5a4d4d, _0x16f255, _0x402e13) => {
  const {
    repondre: _0x1836fc,
    arg: _0xbbe59a,
    ms: _0x4e27cd
  } = _0x402e13;
  const _0x3f8e60 = _0xbbe59a.join(" ");
  let [_0x25de5d, _0x2c7cdb] = _0x3f8e60.split('|');
  if (_0x3f8e60.split('|') < 0x2) {
    return _0x1836fc("Incorrect format.\nExample: poll what is 1+1|2, 3, 4");
  }
  let _0x138942 = [];
  for (let _0x4bd5f6 of _0x2c7cdb.split(',')) {
    _0x138942.push(_0x4bd5f6);
  }
  await _0x16f255.sendMessage(_0x5a4d4d, {
    'poll': {
      'name': _0x25de5d,
      'values': _0x138942
    }
  });
});
france({
  'nomCom': "lyrics",
  'reaction': '✨',
  'categorie': "Search"
}, async (_0x1e8a17, _0x2962df, _0x3c93ee) => {
  const {
    repondre: _0x2bfd48,
    arg: _0x24d98d,
    ms: _0x19bace
  } = _0x3c93ee;
  try {
    if (!_0x24d98d || _0x24d98d.length === 0x0) {
      return _0x2bfd48("please provide me the song name");
    }
    const _0x2d4997 = _0x24d98d.join(" ");
    const _0x3aa87f = await Client.songs.search(_0x2d4997);
    const _0x494182 = _0x3aa87f[0x0];
    const _0xfefb6f = await _0x494182.lyrics();
    await _0x2962df.sendMessage(_0x1e8a17, {
      'text': _0xfefb6f
    }, {
      'quoted': _0x19bace
    });
  } catch (_0x5bcd73) {
    reply("I did not find any lyrics for " + text + ". Try searching a different song.");
    console.log(_0x5bcd73);
  }
});
