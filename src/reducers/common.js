import {
  START_ACTION,
  END_ACTION
} from '../constants/actionTypes/common'

const INITIAL_STATE = {
  loading: false,
  msg: ''
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case START_ACTION:
      console.log("started action")
      return {
        ...state,
        loading: true
      }
    case END_ACTION:
      console.log('ended action')
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}
