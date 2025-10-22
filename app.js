var display = document.getElementById('display').value;

function appendToDisplay(val) {
    document.getElementById('display').value += val;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    
    if (document.getElementById('display').value != "") {
      try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
      }
      catch {
        document.getElementById('display').value = "Error";
      }
    } else {
        document.getElementById('display').value = "Error";
    }
}
