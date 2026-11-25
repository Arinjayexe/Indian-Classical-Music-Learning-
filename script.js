
console.log("SurSadhana JavaScript Connected!");

const musicQuizBtn = document.getElementById("musicQuizBtn");

if (musicQuizBtn) {

    musicQuizBtn.addEventListener("click", function() {

        const answers = {
            m1: "b",
            m2: "c",
            m3: "a"
        };

        let score = 0;
        let unanswered = 0;

        for (let question in answers) {

            const selected = document.querySelector(
                'input[name="' + question + '"]:checked'
            );

            if (!selected) {
                unanswered++;
            } else if (selected.value === answers[question]) {
                score++;
            }
        }

        const result = document.getElementById("musicQuizResult");

        result.style.display = "block";

        if (unanswered > 0) {
            result.innerHTML =
                "Please answer all 3 questions before checking your score.";
            return;
        }

        if (score === 3) {
            result.innerHTML =
                "Excellent! You scored 3/3. You are a music expert!";
        } else if (score === 2) {
            result.innerHTML =
                "Great job! You scored 2/3. Keep learning!";
        } else if (score === 1) {
            result.innerHTML =
                "Good attempt! You scored 1/3. Try learning a little more!";
        } else {
            result.innerHTML =
                "You scored 0/3. Don't worry, explore the website and try again!";
        }

    });

}
