function carregarMapa(){
	google.charts.load('current', {
		'packages': ['geomap'],
		'mapsApiKey': '[API-KEY]'
	});
	google.charts.setOnLoadCallback(drawRegionsMap);

	function drawRegionsMap() {
		var data = google.visualization.arrayToDataTable([
			['Estado', 'Publicações'],
			['Acre', 0],
			['Alagoas', 0],
			['Amapá', 0],
			['Amazonas', 0],
			['Bahia', 0],
			['Ceara', 0],
			['Distrito Federal', 0],
			['Espirito Santo', 0],
			['Goias', 0],
			['Maranhão', 0],
			['Mato Grosso', 0],
			['Mato Grosso do Sul', 0],
			['Minas Gerais', 600],
			['Para', 0],
			['Paraiba', 0],
			['Parana', 0],
			['Pernambuco', 0],
			['Piaui', 0],
			['Rio de Janeiro', 0],
			['Rio Grande do Norte', 0],
			['Rio Grande do Sul', 0],
			['Santa Catarina', 0],
			['Sergipe', 0],
			['Roraima', 0],
			['Rondonia', 0],
			['São Paulo', 0],
			['Tocantins', 0]
		]);

		var options = {
			region: 'BR',
			resolution: 'provinces',
			datalessRegionColor: 'transparent'
		};

		var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
		chart.draw(data, options);
	}
}