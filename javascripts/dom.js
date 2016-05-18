"use strict";

var Acme = (function(aug){

	aug.buildSelect = function(selection) {
		let buildHTML = "";
		var typesArr = types.types;
		let list = typesArr.filter((type) => {
			return type.category == selection;
		});
		buildHTML += `<option value="" disabled selected>Choose a type</option>`;
		list.forEach((item) => {
			buildHTML += `<option value="${item.id}">${item.name}</option>`;
		});
		$typeList.removeAttr("disabled");
		$typeList.html(buildHTML);
	};

	aug.buildTable = function(selection) {
		let buildHTML;
		var productsArr = products.products;
		let list = productsArr.filter((product) => {
				for (var key in product) {
					return product[key].type == selection;
				}
		});
		list.forEach((item) => {
			for (var key in item) {
				buildHTML += `<tr><th>${item[key].name}</th><td>${item[key].description}</td>`;
			}
		});
		$table.html(buildHTML);
	};

	return aug;

}(Acme || {}));
