// ######################################################
// This module clicks on a calendar modal
// ######################################################

module.exports = function (casper, ready) {
    casper.wait(2000, function() {
        casper.click('.month-title a');
        ready();
    });
}
