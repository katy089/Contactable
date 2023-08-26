import { input } from "../components/input.js";
import DOMHandler from "../dom-handler.js";
import STORE from "../store.js";
import { ContactPage } from "./contact-page.js";
import { login } from "../services/session-services.js";

function render() {
  const { loginError } = LoginPage.state;
  return `
    <header class="bb">
      <h1 class="heading--lg mb-4">Login</h1>
    </header>
    <main clas="section">
      <section class="container">
        <form class="flex flex-column gap-4 js-login-form">
          ${input({
            id: "email",
            type: "email",
            placeholder: "email",
            required: true,
          })}
          ${input({
            id: "password",
            type: "password",
            placeholder: "password",
            required: true,
          })}
          <footer>
            <button class="js-delete-button">Login</button>
            <button class="js-signup">Signup</button>
          </footer>
          ${loginError ? `<p class="error-300">${loginError}</p>` : ""}
        </form>
      </section>
    </main>
  `;
}

function listenSubmitForm() {
  const form = document.querySelector(".js-login-form");
  form.addEventListener("submit", async (event) => {
    try {
      event.preventDefault();
      const { email, password } = event.target;
      const credentials = {
        email: email.value,
        password: password.value,
      };
      const user = await login(credentials);
      STORE.user = user;
      STORE.fetchContacts();
      DOMHandler.load(ContactPage);
    } catch (error) {
      LoginPage.state.loginError = error.message;
      DOMHandler.reload();
    }
  });
}

const LoginPage = {
  toString() {
    return render();
  },
  addListeners() {
    listenSubmitForm();
  },
  state: {
    loginError: null,
  },
};

export { LoginPage };
