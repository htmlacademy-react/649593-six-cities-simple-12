const RatingValues = {
  1: 20,
  2: 40,
  3: 60,
  4: 80,
  5: 100,
} as const;

type RatingEnum = keyof typeof RatingValues;

export function calculateRating(rating: number): number {
  const roundedRating = Math.round(rating) as RatingEnum;

  if (roundedRating in RatingValues) {
    return RatingValues[roundedRating];
  }

  return 0;
}

export function findFirstSentence(description: string): string {
  const match = description.match(/^[^.!?]+/);

  if (match !== null) {
    return match[0];
  }

  return '';
}
