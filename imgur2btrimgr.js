// ==UserScript==
// @name         imgur2btrimgr
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Redirect imgur to btrimgr
// @author       You
// @match      /https\:\/\/*imgur.com\/(gallery|a)\/*
// @icon         https://www.google.com/s2/favicons?domain=imgur.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    if ( /imgur/.test(location.host) ){
        var newURL = "https://btrimgr.com" + location.pathname;
        console.log("[Userscript: imgur2btrimgur] Redirecting " + location.href + " to " + newURL);
        location.replace(newURL);
}
})();
