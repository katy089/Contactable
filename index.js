// import DOMHandler from "./scripts/dom-handler.js";
import { BASE_URI, tokenKey } from "./scripts/config.js";
import apiFetch from "./scripts/services/api-fetch.js";
import { login, logout } from "./scripts/services/session-services.js";
import {
  createContact,
  showContactList,
  showContact,
  deleteContact,
  editContact,
} from "./scripts/services/contacts-services.js";
import { createUser } from "./scripts/services/user-services.js";

const credentials = { email: "testing@mail.com", password: "123456" };
// login(credentials);
// logout();

const contact = {
  name: "Lucas",
  email: "lucas@mail.com",
  number: "985632322",
  relation: "Best friend",
};
// createUser(credentials);

// deleteContact(76);
// showContact(318);
// showContactList();
