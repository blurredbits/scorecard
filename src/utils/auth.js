
const fakeAuth = {
  isAuthenticated: false,

  authenticate(callback) {
    this.isAuthenticated = true
    setTimeout(callback, 100)
  },

  signout(callback) {
    this.isAuthenticated = false
    callback()
    setTimeout(callback, 100)
  }
};

export default fakeAuth;


