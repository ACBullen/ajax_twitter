const APIUtil = require('./api_util.js');

class FollowToggle{
  constructor(el, options){
    this.el = $(el);
    this.userId = this.el.data('user-id') || options.userId;
    this.followState = (this.el.data('initial-follow-state') ||
                        options.followState);
    this.render();
    this.el.on('click', this.handleClick.bind(this));
  }

  render() {
    this.el.prop("disabled", false);
    if (this.followState) {
      this.el.text('Unfollow');
    } else {
      this.el.text('Follow');
    }
  }

  handleClick(event){
    event.preventDefault();
    const followUnfollow = (
      this.followState ? APIUtil.unfollowUser : APIUtil.followUser
    );
    this.el.prop("disabled", true);
    followUnfollow(this.userId)
    .then(res => {
      this.followState = !this.followState;
      this.render();
    }, error => console.log(error));
  }

}

module.exports = FollowToggle;
