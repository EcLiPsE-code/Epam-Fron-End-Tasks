'use strict'

function create_circle(ctx, x, y, radius, startAngle, endAngle){
    ctx.beginPath()
    ctx.arc(x, y, radius, startAngle, endAngle)
    ctx.stroke()
}