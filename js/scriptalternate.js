
var buttonscroll ="no";


var stopped = "yes";
var displayed2 = "yes";
var displayed3 = "yes";
var displayed4 = "yes";
var displayed = "no";


sct = $(document).scrollTop();
function scrollVideo() {

    scrollPosition = $(document).scrollTop();


    if(( stopped = "no" &&sct-scrollPosition<0) || buttonscroll ==="yes") {
        buttonscroll="no";
        if (displayed == "no" && $(document).scrollTop() >= 600 && $(document).scrollTop() <= 1200) {
            removediv("#secc1", "#landscape", "#secc2", "#mountains");
            $(".ist").animate({
                opacity: 0
            });
            displayed = 'yes';
            displayed2 = "no";
        }


        else if (displayed2 == "no"&& $(document).scrollTop() >= 1200 && $(document).scrollTop() <= 1800 ) {
            removediv("#secc2", "#mountains","#secc3","#clouds");
            $(".snd").animate({
                opacity:0
            });
            displayed2 = "yes";
            displayed3 = "no";



        }

        else if (displayed3 == "no"&& $(document).scrollTop() >= 1800 && $(document).scrollTop() <= 2400 ) {
            removediv("#secc3","#clouds","#secc4","#clouds");
            $(".trd").animate({
                opacity:0
            });
            displayed3 = "yes";
            displayed4 = "no";


        }


        else if (displayed4 == "no" && $(document).scrollTop() >= 2400 ) {
            removediv("#secc4","#clouds","#secc5","#landscape");
            $(".fth").animate({
                opacity:0
            });
            displayed = "yes";
            displayed2 = "yes";
            displayed3 = "yes";
            displayed4 = "yes";
            stopped = "yes";

            $("#navbar").animate({
                opacity:1,

            },1000);

            $("#clockdiv").animate({
                top: "60%",

            }, 500);

            $("#box").animate({
                opacity:.8,
                height:'250px',
                width:'250px'

            }, 500);

            $('.scroll').animate({
                opacity:0
            });




        }
        }
    sct = scrollPosition;
}

$(window).scroll(function(e) {
    scrollVideo()
});




var secc1animate = 1;




function deletediv(){

    $('#logo').animate({
        width:"70%",
        height:"70%",
        opacity:0

    },400,function () {
        del = document.getElementById("logo");
        del.remove();

    });


    $('#hider').animate({

        opacity:0

    },500,function () {
        del = document.getElementById("hider");
        del.remove();

    });

    $(".loading").animate({
        opacity:1,

    },1000);


    if(secc1animate){
        secc1animate = 0;
        animatedivs("#secc1","#landscape")

    }


    $('.emailpng').animate({
        opacity:1
    });

    $('.scroll').animate({
        opacity:.7
    });


    stopped = "no";

}



function animatedivs(divid,imgid){

    if (screen.width >= 600) {
        $(divid).animate({
            top: "40%",
            opacity:1


        }, 800);

        addBlur();

    }
    else {
        $(divid).animate({
            opacity:1


        }, 800);
    }






    $(imgid).animate({
        bottom:"0px",
        opacity:1,


    }, 900)


}


function removediv(divid,imgid,nextdivid,nextimgid) {
    $(divid).animate({
        top: "-20%",
        opacity:0


    }, 500);

    $(imgid).animate({
        bottom:"-400px",
        opacity:0


    }, 500,function () {
        animatedivs(nextdivid,nextimgid);

    });

    if (screen.width >= 600) {
        removeBlur();
    }

}

function addBlur()
{

    $('video').css("-webkit-filter" ,"blur(5px) brightness(85%)");
    $('video').css("-moz-filter" ,"blur(5px)");
    $('video').css("-ms-filter" ,"blur(5px)");

}

function removeBlur(){
    $('video').css("-webkit-filter" ,"blur(0px) brightness(100%)");
    $('video').css("-moz-filter" ,"blur(0px)");
    $('video').css("-ms-filter" ,"blur(0px)");
}


function scrolldown() {
    buttonscroll = "yes";
    scrollVideo();
}
