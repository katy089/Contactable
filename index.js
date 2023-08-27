import DOMHandler from "./scripts/dom-handler.js";
import { tokenKey } from "./scripts/config.js";
import STORE from "./scripts/store.js";
import { LoginPage } from "./scripts/pages/login-page.js";
import { ContactPage } from "./scripts/pages/contact-page.js";
import { createContact } from "./scripts/services/contacts-services.js";
import { login } from "./scripts/services/session-services.js";

async function init() {
  try {
    const token = sessionStorage.getItem(tokenKey);
    if (!token) return DOMHandler.load(LoginPage);
    DOMHandler.load(ContactPage);
  } catch (error) {
    console.log(error);
    sessionStorage.removeItem(tokenKey);
    DOMHandler.load(LoginPage);
  }
}
init();
