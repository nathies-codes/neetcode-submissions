class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            while ( l < r && !this.alphaNums(s[l])) {
                l ++;
            }
            while ( r > l  && !this.alphaNums(s[r])){
                r --;
            }

            if ( s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }
            l ++;
            r --;
        }

        return true;
    }

    alphaNums(c) {
        return (
            ( c >= 'A' && c <= 'Z') ||
            ( c >= 'a' && c <= 'z') ||
            ( c >= '0' && c <= '9')
        );
    }
}
