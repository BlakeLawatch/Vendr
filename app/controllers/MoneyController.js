import { moneyService } from "../services/MoneyService.js";
import { AppState } from "../AppState.js";
import { setText } from "../utils/Writer.js";

function _drawMoney() {
    let money = AppState.money
    setText('money count', money)


}


export class MoneyController {
    constructor() {
        console.log('money controller');



        AppState.on('money', _drawMoney)
    }
    addMoney() {

        moneyService.addMoney()
    }
}

