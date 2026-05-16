class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0
        let r = s.length - 1;

        while ( l < r ) {
            while ( l < r && !alphaNums(s[l])) {
                l ++;
            }
        
            while ( l < r && !alphaNums(s[r])) {
                r --;
            }

            if( s[l].toLowerCase() !== s[r].toLowerCase()) 
            {
                return false
            }

            l++;
            r--;
        }

        return true;
    }
}

function alphaNums(a) {
        return(
            (a >= 'a' && a <= 'z') ||
            (a >= 'A' && a <= 'Z') ||
            (a >= '0' && a <= '9')
        )
    }