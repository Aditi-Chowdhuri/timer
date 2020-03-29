 function check(value){
    if(value<10){
        value="0"+value.toString();
    }
    else
        value=value.toString();
    return value;
 }

 function start(){
    
    var sec=((new Date("May 01 2020 22:00").getTime())-(new Date().getTime()))/1000;
    var hours=check(Math.floor(Math.floor(sec/(60*60))/24));
    sec = sec%(60*60*24);
    var min=check(Math.floor(sec/(60*60)));
    sec=sec%(60*60);
    sec=check(Math.floor(sec/60));
    console.log(hours+" "+min+" "+sec);

     animator('#hour',hours);
     animator('#min',min);
     animator('#sec',sec);
     if(hours==="00"&&min==="00"&&sec==="00"){
        swal({
            title: 'Time up !!!',
            animation: false,
            imageUrl: 'image.jpg',
            customClass: 'animated tada'
          });
        clearTimeout(timer);
     }
    var timer=setTimeout(start,1000);

    }

    function animator(id,value){
        if(value.charAt(0)!=($(id+'1').find('.top').html())){
            animateFigure($(id+'1'),value.charAt(0));
        }
        if(value.charAt(1)!=($(id+'2').find('.top').html())){
            animateFigure($(id+'2'),value.charAt(1));
        }

    }

  function animateFigure($el, value) {
     var that         = this,
		     $top         = $el.find('.top'),
         $bottom      = $el.find('.bottom'),
         $back_top    = $el.find('.top-back'),
         $back_bottom = $el.find('.bottom-back');

        // Before we begin, change the back value
        $back_top.find('span').html(value);

        // Also change the back bottom value
        $back_bottom.find('span').html(value);

        // Then animate
        TweenMax.to($top, 0.8, {
        rotationX           : '-180deg',
        transformPerspective: 300,
	      ease                : Quart.easeOut,
        onComplete          : function() {

            $top.html(value);

            $bottom.html(value);

            TweenMax.set($top, { rotationX: 0 });
        }
    });

    TweenMax.to($back_top, 0.8, {
        rotationX           : 0,
        transformPerspective: 300,
	      ease                : Quart.easeOut,
        clearProps          : 'all'
    });
  }

  window.onload=start;
