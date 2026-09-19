import fs from 'node:fs'
const sources=JSON.parse(fs.readFileSync(new URL('../data/sources.json',import.meta.url),'utf8'))
let bad=0
for(const s of sources){
  try{
    const controller=new AbortController(); const timer=setTimeout(()=>controller.abort(),10000)
    const res=await fetch(s.url,{redirect:'follow',signal:controller.signal,headers:{'user-agent':'parents-medical-helper-link-check/0.1'}})
    clearTimeout(timer)
    console.log(`${String(res.status).padEnd(4)} ${s.id} ${s.url}`)
    if(res.status>=400) bad++
  }catch(e){console.warn(`WARN ${s.id} ${e.message}`)}
}
if(bad){process.exit(1)}
