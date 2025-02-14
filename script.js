function appendValue(value) {
  const result = document.getElementById('result');
  if (result.value === "0" && value !== ".") {
    result.value = value;
  } else {
    result.value += value;
  }
}

function clearResult() {
  document.getElementById('result').value = "0";
}

function calculateResult() {
  const result = document.getElementById('result');
  try {
    result.value = eval(result.value.replace(/x/g, "*"));
  } catch (e) {
    result.value = "Error";
  }
  }