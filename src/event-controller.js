'use strict';

import Util from './util';
import Timer from './timer';

export default class {
  /**
   * @constructor
   */
  constructor() {
    this._timer = new Timer();
    this._isActive = false;

    this._reactionTime = document.getElementById('reactionTime');

    this._circles = [];
    const circles = document.getElementsByClassName('circle');

    for (let index = 0; index < circles.length; index++) {
      this._circles.push(circles.item(index));
    }
  }

  /**
   *
   */
  onSpaceDown() {
    if (this._isActive) {
      return;
    }

    this._isActive = true;
    this._reactionTime.innerText = 0;

    this._circles.forEach(circle => {
      circle.style.visibility = 'hidden';
    });

    const id = 'circle' + Util.randomInt({ to: 8 });
    const circle = document.getElementById(id);

    Util.setTimeoutPromise(2000).then(() => {
      circle.style.visibility = 'visible';

      this._timer.start(time => {
        this._reactionTime.innerText = time;
      });
    });
  }

  /**
   *
   * @param {HTMLElement} element
   */
  onCircleClick(element) {
    if (!this._isActive) {
      return;
    }

    if (element.style.visibility === 'visible') {
      this._timer.stop();

      this._isActive = false;
    }
  }
}
