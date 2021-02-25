module.exports = function toReadable (num) {
    let words = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
}

let finalStr = [];

if (num < 21) {
    finalStr.push(words[num])
    return finalStr.join(' ')
} else if (num > 20 && num < 100) {
    let [digit, simple] = [...String(num)]
    finalStr.push(words[Number(digit + '0')])
    if (simple != 0) {
        finalStr.push(words[Number(simple)])
    }
    return finalStr.join(' ')
} else if (num > 99 && num < 1000) {
    let [hundred, digit, simple] = [...String(num)]
    finalStr.push(`${words[hundred]} hundred`)
    if (digit != 0) {
        
        if (digit == 1) {
            finalStr.push(words[Number(String(digit) + String(simple))])
            console.log(digit)
            console.log(Number(String(digit) + String(simple)))
            return finalStr.join(' ')
        } else {
            finalStr.push(words[Number(digit + '0')])
        }
    }
    if (simple != 0) {
        finalStr.push(words[Number(simple)])
    } 
    return finalStr.join(' ')
}
};
