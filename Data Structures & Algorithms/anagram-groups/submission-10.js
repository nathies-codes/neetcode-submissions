class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {};

        for( let str of strs ) {
            let strSorted = str.split('').sort().join();

            if(!res[strSorted]) {
                res[strSorted] = [];
            }

            res[strSorted].push(str);
        }

        return Object.values(res);
    }
}
