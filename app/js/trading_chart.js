'use strict'

$(document).ready(function() {
	$('#t_chart-selectAllJustVisible').multiselect({
		maxHeight: 250,
		buttonWidth: '183px',
		enableFiltering: true,
		includeSelectAllOption: true,
		selectAllJustVisible: true
	});
});

function re_set () {
	t_chart.update();
}

// gets from API
var /*const*/ time_labels = [
	'2020-03-12', // 1
	'2020-03-13', // 2
	'2020-03-14', // 3
	'2020-03-15', // 4
	'2020-03-16', // 5
	'2020-03-17', // 6
	'2020-03-18', // 7
	'2020-03-19', // 8
	'2020-03-20', // 9
	'2020-03-21', // 10
	'2020-03-22 (now)', // 11
	'2020-03-23', // 12
	'2020-03-24', // 13
	'2020-03-25', // 14
	'2020-03-26', // 15
	//'2020-03-27', // 16
	//'2020-03-28', // 17
	//'2020-03-29', // 18
];					 
//var F_data = [
//	2,    // 1 
//	3,	  // 2 
//	2.8,  // 3 
//	2.2,  // 4 
//	3.4,  // 5 
//	3.8,  // 6 
//	2.5,  // 7 
//	2.1,  // 8 
//	2.2,  // 9 
//	2.6,  // 10
//	2.4,  // 11
//	NaN,  // 12
//	NaN,  // 13
//	NaN,  // 14
//	NaN,  // 15
//];
var S_data = [
	2.4,  // 1 
	1.3,  // 2 
	2.2,  // 3 
	2.6,  // 4 
	2.4,  // 5 
	3.4,  // 6 
	2.7,  // 7 
	2.1,  // 8 
	2.2,  // 9 
	2.0,  // 10
	2.5,  // 11
	NaN,  // 12
	NaN,  // 13
	NaN,  // 14
	NaN,  // 15
];
var T_data = [
	NaN,  // 1 
	NaN,  // 2 
	NaN,  // 3 
	NaN,  // 4 
	NaN,  // 5  
	NaN,  // 6  
	NaN,  // 7  
	NaN,  // 8  
	NaN,  // 9  
	NaN,  // 10 
	S_data[10],  // 11
	2.5,  // 12
	2.7,  // 13
	2.5,  // 14
	2.2,  // 15
];			   
var chart_labels = [
	//'First',
	//'Second',
];
	   
var data_set = [];

Chart.defaults.elements.point.radius = 3;
Chart.defaults.elements.point.hitRadius = 25;
Chart.defaults.elements.point.hoverRadius = 10;
Chart.defaults.elements.tooltipYPadding = 0;
Chart.defaults.elements.tooltipCornerRadius = 0;
Chart.defaults.elements.tooltipTitleFontStyle = "normal";
Chart.defaults.elements.tooltipFillColor = "blue";
Chart.defaults.elements.animationEasing = "easeOutBounce";
Chart.defaults.elements.scaleLineColor = "black";
Chart.defaults.elements.scaleFontSize = 16;
Chart.defaults.elements.showScale = true;
Chart.defaults.elements.pointDotStrokeWidth = 2;

function rand_color () {
	let R = Math.random() * 255;
	let G = Math.random() * 255;
	let B = Math.random() * 255;
	return 'rgba( ' + R + ', ' + G + ', ' + B + ', 0.777)';
}

function add_set () {
	var new_color = rand_color();
	var adding_label = 'new';
	var data_arr = [];
	for (var i = 0; i < 15; i++) {
		data_arr.push(((Math.random())/2)*10);
	}
	data_set.push(
		{
			label: adding_label,
			data: data_arr,
			backgroundColor: [new_color],
			borderColor: new_color,
			borderWidth: 1
		}	
	)
	t_chart.update();
}

function generateDataSet () {
	data_set = [
		//{
		//label: chart_labels[0],
		//data: F_data,
		//backgroundColor: [
		//	'rgba(  155, 199, 232, 0.777)',
		//	],
		//	borderColor: [
		//	'rgba( 155, 199, 232, 1)',
		//	],
		// borderWidth: 1
		//}
		//,
		//{
		//label: chart_labels[1],
		//data: S_data,
		//backgroundColor: [
		//	'rgba(  255, 99, 132, 0.5)',
		//	],
		//	borderColor: [
		//	'rgba( 255, 99, 132, 1)',
		//	],
		// borderWidth: 2
		//}
		//,
		//{
		
		//label: chart_labels[2],
		//data: T_data,
		//backgroundColor: [
		//	'rgba(  255, 99, 132, .1)',
		//],
		//borderColor: [
		//	'rgba( 255, 99, 132, .9)',
		//	],
		//borderDash: [5, 5],
		//borderWidth: 2
		//}
	]
	return data_set;
}

var ctx = document.getElementById('t_chart').getContext('2d');

var t_chart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: time_labels,
		datasets: generateDataSet()
	},
	options: {
		responsive: true,
		resizeDelay: 333,
		maintainAspectRatio: false,
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero:false,
				}
			}]
		},
		plugins: {
			legend: {
				position: 'left',
				align: 'top',
				display: true,
				
				labels: {
					usePointStyle: true,
				  //pointStyle: 'star',
					color: 'rgb(0, 199, 232)'
				},
				text: 'Legend Title'
			}
		}
	}
});
