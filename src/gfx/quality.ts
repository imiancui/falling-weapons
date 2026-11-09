export const isLowQuality =
  matchMedia('(pointer: coarse)').matches || Math.min(screen.width, screen.height) < 700 || new URLSearchParams(location.search).has('low');

export const pixelRatio = Math.min(window.devicePixelRatio || 1, isLowQuality ? 1.25 : 2);
