const APIUtil = require('./api_util.js');
class InfiniteTweets {
  constructor(feed) {
    this.$feed = $(feed);
    this.fetchTweets();
    this.$feed.find("a.fetch-more").on("click", this.fetchTweets.bind(this));
  }

  fetchTweets(){
    // this.$feed.find("ul > li:last-of-type")
    APIUtil.fetchTweets(20).then(response => {
      response.each((idx, tweet) => {
        this.$feed.find('#feed').append("SDLFKJS");
      });
    });
  }
}

module.exports = InfiniteTweets;
