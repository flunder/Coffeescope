/*
  Used as helper for Flatlists viewabilityConfig.

  Reduces an array of currently visible pages to
  just one item.
*/

export const viewableItemsToInteger = (viewableItems) => {
  const page = viewableItems.reduce((acc, curr, i) => {
    if (i === 2) acc.splice(1); // leave reduce
    return parseInt(curr.index + 1, 0);
  }, 0);
  return page;
};