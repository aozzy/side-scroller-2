export default class Inputhandler{
  constructor(){
    this.lastKey = ''
    window.addEventListener('keydown',function(e){
      switch(e.key){
        case 'ArrowLeft':
          this.lastKey = 'PRESS left'
      }
    })
    window.addEventListener('keyup',function(e){
      switch(e.key){
        case 'ArrowLeft':
          this.lastKey = 'RELEASE left'
      }
    })
  }


}