import ISeeder from './interfaces/ISeeder';

class Seeder {
    public static run<T>(seeder: new () => ISeeder<T>, howMany: number = 1, attributes: T | null = null): T[] {
        const seed = new seeder();
        return [...new Array(howMany).keys()].map(() => seed.item(attributes));
    }
}
export = Seeder;
