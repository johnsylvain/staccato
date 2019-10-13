type Cache = { [key: string]: RegExp }

export const fuzzyMatch = (() => {
  const cache: Cache = {};

  return (needle: string, haystack: string): boolean => {
    const key = JSON.stringify(needle);

    if (!cache[key]) {
      const pattern = needle.split('').join('.*');
      cache[key] = new RegExp(`.*${pattern}.*`, 'ig');
    }
    return cache[key].test(haystack);
  };
})();
