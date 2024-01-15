function factorial(number:number):number | boolean {
  if (number < 0 || number > 100) return false;
  if (number === 1 || number === 0) return number;
  return factorial(number - 1) as number * number;
}

export default factorial;