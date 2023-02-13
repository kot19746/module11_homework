const getPercents = require('../../module11_homework/getPercents.js');
const countDown = require('../../module11_homework/countDown.js');
const repeatWord = require('../../module11_homework/repeatWord.js');

describe('my tests', () => {
    test('expect return from repeatWord(word, 1) to be => word1, ', () => {
        expect(repeatWord('word', 1)).toBe('word1, ');
    });

    test('countDown test', () => {
        const spy = jest.spyOn(console, 'log').mockImplementation();

        countDown(3);

        expect(spy).toHaveBeenCalledWith(3);
        expect(spy).toHaveBeenCalledWith(2);
        expect(spy).toHaveBeenCalledWith(1);
    });

    test('get 5 percents from 100 to equal 5', () => {
        expect(getPercents(5, 100)).toBe(5);
        expect(getPercents(100, 100)).toBe(100);
    });

});