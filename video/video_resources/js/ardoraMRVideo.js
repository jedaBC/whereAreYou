//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var cssLineSty="solid";
var cssShadow="0px -4px 2px 0px rgba(50, 50, 50, 0.3)";
var indexMedia=0
var fileMp4=["video_resources/media/BCLearnenglish_656.mp4"];
var fileOgv=[""];
var fileTxt=[""];
var fileW=[600];
var fileH=[400];
var fileMute=[false];
var fileAutoPlay=["autoplay"];
var fileLoop=[""];
var filePoster=[""];
var fileLabel=[""];
$(document).ready(function(){showVideo(indexMedia);
$("#ButTxt").click(function (){if (parseInt($("#txtBar").css("marginBottom"))<0){$("#bottomBar").css("borderTopStyle","dashed");$("#bottomBar").css("box-shadow","2px -1px 2px 0px rgba(50, 50, 50, 0.3)");$("#txtBar").animate({ "marginBottom":$("#bottomBar").css("height") });}else{$("#bottomBar").css("borderTopStyle",cssLineSty);$("#bottomBar").css("box-shadow",cssShadow);$("#txtBar").animate({ "marginBottom": "-230px"});}});
$("#goLeftBut").click(function () {if (indexMedia>0){indexMedia--;showVideo(indexMedia)}});$("#goRightBut").click(function () {if (indexMedia<fileMp4.length-1){indexMedia++;showVideo(indexMedia)}});});
function showVideo(num){var vMute="";var vPoster="";if (fileMute[num]){ vMute="muted"} $("#goLeftBut").css("visibility", "visible"); $("#goRightBut").css("visibility", "visible"); if (num==0){$("#goLeftBut").css("visibility", "hidden");} if (num==fileMp4.length-1){$("#goRightBut").css("visibility","hidden");}
if (filePoster[num].localeCompare("")!=0){ vPoster="poster='"+filePoster[num]+"'";}
$("#bottomBar").css("borderBottomStyle", cssLineSty);$("#bottomBar").css("box-shadow", cssShadow);
$("#txtBar").animate({ "marginBottom": "-230px"});
if (fileTxt[num].localeCompare("")==0){$("#ButTxt").css("visibility","hidden");}else{$("#ButTxt").css("visibility","visible");}
var code="<div id='idVideo'><video preload='auto' width='"+String(fileW[num])+"' height='"+String(fileH[num])+"' controls "+vMute+" "+fileAutoPlay[num]+" "+fileLoop[num]+" "+vPoster+">";
if (fileMp4[num].localeCompare("")!=0) {code=code+"<source src='"+fileMp4[num]+"' type='video/mp4'/>"}
if (fileOgv[num].localeCompare("")!=0) {code=code+"<source src='"+fileOgv[num]+"' type='video/ogg'/>"}code=code+"</video><p>"+fileLabel[num]+"</p></div>"
$("#ardoraAct").html(code);var cssObj = {"width":String(fileW[num])+"px","margin-top" : "-"+String(fileH[num]/2) +"px", "margin-left" : "-"+String(fileW[num]/2) +"px" };$("#idVideo").css(cssObj);$("#txtBar").html("<p>"+fileTxt[num]+"</p>");}
function MRVideoWords(input) {var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = "";var i = 0;
var btest = /[^A-Za-z0-9\+\/\=]/g; if (btest.exec(input)) { alert("Invalid characters");} input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
do { enc1 = wordsStr.indexOf(input.charAt(i++)); enc2 = wordsStr.indexOf(input.charAt(i++)); enc3 = wordsStr.indexOf(input.charAt(i++)); enc4 = wordsStr.indexOf(input.charAt(i++)); chr1 = (enc1 << 2) | (enc2 >> 4); chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);chr3 = ((enc3 & 3) << 6) | enc4;
output = output + String.fromCharCode(chr1);if (enc3 != 64) {output = output + String.fromCharCode(chr2);} if (enc4 != 64) {output = output + String.fromCharCode(chr3);}
chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = "";} while (i < input.length);return unescape(output);}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
