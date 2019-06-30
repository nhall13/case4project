/*
Life on Rocks wildlife Cruises
Author: Naomi Hall
Date: 6/27/2019

Filename: script.js
*/

/* $("ul.mainmenu li").children("ul").addClass("show"); */
function display (event) {
    $(event.currentTarget).children("ul").addClass("show");
}
function hide (event) {
    $(event.currentTarget).children("ul").removeClass("show");
}
$("ul.mainmenu li").hover(display,hide);