let handler = async (m, { conn, usedPrefix: _p }) => {


let buttonMessage= {
'document':{'url': 'http://s.id/0x404' },
'mimetype': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
'fileName': `「🪄🎈𝜜𝜞𝜬𝜢𝜜🎈🪄」`,
'fileLength': 9999999999999,
'pageCount': 200,
'contextInfo':{
'forwardingScore':200,
'isForwarded':true,
'externalAdReply':{
'mediaUrl': 'http://github.com/@lpha/wa-bot',
'mediaType': 2,
'previewType': 'pdf',
'title': 'anthada repo link veno?',
'body': me,
'thumbnail': thumb2,
'sourceUrl': 'https://www.youtube.com/awww shit'}},
'caption': 'http://github/@lpha/wa-bot',
'footer': me,
'buttons':[
{'buttonId': _p + 'menu','buttonText':{'displayText':'ᴍᴇɴᴜ'},'type':1},
{'buttonId': _p + 'runtime','buttonText':{'displayText':'ʀᴜɴᴛɪᴍᴇ'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted: m })

}

handler.command = /^(sc)$/i

export default handler
