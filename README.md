# Discourse integration for GitBook

forked from https://git.framasoft.org/etalab/gitbook-plugin-discourse

To use the Discourse plugin in your GitBook project, add the discourse plugin
to the `book.json` file, along with the URL of your Discourse web site

```json
{
  "plugins": ["discourse-external-integration-auth"],
  "pluginsConfig": {
    "discourse-external-integration-auth": {
      "discourseUrl": "https://url-of-your-discourse-server/",
      "auth": "username:password@"
    }
  }
}
```

Then run `gitbook install` to download and install the plugin.
