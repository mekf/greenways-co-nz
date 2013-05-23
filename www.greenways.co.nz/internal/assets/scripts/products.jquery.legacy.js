jQuery.noConflict();
   
// Use jQuery via jQuery(...)

jQuery(document).ready(function() {

  // Monkey Patch from what available from scraped data
  // hide all list-wrap | show the first one
  jQuery('.hide').hide();
  jQuery('#d-1309911635').fadeIn('slow');

  // l1
  jQuery('#p-1309911635').click(function() {
    jQuery('.hide').hide();
    jQuery('#d-1309911635').fadeIn('slow');
  });
  jQuery('#p-1309911661').click(function() {
    jQuery('.hide').hide();
    jQuery('#d-1309911661').fadeIn('slow');
  });
  jQuery('#p-1309911691').click(function() {
    jQuery('.hide').hide();
    jQuery('#d-1309911691').fadeIn('slow');
  });
  jQuery('#p-1309911709').click(function() {
    jQuery('.hide').hide();
    jQuery('#d-1309911709').fadeIn('slow');
  });
  jQuery('#p-1309911730').click(function() {
    jQuery('.hide').hide();
    jQuery('#d-1309911730').fadeIn('slow');
  });

  // l2
  jQuery('#p-1310374005').click(function() {
    jQuery('.hide').hide();
    jQuery('#d-1310374005').fadeIn('slow');
  });
  jQuery('#p-1310380353').click(function() {
    jQuery('.hide').hide();
    jQuery('#d-1310380353').fadeIn('slow');
  });
  jQuery('#p-1310380375').click(function() {
    jQuery('.hide').hide();
    jQuery('#d-1310380375').fadeIn('slow');
  });
  jQuery('#p-1310380416').click(function() {
    jQuery('.hide').hide();
    jQuery('#d-1310380416').fadeIn('slow');
  });
  jQuery('#p-1310380461').click(function() {
    jQuery('.hide').hide();
    jQuery('#d-1310380461').fadeIn('slow');
  });
  
  // l3
  jQuery('#p-1331109811').click(function() {
    jQuery('.hide').hide();
    jQuery('#d-1331109811').fadeIn('slow');
  });

  jQuery(".focus").hover(function() {
    jQuery(this).siblings().stop(true, true).fadeTo('400', 0.5, function() {      
      jQuery(".focus").hover(function() {
        jQuery(this).stop(true, true).fadeTo('400', 1);
      });
    });
  });
});
 
// jQuery(function() {
//   jQuery("#tabs").organicTabs(); 
// });

// Use Prototype with $(...), etc.
window.addEvent('domready', function(){ 
  var totIncrement    = 0;
  var increment     = 980;
  var maxRightIncrement = increment*(-2);
  var fx = new Fx.Style('slider-list', 'margin-left', {
    duration: 800,
    transition: Fx.Transitions.Back.easeInOut,
    wait: true
  });
   
  //-------------------------------------
  // EVENTS for the button "previous"
  $('previous').addEvents({ 
        'click' : function(event){ 
    if(totIncrement<0){
      totIncrement = totIncrement+increment;
      fx.stop()
      fx.start(totIncrement);
      }
    }           
  }); 
 
  //-------------------------------------
  // EVENTS for the button "next"
    $('next').addEvents({ 
        'click' : function(event){ 
    if(totIncrement>maxRightIncrement){
      totIncrement = totIncrement-increment;
      fx.stop()
      fx.start(totIncrement);
      }
    }
  })
});