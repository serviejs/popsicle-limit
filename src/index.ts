import { CommonRequest, CommonResponse } from "servie/dist/common";

const trickle = require("timetrickle");

/**
 * Rate limit popsicle HTTP requests.
 */
export function limit(count: number, duration: number) {
  const limit = trickle(count, duration);

  return function limitMiddleware<
    T extends CommonRequest,
    U extends CommonResponse
  >(_: T, next: () => Promise<U>): Promise<U> {
    return new Promise(limit).then(next);
  };
}

export const SECOND = 1000;
export const MINUTE = SECOND * 60;
export const HOUR = MINUTE * 60;
export const DAY = HOUR * 24;
export const WEEK = DAY * 7;
