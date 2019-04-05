import { Component, OnInit } from '@angular/core';
import { Menu, OptionMenu } from '../../models/menu.model';
import { MenuService } from 'src/app/services/document.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  menu = MENU;
  optionMenu = OPTIONMENU;

  constructor() { }

  ngOnInit() {
  }
}

export const MENU: Menu[] = [
  { icon: { icon1: 'add', icon2: 'keyboard_arrow_down' }, name: 'New' },
  { icon: { icon1: 'vertical_align_top', icon2: 'keyboard_arrow_down' }, name: 'Upload' },
  { icon: { icon1: 'sync', icon2: '' }, name: 'Sync' },
  { icon: { icon1: 'https://img.icons8.com/color/32/000000/ms-excel.png', icon2: '' }, name: 'Export to Excel' },
  { icon: { icon1: 'donut_large', icon2: 'keyboard_arrow_down' }, name: 'Flow' },
  { icon: { icon1: '', icon2: 'more_horiz' }, name: '' }
];

export const OPTIONMENU: OptionMenu = { item1: 'Item 1', item2: 'Item 2' };
