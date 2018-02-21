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
choices = []

var punten = [
	{name: "VVD", points: 0},
	{name: "CDA", points: 0},
	{name: "PVV", points: 0},
	{name: "D66", points: 0},
	{name: "GroenLinks", points: 0},
	{name: "SP", points: 0},
	{name: "PvdA", points: 0},
	{name: "ChristenUnie", points: 0},
	{name: "Partij voor de Dieren", points: 0},
	{name: "SGP", points: 0},
	{name: "DENK", points: 0},
	{name: "Forum voor Democratie", points: 0},
	{name: "Lokaal in de kamer", points: 0},
	{name: "OndernemersPartij", points: 0},
	{name: "VNL", points: 0},
	{name: "Nieuwe Wegen", points: 0},
	{name: "De Burger Beweging", points: 0},
	{name: "Piratenpartij", points: 0},
	{name: "Artikel 1", points: 0},
	{name: "Libertarische Partij", points: 0}
];

var startBtn = document.getElementById('start');
var subject = document.getElementById('subject');
var statement = document.getElementById('statement');
var nxtBtn = document.getElementById("next");
var agrBtn = document.getElementById("agree");
var disBtn = document.getElementById("disagree");
var midBtn = document.getElementById("midway");
var prevBtn = document.getElementById("prev");
var aside = document.getElementById("aside")

var partyResults = document.getElementById('parties');

subject.innerHTML = subjects[nr].title;
statement.innerHTML = subjects[nr].statement;



startBtn.addEventListener("click", start);

function start() {
 console.log("start()");

	var start = document.getElementById('start').style.display = "none";
	main.style.display = "block";
 	var aside = document.getElementById('aside').style.display = "none";

 	var start = document.getElementById('start');
 	start.innerHTML = 'start';
 
}

document.getElementById("prev").addEventListener("click", function(){
	if(nr <! 0) {
			location.reload();				
		}
    nr--;
    subject.innerHTML = subjects[nr].title;
    statement.innerHTML = subjects[nr].statement;
    choices.pop();
	console.log(choices, nr);

	var nxtBtn = document.getElementById('next').style.display = "inline-block";
	var agrBtn = document.getElementById('agree').style.display = "inline-block";
	var disBtn = document.getElementById('disagree').style.display = "inline-block";
	var midBtn = document.getElementById('midway').style.display = "inline-block";

});

document.getElementById("next").addEventListener("click", function(){
  
    console.log(choices, nr);
    subject.innerHTML = subjects[nr].title;
    statement.innerHTML = subjects[nr].statement;

	
	nr++;
	if (nr == subjects.length) {
		results();
} 


 
});

document.getElementById("agree").addEventListener("click", function(){
    
    choices.push("pro");
    console.log(choices, nr);
    subject.innerHTML = subjects[nr].title;
    statement.innerHTML = subjects[nr].statement;


    
	nr++;
	if (nr == subjects.length) {
		results();
} 

});

document.getElementById("disagree").addEventListener("click", function(){
    
    choices.push("contra");
    console.log(choices, nr);
    subject.innerHTML = subjects[nr].title;
    statement.innerHTML = subjects[nr].statement;

	
	nr++;
	if (nr == subjects.length) {
		results();
}
     });

document.getElementById("midway").addEventListener("click", function(){
    
    choices.push("ambivalent");
    console.log(choices, nr);
    subject.innerHTML = subjects[nr].title;
    statement.innerHTML = subjects[nr].statement;

	
	nr++;
	if (nr == subjects.length) {
		results();
} 
});

function results(){
	subject.innerHTML = "je resultaten zijn";
	var partyResultsHtml = "";

	statement.innerHTML = "";



	var nxtBtn = document.getElementById('next').style.display = "none";
	var agrBtn = document.getElementById('agree').style.display = "none";
	var disBtn = document.getElementById('disagree').style.display = "none";
	var midBtn = document.getElementById('midway').style.display = "none";



};