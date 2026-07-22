"use client";
import { useEffect, useState } from "react";

export default function LoadingState() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  console.log(isVisible);
  return isVisible;
}
