export type InsuranceType = 'employee' | 'resident' | 'unknown'
export type Actor = 'self' | 'parent'
export type Reason = 'long_term' | 'referral' | 'temporary' | 'emergency' | 'unknown'
export type CareType = 'inpatient' | 'outpatient' | 'chronic'
export type Stage = 'before' | 'hospitalized' | 'discharged'
export type FilingStatus = 'valid' | 'none' | 'unknown'
export type NetworkStatus = 'yes' | 'no' | 'unknown'

export interface UserContext {
  actor: Actor
  insuranceProvince: string
  insuranceCity?: string
  destinationProvince: string
  destinationCity: string
  insuranceType: InsuranceType
  reason: Reason
  careType: CareType
  stage: Stage
  filingStatus: FilingStatus
  networkStatus: NetworkStatus
}

export type PathKey =
  | 'LONG_TERM_PRE'
  | 'REFERRAL_PRE'
  | 'TEMPORARY_PRE'
  | 'EMERGENCY'
  | 'HOSPITALIZED_NO_FILING'
  | 'DISCHARGED_SELF_PAY'

export interface OfficialSource {
  id: string
  authority: string
  title: string
  url: string
  level: 'national' | 'province' | 'city'
  publishedAt?: string
  effectiveFrom?: string
  verifiedAt: string
  reviewIntervalDays: number
  note?: string
}

export interface ActionDefinition {
  id: string
  title: string
  body: string
  kind: 'do' | 'check' | 'warning' | 'contact'
  sourceIds: string[]
  officialUrl?: string
  officialLabel?: string
}

export interface GuidanceResult {
  pathKey: PathKey
  title: string
  summary: string
  steps: ActionDefinition[]
  notices: string[]
  sourceIds: string[]
}
