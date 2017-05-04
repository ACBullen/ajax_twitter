const APIUtil = require('./api_util.js');
const FollowToggle = require('./follow_toggle.js');
class UsersSearch{
  constructor(el) {
    this.el = $(el);
    this.ul = $(".users-search ul");
    this.input = $(`.users-search input`);
    console.log(this.input);
    this.input.on('input', this.handleInput.bind(this));
  }

  handleInput(event) {
    event.preventDefault();
    APIUtil.searchUsers(this.input.val(), this.renderResults.bind(this));
  }

  renderResults(users) {
    this.ul.html('');
    users.forEach(user => {
      let $entry = $(`<li><a href="/users/${user.id}">${user.username}</a></li>`);
      let $followBtn = $("<button></button>");
      new FollowToggle($followBtn, { followState: user.followed, userId: user.id });
      $entry.append($followBtn);
      this.ul.append($entry);

    });
  }
}

module.exports = UsersSearch;
