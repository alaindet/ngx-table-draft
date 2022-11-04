import { range } from './range';

export function elidedRange(
	total: number,
	current: number = 1,
	diameter: number = 5,
): (number | null)[] {

  // Diameter must be odd
  if (diameter % 2 === 0) {
    throw new Error(`Diameter must be odd, ${diameter} given`);
  }

  const result: (number | null)[] = [];
  const radius = (diameter - 1) / 2;

  let windowInf = current - radius;
  while (windowInf < 1) windowInf++;
  const elideLeft = windowInf - 1 > 1;

  let windowSup = current + radius;
  while (windowSup > total) windowSup--;
  const elideRight = total - windowSup > 1;

  if (windowInf !== 1) {
    result.push(1);
  }

  if (elideLeft) {
    result.push(null);
  }

  result.push(...range(windowInf, windowSup));

  if (elideRight) {
    result.push(null);
  }

  if (windowSup !== total) {
    result.push(total);
  }

  return result;
}
