---
title: AnyFetch | Developers
layout: main
---
Building your own document search-engine is but a few API calls away.

## Sending

You can use our work-out-of-the-bow providers for standard services (Dropbox, GMail, Salesforce)...
But sometime, you'll want to send your own documents. This is dead simple!

Create the document first:

```sh
$ curl -XPOST \
-H "Authorization: token ${TOKEN}" \
-H "Content-Type:application/json" \
http://api.anyfetch.com/documents \
-d '{"identifier": "hello-world", "no_hydration": true, "document_type": "file", "metadatas": {"path": "/home/anyfetch/sample.txt", "title": "anyFetch sample file"}}'
```

And send the document:

```sh
$ curl -XPOST \
-H "Authorization: token ${TOKEN}" \
-F "file=@sample.pdf" \
http://api.anyfetch.com/documents/identifier/hello-world/file
```

## Search

```sh
$ curl -H "Authorization: token ${TOKEN}" \
http://api.anyfetch.com/documents?search=anyfetch
```

[nice image]

And you're done!
