import Seeder = require("../src/Seeder");
import FooSeeder from "./seeders/fooSeeder";
import TestSeeder from "./seeders/testSeeder";

describe('it should correctly handle different seeds', () => {
    it('should generate a single test object', () => {
        const generation = Seeder.run(TestSeeder);
        expect(generation).toHaveLength(1);
    });

    it('should generate two test objects', () => {
        const generation = Seeder.run(TestSeeder, 2);
        expect(generation).toHaveLength(2);
    });

    it('should generate a single test object with overridden properties', () => {
        const generation = Seeder.run(TestSeeder, 1, {
            id: 'ABC'
        });
        const element = generation[0];

        expect(element).toBeDefined();
        // @ts-ignore
        expect(element.id).toBe('ABC')
    });

    it('should generate a single object', () => {
        const generation = Seeder.run(FooSeeder);
        expect(generation).toHaveLength(1);
    });

    it('should generate two objects', () => {
        const generation = Seeder.run(FooSeeder, 2);
        expect(generation).toHaveLength(2);
    });

    it('should generate a single object with overridden properties', () => {
        const generation = Seeder.run(FooSeeder, 1, {
            number: 100
        });
        const element = generation[0];

        expect(element).toBeDefined();
        // @ts-ignore
        expect(element.number).toBe(100)
    });
});
