const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./users_search.js');
const TweetCompose = require('./tweet_compose.js');
const InfiniteTweets = require('./infinite_tweets.js');

$(() => {
  $('.follow-toggle').each((idx, button) => {
    new FollowToggle(button);
    });
  $('.users-search').each((idx, nav) => new UsersSearch(nav));
  $('.tweet-compose').each((idx, div) => new TweetCompose(div));
  $('.infinte-tweets').each((idx, feed)=> new InfiniteTweets(feed));
});
