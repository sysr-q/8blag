$(function () {
    var canvas = $("#8blag");
    window.eightblag = window.eightblag || {};
    window.eightblag.tree = 0;
    window.eightblag.trees = 20;

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
    function drawTree(c, plusX) {
        var colors = ["rgb(0,88,0)", "rgb(0,120,0)", "rgb(0,104,0)",
                      "rgb(0,168,0)", "rgb(0,168,68)"];

        var num = window.eightblag.tree++,
            nam = "tree" + num,
            ranY = Math.floor(Math.random() * 8);
            color = colors[Math.floor(Math.random() * colors.length)];

        c.drawRect({
            layer: true,
            group: nam,
            name: nam + "-trunk",

            fillStyle: "rgb(80,48,0)",
            x: plusX,
            y: 27 + ranY,
            width: 4,
            height: 30,
            fromCenter: true
        });

        c.drawRect({
            layer: true,
            group: nam,
            name: nam + "-b1",

            fillStyle: color,
            x: plusX,
            y: 33 + ranY,
            width: 20,
            height: 4,
            fromCenter: true
        });

        c.drawRect({
            layer: true,
            group: nam,
            name: nam + "-b2",

            fillStyle: color,
            x: plusX,
            y: 28 + ranY,
            width: 16,
            height: 4,
            fromCenter: true
        });

        c.drawRect({
            layer: true,
            group: nam,
            name: nam + "-b3",

            fillStyle: color,
            x: plusX,
            y: 23 + ranY,
            width: 12,
            height: 4,
            fromCenter: true
        });

        c.drawRect({
            layer: true,
            group: nam,
            name: nam + "-b4",

            fillStyle: color,
            x: plusX,
            y: 18 + ranY,
            width: 8,
            height: 4,
            fromCenter: true
        });

        c.drawRect({
            layer: true,
            group: nam,
            name: nam + "-b5",

            fillStyle: color,
            x: plusX,
            y: 13 + ranY,
            width: 4,
            height: 4,
            fromCenter: true
        });
    }

    /* Let's spice up life - randomly move Mr Sun and drop some trees */
    for (var i = 0; i < window.eightblag.trees; i++) {
        drawTree(canvas, Math.floor(Math.random() * (640)));
    }
    canvas.animateLayerGroup("sun", {
        x: "+=" + Math.floor(Math.random() * 640)
    }, 0);

    /*
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