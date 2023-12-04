import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="search-movies"
export default class extends Controller {
  static targets = ["form", "input", "list"]

  connect() {
    console.log(this.element)
    console.log(this.formTarget)
    console.log(this.inputTarget)
    console.log(this.listTarget)
  }

  update() {
    const url = `${this.formTarget.action}?query=${this.inputTarget.value}`
    // const url = `/movies?query=Batman`
    fetch(url, {headers: {"Accept": "application/json"}})
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        this.listTarget.outerHTML = data.html
      })
  }
}
