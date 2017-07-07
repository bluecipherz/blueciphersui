$(window).ready(function (e) {  

    var bluePages = new BluePages(); // initializing BluePages

    // page setup
    
    var blue3d = new Blue3D(); 

        blue3d.render = false;
        blue3d.viewPortLimit = resp.tab_land;

        blue3d.new3dObject({ x_lim:20,  y_lim:20,  el:$('#logoMain')  , depth: 0  });
        blue3d.new3dObject({ x_lim:15,  y_lim:17,  el:$('#logoShade') , depth: 50 }); 
        blue3d.new3dObject({ x_lim:8,   y_lim:8,   el:$('.bg')        , depth: 7  }); 

    var blue3dMid = new Blue3D();  
        blue3dMid.viewPortLimit = resp.tab_land;
        blue3dMid.new3dObject({ x_lim:4,  y_lim:4,  el:$('.p3_man')  , depth: 40  });
        blue3dMid.new3dObject({ x_lim:1,  y_lim:1,  el:$('.p3_bg1')  , depth: 5  });
        blue3dMid.new3dObject({ x_lim:1,  y_lim:1,  el:$('.p3_bg2')  , depth: 8  });
        blue3dMid.new3dObject({ x_lim:0,  y_lim:0,  el:$('.p3_mid1')  , depth: 20  });
        blue3dMid.new3dObject({ x_lim:5,  y_lim:5,  el:$('.p3_front1')  , depth: -30  });
        blue3dMid.new3dObject({ x_lim:5,  y_lim:5,  el:$('.p3_front2')  , depth: -16  }); 

        blue3dMid.new3dObject({ x_lim:10,  y_lim:5,  el:$('.p3heading')  , depth: -4  });
        blue3dMid.new3dObject({ x_lim:5,  y_lim:5,  el:$('.p3cont')  , depth: -5  });

        blue3dMid.render = false;  

    // blue pages setup ================================================================================

        bluePages.container = $('#bluePages'); // Setting Main Container  
        bluePages.animSpeed = 400; 

        bluePages.pageViewControl = [
            // {name:'page1Ctrl',views:[]} ,   
            // {name:'page2Ctrl',views:[]} ,
            // {name:'page3Ctrl',views:[]} ,
            // {name:'page4Ctrl',views:[]} ,
            // {name:'page4RespCtrl',views:['phone','tab_pot']} ,
            // {name:'page5Ctrl',views:[]} ,
            // {name:'page6Ctrl',views:[]} ,
        ];

        bluePages.controller('page1Ctrl',function($Scope){  

            blue3dMid.render = false;
        }); 

        bluePages.controller('page2Ctrl',function(){ 
            blue3dMid.render = true; 
            setPageAnim($('.p2_poly')); 

        }); 

        bluePages.controller('page3Ctrl',function($scope){ 
            blue3dMid.render = true;    
            setPageAnim($('.p3heading'));
        });

        bluePages.controller('page4Ctrl',function(){ 
            blue3dMid.render = true;

        });

        bluePages.controller('page6Ctrl',function(){ 
        
        });

        bluePages.controller('page5Ctrl',function(){ 
            blue3dMid.render = false;
            setPageAnim($('.p5r1'));
            setPageAnim($('.p5r2'));
        });

        if(resp.ww < resp.tab_land){ 
            setPageAnim($('.p5r1'));
            setPageAnim($('.p5r2'));
        }

        bluePages.init(); // starting BluePages
        bluePages.disableScroll();
        bluePages.touchStatus = false;

        bluePages.engine = function(me){ 

        }; 


    // user functions

        function setPageAnim(el){
            el.addClass('active');
            setTimeout(function(){ 
                el.removeClass('transparent');
            },2000);
        }

    // page setup =================================================================================

    // var isP2Pop = false;
    // var isP2PopProcessing = false;
    // $('.b_pageBtn').click(function(){
    //     var that = $(this);
    //     if(!isP2PopProcessing){ 
    //         if(!isP2Pop){ 
    //             isP2PopProcessing = true;
    //             isP2Pop = true;
    //             that.addClass('active');
    //             $('.b_pb_box').addClass('active');
    //             setTimeout(function(){
    //                 that.addClass('activated');
    //             },100);
    //         }else{
    //             isP2Pop = false;
    //             closeP2pPop();
    //         }
    //         setTimeout(function(){
    //             isP2PopProcessing = false;
    //             console.log(isP2PopProcessing);
    //         },1000);
    //     }
    // });

    // function closeP2pPop(){
    //             console.log(isP2PopProcessing);
    //     if(!isP2PopProcessing){
    //         isP2PopProcessing = true;
    //         $('.p2_poly > div').removeClass('active');
    //         setTimeout(function(){
    //             $('.p2_poly > div').removeClass('activated');
    //         },800); 
    //     }
    // }


    var wh = $(window).height();
    var el = $('#logoMain');
    el.css('margin-top', ( wh - 300 ) / 2 ); 
    $('#logoShade').css('top', ( wh - 300 ) / 2 ); 

    el.addClass('animate');

    setTimeout(function(){
        el.addClass('fill');
    },2000); 

    setTimeout(function(){
        $('.hm_title').fadeIn();
    },4000); 
    setTimeout(function(){ 
        if(!resp.is.tab_land()){ 
          blue3d.render = true;  
        }
        bluePages.enableScroll();
        bluePages.touchStatus = true;
        bluePages.enablePagination();

        $('.bg').addClass('active'); 
        $('.logoShade').addClass('active');
        $('.logoMain').addClass('minify');
    	$('header').removeClass('inactive');

    	// $('.bgInner').addClass('active');

    },3000); 

    // $('.b_pageBtn').click(function(){
    //   $('#b-slide-p2').addClass('right');
    //   p2SetInnerPage($(this));
    // });

    // function p2SetInnerPage(el){
    //   var pid = el.attr('pid');
    // }

    // if(resp.is.phone()){
    //   var winZoom = resp.ww / resp.phone * 100;
    //   console.log(winZoom);
    //   $('body').css({zoom:winZoom+'%'});
    // }

if(resp.ww > resp.tab_pot){


particlesJS("jaguar-js",{
  "particles": {
    "number": {
      "value": 30,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#fff"
    },
    "shape": {
      "type": "polygon",
      "stroke": {
        "width": 1,
        "color": "#9ee6d0"
      },
      "polygon": {
        "nb_sides": 6
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.1843923869995351,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 24.05118091298284,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 160,
      "color": "#000",
      "opacity": 0.2,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3.206824121731046,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": { 
          "opacity": 0.5,
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

}

// $('.respDoc').text($(window).width() + ' X ' + resp.wh);
 

 
});

