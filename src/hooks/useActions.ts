import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { AppDispatch } from "../store"
import { allActionCreators } from "../store/reduces/action-creators"

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(allActionCreators, dispatch)
}