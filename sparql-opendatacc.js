// endpoint
/*
prefix ic: <http://imi.ipa.go.jp/ns/core/rdf#> // 2.3.1
prefix ic: <http://imi.go.jp/ns/core/rdf#> // 2.3.2
*/
var SPARQL_ENDPOINT = [
	{ name: "opendata.cc", baseurl: "https://sparql.opendata.cc/data/sparql", suffix: "&output=json", imi: "http://imi.go.jp/ns/core/rdf#" }
];

var querySPARQL = function(endpoint, q, callback) {
	q = "prefix ic: <" + endpoint.imi + ">\n" + q;
	var url = endpoint.baseurl + "?query=" + encodeURIComponent(q) + endpoint.suffix;
	url += "&callback=" + getCallbackMethod(callback);
//	prompt(q);
//	prompt("", url);
	jsonp(url);
};
var queryItemSPARQL = function(endpoint, uri, callback) {
	querySPARQL(endpoint, "select * { <" + uri + "> ?p ?o }", callback);
};
