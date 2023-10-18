import { describe, it, expect } from 'vitest'
import { useMonads } from '@/composables/sampleMonads/useMonads'
describe('test Monads', () => {
  const { bmi } = useMonads()
  it('bmi', () => {
    expect(bmi(173, 45).unwrap()).equal(15.035584215977813)
  })
})
