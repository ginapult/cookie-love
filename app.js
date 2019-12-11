'use strict';

console.log('js connected!');

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm']

var body = [['Body1', 1, 2, 3, 4],['Body2', 1, 2, 3, 4],['Body3', 1, 2, 3, 4]];
var footer = ['Totals', 3, 4, 5, 'Grand Total'];

function City (name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.avgCookiesPerHour = [];
}

var seattle = new City('Seattle', 5, 10, 2.6);
var tokyo = new City('Tokyo', 10, 20, 3.4);
var philly = new City('Philadelphia', 20, 30, 8.2);

var allCities = [seattle, tokyo, philly];

City.prototype.cookiesPerHour = function() {
  var sumCookies = 0;
  for (var i = 0; i < hours.length; i++) {
    var random = Math.floor(Math.random()* (this.max - this.min) + this.min);
    var randomCookies = Math.floor(random * this.avg);
    this.avgCookiesPerHour.push(randomCookies);
    sumCookies = sumCookies + randomCookies;
  }
  this.avgCookiesPerHour.push(sumCookies);
  return this.avgCookiesPerHour;
}









// get table holder and render the thead, tbody, and tfoot
var tableHolder = document.getElementById('table-holder');

var newThead = document.createElement('thead');
var newTbody = document.createElement('tbody');
var newTfoot = document.createElement('tfoot');


function renderTableHead() {
  tableHolder.appendChild(newThead);
  var newRow = document.createElement('tr');
  var newTh = document.createElement('th');
  newTh.textContent = 'City';
  newRow.appendChild(newTh);
  for (var i = 0; i < hours.length; i++) {
    var newTh = document.createElement('th');
    newTh.textContent = hours[i];
    newRow.appendChild(newTh);
  }
  var newTh = document.createElement('th');
  newTh.textContent = 'Totals';
  newRow.appendChild(newTh);
  newThead.appendChild(newRow);
}
renderTableHead();

function renderTableBody() {
  tableHolder.appendChild(newTbody);
  for (var i =0; i < body.length; i++) {
    var newRow = document.createElement('tr');
    for (var j = 0; j < body[i].length; j++) {
      var newTd = document.createElement('td');
      newTd.textContent = body[i][j];
      newRow.appendChild(newTd);
    }
    newTbody.appendChild(newRow);
  }
}
renderTableBody();

function renderTableFooter() {
  tableHolder.appendChild(newTfoot);
  var newRow = document.createElement('tr');
  for (var i = 0; i < footer.length; i++) {
    var newTd = document.createElement('td');
    newTd.textContent = footer[i];
    newRow.appendChild(newTd);
  }
  newTfoot.appendChild(newRow);
}
renderTableFooter();
