module.exports = async cmd => {
  const code = cmd.command.code
  const val = code.split('$getGlobalUserVar').length -1
  const inside = code.split('$getGlobalUserVar')[val].after()
  const error = cmd.inside(inside)
  
  if(error)
    return func.error(error)
    const [ variable, user = cmd.message.author.id ] = inside.splits
  if(func.client.variables[variable] === undefined)
    return cmd.error(`Error: \`Variable (${variable}) not found!\` `)
    let item = await cmd.client.db.get('main', `${variable}.${user}`)
   if(!item)
     item = { value: cmd.client.variables[variable] }
   return {
     code: code.replaceLast(`$getGlobalUserVar${inside}`, item.value)
  }
}
