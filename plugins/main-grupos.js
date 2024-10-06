let handler = async (m, { conn, participants, groupMetadata, args }) => {

const pp = 'https://i.ibb.co/998wMjg/Sylph.jpg';

let text = `

≡ *Grupos oficiales De Ventas*

┌─⊷ *N.1*

│ https://chat.whatsapp.com/HAt711AdgXFG1BI9FIACKr

└───────────

`.trim()

conn.sendFile(m.chat, pp, 'staff.png', text, m, false, { mentions: [m.sender] })

}

handler.help = ['cuentas']

handler.tags = ['main']

handler.command = ['cuentas', 'grupos', 'group'] 

export default handler