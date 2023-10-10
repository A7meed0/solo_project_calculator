function setupCalculator()
    {
    let currentExpression = '';
  
    function appendNumber(num) {
      currentExpression += num;
      document.getElementById('result').value = currentExpression;
    }
  
    function appendOperator(operator) {
      currentExpression += operator;
      document.getElementById('result').value = currentExpression;
    }
  
    function calculate() {
      try {
        var result = eval(currentExpression);
        document.getElementById('result').value = result;
        currentExpression = result.toString();
      } catch (error) {
        document.getElementById('result').value = 'Error';
        currentExpression = '';
      }
    }
    function deleteLast() {
        currentExpression = currentExpression.slice(0, -1);
        document.getElementById('result').value = currentExpression;
      }
  
    function clearResult() {
      currentExpression = '';
      document.getElementById('result').value = '';
    }
  
    // Attach event listeners to buttons
    const buttons = document.querySelectorAll('.calculator button');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        if (button.innerText === 'AC') {
          clearResult();
        } else if (button.innerText === 'DEL') {
            deleteLast();
        }else if (button.innerText === '=') {
          calculate();
        } else {
          appendNumber(button.innerText);
        }
      });
    });
  }
  
  // Appeler la fonction pour configurer la calculatrice lors du chargement de la page
  document.addEventListener('DOMContentLoaded', () => {
    setupCalculator();
  });
