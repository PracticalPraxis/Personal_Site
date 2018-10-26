	  function GetWeather(name) {
		  var query = document.getElementById(name).value;
		  console.log(query);
		  console.log(name);
		  var x = new XMLHttpRequest();
		  var apiKey = '5412bb1884d9d8e9b13963c23b0e8202';
		  var url = `http://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&appid=${apiKey}`;
		  x.open("GET", url, true);
		  x.onload = function() {
			  var jsonResponse = JSON.parse(x.responseText);
			  var result = `Currently ${jsonResponse.main.temp} degrees in ${jsonResponse.name}!`
			  document.getElementById("display").innerHTML = result;
		  }
		  x.send(null);
}