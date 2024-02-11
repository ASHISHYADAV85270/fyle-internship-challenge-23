import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-languagedata',
  templateUrl: './languagedata.component.html',
  styleUrls: ['./languagedata.component.scss'],
})
export class LanguagedataComponent {
  @Input() languages: any = [];
}
