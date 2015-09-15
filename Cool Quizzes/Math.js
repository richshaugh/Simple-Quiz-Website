var $ = function (id) {
    return document.getElementById(id); 
}
var result = 0;	
// This is the calculate_click event handler
var math_click = function () {
	
	// get user entries and parses them to Integers
	var ans1 = parseInt( $("answer1").value );
    var ans2 = parseInt( $("answer2").value );
	var ans3 = $("answer3").value;
	 var ans4 = parseInt( $("answer4").value );
	  var ans5 = $("answer5").value;
	  
	
	
	if (isNaN(ans1) || isNaN(ans2) ||isNaN(ans4)){//checks that the relevant user entries are numbers not strings
			alert("Question accepts numbers only");}
		else{
		if (ans1 == 5)//if the first answer is correct adds 1 to result and displays Correct in the innerhtml
		{
			result = result + 1;
			$("a1").innerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="200" height="200" title="main"><param name="movie" value="correct.swf"> <param name="quality" value="high"><embed src="correct.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="200" height="200"></embed></object>';
			
		}
		else{//if the answer is wrong it displays wrong in the innerhtml and places a button allowing a user to display the answer
			$("a1").innerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="200" height="200" title="main"><param name="movie" value="incorrect.swf"> <param name="quality" value="high"><embed src="incorrect.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="200" height="200"></embed></object>';
			$("b1").innerHTML = '<button id="btn1" name="btn1" onclick = "ViewAnswer1()">View Answer</button>';
			
			}
		if (ans2 == 288)//if the first answer is correct adds 1 to result and displays Correct in the innerhtml
		{
			result = result + 1;
			$("a2").innerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="200" height="200" title="main"><param name="movie" value="correct.swf"> <param name="quality" value="high"><embed src="correct.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="200" height="200"></embed></object>';
		}
		
		else{//if the answer is wrong it displays wrong in the innerhtml and places a button allowing a user to display the answer
			
			$("a2").innerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="200" height="200" title="main"><param name="movie" value="incorrect.swf"> <param name="quality" value="high"><embed src="incorrect.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="200" height="200"></embed></object>';
			$("b2").innerHTML = '<button id="btn2" name="btn2" onclick = "ViewAnswer2()">View Answer</button>';

			}
		
		if (ans3 == "Mary")//if the  answer is correct adds 1 to result and displays Correct in the innerhtml
		{
			result = result + 1;
			$("a3").innerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="200" height="200" title="main"><param name="movie" value="correct.swf"> <param name="quality" value="high"><embed src="correct.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="200" height="200"></embed></object>';
		}
		else{//if the answer is wrong it displays wrong in the innerhtml and places a button allowing a user to display the answer
			$("a3").innerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="200" height="200" title="main"><param name="movie" value="incorrect.swf"> <param name="quality" value="high"><embed src="incorrect.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="200" height="200"></embed></object>';
			$("b3").innerHTML = '<button id="btn3" name="btn3" onclick = "ViewAnswer3()">View Answer</button>';
			}
		if (ans4 == 111111)//if the  answer is correct adds 1 to result and displays Correct in the innerhtml
		{
			result = result + 1;
			$("a4").innerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="200" height="200" title="main"><param name="movie" value="correct.swf"> <param name="quality" value="high"><embed src="correct.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="200" height="200"></embed></object>';
		}
		else{//if the answer is wrong it displays wrong in the innerhtml and places a button allowing a user to display the answer
			$("a4").innerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="200" height="200" title="main"><param name="movie" value="incorrect.swf"> <param name="quality" value="high"><embed src="incorrect.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="200" height="200"></embed></object>';
			$("b4").innerHTML = '<button id="btn4" name="btn4" onclick = "ViewAnswer4()">View Answer</button>';
			}
		
		if (ans5 == "F")//if the  answer is correct adds 1 to result and displays Correct in the innerhtml
		{
			result = result + 1;
			$("a5").innerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="200" height="200" title="main"><param name="movie" value="correct.swf"> <param name="quality" value="high"><embed src="correct.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="200" height="200"></embed></object>';
			
		}
		else{//if the answer is wrong it displays wrong in the innerhtml and places a button allowing a user to display the answer
			$("a5").innerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="200" height="200" title="main"><param name="movie" value="incorrect.swf"> <param name="quality" value="high"><embed src="incorrect.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="200" height="200"></embed></object>';
			$("b5").innerHTML = '<button id="btn5" name="btn5" onclick = "ViewAnswer5()">View Answer</button>';
			}
		
		//alert("Your result is:"+result+"\n"+results);
		
		$("R1").innerHTML = "Final Result is: "+result+" out of 5";//displays how many the user got correct
		if (result > 2)//depending on the users result an embedded mp3 will play
			$("s1").innerHTML = '<embed src="success.mp3" hidden = "true" autostart="true"loop="false"><noembed><bgsound src="success.wav" loop="1"></noembed></embed>';
		
		else
			$("s1").innerHTML = '<embed src="boo.mp3" hidden = "true" autostart="true"loop="false"><noembed><bgsound src="boo.mp3" loop="1"></noembed></embed>';
		
		
		
		
	
}
}

var ViewAnswer1 = function()//displays the answer
{
	alert("Pi is 3.14159265358 so the tenth number of Pi after the decimal is 5");
}



var ViewAnswer2 = function()//displays the answer
{
	window.open("https://www.google.ie/search?q=48/2%289%2B3%29&ie=utf-8&oe=utf-8&gws_rd=cr&ei=Mhn-VJC9NteraYqEgogD");
}



var ViewAnswer3 = function()//displays the answer
{
	alert("The answer is Mary");
}



var ViewAnswer4 = function()//displays the answer
{
	alert("The answer is 111111");
}



var ViewAnswer5 = function()//displays the answer
{
	alert("The answer is F");
}




window.onload = function () {
	// alert ("This is the window.onload event handler.");
	$("Submit").onclick = math_click;
	
}


