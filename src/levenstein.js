
class Levenstein {
    constructor(max = 100) {
        this.Max = max;
    }


    /** 
     * // Calculate Levenstein distance between two strings
     * @param {string} str1
     * @param {string} str2
     * @returns {number}
    */
    calc_levenstein(str1, str2) {
        var d = [];
        var i, j, cost;
        for (i = 0; i <= str1.length; i++) {
            d[i] = [];
            d[i][0] = i;
        }
        for (j = 0; j <= str2.length; j++) {
            d[0][j] = j;
        }
        for (i = 1; i <= str1.length; i++) {
            for (j = 1; j <= str2.length; j++) {
                cost = (str1.charAt(i - 1) == str2.charAt(j - 1)) ? 0 : 1;
                d[i][j] = Math.min(
                    d[i - 1][j] + 1,
                    d[i][j - 1] + 1,
                    d[i - 1][j - 1] + cost
                );
            }
        }
        return d[str1.length][str2.length];
    }

    /**  Calculate percentage of similarity between two strings using levenstein distance
        * @param {string} str1
        * @param {string} str2
        * @returns {number}
        */
    levenstein_percentage(str1, str2, max) {
        if (max === undefined) {
            max = Math.max(str1.length, str2.length);
        }
       var levDistance = this.calc_levenstein(str1, str2);
        var percentage = 100 - 100 * levDistance / max
        console.log(percentage)
        return percentage;
    }
}
module.exports = Levenstein;