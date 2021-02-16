'use strict'

/**
 * Function for create face
 * @param ctx {}
 * @param x {Number}
 * @param y {Number}
 * @param radius {Number}
 * @param startAngle {Number}
 * @param endAngle {Number}
 */
function face_create(ctx, x, y, radius, startAngle, endAngle){
    ctx.beginPath()
    ctx.arc(x, y, radius, startAngle, endAngle)
    ctx.fillStyle = '#B0C4DE'
    ctx.fill()
    ctx.stroke()
}

function create_ellipse(ctx, x, y, radiusX, radiusY, rotation, startAngle, endAngle){
    ctx.beginPath()
    ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle)
    ctx.stroke()
}

function drawCylinder(ctx, x, y, w, h) {
    let i, xPos, yPos, pi = Math.PI, twoPi = 2 * pi;

    ctx.beginPath();

    for (i = 0; i < twoPi; i += 0.001) {
        xPos = (x + w / 2) - (w / 2 * Math.cos(i));
        yPos = (y + h / 8) + (h / 8 * Math.sin(i));

        if (i === 0) {
            ctx.moveTo(xPos, yPos);
        } else {
            ctx.lineTo(xPos, yPos);
        }
    }
    ctx.moveTo(x, y + h / 8);
    ctx.lineTo(x, y + h - h / 8);

    for (i = 0; i < pi; i += 0.001) {
        xPos = (x + w / 2) - (w / 2 * Math.cos(i));
        yPos = (y + h - h / 8) + (h / 8 * Math.sin(i));

        if (i === 0) {
            ctx.moveTo(xPos, yPos);
        } else {
            ctx.lineTo(xPos, yPos);
        }
    }
    ctx.moveTo(x + w, y + h / 8);
    ctx.lineTo(x + w, y + h - h / 8);
    ctx.stroke();
}