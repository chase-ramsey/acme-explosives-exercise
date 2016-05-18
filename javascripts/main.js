"use strict";

var categories;
var types;
var products;

// DOM element variables

var $table = $("#table");

var $catList = $("#categories-list");
$catList.change((event) => {
	let typesToList = event.target.value;
	Acme.buildSelect(typesToList);
});

var $typeList = $("#types-list");
$typeList.change((event) => {
	let productsToList = event.target.value;
	Acme.buildTable(productsToList);
});

var $filter = $("#filter");
$filter.click(function() {
	let typeVal = $typeList.val();
	});

// Fetch data

Acme.fetchData("javascripts/categories.json")
	.then((data1) => {
		categories = data1;
		return Acme.fetchData("javascripts/types.json");
	}).then((data2) => {
		types = data2;
		return Acme.fetchData("javascripts/products.json");
	}).then((data3) => {
		products = data3;
		Acme.buildTable(products.products.length);
	});

