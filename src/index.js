let ArrayList = {
    array: [],
    size: 0,
    init: function(argument) {
        if((typeof argument) !== 'object') {
            return 'Please input an array'
        } else {
        ArrayList.array = argument;
        ArrayList.size = argument.length;
        }
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
    clearFromEnd: function() {
        const arr = ArrayList.array;
        arr.length = [arr.length - 1];
        ArrayList.size = arr.length;
    },
    clearFirst: function() {
        const arr = ArrayList.array;
        do {i += 1;

          } while (i = 0)
    }
};