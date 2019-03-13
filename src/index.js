'use strict';

import Util from './util';
import EventController from './event-controller';

const [estimatedTime, ...flexes] = Util.getElementsById(['estimatedTime', 'flex0', 'flex1']);

const numberOfCircles = Number.parseInt(Util.askValidValue(
  'Please, enter number of circles (2, 4 or 8)',
  ['2', '4', '8']
));

const circles = Util.createElements(
  numberOfCircles,
  'div',
  {
    classes: ['circle'],
    styles: {
      'visibility': 'visible'
    }
  }
);

circles.forEach((it, index) => {
  const parent = index < 4 ? flexes[0] : flexes[1];

  it.innerText = index + 1;

  parent.appendChild(it);
});

const eventController = new EventController(circles);

document.onkeypress = ({ code }) => {
  switch (code) {
    case 'Space':
      eventController.onSpaceDown();
      break;

    case 'Digit1':
    case 'Digit2':
    case 'Digit3':
    case 'Digit4':
    case 'Digit5':
    case 'Digit6':
    case 'Digit7':
    case 'Digit8':
      eventController.onNumberDown(code.charAt(5));
      break;
  }
};

const a = 50, b = 150;
estimatedTime.innerText = a + b*Math.log2(numberOfCircles + 1);
