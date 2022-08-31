let handler = async (m, { conn, usedPrefix }) => {
    let tqto = `*BIG THANKS TO*
    
Terimakasih Utama Nya Teruntuk:
➸ @${`${global.owner[0]}`.split('@')[0]}

Terimakasih Juga Untuk Kang Banned:
➸ @${'0'.split('@')[0]}

──────────────────────
• God
• My Ortu
• Nurutomo
• Adiwajshing
• Ariffb
• Amel
• IrwanX
• Dawnfrosty
• Rteam1
• Beniismael
• Raditya 
• AlyaaXzy  
• David
• Rozi
• Letta
• Yanzz
• Furqan
• Elyas
• Rasel
• Xteam
• Khael
• Atenabot
• Baka Botz
• KrizynOfc
• ZeeoneOfc
• Zeks
• Rendycraft  
• Nadin
• Mursid
• Jarot
• Tio
• Aca Mirabel
• Rlxfly
• Penyedia Layanan API
• Orang-orang yang Berdonasi
──────────────────────`
await conn.sendButtonLoc(m.chat, await conn.resize('https://telegra.ph/file/0e265e801d892a340e877.png', 300, 300),  tqto, `Ini Ucapan Terima Kasih Untuk Orang Nya Telah Berpatisipasi

Official By @${'0'.split('@')[0]}`, 'Rules', '.rules', m)
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(credits?|thanks?to|tqto|ttq)$/i

module.exports = handler
