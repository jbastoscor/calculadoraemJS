function appendValue(value) {
  const result = document.getElementById('result');
  if (result.value === '0' && value !== '.') {
    result.value = value;
  } else {
    result.value += value;
  }
}

function clearResult() {
  document.getElementById('result').value = '0';
}

function calculateResult() {
  const result = document.getElementById('result');
  try {
    result.value = eval(result.value);
  } catch (e) {
    result.value = 'Error';
  }
}

function handleInput() {
  const input = document.getElementById('result');
  input.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^0-9+\-*/]/g, '');
  });
}
handleInput();

function handleEnter() {
  window.addEventListener('keydown', (e) => {
    console.log(e);
    if (e.key === 'Enter') {
      calculateResult();
    }
  });
}

handleEnter();
