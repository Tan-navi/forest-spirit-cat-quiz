const questions = [

    {
        question: "How would you spend a free afternoon?",
        answers: [
            { text: "Reading a book", cat: "Maple" },
            { text: "Exploring a hidden trail", cat: "Ember" },
            { text: "Helping friends with a project", cat: "Misty" },
            { text: "Watching clouds in a meadow", cat: "Clover" }
        ]
    },

    {
        question: "Which place feels most comforting to you?",
        answers: [
            { text: "A cozy library", cat: "Maple" },
            { text: "A flower garden", cat: "Misty" },
            { text: "A quiet lakeside meadow", cat: "Clover" },
            { text: "A mountain path", cat: "Ember" }
        ]
    },

    {
        question: "What would your friends most likely say about you?",
        answers: [
            { text: "Thoughtful", cat: "Maple" },
            { text: "Caring", cat: "Misty" },
            { text: "Calm", cat: "Clover" },
            { text: "Courageous", cat: "Ember" }
        ]
    },

    {
        question: "You discover a mysterious forest path. What do you do?",
        answers: [
            { text: "Research where it leads first", cat: "Maple" },
            { text: "Invite others to join you", cat: "Misty" },
            { text: "Sit nearby and enjoy the scenery", cat: "Clover" },
            { text: "Start exploring immediately", cat: "Ember" }
        ]
    },

    {
        question: "Which activity sounds the most fun?",
        answers: [
            { text: "Solving a puzzle", cat: "Maple" },
            { text: "Volunteering for a good cause", cat: "Misty" },
            { text: "Painting nature scenes", cat: "Clover" },
            { text: "Going on an adventure", cat: "Ember" }
        ]
    },

    {
        question: "What is your ideal morning?",
        answers: [
            { text: "Reading with a warm drink", cat: "Maple" },
            { text: "Making breakfast for loved ones", cat: "Misty" },
            { text: "Listening to birds and relaxing", cat: "Clover" },
            { text: "Hiking somewhere new", cat: "Ember" }
        ]
    },

    {
        question: "If you found a magical forest treasure, what would you do?",
        answers: [
            { text: "Study its history and secrets", cat: "Maple" },
            { text: "Share it with everyone", cat: "Misty" },
            { text: "Keep it somewhere beautiful", cat: "Clover" },
            { text: "Use it to begin a new quest", cat: "Ember" }
        ]
    }

];

let currentQuestion = 0;

let selectedCat = null;

const scores = {

    Maple: 0,
    Misty: 0,
    Clover: 0,
    Ember: 0
};

const questionElement = document.getElementById("question");
const questionNumber = document.getElementById("question-number");
const optionsContainer = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const prevButton = document.getElementById("prev-btn");
prevButton.addEventListener("click", () => {

    if(currentQuestion > 0){

        currentQuestion--;

        loadQuestion();
    }
});
function loadQuestion() {

    const q = questions[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    questionElement.textContent = q.question;

    optionsContainer.innerHTML = "";

    selectedCat = null;

    q.answers.forEach(answer => {

        const button = document.createElement("button");

        button.classList.add("option-btn");

        button.textContent = answer.text;

        button.addEventListener("click", () => {

            document.querySelectorAll(".option-btn")
                .forEach(btn => {

    btn.style.background = "#c8dd8f";

    btn.style.color = "black";
});

            button.style.background = "#6f9f43";
            button.style.color = "white";
            document.getElementById("click-sound").currentTime = 0;
            document.getElementById("click-sound").play();
            selectedCat = answer.cat;
        });

        optionsContainer.appendChild(button);
    });
}

nextButton.addEventListener("click", () => {

    if (!selectedCat) {

        alert("Please choose an answer first!");

        return;
    }

    scores[selectedCat]++;

    currentQuestion++;

    if (currentQuestion < questions.length) {

        loadQuestion();

    } else {

  const winner = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
);

localStorage.setItem("winnerCat", winner);

window.location.href = "/result";       
    }
});

loadQuestion();



    