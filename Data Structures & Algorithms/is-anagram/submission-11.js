class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sSorted = s.split('').sort().join();
        let tSorted = t.split('').sort().join();

        return sSorted === tSorted;
    }
}
