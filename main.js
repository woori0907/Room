$(document).ready(function () {
  const descriptions = $(".desc_item").get();
  const photos = $(".photo_item").get();
  const ARRAY_LENGTH = descriptions.length - 1;
  let currentIndex = 0;

  function toPreviousSlide() {
    let index = currentIndex - 1;
    if (currentIndex === 0) {
      index = ARRAY_LENGTH;
    }
    descriptions[index].classList.add("active");
    descriptions[currentIndex].classList.remove("active");
    photos[index].classList.add("active");
    photos[currentIndex].classList.remove("active");
    currentIndex = index;
  }

  function toNextSlide() {
    let index = currentIndex + 1;
    if (currentIndex === ARRAY_LENGTH) {
      index = 0;
    }
    descriptions[index].classList.add("active");
    descriptions[currentIndex].classList.remove("active");
    photos[index].classList.add("active");
    photos[currentIndex].classList.remove("active");
    currentIndex = index;
  }

  $("#button_prev").on("click", toPreviousSlide);
  $("#button_next").on("click", toNextSlide);

  $(".nav_open_button").on("click", function () {
    $(".mobile_nav").addClass("active");
  });
  $(".nav_close_button").on("click", function () {
    $(".mobile_nav").removeClass("active");
  });

  $(document).keyup(function (e) {
    switch (e.keyCode) {
      case 37:
        toPreviousSlide();
        break;
      case 39:
        toNextSlide();
        break;
      default:
        break;
    }
  });
});
