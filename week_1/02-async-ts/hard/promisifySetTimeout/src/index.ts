/**
 * Write a function that returns a promise that resolves after
 * n seconds have passed, where n is passed as an argument to the
 * function.
 */

const wait = (n: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, n * 1000);
  });
};

const main = async () => {
  console.log("Starting...");
  await wait(5);
  console.log("Finished!");
};

main();
