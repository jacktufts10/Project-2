//declaring new variable "images" to hold your array of objects. inside the array (square brackets), i've created javascript objects to hold the information pertinent to each project.
var images = [
    {
        title: "VivaCity Typeface",
        src: "Images/spread36-37.jpg",
        link: "https://jacktufts.design/vivacity-typeface"
    },

    {
        title: "Reflecting on Nostalgia",
        src: "Images/image1.jpg",
        link: "https://jacktufts.design/reflecting-on-nostalgia"
    },
    {
        title: "Two Designers Timeline",
        src: "Images/2dt.jpg",
        link: "https://jacktufts.design/two-designers-timeline"
    }
];

$("document").ready(function() {

    var counter = 0;

    $(".second-container").click(function() {
        //this stuff is from last time——————————————————————
        counter++;
        if(counter > images.length-1) {
            counter = 0;
        }
        let newMain = images[counter];

        $(".main-container").find("img").attr('src', `${newMain.src}`);

        $(".main-container").find("a").attr('href', `${newMain.link}`);

        $(".flextext").children("h1").text(`${newMain.title}`);

        let newNext;

        if(counter == images.length -1) {
            newNext = images[0];
        } else {
            newNext = images[counter+1];
        }

        $(".second-container").find("img").attr('src', `${newNext.src}`);

        //animation replay stuff—————————————————————————————

        //selecting all the elements that have animations attached to them and removing class "anim" (where the animation property is stored in the CSS). you can select multiple things at once by separating them with commas.
        $(".main-container img, .second-container img, .reveal-artifact").removeClass("anim");

        //triggering a DOM reflow. this is the "void" stuff in the codepen link you sent over. essentially, asking the DOM what the width (or height) of an element is forces it to recalculate that value, meaning the element is "repainted" onto the page as if it were first load
        $(".main-container img").width();
        $(".second-container img").width();
        $(".reveal-artifact").width();

        //adding back the class "anim", and since these elements were reflowed, the forgot they ran the animation in the first place and will do so again.
        $(".main-container img, .second-container img, .reveal-artifact").addClass("anim");
    });
    $(document).mousemove(function(e){
        mouseX = e.pageX - 30;
        mouseY = e.pageY - 30; });
        setInterval(function(){
        xp += ((mouseX - xp)/6);
        yp += ((mouseY - yp)/6);
        $("#cursor").css({left: xp +'px', top: yp +'px'});
      }, 20);

});
