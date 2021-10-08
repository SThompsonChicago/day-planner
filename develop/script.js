
var currentDayEl = $('#currentDay');


var dateEl = $('<h1>');

var date = moment().format('dddd, MMMM Do');

var hour = moment().format('H');

var hour1El = $('#hour1');
var hour2El = $('#hour2');
var hour3El = $('#hour3');
var hour4El = $('#hour4');
var hour5El = $('#hour5');
var hour6El = $('#hour6');
var hour7El = $('#hour7');
var hour8El = $('#hour8');
var hour9El = $('#hour9');

dateEl.text(date);

hour = 11;


if (9 > hour){
    hour1El.addClass('hrGreen');
}
else if(9 === hour){
    hour1El.addClass('hrOrange');
}
else{
    hour1El.addClass('hrGray');
}

if (10 > hour){
    hour2El.addClass('hrGreen');
}
else if(10 === hour){
    hour2El.addClass('hrOrange');
}
else{
    hour2El.addClass('hrGray');
}

if (11 > hour){
    hour3El.addClass('hrGreen');
}
else if(11 === hour){
    hour3El.addClass('hrOrange');
}
else{
    hour3El.addClass('hrGray');
}

if (12 > hour){
    hour4El.addClass('hrGreen');
}
else if(12 === hour){
    hour4El.addClass('hrOrange');
}
else{
    hour4El.addClass('hrGray');
}

if (13 > hour){
    hour5El.addClass('hrGreen');
}
else if(13 === hour){
    hour5El.addClass('hrOrange');
}
else{
    hour5El.addClass('hrGray');
}

if (14 > hour){
    hour6El.addClass('hrGreen');
}
else if(14 === hour){
    hour6El.addClass('hrOrange');
}
else{
    hour6El.addClass('hrGray');
}

if (15 > hour){
    hour7El.addClass('hrGreen');
}
else if(15 === hour){
    hour7El.addClass('hrOrange');
}
else{
    hour7El.addClass('hrGray');
}

if (16 > hour){
    hour8El.addClass('hrGreen');
}
else if(16 === hour){
    hour8El.addClass('hrOrange');
}
else{
    hour8El.addClass('hrGray');
}

if (17 > hour){
    hour9El.addClass('hrGreen');
}
else if(17 === hour){
    hour9El.addClass('hrOrange');
}
else{
    hour9El.addClass('hrGray');
}



currentDayEl.append(dateEl);