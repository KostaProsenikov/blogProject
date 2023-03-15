import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss'],
})
export class CardComponentComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() pathName: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
