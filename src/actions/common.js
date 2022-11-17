import {
  START_ACTION,
  END_ACTION
} from '../constants/actionTypes/common'

export const startAction = () => ({ type: START_ACTION })

export const endAction = () => ({ type: END_ACTION })