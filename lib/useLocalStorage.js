"use client";
function useLocalStorage() {
  if (typeof window === "undefined") return null;
  return localStorage;
}

export default useLocalStorage;
