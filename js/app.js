const seeMore = " See More Information ";
const seeLess = " See Less ";
var btnWidth = 0;


$(window).ready(function() {
  $('.hidden').hide();
  $('.btt').hide();
})

//Large Size fancy JS
  if ($(window).width() >= 800){
    $.fn.followFrom = function (pos) {
        var $this = this,
            $window = $(window);

        $window.scroll(function (e) {
            if ($window.scrollTop() > pos) {
              //Add Sticky to #header-nav
                $('#header-nav').addClass('sticky');
              //Add Sticky to #blurb
                let blurbWidth = $('#blurb').width()
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

//Sample Tabs
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
      location.top = location.top - 63;
    }
    $('#blurb').hide();
    window.scrollTo(location);
    $('.btt').show();
  }

//Scroll to Top Button
  const scrollToTop = function(){
    window.scrollTo(0,0);
    $('#blurb').show();
  }

//"Show More/Less" Buttons
  const showMore = function(event){
    let currentText = $(this).text();
    let currentWidth = $(this).outerWidth();
    // var btnWidth = currentWidth;

    if (currentText == seeMore){
      $(this).text(seeLess).css("width", currentWidth);
    };

    if (currentText == seeLess){
      $(this).text(seeMore);
    };
  }

//On Clicks
  //Tab Buttons
    $('.tab-btn').on('click', sampleTabs);
  //Back To Top Button
    $('.btt').on('click', scrollToTop);
    $('.smi-btn').on('click', showMore);
