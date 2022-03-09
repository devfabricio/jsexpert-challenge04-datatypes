class User {
  constructor({ id }) {
    this.id = id;
  }
  toString() {
    return `[${this.id}]`
  }
}

export default User;
