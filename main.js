// Chapter - 1: Local Storage
// Local storage kepps data like object and use key and value couples.

// To save data we should use this method.
localStorage.setItem('testKey',1);

// We can get values with keys.
console.log(localStorage.getItem('testKey'));

// We can use variables as value for local storage
let data = 'Hello world!';

localStorage.setItem('data', data);
console.log(localStorage.getItem('data'));

// We can access local storage like objects
localStorage.test2 = 2;//localStorage.setItem('test2', 2);

console.log(localStorage.test2); 
//console.log(localStorage.getItem('test2'));

//That’s allowed for historical reasons, and mostly works, 
//but generally not recommended for two reasons:
//1: We can not use default namings of JS as key with ocject style accessing
let food = 'orrange';
localStorage[food] = 'cherry';

let car = 'toString';
localStorage[car] = 'cherry';

//We can use even default names (like toString. length, push) of JS as key 
//with setItem, getItem
localStorage.setItem('toString', 'cherry');

/*2: 
There’s a storage event, it triggers when we modify the data. 
That event does not happen for object-like access. 
*/

//Delete
// Object style accessing
delete localStorage.test2;

//With method of localStorage
localStorage.removeItem('food');

//Delete everyting with method of localStorage
localStorage.clear();

// Looping over keys
// Storage objects are not iterables so we can not use for...of
let myArray = [];

let myObject = new Object;

for(let i = 0; i < localStorage.length; i++){
    let key = localStorage.key(i);
    myArray.push(localStorage.getItem(key));
    myObject[key] = localStorage.getItem(key);
}

console.log(myArray, myObject);

// Just we can receive values as mixed with default method names for localStorage
for(let key in localStorage){
    console.log(key);
}

// Tricky way to use for...of. We use for...of directly.
let keys = Object.keys(localStorage);
console.log(keys);
for(let key of keys){
    console.log('hi:',key,localStorage.getItem(key));
}

//Keys and values are string

// Value is an object
let user = {
    name: 'Dali'
}

localStorage.user = user;

console.log(localStorage.user); // [object object]


//Value is an array
let userArray = ['Dali','Gonzalo'];

localStorage.user2 = userArray;

console.log(localStorage.user2); // Dali, Gonzalo

//Chapter -2: Session Storage
//In different pages' sessionStorages values will be different
//!!!But if we do same thing with local storage value will be same.
let userMessage = prompt('please write your message');
sessionStorage.setItem('company', userMessage);
console.log(sessionStorage.getItem('company'));

localStorage.setItem('company', userMessage);
console.log(localStorage.getItem('company'));

// Chapter - 3: Storage Event
/*
When the data gets updated in localStorage or sessionStorage, storage event triggers, 
with properties:

key – the key that was changed (null if .clear() is called).
oldValue – the old value (null if the key is newly added).
newValue – the new value (null if the key is removed).
url – the url of the document where the update happened.
storageArea – either localStorage or sessionStorage object where the update happened.

*/

window.onstorage = event => {
    console.log(event.key);
};


addEventListener('storage', (e)=>  console.log(e.key));
localStorage.setItem('now', Date.now());