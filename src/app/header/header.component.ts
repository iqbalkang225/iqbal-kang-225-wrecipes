import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() pageSelectCustomEvent = new EventEmitter<string>();

  onSelect(page: string) {
    this.pageSelectCustomEvent.emit(page);
  }
}
