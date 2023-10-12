
let boardMsg = {
    0 : 'Keep Playing',
    1 : 'Good Effort',
    2 : 'Great Work',
    3 : 'Well Done',
    4 : 'Almost Perfect',
    5 : 'Perfect'
}

export function boardMessage(key) {
    return boardMsg[key]
}

