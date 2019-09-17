
// Yahoo Finance API Documentation//
/*var settings = {
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
}); */

// yahoo financials api documentation 
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-financials?symbol=AMRN",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
		"x-rapidapi-key": "7b1446c9edmshf8adfa5f76f3cc9p15e989jsn47a76e99940a"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});

/////////////////////////////////column break/////////////////////////////////////////////////////////////////////////

// Investors Exchange API Documentation//
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://investors-exchange-iex-trading.p.rapidapi.com/stock/intc/book",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "investors-exchange-iex-trading.p.rapidapi.com",
		"x-rapidapi-key": "7b1446c9edmshf8adfa5f76f3cc9p15e989jsn47a76e99940a"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response.quote.latestPrice);
	console.log(response.quote.week52High);
	console.log(response.quote.week52Low);
	console.log(response.quote.ytdChange)

	// code for Investors Exchange goes here
    //////////////////////////////////////////////////
	//
});

///////////////////////////////column break//////////////////////////////////////////////////////////////////////////

// Crypto Asset Ticker API documentation//
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
	console.log(response.coin_name);
	console.log(response.last_price);
	console.log(response.price_24hr_pcnt);
	console.log(response.vol_24hr_pcnt);

	// code for Crypto Asset Ticker goes here
    //////////////////////////////////////////////////
	//
});
