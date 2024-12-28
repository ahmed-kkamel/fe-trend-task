type Procedure<T extends unknown[] = unknown[]> = (...args: T) => void;

const debounce = <F extends Procedure>(func: F, wait: number) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<F>): void => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export default debounce;
