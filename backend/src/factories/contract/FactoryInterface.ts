export default interface FactoryInterface<T> {

   make(values: { [key: string]: any }): T; 
}