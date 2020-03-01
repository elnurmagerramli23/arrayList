let ArrayList = {
    array: [],
    size: 0,
    init: function(argument) {
        if((typeof argument) !== 'object' || argument === null) {
            return 'Please input an array'
        } else {
        ArrayList.array = argument;
        ArrayList.size = argument.length;
        }
    },
    addAtEnd: function(arrElm) {
        if((typeof arrElm) !== 'object' || arrElm === null) {
            return 'Please input an array'
        } else {
        const arr = ArrayList.array;
        arr[arr.length] = arrElm;
        ArrayList.size = arr.length;
        }
    },
    clearObject: function() {
        ArrayList.array = [];
        ArrayList.size = 0
    },
    clearFromEnd: function() {
        const arr = ArrayList.array;
        arr.length = [arr.length - 1];
        ArrayList.size = arr.length;
    },
    clearFirst: function() {
        let arr = ArrayList.array;   
        let b = [];     
        for (let i = 1; i < arr.length; i++) {
            b[i] = arr[i];
        }
        arr = b;
    },
    
};


// addToFirst: function(arrElm) {
//     let arr = ArrayList.array;
//     let b = [];
//     for (let i = 1; i < arr.length; i++) {
//         b[i-1] = arr[i];
//     }
//     arr = b;
// },