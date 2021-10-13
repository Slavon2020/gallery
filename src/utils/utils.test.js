import { createQueryString, getIncrementedQueryPage, DEFAULT_QUERY } from "./utils";

const searchParam_redCar = 'red car';
const queryString_redCar = 'https://pixabay.com/api/?key=23807664-d465b5ce78d506d1b4a3bf0e8&q=red+car&image_type=photo';

const searchParam_BMW = 'BMW';
const queryString_BMW = 'https://pixabay.com/api/?key=23807664-d465b5ce78d506d1b4a3bf0e8&q=bmw&image_type=photo';

const defaultQueryStringWithIncrementedPageNum = 'https://pixabay.com/api/?key=23807664-d465b5ce78d506d1b4a3bf0e8&page=2';
const defaultQueryStringPage3 = 'https://pixabay.com/api/?key=23807664-d465b5ce78d506d1b4a3bf0e8&page=3';

describe('Testing createQueryString method', () => {
    test('should return query string that includes search param: red car', () => {
        expect(createQueryString(DEFAULT_QUERY, searchParam_redCar)).toBe(queryString_redCar);
    });
    test('should return query string that includes only lowercased params', () => {
        expect(createQueryString(DEFAULT_QUERY, searchParam_BMW)).toBe(queryString_BMW);
    })
})

describe('Testing getIncrementedQueryPage method', () => {
    test('Should return query string with page=2', () => {
        expect(getIncrementedQueryPage(DEFAULT_QUERY)).toBe(defaultQueryStringWithIncrementedPageNum);
    });
    test('Should return query string with page=3', () => {
        expect(getIncrementedQueryPage(defaultQueryStringWithIncrementedPageNum)).toBe(defaultQueryStringPage3);
    })
})

