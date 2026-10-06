class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // Big O of n^2 solution
let res = []
//  I want to arrays, first one will be prefix array & second will be suffix array, they will store the value of products, excuding the index values
let prefix = []
let suffix = []

prefix[0]=1
prefix[1]=nums[0]
suffix[0]=1

// Will give me the last element

for(let i = 2 ; i<nums.length;i++){
  prefix[i] = prefix[i-1] * nums[i-1]
}

for(let i = 1;i<nums.length;i++){
  suffix[i] = suffix[i-1] * nums[nums.length-i]
}

for(let i=0;i<nums.length;i++){
  res.push(suffix[suffix.length-(i+1)] * prefix[i]);
}
return res

    }
}
