const TELEGRAM_BOT_TOKEN = "6348667813:AAFCvGpDEGwTLE_SeQkGvH8Loyl9bNzVzuQ";
const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
const TELEGRAM_CHAT_ID = "@AirbrashApplication";

export default class ApplicationAPI {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }
  //отправить заявку
  sendApplication(text) {
    return fetch(this._baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
      }),
    }).then((res) => this._getResponseData(res));
  }
}

export const sendApplicationApi = new ApplicationAPI({
  baseUrl: API,
});
