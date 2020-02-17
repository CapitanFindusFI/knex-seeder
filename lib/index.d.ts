import ISeeder from "./interfaces";
declare class Seeder {
    static run<T>(seeder: (new () => ISeeder<T>), howMany?: number, attributes?: T | null): T[];
}
export default Seeder;
