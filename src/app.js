const binary = document.getElementById('binaryValue');
binary.value = 0;
const results = document.getElementById('result')

function convertToDecimal(binaryValue){
  const result = parseInt(binaryValue, 2);
  return result
}

function truee(){
  results.innerHTML = 'Not a Binary!';
  results.style.fontSize = "40px";
  results.style.color = "#d32c45"
  return -1
}

setInterval(()=>{
  if(binary.value == ''){
    results.innerHTML = "0"; 
    results.style.color = "#fffba8";
  }
  const valores = binary.value.split('')
  valores.map(char => {
    if(char !== "0" && char !== "1"){
      return truee()
    }else{
      results.innerHTML = `${convertToDecimal(Number(binary.value))}`;
      results.style.fontSize = "80px";
      results.style.color = "#fffba8"
    }
  })
}, 100)
