$(function () {
    var canvas = $("#8blag");


    canvas.drawRect({
        layer: true,
        name: "sky",

        fillStyle: "rgb(0,120,248)", // "rgb(184,248,24)",
        x: 0,
        y: 0,
        width: canvas.width(),
        height: canvas.height(),
        fromCenter: false
    });

    canvas.drawRect({
        layer: true,
        name: "grass",

        fillStyle: "rgb(0,168,68)",
        x: 0,
        y: canvas.height() - 8,
        width: canvas.width(),
        height: 8,
        fromCenter: false
    });

    /* the sun is huuuuuuuuuge */
    canvas.drawRect({
        layer: true,
        group: "sun",
        name: "sun-base",
        draggable: true,
        dragGroupWithLayer: true,

        fillStyle: "rgb(192, 249, 49)",
        x: 5,
        y: 5,
        width: 20,
        height: 20,
        fromCenter: false
    });
    
    canvas.drawRect({
        layer: true,
        group: "sun",
        name: "sun-glasses-left",
        draggable: true,
        dragGroupWithLayer: true,

        fillStyle: "#000000",
        x: 10,
        y: 11,
        width: 6,
        height: 4,
        fromCenter: true
    });

    canvas.drawRect({
        layer: true,
        group: "sun",
        name: "sun-glasses-right",
        draggable: true,
        dragGroupWithLayer: true,

        fillStyle: "#000000",
        x: 20,
        y: 11,
        width: 6,
        height: 4,
        fromCenter: true
    });

    canvas.drawRect({
        layer: true,
        group: "sun",
        name: "sun-glasses-link",
        draggable: true,
        dragGroupWithLayer: true,

        fillStyle: "#000000",
        x: 15,
        y: 10,
        width: 4,
        height: 2,
        fromCenter: true
    });

    canvas.drawRect({
        layer: true,
        group: "sun",
        name: "sun-glasses-link-uleft",
        draggable: true,
        dragGroupWithLayer: true,

        fillStyle: "#000000",
        x: 6,
        y: 9,
        width: 4,
        height: 2,
        fromCenter: true,
        rotate: 30
    });

    canvas.drawRect({
        layer: true,
        group: "sun",
        name: "sun-glasses-link-uright",
        draggable: true,
        dragGroupWithLayer: true,

        fillStyle: "#000000",
        x: 24,
        y: 9,
        width: 4,
        height: 2,
        fromCenter: true,
        rotate: 330
    });

    canvas.drawRect({
        layer: true,
        group: "sun",
        name: "sun-mouth",
        draggable: true,
        dragGroupWithLayer: true,

        fillStyle: "#000000",
        x: 15,
        y: 21,
        width: 10,
        height: 4,
        fromCenter: true
    });

    canvas.drawRect({
        layer: true,
        group: "sun",
        name: "sun-mouth-uleft",
        draggable: true,
        dragGroupWithLayer: true,

        fillStyle: "#000000",
        x: 9,
        y: 18,
        width: 4,
        height: 4,
        fromCenter: true
    });

    canvas.drawRect({
        layer: true,
        group: "sun",
        name: "sun-mouth-uright",
        draggable: true,
        dragGroupWithLayer: true,

        fillStyle: "#000000",
        x: 21,
        y: 18,
        width: 4,
        height: 4,
        fromCenter: true
    });

    /* a single tree. hrmph */

    /* // slowly move Mr Sun to the right side
    canvas.animateLayerGroup("sun", {
        x: "+=" + (canvas.width() - 40)
    }, 2000);
    // move Mr Sun up and down across the canvas
    for (var i = 0; i < 10; i++) {
        canvas.animateLayerGroup("sun", {
            x: "+=15",
            y: "+=2"
        }, 2000);
        canvas.animateLayerGroup("sun", {
            x: "+=15",
            y: "-=2"
        }, 2000);
    }
    */
});