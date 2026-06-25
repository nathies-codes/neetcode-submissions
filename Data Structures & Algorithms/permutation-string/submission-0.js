class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        //sanity check
        if (s1.length > s2.length) {
            return false;
        }

        let s1_count = new Array(26).fill(0);
        let s2_count = new Array(26).fill(0);

        for (let i = 0; i < s1.length; i ++) {
            s1_count[s1.charCodeAt(i)-97] ++;
            s2_count[s2.charCodeAt(i)-97] ++;
        }

        let matches = 0;

        for (let i = 0; i < 26; i ++) {
            if (s1_count[i] === s2_count[i]) {
                matches ++
            }
        }

        let l = 0;

        for (let r = s1.length; r < s2.length; r++) {
            if (matches === 26) {
                return true;
            }

            let index = s2.charCodeAt(r) - 97;
            s2_count[index] ++;

            if (s2_count[index] === s1_count[index]) {
                matches ++
            } else if (s1_count[index] + 1 === s2_count[index]) {
                matches --;
            }

            index = s2.charCodeAt(l) - 97;
            s2_count[index] --;

            if (s1_count[index] === s2_count[index]) {
                matches ++;
            } else if (s1_count[index] - 1 === s2_count[index]) {
                matches --;
            }

            l ++;
        }

        return matches === 26;
    }
}
