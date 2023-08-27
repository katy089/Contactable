import DOMHandler from "../dom-handler.js";
import STORE from "../store.js";
import { input } from "../components/input.js";
import { createUser } from "../services/user-services.js";
import { ContactPage } from "./contact-page.js";

function render() {
  const { CreateUserError } = CreateUser.state;
  return `
    <main class="section">
      <section class="container">
        <h1 class="heading heading--lg text-center mb-4">Sing Up</h1>
        <form class="flex flex-column gap-4 mb-4 js-singup-form">

				${input({
          label: "email",
          id: "email",
          name: "email",
          placeholder: "kabu@mail.com",
          type: "email",
          required: true,
        })}

				${input({
          label: "password",
          id: "password",
          name: "password",
          placeholder: "*****",
          type: "password",
          required: true,
        })}

				${
          CreateUserError
            ? `<p class="text-center error-300">${CreateUserError}</p>`
            : ""
        }
					<button class="button button--primary">Create Account</button>
        </form>
      </section>
    </main>
    `;
}

function listenerSingUp() {
  const form = document.querySelector(".js-singup-form");

  form.addEventListener("submit", async (event) => {
    try {
      event.preventDefault();

      const { email, password } = event.target;

      const credentials = {
        email: email.value,
        password: password.value,
      };

      const user = await createUser(credentials);
      STORE.user = user;

      await STORE.fetchContacts();

      DOMHandler.load(ContactPage);
    } catch (error) {
      CreateUser.state.CreateUserError = error.message;
      DOMHandler.reload();
    }
  });
}

const CreateUser = {
  toString() {
    return render();
  },
  addListeners() {
    listenerSingUp();
  },
  state: {
    CreateUserError: null,
  },
};

export { CreateUser };
