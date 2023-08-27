import STORE from "../store.js";
import { logout } from "../services/session-services.js";
import DOMHandler from "../dom-handler.js";
import { LoginPage } from "./login-page.js";
import { CreateContact } from "./create-contact-page.js";

const Contacts = function () {
  const store = STORE.contacts;
  console.log(store);
  return store;
};

function listenLogoutButton() {
  const logoutBtn = document.querySelector(".js-logout");
  logoutBtn.addEventListener("click", async (event) => {
    try {
      event.preventDefault();
      await logout();
      DOMHandler.load(LoginPage);
    } catch (error) {
      console.log(error);
    }
  });
}

function listenAddButton() {
  const addButton = document.querySelector(".js-add-button");
  addButton.addEventListener("click", (event) =>
    DOMHandler.load(CreateContact)
  );
}

function render() {
  Contacts();
  return `
    <header class="container-sm bb align-center">
      <div class="flex justify-between mb-4 p-10">
        <h2 class="heading">Contactable</h2>
        <button class="btn js-logout">Logout</button>
      </div>
      <p class="content-sm gray-300 p-10">Numero de contactos</p>  
    </header>
    <section>
      <div class="container">
      </div>
    </section>
    <footer class="flex container-sm section">
    <a href="#" class="anchor flex js-add-button">
      <img src="./images/icons/add.png" alt="add" > 
    </a>  
  </footer>
    `;
}

export const ContactPage = {
  toString() {
    return render();
  },
  addListeners() {
    listenLogoutButton();
    listenAddButton();
  },
};
