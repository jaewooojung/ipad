import { Coordinate2D } from "../types";

/**
 * y = ax + b
 */
function linearEquation(progress: number, c1: Coordinate2D, c2: Coordinate2D) {
  const y = ((c2.y - c1.y) / (c2.x - c1.x)) * (progress - c1.x) + c1.y;
  return y;
}

function quadraticEquation(progress: number, c1: Coordinate2D, c2: Coordinate2D) {
  const y = ((c2.y - c1.y) / (c2.x - c1.x)) * (Math.pow(progress, 2) - c1.x) + c1.y;
  return y;
}

export { linearEquation, quadraticEquation };
