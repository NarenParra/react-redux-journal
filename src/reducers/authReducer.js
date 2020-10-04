import { types } from "../types/types";

//Reducer de la autenticacion

export const authReducer = (state = {}, action) => {
  // manejador de acciones
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };

    case types.logout:
      return {};

    default:
      return state;
  }
};
