export function throttle(fn, wait) {
  let time = Date.now();

  return function inner() {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
}
