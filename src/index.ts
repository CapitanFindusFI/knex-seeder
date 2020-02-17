import ISeeder from "./interfaces";

class Seeder {
    static run<T>(seeder: (new () => ISeeder<T>), howMany: number = 1, attributes: T | null = null): Array<T> {
        const seed = new seeder();
        return Array.from(Array(howMany).keys()).map(() => seed.item(attributes))
    }
}

export default Seeder
