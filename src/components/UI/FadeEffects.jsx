export const fadeLeftRight = (isVisible) => {
  return `transition-all duration-700 ease-in-out ${isVisible ? " opacity-100 translate-x-0" : "opacity-0 -translate-x-50"}`;
};

export const fadeRightLeft = (isVisible) => {
  return `transition-all duration-700 ease-in-out ${isVisible ? " opacity-100 translate-x-0" : "opacity-0 translate-x-50"}`;
};

export const fadeUpDown = (isVisible) => {
  return `transition-all duration-700 ease-in-out ${isVisible ? " opacity-100 translate-y-0" : "opacity-0 -translate-y-50"}`;
};

export const fadeDownUp = (isVisible) => {
  return `transition-all duration-700 ease-in-out ${isVisible ? " opacity-100 translate-y-0" : "opacity-0 translate-y-50"}`;
};

export const projectDownUp = (isProjectAnimating) => {
  return `transition-all duration-500 ease-in-out transform ${
    isProjectAnimating
      ? "opacity-0 translate-y-4 scale-[0.99] blur-lg"
      : "opacity-100 translate-y-0 scale-100 blur-0"
  }`;
};
