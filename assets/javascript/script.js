const quizQuestions = [
    {
        question: "What year did Jurrasic Park come out?",
        options: ["1998", "1995", "1993"],
        answer: "1993",
    },
    {
        question: "Which actor has won the most Academy Awards in acting categories?",
        options: ["Julie Andrews", "Katharine Hepburn", "Meryl Streep"],
        answer: "Katharine Hepburn",
    },
    {
        question: "What is the highest grossing movie of all time?",
        options: ["Titanic", "Avatar", "Avengers: Endgame"],
        answer: "Avatar",
    },
    {
        question: "Which female director became the first to win an academy award for directing?",
        options: ["Greta Gertwig", "Chloe Zhao", "Katheryn Bigalow"],
        answer: "Katheryn Bigalow", 
    },
    {
        question: "Which line does Clint Eastwood famously deliver in the 1971 film, 'Dirty Harry'?",
        options: ["`'Do I feel lucky?' Well do ya, punk?`", "`Dying ain't much of a living, boy.`", "`Go where you're lookin', and look where you're goin'.`"],
        answer: "`'Do I feel lucky?' Well do ya, punk?`",
    },
    {
        question: "Which of the below actors have NOT played Batman in live action?",
        options: ["Christian Bale", "Jack Nicholson", "Ben Affleck"],
        answer: "Jack Nicholson",
    },
    {
        question: "Which of the below was legendary British film director Danny Boyle's first theatrical movie?",
        options: ["The Beach", "Shallow Grave", "Trainspotting"],
        answer: "Shallow Grave",
    },
    {
        question: "What was the name of the 1981 movie that stared iconic footballer Pele alongside Sylvester Stalone and Michael Caine?",
        options: ["Escape to Victory", "Blame it on Rio", "Nighthawks"],
        answer: "Escape to Victory",
    },
    {
        question: "What is the name of the device that powers Tony Stark's Iron Man suit?",
        options: ["Arc Reactor", "Reactor Disk", "Cosmic Battery"],
        answer: "Arc Reactor",
    },
    {
        question: "What is the name of the hotel from Stanley Kubrik's The Shining?",
        options: ["The Stanley Hotel", "The Overlook Hotel", "Hotel California"],
        answer: "The Overlook Hotel",
    },
    {
        question: "The NWA biopic 'Straight Outta Compton' hit theatres in what year?",
        options: ["2015", "2018", "2011"],
        answer: "2015",
    },
    {
        question: "What is the name of Ice Cube's iconic series of comedy films?",
        options: ["Oneday", "Monday", "Friday"],
        answer: "Friday",
    },
    {
        question: "How many movies have topped $2billion at the global box office ever?",
        options: ["One", "Three", "Five"],
        answer: "Five",
    },
    {
        question: "Why do they keep making Transformers movies?",
        options: ["Money", "Lack of new ideas", "Both"],
        answer: "Both",
    },
    {
        question: "Who wrote and directed the 1997 romcom, 'Chasing Amy'?",
        options: ["Kevin Smith", "Ben Affleck", "Jason Lee"],
        answer: "Kevin Smith",
    },
];
const quiz = document.getElementById("quiz");
const option1 = document.getElementById("a");
const option2 = document.getElementById("b");
const option3 = document.getElementById("c");
const userAnswer = document.getElementsByName("answer").value;
const seenQuestions = [];
const currentQuestionIndex = Math.floor(Math.random() * quizQuestions.length);
seenQuestions.push (currentQuestionIndex)

/**
 * To populate the question and answer
 * areas with the corresponding html
 */

function populateQuestion () {

        quiz.innerHTML = quizQuestions[currentQuestionIndex].question;
        option1.innerHTML = quizQuestions[currentQuestionIndex].options[0];
        option2.innerHTML = quizQuestions[currentQuestionIndex].options[1];
        option3.innerHTML = quizQuestions[currentQuestionIndex].options[2];

}

/**
 * To cycle through the questions 
 * and call function to check answer
 */
function runQuiz() {

    let options = document.getElementsByTagName("button");

    for (let i = 0; i <= options.length-1 ; i++) {
        options[i].addEventListener("click", function() {
            if(this.getAttribute("id") === "a") {
                getAnswer();
            } else if(this.getAttribute("id") === "b") {
                getAnswer();
            } else if(this.getAttribute("id") === "c") {
                getAnswer();
            }
        })
    }

    // const userAnswer = document.addEventListener("click", function (){
    //     if(this.getAttribute("data-type") === "submit") {
    //         getAnswer();
    //     }
    // })

}

/**
 * To retrive user answer and 
 * check answer against object array
 */
function getAnswer() {

    if (currentQuestionIndex === 0) {
        correctAnswer = document.getElementById("c").textContent;
        checkAnswer();
    } else if (currentQuestionIndex === 1) {
        correctAnswer = document.getElementById("b").textContent;
        checkAnswer();
    } else if (currentQuestionIndex === 2) {
        correctAnswer = document.getElementById("b").textContent;
        checkAnswer();
    } else if (currentQuestionIndex === 3) {
        correctAnswer = document.getElementById("c").textContent;
        checkAnswer();
    } else if (currentQuestionIndex === 4) {
        correctAnswer = document.getElementById("a").textContent;
        checkAnswer();
    } else if (currentQuestionIndex === 5) {
        correctAnswer = document.getElementById("b").textContent;
        checkAnswer();
    } else if (currentQuestionIndex === 6) {
        correctAnswer = document.getElementById("b").textContent;
        checkAnswer();
    } else if (currentQuestionIndex === 7) {
        correctAnswer = document.getElementById("a").textContent;
        checkAnswer();
    } else if (currentQuestionIndex === 8) {
        correctAnswer = document.getElementById("a").textContent;
        checkAnswer();
    } else if (currentQuestionIndex === 9) {
        correctAnswer = document.getElementById("b").textContent;
        checkAnswer();
    } else if (currentQuestionIndex === 10) {
        correctAnswer = document.getElementById("a").textContent;
        checkAnswer();
    } else if (currentQuestionIndex === 11) {
        correctAnswer = document.getElementById("c").textContent;
        checkAnswer();
    } else if (currentQuestionIndex === 12) {
        correctAnswer = document.getElementById("c").textContent;
        checkAnswer();
    } else if (currentQuestionIndex === 13) {
        correctAnswer = document.getElementById("c").textContent;
        checkAnswer();
    } else if (currentQuestionIndex === 14) {
        correctAnswer = document.getElementById("a").textContent;
        checkAnswer();
    } 

}



function checkAnswer() {

    if (correctAnswer === quizQuestions[currentQuestionIndex].answer) {
        document.getElementsByTagName("button").innerHTML = "", populateQuestion();
    } 
}

/**
 * To keep track of and increment user score on DOM
 */
function keepScore() {
    let score = document.getElementById("score").textContent;
    document.getElementById("score").textContent = ++score;

}

document.addEventListener("DOMContentLoaded", populateQuestion(), runQuiz())