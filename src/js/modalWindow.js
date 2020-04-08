import Modal from "./models/Modal";
import TextModal from "./components/TextModal";

const openButton = document.getElementById("js-open-btn");
openButton.addEventListener("click", handleModalOpen);

function handleModalOpen() {
  new TextModal({
    container: "js-modal-container",
    text: "Hello, I'm a modal window!",
    beforeGenere: () => hideOpenButton(openButton),
    afterClose: () => showOpenButton(openButton),
    withAnimation: true,
  }).genere();
}

function hideOpenButton(button) {
  button.classList.add("hidden");
}

function showOpenButton(button) {
  button.classList.remove("hidden");
}
