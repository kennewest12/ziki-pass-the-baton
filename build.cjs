const fs=require('node:fs');
fs.mkdirSync('dist',{recursive:true});
for(const name of ['index.html','style.css','interaction.js']) fs.copyFileSync(name,'dist/'+name);
console.log('Static site built in dist/');
