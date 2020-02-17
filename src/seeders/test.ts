import ISeeder from "../interfaces";
import * as faker from 'faker'

interface ITestSeed {
    id: string
    name: string
}

class TestSeeder implements ISeeder<ITestSeed> {
    private static instance: TestSeeder;

    private constructor() {
    }

    getInstance(): TestSeeder {
        if (!TestSeeder.instance) {
            TestSeeder.instance = new TestSeeder();
        }

        return TestSeeder.instance;
    }

    generate(howMany: Number, attributes: ITestSeed): Array<ITestSeed> {
        return [...Array(howMany).keys()].map(() => this.item(attributes))
    }

    item(attributes: ITestSeed): ITestSeed {
        const defaultValues: ITestSeed = {
            id: faker.random.uuid(),
            name: faker.company.companyName()
        };

        return {
            ...defaultValues,
            ...attributes
        };
    }


}
