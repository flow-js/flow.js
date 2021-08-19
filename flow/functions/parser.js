const Parser = {
  // VARIABLE
  $setServerVar: 'Set value of a server Variable;$setServerVar[variable name;variable value;guildID/serverID (optional)]',
  $getServerVar: 'Get value of a server Variable;$getServerVar[variable name;guildID/serverID (optional)]',
  $setUserVar: 'Set value of a user Variable;$setUserVar[variable name;variable value;userID (optional)]',
  $getUserVar: 'Get value of a user Variable;$getUserVar[variable name;userID (optional)]',
  $setGlobalUserVar: 'Set value of a global user Variable;$setGlobalUserVar[variable name;variable value;userID (optional)]',
  $getGlobalUserVar: 'Get value of a global user Variable;$getGlobUserVar[variable name;userID (optional)]',
  // EMBED
  $description: 'Set embed Description;$description[text]',
  $title: 'Set embed Title;$title[text;link]',
  // GENERAL
  $message: 'Return what the author said;$message[argument number (optional)]',
  $ping: 'Return database current ping;$ping',
  $eval: 'Evaluating code, useable for testing;$eval[code;return code (yes/no)]',
  
}
