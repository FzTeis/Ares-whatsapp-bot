const linkRegex = /(https?:\/\/[^\s]+)/gi

export async function before(m, { conn, isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return !0
  if (!m.isGroup) return !1
  let chat = global.db.data.chats[m.chat]
  let bot = global.db.data.settings[this.user.jid] || {}
  const isLink = linkRegex.test(m.text)

  if (isLink && !isAdmin) {
    if (isBotAdmin) {
      await conn.reply(m.chat, `*≡ Enlace Detectado* No permitimos enlaces en este grupo lo siento *@${m.sender.split('@')[0]}* serás expulsado del grupo`, null, { mentions: [m.sender] })
      await conn.sendMessage(m.chat, { delete: m.key })
      await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    } else {
      await conn.reply(m.chat, `*≡ Enlace Detectado* No permitimos enlaces en este grupo lo siento *@${m.sender.split('@')[0]}*`, null, { mentions: [m.sender] })
    }
  }
  return !0
}