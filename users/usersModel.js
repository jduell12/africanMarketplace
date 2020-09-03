const db = require("../data/db-config");

module.exports = {
  getUsers,
  addUser,
};

function getUsers() {
  return db("users");
}

async function addUser(user) {
  return db("users").insert(user, "id");
}
