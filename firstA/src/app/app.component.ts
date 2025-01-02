import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FirstA';

  ngOnInit() {
    let h1 = document.querySelector('.slide > h1') as HTMLElement;

    function useAuto() {
      let container = document.querySelector('.slide') as HTMLElement;
      let h1 = document.querySelector('.slide > h1') as HTMLElement;


      let before = window.getComputedStyle(container, '::before');

      let maskImage = before.getPropertyValue('mask-image');

      console.log('Mask image URL:', maskImage);

      container.style.transition = 'all 15s ease';
      container.style.position = 'absolute';
      container.style.left = '0';
      container.style.width = '0';
      h1.style.transition = 'all 12s ease';
      h1.style.opacity = '0';
      h1.style.cursor = 'text';
    }

    function useClick() {
      h1.addEventListener('click', () => {
        let container = document.querySelector('.slide') as HTMLElement;
        let h1 = document.querySelector('.slide > h1') as HTMLElement;


        let before = window.getComputedStyle(container, '::before');

        let maskImage = before.getPropertyValue('mask-image');

        console.log('Mask image URL:', maskImage);

        container.style.transition = 'all 15s ease';
        container.style.position = 'absolute';
        container.style.left = '0';
        container.style.width = '0';
        h1.style.transition = 'all 12s ease';
        h1.style.opacity = '0';
        h1.style.cursor = 'text';
      });
    }+
    setTimeout(() => {
      // useAuto();
      useClick()
    }, );

    
    // function useClick() {
    //   let container = document.querySelector('.slide') as HTMLElement;
    //   let h1 = document.querySelector('.slide > h1') as HTMLElement;


    //   let before = window.getComputedStyle(container, '::before');

    //   let maskImage = before.getPropertyValue('mask-image');

    //   console.log('Mask image URL:', maskImage);

    //   container.style.transition = 'all 15s ease';
    //   container.style.position = 'absolute';
    //   container.style.left = '0';
    //   container.style.width = '0';
    //   h1.style.transition = 'all 12s ease';
    //   h1.style.opacity = '0';
    // }
  }

}
