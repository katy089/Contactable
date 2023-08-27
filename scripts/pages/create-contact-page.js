import { input } from "../components/input.js";
import DOMHandler from "../dom-handler.js";
import { createContact } from "../services/contacts-services.js";
import STORE from "../store.js";
import { ContactPage } from "./contact-page.js";
import { logout } from "../services/session-services.js";

function listenNewContactForm() {
  const form = document.querySelector(".js-new-contact-form");
  form.addEventListener("submit", async (event) => {
    try {
      event.preventDefault();
      const info = event.target.elements;
      const data = {
        name: info.name.value,
        number: info.number.value,
        email: info.email.value,
        relation: info.relation.value,
      };
      console.log(data);
      const newContact = await createContact(data);
      STORE.contacts.push(newContact);
      DOMHandler.load(ContactPage);
    } catch (error) {
      console.log(error);
    }
  });
}

function listenLogoutButton() {
  const logoutbtn = document.querySelector(".js-logout");
  logoutbtn.addEventListener("click", async (event) => {
    try {
      event.preventDefault();
      await logout();
      DOMHandler.load(LoginPage);
    } catch (error) {
      console.log(error);
    }
  });
}

function listenCancelButton() {
  const cancelButton = document.querySelector(".js-cancel");
  cancelButton.addEventListener("click", (event) =>
    DOMHandler.load(ContactPage)
  );
}

function render() {
  return `
  <header class="container-sm bb align-center flex justify-between mb-4 p-10">
    <h2 class="heading">Create New Contact</h2>
    <button class="btn js-logout">Logout</button>
  </header>
  <main class="section-sm ">
    <form class="flex flex-column container-sm js-new-contact-form">
      <div class="flex flex-column gap-4 mb-4">
        ${input({
          id: "name",
          name: "name",
          type: "text",
          placeholder: "Name",
          required: true,
        })}
          ${input({
            id: "number",
            name: "number",
            placeholder: "Number",
            type: "number",
            required: true,
          })}
          ${input({
            id: "email",
            name: "email",
            placeholder: "Email",
            type: "email",
            required: true,
          })}

        <select name="relation" id="relation" class="select__input">
          <option selected disabled class="content-lg">Relation</option>
          <option value="Family">Family</option>
          <option value="Friends">Friends</option>
          <option value="Work">Work</option>
          <option value="Acquaintance">Acquaintance</option>
        </select>

      </div>

      <footer class="bt p-10">
      <button class="btn js-save-contact">Save</button>
      <button class="btn js-cancel">Cancel</button>
      </footer>
    </form>
  
  </main>
  <section>
    <div class="container">
    </div>
  </section>
  `;
}

export const CreateContact = {
  toString() {
    return render();
  },
  addListeners() {
    listenNewContactForm();
    listenLogoutButton();
    listenCancelButton();
  },
};
