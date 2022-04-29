class Question {
    /**
     *
     * @param {string} text El texto de la pregunta
     * @param {string[]} choices una lista de opciones para la pregunta
     * @param {string} answer la respuesta de la pregunta
     */
    constructor(text, choices, answer) {
      this.text = text;
      this.choices = choices;
      this.answer = answer;
    }
  
    /**
     *
     * @param {string} choice la elección seleccionada
     * @returns {boolean} devuelve si la elección es correcta
     */
    correctAnswer(choice) {
      return choice === this.answer;
    }
  }
  
  export { Question };
