export const CHANGE_LANGUAGE = "change_language";

export const changeLanguageActionCreator = (languageCode) => {
  return {
    type: CHANGE_LANGUAGE,
    payload: languageCode,
  };
};

