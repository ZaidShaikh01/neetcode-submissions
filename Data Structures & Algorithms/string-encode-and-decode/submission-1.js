class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
         let newStr=''
      for(let i =0;i<strs.length;i++){
        let lenOfString = (strs[i].length)
        newStr = newStr + lenOfString + '#' + strs[i] 
      }
      
      return newStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let resStrs=[]

      let i = 0
      
      while(i<str.length){
        let hashIndex = str.indexOf('#',i);
        let length = Number(str.slice(i,hashIndex))
        let startValue = hashIndex+1
        let endValue = (startValue+length);
        
        let res = str.slice(startValue,endValue);
        resStrs.push(res);
        i=endValue
      }
      
      // console.log(strs);
      return resStrs

    }
}
