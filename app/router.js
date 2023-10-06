import { AboutController } from "./controllers/AboutController.js";
import { SnackController } from "./controllers/SnackController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { MoneyController } from "./controllers/MoneyController.js";

export const router = [
  {
    path: '',
    controller: [SnackController, MoneyController],
    view: null

  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]