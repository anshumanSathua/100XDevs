/*
 * Write 3 different functions that return promises that resolve after 1,
 * 2, and 3 seconds respectively. Write a function that uses the 3
 * functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

const wait = (n: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, n * 1000);
  });
};
const waitOneSecond = () => wait(1);

const waitTwoSecond = () => wait(2);

const waitThreeSecond = () => wait(3);

const calculateTime = async (): Promise<void> => {
  const startTime = Date.now();
  await Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]);
  const endTime = Date.now();
  const timeTaken = (endTime - startTime) / 1000;
  console.log(`Total time taken : ${timeTaken} sec`);
};

calculateTime();
