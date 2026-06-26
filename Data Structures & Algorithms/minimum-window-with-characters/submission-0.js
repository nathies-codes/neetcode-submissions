class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {

        if ( t === '' ) return '';

        //create the hashmap for t and the window s
        let countT = {};
        let window = {};

        //compute and find the hashmap for t (target) -> Find once and never change after
        for (let c of t) {
            countT[c] = (countT[c] || 0) + 1;
        }

        //create need, have, res, resLen, l
        let need = Object.keys(countT).length;

        let have = 0;

        let resLen = Infinity;

        let res = [-1, -1];

        let l = 0;

        //compute the windown hashmap
        for (let r = 0; r < s.length; r++) {
            let c = s[r];

            window[c] = (window[c] || 0) + 1;

            if (countT[c] && window[c] === countT[c]) {
                have ++
            }

            while (have === need) {
                if (r - l + 1 < resLen) {
                    resLen = r - l + 1;
                    res = [l, r];
                }

                window[s[l]] --;

                if (countT[s[l]] && window[s[l]] < countT[s[l]]) {
                    have --
                } 

                l ++;

            }
        }

        return resLen === Infinity ? '' : s.slice(res[0], res[1] + 1);

        //compare whether need === have

        //if yes -> find resLen and res

        //if not -> with while loop shrink the left of the window and then increment left by 1

        //return res === infinity ? '' : s.slice(r[0]. r[1] + 1);
    }
}
