import { input } from "../components/input.js";
import DOMHandler from "../dom-handler.js";
import { ContactPage } from "./contact-page.js";
import { login } from "../services/session-services.js";
import { CreateUser } from "./sing-up.js";
import STORE from "../store.js";

function render() {
  const { loginError } = LoginPage.state;
  return `
    <header class="bb container-sm">
      <h1 class="heading--lg mb-4">Login</h1>
    </header>
      <section class="section-sm ">
        <form class="flex flex-column js-login-form container-sm">
          <div class="flex flex-column gap-4 mb-4">
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
            ${loginError ? `<p class="error-300">${loginError}</p>` : ""}
          </div>
          <footer class="flex bt p-10" style="margin-top: 20px">
            <button class="js-signup btn">Signup</button>
            <button class="btn">Login</button>
          </footer>
        </form>
      </section>
  `;
}

function listenSignUpButton() {
  const signUp = document.querySelector(".js-signup");
  signUp.addEventListener("click", () => DOMHandler.load(CreateUser));
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
    listenSignUpButton();
  },
  state: {
    loginError: null,
  },
};

export { LoginPage };
