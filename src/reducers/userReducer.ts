import { IProfileData } from '../common/types'

interface Action {
  type: string
  payload: IProfileData['data']
}

export const initialUserState: Action['payload'] = {
  avatar: null,
  email: null,
  fullname: null
}

export const userReducer = (initialState: Action['payload'], action: Action) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...initialState,
        ...action.payload
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}
