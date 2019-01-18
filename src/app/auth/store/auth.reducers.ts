import * as AuthActions from './auth.actions';

export interface State {
  token: string;
  authenticated: boolean;
  user: string;
}

const initialState: State = {
  token: null,
  authenticated: false,
  user: null
};

export function authReducers(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case (AuthActions.SIGNUP):
    case (AuthActions.SIGNIN):
      return {
        ...state,
        authenticated: true
      };
    case (AuthActions.LOGOUT):
      return {
        ...state,
        token: null,
        authenticated: false
      };
    case (AuthActions.SET_TOKEN):
      return {
        ...state,
        token: action.payload
      };
    case (AuthActions.SET_USER_NAME):
      return {
        ...state,
        user: action.payload
      };
    default: return state;
  }
}
