notes about implementation

using discord popup as an example

discord:

1. shows popup of users when @ is pressed, but not on the second iteration or more of them. only on the first
2. allows you to use arrow keys to navigate recommendations
3. the list of users is not alphabetical
4. the overlay of users is positioned absolute to the input box with the following css classes

```scss
.autocomplete {
  position: absolute;
  left: 0;
  right: 0;
  bottom: calc(100% + 8px);
}
```

5. there is a div inside of the autocomplete shell called 'members'
6. each user in the autocomplete is rendered in a list with a profile picture, user name, and a discord tag (can use our ID provided in our array of user objects provided)

   - the name is on the left hand side of the user's row, the ID is on the far right. we can use a flexbox here and use justify-content: space-between to separate them. or if i didnt want to render the employee id in the autocomplete, i can just use flexbox and justify the content to the flex-start, or the far left of the input.

7. as you type more characters the rendered list shortens to find only those whose names contain the search query.

   - this means the autocomplete box will need a maximum height of some number of pixels as to not render over the entire screen.

8. as you type your search query, the div at the top saying 'members' begins to add your search query as you type it. members matching '@john' when you have '@john' typed into the input field. this isn't required.

more details about `@`

example where menu does not open:
`s@`

does open:
`s @`

check for empty character ` ` in string

any additional `@`s after the initial @ closes the menu

`@@@@@@@`

menu goes away when moving cursor before the @ symbol, and outside of the "character group" with the @ (`@bob`)

adding a space after the character group also closes the menu, as it is not part of the @ group anymore.

MVP

1. input field to type text into
2. autocomplete shell/box
3. member list divs with name
4. already existing comments
5. alert specific user when entered into a comment, on creation or on addition to the 'comments' array
   1. done with javascript alert() function for simplicity, alert that user's name and ID (?)

Checklist

- [x] input field to type text into
- [ ] autocomplete shell/box
- [ ] member list divs with name
- [ ] already existing comments
- [ ] alert specific user when entered into a comment, on creation or on addition to the 'comments' array
  - done with javascript alert() function for simplicity, alert that user's name and ID (?)
