import STORE from "../store.js";

function render() {
  return `
    <h1>Contacts</h1>
    <section class="section">
      <div class="container">
        
      </div>
    </section>
  `;
}

export const ContactPage = {
  toString() {
    return render();
  },
  addListeners() {},
};
