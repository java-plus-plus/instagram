type User = {
  name: string;
  age: number;
  gender: string;
  employed: boolean;
};

const saveEmployeeRecord = (user: User) => {
  console.log(user);
};

saveEmployeeRecord({
  name: "Jishnu",
  age: 23,
  gender: "male",
  employed: true,
});
