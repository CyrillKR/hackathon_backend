const { query } = require("../database/database");

async function signUpUserQuery({
  email,
  password,
  firstName,
  lastName,
  userId,
}) {
  try {
    const sql = `INSERT INTO userstables (user_id, first_name, last_name, email, password) VALUES ('${userId}', '${firstName}','${lastName}', '${email}', '${password}')`;
    const user = await query(sql);
    console.log(user);
    return user;
  } catch (err) {
    console.log(err);
  }
}

module.exports = { signUpUserQuery };
