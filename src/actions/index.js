export function login (email, password) {
  const user = {
    email: email
  }

  return {
    type: 'UPDATE_USER',
    user
  }
}
