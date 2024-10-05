/*
 * Write a function that halts the JS thread (make it busy wait) for
 * a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

const sleep = (seconds: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};

const main = async () => {
  console.log("before sleep");
  await sleep(5);
  console.log("after sleep");
};

main();
