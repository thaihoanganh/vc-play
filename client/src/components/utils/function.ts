export const bemClassName = (
  prefix: string,
  modifiers: (undefined | null | false | string)[] = [],
  ...classes: (undefined | null | false | string)[]
): string => {
  return [
    prefix.trim(),
    ...modifiers.reduce<string[]>((a, b) => (b ? [...a, prefix.trim() + "--" + b.trim()] : a), []),
    ...classes.reduce<string[]>((a, b) => (b ? [...a, b.trim()] : a), []),
  ].join(" ");
};
