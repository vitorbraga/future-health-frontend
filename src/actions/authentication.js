export const login = (credentials, entity) => ({
  type: 'API_LOGIN_REQUEST',
  payload: { credentials, entity }
});
