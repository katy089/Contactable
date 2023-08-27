import { getContactList } from "./services/contacts-services.js";

async function fetchContacts() {
  const list = await getContactList();
  return list.map((contact) => this.contacts.push(contact));
}

const STORE = {
  user: null,
  fetchContacts,
  contacts: [],
};

export default STORE;
