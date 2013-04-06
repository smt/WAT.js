// WAT.js 0.0.1

// (c) 2013

// Initial setup. Using Underscore as a template. Thanks, @jashkenas.
// -----------
(function() {
    var root = this;

    var previousWAT = root.WAT;

    var WAT = function(obj) {
        if (obj instanceof WAT) return obj;
        if (!(this instanceof WAT)) return new WAT(obj);
        this.WATwrapped = obj;
    };

    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = WAT;
        }
        exports.WAT = WAT;
    }
    else {
        root.WAT = WAT;
    }

    WAT.VERSION = '0.0.1';

    WAT.greet = function() {
        return 'WAT';
    };

}).call(this);
