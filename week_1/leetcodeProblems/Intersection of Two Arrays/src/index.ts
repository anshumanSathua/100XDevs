/**
 * Given two integer arrays nums1 and nums2, return an array of their 
intersection
. Each element in the result must be unique and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
 */

const intersection = (nums1: number[], nums2: number[]): number[] => {
  let nums2Set: Set<number> = new Set(nums2);
  let numArr: number[] = [];
  nums1.forEach((x) => {
    if (nums2Set.has(x) && !numArr.includes(x)) {
      numArr.push(x);
    }
  });
  return numArr;
};

let arr1: number[] = [4, 9, 5];
let arr2: number[] = [9, 4, 9, 8, 4];
console.log(intersection(arr1, arr2));
