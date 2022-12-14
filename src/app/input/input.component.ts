import { Component, HostListener, OnInit } from '@angular/core';
import { commentList, JobComment } from 'src/types/comment';
import { userList } from 'src/types/user';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  constructor() {}

  @HostListener('userClick', ['$event']) testFunction($event: Event) {
    let inputVal = document.querySelector('input')?.value;
    console.log(inputVal);
  }

  ngOnInit(): void {
    document
      .querySelector('input')
      ?.addEventListener('userClick', (e: Event) => {
        console.log(e);
      });
  }

  users = userList;

  comments = commentList;

  showAutocomplete = false;

  tagCheck(e: Event) {
    const target = e.target as HTMLInputElement;

    console.log(`value: ${target.value}`);

    console.log(`target: ${e.target}`);

    console.log(`cursor position: ${target.selectionStart}`);

    if (target.value.includes('@')) {
      console.log('open menu');
      this.showAutocomplete = true;
    } else {
      this.showAutocomplete = false;
    }
  }

  tagUser(e: Event, userName: string) {
    console.log(`clicked on user: ${userName}`);
    const target = e.currentTarget as HTMLDivElement;
    console.log(target.textContent?.trim());
    this.showAutocomplete = false;

    let input = document.querySelector('input');
    input!.value += `${userName} `;

    input!.focus();
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
    console.log(userList);

    const userDir: Record<string, number> = {
      Kevin: 1,
      Jeff: 2,
      Bryan: 3,
      Gabbey: 4,
    };

    // get most recently pushed comment
    let commentArray =
      commentList[commentList.length - 1].commentText.split(' ');

    // this only looks for the name. if an @ precedes the name, this fails to work. '@Bryan' does not work, 'Bryan' does
    // fixed this. now, checking the first letter of string. if '@' and word following '@Bryan' (Bryan), alert the name
    commentArray.forEach((word: string) => {
      if (userDir[word.slice(1)] && word[0] === '@') {
        alert(`${word} has been alerted`);
      }
    });
  }
}
