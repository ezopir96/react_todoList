import { CREATE_TODOITEM_TYPE, DELETE_TODOITEM_TYPE, TOGGLE_TODOITEM_TYPE } from './types'
import { nanoid } from 'nanoid'

const actions = {
  createTodoItem (content: string) {
    const item = { id: nanoid(), content, isFinished: false }
    return { type: CREATE_TODOITEM_TYPE, payload: item }
  },
}

export default actions
