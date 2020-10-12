//tipos para los actions redux

export const types = {
  //auth
  login: "[Auth] Login",
  logout: "[Auth] Logout",
  //form error
  uiSetError: "[UI] Set Error",
  uiRemoveError: "[UI] Remove Error",
  //loading
  uiStartLoading: "[UI] Start loading",
  uiFinishLoading: "[UI] Finish loading",
  //notas
  notesAddNew: "[Notes] New note",
  notesActive: "[Notes] Set active note",
  notesLoad: "[Notes] Load notes",
  notesUpdated: "[Notes] Update note ",
  notesFileUrl: "[Notes] Update image url",
  notesDelete: "[Notes] Delete note",
  notesLogoutCleaning: "[Notes] Logout cleaning",
};
