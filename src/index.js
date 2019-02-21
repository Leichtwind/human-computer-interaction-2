'use strict';

import EventController from './event-controller';

const eventController = new EventController();

const circles = document.getElementsByClassName('circle');

for (let index = 0; index < circles.length; index++) {
  const circle = circles.item(index);

  circle.onclick = ({ path }) => {
    const [element] = path;

    eventController.onCircleClick(element);
  };
}

document.onkeypress = ({ code }) => {
  switch (code) {
    case 'Space':
      eventController.onSpaceDown();
      break;
  }
};
