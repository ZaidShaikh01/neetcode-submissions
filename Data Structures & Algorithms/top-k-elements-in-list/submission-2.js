class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        for(let i=0;i<nums.length;i++){
            if(map.has(nums[i])){
                map.set(nums[i],map.get(nums[i])+1);
            }
            else{
                map.set(nums[i],1);
            }
        }
        // Creating a new mapArr
        let mapArr = [...map.entries()];
        // Sorting those arr elements
        mapArr.sort((a,b) => b[1] - a[1] );
        // Producing the result
        let resArr = []
        for(let i =0;i<k;i++){
            resArr.push(mapArr[i][0]);
        }
        
        return resArr;
    }
}
