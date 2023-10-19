import { type Result, Ok, Err } from '@sniptt/monads'
import * as R from 'ramda'
export const useMonads = () => {
  //計算bmp，使用例外抛出，不使用monads
  const bmiThrow = (h: number, w: number): number => {
    if (h <= 0 || w <= 0 || h > 300 || w > 500) {
      throw new Error(`身高及體重值有異常：h:${h}, w:${w}}`)
    }
    return w / Math.pow(h / 100, 2)
  }

  //計算bmi
  const bmi = (h: number, w: number): Result<number, string> =>
    h <= 0 || w <= 0 || h > 300 || w > 500
      ? Err(`身高及體重值有異常：h:${h}, w:${w}}`)
      : Ok(w / Math.pow(h / 100, 2))

  //評估公式
  const evaluateCond = R.cond([
    [(v: number) => v < 18.5, R.always('體重過輕')],
    [(v: number) => v < 24, R.always('正常範圍')],
    [(v: number) => v < 27, R.always('過重')],
    [(v: number) => v < 30, R.always('輕度肥胖')],
    [(v: number) => v < 35, R.always('中度肥胖')],
    [R.T, R.always('重度肥胖')]
  ])

  //評估bmi結果
  const evaluate = (bmi: Result<number, string>): Result<string, string> =>
    bmi.isOk() ? Ok(evaluateCond(bmi.unwrap())) : Err(bmi.unwrapErr())

  //bmi計算器
  const bmiEvaluate = R.pipe(bmi, evaluate)

  return { bmiThrow, bmi, evaluateCond, evaluate, bmiEvaluate }
}
