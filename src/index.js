let ArrayList = {
    array: [],
    size: 0,
    init: function(argument) {
        if (!argument) return 'Please input an array';
        ArrayList.array = argument;
        ArrayList.size = argument.length;

        return ArrayList.array
    },
    addAtEnd: function(arrElm) {
        if (!arrElm)  return 'Please input an array';
            const arr = ArrayList.array;
            arr[arr.length] = arrElm;
            ArrayList.size = arr.length;

            return arr;
    },
    clearObject: function() {
        ArrayList.array = [];
        ArrayList.size = 0;

        return ArrayList.array
    },
    clearFromEnd: function() {
        const arr = ArrayList.array;
        arr.length = [arr.length - 1];
        ArrayList.size = arr.length;
        
        return ArrayList.array;
    },
    deleteFirst: function() {
        const arr = ArrayList.array;   
        let newArray = [];     

        for (let i = 1; i < arr.length; i++) {
            newArray[i-1] = arr[i];
        };
        ArrayList.array = newArray;
        ArrayList.size -= 1;

        return arr[0];
    },
    addToFirst: function(argument) {
        if (!argument) return 'Please check your input';
        const arr = ArrayList.array;
        let newArr = [argument];

        for (let i = 0; i < arr.length; i++) newArr[i + 1] = arr[i]
        ArrayList.array = newArr;
        ArrayList.size += 1;

        return ArrayList.array;
    },
    revArr: function() {
        const arr = ArrayList.array;
        let secArr = [];

        for (let i = arr.length - 1; i >= 0; i--) {
            secArr[secArr.length] = arr[i];
        }        
        ArrayList.array = secArr;
        ArrayList.size = secArr.length;

        return ArrayList.array
    },
    checkForInclude: function(argument) {
        if (!argument) return 'Please input an array';
        const arr = ArrayList.array;

        for (let i = 0; i < arr.length; i++) {
            if (argument === arr[i]) {
                return "true"
            }  
        };

        return "false"
    },
    checkForIndex: function(argument) {
        if (!argument) return 'Please input an array';
        const arr = ArrayList.array;

        for (let i = 0; i < arr.length; i++) {
            if (argument === arr[i]) return i
        }
        ArrayList.size = arr.length;

        return '-1';
    },
    changeToString: function() {
        const arr = ArrayList.array;
        
        return '' + arr;
    },
    getSliceAction: function(start, end) {
        if((typeof start) !== 'number' || (typeof end) !== 'number') {
        return 'Please input a number'
        }
        const arr = ArrayList.array;
        let newArr = [];
        let counter = 0;

        if (end) {        
            for (let i = start; i < end; i++) {
                newArr[counter++] = arr[i];
            }
        } else {
            for (let i = start; i < arr.length; i++) {
                newArr[counter++] = arr[i];
            }
        }
        ArrayList.array = newArr;
        ArrayList.size = newArr.length;

        return newArr
    },
};
 







