
//declaring new variable "images" to hold your array of objects. inside the array (square brackets), i've created javascript objects to hold the information pertinent to each project.

var mouseX = 0, mouseY = 0;
var xp = 0, yp = 0;

var images = [
    {
        title: "VivaCity Typeface",
        src: "Images/spread36-37.jpg",
        link: "https://jacktufts.design/vivacity-typeface"
    },
​
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
​
$("document").ready(function() {
    //declare new variable "counter" and set to 0. This variable is going to hold how many projects have been clicked through, assuming you're starting with your first project already in your HTML.
    var counter = 0;
​
    //attaching a click event listener to your second-container
    $(".second-container").click(function() {
        //when second-container is clicked, add 1 to whatever is stored in "counter"
        counter++;
​
        //this conditional is in case someone has clicked through all available projects. since counter was updated by 1 with each click, if that click number is greater than the number of objects inside array "images", we reset the counter. the -1 is to account for the way array indexes work, where the first item is actually at index 0 instead of 1, whereas the length of an array counts up from 1 not 0.
        if(counter > images.length-1) {
            counter = 0;
        }
​
        //declare new variable "newMain" to hold whatever JavaScript object is stored at the index of "images" corresponding to the counter
        let newMain = images[counter];
​
        //using jQuery, i'm selecting the main-container, then searching its descendants for the <img> inside of it. From there, i'm using template literals (covered in the "catchall" lecture) to update its src attribute with whatever src corresponds to the JavaScript object stored in newMain.
        $(".main-container").find("img").attr('src', `${newMain.src}`);
​
        //same idea with the link
        $(".main-container").find("a").attr('href', `${newMain.link}`);
​
        //same idea with the title, but this time i'm selecting the h1 that is a direct child of ".flextext" and updating the text content between the h1 tags
        $(".flextext").children("h1").text(`${newMain.title}`);
​
​
        //now updating the second-container. this one's a little tricker because we have to account for the possibility that there isn't a "next" image and loop back to the beginning of the array.
​
        //declare new variable "newNext". I'm not setting it to anything at the moment so we can set the value conditionally.
        let newNext;
​
        //if counter is at the last image of the array, set "newNext" back to the first image (the javascript object stored at index 0)
        if(counter == images.length -1) {
            newNext = images[0];
        } else {
            //otherwise, get the image stored in the next index after the current counter
            newNext = images[counter+1];
        }
​
        //select the second-container, find its descendent image, and update its src attribute with the src stored in the newNext object
        $(".second-container").find("img").attr('src', `${newNext.src}`);
​
​
    });

 
     
    $(document).mousemove(function(e){
      mouseX = e.pageX - 30;
      mouseY = e.pageY - 30; 
    });
      
    setInterval(function(){
      xp += ((mouseX - xp)/6);
      yp += ((mouseY - yp)/6);
      $("#cursor").css({left: xp +'px', top: yp +'px'});
    }, 20);
​
});
