import { useEffect, useState } from "react";

export function useSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [slideShowImages, setSlideShowImages] = useState(null);
  const [intervalId, setIntervalId] = useState(null);

  const handleMouseEnter = (images) => {
    setSlideShowImages(images);
    setIsSliding(true);
    setActiveIndex(0);

    const id = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1200);
    setIntervalId(id);
  };

  const handleMouseLeave = () => {
    setIsSliding(false);
    setActiveIndex(0);
    setSlideShowImages(null);
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  return {
    activeIndex,
    isSliding,
    slideShowImages,
    handleMouseEnter,
    handleMouseLeave,
  };
}
