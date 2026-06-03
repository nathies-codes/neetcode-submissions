class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        let left = 0, right = s.length - 1;

        while ( left < right ) {
            while( (left < right) && !isAlphaNum(s[left]) ) {
                left ++;
            }

            while( (left < right) && !isAlphaNum(s[right]) ) {
                right --;
            }

            if(s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            } else {
                left ++;
                right --;
            }
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
