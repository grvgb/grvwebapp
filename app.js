'use strict';
let today= new Date();
let formatdate= today.toDateString();
let selectdate=document.getElementById('date');
selectdate.innerHTML= formatdate