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
    var myColorScheme = {
        thumbnail: {
            background: '#fff',
            border: '1px solid #ccc',
            labelBackground: 'transparent',
            labelOpacity: '0.8',
            titleColor: '#fff',
            descriptionColor: '#eee'
        }
    };
    var myColorSchemeViewer = {
        background: 'rgba(1, 1, 1, 0.75)',
        imageBorder: '15px solid #f8f8f8',
        imageBoxShadow: '#888 0px 0px 20px',
        barBackground: '#222',
        barBorder: '2px solid #111',
        barColor: '#eee',
        barDescriptionColor: '#aaa'
    };
    $("#nanoGallery3").nanoGallery({
        thumbnailHoverEffect: 'labelAppear,labelOpacity50',
        colorScheme: myColorScheme,
        colorSchemeViewer: myColorSchemeViewer,
        thumbnailHeight: 225,
        thumbnailWidth: 300,
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
/* jquery function to include html file */
$(function () {
    $("#includedContent").load("fs_navbar.html");
});
