import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToElement() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [hash]);
  return null;
}

export default ScrollToElement;
