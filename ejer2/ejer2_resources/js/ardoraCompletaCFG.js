//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=6; attempts=0; attemptsMax=1;
var score=0; scoreMax=6; scoreInc=1; scoreDec=1
var typeGame=1;
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
var timeOnMessage=5; messageOk="Very good!"; messageTime=""; messageError="Wrong"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<p>1. Vanya lives in Cambridge. <select name="item1" id="item1" class="ardoraCombo"></select><br> </p><p> 2. Vanya likes Glasgow. <select name="item2" id="item2" class="ardoraCombo"></select><br> </p><p> 3. Emir is Turkish. <select name="item3" id="item3" class="ardoraCombo"></select><br> </p><p> 4. Emir has made baklava. <select name="item4" id="item4" class="ardoraCombo"></select><br> </p><p> 5. Yuna has never eaten Emir’s baklava before. <select name="item5" id="item5" class="ardoraCombo"></select><br> </p><p> 6. Vanya is happy with where she works. <select name="item6" id="item6" class="ardoraCombo"></select><br> </p><p> </p>'];
var b=["Mg==","NQ==","OA==","NA==","MTE=","Mw==","NQ==","MTQ=","Ng==","MTc=","MQ==","Mg=="];
var c=[4,5,5,4,5,4,5,4,4,5,5,4];
var answers=["True","False","False","True","False","True","False","True","True","False","False","True"];
var a=["2","2","3","4","4","3","5","5","6","6","1","1"];
var itemCorr=["0","0","0","0","0","0"];
var itemHelp=["","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="ZWplcjI="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tiUD=false;
var fHelp="Verdana, Geneva, sans-serif";
colorText="#000000";colorButton="#99CC33";colorBack="#FFFFFF";colorSele="#DCFAC0";
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
