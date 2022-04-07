var lastDigit = function (str1, str2) {
    let a = parseInt(str1)
    for (let i = 1; i < parseInt(str2); i++) {
        a = (a * parseInt(str1)) % 10
    }
    return a
}



console.log(lastDigit());


var lastDigit = function (a, b) {
    function Modulo(a, b) {
        let mod = 0;
        for (let i = 0; i < b.length; i++)
            mod = (mod * 10 + b[i] - '0') % a;
        return mod;
    }

    function LastDigit(a, b) {
        let len_a = a.length;
        let len_b = b.length;

        if (len_a == 1 && len_b == 1 &&
            b[0] == '0' && a[0] == '0')
            return 1;

        if (len_b == 1 && b[0] == '0')
            return 1;

        if (len_a == 1 && a[0] == '0')
            return 0;

        exp = (Modulo(4, b) == 0) ? 4 :
            Modulo(4, b);

        res = Math.pow(a[len_a - 1] - '0', exp);

        return res % 10;
    }
    return LastDigit(a, b)
}