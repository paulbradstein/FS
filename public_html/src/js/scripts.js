/*W3 CSS function:
 function navMinIcon() {
 var x = document.getElementById("nav-min-icon");
 if (x.className.indexOf("w3-show") == -1) {
 x.className += " w3-show";
 } else {
 x.className = x.className.replace(" w3-show", "");
 }
 }
 */
/*W3 CSS function:
 var myIndex = 0;
 carousel();
 */
/*W3 CSS function:
 function carousel() {
 var i;
 var x = document.getElementsByClassName("mySlides");
 for (i = 0; i < x.length; i++) {
 x[i].style.display = "none";
 }
 myIndex++;
 if (myIndex > x.length) {
 myIndex = 1;
 }
 x[myIndex - 1].style.display = "block";
 setTimeout(carousel, 4000); // Change image every 2 seconds
 }
 */
$(function () {
    /*used for full size background image 
     $(window).on("load resize", function () {
     $(".fill-screen").css("height", window.innerHeight);
     }); */

    /*parallax scrolling with stellar.js. requires jquery 1.9.1
     $(window).stellar(); */

    /*initialize WOW for element animation */
    new WOW().init();
});
/*initialize nanogallery. NOTE some HoverEffects will cause image to show over your top menu. seems to be the ones that scale size */
$(document).ready(function () {
    $("#nanoGallery3").nanoGallery({
        thumbnailHoverEffect: 'labelAppear,labelOpacity50',
        //thumbnailHoverEffect: 'labelOpacity50,labelAppear75',
        thumbnailLabel: {
            position: 'overImageOnMiddle',
            display: true,
            displayDescription: true,
            titleMaxLength: 20,
            hideIcons: true,
            align: 'center',
            itemsCount: 'description'
        }
    }
    );

});
$(function () {
    $("#includedContent").load("fs_navbar.html");
});
