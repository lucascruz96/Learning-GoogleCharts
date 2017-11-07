function loadMap(){
	google.charts.load('current', {
		'packages': ['geomap'],
		'mapsApiKey': '[API-KEY]'
	});

	google.charts.setOnLoadCallback(drawRegionsMap);
}

function drawRegionsMap() {
	console.log(typeof(parseInt(document.getElementById('input-ac').value)));
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

	var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
	chart.draw(data, options);

	showMap();
	hideMainDiv();
}

function showMap(){
	document.getElementById("div_map").style.display = "block";
}

function hideMainDiv(){
	document.getElementById("div_main").style.display = "none";
}

function homePage(){
	window.location.replace("GeoCharts.html");
}