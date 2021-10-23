import {
  bookOutline, checkmarkDoneCircleOutline, keyOutline
} from 'ionicons/icons'
import Storage from '../classes/storage'
import { AppPage } from '../types/AppPage'
import { SIGN_OUT } from '../types/Auth'
import Roles from '../types/Roles'
import { Settings, Theme } from '../types/Settings'
import {
  ADD_CONTACT,
  CHANGE_THEME,
  REMOVE_CONTACT,
  SET_CONTACTS,
  SET_SETTINGS,
  SET_USER,
  User
} from '../types/User'

const ROOT = '/app'

export type UserState = {
  user: User | null,
  contacts: Set<string>,
  colony: string,
  quickAccesses: AppPage[],
  settings: Settings
}

const INITIAL_STATE: UserState = {
  user: null,
  contacts: new Set(),
  colony: '7VAerIUi5MqfEaAqLUSo',
  quickAccesses: [{
    title: 'Control de Accesos',
    url: `${ROOT}/access-control`,
    icon: keyOutline,
    roles: [Roles.RESIDENT, Roles.ADMIN, Roles.COMMITTEE],
  }, {
    title: 'Vecinos',
    icon: bookOutline,
    roles: [Roles.RESIDENT, Roles.ADMIN, Roles.COMMITTEE],
    url: `${ROOT}/directory`
  }, {
    title: 'Votaciones',
    icon: checkmarkDoneCircleOutline,
    roles: [Roles.RESIDENT, Roles.ADMIN, Roles.COMMITTEE],
    url: `${ROOT}/votes`
  }],
  settings: { theme: Theme.LIGHT }
}

const userReducer = (state = INITIAL_STATE, action: any) => {
  let newContacts: Set<string> = new Set()
  switch (action.type) {
    case SET_USER:
      Storage.setItem('@user', JSON.stringify(action.payload))
      return {
        ...state,
        user: action.payload as User,
      }
    case SET_CONTACTS:
      Storage.setItem('@contacts', JSON.stringify(action.payload))
      return {
        ...state,
        contacts: new Set([...action.payload]),
      }
    case ADD_CONTACT:
      newContacts = new Set([...state.contacts, action.payload])
      Storage.setItem('@contacts', JSON.stringify([...newContacts]))
      return {
        ...state,
        contacts: newContacts,
      }
    case REMOVE_CONTACT:
      state.contacts.delete(action.payload)
      newContacts = new Set([...state.contacts])
      Storage.setItem('@contacts', JSON.stringify([...newContacts]))
      return {
        ...state,
        contacts: newContacts,
      }
    case SET_SETTINGS:
      Storage.setItem('@settings', JSON.stringify(action.payload))
      return {
        ...state,
        settings: { ...action.payload }
      }
    case CHANGE_THEME:
      Storage.setItem('@settings', JSON.stringify({
        ...state.settings,
        theme: action.payload
      }))
      return {
        ...state,
        settings: {
          ...state.settings,
          theme: action.payload
        },
      }
    case SIGN_OUT:
      return {
        ...state,
        user: null,
      }
    default:
      return state
  }
}

export default userReducer
