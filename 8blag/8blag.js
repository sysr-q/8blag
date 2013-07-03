$(function () {
    var canvas = $("#background");


    canvas.drawRect({
        layer: true,
        name: "sky",

        fillStyle: "#1180fd",
        x: 0,
        y: 0,
        width: canvas.width(),
        height: canvas.height(),
        fromCenter: false,
        index: 0
    });

    canvas.drawRect({
        layer: true,
        name: "sand",

        fillStyle: "#ffeeb0",
        x: 0,
        y: canvas.height() - 10,
        width: canvas.width(),
        height: 10,
        fromCenter: false,
    });

    canvas.drawRect({
        layer: true,
        group: "sun",
        name: "sun-base",
        draggable: true,
        dragGroupWithLayer: true,

        fillStyle: "#FFFF00",
        x: 5,
        y: 5,
        width: 20,
        height: 20,
        fromCenter: false
    });
    

    /*
    canvas.drawRect({
        layer: true,
        group: "sun",
        name: "sun-glasses",
        draggable: true,
        dragGroupWithLayer: true,

        fillStyle: "#000000",
        x: 10,
        y: 10,
        width: 5,
        height: 4,
        fromCenter: true,
    });
    */
});