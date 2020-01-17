import apiConfig from ".";

const { _axios, baseUrl } = apiConfig;

export default class contactAPI {
  static getContactList() {
    return _axios.get(`${baseUrl}/users`);
  }
}
