
var currentDayEl = $('#currentDay');


var dateEl = $('<h1>');

var date = moment().format('dddd, MMMM Do');



dateEl.text(date);




currentDayEl.append(dateEl);