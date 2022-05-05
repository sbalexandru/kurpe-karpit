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

  // const stikyBottom = () => {
  //   if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
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
      //  stikyBottom
    );
    return () => {
      window.removeEventListener(
        "scroll",
        toggleVisibility
        //  stikyBottom
      );
    };
  });

  return (
    <ScrollBtn
      onClick={scrollToTop}
      className={isVisible ? "opacity-100" : "opacity-0"}
    ></ScrollBtn>
  );
}
