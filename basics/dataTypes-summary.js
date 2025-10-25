// Premitive - Call by value (Not a reference but a copy is created)
    // string, number, boolean, null(empty, not 0), undefined(declared but not defined), symbol, BigInt   
    // JavaScript is dynamically types language

    const score = 10; // dynamically typed to number
    const username = 'pks'
    const isLoggedIn = true
    const temp = null // temp is not 0
    let userEmail; // undefined - can be manually defined as undefined too
    const id = Symbol(123)
    const anotherId = Symbol(123)

    console.log(id === anotherId);

    const bigNumber = 12347163287536425837239487n
    console.log(typeof bigNumber);
    console.log(typeof temp);

// Non-premitive - Reference type - reference is allocated
    // Array, Objects, Functions
    const heroes = ['shaktiman', 'naagraj', 'doga']

    //Objects
    let myObj = {
        name: 'Hrithik',
        age: 45
    }

    //Functions
    const myFunction = function(){
        console.log('Hello world!!');
        
    }

    console.log(typeof heroes); // Object
    console.log(typeof myObj); // Object
    console.log(typeof myFunction); // Object function
    