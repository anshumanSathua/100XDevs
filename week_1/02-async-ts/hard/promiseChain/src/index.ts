/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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
  await waitOneSecond();
  await waitTwoSecond();
  await waitThreeSecond();
  const endTime = Date.now();
  const timeTaken = (endTime - startTime) / 1000;
  console.log(`Total time taken : ${timeTaken} sec`);
};

calculateTime();
