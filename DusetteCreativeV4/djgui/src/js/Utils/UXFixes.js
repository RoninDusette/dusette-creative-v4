// Smooth scroll with mouse wheel
import $ from 'jquery';
import TweenMax from './Vendor/TweenMax/TweenMax';


  let $window = $(window);
  let scrollTime = 5.2;
  let scrollDistance = 1170;

  $window.on("mousewheel DOMMouseScroll", function (event) {

    event.preventDefault();

    let delta = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;
    let scrollTop = $window.scrollTop();
    let finalScroll = scrollTop - parseInt(delta * scrollDistance);

    TweenMax.to($window, scrollTime, {
      scrollTo: {y: finalScroll, autoKill: true},
      ease: Power1.easeOut,
      overwrite: 5
    });
  })
