// function change() {
//     document.querySelector('.question-heading').innerHTML = "You clicked";
//     console.log('hello')
// }

const quizData = [
    {
        question: "What was Jennifer Aniston's character's name in the famous sitcom F.R.I.E.N.D.S ?",
        a: "Monica",
        b: "Phoebe",
        c: "Jill",
        d: "Rachel",
        correct: "d"
    },
    {
        question: "What was Phoebe's brother's name ?",
        a: "Eric",
        b: "Mike",
        c: "Bob",
        d: "Frank Jr.",
        correct: "d"
    },
    {
        question: "Ross's _____ marriage was with Rachel in the famous sitcom F.R.I.E.N.D.S ?",
        a: "Second",
        b: "Third",
        c: "First",
        d: "Ross did not marry Rachel",
        correct: "b"
    },
    {
        question: "Who got married in Vegas ?",
        a: "Rachel and Ross",
        b: "Phoebe and Joey",
        c: "Monica and Chandler",
        d: "Rachel and Joey",
        correct: "a"
    },
    {
        question: "Who gave name Ross and Rachel's daughter Emma ?",
        a: "Phoebe",
        b: "Chandler",
        c: "Joey",
        d: "Monica",
        correct: "d"
    },
    {
        question: "What gift Joey gave at the end to Monica and Chandler?",
        a: "Baking Oven",
        b: "Duck Jr. and Chick Jr.",
        c: "A Pet Dog",
        d: "Foosball table",
        correct: "b"
    }
]

let currentQues = 0;
let score = 0;
const answerEls = document.querySelectorAll(".answer");
const quiz = document.querySelector(".quiz-container");
const retry = document.getElementById("retry");
const retry_text = document.getElementById("retry-text");
const ques_text = document.getElementById("ques_text");
const quiz_options = document.getElementById("quiz-options");
let submitBtn = document.getElementById("submit");

// Making quiz part visible (because everything is invisible by default)
ques_text.classList.toggle("vis");
quiz_options.classList.toggle("vis");
submitBtn.classList.toggle("vis");

loadQuiz();

// Submit button action
submitBtn.addEventListener("click", () => {
    getSelected();

    currentQues++;

    if (currentQues < quizData.length) {
        loadQuiz();
    }
    else {
        // Making quiz invisible
        ques_text.classList.toggle("vis");
        quiz_options.classList.toggle("vis");
        submitBtn.classList.toggle("vis");

        // Score view and retry option display
        retry_text.classList.toggle("vis");
        retry.classList.toggle("vis");
        retry_text.innerText = `Your score is ${score}/${quizData.length}`


        retry.addEventListener("click", () => {
            score = 0;
            currentQues = 0;
            ques_text.classList.toggle("vis");
            quiz_options.classList.toggle("vis");
            submitBtn.classList.toggle("vis");

            // Making retry part invisible
            retry_text.classList.toggle("vis");
            retry.classList.toggle("vis");

            loadQuiz();
        })
    }
});

// Question change and Quiz loading
function loadQuiz() {
    deselectAns();
    const q_text = document.getElementById("ques_text");
    q_text.innerText = quizData[currentQues].question;

    const a_option = document.getElementById("a_option");
    const b_option = document.getElementById("b_option");
    const c_option = document.getElementById("c_option");
    const d_option = document.getElementById("d_option");
    a_option.innerText = quizData[currentQues].a;
    b_option.innerText = quizData[currentQues].b;
    c_option.innerText = quizData[currentQues].c;
    d_option.innerText = quizData[currentQues].d;
};

// Function to check the answer
function getSelected() {

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            if (answerEl.id == quizData[currentQues].correct) {
                score++;
                // console.log(score); // Just wanted to see the score on console.
            }
        }
    });
}

// Function for unchecking the previous question radio button
function deselectAns() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}