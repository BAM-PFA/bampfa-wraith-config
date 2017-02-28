// ######################################################
// This module checks to see if the drupal error box thing
// is present. It often shows up on dev environments and
// ruins the image diffs if not hidden
// ######################################################

module.exports = function (casper, ready) {
    casper.wait(2000, function() {
    	if(this.exists('.l-messages')) {
		    this.evaluate(function() {
		        document.querySelector('.l-messages').remove();
		        this.echo('found Drupal error box, removed it', 'ERROR');
		    });
    	} else {
    		// If there is no error box, dont do anything
			// this.echo('.l-messages is not found', 'ERROR');
    	}
        ready();
    });
}
