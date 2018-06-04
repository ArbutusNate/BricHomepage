const seeMore = " See More Information ";
const seeLess = " See Less ";


$(window).ready(function() {
  $('.hidden').hide();
  $('.btt').hide();
  // $(window).resize();
})

//Large Size fancy JS
if ($(window).width() > 426){
  $.fn.followFrom = function (pos) {
      var $this = this,
          $window = $(window);

      $window.scroll(function (e) {
          if ($window.scrollTop() > pos) {
            //Add Sticky to #header-nav
              $('#header-nav').addClass('sticky');
            //Add Sticky to #blurb
              let blurbWidth = $('#blurb').width()
              console.log(blurbWidth);
              $('#blurb').addClass('sticky').width(blurbWidth);
            //Adjust padding on background
              $('.background').css(
                "padding-top", "68px"
              )
            //Move Logo
              $('#logo').addClass('sticky');
          } else {
            //Remove Stickies
              $('#header-nav').removeClass('sticky');
              $('#blurb').removeClass('sticky');
            //Reset Padding
              $('.background').css({
                "padding": "20px 150px"
              })
            //Reset Logo
              $('#logo').removeClass('sticky');
          }
      });
  };
  //Listeners
    $('#header-nav').followFrom(58);
} else {
  console.log('small screen');
}


//Functions

//Managing Sample Tabs
  const sampleTabs = function(event){
    $('.tab-btn').removeClass('tab-btn-active');
    $('.hidden').hide();
    $(this).addClass('tab-btn-active');
    let chosen = $(this).attr('data-btn');
    $('#' + chosen).show();
    if($(window).width() > 426){
      var location = $(this).offset();
    } else {
      var location = $('.memoir-container').offset();
      console.log(location);
      location.top = location.top - 63;
    }
    $('#blurb').hide();
    window.scrollTo(location);
    $('.btt').show();
  }
//Scroll to Top Function
  const scrollToTop = function(){
    window.scrollTo(0,0);
    $('#blurb').show();
  }
//Fancy Text
  const showMore = function(event){
    console.log($(this).text());
    let currentText = $(this).text();
    if (currentText == seeMore){
      return $(this).text(seeLess);
    };
    if (currentText == seeLess){
      return $(this).text(seeMore);
    };
  }

//On Clicks
//Tab Buttons
  $('.tab-btn').on('click', sampleTabs);
//Back To Top Button
  $('.btt').on('click', scrollToTop);
  $('.smi-btn').on('click', showMore);
