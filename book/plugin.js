require([
  "gitbook",
  "jQuery"
], function(gitbook, $) {
  function embedDiscourse() {
    config['discourse-external-integration-auth'] = config['discourse-external-integration-auth'] || {};
    var parser = document.createElement('a');
    parser.href = window.location.href
    // The only way to re-execute Discourse embedding script seems to be to re-insert it.
    DiscourseEmbed.discourseEmbedUrl = parser.protocol + config['discourse-external-integration-auth'].auth + window.location.href.replace(parser.protocol, '');
    $("#discourse-comments").remove();
    $("#discourse-embed-script").remove();
    $(".book-body .page-inner").append($("<div>", {
      "id": "discourse-comments"
    }));
    $("head").append($("<script>", {
      "async": true,
      "id": "discourse-embed-script",
      "src": DiscourseEmbed.discourseUrl + 'javascripts/embed.js',
      "type": "text/javascript"
    }));
  }

  gitbook.events.bind("start", function (e, config) {
    DiscourseEmbed = {
      discourseUrl: config['discourse-external-integration-auth'].discourseUrl
    };
  });

  gitbook.events.bind("page.change", embedDiscourse);
});
