import apiFetch from "./api-fetch.js";

async function showContactList() {
  const list = await apiFetch("/contacts");
  console.log(list);
  return list;
}

function createContact(data = { name, email, number, relation }) {
  return apiFetch("/contacts", { body: data });
}

function showContact(id) {
  return apiFetch(`/contacts/${id}`);
}

function editContact(id, newData = { name, email, number, relation }) {
  const updatedContact = apiFetch(`/contacts/${id}`, {
    method: "PATCH",
    body: newData,
  });
  console.log(updatedContact);
  return updatedContact;
}

function deleteContact(id) {
  return apiFetch(`/contacts/${id}`, { method: "DELETE" });
}

export {
  createContact,
  showContactList,
  showContact,
  editContact,
  deleteContact,
};
