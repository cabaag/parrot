import { useSelector } from 'react-redux'
import { RootState } from '../reducers'
import { AuthState } from '../reducers/AuthReducer'

export default function useAuth(): AuthState {
  return useSelector((state: RootState) => state.auth)
}
