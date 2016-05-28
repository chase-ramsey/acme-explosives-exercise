"use strict";

// DOM element variables
var $table = $("#table");
var $catList = $("#categories-list");
var $typeList = $("#types-list");

$("document").ready(() => {
	Acme.fetchCatData()
		.then((data) => {
			var buildCatList = `<option value="" disabled selected>Choose a category</option>`;
			for (let i = 0; i < data.categories.length; i++) {
				buildCatList += `<option value="${data.categories[i].id}">${data.categories[i].name}</option>`;
			}
			$catList.html(buildCatList);
			$catList.removeAttr("disabled");
	});
});

$catList.change((event) => {
	Acme.fetchTypeData(event.target.value)
		.then((data) => {
			var buildTypeList = `<option value="" disabled selected>Choose a type</option>`;
			for (let i = 0; i < data.length; i++) {
				buildTypeList += `<option value="${data[i].id}">${data[i].name}</option>`;
			}
			$typeList.html(buildTypeList);
			$typeList.removeAttr("disabled");
		});
});

$typeList.change((event) => {
	Acme.fetchProductData(event.target.value)
		.then((data) => {console.log("data after products: ", data)})
});
