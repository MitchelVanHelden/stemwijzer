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

var scores = {
    'PVV': 0,
    'SP': 0,
    'D66': 0,
    'GroenLinks': 0,
    'Partij voor de Dieren"': 0,
    '50Plus': 0,
    'VNL': 0,
    'Nieuwe Wegen': 0,
    'Forum voor Democratie': 0,
    'De Burger Beweging': 0,
    'Vrijzinnige Partij': 0,
    'Piratenpartij': 0,
    'Libertarische Partij': 0,
    'Lokaal in de kamer': 0,
    'VVD': 0,
    'PvdA': 0,
    'CDA': 0,
    'ChristenUnie': 0,
    'SGP': 0,
    'OndernemersPartij': 0,
    'DENK': 0,
    'Artikel 1': 0
};

var startBtn = document.getElementById('start');
var subject = document.getElementById('subject');
var statement = document.getElementById('statement');
var prevBtn = document.getElementById("prev")
var nxtBtn = document.getElementById("next");
var agrBtn = document.getElementById("agree");
var disBtn = document.getElementById("disagree");
var midBtn = document.getElementById("midway");

subject.innerHTML = subjects[nr].title;
statement.innerHTML = subjects[nr].statement;


startBtn.addEventListener("click", start);

function start() {
 console.log("start()");

var start = document.getElementById('start').style.display = "none";
main.style.display = "block";


 	
 var start = document.getElementById('start');
 nr++;
 start.innerHTML = 'start';
 

}

document.getElementById("prev").addEventListener("click", function(){
    nr--;
    subject.innerHTML = subjects[nr].title;
    statement.innerHTML = subjects[nr].statement;
    scores.splice();
});
document.getElementById("next").addEventListener("click", function(){
    nr++
    subject.innerHTML = subjects[nr].title;
    statement.innerHTML = subjects[nr].statement
});

document.getElementById("agree").addEventListener("click", function(){
    nr++;
    subject.innerHTML = subjects[nr].title;
    statement.innerHTML = subjects[nr].statement;
    subjects[nr].parties.forEach(function(party){
        if (party.position === "pro") {
            scores[party.name]++;
        }
    });
    console.log(scores);
});

document.getElementById("disagree").addEventListener("click", function(){
    nr++
    subject.innerHTML = subjects[nr].title;
    statement.innerHTML = subjects[nr].statement;
    subjects[nr].parties.forEach(function(party){
        if (party.position === "contra") {
              scores[party.name]++;
          }
      });
      console.log(scores);
     });

document.getElementById("midway").addEventListener("click", function(){
    nr++
    subject.innerHTML = subjects[nr].title;
    statement.innerHTML = subjects[nr].statement;

    subjects[nr].parties.forEach(function(party){
        if (party.position === "ambivalent") {
            scores[party.name]++;        
        }    
    });
    console.log(scores);
});