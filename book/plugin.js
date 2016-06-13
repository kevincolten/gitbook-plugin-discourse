require([
  "gitbook",
  "jQuery"
], function(gitbook, $) {
  function embedDiscourse() {
    // The only way to re-execute Discourse embedding script seems to be to re-insert it.
    $("#discourse-comments").remove();
    $("#discourse-embed-script").remove();
    $(".book-body .page-inner").append($("<div>", {
      "id": "discourse-comments"
    }));
    $("head").append($("<script>", {
      "async": true,
      "id": "discourse-embed-script",
      "src": DiscourseEmbed.discourseUrl + 'javascripts/embed.js';
      "type": "text/javascript"
    }));
  }

  gitbook.events.bind("start", function (e, config) {
    config['discourse-external-integration'] = config['discourse-external-integration'] || {};
    DiscourseEmbed = {
      discourseUrl: config['discourse-external-integration'].discourseUrl,
      discourseEmbedUrl: window.location.href
    };
    embedDiscourse(config);
  });

  gitbook.events.bind("page.change", embedDiscourse);
});
