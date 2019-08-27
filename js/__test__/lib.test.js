import {calcuateCashBack} from "../lib";

test('the function work correctly', () =>{
   const normalBuy = 500;
   const highBuy = 5000;
   const specialBuy = 20000;

   const expected = 6255;
   const result = calcuateCashBack(normalBuy, highBuy, specialBuy);
   expect(result).toBe(expected);
});