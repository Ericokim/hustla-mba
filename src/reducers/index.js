import { combineReducers } from 'redux'
import settings from './settings'
import items from './items'

const rootReducer = combineReducers({
  settings,
  items
})

export default rootReducer
