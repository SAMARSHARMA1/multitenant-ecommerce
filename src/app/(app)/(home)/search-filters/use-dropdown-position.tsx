import { RefObject } from "react";

export const useDropdownPosition = (
  ref: RefObject<HTMLDivElement | null> | RefObject<HTMLDivElement>
) => {
  const getDropdownPosition = () => {
    if (!ref.current) return { top: 0, left: 0 };

    const rect = ref.current.getBoundingClientRect();
    const dropdownWidth = 240;

    // ✅ No scroll offsets — because we use position: fixed
    let left = rect.left;
    const top = rect.bottom;

    if (left + dropdownWidth > window.innerWidth) {
      left = rect.right - dropdownWidth;
      if (left < 0) {
        left = window.innerWidth - dropdownWidth - 16;
      }
    }
    if (left < 0) {
      left = 16;
    }
    return { top, left };
  };
  return { getDropdownPosition };
};