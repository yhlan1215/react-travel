import i18n from "i18next";
import { CHANGE_LANGUAGE } from "./languageActions";


const defaultState = {
  language: "zh",
  languageList: [
    { name: "中文", code: "zh" },
    { name: "English", code: "en" }
  ]
}

export default (state = defaultState, action) => {
  if (action.type === CHANGE_LANGUAGE) {
      i18n.changeLanguage(action.payload)
      return { ...state, language: action.payload }
    }
      return state
}