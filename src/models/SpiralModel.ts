import { MouseEvent, MouseEventHandler } from "react";
import { FaTextHeight } from "react-icons/fa6";

// interface CustomMouse extends MouseEvent<HTMLElement> {
//     touches: [number]
// }

export class SpiralModel {
    time: number;
    velocity: number;
    velocityTarget: number;
    width: number;
    height: number;
    lastX: number;
    lastY: number;

    MAX_OFFSET: number;
    SPACING: number;
    POINTS: number;
    PEAK: number;
    POINTS_PER_LAP: number;
    SHADOW_STRENGTH: number;

    event: React.MouseEvent;

    constructor(canvasWidth: number, canvasHeight: number, event: React.MouseEvent) {
        this.time = 0;
        this.velocity = 0.03;
        this.velocityTarget = 0.03;
        this.width = canvasWidth;
        this.height = canvasHeight;
        this.lastX = 0;
        this.lastY = 0;

        this.MAX_OFFSET = 400;
        this.SPACING = 4;
        // this.POINTS = this.MAX_OFFSET / this.SPACING;
        this.POINTS = 125;
        this.PEAK = this.MAX_OFFSET * 0.3;
        this.POINTS_PER_LAP = 5;
        this.SHADOW_STRENGTH = 10;

        this.event = event;

    }

    clear( context:CanvasRenderingContext2D ) {
    
        context.clearRect( 0, 0, this.width, this.height );
      
    }

    resize() {
  
        this.width = window.innerWidth;
        this.height = window.innerHeight;
          
        // this.width = width;
        // this.height = height;
        
    }

    step( context:CanvasRenderingContext2D ) {
    
        this.time += this.velocity;
        this.velocity += ( this.velocityTarget - this.velocity ) * 0.3;
        
        this.clear( context );
        this.render( context );
        
        // requestAnimationFrame( this.step );
        
    }

    setup( context:CanvasRenderingContext2D, width: number, height: number ) {

        this.resize();
        this.step(context);
        
        // window.addEventListener( 'resize', this.resize );
        // window.addEventListener( 'mousedown', this.onMouseDown );
        // document.addEventListener( 'touchstart', this.onTouchStart );
        
    }

    render( context:CanvasRenderingContext2D ) {
    
        var x, y,
            cx = this.width/2,
            cy = this.height/3;
      
        context.globalCompositeOperation = 'darken';
        context.strokeStyle = '#A020F0';
        context.shadowColor = '#00FF00';
        context.lineWidth = 6;
        context.beginPath();
      
        for( var i = this.POINTS; i > 0; i -- ) {
          
          var value = i * this.SPACING + ( this.time % this.SPACING );
          
          var ax = Math.sin( value/this.POINTS_PER_LAP ) * Math.PI,
              ay = Math.cos( value/this.POINTS_PER_LAP ) * Math.PI;
      
          x = ax * value,
          y = ay * value * 0.35;
          
          var o = 1 - ( Math.min( value, this.PEAK ) / this.PEAK );
          
          y -= Math.pow( o, 2 ) * 200;
          y += 200 * value / this.MAX_OFFSET;
          y += x / cx * this.width * 0.1;
          
          context.globalAlpha = 1 - ( value / this.MAX_OFFSET );
          context.shadowBlur = this.SHADOW_STRENGTH * o;
        
          context.lineTo( cx + x, cy + y );
          context.stroke();
       
          context.beginPath();
          context.moveTo( cx + x, cy + y );
          
        }
      
        context.lineTo( cx, cy - 200 );
        context.lineTo( cx, 0 );
        context.stroke();
        
      }
      
    // public onMouseDown() {
        
    //     this.lastX = this.event.clientX;
    //     this.lastY = this.event.clientY;
        
    //     document.addEventListener( 'mousemove', this.onMouseMove );
    //     document.addEventListener( 'mouseup', this.onMouseUp );
        
    // }
      
    // public onMouseMove() {
        
    //     var vx = ( this.event.clientX - this.lastX ) / 100;
    //     var vy = ( this.event.clientY - this.lastY ) / 100;
        
    //     if( this.event.clientY < this.height/2 ) vx *= -1;
    //     if( this.event.clientX > this.width/2 ) vy *= -1;
        
    //     this.velocityTarget = vx + vy;
        
    //     this.lastX = this.event.clientX;
    //     this.lastY = this.event.clientY;
        
    // }
      
    // public onMouseUp() {
        
    //     document.removeEventListener( 'mousemove', this.onMouseMove );
    //     document.removeEventListener( 'mouseup', this.onMouseUp );
        
    // }
      
    // public onTouchStart() {
        
    //     this.event.preventDefault();
        
    //     this.lastX = this.event.touches[0].clientX;
    //     this.lastY = this.event.touches[0].clientY;
        
    //     document.addEventListener( 'touchmove', this.onTouchMove );
    //     document.addEventListener( 'touchend', this.onTouchEnd );
        
    // }
      
    // public onTouchMove() {
        
    //     var vx = ( this.event.touches[0].clientX - this.lastX ) / 100;
    //     var vy = ( this.event.touches[0].clientY - this.lastY ) / 100;
        
    //     if( this.event.touches[0].clientY < this.height/2 ) vx *= -1;
    //     if( this.event.touches[0].clientX > this.width/2 ) vy *= -1;
        
    //     this.velocityTarget = vx + vy;
        
    //     this.lastX = this.event.touches[0].clientX;
    //     this.lastY = this.event.touches[0].clientY;
        
    // }
      
    // public onTouchEnd() {
        
    //     document.removeEventListener( 'touchmove', this.onTouchMove );
    //     document.removeEventListener( 'touchend', this.onTouchEnd );
        
    // }
}


  

  

  

  
