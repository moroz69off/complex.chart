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
	console.log(value);
}

//==============================================================
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile("/charts/response.json", function(text){
    var data = JSON.parse(text);
    console.log(data);
});

