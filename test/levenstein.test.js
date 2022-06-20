const { levenstein, expect} = require('./global');

describe('Levenstein Tests', function () {
    it('should return 0 for identical strings', function () {
        expect(levenstein.calc_levenstein('abc', 'abc')).to.equal(0);
    }
    );
    it('should return equal to or greater than 1 for different strings', function () {
        expect(levenstein.calc_levenstein('abc', 'abd')).to.be.at.least(1);
    }
    );
});
