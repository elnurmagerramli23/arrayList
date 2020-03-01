describe('ArrayList.init', function (){
    it('should be defined', function() {
        assert.isDefined(ArrayList.init, 'function has been defined')
    });
    it('should warning user to []', () => {
        const arr = undefined;
        const expSize = 'Please input an array';
        const expArr = 'Please input an array';

        const actual = ArrayList.init(arr);

        assert.deepEqual(actual, expArr, expSize)
    });

    it('should warning user to []', () => {
        const arr = 'null';
        const expArr = 'Please input an array';
        const expSize = 'Please input an array';

        const actual = ArrayList.init(arr);

        assert.deepEqual(actual, expArr, expSize)
    });

    it('should return an array [1,2,3]', () => {
        const arr = [ 1, 2, 3];
        const expArr = [ 1, 2, 3];
        const expSize = 3;
        
        const actual = ArrayList.init(arr);

        assert.deepEqual(actual, expArr, expSize);
    });
});