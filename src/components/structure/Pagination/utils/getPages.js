import {range} from 'lodash';

export default (totalItems, currentPage, pageSize, visibleInnerPages) => {
  const totalPages = Math.ceil(totalItems / pageSize);
  let startPage;
  let endPage;

  // If all pages are visible:
  if (totalPages <= visibleInnerPages) {
    startPage = 1;
    endPage = totalPages;

    // If not: First pages
  } else if (currentPage <= Math.ceil(visibleInnerPages / 2)) {
    startPage = 1;
    endPage = visibleInnerPages;

    // Last pages
  } else if (currentPage + Math.ceil(visibleInnerPages / 2) >= totalPages) {
    startPage = totalPages - (visibleInnerPages - 1);
    endPage = totalPages;

    // Middle pages
  } else {
    // 2 instead of '...'
    if (currentPage === visibleInnerPages - 2) {
      startPage = currentPage - (Math.ceil(visibleInnerPages / 2) - 1);
    } else {
      startPage = currentPage - (Math.ceil(visibleInnerPages / 2) - 2);
    }

    // N-1 instead of '...'
    if (currentPage === totalPages - (visibleInnerPages - 3)) {
      endPage = currentPage + (Math.ceil(visibleInnerPages / 2) - 1);
    } else {
      endPage = currentPage + (Math.ceil(visibleInnerPages / 2) - 2);
    }
  }

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

  const pages = range(startPage, endPage + 1);

  return {
    totalItems,
    currentPage,
    pageSize,
    totalPages,
    startPage,
    endPage,
    startIndex,
    endIndex,
    pages,
  };
};
