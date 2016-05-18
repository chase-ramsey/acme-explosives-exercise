"use strict";

var Acme = (function(aug) {

	aug.fetchData = function(jsonFile) {
		return new Promise ((resolve, reject) => {
			$.ajax({
				url: jsonFile
			}).done((data) => resolve(data))
				.fail((error) => reject(error));
			});
	};

	return aug;

}(Acme || {}));
