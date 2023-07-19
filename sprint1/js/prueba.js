function imc(peso, altura) { 
    let imc = peso/altura*altura
    if(imc <= 18.5){
      console.log ("Bajo peso")
    }else if(imc > 18.5 && imc <= 25){
      console.log ("Normal")
    }else if(imc>25){
      console.log (" Sobrepeso ")
    }
  }
  
  // No borres la siguiente linea:
  imc;
  function filterNames(names, maxLength) {
    result = [];
  
    for (let name in names) {
      if (name.length <= maxLength ){
        result.push(name)
      }
    }
  
    result;
  }
  