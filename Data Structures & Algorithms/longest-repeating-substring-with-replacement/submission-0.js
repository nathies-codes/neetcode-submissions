class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        let charSet = new Set(s);

        let res = 0;

        for (let c of charSet) {
            let count = 0,
                left = 0;

            for (let r = 0; r < s.length; r++) {

                if (s[r] === c) {
                    count ++;
                }

                while ((r-left + 1) - count > k) {
                    if (s[left] === c) {
                        count --
                    }
                    left ++;
                }

                res = Math.max(res, (r-left + 1));

            }
        }
        return res;
    }
}
