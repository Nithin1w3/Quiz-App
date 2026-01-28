let questions = [
    {
        q: "What is the capital of France ?",
        options: [
            "a) paris", 
            "b) london", 
            "c) berlin", 
            "d) madrid"

        ],

        correct: "paris"
    },
    {
        q: "Which language is used for web pages?",
        options: ["a) Python", "b) HTML", "c) C++", "d) Java"],
        correct: "HTML"
    },
    {
        q: "What does CSS stand for?",
        options: [
            "a) Computer Style Sheet",
            "b) Creative Style System",
            "c) Cascading Style Sheets",
            "d) Colorful Style Sheets"
        ],
        correct: "Cascading Style Sheets"
    },
    {
        q: "Which tag is used for JavaScript?",
        options: ["a) <js>", "b) <javascript>", "c) <script>", "d) <code>"],
        correct: "<script>"
    },
    {
        q: "What is the correct file extension for JavaScript?",
        options: ["a) .java", "b) .js", "c) .javascript", "d) .jsx"],
        correct: ".js"
    },
    {
        q: "Which company developed Java?",
        options: ["a) Google", "b) Microsoft", "c) Sun Microsystems", "d) Oracle"],
        correct: "Sun Microsystems"
    },
    {
        q: "Which symbol is used for comments in JavaScript?",
        options: ["a) <!-- -->", "b) #", "c) //", "d) **"],
        correct: "//"
    },
    {
        q: "What keyword is used to declare a variable in JavaScript?",
        options: ["a) int", "b) var", "c) string", "d)  define"],
        correct: "var"
    },
    {
        q: "Which method is used to print in console?",
        options: ["a) print()", "b) console.log()", "c) log()", "d) write()"],
        correct: "console.log()"
    },
    {
        q: "Which HTML tag is used to create a button?",
        options: ["a) <input>", "b) <btn>", "c) <button>", "d) <click>"],
        correct: "<button>"
    }
];

let current = 0;
let score = 0;
let time = 10;
let timerRef;

let startBtn = document.getElementById("start");
let quizArea = document.getElementById("quizArea");
let questionText = document.getElementById("question");
let answersDiv = document.getElementById("answers");
let timeText = document.getElementById("time");

startBtn.onclick = function () {
    startBtn.style.display = "none";
    quizArea.style.display = "block";
    loadQuestion();
};

function loadQuestion() {
    clearInterval(timerRef);
    time = 10;
    timeText.innerText = time;

    questionText.innerText = questions[current].q;
    answersDiv.innerHTML = "";

    questions[current].options.forEach(function (opt) {
        let btn = document.createElement("button");
        btn.innerText = opt;

        btn.onclick = function () {
            if (opt === questions[current].correct) {
                score++;
            }
            nextQuestion();
        };

        answersDiv.appendChild(btn);
    });

    timerRef = setInterval(function () {
        time--;
        timeText.innerText = time;

        if (time === 0) {
            nextQuestion();
        }
    }, 1000);
}

function nextQuestion() {
    clearInterval(timerRef);
    current++;

    if (current < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizArea.style.display = "none";
    document.getElementById("result").style.display = "block";

    document.getElementById("finalScore").innerText =
        "Score: " + score + " / " + questions.length;

    document.getElementById("analysis").innerText =
        "Correct: " + score + " | Wrong: " + (questions.length - score);
}
