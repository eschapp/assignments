/**
 * Pagination is common on news sites, e-commerce, and blogs. Write a function that
 * prints out the pagination text.
 */

function paginationText(pageNumber, pageSize, totalProducts) {
  var pageStart = (pageSize * (pageNumber - 1)) + 1;
  var counter = pageStart + (pageSize -1);

  if ((pageNumber === 1) && (pageSize < totalProducts)) {
    counter = pageSize;
  }

  if ((pageSize > totalProducts)){
   counter = totalProducts;
  }

  if ((pageSize * pageNumber) > (totalProducts)){
   counter = totalProducts;
  }


  var pagination = "Showing " + pageStart + " to " + counter + " of " + totalProducts + " Products.";
//console.log(pagination);
  return
}


console.assert(paginationText(1, 10, 30) === 'Showing 1 to 10 of 30 Products.')
console.assert(paginationText(2, 10, 30) === 'Showing 11 to 20 of 30 Products.')
console.assert(paginationText(3, 10, 30) === 'Showing 21 to 30 of 30 Products.')
console.assert(paginationText(3, 10, 26) === 'Showing 21 to 26 of 26 Products.')
console.assert(paginationText(1, 10,  8) === 'Showing 1 to 8 of 8 Products.')


  // pageProductsStart = totalProducts % (pageNumber * pageSize)
  //
  //  1  - 10 10
  //  11 - 20 10
  //  21 - 26 6
  //  pageStart = the number the page starts on
  //  counter = the number the page ends on // add one and run again
  //  lastPage = if totalProducts - i * pageSize < pageSize