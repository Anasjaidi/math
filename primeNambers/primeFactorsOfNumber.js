var num = 101;
let flag = 1;

const isPrime = _ => {
  if (_ == 1|| _ == 2)
    return (1);
  for (let i = 2; i <= Math.sqrt(_); i++) {
    if (_ % i == 0)
      return (0);
  }
  return (1);
}

const primeFactorial = _ => {
  if (isPrime(_))
    return console.log(1 + ' * ' + _)
  for (let i = 2; i <= Math.sqrt(_); i++) {
    
    if (isPrime(i) && !(_ % i))
    {
      _ = _ / i;  process.stdout.write(i.toString() + (flag ? ' * ' : ''));i = 1;
      if (isPrime(_ / i)){;process.stdout.write((_/ i).toString());break;}
    }
    
  }
  console.log('')
}
primeFactorial(15)

