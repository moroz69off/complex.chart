'use strict'
var list_box = document.getElementById('t_chart-selectAllJustVisible');
//var check_items = [];

(function SetList () {list_box.innerHTML = '';}) ();

for (var i = 0; i < city_list.length; i++) {
	var list_item = city_list[i].trim();
	var opt = document.createElement('option');
	opt.setAttribute('value', i+1);
	opt.innerText = list_item;
	list_box.append(opt);
}

function getPopulation (city) {
	let population = [];
	return population;
}

var check_items = document.querySelectorAll('option');
check_items.forEach(
	function (value, index, list) {
		value.addEventListener('onclick', mf(value));
	}
);
function mf (value) {
	
}

