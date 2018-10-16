$(function () {
    new WOW().init();
});
/* jquery function to include html file */
$(function () {
    $("#includedContent").load("fs18_navbar.html");
});
/* UniteGallery*/
jQuery(document).ready(function () {
    jQuery("#gallery").unitegallery({
        gallery_theme: "tilesgrid",
    });
    jQuery("#gallery_tp").unitegallery({
        gallery_theme: "tilesgrid",
        tile_enable_textpanel: true,
        tile_textpanel_title_text_align: "center"
    });
});
				