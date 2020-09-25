const quizData = [
    {
        question: "Siapa nama penulis cerita anime One Piece?",
        a: "Andrea Hirata",
        b: "Ishizaki",
        c: "JK Rowling",
        d: "Eiichiro Oda",
        correct: "d",
    },
    {
        question: "Kapan episode pertama One Piece tayang?",
        a: "17 Agustus 1945",
        b: "20 Oktober 1999",
        c: "31 November 2004",
        d: "14 Januari 2001",
        correct: "b",
    },
    {
        question: "Apa nama kapal Strawhat Pirates yang pertama?",
        a: "Going Merry",
        b: "Titanic",
        c: "Kapal Drone",
        d: "Van Der Wijk",
        correct: "a",
    },
    {
        question: "Berasal dari negara mana anime One Piece?",
        a: "Kamboja",
        b: "Jepang",
        c: "Suriname",
        d: "Azerbaijan",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerQuiz = document.querySelectorAll(".answer");
const questionQuiz = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let kataQuiz = 0;
let count = 0;

inputQuiz();

function inputQuiz() {
    selectAnswers();

    const katakuis = quizData[kataQuiz];

    questionQuiz.innerText = katakuis.question;
    a_text.innerText = katakuis.a;
    b_text.innerText = katakuis.b;
    c_text.innerText = katakuis.c;
    d_text.innerText = katakuis.d;
}

function getAnswer() {
    let answer = undefined;

    answerQuiz.forEach((answerTo) => {
        if (answerTo.checked) {
            answer = answerTo.id;
        }
    });

    return answer;
}

function selectAnswers() {
    answerQuiz.forEach((answerTo) => {
        answerTo.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    
    const answer = getAnswer();

    if (answer) {
        if (answer === quizData[kataQuiz].correct) {
            count++;
        }

        kataQuiz++;
        if (kataQuiz < quizData.length) {
            inputQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Wow! Kamu berhasil menjawab ${count}/${quizData.length} pertanyaan.</h2>
                
                <button onclick="location.reload()">Memuat Ulang</button>
            `;
        }
    }
});
