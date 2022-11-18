const guid = (): string =>
  [2, 1, 1, 1, 3]
    .map((count: number): string => {
      let out = '';

      for (let index = 0; index < count; index++) {
        out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      }

      return out;
    })
    .join('-');

export { guid };
