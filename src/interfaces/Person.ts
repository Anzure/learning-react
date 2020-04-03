import Car  from './Car';

export default interface Person {
    firstName: string,
    middleName?: string,
    lastName: string,
    age?: number
    cars?: Car[],
}