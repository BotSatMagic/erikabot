let handler = async (m, { conn, command, text }) => {
conn.reply(m.chat, `
*â¤ï¸â¤ï¸ ð®ð¦ð¥ðªð¥ð°ð³ ð¥ð¦ ð¢ð®ð°ð³ â¤ï¸â¤ï¸*
*El amor de ${text} por ti es de* *${Math.floor(Math.random() * 100)}%* *de un 100%*
*Deberias pedirle que sea tu  novio/a Â¡para que sean felices! uwu *
`.trim(), m, m.mentionedJid ? {
contextInfo: {
mentionedJid: m.mentionedJid
}} : {})}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(love)$/i
export default handler
