"use strict";

var Acme = (function(aug) {

	aug.fetchCatData = function() {
		return new Promise ((resolve, reject) => {
			$.ajax({
				url: "javascripts-2/categories.json"
			}).done((data) => resolve(data))
				.fail((error) => reject(error));
			});
	};

	aug.fetchTypeData = function(value) {
		return new Promise((resolve, reject) => {
			$.ajax({
				url: "javascripts-2/types.json"
			}).done((data) => resolve(data = data.types.filter((type) => {
					return type.category == value;
				})))
				.fail((error) => reject(error));
		});
	};

	aug.fetchProductData = function(value) {
		return new Promise((resolve, reject) => {
			$.ajax({
				url: "javascripts-2/products.json"
			}).done((data) => resolve(data = data.products.filter((productGroup) => {
				for (var key in productGroup) {
					return productGroup[key].type == value;
			}})))
			.fail((error) => reject(error));
		});
	};

	return aug;

}(Acme || {}));
