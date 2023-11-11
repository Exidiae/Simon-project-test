$(document).ready(function () {
    let level = 1;
    let sequence = [];
    let Score = 0

    $("#Red_Button, #Blue_Button, #Green_Button, #Yellow_Button, .Level, .Score").hide();

    function ChoosingAButton() {
        const elements = $("#Red_Button, #Blue_Button, #Green_Button, #Yellow_Button");
        const randomIndex = Math.floor(Math.random() * elements.length);
        const randomElement = elements.eq(randomIndex);
        return randomElement;
    }

    function ButtonFlash(element) {
        element.animate({ opacity: 0.4 }, 350);
        element.animate({ opacity: 1 }, 250);
    }

    function startNewLevel() {
        const randomElement = ChoosingAButton();
        sequence.push(randomElement);
        ButtonFlash(randomElement);
        $(".Level").text("Level " + level);
        userClicks = [];
        inProgress = true;
    }

    function increaseScore() {
        Score++;
        $("#scoreValue").text(Score);
        console.log(Score);
    }

    function increaseLevel() {
        level++
        $("#LevelValue").text(level)
    }
    function addNextButtonToSequence() {
        const randomElement = ChoosingAButton();
        ButtonFlash(randomElement);
        sequence.push(randomElement);
    }

    function resetGame() {
        sequence = [];
        Score = 0;
        level = 1;
        $("button#Red_Button, button#Blue_Button, button#Green_Button, button#Yellow_Button, .Level, .Score").hide();
        $("button.Start_Button, .Start_Button, .Start, .Title").show();
    }

    function failure(name, volume) {
        const audio = new Audio("sounds/wrong.mp3");
        audio.volume = 0.3
        audio.play();
    }

    const soundFiles = {
        "Red_Button": "red.mp3",
        "Blue_Button": "blue.mp3",
        "Green_Button": "green.mp3",
        "Yellow_Button": "yellow.mp3",
    };

    function playSound(name, volume) {
        const audio = new Audio("sounds/" + name);
        audio.volume = 0.4;
        audio.play();
    }


    $("button.Start_Button").click(function () {
        $("button#Red_Button, button#Blue_Button, button#Green_Button, button#Yellow_Button, .Level, .Score").toggle();
        $("button.Start_Button, .Start_Button, .Start, .Title").hide();

        addNextButtonToSequence();

        let currentStep = 0;

        $(".Button").off("click").on("click", function () {
            const element = $(this);

            if (element.is(sequence[currentStep])) {
                currentStep++;

                if (currentStep === sequence.length) {
                    increaseScore();
                    addNextButtonToSequence();
                    increaseLevel()
                    playSound()
                    currentStep = 0;
                }
            } else {
                resetGame();
                failure();
                alert("you lose!")
            }
        });
    });


    function playSound(name, volume) {
        const audio = new Audio("sounds/blue.mp3");
        audio.volume = 0.4
        audio.play();
    }

    $("#playSoundButton").click(function () {
        playSound("soundfile");
    });
});

