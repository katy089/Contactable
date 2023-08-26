import apiFetch from "./api-fetch.js";

function showContactList() {
  const list = apiFetch("/contacts");
  console.log(list);
  return list;
}

async function createContact(data = { name, email, number, relation }) {
  return await apiFetch("/contacts", { body: data });
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
