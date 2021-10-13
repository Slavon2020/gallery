export const DEFAULT_QUERY = 'https://pixabay.com/api/?key=23807664-d465b5ce78d506d1b4a3bf0e8';

export function createQueryString(defaultQuery, value) {
    return `${defaultQuery}&q=${value.replace(/ /g, '+').toLowerCase()}&image_type=photo`;
}

const pageParamLength = 5;
export function getIncrementedQueryPage(query) {
    const index = query.indexOf('page');
    if (index === -1) return query + '&page=2';

    let currentPageNumber = '';
    for (let i = index + pageParamLength; i < query.length; i++) {
        const number = Number(query[i])
        if(number) {
            currentPageNumber += number;
        } else {
            currentPageNumber += number;
            break;
        }
    }
    const incrementedPageNumber = Number(currentPageNumber) + 1;
    const incrementedQueryPage = query.replace(`page=${currentPageNumber}`, `page=${incrementedPageNumber}`);
    return incrementedQueryPage;
}