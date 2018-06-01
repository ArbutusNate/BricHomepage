$(window).ready(function() {
  $('.hidden').hide();
  $('.btt').hide();
})

//Functions
//Fix header and blurb
  // const theFixer = function(pos){
  //   $(window).scroll(function(e){

  //   })
  // }
  $.fn.followFrom = function (pos) {
      var $this = this,
          $window = $(window);

          console.log(`Triggering at ${pos}`)

      $window.scroll(function (e) {
          if ($window.scrollTop() > pos) {
            //Add Sticky to #header-nav
              $this.addClass('sticky');
            //Add Sticky to #blurb
              let blurbWidth = $('#blurb').width()
              console.log(blurbWidth);
              $('#blurb').addClass('sticky').width(blurbWidth);
            //Adjust padding on background
              $('.background').css(
                  "padding-top", "70px"
                )
          } else {
              $this.removeClass('sticky');
              $('.background').css({
                  "padding": "20px 150px"
              })
          }
      });
  };

//Managing Sample Tabs
  const sampleTabs = function(event){
    $('.tab-btn').removeClass('tab-btn-active');
    $('.hidden').hide();
    $(this).addClass('tab-btn-active');
    let chosen = $(this).attr('data-btn');
    let location = $(this).offset();
    $('#' + chosen).show();
    window.scrollTo(location);
    $('.btt').show();
  }
//Scroll to Top Function
  const scrollToTop = function(){
    window.scrollTo(0,0);
  }

//Listeners
  $('#header-nav').followFrom(55);
  $('#blurb').followFrom(55);

//On Clicks
//Tab Buttons
  $('.tab-btn').on('click', sampleTabs);
//Back To Top Button
  $('.btt').on('click', scrollToTop);
