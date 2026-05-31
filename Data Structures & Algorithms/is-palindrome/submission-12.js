class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0, right = s.length - 1;

        while (left < right) {
            while (left < right && !isAlphaNums(s[left])) {
                left ++;
            }

            while (left < right && !isAlphaNums(s[right])) {
                right --;
            }

            if( s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false
            }

            left ++;
            right --;
        }

        return true;
    }
}

function isAlphaNums( char ) {
    return (
        (char >= 'a' && char <= 'z') ||
        (char >= 'A' && char <= 'Z') ||
        (char >= '0' && char <= '9')
    )
}