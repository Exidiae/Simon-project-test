$(document).ready(function () {
    let score = 0;
    let level = 1;
    let sequence = [];
    let userClicks = 0;

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

    //----------------------------------------------------------------------------------------
    function playGame() {
        let sequenceIndex = 0;

        function flashNext() {
            if (sequenceIndex < sequence.length) {
                ButtonFlash(sequence[sequenceIndex]);
                sequenceIndex++;
                setTimeout(flashNext, 1000);
            } else {
                userClicks = 0;
                $(".Button").off('click').on('click', function () {
                    const clickedButton = $(this);
                    ButtonFlash(clickedButton);
                    if (clickedButton[0] === sequence[userClicks][0]) {
                        userClicks++;
                        if (userClicks === sequence.length) {
                            score++;
                            $(".Score").text("Score: " + score);
                            level++;
                            $(".Level").text("Level: " + level);
                            setTimeout(playNextLevel, 1000);
                        }
                    } else {
                        alert("Game over! Score: " + score);
                        score = 0;
                        level = 0;
                        sequence = [];
                        $(".Score").text("Score: " + score);
                        $(".Level").text("Level: " + level);
                        setTimeout(playNextLevel, 1000);
                    }
                });
            }
        }

        function playNextLevel() {
            sequence = [];
            for (let i = 0; i < level; i++) {
                sequence.push(ChoosingAButton());
            }
            flashNext();
        }

        playNextLevel();
    }

    $("#Red_Button, #Blue_Button, #Green_Button, #Yellow_Button, .Level, .Score").hide();

    $("button.Start_Button").click(function () {
        $("button#Red_Button, button#Blue_Button, button#Green_Button, button#Yellow_Button, .Level, .Score").toggle();
        $("button.Start_Button, .Start_Button, .Start, .Title").hide();
        playGame();
    });
});
