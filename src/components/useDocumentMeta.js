// useDocumentTitle.js
import { useRef, useEffect } from "react";

function useDocumentMeta(title, description, prevailOnUnmount = false) {
  const defaultTitle = useRef(document.title);
  const defaultDescription = useRef(document.querySelector("meta[name='description']").getAttribute("content"));


  useEffect(() => {
    document.title = title;
    document.querySelector("meta[name='description']").setAttribute('content', description);

  }, [title, description]);

  useEffect(
    () => () => {
      if (!prevailOnUnmount) {
        document.title = defaultTitle.current;
        document.querySelector("meta[name='description']").setAttribute('content', defaultDescription.current);

      }
    },
    // []
  );
}

export default useDocumentMeta;
