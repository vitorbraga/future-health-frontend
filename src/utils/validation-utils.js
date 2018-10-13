const PATTERN_EMAIL = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const isEmailValid = (email) => {
  const regex = new RegExp(PATTERN_EMAIL);
  return regex.test(email);
}
