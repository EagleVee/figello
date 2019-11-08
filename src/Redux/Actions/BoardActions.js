import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  getListBoard: ['id'],
  getListBoardSuccess: ['response'],
  createBoard: ['data', 'onSuccess', 'onFailed'],
  createBoardSuccess: ['response'],
  updateBoard: ['id', 'data'],
  deleteBoard: ['id'],
  getListColumn: ['id'],
  getListColumnSuccess: ['response'],
  createColumn: ['data', 'onSuccess', 'onFailed'],
  updateColumn: ['id', 'data'],
  deleteColumn: ['id']
})

export const BoardTypes = Types

export default Creators
