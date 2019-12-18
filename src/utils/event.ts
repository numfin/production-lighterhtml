export function prevent(cb: () => void) {
  return function initCb(e: Event) {
    e.preventDefault();
    cb();
  };
}
