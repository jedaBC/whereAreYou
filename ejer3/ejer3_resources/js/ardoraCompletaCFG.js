//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=1;
var score=0; scoreMax=8; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="'Arial Black', Gadget, sans-serif";
var timeOnMessage=5; messageOk="Very good!!"; messageTime=""; messageError="Wrong"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<p><b>Emir:</b> So, <input type="text" name="item1" id="item1" class="ardoraDropInput" readonly> , Vanya?<br> </p><p> <b>Vanya:</b> I was born in Cambridge, but <input type="text" name="item2" id="item2" class="ardoraDropInput" readonly> Glasgow.<br> </p><p> <b>Emir:</b> I’ve never been to Glasgow. <input type="text" name="item3" id="item3" class="ardoraDropInput" readonly>?<br> </p><p> <b>Vanya:</b>  <input type="text" name="item4" id="item4" class="ardoraDropInput" readonly>. There’s always something interesting to do and <input type="text" name="item5" id="item5" class="ardoraDropInput" readonly>.<br> </p><p> <b>Emir:</b> It sounds like <input type="text" name="item6" id="item6" class="ardoraDropInput" readonly>.<br> </p><p> <b>Vanya:</b> It is. I love it!  <input type="text" name="item7" id="item7" class="ardoraDropInput" readonly>? <input type="text" name="item8" id="item8" class="ardoraDropInput" readonly>?<br> </p><p> <b>Emir:</b> I’m from Istanbul.<br> </p><p> <b>Vanya:</b> Oh, I love Istanbul!<br> </p><p> </p>'];
var answers=["What’s it like","It’s wonderful","the people are very friendly","I live in","a nice place to live","where are you from","What about you","Where are you from in Turkey"];
var a=["Mw==","NA==","NQ==","Mg==","Ng==","MQ==","Nw==","OA=="];
var itemCorr=["0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="ZWplcjM="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var fHelp="Verdana, Geneva, sans-serif";
colorText="#000000";colorButton="#99CC33";colorBack="#FFFFFF";colorSele="#DCFAC0";
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
