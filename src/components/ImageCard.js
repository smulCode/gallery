import React, { useState, useEffect, useRef } from "react";

export default function ImageCard({ image }) {
  const [spans, setSpans] = useState(0);
  const imageRef = useRef();

  useEffect(() => {
    imageRef.current.addEventListener("load", calcSpans());

  }, [image]);

  const calcSpans = () => {
    const height = imageRef.current.clientHeight;
  
    const spans = Math.ceil(height / 10);
    setSpans(spans);
 
  };

  const { description, urls } = image;

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img ref={imageRef} alt={description} src={urls.regular} />
    </div>
  );
}
