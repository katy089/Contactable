import DOMHandler from "./scripts/dom-handler.js";
import { BASE_URI, tokenKey } from "./scripts/config.js";
import apiFetch from "./scripts/services/api-fetch.js";
import { login, logout } from "./scripts/services/session-services.js";
import {CreateUser} from "./scripts/pages/sing-up.js"
import {
  createContact,
  showContactList,
  showContact,
  deleteContact,
  editContact,
} from "./scripts/services/contacts-services.js";
import { createUser } from "./scripts/services/user-services.js";

async function init() {
  try {
    const token = sessionStorage.getItem(tokenKey);

    if (!token) return DOMHandler.load(CreateUser);

    const user = await getUser();
    STORE.user = user;
    STORE.fetchContacts();
    //HomePage
    // DOMHandler.load(HomePage);
  } catch (error) {
    console.log(error);
    sessionStorage.removeItem(tokenKey);
    // DOMHandler.load(LoginPage);
  }
}
init();