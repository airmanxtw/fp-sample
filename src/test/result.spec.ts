import { describe, it, expect } from 'vitest'
import { useResult } from '@/composables/sampleMonads/useResult'

describe('test Monads', () => {
  const { FV, decision } = useResult()
  it('test FV', () => {
    expect(FV(1000, 0.1, 1).unwrap()).equal(1100)
  })
  it('test FV error', () => {
    expect(FV(-1000, 0.1, 1).unwrapErr()).equal('本金不可為負值')
  })
  it('test decision', () => {
    //期初本金20000，年利率5%，20年後是否能達到30000
    expect(
      FV(20000, 0.05, 20)
        .map((fv) => decision(fv, 30000))
        .unwrap()
    ).equal(true)
  })
  it('test decision error', () => {
    expect(
      FV(-1000, 0.05, 1)
        .map((fv) => decision(fv, 30000))
        .unwrapErr()
    ).equal('本金不可為負值')
  })
})
