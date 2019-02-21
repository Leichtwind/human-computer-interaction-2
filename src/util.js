'use strict';

export default class {
  /**
   * @param {Number} from
   * @param {Number} to
   * @return {Number}
   */
  static randomInt({ from = 0, to = 10000 } = {}) {
    return Math.floor(from + Math.random() * (to - from));
  }

  /**
   * @param {Number} timeout
   * @return {Promise}
   */
  static setTimeoutPromise(timeout) {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
}
