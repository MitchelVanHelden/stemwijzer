/**document.getElementById('vraag').innerHTML = 'Test uw politieke voorkeur aan de hand van 30 stellingen';
document.getElementById('option5').innerHTML = 'start';

var option1 = 'eens'


function vraag1(){
	console.log("vraag1()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Eens';
	opt1.setAttribute("onClick", "javascript:");

	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Geen van beide';
	opt2.setAttribute("onClick", "javascript:");

	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'oneens';
	opt3.setAttribute("onClick", "javascript:");

	var opt4 = document.getElementById('option4');
	opt4.innerHTML = 'Sla deze vraag over';
	opt4.setAttribute("onClick", "javascript:vraag2();");

	var back = document.getElementById('back');
	back.innerHTML = 'back';
	back.setAttribute("onClick", "");

	document.getElementById('title').innerHTML = subjects[0].title;
	document.getElementById('vraag').innerHTML = subjects[0].statement ;
	document.getElementById('option2').style.display = 'inline-block';
	document.getElementById('option3').style.display = 'inline-block';
	document.getElementById('option4').style.display = 'inline-block';
	document.getElementById('option1').style.display = 'inline-block';
	document.getElementById('back').style.display = 'inline-block';
	document.getElementById('option5').style.display = 'none';
}

function vraag2(){
	console.log("vraag2()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Eens';
	opt1.setAttribute("onClick", "javascript:vraag3();");

	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Geen van beide';
	opt2.setAttribute("onClick", "javascript:");

	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'oneens';
	opt3.setAttribute("onClick", "javascript:");

	var opt4 = document.getElementById('option4');
	opt4.innerHTML = 'Sla deze vraag over';
	opt4.setAttribute("onClick", "javascript:vraag3();");

	var back = document.getElementById('back');
	back.innerHTML = 'back';
	back.setAttribute("onClick", "javascript:vraag1();");



	document.getElementById('title').innerHTML = subjects[1].title;
	document.getElementById('vraag').innerHTML = subjects[1].statement ;
	document.getElementById('option2').style.display = 'inline-block';
	document.getElementById('option3').style.display = 'inline-block';
	document.getElementById('option4').style.display = 'inline-block';
	document.getElementById('option1').style.display = 'inline-block';
	document.getElementById('back').style.display = 'inline-block';
	document.getElementById('option5').style.display = 'none';

}

function vraag3(){
	console.log("vraag3()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Eens';
	opt1.setAttribute("onClick", "javascript:");

	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Geen van beide';
	opt2.setAttribute("onClick", "javascript:");

	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'oneens';
	opt3.setAttribute("onClick", "javascript:");

	var opt4 = document.getElementById('option4');
	opt4.innerHTML = 'Sla deze vraag over';
	opt4.setAttribute("onClick", "javascript:vraag4();");

	var back = document.getElementById('back');
	back.innerHTML = 'back';
	back.setAttribute("onClick", "javascript:vraag2();");



	document.getElementById('title').innerHTML = subjects[2].title;
	document.getElementById('vraag').innerHTML = subjects[2].statement ;
	document.getElementById('option2').style.display = 'inline-block';
	document.getElementById('option3').style.display = 'inline-block';
	document.getElementById('option1').style.display = 'inline-block';
	document.getElementById('option4').style.display = 'inline-block';
	document.getElementById('back').style.display = 'inline-block';
	document.getElementById('option5').style.display = 'none';

}
function vraag4(){
	console.log("vraag4()");


} **/

var nr = 0;

var subject = document.getElementById('subject');
var statement = document.getElementById('statement');
var next = document.getElementById('skip');
var back = document.getElementById('back');
//console.dir(subject);

subject.innerHTML = subjects[nr].title;
statement.innerHTML = subjects[nr].statement;

var next = function(event){
	nr++;
	subject.innerHTML = subjects[nr].title;
	statement.innerHTML = subjects[nr].statement;
}

var prev = function(event){
	nr--;
	subject.innerHTML = subjects[nr].title;
	statement.innerHTML = subjects[nr].statement;
}

skip.onclick = next;
back.oncllck = prev;

