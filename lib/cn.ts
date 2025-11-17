export function cn(
  ...inputs: Array<
    | string
    | false
    | null
    | undefined
    | Record<string, boolean>
    | Array<string | false | null | undefined>
  >
): string {
  const classNames: string[] = [];

  inputs.forEach((input) => {
    if (!input) return;

    if (typeof input === 'string') {
      classNames.push(input);
      return;
    }

    if (Array.isArray(input)) {
      classNames.push(
        ...input.filter(
          (value): value is string =>
            typeof value === 'string' && value.length > 0,
        ),
      );
      return;
    }

    Object.entries(input).forEach(([key, value]) => {
      if (value) classNames.push(key);
    });
  });

  return classNames.join(' ');
}

