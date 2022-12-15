function useLocalStorage() {
  if (!localStorage) return null;
  return localStorage;
}

export default useLocalStorage;
