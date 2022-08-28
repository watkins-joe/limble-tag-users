import { TaggedTemplateExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { commentList, JobComment } from 'src/types/comment';
import { userList } from 'src/types/user';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  users = userList;

  comments = commentList;

  tagCheck(e: Event) {
    const target = e.target as HTMLInputElement;

    console.log(`value: ${target.value}`);

    console.log(`target: ${e.target}`);

    if (target.value.includes('@')) {
      console.log('open menu');
    }
  }

  onCommentSubmit(e: Event) {
    const target = e.target as HTMLInputElement;

    if (!target.value.trim()) return console.error('Comment cannot be empty.');

    const currentDate = new Date();

    const year = currentDate.getUTCFullYear();
    const month = String(currentDate.getUTCMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getUTCDate()).padStart(2, '0');
    const time = currentDate.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });

    const dateString = `${year}/${month}/${day} ${time}`;

    const newComment: JobComment = {
      commentText: target.value,
      author: 'Joe',
      date: dateString,
    };

    console.log(newComment);

    commentList.push(newComment);

    console.log(commentList);

    target.value = '';

    console.log(target.value);
  }
}
