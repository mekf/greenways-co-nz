jQuery.noConflict();
   
// Use jQuery via jQuery(...)

jQuery(document).ready(function() {
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