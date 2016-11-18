(function() {

function CINDRELLAPROJECT(doc) {
	var _self = this;

	_self.doc = doc;

	_self.constructor(_self);
}

CINDRELLAPROJECT.prototype.constructor = function() {
	var progressBars = this.doc.querySelectorAll('[data-progress-bar]');

	for(var i=0; i<progressBars.length; i++) {
		progressBars[i].style.width = progressBars[i].dataset.progressBar;
	}
}

var app = new CINDRELLAPROJECT(document);

})();