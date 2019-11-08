import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'
import { BoardTypes } from '../Actions/BoardActions'

export const INITIAL_STATE = Immutable({
  listBoard: [],
  listColumn: []
})

export const getListBoardSuccess = (state, action) => {
  const { data } = action.response
  return state.merge({
    listBoard: data
  })
}

export const getListColumnSuccess = (state, action) => {
  const { data } = action.response
  return state.merge({
    listColumn: data
  })
}

export const reducer = createReducer(INITIAL_STATE, {
  [BoardTypes.GET_LIST_BOARD_SUCCESS]: getListBoardSuccess,
  [BoardTypes.GET_LIST_COLUMN_SUCCESS]: getListColumnSuccess
})
