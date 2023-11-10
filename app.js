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

$("#Red_Button, #Blue_Button, #Green_Button, #Yellow_Button, .Level, .Score").hide();

$(document).ready(function () {
    $("button.Start_Button").click(function () {
        $("button#Red_Button, button#Blue_Button, button#Green_Button, button#Yellow_Button, .Level, .Score").toggle();
        $("button.Start_Button, .Start_Button, .Start, .Title").hide();
    });

    $("button.Start_Button").click(function () {
        const randomElement = ChoosingAButton();
        ButtonFlash(randomElement);

        if ($(randomElement).click(function () {
            alert("hello");
        }));
        else {
            alert("bye")
        }
    });
});

