
import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";

function _drawSnack() {
    const snacks = AppState.snacks
    // console.log(snacks, 'yep yep');
    let content = ''
    snacks.forEach(snack => content += snack.pickedItem)
    setHTML('itemPicked', content)

}

export class SnackController {
    constructor() {
        // _purchaseSnack()
        // console.log('Snack Controller');
        _drawSnack()
    }


}

// TODO Make more of a generic button in the model so you could string interpolate