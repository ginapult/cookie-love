'use strict';

console.log('js connected!');

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm']
var theTable = document.getElementById('table-holder');
var theForm = document.getElementById('form-holder');

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

City.prototype.render = function() {
  var tBody = document.getElementById('tbody');
  var newTr = document.createElement('tr');
  var newTd = document.createElement('td');
  newTd.textContent = this.name;
  newTr.appendChild(newTd);
  for (var i = 0; i < this.avgCookiesPerHour.length; i++) {
    newTd = document.createElement('td');
    newTd.textContent = this.avgCookiesPerHour[i];
    newTr.appendChild(newTd);
  }
  tBody.appendChild(newTr);
}


// get table holder and render the thead, tbody, and tfoot

function renderTableHead() {
  var newThead = document.getElementById('thead');
  var newRow = document.createElement('tr');
  var newTh = document.createElement('th');
  newTh.textContent = '';
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

function renderTableFooter() {
  var tableFoot = document.getElementById('tfoot');
  var newTr = document.createElement('tr');
  var newTd = document.createElement('td');
  newTd.textContent = 'Totals';
  newTr.appendChild(newTd);

  var grandTotal = 0;
  for (var i = 0; i < hours.length; i++) {
    var hourlyTotal = 0;
    for (var j = 0; j < allCities.length; j++) {
      hourlyTotal = hourlyTotal + allCities[j].avgCookiesPerHour[i];
    }
    grandTotal = grandTotal + hourlyTotal;
    newTd = document.createElement('td');
    newTd.textContent = hourlyTotal;
    newTr.appendChild(newTd);
  }
  newTd = document.createElement('td');
  newTd.textContent = grandTotal;
  newTr.appendChild(newTd);
  tableFoot.appendChild(newTr);
}

// set up event listener on the form

function handleFormSubmitted(event) {
  // prevent the default form refresh - browser gives object about the event, includes a method
  event.preventDefault();
  console.log('we submitted the form!')
  // actually add new City to our table by using the City constructor for new city instance
  // render new City instance to the page
  // use getElementById and .value to get the input
  var cityInput = document.getElementById('city');
  var cityValue = cityInput.value;

  var minInput = document.getElementById('min');
  var minValue = minInput.value;

  var maxInput = document.getElementById('max');
  var maxValue = maxInput.value;

  var avgInput = document.getElementById('avg');
  var avgValue = avgInput.value;

  var newCity = new City(cityValue, minValue, maxValue, avgValue);
  allCities.push(newCity);
}
// 1. which element?
var formElement = document.getElementById('form-holder');
// 2. which event listening for?
// 3. what code should run when the event happens
formElement.addEventListener('submit', handleFormSubmitted);

// function to call all the functions
function callAllFunctions () {
  for (var i = 0; i < allCities.length; i++) {
    allCities[i].cookiesPerHour();
    allCities[i].render();
  }
  renderTableHead();
  renderTableFooter();
}

callAllFunctions();