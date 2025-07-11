export const getUppercaseInitials = (str: string) =>
  str
    .split(" ")
    .map((name) => name?.[0] ?? "")
    .join()
    .toUpperCase();

type Result<T, E = Error> = [T, null] | [null, E];

export const safeTry = async <T, E = Error>(
  promise: Promise<T>,
): Promise<Result<T, E>> => {
  try {
    return [await promise, null];
    // eslint-disable-next-line
  } catch (error: any) {
    return [null, error as E];
  }
};
