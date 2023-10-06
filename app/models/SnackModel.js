export class Snack {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
  }

  get pickedItem() {
    return `
    <div class="text-center">
    <img class="pictures"
      src="${this.imgUrl}"
      alt="Fruit Snacks">
    <p>${this.name}</p>
    <button onclick="app.SnackController.purchaseSnack('Fruit Snacks')">$${this.price}</button>
  </div>
    `

  }

}