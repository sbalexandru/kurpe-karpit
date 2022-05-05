import { useEffect, useState } from "react";
import { ScrollBtn } from "./ScrollToTop.styled";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  // const [isStiky, setIsStiky] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // const setStiky = () => {
  //   if (window.scrollX < 100) {
  //     setIsStiky(true);
  //   } else {
  //     setIsStiky(false);
  //   }
  // };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener(
      "scroll",
      toggleVisibility
      //  setStiky
    );
    return () => {
      window.removeEventListener(
        "scroll",
        toggleVisibility
        //  setStiky
      );
    };
  });

  // useEffect(() => {
  //   window.addEventListener("scroll", setStiky);
  //   return () => {
  //     window.removeEventListener("scroll", setStiky);
  //   };
  // });

  return (
    <ScrollBtn
      onClick={scrollToTop}
      className={isVisible ? "opacity-100" : "opacity-0"}
    >
      {console.log("xasa", isVisible ? "opacity-100" : "opacity-0")}
    </ScrollBtn>
  );
}
