// ######################################################
// This module clicks on the filter button on calendar
// ######################################################

module.exports = function (casper, ready) {
    casper.wait(2000, function() {
        casper.click('.bampfa-dropdown-parent');
        ready();
    });
}
