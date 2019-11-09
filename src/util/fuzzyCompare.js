export const fuzzyCompare = (term, compare, tolerance = 0) => {
  if (term.length > compare.length) {
    return false;
  }
  return (
    term.split('').filter(l => {
      return compare.split('').find(cl => {
        return cl === l;
      });
    }).length >=
    term.length - tolerance
  );
};
