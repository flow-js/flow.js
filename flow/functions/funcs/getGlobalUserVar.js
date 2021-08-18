module.exports = async func => {
  const code = func.command.code
  const r = code.split('$getGlobalUserVar').length -1
  const inside = code.split('$getGlobalUserVar')[r].after()
  const error = func.inside(inside)
  
  if(error)
    return func.error(error)
    const [ variable, user = func.message.author.id ] = inside.splits
  if(func.client.variables[variable] === undefined)
    return func.error(`Error: \`Variable (${variable}) not found!\` `)
    let item = await func.client.db.get('main', `${variable}_${user}`)
   if(!item)
     item = { value: func.client.variables[variable] }
   return {
     code: code.replaceLast(`$getGlobalUserVar${inside}`, item.value)
  }
}
