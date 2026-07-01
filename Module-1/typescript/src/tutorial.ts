// let name:string = "Tirth"

// console.log(name)

// Arrays

// let princes : number[] = [100, 200, 300, 400, 500]

// console.log(princes)

// let array : (string | boolean)[]=["Apple",true]
// console.log(array)


//Objects 

let car:{brand:string,year:number} = {
    brand:"BMW",
    year:2020
}
console.log(car)


//Arrays + Objects 

let book = {title:"book",cost:20}
let book2 = {title:"book2",cost:50}
let book3 = {title:"book3",cost:30}

let items:{title:string;cost?:number}[] = [];
items.push(book);
items.push(book2);
items.push(book3);
console.log(items);
