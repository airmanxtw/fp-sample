import axios from 'axios'
import * as R from 'ramda'
import { type Result, Ok, Err } from '@sniptt/monads'

export const useAxios = () => {
  // const instance = axios.create({
  //   baseURL: 'https://jsonplaceholder.typicode.com/',
  //   timeout: 1000,
  //   transformResponse: [(res) => res.data]
  // })

  const add = async (a: number, b: number) => {
    if (a < 0 || b < 0) {
      throw 'Negative numbers not allowed'
    } else return a + b
  }

  const test = R.tryCatch(
    (a, b) => add(a, b),
    () => 0
  )

  return { test }
}
