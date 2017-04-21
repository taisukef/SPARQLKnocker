// endpoint
/*
prefix ic: <http://imi.ipa.go.jp/ns/core/rdf#> // 2.3.1
prefix ic: <http://imi.go.jp/ns/core/rdf#> // 2.3.2
*/
var SPARQL_ENDPOINT = [
	{ name: "odp", baseurl: "https://sparql.odp.jig.jp/data/sparql", suffix: "&output=json", imi: "http://imi.ipa.go.jp/ns/core/rdf#" },
	{ name: "Osaka", baseurl: "https://data.city.osaka.lg.jp/sparql", suffix: "&output=json", imi: "http://imi.ipa.go.jp/ns/core/rdf#" },
	{ name: "Kyoto", baseurl: "https://sparql.city.kyoto.lg.jp/sparql/", suffix: "&should-sponge=&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on", imi: "http://imi.go.jp/ns/core/rdf#" },
	{ name: "Kobe", baseurl: "https://data.city.kobe.lg.jp/sparql", suffix: "&output=json", imi: "http://imi.go.jp/ns/core/rdf#" },
];

var querySPARQL = function(endpoint, q, callback) {
	q = "prefix ic: <" + endpoint.imi + ">\n" + q;
	var url = endpoint.baseurl + "?query=" + encodeURIComponent(q) + endpoint.suffix;
	url += "&callback=" + getCallbackMethod(callback);
//	prompt(q);
//	prompt(url);
	jsonp(url);
};
var queryItemSPARQL = function(endpoint, uri, callback) {
	querySPARQL(endpoint, "select * { <" + uri + "> ?p ?o }", callback);
};
