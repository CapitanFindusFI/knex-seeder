interface ISeeder<T> {
    item(attributes: T | null): T
}

export default ISeeder
