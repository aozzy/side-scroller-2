import Player from "./player.js"
import Inputhandler from "./input.js"
import { drawStatusText } from "./util.js"



window.addEventListener('load',function(){
const loading = document.getElementById('loading')
console.log(loading);
loading.style.display = 'none'
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const player = new Player(canvas.width,canvas.height)

player.draw(ctx)
const input = new Inputhandler()
function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height)
  player.update(input.lastKey)
  player.draw(ctx)
  drawStatusText(ctx,input,player)
  requestAnimationFrame(animate)

}
animate()
})