class Util {
    constructor() {
    }

    // 3桁カンマ付け
    separatNumericFormat(value) {
        return value.replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }

    // 小数点の切捨て
    convertCeilRate(rate, floorCount) {
        rate = Math.ceil(rate * (Math.pow(10, floorCount)));
        rate = rate / Math.pow(10, floorCount);

        let rateString = ((rate * 100) + "");

        if (rateString.length > 5) {
            rateString = rateString.substr(0, rateString.indexOf(".") + 3);
        }

        return rateString;
    }
}
let util = new Util();