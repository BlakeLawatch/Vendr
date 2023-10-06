import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"
import { Snack } from "./models/SnackModel.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  money = 0

  snacks = [
    new Snack({ name: 'Fruit Snacks', price: 1.50, imgUrl: 'https://scripturecandy.com/cdn/shop/products/fruitSnack_53e348ca-ee21-4224-8960-b64792f369c1_1200x1200.png?v=1675789292' }),
    new Snack({ name: 'Tootsie Roll', price: 0.75, imgUrl: 'https://www.candywarehouse.com/cdn/shop/files/tootsie-roll-midgees-candy-30lb-case-candy-warehouse-1_fbb85773-73b4-40c8-b179-ee059378be0e_550x.jpg?v=1689308330' }),
    new Snack({ name: 'Rice Krispies', price: 2.00, imgUrl: 'https://target.scene7.com/is/image/Target/GUEST_20e9aa70-49c1-4e35-8be7-e0805719c58d?wid=488&hei=488&fmt=pjpeg' }),
  ]







  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
