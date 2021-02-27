'use strict'

function getCurrentDate(){
    const dateNow = new Date()
    document.getElementById('date').innerHTML = castCurrentDate(dateNow) + ' ' + castCurrentTime(dateNow)
}
setInterval(getCurrentDate, 1000)


function drawImage1(){
    let canvas = document.getElementById('canvas-image-1')
    let ctx = canvas.getContext('2d')
    //create face
    face_create(ctx, 225, 200, 80, 0, (2 * Math.PI))
    //create mouth
    create_ellipse(ctx, 210, 245, 10, 35, Math.PI / 1.8, 0, 2 * Math.PI)

    //create eyes
    create_ellipse(ctx, 180, 180, 10, 13, Math.PI / 1.8, 0, (2 * Math.PI))
    create_ellipse(ctx, 177, 180, 10, 6, Math.PI / 1.8, 0, 2 * Math.PI)
    ctx.fillStyle = 'black'
    ctx.fill()

    create_ellipse(ctx, 245, 180, 10, 13, Math.PI / 1.8, 0, 2 * Math.PI)
    create_ellipse(ctx, 243, 180, 10, 6, Math.PI / 1.8, 0, 2 * Math.PI)
    ctx.fillStyle = 'black'
    ctx.fill()

    //create nose
    ctx.beginPath()
    ctx.moveTo(215, 180)
    ctx.lineTo(202, 208)
    ctx.lineTo(212, 208)
    ctx.stroke()

    //create hats
    create_ellipse(ctx, 225, 125, 20, 90, Math.PI / 2, 0, 2 * Math.PI)
    ctx.fillStyle = '#483D8B'
    ctx.fill()
    drawCylinder(ctx, 185, 30, 70, 100)
}

function drawImage2() {
    let canvas = document.getElementById('canvas-image-2')
    let ctx = canvas.getContext('2d')

    create_circle(ctx, 100, 200, 60, 0, (2 * Math.PI))
    ctx.fillStyle = '#B0C4DE'
    ctx.fill()
    create_circle(ctx, 350, 200, 60, 0, (2 * Math.PI))
    ctx.fillStyle = '#B0C4DE'
    ctx.fill()
    create_circle(ctx, 200, 200, 20, 0, (2 * Math.PI))
    ctx.beginPath()

    ctx.moveTo(100, 200)
    ctx.lineTo(200, 200)
    ctx.lineTo(170, 100)
    ctx.moveTo(100, 200)
    ctx.lineTo(180, 130)
    ctx.moveTo(150, 100)
    ctx.lineTo(190, 100)
    ctx.moveTo(180, 130)
    ctx.lineTo(330, 130)
    ctx.lineTo(200, 200)
    ctx.moveTo(350, 200)
    ctx.lineTo(320, 90)
    ctx.lineTo(285, 100)
    ctx.moveTo(320, 90)
    ctx.lineTo(345, 70)
    ctx.stroke()
}

function drawImage3(){
    let canvas = document.getElementById('canvas-image-3')
    let ctx = canvas.getContext('2d')

    ctx.beginPath()
    ctx.rect(100, 150, 250, 220)
    ctx.fillStyle = 'blue'
    ctx.fill()
    ctx.moveTo(100, 150)
    ctx.lineTo(225, 50)
    ctx.lineTo(350, 150)
    ctx.fillStyle = 'blue'
    ctx.fill()
    ctx.rect(110, 180, 100, 50)
    ctx.rect(240, 180, 100, 50)
    ctx.rect(240, 250, 100, 50)
    ctx.moveTo(160, 180)
    ctx.lineTo(160, 230)
    ctx.moveTo(110, 205)
    ctx.lineTo(210, 205)
    ctx.moveTo(290, 180)
    ctx.lineTo(290 ,230)
    ctx.moveTo(240, 205)
    ctx.lineTo(340, 205)
    ctx.moveTo(290, 250)
    ctx.lineTo(290, 300)
    ctx.moveTo(240, 275)
    ctx.lineTo(340, 275)
    ctx.stroke()

    ctx.beginPath()
    ctx.ellipse(280, 60, 5, 20, Math.PI / 2, 0, 2 * Math.PI)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(260, 60)
    ctx.lineTo(260, 120)
    ctx.moveTo(300, 60)
    ctx.lineTo(300, 120)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(120, 280)
    ctx.lineTo(120, 370)
    ctx.moveTo(200, 280)
    ctx.lineTo(200, 370)
    ctx.moveTo(120, 280)
    ctx.quadraticCurveTo(160, 250, 200, 280);
    ctx.moveTo(160, 264)
    ctx.lineTo(160, 370)
    ctx.moveTo(150, 330)
    ctx.arc(150, 330, 5, 0, 2*Math.PI, false);
    ctx.moveTo(170, 330)
    ctx.arc(170, 330, 5, 0, 2*Math.PI, false);
    ctx.stroke()
}
drawImage1()
drawImage2()
drawImage3()