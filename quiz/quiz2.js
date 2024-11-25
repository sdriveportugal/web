let currentBatchIndex = 0;
const batchSize = 30;
let quizData = [];

// Fetch the JSON file from GitHub (replace with your actual raw URL)
fetch('https://raw.githubusercontent.com/sdriveportugal/web/refs/heads/main/quiz/quizjson.json')
  .then(response => response.json())
  .then(data => {
    quizData = data;  // Store the quiz data in a global variable
    showNextBatch();  // Display the first batch of questions
  })
  .catch(error => {
    console.error('Error fetching the quiz data:', error);
  });

// Function to display the next batch of 30 questions
function showNextBatch() {
  const batch = quizData.slice(currentBatchIndex, currentBatchIndex + batchSize);
  displayQuestions(batch);  // Display the current batch of questions
  currentBatchIndex += batchSize;  // Increment the batch index
}

// Function to render the questions on the page
function displayQuestions(questions) {
  const questionContainer = document.getElementById('question-container');
  questionContainer.innerHTML = '';  // Clear previous questions

  questions.forEach((question, index) => {
    const questionElement = document.createElement('div');
    questionElement.innerHTML = `
      <h3>${question.id}. ${question.question}</h3>
      <img src="${question.image}" alt="Question Image" />
      <ul>
        <li>A: ${question.options.A}</li>
        <li>B: ${question.options.B}</li>
        <li>C: ${question.options.C}</li>
        
      </ul>
    `;
    questionContainer.appendChild(questionElement);
  });
}

// Add event listener to "Next" button to fetch the next batch of questions
document.getElementById('next-button').addEventListener('click', () => {
  if (currentBatchIndex < quizData.length) {
    showNextBatch();
  } else {
    alert('No more questions!');
  }
});
