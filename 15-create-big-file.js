const { writeFileSync } = require('fs')
for (let i = 0; i < 10000; i++) {
  writeFileSync('./content/bigfile.txt', `node tutorials ${i}\n`, { flag: 'a' })
}
