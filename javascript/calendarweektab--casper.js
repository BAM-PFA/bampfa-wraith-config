// ######################################################
// This module clicks on a tab on calendar week page
// ######################################################

module.exports = function (casper, ready) {
    casper.wait(2000, function() {
        casper.click('.day-5 a');
        ready();
    });
}
