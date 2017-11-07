function loadMap() {
	google.charts.load('current', {
		'packages': ['geomap'],
		'mapsApiKey': '[API-KEY]'
	});

	google.charts.setOnLoadCallback(drawRegionsMap);
}

function drawRegionsMap() {
	console.log(typeof (parseInt(document.getElementById('input-ac').value)));
	var data = google.visualization.arrayToDataTable([
		['Estado', 'Publicações'],
		['Acre', parseInt(document.getElementById('input-ac').value)],
		['Alagoas', parseInt(document.getElementById('input-al').value)],
		['Amapá', parseInt(document.getElementById('input-ap').value)],
		['Amazonas', parseInt(document.getElementById('input-am').value)],
		['Bahia', parseInt(document.getElementById('input-ba').value)],
		['Ceara', parseInt(document.getElementById('input-ce').value)],
		['Distrito Federal', parseInt(document.getElementById('input-df').value)],
		['Espirito Santo', parseInt(document.getElementById('input-es').value)],
		['Goias', parseInt(document.getElementById('input-go').value)],
		['Maranhão', parseInt(document.getElementById('input-ma').value)],
		['Mato Grosso', parseInt(document.getElementById('input-mt').value)],
		['Mato Grosso do Sul', parseInt(document.getElementById('input-ms').value)],
		['Minas Gerais', parseInt(document.getElementById('input-mg').value)],
		['Para', parseInt(document.getElementById('input-pa').value)],
		['Paraiba', parseInt(document.getElementById('input-pb').value)],
		['Parana', parseInt(document.getElementById('input-pr').value)],
		['Pernambuco', parseInt(document.getElementById('input-pe').value)],
		['Piaui', parseInt(document.getElementById('input-pi').value)],
		['Rio de Janeiro', parseInt(document.getElementById('input-rj').value)],
		['Rio Grande do Norte', parseInt(document.getElementById('input-rn').value)],
		['Rio Grande do Sul', parseInt(document.getElementById('input-rs').value)],
		['Santa Catarina', parseInt(document.getElementById('input-sc').value)],
		['Sergipe', parseInt(document.getElementById('input-se').value)],
		['Roraima', parseInt(document.getElementById('input-rr').value)],
		['Rondonia', parseInt(document.getElementById('input-ro').value)],
		['São Paulo', parseInt(document.getElementById('input-sp').value)],
		['Tocantins', parseInt(document.getElementById('input-to').value)]
	]);

	var options = {
		region: 'BR',
		resolution: 'provinces',
		datalessRegionColor: 'transparent'
	};

	var chart = new google.visualization.GeoChart(document.getElementById("regions_div"));
	chart.draw(data, options);

	showChart();
	hideMainDiv();
}

function showChart() {
	document.getElementById("div_chart").style.display = "block";
}

function hideMainDiv() {
	document.getElementById("div_main").style.display = "none";
}

function homePage() {
	window.location.replace("GeoChart.html");
}

function newTask() {
	var index = (document.getElementById("div_tasks").childElementCount / 2) + 1;

	var task = "<label for=\"input-task" + index + "\">";
	task += "Tarefa " + index;
	task += "<input id=\"input-task" + index + "\" class=\"form-control\" type=\"text\" required>";
	task += "</label>";
	task += "<label for=\"input-time" + index + "\">";
	task += "Horas";
	task += "<input id=\"input-time" + index + "\" class=\"form-control input-number input-number2\" type=\"number\" min=\"1\" max=\"24\" required>";
	task += "</label>";

	document.getElementById("div_tasks").innerHTML += task;
}

function loadPie() {
	google.charts.load('current', { 'packages': ['corechart'] });
	google.charts.setOnLoadCallback(drawPie);
}

function drawPie() {
	var tasks = catchTasks();

	var data = google.visualization.arrayToDataTable(tasks);

	var options = {
		height: 500,
		width: 900,
		is3D: document.getElementById("input-3d").checked
	};

	var chart = new google.visualization.PieChart(document.getElementById('pie_div'));

	chart.draw(data, options);
	
	showChart();
	hideMainDiv();
}

function catchTasks(){
	var count = (document.getElementById("div_tasks").childElementCount / 2);
	var tasks = [];
	var name, time;

	tasks.push(["Tarefa", "Horas"]);

	for(var i = 1; i <= count; i++){
		name = document.getElementById("input-task" + i).value;
		time = parseInt(document.getElementById("input-time" + i).value);

		tasks.push([name, time]);
	}

	return tasks;
}