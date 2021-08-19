const discord = require('discord.js');
const axios = require('axios');
const db = require('dbdjs.db');
const { EventEmitter } = require('evemts');
const API = require('../booster.js');

const shardClient = require('../others/shard_client.js');
const client = new discord.Client({
  partials: ['CHANNEL', "GUILD_MEMBER', 'MESSAGE','USER', 'REACTION'],   
});

client.ytSearch= new Worker pool(
  0,
  {
    filename: require.resolve('../others/ytSearch');
  },
  (meta, id, status) => {
    if(!status) {
      if(meta.message)
        return
        return Error(meta);
    }
    if(meta.duration) {
      meta.duration.toString = () => {
         return toDuration(meta.duration.seconds);
         };
       } else if(Array.isArray(meta.videos)) {
         let v = 0;
         while(v < meta.videos.length) {
           const vid = meta.videos[v++];
           if(vid.duration) {
             vid.duration.toString = () => {
               return toDuration(vid.duration.seconds);
             };
           }
         }
       }
    }
  );
