export const expresions = {
  user: /^[a-zA-Z0-9\-_]{4,16}$/, // Letras, numeros, guion y guion_bajo
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,16}$/, // De 8 a 16 dig., al menos un número,una mayúscula, minúscula y especial, sin espacios.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};
export const allInputs = {
  user: false,
  name: false,
  email: false,
  password: false,
};

export const validateInput = (expresion, input, element) => {
  if (expresion.test(input.value)) {
    document.querySelector(`#error${element}`).classList.replace('error-display', 'error');
    allInputs[element] = true;
  } else {
    document.querySelector(`#error${element}`).classList.replace('error', 'error-display');
    allInputs[element] = false;
  }
};
