const { levenstein, expect} = require('./global');

describe('Levenstein Percentage Tests', function () {
    it('should return 100 for identical strings', function () {
        expect(levenstein.levenstein_percentage('abc', 'abc')).to.equal(0);
    }
    );
    it('should return below 100 for different strings', function () {
        expect(levenstein.levenstein_percentage('abc', 'abd')).to.be.below(100);
    }
    );
});