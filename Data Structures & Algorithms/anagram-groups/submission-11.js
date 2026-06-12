class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let freq = {};

        for (let str of strs) {

            let strSorted = str.split('').sort().join();

            if(!freq[strSorted]) {
                freq[strSorted] = []
            }

            freq[strSorted].push(str);
        }

        return Object.values(freq);
    }
}
