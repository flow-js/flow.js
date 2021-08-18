module.exports = async cmd => {
  const cd = cmd.command.code
  const inside = cmd.unpack()
  const err = cmd.inside(inside)
  if(err)
    return cmd.error(err)
  const [ data, val, user = cmd.message.author.id ] = inside.splits
  if(cmd.client.variables(data) === undefined)
    return cmd.error(`**ERROR:** \`Variable ${data} not found\` `)
    cmd.client.db.set('main', `${data}_${user}`, val)
  return {
    code: cd.replaceLast(`$setGlobalUserVar${inside}`, '')
 }
}
