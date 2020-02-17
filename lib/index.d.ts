import ISeeder from "./interfaces";
declare class Seeder {
    static run(seeder: ISeeder<any>, howMany: Number, attributes?: object): Array<any>;
}
export default Seeder;
