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

// Yahoo Finance API Documentation//
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://investors-exchange-iex-trading.p.rapidapi.com/stock/msft/effective-spread",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "investors-exchange-iex-trading.p.rapidapi.com",
		"x-rapidapi-key": "7b1446c9edmshf8adfa5f76f3cc9p15e989jsn47a76e99940a"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});

// Investors Exchange API Documentation//
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://investors-exchange-iex-trading.p.rapidapi.com/stock/msft/effective-spread",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "investors-exchange-iex-trading.p.rapidapi.com",
		"x-rapidapi-key": "7b1446c9edmshf8adfa5f76f3cc9p15e989jsn47a76e99940a"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});

// Crypto Asset Tickers API documentation//
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://bravenewcoin-v1.p.rapidapi.com/ticker?show=usd&coin=btc",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "bravenewcoin-v1.p.rapidapi.com",
		"x-rapidapi-key": "7b1446c9edmshf8adfa5f76f3cc9p15e989jsn47a76e99940a"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});