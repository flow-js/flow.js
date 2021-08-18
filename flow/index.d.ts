import { Client } from 'discord.js'; // IMPORTING DATA FOR DISCORDBOT
import { EventEmitter } from 'events'; // IMPORTING DATA FOR EVENTS

export class Events {
  constructor(client: Client, emitter: EventEmitter);

client: Client; // USED BOT
event: EventEmitter; // USED EVENT
commands: Interfaces.Command[]; // USED COMMANDS

listen(name: string): void;
command(command: Interfaces.Command): void;
}

export namespace Interfaces {

  interface Options {
    token: string;
    prefix: string[] | string | string();
    mobile?: boolean;
    database?: object;
    databasePath?: string;
    connectedBots?: boolean;
    dbhToken?: boolean;
    suppressAll?: boolean;
    errorMessage?: string;
    sharding?: boolean;
    autoUpdate?: boolean;
    shardAmount?: number;
    fetchInvites?: boolean
    youtubeCookie?: string;
    typingStopEvent?: boolean;
    disabledFunctions?: string[];
    disabledFunctionsStarting?: string[];
    boosterToken?:string;
  }
  interface Path {
    path: string;
    debug: boolean;
  }
  interface Command {
    code: string;
    channel: string;
  }
  interface Slash {
    name: string;
    code: string;
  }
  interface Normal {
    name: string;
    code: string;
    prefixes?: boolean;
    aliases?: string[] | string | string();
    description?: string;
  }
  interface Loop {
    code: string;
    time: number;
    channel: string;
    executeOnStartup?: boolean;
  }
  interface Message {
    guildOnly: boolean;
    respondToBots: boolean;
  }
  interface Status {
    type: string;
    text: string;
    time: number;
    url?: string;
  }
}

export class Bot {

  constructor(options: Interfaces.Options);

  client: Client;

  paths: Interfaces.Path[];

  variables(variables: object): void;

  status(status: Interfaces.Status): void;

  createCustomEvent(emitter: EventEmitter): CustomEvent;

  loadCommands(path: string, debug?: boolean): Promise<void>;

  createLavalinkConnection(url: "example.com", password: string, debug?: boolean, useSecureProtocol?: boolean): void;

onJoined();
onLeave();


onMessage(options: Interfaces.Message): void;

  command(command: Interfaces.Normal): void;
  loopCommand(command: Interfaces.Loop): void;
  interactionCommand(command: Interfaces.Slash): void;
  joinCommand(command: Interfaces.Command): void;
  leaveCommand(command: Interfaces.Command): void;
  readyCommand(command: Interfaces.Command): void;
  timeoutCommand(command: Interfaces.Command): void;
