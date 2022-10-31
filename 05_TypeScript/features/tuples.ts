const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};
//Type alias
type Drink = [string, boolean, number];
//In tuple we have a sequence to store a datatype. for doing the same we use -
const pepsi: [string, boolean, number] = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];
