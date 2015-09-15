var $ = function (id) {
    return document.getElementById(id); 
}
var result = 0;	
// This is the calculate_click event handler
var trivia_click = function () {
	
	// get user entries
	var a1 = $("answer1").value;
    var a2 = $("answer2").value;
	var a3 = $("answer3").value;
	 var a4 =  $("answer4").value;
	  var a5 = $("answer5").value;
	  //puts user entries to uppercase
	  var ans1 = a1.toUpperCase();
	  var ans2 = a2.toUpperCase();
	  var ans3 = a3.toUpperCase();
	  var ans4 = a4.toUpperCase();
	  var ans5 = a5.toUpperCase();


		if (ans1 == "THE NILE")//if the answer is correct adds on 1 to result, displays correct in the innerhtml and adds a button
								//allowing user to view more info
		{
			result = result + 1;
			$("a1").innerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="200" height="200" title="main"><param name="movie" value="correct.swf"> <param name="quality" value="high"><embed src="correct.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="200" height="200"></embed></object>';
			$("b1").innerHTML = '<button id="btn1" name="btn1" onclick = "openWeb1()">View More Information</button>';
			
		}
		
		else {//if answer is wrong, displays incorrect in innerhtml and shows a button to view the answer
			$("a1").innerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="200" height="200" title="main"><param name="movie" value="incorrect.swf"> <param name="quality" value="high"><embed src="incorrect.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="200" height="200"></embed></object>';
			$("b1").innerHTML = '<button id="btn1" name="btn1" onclick = "ViewAnswer1()">View Answer</button>';
		}
		if (ans2 == "HERESY")//if the answer is correct adds on 1 to result, displays correct in the innerhtml and adds a button
								//allowing user to view more info
		{
			result = result + 1;
			$("a2").innerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="200" height="200" title="main"><param name="movie" value="correct.swf"> <param name="quality" value="high"><embed src="correct.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="200" height="200"></embed></object>';
			$("b2").innerHTML = '<button id="btn2" name="btn2" onclick = "openWeb2()">View More Information</button>';
		}
		else//if answer is wrong, displays incorrect in innerhtml and shows a button to view the answer
		{
			$("a2").innerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="200" height="200" title="main"><param name="movie" value="incorrect.swf"> <param name="quality" value="high"><embed src="incorrect.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="200" height="200"></embed></object>';
			$("b2").innerHTML = '<button id="btn2" name="btn2" onclick = "ViewAnswer2()">View Answer</button>';
		}
		if (ans3 == "SUGAR LOAF")//if the answer is correct adds on 1 to result, displays correct in the innerhtml and adds a button
								//allowing user to view more info
		{
			result = result + 1;
			$("a3").innerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="200" height="200" title="main"><param name="movie" value="correct.swf"> <param name="quality" value="high"><embed src="correct.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="200" height="200"></embed></object>';
			$("b3").innerHTML = '<button id="btn3" name="btn3" onclick = "openWeb3()">View More Information</button>';
		}
		else//if answer is wrong, displays incorrect in innerhtml and shows a button to view the answer
		{
			$("a3").innerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="200" height="200" title="main"><param name="movie" value="incorrect.swf"> <param name="quality" value="high"><embed src="incorrect.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="200" height="200"></embed></object>';
			$("b3").innerHTML = '<button id="btn3" name="btn3" onclick = "ViewAnswer3()">View Answer</button>';
			
		}
		if (ans4 == "TITAN")//if the answer is correct adds on 1 to result, displays correct in the innerhtml and adds a button
								//allowing user to view more info
		{
			result = result + 1;
			$("a4").innerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="200" height="200" title="main"><param name="movie" value="correct.swf"> <param name="quality" value="high"><embed src="correct.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="200" height="200"></embed></object>';
			$("b4").innerHTML = '<button id="btn4" name="btn4" onclick = "openWeb4()">View More Information</button>';
		}
		else//if answer is wrong, displays incorrect in innerhtml and shows a button to view the answer
		{
			$("a4").innerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="200" height="200" title="main"><param name="movie" value="incorrect.swf"> <param name="quality" value="high"><embed src="incorrect.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="200" height="200"></embed></object>';
			$("b4").innerHTML = '<button id="btn4" name="btn4" onclick = "ViewAnswer4()">View Answer</button>';
		}
		if (ans5 == "OFFALY")//if the answer is correct adds on 1 to result, displays correct in the innerhtml and adds a button
								//allowing user to view more info
		{
			result = result + 1;
			$("a5").innerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="200" height="200" title="main"><param name="movie" value="correct.swf"> <param name="quality" value="high"><embed src="correct.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="200" height="200"></embed></object>';
			$("b5").innerHTML = '<button id="btn5" name="btn5" onclick = "openWeb5()">View More Information</button>';
		}
		else//if answer is wrong, displays incorrect in innerhtml and shows a button to view the answer
		{
			$("a5").innerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="200" height="200" title="main"><param name="movie" value="incorrect.swf"> <param name="quality" value="high"><embed src="incorrect.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="200" height="200"></embed></object>';
			$("b5").innerHTML = '<button id="btn5" name="btn5" onclick = "ViewAnswer5()">View Answer</button>';
		}
		
		$("R1").innerHTML = "Final Result is: "+result+" out of 5";//display final result
		if (result > 2)//depending on the users result an embedded mp3 will play
			$("s1").innerHTML = '<embed src="success.mp3" hidden = "true" autostart="true"loop="false"><noembed><bgsound src="success.wav" loop="1"></noembed></embed>';
		
		else
			$("s1").innerHTML = '<embed src="boo.mp3" hidden = "true" autostart="true"loop="false"><noembed><bgsound src="boo.mp3" loop="1"></noembed></embed>';
		
	
}

var Clue1 = function()//allows user to view a clue
{
		alert("T** N***");
}

var Clue2 = function()//allows user to view a clue
{
		alert("H****y");
}

var Clue3 = function()//allows user to view a clue
{
		alert("S**** L***");
}

var Clue4 = function()//allows user to view a clue
{
		alert("T****");
}
//allows user to view a clue
var Clue5 = function()
{
		alert("O*****");
}

var openWeb1 = function()//allows user to open wikipedia page
{
	window.open("http://en.wikipedia.org/wiki/Nile");
}

var ViewAnswer1 = function()//allows user to see correct ans 
{
	alert("The answer is The Nile");
}

var openWeb2 = function()//allows user to open wikipedia page
{
	window.open("http://en.wikipedia.org/wiki/Inferno_%28Dante%29#Sixth_Circle_.28Heresy.29");
}

var ViewAnswer2 = function()//allows user to see correct ans 
{
	alert("The answer is Heresy");
}

var openWeb3 = function()//allows user to open wikipedia page
{
	window.open("http://en.wikipedia.org/wiki/Sugarloaf_Mountain");
}

var ViewAnswer3 = function()//allows user to see correct ans 
{
	alert("The answer is Sugar Loaf Mountain");
}

var openWeb4 = function()//allows user to open wikipedia page
{
	window.open("http://en.wikipedia.org/wiki/Titan_%28moon%29");
}

var ViewAnswer4 = function()//allows user to see correct ans 
{
	alert("The answer is Titan");
}

var openWeb5 = function()//allows user to open wikipedia page
{
	window.open("http://en.wikipedia.org/wiki/County_Offaly");
}

var ViewAnswer5 = function()//allows user to see correct ans 
{
	alert("The answer is Offaly");
}


window.onload = function () {
	// alert ("This is the window.onload event handler.");
	$("Submit").onclick = trivia_click;
	
}


