// ==UserScript==
// @name         Ward My Dash
// @namespace    https://github.com/DATrickster/WardMyDash
// @version      0.43
// @description  Adds warding sigils to your dashboard.
// @author       Tricky the Squirrel
// @include      *://www.tumblr.com/dashboard
// @updateURL    https://github.com/DATrickster/WardMyDash/blob/master/Sigils.user.js
// @downloadURL  https://github.com/DATrickster/WardMyDash/blob/master/Sigils.user.js
// @grant        none
// ==/UserScript==


var sDiv = document.createElement('div');
sDiv.id = 'sigils';
document.getElementsByTagName('body')[0].appendChild(sDiv);

document.getElementById('sigils').innerHTML += '<image style="position:fixed; left:0%; top:0%; z-index: -9999;" src="https://raw.githubusercontent.com/DATrickster/WardMyDash/master/GSigils/Guilt.png"></image><image style="position:fixed; right:0%; top:0%; z-index: -9999;" src="https://raw.githubusercontent.com/DATrickster/WardMyDash/master/GSigils/Threats.png"></image><image style="position:fixed; left:0%; bottom:0%; z-index: -9999;" src="https://raw.githubusercontent.com/DATrickster/WardMyDash/master/GSigils/Luck.png"></image><image style="position:fixed; right:0%; bottom:0%; z-index: -9999;" src="https://raw.githubusercontent.com/DATrickster/WardMyDash/master/GSigils/Spirits.png"></image>';
