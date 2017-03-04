// ######################################################
// This module clicks on a filter on onview
// ######################################################

module.exports = function (casper, ready) {
    casper.wait(2000, function() {
        casper.click('.on_view_exhibition');
        ready();
    });
}
