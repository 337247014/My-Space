export class Order {
    constructor(
        public id:number,
        public name:string,
        public type:string,
        public alterName?:string
    ){}
}