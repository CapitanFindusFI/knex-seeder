import * as faker from "faker";
import ISeeder from "../../src/interfaces";

interface ITestSeed {
    id?: string
    name?: string
}

class TestSeeder implements ISeeder<ITestSeed> {

    item(attributes: ITestSeed | null = null): ITestSeed {
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

export default TestSeeder
