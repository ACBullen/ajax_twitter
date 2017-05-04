const APIUtil = require('./api_util.js');

class TweetCompose {
  constructor(form) {
    this.form = $(form);
    this.textarea = this.form.find('textarea');
    this.counter = this.form.find('.chars-left');
    this.form.on('submit', this.submit.bind(this));
    this.form.on("input", this.updateCharsLeft.bind(this));
    this.form.find('a.add-mentioned-user').on('click', this.addMentionedUser.bind(this));
    this.form.find('div.mentioned-users').on('click', this.removeMentionedUser.bind(this));
  }

  submit(event) {
    event.preventDefault();
    let data = this.form.serializeJSON();
    this.form.find(":input").prop('disabled', true);
    return APIUtil.createTweet(data).then(this.handleSuccess.bind(this), this.handleFailure.bind(this));
  }

  clearInput() {
    this.textarea.val("");
    this.form.find('option:first-of-type').prop("selected", true);
    this.form.find('.mentioned-users').html('');
    this.updateCharsLeft();
  }

  handleSuccess(response) {
    this.clearInput();
    this.form.find(":input").prop('disabled', false);
    let $tweet = $('<li></li>');
    $tweet.append(response.content);
    $('#feed').prepend($tweet);
  }

  handleFailure(response){
    alert(response.status);
    this.form.find(":input").prop('disabled', false);
  }
  updateCharsLeft(){
    this.counter.html(140 - this.textarea.val().length);
  }

  addMentionedUser(){
    const $scriptTag = this.form.find('script');
    this.form.find('.mentioned-users ').append($scriptTag.html());
    return false;
  }
  removeMentionedUser(event){
    if (event.target.matches('a.remove-mentioned-user')){
      $(event.currentTarget).html("");
    }
    return false;
  }

}

module.exports = TweetCompose;
