class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';

        for (let str of strs) {
            res += String(str.length) + "#" + str;
        }

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = new Array();

        let i = 0;

        while (i < str.length) {
            
            let j = i + 1;

            while (str[j] !== '#') {
                j++;
            }

            let length = parseInt(str.substring(i, j));

            i = j + 1;
            j = i + length;

            res.push(str.substring(i, j));

            i = j;
        }

        return res;
    }
}
