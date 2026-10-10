class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if(!height || height.length === 0) return 0;

        let l = 0;
        let r = height.length-1
        let leftMax = height[l]
        let rightMax= height[r]
        let res = 0

        while(l<r){
            if(leftMax>rightMax){
                r--;
                rightMax = Math.max(rightMax,height[r]);
                res += rightMax - height[r]
            }
            else{
                l++;
                leftMax = Math.max(leftMax,height[l]);
                res += leftMax - height[l]
            }

        }
        return res
    }
}
