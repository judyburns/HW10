/*
 * 1. For this assignment, you will use index.html from assignment HW6.
 * 2. Add a button titled "See My Favorite Things". When clicked, the button
 *    will run the script to load "entities.json" file asynchronously on 
 *    the web page.
 * 3. Parse all the fields and display them in a neatly organized way.
 */

$(document).ready(function () {
    $(".favorites-button").click(function () {
        $.getJSON('data/entities.json', function (result) {
            var msg = '';
            var $favoritesContainer = $('#favorites-container');
            $.each(result.favorites, function (i, field) {
                msg += '<div class="favorites"><figure>';
                msg += '<div class="fav-image">';
                msg += '<img src="' + field.path + '"' + ' alt= "favorite image" />';
                msg += '</div>';
                msg += '<figcaption class="fav-caption">'
                msg += '<p>' + field.name + '</p>';
                msg += '<p>' + field.desc + '</p>';
                msg += '</figcaption></figure></div>';
            });
            $favoritesContainer.html(msg);
            // fade in images one at a time
            $favoritesContainer.find(".favorites").each(function (index) {
                $(this).delay(2000 * index).animate({ opacity: 1 }, 3000)
            });
        });
    });
});