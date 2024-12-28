export const getFromLocalStorage = (key: string) => {
  if (typeof window === "undefined") return null;
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : null;
};

export const saveToLocalStorage = (key: string, value: unknown) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(value));
};
