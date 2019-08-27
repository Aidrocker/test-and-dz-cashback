export function calcuateCashBack(normalBuy, highBuy, specialBuy ) {
    const normalCashBack = 0.01;
    const highCashBack = 0.05;
    const specialCashBack = 0.3;
    return normalCashBack * normalBuy + highBuy * highCashBack + specialBuy * specialCashBack;
}