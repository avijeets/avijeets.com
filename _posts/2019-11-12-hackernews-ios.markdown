---
layout: post
title: HackerNews - Browse HackerNews submissions on iOS
tags: [iOS, Swift]
---

Trying out the new SwiftUI library, introduced with Xcode 11, to build out the UI of a straightforward master-detail application. This project pulls Hacker News articles through the [Algolia API](http://hn.algolia.com/api/) and displays them in a SwiftUI List (formerly known as UITableView within UIKit) with their respective HN upvotes. Clicking into any cell will bring up a WKWebView displaying the URL of the post.

<a href="http://github.com/avijeets/HackerNews-SwiftUI"><button class='c-btn c-btn--full'>See Source Code on GitHub</button></a>