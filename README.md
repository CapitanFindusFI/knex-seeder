# JS Seeder
This package provides you a simple interface and a class,
useful to create dummy data starting from a TypeScript interface or a JS object

This package depends on [Faker.js](https://github.com/marak/Faker.js/)

I would recommend using TypeScript to benefit of all of his type checking, as there are a few generic types over here

### The Seeder Class

The Seeder class provides a single static method, 
which is `.run`, providing three different parameters (first is mandatory, others are optional)

```typescript
class Seeder {
    public static run<T>(seeder: new () => ISeeder<T>, howMany: number = 1, attributes: T | null = null): T[] {
        const seed = new seeder();
        return [...new Array(howMany).keys()].map(() => seed.item(attributes));
    }
}
```

### The ISeed Interface

The ISeed generic interface is very basic, providing a single method called `.item`, whose declaration shows up like this
```typescript
interface ISeeder<T> {
    item(attributes: T | null): T
}
```


### Creating a new seeder

To extend the Seeder's functionality the process is pretty simple,
just create a class which implements the `ISeed` interface.

For example

```typescript
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
```
