import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Output() pageSelectCustomEvent = new EventEmitter<string>();

  onSelect(page: string) {
    this.pageSelectCustomEvent.emit(page);
  }
}
