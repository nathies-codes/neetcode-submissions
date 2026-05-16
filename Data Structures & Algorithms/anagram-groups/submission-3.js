class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let result = {}

        for ( let str of strs ) {

            const strSorted = str.split('').sort().join();

            if(!result[strSorted]) {
                result[strSorted] = []
            }

            result[strSorted].push(str);
        }

        return Object.values(result);
    }
}
