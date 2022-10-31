const carM: string[] = ["ford", "toyata"];
const cartwoD: string[][] = [["ford"], ["toyata"]];
const car = carM[0];
carM.push(100);
carM.map((car: string): string => {
  return car.toUpperCase();
});
const impDate: (Date | string)[] = ["asdasd", new Date()];
impDate.push(new Date());
impDate.push("sfld;gjk");
impDate.push(100);
