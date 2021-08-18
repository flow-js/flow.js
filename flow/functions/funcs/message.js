module.exports = cmd => {
  let code = cmd.command.code
  const inside = cmd.unpack()
  if(inside.inside) {
    let arguments = inside.inside
    if (["last", ">"].includes(arguments.addBrackets()))
       arguments = cmd.args.length
    if (isNaN(arguments)) {
       return cmd.error(`Function \`(${cmd.func})\` Error: \`Invalid number in ${inside}\` `)
       code = code.replaceLast(`$message${inside}`, cmd.args[Number(arguments) - 1] ? cmd.args[Number(arguments) - 1].deleteBrackets() : '')  
  } else {
       code = code.replaceLast('$message', cmd.args.join(' ').deleteBrackets())
  }
    return {
       code: code
  }
}
