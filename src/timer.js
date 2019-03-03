'use strict';

export default class {
  /**
   * @constructor
   */
  constructor() {
    this._timer = null;
  }

  /**
   * Start timer
   * @param {Function} callback
   */
  start(callback) {
    if (this._timer) {
      return;
    }

    const startTime = Date.now();

    this._timer = setInterval(() => {
      callback(Date.now() - startTime);
    }, 1);
  }

  /**
   * Stop timer
   */
  stop() {
    clearInterval(this._timer);
    this._timer = null;
  }

  /**
   * @return {Boolean}
   */
  get isActive() {
    return !!this._timer;
  }
}
