"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Seeder = /** @class */ (function () {
    function Seeder() {
    }
    Seeder.run = function (seeder, howMany, attributes) {
        if (attributes === void 0) { attributes = {}; }
        var instance = seeder.getInstance();
        return instance.generate(howMany, attributes);
    };
    return Seeder;
}());
exports.default = Seeder;
