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
              // $this.css({
              //     position: 'initial',
              //     top: pos
              // });
              $this.addClass('sticky');
              // $('.background').css(
              //     "padding-top", "100px"
              //   )
          } else {
              $this.removeClass('sticky');
              // $('.background').css(
              //     "padding-top", "initial"
              //   );

              // $this.css({
              //     position: 'fixed',
              //     top: 0
              //     // z-index: 10
              // });
              // $('.background').css({
              //     padding: 50
              // })
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

//On Clicks
//Tab Buttons
  $('.tab-btn').on('click', sampleTabs);
//Back To Top Button
  $('.btt').on('click', scrollToTop);
