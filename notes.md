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

styling for tagging

change the tag text to bold or some kind of visually different style to denote that it is a user tag and not regular text

autofocusing in autocomplete when `@` entered into chat before tagging a user

- first user in the autocomplete list is automatically focused and you are able to navigate the list of users with the up and down arrow keys. pressing <kbd>Enter<kbd> will enter that user's name into the text field **with a space after their name as well**

looking up user names in comment string -- how will we do that?

what we know:

1. users list is an array of User objects, userID and name
2. they are not alphabetical, but are listed in ascending order by userID.
3. each user has a name that we need to match to our comment. if our comment contains one of those usernames, we need to notify the user OR users mentioned in the comment
   1. whether we could mention more than one user in a comment was an edge case that was not clear, but i would have asked if this was done live
   2. we could do this by splitting the comment by spaces in separate words and checking if each word is a user in the array of words in the comment and if it is a match, we can notify the user.
      1. we would do a object property lookup in the users list instead of an array, as object property lookup is O(1) TC whereas array.includes() is O(N). this would take more space though, as we need to just store a list of names.
         1. what if two users had the same name but different IDs? this could be a problem in the future.
            1. if we build another object with `userName` as key and ID as a value, in the event of ties, we could check the userID. this also allows us to do object property lookup O(1) on just the name portion.

styling the tagged user in the comment string

1. would likely have to access the `innerHTML` and modify that on the fly? make it bold somehow like in example. could target with a span, but not sure how that would work right now.

MVP

1. input field to type text into
2. already existing comments
3. alert specific user when entered into a comment, on creation or on addition to the 'comments' array
   1. done with javascript alert() function for simplicity, alert that user's name and ID (?)

MVP Checklist

- [x] A list of comments
- [x] A field that can allow people to add new comments
- [x] The field should be able to detect when you type in someone's name starting with an @ like slack does
- [x] When the entry is entered it needs to detect which user was typed in and trigger a javascript function that alerts their name
  - done with javascript alert() function for simplicity, alert that user's name and ID (?)

nice to haves:

- [x] autocomplete dropdown/dropup
- [x] autocomplete shell/box
- [x] member list divs with name
- [ ] autofocusing on first name in autocomplete when suggested
- [ ] name suggestion algorithm that gets more specific and dynamically renders more specific user divs in dropup as you type in more letters, eventually having only one or a few users/one user left who matches, or nothing at all.
