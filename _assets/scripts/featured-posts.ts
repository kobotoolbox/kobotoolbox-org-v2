import {tns} from 'tiny-slider';

const containerEl = document.querySelector('*[data-featured-posts-slider]');

if (containerEl !== null) {
  tns({
    container: '*[data-featured-posts-slider]',
    disable: true,
    items: 3,
    slideBy: 3,
    gutter: 20, // sadly px, as can't use rems here
    controls: true,
    navPosition: 'bottom',
    nextButton: '*[data-featured-posts-next]',
    prevButton: '*[data-featured-posts-prev]',
    loop: false,
    rewind: false,
    autoWidth: false,
    responsive: {
      1280: {
        disable: false,
      },
    },
  });
}
