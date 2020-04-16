/* jshint esversion: 6 */
/* jshint node: true */
/* jshint browser: true */
/* jshint jquery: true */
'use strict';

const base_url = "https://everma02.pythonanywhere.com/"

async function requestJoke(jokes) {
    return await fetch(`${base_url}/v1/${jokes}`)
    .then(response => response.json())
    .then(json => printData(json[jokes]))
    .catch(error => console.log(error))
}

function printData(data) {
    let responseDiv = document.querySelector("#response");
    responseDiv.innerHTML = data;
}

