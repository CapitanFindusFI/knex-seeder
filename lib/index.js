"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Seeder {
    static run(seeder, howMany = 1, attributes = null) {
        const seed = new seeder();
        return Array.from(Array(howMany).keys()).map(() => seed.item(attributes));
    }
}
exports.default = Seeder;
