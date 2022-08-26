import { Component, OnInit } from '@angular/core';
import { commentList } from 'src/types/comment';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss'],
})
export class CommentListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  comments = commentList;
}
