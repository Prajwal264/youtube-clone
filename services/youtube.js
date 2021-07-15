const { default: axios } = require('axios');

/**
 *
 *
 * @class Youtube
 */
class Youtube {
  constructor() {
    this.apiBase = 'https://www.googleapis.com/youtube/v3';
    this.accessToken = '';
    this.axios = axios.create({
      baseURL: this.apiBase,
      timeout: 1000,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
  }
}

module.exports = {
  Youtube,
};
