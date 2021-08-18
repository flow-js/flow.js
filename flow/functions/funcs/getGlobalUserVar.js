module.exports = async cmd => {
  const cd = cmd.command.code
  const s = code.split('$getGlobalUserVar').length -1
  const inside = code.split('$getGlobalUserVar')[s].after()
  const err = cmd.inside(inside)
  
  if(error)
    return cmd.error(err)
    const [ data, user = cmd.message.author.id ] = inside.splits
  if(cmd.client.variables[data] === undefined)
    return cmd.error(`**Error:** \`Variable (${data}) not found!\` `)
    let item = await cmd.client.db.get('main', `${data}_${user}`)
   if(!item)
     item = { value: cmd.client.variables[data] }
   return {
     code: cd.replaceLast(`$getGlobalUserVar${inside}`, item.value)
  }
}
