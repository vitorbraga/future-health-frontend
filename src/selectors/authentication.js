export const isLogged = (state, entity) => {
  if (state.authentication[entity]) {
    return Boolean(state.authentication[entity].token);
  }
  return false;
}

