---
layout: post
title: SixthBoro - Realtime iOS application for PATH trains
tags: [iOS, Swift]
---

Every city with a reliable public transportation system is seemingly matched with an unbelievably low-quality iOS application to display useful information to commuters. Obviously this proposition stands true for NJ PATH train riders as well. The official PATH iOS application (built with Xamarin) leaves much to be desired whether it be functionality or design. In situations trying to plan train schedules in a hurry, users are often left waiting as the application loads inefficently or left fiddling endlessly trying to make sense of the hard-to-understand user interface. 

<hr> 

### Version 1.0

After a couple weeks of designing, prototyping, and refactoring my take on a PATH iOS application, I'm happy to showcase the current state of [SixthBoro](https://sixthboro.app).

![](/images/posts/sixthboro/share.png)
*Share train times seamlessly by swiping on the train cell.*

SixthBoro, named after the common phrase used to describe Jersey City and Hoboken as being New York City's next borough, is a lightweight and reliable application to seamlessly check train times. The application is packed with iOS features to improve the user experience and provide a quick way to get the information you need. 


![](/images/posts/sixthboro/time.png)
*SixthBoro allows for users to tap between relative and local times seamlessly.*

Contrary to the publicly available official PATH app, SixthBoro's UI aims to be very straightforward, simple, and clean. There is no interest in bogging down the experience by showing you information you likely won't need on a realtime basis, such as untimely alerts or links to PATH's website. The goal is to show you realtime train data for you to better plan your schedule with a personable, iOS user experience. Alongside straightforward functionality, SixthBoro displays useful information like train status, train line color, and time until a train arrives to the given station. Lastly, if you happen to pull up SixthBoro at a later time, you can even pull-to-refresh the train data and get a realtime result. 
 
![](/images/posts/sixthboro/favorites.png)
*Favorite the stations you frequent.*

Commuters can now set favorite stations which they commonly frequent reducing the work of navigating throughout the application just to find desired results. With SixthBoro, you can even set up notifications for specific trains giving commuters the comfort of not having to check back on train times so often. Another simple feature we've gotten great feedback on is the ability to switch between relative and local time providing better context on scheduling times.

It has been incredibly fun building an application that could be immensely helpful to any commuter traveling by way of PATH on a regular basis. Feel free to leave me a note if you have any suggestions or comments at sixthboroapp@gmail.com! 


### Status

The application is now live on the Apple App Store! You can try the most recent version on your iOS devices and hopefully have a great experience in doing so.

<a href="https://sixthboro.app"><button class='c-btn c-btn--full'>See the SixthBoro website</button></a>
