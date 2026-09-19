export const GUIDES: Record<string, {title:string; description:string; points:string[]; query:Record<string,string>}> = {
  'jiangxi-guangzhou-inpatient': {
    title:'江西医保老人去广州住院怎么办？', description:'最简单的顺序是：先查备案 → 按实际情形备案 → 查目标医院是否联网 → 持医保码/社保卡就医。具体待遇看江西参保地政策。',
    points:['先查询现有异地就医备案是否有效。','没有有效备案时，按老人真实情况选择长期居住、转诊或临时外出等备案类型。','通过国家医保官方渠道确认目标医院支持跨省住院直接结算。','入院时主动说明参保地并要求按跨省医保结算流程办理。','报销比例、起付线等不要用网上通用数字代替江西参保地规则。'],
    query:{reason:'long_term',careType:'inpatient',stage:'before',filingStatus:'unknown'}
  },
  'hospitalized-without-filing': {
    title:'已经在外省住院，却没办异地备案怎么办？', description:'如果仍未出院，先确认医院是否为跨省联网定点，再尽快在出院结算前补备案，并让医院医保办重新核验。',
    points:['先确认所在医院是否支持对应跨省住院直接结算。','如果还没出院，尽快通过官方渠道补办异地备案。','备案完成后联系医院医保办重新核验，不要等到最后一刻。','若系统仍无法结算，先让医院明确失败原因，再联系参保地医保经办机构。'],
    query:{reason:'temporary',careType:'inpatient',stage:'hospitalized',filingStatus:'none'}
  },
  'cross-province-emergency': {
    title:'老人在外省突然急诊，医保怎么办？', description:'急诊抢救先就医。国家规则明确异地急诊抢救人员视同已备案，但具体急诊标识和结算由医疗机构与医保系统确认。',
    points:['不要为了先办备案耽误急诊救治。','就诊/入院时主动说明异地医保身份并出示医保码或社保卡。','向医院医保办确认系统是否按急诊情形上传并能否直接结算。','结算异常时再联系参保地医保经办机构核验待遇和业务状态。'],
    query:{reason:'emergency',careType:'inpatient',stage:'hospitalized',filingStatus:'none'}
  },
  'discharged-self-pay': {
    title:'老人已经自费出院，异地医保还能怎么办？', description:'先保存完整票据和医疗资料，再按江西具体参保统筹地区规则确认手工/零星报销资格、材料、时限和渠道。',
    points:['保存收费票据、费用清单、出院记录等资料。','不要根据第三方文章判断“一定能报”或固定比例。','通过江西医保官方渠道找到参保地具体办理规则。','必要时联系参保地医保经办机构确认材料、时限和办理方式。'],
    query:{reason:'temporary',careType:'inpatient',stage:'discharged',filingStatus:'none'}
  }
}
