function convert(){
    var binary = document.getElementById("binary").value
    var result  = document.getElementById("result")

    var converting = 0

    if(binary.length > 8){
      alert("[ERRO] O máximo de caracteres é 8")

    } else{
      for(var initial = 0; initial < binary.length; initial++){
        converting += + parseInt(binary[initial]) * Math.pow(2, binary.length - 1 - initial)
      }

    }

       result.innerHTML = converting
}




























