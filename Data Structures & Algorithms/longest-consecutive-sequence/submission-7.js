class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let totalCon = 0
        let set = new Set()
for(let i = 0 ;i<nums.length;i++){
    set.add(nums[i])
}

for(let i = 0 ;i<nums.length;i++){
    if(!set.has(nums[i]-1)){
        let count  = 1
        let j = 1
        while(set.has(nums[i]+j)){
             count++
            j++
        }
        totalCon = totalCon > count ? totalCon : count
    }
}
        return totalCon
        
    }
}
