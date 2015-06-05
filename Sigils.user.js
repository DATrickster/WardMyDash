// ==UserScript==
// @name         Ward My Dash
// @namespace    https://5eabe5388d40d6d55d69670321dac657a25c3ce7.googledrive.com/host/0B4jyzgJRuqLSU0N3bHBGelA3LWM/Sigils/
// @version      0.37
// @description  Adds warding sigils to your dashboard.
// @author       The Trickster
// @include      *://www.tumblr.com/dashboard
// @updateURL    https://5eabe5388d40d6d55d69670321dac657a25c3ce7.googledrive.com/host/0B4jyzgJRuqLSU0N3bHBGelA3LWM/Sigils/Sigils.user.js
// @downloadURL  https://5eabe5388d40d6d55d69670321dac657a25c3ce7.googledrive.com/host/0B4jyzgJRuqLSU0N3bHBGelA3LWM/Sigils/Sigils.user.js
// @grant        none
// ==/UserScript==


var sDiv = document.createElement('div');
sDiv.id = 'sigils';
document.getElementsByTagName('body')[0].appendChild(sDiv);

document.getElementById('sigils').innerHTML += '<image style="position:fixed; left:0%; top:0%; z-index: 9999;" src="https://5eabe5388d40d6d55d69670321dac657a25c3ce7.googledrive.com/host/0B4jyzgJRuqLSU0N3bHBGelA3LWM/Sigils/Guilt.png"></image><image style="position:fixed; right:0%; top:0%; z-index: 9999;" src="https://5eabe5388d40d6d55d69670321dac657a25c3ce7.googledrive.com/host/0B4jyzgJRuqLSU0N3bHBGelA3LWM/Sigils/Threats.png"></image><image style="position:fixed; left:0%; bottom:0%; z-index: 9999;" src="https://5eabe5388d40d6d55d69670321dac657a25c3ce7.googledrive.com/host/0B4jyzgJRuqLSU0N3bHBGelA3LWM/Sigils/Luck.png"></image><image style="position:fixed; right:0%; bottom:0%; z-index: 9999;" src="https://5eabe5388d40d6d55d69670321dac657a25c3ce7.googledrive.com/host/0B4jyzgJRuqLSU0N3bHBGelA3LWM/Sigils/Spirits.png"></image>';