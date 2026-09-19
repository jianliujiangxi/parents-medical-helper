import { describe, expect, it } from 'vitest'
import { classifyPath } from '../engine/classifier'
import { generateGuidance } from '../engine/path-generator'
import type { UserContext } from '../types/domain'

const base: UserContext = {
  actor:'parent', insuranceProvince:'jiangxi', insuranceCity:'nanchang',
  destinationProvince:'guangdong', destinationCity:'guangzhou', insuranceType:'resident',
  reason:'long_term', careType:'inpatient', stage:'before', filingStatus:'unknown', networkStatus:'unknown'
}

const cases: Array<[string, Partial<UserContext>, string]> = [
 ['长期居住未就医',{},'LONG_TERM_PRE'],
 ['长期居住已有备案',{filingStatus:'valid'},'LONG_TERM_PRE'],
 ['转诊未就医',{reason:'referral'},'REFERRAL_PRE'],
 ['临时就医',{reason:'temporary'},'TEMPORARY_PRE'],
 ['说不清原因',{reason:'unknown'},'TEMPORARY_PRE'],
 ['急诊已住院',{reason:'emergency',stage:'hospitalized',filingStatus:'none'},'EMERGENCY'],
 ['急诊未住院',{reason:'emergency',stage:'before'},'EMERGENCY'],
 ['已住院无备案',{reason:'temporary',stage:'hospitalized',filingStatus:'none'},'HOSPITALIZED_NO_FILING'],
 ['已住院不知道备案',{reason:'long_term',stage:'hospitalized',filingStatus:'unknown'},'HOSPITALIZED_NO_FILING'],
 ['已住院有效备案',{reason:'long_term',stage:'hospitalized',filingStatus:'valid'},'LONG_TERM_PRE'],
 ['已自费出院',{reason:'temporary',stage:'discharged'},'DISCHARGED_SELF_PAY'],
 ['长期居住已出院',{reason:'long_term',stage:'discharged'},'DISCHARGED_SELF_PAY'],
 ['慢特病长期',{careType:'chronic'},'LONG_TERM_PRE'],
 ['普通门诊临时',{reason:'temporary',careType:'outpatient'},'TEMPORARY_PRE'],
 ['职工医保转诊',{insuranceType:'employee',reason:'referral'},'REFERRAL_PRE'],
 ['居民医保转诊',{insuranceType:'resident',reason:'referral'},'REFERRAL_PRE'],
 ['目标医院不联网',{networkStatus:'no'},'LONG_TERM_PRE'],
 ['自己办理',{actor:'self'},'LONG_TERM_PRE'],
 ['不知险种',{insuranceType:'unknown'},'LONG_TERM_PRE'],
 ['非广州目的地',{destinationCity:'shenzhen'},'LONG_TERM_PRE']
]

describe('核心业务路径',()=>{
  for (const [name, patch, expected] of cases) {
    it(name,()=>{
      const ctx={...base,...patch} as UserContext
      expect(classifyPath(ctx)).toBe(expected)
      const result=generateGuidance(ctx)
      expect(result.steps.length).toBeGreaterThan(2)
      expect(result.sourceIds.length).toBeGreaterThan(0)
    })
  }

  it('慢特病必须出现资格核验',()=>{
    const result=generateGuidance({...base,careType:'chronic'})
    expect(result.steps.some(s=>s.id==='CHRONIC_CHECK')).toBe(true)
  })
  it('非联网医院必须出现警告',()=>{
    const result=generateGuidance({...base,networkStatus:'no'})
    expect(result.steps.some(s=>s.id==='NON_NETWORK_WARNING')).toBe(true)
  })
})
