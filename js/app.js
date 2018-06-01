$(window).ready(function() {
  $('.hidden').hide();
  $('.btt').hide();
})

//Functions
//Fix header and blurb
  const theFixer = function(event){
    
  }

//Managing Sample Tabs
  const sampleTabs = function(event){
    $('.hidden').hide();
    let chosen = $(this).attr("data-btn");
    let location = $(this).offset();
    $('#' + chosen).show();
    window.scrollTo(location);
    $('.btt').show();
  }
//Scroll to Top Function
  const scrollToTop = function(){
    window.scrollTo(0,0);
  }


//On Clicks
//Tab Buttons
  $('.tab-btn').on('click', sampleTabs);
//Back To Top Button
  $('.btt').on('click', scrollToTop);