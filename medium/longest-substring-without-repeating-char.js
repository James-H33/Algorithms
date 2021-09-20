/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(str) {
    let charsCount = { };
    let longestCount = 0;

    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];
        let runningCount = 1;
        charsCount[currentChar] = 1;

        for (let j = i + 1; j < str.length; j++) {
            const innerChar = str[j];

            if (innerChar in charsCount) {
                break;
            }

            charsCount[innerChar] = 1;
            runningCount++;
        }

        charsCount = {};

        if (runningCount > longestCount) {
            longestCount = runningCount;
        } 
    }

    return longestCount;
};