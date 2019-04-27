import { Component, OnInit, HostListener } from '@angular/core'; // step 1 add : Inject, HostListener
// tslint:disable-next-line: import-spacing


@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.css']
})
export class ScrollTopComponent implements OnInit {
 showScroll: boolean; // step 2. set windowScrolled as boolean type
 showScrollHeight = 300;
 hideScrollHeight = 10;
  // step 3. make dependency injection in constructor
  constructor() {}
  @HostListener('window:scroll', [])
    onWindowScroll() {
      if (( window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > this.showScrollHeight) {
        this.showScroll = true;
// tslint:disable-next-line: max-line-length
      } else if ( this.showScroll && (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) < this.hideScrollHeight) {
        this.showScroll = false;
      }
    }
  scrollToTop() {

    (function smoothscroll() { const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
                               if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 5));
      }
    })();
  }
  ngOnInit() {
  }

}
