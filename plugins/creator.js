function handler(m) {
  
  const kontak = {
	"displayName": 'My owner',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${conn.getName('62895627514070')}\nitem1.TEL;waid=62895627514070:62895627514070\nitem1.X-ABLabel:Busy.\nURL;My Web: https://Ahsijwij\nEMAIL;Email Owner: Han\nORG: NOT A BOT + NO SAVE\nTEL;My number bot;waid=6287845646738:6287845646738\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
