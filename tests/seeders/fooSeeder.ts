import * as faker from "faker";
import ISeeder from "../../src/interfaces";

interface IFooSeed {
    name?: string
    number?: number
}

class FooSeeder implements ISeeder<IFooSeed> {

    item(attributes: IFooSeed | null = null): IFooSeed {
        const defaultValues: IFooSeed = {
            name: faker.random.words(1),
            number: faker.random.number(1000)
        };

        return {
            ...defaultValues,
            ...attributes
        };
    }
}

export default FooSeeder
