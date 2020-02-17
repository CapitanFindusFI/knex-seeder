interface ISeeder<T> {
    getInstance(): any

    item(attributes: T): T

    generate(howMany: Number, attributes: T): Array<T>
}

export default ISeeder
