const data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

const itemsPerPage = 10;
const pageNumber = 1;

const startIndex = (pageNumber - 1) * itemsPerPage;
const paginationData = data.slice(startIndex, startIndex + itemsPerPage);

console.log(paginationData)