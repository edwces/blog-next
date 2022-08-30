export const throttle = (fn: any, interval: number) => () => {
  if (fn.pause) return;
  fn.pause = true;

  setTimeout(() => {
    fn();
    fn.pause = false;
  }, interval);
};
