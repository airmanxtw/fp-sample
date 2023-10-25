import { type Result, Ok, Err } from '@sniptt/monads'

export const useResult = () => {
  // 複利計算公式
  const FV = (PV: number, R: number, n: number): Result<number, string> =>
    PV < 0
      ? Err('本金不可為負值')
      : R < 0 || R > 1
      ? Err('利率必須介於0~1之間')
      : n < 0
      ? Err('期數不可為負值')
      : Ok(PV * Math.pow(1 + R, n))

  // 評估是否完成目標
  const decision = async (FV: number, price: number): Promise<Result<boolean, string>> =>
    Ok(FV > price)

  return { FV, decision }
}
