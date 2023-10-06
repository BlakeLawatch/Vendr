import { AppState } from "../AppState.js"
import { Snack } from "../models/SnackModel.js"





class HouseService {
    createSnack(snackData) {
        const newSnack = new Snack(snackData)
        // console.log('new snack', newSnack);
        AppState.snacks.push(newSnack)
        AppState.emit('snacks')
    }
}

export const SnackService = new SnackService()
