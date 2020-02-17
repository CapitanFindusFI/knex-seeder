import ISeeder from "./interfaces";

class Seeder {
    static run(seeder: ISeeder<any>, howMany: Number, attributes: object = {}): Array<any> {
        const instance: ISeeder<any> = seeder.getInstance();
        return instance.generate(howMany, attributes);
    }
}

export default Seeder
