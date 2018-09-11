import { spawn } from 'clooney';

(async function() {
  class MyRemoteClass {
    doExpensiveCalculation(a, b) {
      return a + b;
    }
  }

  const instance = await spawn(MyRemoteClass);
  console.log(await instance.doExpensiveCalculation(5, 23));
})();