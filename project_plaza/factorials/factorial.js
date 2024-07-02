function factorial(num) {
    let fac = 1;
    if (num > 0){
        for (let i = 1; i < num+1; i++){
            fac = fac * i;
        }
        return fac;
    }
    else if (num === 0){
        return 1;
    }
    else{
        throw new Error('Parameter is not valid!');
    }

  }
  
  module.exports = factorial;