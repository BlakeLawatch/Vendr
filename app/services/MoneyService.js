import { AppState } from "../AppState.js";

class MoneyService {
    addMoney() {
        AppState.money += 0.25
        console.log('app state money', AppState.money);
    }
}

export const moneyService = new MoneyService()