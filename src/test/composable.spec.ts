import { describe, it, expect } from 'vitest'
import { useMonads } from '@/composables/sampleMonads/useMonads'
import { useAxios } from '@/composables/sampleMonads/useAxios'
describe('test Monads', () => {
  const { bmi, evaluateCond, bmiEvaluate } = useMonads()
  const { test } = useAxios()
  it('test bmi', () => {
    expect(bmi(173, 45).unwrap()).equal(15.035584215977813)
  })
  it('test evaluateCond', () => {
    expect(evaluateCond(15.035584215977813)).equal('體重過輕')
  }),
    it('test bmiEvaluate', () => {
      expect(bmiEvaluate(173, 45).unwrap()).equal('體重過輕')
    })
  it('test test', async () => {
    const value = await test(1, 2)
    expect(value).equal(3)
  })
})
