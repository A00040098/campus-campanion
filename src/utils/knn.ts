export function calculateEuclideanDistance(vec1: number[], vec2: number[]): number {
  if (vec1.length !== vec2.length) {
    throw new Error("Vectors must be of same length");
  }
  let sum = 0;
  for (let i = 0; i < vec1.length; i++) {
    sum += Math.pow(vec1[i] - vec2[i], 2);
  }
  return Math.sqrt(sum);
}

export function recommendEvents(userVector: number[], events: any[], k: number = 2) {
  const eventsWithDistance = events.map(event => {
    return {
      ...event,
      distance: calculateEuclideanDistance(userVector, event.categoryVector)
    };
  });

  eventsWithDistance.sort((a, b) => a.distance - b.distance);

  return eventsWithDistance.slice(0, k);
}
