import { AuthActionCreators } from "./auth/action-creators";
import { EventActionCreator } from "./event/action-creators";

export const allActionCreators = {
  ...AuthActionCreators,
  ...EventActionCreator
}