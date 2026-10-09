class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

let s1 = '';
for(const char of s){
 if((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')){
   s1+=char
 }
}

s1 = s1.toLowerCase()
let i = 0;
let k=s1.length-1;

while(i<=k){
  if(s1[i] !== s1[k]){
    return false
  }
  i++;
  k--;
}
return true

    }
}
