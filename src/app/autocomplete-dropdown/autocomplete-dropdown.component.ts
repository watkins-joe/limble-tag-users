import { Component, OnInit } from '@angular/core';
import { userList } from 'src/types/user';

@Component({
  selector: 'app-autocomplete-dropdown',
  templateUrl: './autocomplete-dropdown.component.html',
  styleUrls: ['./autocomplete-dropdown.component.scss'],
})
export class AutocompleteDropdownComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  users = userList;
}
