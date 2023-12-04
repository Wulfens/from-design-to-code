import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="movies"
export default class extends Controller {
  static targets = ["text"]
  connect() {
  }

  revealContent() {
    console.log("Toujours caché")
    this.textTarget.classList.remove("d-none")
  }
}
