$(document).ready(function () {
    let level = 1;
    let sequence = [];
    let userClicks = [];
    let inProgress = false;
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

    function addNextButtonToSequence() {
        const randomElement = ChoosingAButton();
        ButtonFlash(randomElement);
        sequence.push(randomElement);
    }
    //-------------------------------------------------------------

    //-------------------------------------------------------------

    $("button.Start_Button").click(function () {
        $("button#Red_Button, button#Blue_Button, button#Green_Button, button#Yellow_Button, .Level, .Score").toggle();
        $("button.Start_Button, .Start_Button, .Start, .Title").hide();

        const randomElement = ChoosingAButton();
        ButtonFlash(randomElement);

        randomElement.click(function () {
            increaseScore();
            addNextButtonToSequence();
        });

    });
});

