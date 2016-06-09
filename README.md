# Discourse integration for GitBook

To use the Discourse plugin in your Gitbook project, add the discourse plugin
to the `book.json` file, along with the URL of your Discourse web site

```json
{
  "plugins": ["discourse-external-integration"],
  "pluginsConfig": {
    "discourse": {
      "discourseUrl": "https://url-of-your-discourse-server/"
    }
  }
}
```

Then run `gitbook install` to download and install the plugin.
