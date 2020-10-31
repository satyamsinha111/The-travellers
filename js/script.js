let scroll_to_top = 0;

$(window).scroll((e) => {
  let st = $(this).scrollTop();
  if (st > 0) {
    $("#navbar").addClass("bg-dark");
    $("#navbar").removeClass("bg-transparent");
  } else {
    $("#navbar").addClass("bg-transparent");
    $("#navbar").removeClass("bg-dark");
  }
  scroll_to_top = st;
});
