'use strict';

import Util from './util';
import Timer from './timer';
import { EOL } from 'os';

export default class {
  /**
   * @params {} circles
   * @constructor
   */
  constructor(circles) {
    this._circles = circles;
    this._timer = new Timer();
    this._isActive = false;

    [this._reactionTime, this._results, this._resultsCountField] = Util.getElementsById([
      'reactionTime', 'results', 'resultsCount'
    ]);

    this._resultsCount = 0;
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

    const circleIndex = Util.randomInt({ to: this._circles.length });
    const circle = this._circles[circleIndex];

    Util.setTimeoutPromise(2000).then(() => {
      circle.style.visibility = 'visible';

      this._timer.start(time => {
        this._reactionTime.innerText = time;
      });
    });
  }

  /**
   * @param {String} number
   */
  onNumberDown(number) {
    const circle = this._circles[number - 1];

    if (circle.style.visibility === 'visible') {
      this._timer.stop();
      this._isActive = false;

      this._results.innerText += this._reactionTime.innerText + EOL;
      this._resultsCountField.innerText = ++this._resultsCount;
    }
  }
}
