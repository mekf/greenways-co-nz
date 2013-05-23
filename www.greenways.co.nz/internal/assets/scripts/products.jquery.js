$(document).ready(function() {
  $('.hide').hide();

  // Monkey Patch from what available from scraped data

  $('#d-1309911635').fadeIn('slow');

  $('#p-1309911635').click(function() {
    $('.hide').hide();
    $('#d-1309911635').fadeIn('slow');
  });
});

// Rationale | Not working yet

// get the current id then hide the list
// get the clicked-on id then show the list
// set the clicked-on id as new current

// $currentLink = $('a.current');
// $currentImgID = $currentLink.children().attr('id');
// // p-1309911635
// $currentUnHideID = $currentImgID.replace(/p/g, 'd');
// // d-1309911635
// // $currentUnHideID.show();