import { Directive, Input, OnChanges, HostBinding } from "@angular/core";

@Directive({
  selector: "[appCardLogo]"
})
export class CardLogoDirective implements OnChanges {
  constructor() {}
  @Input() cardName: string;
  @HostBinding("src") imageSource;
  ngOnChanges() {
    this.imageSource = "./assets/default.jpg";
    if (this.cardName) {
      if (this.cardName.indexOf("4") > -1) {
        this.imageSource = "./assets/visa.jpg";
      } else if (this.cardName.indexOf("5") > -1) {
        this.imageSource = "./assets/mastercard.png";
      } else if (
        this.cardName.indexOf("37") > -1 ||
        this.cardName.indexOf("34") > -1
      ) {
        this.imageSource = "./assets/amex.jpg";
      } else if (
        this.cardName.indexOf("30") > -1 ||
        this.cardName.indexOf("36") > -1 ||
        this.cardName.indexOf("38") > -1 ||
        this.cardName.indexOf("39") > -1
      ) {
        this.imageSource = "./assets/diners.png";
      } else if (
        this.cardName.indexOf("60") > -1 ||
        this.cardName.indexOf("64") > -1 ||
        this.cardName.indexOf("65") > -1
      ) {
        this.imageSource = "./assets/discover.png";
      }
    }
  }
}
