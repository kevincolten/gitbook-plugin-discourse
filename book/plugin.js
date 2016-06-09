require([
  "gitbook",
  "jQuery"
], function(gitbook, $) {
  var use_identifier = false;

  function insertDiscourseDiv() {
      var $discourseDiv = $("<div>", {
        "id": "discourse-comments"
      });
      var pageInner = $(".book-body .page-inner");
      if ($("#discourse-comments", pageInner).length === 0) pageInner.append($discourseDiv);
  }

  gitbook.events.bind("start", function (e, config) {
    config.discourse = config.discourse || {};
    var discourseUrl = config.discourse.discourseUrl;

    /* * * DON'T EDIT BELOW THIS LINE * * */
    DiscourseEmbed = {
      discourseUrl: discourseUrl,
      discourseEmbedUrl: window.location.href
    };

    (function () {
      var d = document.createElement('script'); d.type = 'text/javascript'; d.async = true;
      d.src = DiscourseEmbed.discourseUrl + 'javascripts/embed.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(d);
    })();

    insertDiscourseDiv();
  });

  gitbook.events.bind("page.change", insertDiscourseDiv);
});
