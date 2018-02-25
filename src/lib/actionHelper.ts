
interface Action<T extends string> {
  type: T
}

interface ActionWithPayload<T extends string, P> extends Action<T> {
  payload: P
}

export function createAction<T extends string> (type: T): Action<T>
export function createAction<T extends string, P> (type: T, payload: P): ActionWithPayload<T, P>
export function createAction<T extends string, P> (type: T, payload?: P) {
  return payload ? { type, payload } : { type }
}

export type FunctionType = (...args: any[]) => any
export type ActionsUnion<A extends { [ac: string]: FunctionType }> = ReturnType<A[keyof A]>
