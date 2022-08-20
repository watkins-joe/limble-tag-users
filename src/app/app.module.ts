import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentComponent } from './comment/comment.component';
import { AutocompleteDropdownComponent } from './autocomplete-dropdown/autocomplete-dropdown.component';
import { UserEntryComponent } from './user-entry/user-entry.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentListComponent,
    CommentComponent,
    AutocompleteDropdownComponent,
    UserEntryComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
