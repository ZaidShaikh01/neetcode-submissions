class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0
        let start = 0
        let end = heights.length-1
        while(start<end){
            let h = Math.min(heights[start],heights[end])
            let w = (end - start)
            let area = h * w
            maxArea = Math.max(maxArea, area)
            if(heights[start]>heights[end]){
                end--;
            }
            else{
                start++;
            }
        }
        return maxArea;
    }
}
