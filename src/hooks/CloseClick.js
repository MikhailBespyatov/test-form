import { useEffect } from "react";

const findElementInChildrenList = (targetElement, searchElement) => {
  let isInParentBlock = false;
  const checkChildrenRef = (el) => {
    if (el.childElementCount === 0) return;
    else
      el.childNodes.forEach((el) => {
        if (searchElement === el) isInParentBlock = true;
        checkChildrenRef(el);
      });
  };

  checkChildrenRef(targetElement);
  return isInParentBlock;
};
const portal =
  document.querySelector("#portal-root") || document.createElement("div");

export const useCloseClick = (ref, close, visible = false) => {
  useEffect(() => {
    const closeClick = (e) => {
      if (!ref.current) return;

      if (
        ref.current !== e.target &&
        !findElementInChildrenList(ref.current, e.target) &&
        !findElementInChildrenList(portal, e.target)
      ) {
        close();
      }
    };
    document.addEventListener("click", closeClick);

    return () => document.removeEventListener("click", closeClick);
  }, [visible, ref, close]);
};
