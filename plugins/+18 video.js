import util from 'util'
import path from 'path'
import fs from 'fs'

let caption = `
π₯΅π₯π₯π₯π₯
`.trim()

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[βππππβ] π»πΎπ π²πΎπΌπ°π½π³πΎπ +π·πΎ π΄πππ°π½ π³π΄ππ°π²ππΈππ°π³πΎπ π΄π½ π΄πππ΄ πΆπππΏπΎ, ππΈ π΄π π°π³πΌπΈπ½ π π³π΄ππ΄π° π°π²ππΈππ°ππ»πΎπ πππ΄ π΄π» π²πΎπΌπ°π½π³πΎ #enable modohorny*' 

let video = fs.readFileSync(`./videos/${pickRandom(['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42'])}.mp4`)

     conn.sendFile(m.chat, video, '1.mp4', caption, m)
}
handler.help = ['xvideo']
handler.tags = ['xvideo']
handler.command = /^video|vΓ­deo$/i

export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
