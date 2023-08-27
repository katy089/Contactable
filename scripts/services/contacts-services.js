import apiFetch from "./api-fetch.js";

export function showContact(id) {
  return apiFetch(`/contacts/${id}"`);
}

export function getContactList() {
  return apiFetch("/contacts");
}

export function editContact(id, newData = { name, number, email, relation }) {
  return apiFetch(`/contacts/${id}`, { method: "PATCH", body: newData });
}

export function deleteContact(id) {
  return apiFetch(`/contacts/${id}`, { method: "DELETE" });
}

export function createContact(
  newContact = {
    nombre,
    number,
    email,
    relation,
  }
) {
  return apiFetch("/contacts", { body: newContact });
}
