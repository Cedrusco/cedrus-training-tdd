const axios = require('axios');
const cheerio = require('cheerio');

class LolCatService {

  /**
   * Using HTML from http://speaklolcat.com, parse out lolcat text
   * @param {string} html HTML returned from web page 
   */
  parseLols(html) {
    const $ = cheerio.load(html);
    const text = $('#text :last-child').text();
    return text;
  }

  /**
   * Build speaklolcat URL from text
   * @param {string} text English text to translate 
   */
  buildUrl(text) {
    const english = text;
    const url = `http://speaklolcat.com/?from=${english}`;
    return url;
  }

  /**
   * Make request to speaklolcat-compatible URL
   * @param {string} url URL to make request to
   */
  async makRequest(url) {
    return axios.get(url);
  }
 
  /**
   * Given English text, return Lolspeak
   * @param {string} text English text to translate
   */
  async tranzlate(text) {
    const url = this.buildUrl(text);
    const response = await this.makRequest(url);
    const html = response.data;
    const lolSpeak = this.parseLols(html);
    return lolSpeak;
  }
}

module.exports = LolCatService;