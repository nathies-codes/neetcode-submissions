class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let  r = {};

        for ( let str of strs ) {
            let strSorted = str.split('').sort().join();

            if(!r[strSorted]) {
                r[strSorted] = [];
            }

            r[strSorted].push(str);
        } 

        return Object.values(r);
    }
}
