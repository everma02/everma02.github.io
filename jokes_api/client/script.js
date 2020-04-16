/* jshint esversion: 6 */
/* jshint node: true */
/* jshint browser: true */
/* jshint jquery: true */
'use strict';

const base_url = "http://everma02.pythonanywhere.com/"

async function requestJoke(joke) {
    return await fetch(`${base_url}/v1/${joke}`)
    .then(response => response.json())
    .then(json => printData(json[joke]))
    .catch(error => console.log(error))
}

function printData(data) {
    let responseDiv = document.querySelector("#response");
    responseDiv.innerHTML = data;
}

