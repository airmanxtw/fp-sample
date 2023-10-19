import { describe, it, expect } from 'vitest'
import { useMonads } from '@/composables/sampleMonads/useMonads'
describe('test Monads', () => {
  const { bmi, evaluateCond, evaluate, bmiEvaluate } = useMonads()
  it('test bmi', () => {
    expect(bmi(173, 45).unwrap()).equal(15.035584215977813)
  })
  it('test evaluateCond'),
    () => {
      expect(evaluateCond(15.035584215977813)).equal('體重過輕')
    }
  it('test bmiEvaluate'),
    () => {
      expect(bmiEvaluate(173, 45).unwrap()).equal('體重過輕')
    }
})
