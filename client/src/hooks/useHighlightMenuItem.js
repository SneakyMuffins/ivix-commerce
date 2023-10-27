import { useState, useEffect } from "react";

export function useHighlightMenuItem(menuItem, currentLocation) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (menuItem.route === currentLocation.pathname) {
      setIsActive(true);
    } else if (menuItem.subItems) {
      const subItemIsActive = menuItem.subItems.some(
        (subItem) => subItem.route === currentLocation.pathname
      );
      setIsActive(subItemIsActive);
    } else {
      setIsActive(false);
    }
  }, [menuItem, currentLocation]);

  return isActive;
}
