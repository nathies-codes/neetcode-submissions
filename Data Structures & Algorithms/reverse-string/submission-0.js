class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        const res = [];
        let j = 0;
        for ( let i = s.length-1; i >=0; i--) {

            res.push(s[i]);
        }

        for (let i = 0; i < s.length; i++) {
            s[i] = res[i];
        }

    }
}
