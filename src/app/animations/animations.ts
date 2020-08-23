
import { trigger, state, transition, style, animate, animation, useAnimation } from '@angular/animations';

  /**
   * Custom Animation
   */
export let bounceAnimationCustom = animation(
    animate('0.5s ease-out',
        style({ 
            transform : 'translateX(-100%)',
    }))
 )

export let fade = trigger('fade' ,[
    state('void' , style ({ opacity : 0})),
    transition(':enter' , animate(500)),
    transition(':leave', useAnimation(bounceAnimationCustom))
  ]);
