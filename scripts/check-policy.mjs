import fs from 'node:fs'
const sources=JSON.parse(fs.readFileSync(new URL('../data/sources.json',import.meta.url),'utf8'))
const today=new Date('2026-09-19T00:00:00+08:00')
let failed=false
for(const s of sources){
  const verified=new Date(`${s.verifiedAt}T00:00:00+08:00`)
  const age=Math.floor((today-verified)/86400000)
  const status=age>s.reviewIntervalDays?'OVERDUE':'OK'
  console.log(`${status.padEnd(8)} ${s.id.padEnd(28)} ${age} days`)
  if(status==='OVERDUE') failed=true
}
if(failed){console.error('有官方来源超过复核周期，请先核验再发布。');process.exit(1)}
