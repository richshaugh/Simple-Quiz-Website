var $ = function (id) {
    return document.getElementById(id); 
}
var result = 0;	
// This is the calculate_click event handler
var pic_click = function () {
	
	// get user entries
	var a1 = $("answer1").value;
    var a2 = $("answer2").value;
	var a3 = $("answer3").value;
	 var a4 =  $("answer4").value;
	  var a5 = $("answer5").value;
	  //puts user entries into upper case
	  var ans1 = a1.toUpperCase();
	  var ans2 = a2.toUpperCase();
	  var ans3 = a3.toUpperCase();
	  var ans4 = a4.toUpperCase();
	  var ans5 = a5.toUpperCase();

		if (ans1 == "HIMMLER")//if the answer is correct adds on 1 to result, displays correct in the innerhtml and adds a button
								//allowing user to view more info
		{
			result = result + 1;
			$("a1").innerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="200" height="200" title="main"><param name="movie" value="correct.swf"> <param name="quality" value="high"><embed src="correct.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="200" height="200"></embed></object>';
			$("b1").innerHTML = '<button id="btn1" name="btn1" onclick = "openWeb1()">View More Information</button>';
		}
		else //if answer is wrong, displays incorrect in innerhtml and shows a button to view the answer
		{
			$("a1").innerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="200" height="200" title="main"><param name="movie" value="incorrect.swf"> <param name="quality" value="high"><embed src="incorrect.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="200" height="200"></embed></object>';
			$("b1").innerHTML = '<button id="btn1" name="btn1" onclick = "ViewAnswer1()">View Answer</button>';
		}
		if (ans2 == "MICHAEL JACKSON")//if the answer is correct adds on 1 to result, displays correct in the innerhtml and adds a button
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
		
		if (ans3 == "CHARLIZE THERON")//if the answer is correct adds on 1 to result, displays correct in the innerhtml and adds a button
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
		if (ans4 == "RONALD REAGAN")//if the answer is correct adds on 1 to result, displays correct in the innerhtml and adds a button
								//allowing user to view more info
		{
			result = result + 1;
			$("a4").innerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="200" height="200" title="main"><param name="movie" value="correct.swf"> <param name="quality" value="high"><embed src="correct.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="200" height="200"></embed></object>';
			$("b4").innerHTML = '<button id="btn4" name="btn4" onclick = "openWeb4()">View More Information</button>';
		}
		else//if answer is wrong, displays incorrect in innerhtml and shows a button to view the answer
		{
			$("a4").innerHTML ='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="200" height="200" title="main"><param name="movie" value="incorrect.swf"> <param name="quality" value="high"><embed src="incorrect.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="200" height="200"></embed></object>';
			$("b4").innerHTML = '<button id="btn4" name="btn4" onclick = "ViewAnswer4()">View Answer</button>';
		}
		
		if (ans5 == "USAIN BOLT")//if the answer is correct adds on 1 to result, displays correct in the innerhtml and adds a button
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
		
		$("R1").innerHTML = "Final Result is: "+result+" out of 5";//displays the final result out of 5
		if (result > 2)//depending on the users result an embedded mp3 will play
			$("s1").innerHTML = '<embed src="success.mp3" hidden = "true" autostart="true"loop="false"><noembed><bgsound src="success.wav" loop="1"></noembed></embed>';
		
		else
			$("s1").innerHTML = '<embed src="boo.mp3" hidden = "true" autostart="true"loop="false"><noembed><bgsound src="boo.mp3" loop="1"></noembed></embed>';
		
	
}

var Clue1 = function()//allows user to view a clue
{
		alert("Hitler's Minister of the Interior. Committed suicide in British prison in 1945");
}

var Clue2 = function()//allows user to view a clue
{
		alert("American singer of songs such as Billie Jean and Thriller. Died June 2009");
}

var Clue3 = function()//allows user to view a clue
{
		alert("Won an Oscar for the film Monster");
}

var Clue4 = function()//allows user to view a clue
{
		alert("President of the United States 1981-1989");
}

var Clue5 = function()//allows user to view a clue
{
		alert("Fastest man alive. Holds the 100m and 200m World Records");
}

var openWeb1 = function()//allows user to open wikipedia page
{
	window.open("http://en.wikipedia.org/wiki/Heinrich_Himmler");
}

var ViewAnswer1 = function()//allows user to open wikipedia page
{
	alert("The answer is Himmler");
}

var openWeb2 = function()//allows user to open wikipedia page
{
	window.open("http://en.wikipedia.org/wiki/Michael_Jackson");
}

var ViewAnswer2 = function()//allows user to open wikipedia page
{
	alert("The answer is Michael Jackson");
}

var openWeb3 = function()//allows user to open wikipedia page
{
	window.open("http://en.wikipedia.org/wiki/Charlize_Theron");
}

var ViewAnswer3 = function()//allows user to see correct ans 
{
	alert("The answer is Charlize Theron");
}

var openWeb4 = function()//allows user to see correct ans
{
	window.open("http://en.wikipedia.org/wiki/Ronald_Reagan");
}

var ViewAnswer4 = function()//allows user to see correct ans
{
	alert("The answer is Ronald Reagan");
}

var openWeb5 = function()//allows user to see correct ans
{
	window.open("http://en.wikipedia.org/wiki/Usain_Bolt");
}

var ViewAnswer5 = function()//allows user to see correct ans
{
	alert("The answer is Usain Bolt");
}


window.onload = function () {
	// alert ("This is the window.onload event handler.");
	$("Submit").onclick = pic_click;
	
}


