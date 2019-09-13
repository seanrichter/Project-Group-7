console.log("hello")
//City-Geo Location Lookup//
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=New%20York",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
		"x-rapidapi-key": "7b1446c9edmshf8adfa5f76f3cc9p15e989jsn47a76e99940a"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});

//Yahoo finance api call//
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-summary?region=US&lang=en",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
		"x-rapidapi-key": "7b1446c9edmshf8adfa5f76f3cc9p15e989jsn47a76e99940a"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});
