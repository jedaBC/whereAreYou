//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=1;
var score=0; scoreMax=8; scoreInc=1; scoreDec=1
var typeGame=2;
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
var indexTXT=0; var txtC=['<p><b>A:</b> So where <input type="text" name="item1" id="item1" class="ardoraInput" > you from in the UK?<br> </p><p> <b>B:</b> I’m <input type="text" name="item2" id="item2" class="ardoraInput" > Swansea, in Wales.<br> </p><p> <b>A:</b> Oh, I love Wales!<br> </p><p> <b>B:</b> Me too, but I love London too. There’s always something interesting to do. What <input type="text" name="item3" id="item3" class="ardoraInput" > you? Where are you <input type="text" name="item4" id="item4" class="ardoraInput" > ? </p><p> <b>A:</b> I <input type="text" name="item5" id="item5" class="ardoraInput" > born in Singapore.<br> </p><p> <b>B:</b> I’ve never been to Singapore. What’s it <input type="text" name="item6" id="item6" class="ardoraInput" > ?<br> </p><p> <b>A:</b> It’s wonderful. It’s a modern city with lots of green parks. The people <input type="text" name="item7" id="item7" class="ardoraInput" > nice and the food is really good.<br> </p><p> <b>B:</b> It <input type="text" name="item8" id="item8" class="ardoraInput" > like a nice place!<br> </p><p> </p>'];
var b=["Ng==","NA==","Mg==","Mw==","NQ==","Nw==","OA==","MQ=="];
var c=[4,4,4,5,3,3,6,3];
var answers=["bGlrZQ==","ZnJvbQ==","ZnJvbQ==","YWJvdXQ=","d2Fz","YXJl","c291bmRz","YXJl"];
var a=["6","4","2","3","5","7","8","1"];
var itemCorr=["0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="ZWplcjQ="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tiUD=true;
var fHelp="Verdana, Geneva, sans-serif";
colorText="#000000";colorButton="#99CC33";colorBack="#FFFFFF";colorSele="#DCFAC0";
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
