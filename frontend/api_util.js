const APIUtil = {
  followUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      method: 'POST',
      dataType: 'JSON'
    });
  },

  unfollowUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      method: 'DELETE',
      dataType: 'JSON'
    });
  },

  searchUsers(queryVal, success) {
    return $.ajax({
      url: `/users/search`,
      method: 'GET',
      dataType: 'JSON',
      data: {query: queryVal},
      success: success,
      error: () => console.log("F-ed")
    });
  },

  createTweet(data){
    return $.ajax({
      url: `/tweets`,
      method: "POST",
      dataType: 'JSON',
      data: data
    });
  },

  fetchTweets(maxDate = null){
    return $.ajax({
      url: '/feed',
      method: 'GET',
      dataType: 'JSON',
      data: {
        max_created_at: maxDate
      }
    });
  }
};

module.exports = APIUtil;
