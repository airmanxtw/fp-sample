import { type Result, Ok, Err } from '@sniptt/monads'
export const useMonads = () => {
  //計算bmi
  const bmi = (h: number, w: number): Result<number, string> =>
    h <= 0 || w <= 0 || h > 300 || w > 500
      ? Err(`身高及體重值有異常：h:${h}, w:${w}}`)
      : Ok(w / Math.pow(h / 100, 2))

  return { bmi }
}
