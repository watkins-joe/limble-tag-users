export interface JobComment {
  commentText: string;
  author: string;
  date: Date | string;
}

export let commentList: JobComment[] = [
  {
    commentText: 'This Task was assigned to Daryl Babb',
    author: 'System',
    date: '2020/04/03 11:00 AM',
  },
  {
    commentText: 'Waiting on Parts',
    author: 'System',
    date: '2020/04/03 11:00 AM',
  },
];
