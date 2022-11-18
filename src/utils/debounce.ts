let timeout;

const debounce = (callback: () => void, delay: number) => {
  clearTimeout(timeout);

  timeout = setTimeout(callback, delay);
};

export { debounce };
