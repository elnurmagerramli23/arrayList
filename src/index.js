let ArrayList = {
    array: [],
    size: 0,
    init: function(argument) {
        ArrayList.array = argument;
        ArrayList.size = argument.length;
    },
    addAtEnd: function(arrElm) {
        const arr = ArrayList.array;
        arr[arr.length] = arrElm;
        ArrayList.size = arr.length;
    },
    clearObject: function() {
        ArrayList.array = [];
        ArrayList.size = 0
    },
};



// let ArrayList = {
//     array: [],
//     size: 0,
//     init: function(argument) {
//         ArrayList.array = argument;
//         ArrayList.size = argument.length;
//     },
//     addAtEnd: function(arrElm) {
//         const arr = ArrayList.array;
//         arr[arr.length] = arrElm;
//         ArrayList.size = arr.length;
//     },
// };

// ArrayList.init([1, 3, 5])
// undefined
// ArrayList
// {array: Array(3), size: 3, init: ƒ, addAtEnd: ƒ}array: (3) [1, 3, 5]size: 3init: ƒ (argument)addAtEnd: ƒ (arrElm)__proto__: Object
// ArrayList.addAtEnd('Elnur')
// undefined
// ArrayList
// {array: Array(4), size: 4, init: ƒ, addAtEnd: ƒ}array: Array(4)0: 11: 32: 53: "Elnur"length: 4__proto__: Array(0)size: 4init: ƒ (argument)addAtEnd: ƒ (arrElm)__proto__: Object