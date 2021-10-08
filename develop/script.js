
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


var bt1El = $('#bt1');
var placeholder1El;
var form1El = $('#form1');

var bt2El = $('#bt2');
var placeholder2El;
var form2El = $('#form2');

var bt3El = $('#bt3');
var placeholder3El;
var form3El = $('#form3');

var bt4El = $('#bt4');
var placeholder4El;
var form4El = $('#form4');

var bt5El = $('#bt5');
var placeholder5El;
var form5El = $('#form5');

var bt6El = $('#bt6');
var placeholder6El;
var form6El = $('#form6');

var bt7El = $('#bt7');
var placeholder7El;
var form7El = $('#form7');

var bt8El = $('#bt8');
var placeholder8El;
var form8El = $('#form8');

var bt9El = $('#bt9');
var placeholder9El;
var form9El = $('#form9');

dateEl.text(date);

currentDayEl.append(dateEl);

console.log(form1El);


if (9 > hour){
    hour1El.addClass('hrGreen');
}
else if(9 == hour){
    hour1El.addClass('hrOrange');
}
else{
    hour1El.addClass('hrGray');
}

if (10 > hour){
    hour2El.addClass('hrGreen');
}
else if(10 == hour){
    hour2El.addClass('hrOrange');
}
else{
    hour2El.addClass('hrGray');
}

if (11 > hour){
    hour3El.addClass('hrGreen');
}
else if(11 == hour){
    hour3El.addClass('hrOrange');
}
else{
    hour3El.addClass('hrGray');
}

if (12 > hour){
    hour4El.addClass('hrGreen');
}
else if(12 == hour){
    hour4El.addClass('hrOrange');
}
else{
    hour4El.addClass('hrGray');
}

if (13 > hour){
    hour5El.addClass('hrGreen');
}
else if(13 == hour){
    hour5El.addClass('hrOrange');
}
else{
    hour5El.addClass('hrGray');
}

if (14 > hour){
    hour6El.addClass('hrGreen');
}
else if(14 == hour){
    hour6El.addClass('hrOrange');
}
else{
    hour6El.addClass('hrGray');
}

if (15 > hour){
    hour7El.addClass('hrGreen');
}
else if(15 == hour){
    hour7El.addClass('hrOrange');
}
else{
    hour7El.addClass('hrGray');
}

if (16 > hour){
    hour8El.addClass('hrGreen');
}
else if(16 == hour){
    hour8El.addClass('hrOrange');
}
else{
    hour8El.addClass('hrGray');
}

if (17 > hour){
    hour9El.addClass('hrGreen');
}
else if(17 == hour){
    hour9El.addClass('hrOrange');
}
else{
    hour9El.addClass('hrGray');
}


bt1El.on('click', function(){
    placeholder1El = form1El.val();
    form1El.attr('placeholder', placeholder1El);
});

bt2El.on('click', function(){
    placeholder2El = form2El.val();
    form2El.attr('placeholder', placeholder2El);
});

bt3El.on('click', function(){
    placeholder3El = form3El.val();
    form3El.attr('placeholder', placeholder3El);
});

bt4El.on('click', function(){
    placeholder4El = form4El.val();
    form4El.attr('placeholder', placeholder4El);
});

bt5El.on('click', function(){
    placeholder5El = form5El.val();
    form5El.attr('placeholder', placeholder5El);
});

bt6El.on('click', function(){
    placeholder6El = form6El.val();
    form6El.attr('placeholder', placeholder6El);
});

bt7El.on('click', function(){
    placeholder7El = form7El.val();
    form7El.attr('placeholder', placeholder7El);
});

bt8El.on('click', function(){
    placeholder8El = form8El.val();
    form8El.attr('placeholder', placeholder8El);
});

bt9El.on('click', function(){
    placeholder9El = form9El.val();
    form9El.attr('placeholder', placeholder9El);
});