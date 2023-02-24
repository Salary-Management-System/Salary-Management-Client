import { trigger, transition, style, animate, query, sequence, stagger } from "@angular/animations";

export const fadeUpIn = trigger('fadeUpIn', [
    transition(':enter', [
      style({ transform : 'translateY(20px)', opacity : 0 }),
      animate('250ms', style({ transform : 'translateY(0)', opacity : 1 }))
    ]),
    transition(':leave', [
      animate('250ms', style({ transform : 'translateY(20px)', opacity : 0 }))
    ])
])

export const showSubMenu = trigger('showSubMenu', [
  transition(':enter', [
    style({ height : 0, overflow : 'hidden' }),
    query('.sub-row-menu', [
      style({ opacity : 0, transform : 'translateY(-50px)' })
    ]),
    sequence([
      animate('200ms', style({ height : '*' })),
      query('.sub-row-menu', [
        stagger(-50, [
          animate('400ms ease', style({ opacity : 1, transform : 'none' }))
        ])
      ])
    ])
  ]),
  transition(':leave', [
    style({ height : '*', overflow : 'hidden' }),
    query('.sub-row-menu', [
      style({ opacity : 1, transform : 'none' })
    ]),
    sequence([
      query('.sub-row-menu', [
        stagger(50, [
          animate('400ms ease', style({ opacity : 0, transform : 'translateY(-50px)' }))
        ])
      ]),
      animate('200ms', style({ height : '0' }))
    ])
  ])
])