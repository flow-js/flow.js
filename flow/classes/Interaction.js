const Discord = require("discord.js")
const axios = require("axios")
const Snowflake = Discord.SnowflakeUtil
class Interaction {
    constructor(client, data) {
        this.client = client
        this._resolve(data)
    }
    _resolve(data) {
        this.channel = this.client.channels.cache.get(data.channel_id)
        this.guild = this.client.guilds.cache.get(data.guild_id)
        this.member = new Discord.GuildMember(this.client, data.member, this.guild)       
        this.author = new Discord.User(this.client, this.member.user)       
        this.token = data.token       
        this.id = data.id        
        this.type = data.type
        if (this.type === 2) {
            this.command = {
                id: data.data.id, name: data.data.name, description: data.data.description
            }
            this.options = data.data.options
        }
        if (this.type === 3) {
            this.button = {
                customID: data.data.customID, componentType: data.data.componentType
            }
            this.message = new Discord.Message(this.client, data.message, this.channel)
        }
    }
    reply(content, embed, components=[], flags=0, type = 4) {
        if (this.type === 2) {
            try {
                var check;
                let c;
                if (this.client.flow.options.applicationCache) {                 
                    c = this.client.applications.slash.find(x => x.id == this.command.id)                   
                    if (!c) {
                        setTimeout(async () => {
                            let d = await this.client.api.applications(this.client.user.id).guilds(this.guild.id).commands.get()                            
                            d = d.find(x => x.id == this.command.id)                           
                            if (d) {
                                c = {                      
                                    id: d.id,              
                                    name: d.name,
                                    version: d.version,                                 
                                    description: d.description,                      
                                    options: d.options || [],                           
                                    application: this.client,        
                                    guild: this.client.guilds.cache.get(d.guild_id) || null,              
                                    timestamp: Snowflake.deconstruct(d.id)
                                        .timestamp,              
                                    createdAt: Snowflake.deconstruct(d.id)
                                        .date
                                    }
                                 check = "filled";
                                 this.client.applications.slash.set(c.id, c)
                            } else {
                                c = blank;
                                check = blank;
                            } 
                        }, 1000)
                    }
