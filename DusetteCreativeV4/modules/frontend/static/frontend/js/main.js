// Page loader animation

$('.navbar, .navbar-underlay').hide()
$('#site-content').hide()
$('#loader-wrapper').hide()
$('#home-hero-wrapper').hide()

function pageLoading () {
  $('#loader-wrapper').fadeIn('slow');
  setTimeout(showPage, 2500);
}

function showPage () {
  $('#loader-wrapper').fadeOut()
  $('#site-content').fadeIn()
  $('#home-hero-wrapper').fadeIn()
  homeHeroTextLoader()
  slideInNavbar()
}

// slide in nav

function slideInNavbar () {
  setTimeout(function () {
    $('.navbar-underlay').fadeIn(400, function () {
      $('.navbar').slideDown(400)
    })
  }, 500)
}

// Home hero text slide effect

function homeHeroTextLoader () {
  homeHeroTextLoader = setTimeout(function () {
    let string = $('.home-hero-text > h1 > strong').text()
    $('.home-hero-text > h1 > strong').html('')
    let stringTrimmed = $.trim(string)
    let arr = $.map(stringTrimmed.split(''), function (letter) {
      return $('<span>' + letter + '</span>')
    })

    let destination = $('.home-hero-text > h1 > strong')

    let c = 0

    let i = setInterval(function () {
      if (c === 24) arr[c].appendTo(destination).html('<br/>')
      arr[c].appendTo(destination).hide().fadeIn(500)
      c += 1

      if (c >= arr.length) clearInterval(i)
    }, 75)
  })
}

// Home What I Do fade effect

$(document).ready(function () {
  $('#home-what-i-do-box-1, #home-what-i-do-box-2, #home-what-i-do-box-3').hide()
})

$(window).scroll(function () {
  if ($(window).scrollTop() > 250) {
    $('#home-what-i-do-box-1').fadeIn('slow', function () {
      $('#home-what-i-do-box-2').fadeIn('slow', function () {
        $('#home-what-i-do-box-3').fadeIn('slow')
      })
    })
  }
})

// Section 3 effects

$(window).scroll(function () {
  if ($(window).scrollTop() > 800) {
    $('.home-section-3-border').addClass(' home-section-3-border-in-view')
  }
})

function doMath () {
  let speed = Math.floor(Math.random().toFixed(2) * 20 + 10)
  let delay = Math.floor(Math.random().toFixed(2) * 20 + 1)
  let position = Math.floor(Math.random().toFixed(3) * 100 + 1)
  let size = Math.floor(Math.random().toFixed(1) * 10 + 1)
  let sizePartial = Math.floor(Math.random().toFixed(1) * 10 + 1)

  return [speed, delay, position, size, sizePartial]
}

function shuffleArray (array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp

  }

  return array
}

$(document).ready(function () {
  const iconArray = [
    'fas fa-music',
    'fas fa-camera',
    'fas fa-download',
    'fas fa-location-arrow',
    'fab fa-html5',
    'fab fa-css3',
    'fas fa-share',
    'fas fa-commenting',
    'fab fa-maxcdn',
    'fas fa-rocket',
    'fab fa-500px',
    'fab fa-firefox',
    'fas fa-tablet',
    'fab fa-chrome',
    'fas fa-tags',
    'fas fa-chain-broken',
    'fab fa-wikipedia-w',
    'fas fa-code',
    'fas fa-terminal',
    'fas fa-location-arrow',
    'fas fa-reply-all',
    'fas fa-hand-spock-o',
    'fas fa-gamepad',
    'fa fa-folder-0',
    'fab fa-github-alt',
    'fa fa-hand-grab-o',
    'fas fa-desktop',
    'fas fa-laptop',
    'fas fa-tablet',
    'fas fa-mobile',
    'fas fa-mouse-pointer',
    'fas fa-battery-half',
    'fas fa-fighter-jet',
    'fas fa-server',
    'fab fa-google-plus-square',
    'fas fa-cloud',
    'fas fa-link',
    'fab fa-github-o',
    'fas fa-hdd-o',
    'fas fa-sliders',
    'fab fa-facebook',
    'fab fa-codepen',
    'fas fa-camera-retro',
    'fab fa-jsfiddle',
    'fab fa-rebel',
    'fab fa-empire',
    'fab fa-steam',
    'fab fa-soundcloud',
    'fab fa-pied-piper',
    'fab fa-slack',
    'fa fa-video-camera',
    'fas fa-music',
    'fas fa-camera',
    'fas fa-download',
    'fas fa-location-arrow',
    'fab fa-html5',
    'fab fa-css3',
    'fas fa-share',
    'fas fa-commenting',
    'fab fa-maxcdn',
    'fas fa-rocket',
    'fab fa-500px',
    'fab fa-firefox',
    'fas fa-tablet',
    'fab fa-chrome',
    'fas fa-tags',
    'fas fa-chain-broken',
    'fab fa-wikipedia-w',
    'fas fa-code',
    'fas fa-terminal',
    'fas fa-location-arrow',
    'fas fa-reply-all',
    'fas fa-hand-spock-o',
    'fas fa-gamepad',
    'fa fa-folder-0',
    'fab fa-github-alt',
    'fa fa-hand-grab-o',
    'fas fa-desktop',
    'fas fa-laptop',
    'fas fa-tablet',
    'fas fa-mobile',
    'fas fa-mouse-pointer',
    'fas fa-battery-half',
    'fas fa-fighter-jet',
    'fas fa-server',
    'fab fa-google-plus-square',
    'fas fa-cloud',
    'fas fa-link',
    'fab fa-github-o',
    'fas fa-hdd-o',
    'fas fa-sliders',
    'fab fa-facebook',
    'fab fa-codepen',
    'fas fa-camera-retro',
    'fab fa-jsfiddle',
    'fab fa-rebel',
    'fab fa-empire',
    'fab fa-steam',
    'fab fa-soundcloud',
    'fab fa-pied-piper',
    'fab fa-slack',
    'fa fa-video-camera',
  ]

  let shuffledIconArray = shuffleArray(iconArray)

  $.each(shuffledIconArray, function (i, val) {

    let vals = doMath()

    let speed = vals[0]
    let delay = vals[1]
    let position = vals[2]
    let size = vals[3]
    let sizePartial = vals[4]

    $('.home-section-3-border').append('<i class=\'' + val + '\' id=\'icon-' + i + '\'></i>')

    $('#icon-' + i).css({
      'position': 'absolute',
      'font-size': size + '.' + sizePartial + 'rem',
      'animation-delay': delay + 's',
      'animation-duration': speed + 's',
      'left': position + 'rem',
    })
  })
})