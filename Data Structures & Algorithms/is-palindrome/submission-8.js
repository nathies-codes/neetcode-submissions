
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
        while ( l < r && !isAlphaNum(s[l])) {
            l ++;
        }

        while ( l < r && !isAlphaNum(s[r])) {
            r--
        }

        if( s[l].toLowerCase() !== s[r].toLowerCase()) 
        {
            return false;
        }

        l ++;
        r --;
    }
        
    return true;

}
}


function isAlphaNum(char) {
    return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9') 
        )
}