export const createTwitterLink = (
  artistName: string,
  albumName: string,
  slug: string
): string => {
  const tweetText = `${albumName} by ${artistName} review on staccato https://staccato.reviews/${slug}`;
  return `https://twitter.com/intent/tweet?text=${encodeURI(tweetText)}`;
};

export const createFacebookLink = (slug: string): string => {
  const url = `https%3A//staccato.reviews/${slug}`
  return `https://www.facebook.com/sharer/sharer.php?u=${url}`
}