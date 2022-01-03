//https://stackoverflow.com/questions/41139763/how-to-declare-a-fixed-length-array-in-typescript

type Shift<A extends Array<unknown>> = ((...args: A) => void) extends (
  ...args: [A[0], ...infer R]
) => void
  ? R
  : never;

type GrowExpRev<
  A extends Array<unknown>,
  N extends number,
  P extends Array<Array<unknown>>,
> = A['length'] extends N
  ? A
  : {
      0: GrowExpRev<[...A, ...P[0]], N, P>;
      1: GrowExpRev<A, N, Shift<P>>;
    }[[...A, ...P[0]][N] extends undefined ? 0 : 1];

type GrowExp<
  A extends Array<unknown>,
  N extends number,
  P extends Array<Array<unknown>>,
> = A['length'] extends N
  ? A
  : {
      0: GrowExp<[...A, ...A], N, [A, ...P]>;
      1: GrowExpRev<A, N, P>;
    }[[...A, ...A][N] extends undefined ? 0 : 1];

export type FixedSizeArray<T, N extends number> = N extends 0
  ? []
  : N extends 1
  ? [T]
  : GrowExp<[T, T], N, [[T]]>;
