import { showContactList } from "./services/contacts-services.js";

async function fetchContacts() {
  const contacts = await showContactList();
  return contacts;
}

const STORE = {
  user: null,
  fetchContacts,
};

export default STORE;
