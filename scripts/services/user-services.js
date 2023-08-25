import apiFetch from "./api-fetch.js";
import { tokenKey } from "../config.js";

async function createUser(newUser = { email, password }) {
  const { token, ...user } = await apiFetch("signup", { body: newUser });
  console.log(user);
  return user;
}

export { createUser };
