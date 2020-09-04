(function(global, $) {

    var Greetr = function(firstname, lastname, language) {
        return new Greetr.init(firstname, lastname, language);
    }

    Greetr.prototype = {};

    Greetr.init = function(firstName, lastName, language) {
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

})(window, $)