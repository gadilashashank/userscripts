// ==UserScript==
// @name         mio downloader
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Download from mio.to
// @author       You
// @match        https://mio.to/*
// @icon         https://www.google.com/s2/favicons?domain=mio.to
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.jQuery('body').on('click', '.song-link', function(e){
        var element = e.currentTarget;
        var album_id = element.getAttribute("album_id");
        var track_artist = element.getAttribute("track_artist");
        var track_album = element.getAttribute("track_album");
        var disc_number = element.getAttribute("disc_number");
        var track_number = element.getAttribute("track_number");
        var track_name = element.getAttribute("track_name");
        var artist = track_artist.replace('["', "").replace('"]', "").replace('"', "");

        var audio_url;
        if ( !album_id.includes("/") ){
            audio_url = (
                "https://media-audio.mio.to/various_artists/"
                + album_id[0].toUpperCase()
                + "/"
                + album_id
                + "/"
                + disc_number
                + "_"
                + track_number
                + " - "
                + track_name
                + "-vbr-V5.mp3"
            )
        }
        else{
            audio_url = (
                "https://media-audio.mio.to/by_artist/"
                + album_id[0].toUpperCase()
                + "/"
                + album_id
                + "/"
                + disc_number
                + "_"
                + track_number
                + " - "
                + track_name
                + "-vbr-V5.mp3"
            )
        }

        // Handle edge case to remove quotation marks if any in the URL
        audio_url = audio_url.replace(/['"]+/g, '');

        console.log(audio_url);
        window.open(audio_url);
    });

})();
