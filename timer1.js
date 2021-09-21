//first convert command line arguments into workable array
const input = process.argv.slice(2);
//convert all strings to numbers
input.forEach((str, i) => {
  input[i] = Number(str);
});
//loop through array
for (let i = 0; i < input.length; i++) {
  if (input[i] !== NaN && input[1] > 0) {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, input[i] * 1000);
  }
}
