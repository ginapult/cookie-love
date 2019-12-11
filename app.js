'use strict';

console.log('js connected!');

var header = ['Name', 1, 2, 3, 'Name Totals'];
var body = [['Body1', 1, 2, 3, 4],['Body2', 1, 2, 3, 4],['Body3', 1, 2, 3, 4]];
var footer = ['Totals', 3, 4, 5, 'Grand Total'];

// get table holder and render the thead, tbody, and tfoot
var tableHolder = document.getElementById('table-holder');

var newThead = document.createElement('thead');
var newTbody = document.createElement('tbody');
var newTfoot = document.createElement('tfoot');


function renderTableHead() {
  tableHolder.appendChild(newThead);
  var newRow = document.createElement('tr');
  for (var i = 0; i < header.length; i++) {
    var newTh = document.createElement('th');
    newTh.textContent = header[i];
    newRow.appendChild(newTh);
  }
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
