const myArray = [
    {question: 'Who was the first president of the United States', answer: 'George Washington'},
    {question: 'What is the capital of the United States', answer: 'Washington DC'},
    {question: 'Where is Mount Rushmore Located', answer: 'South Dakota'}
];
const randomQuestionIdx = myArray[Math.round(Math.random() * myArray.length -1)];
let userAnswer = prompt(randomQuestionIdx.question, '');
window.alert('You answered' + ' ' + userAnswer + '.' + ' ' + 'The correct answer is' + ' ' + randomQuestionIdx.answer + '.');
