// ==UserScript==
// @name         Reddit HQ images
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Always view high quality images on reddit
// @author       You
// @match        https://*preview.redd.it/*
// @icon         https://www.google.com/s2/favicons?domain=reddit.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...
    var newURL = "https://i.redd.it" + location.pathname;
    console.log("[Userscript: Reddit HQ Images] Redirecting to " + newURL);
    location.replace(newURL);
})();
