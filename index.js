import DOMHandler from "./scripts/dom-handler.js";
import { BASE_URI, tokenKey } from "./scripts/config.js";

import { login } from "./scripts/services/session-services.js";

import { createUser } from "./scripts/services/user-services.js";
import { LoginPage } from "./scripts/pages/login-page.js";
import STORE from "./scripts/store.js";
import { ContactPage } from "./scripts/pages/contact-page.js";

async function init() {
  try {
    const token = sessionStorage.getItem(tokenKey);

    if (!token) return DOMHandler.load(LoginPage);
    //HomePage
    DOMHandler.load(ContactPage);
  } catch (error) {
    console.log(error);
    sessionStorage.removeItem(tokenKey);
    DOMHandler.load(LoginPage);
  }
}
init();
