class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            while ((l < r) && !isAlphaNums(s[l])) {
                l ++;
            }
            
            while ((l < r) && !isAlphaNums(s[r])) {
                r --;
            }

            if (s[l].toLowerCase() !== s[r].toLowerCase()){
                return false;
            } 
                
            l ++;
            r --;
            
        }
        return true;
    }
}

function isAlphaNums(char) {
    return (
        ( char >= 'a' && char <= 'z') ||
        ( char >= 'A' && char <= 'Z') ||
        ( char >= '0' && char <= '9')
    )
}
