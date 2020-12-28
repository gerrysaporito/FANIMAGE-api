# Shopify Image Repository API --  [fanimage.net](http://fanimage.net)

### CHALLENGE
The task was to build an image repository api. It was an open ended task, restricted to nothing but imagination. The goal was to create an api that allows users to add, remove, and view images.

### INSPIRATION
This app was created to support the shopify image repository api backend challenge. 
I am a big fan of anime and shiba inus. I have a shiba and his name is Primo. I was going to post pictures of him but I haven't created a worthy meme/gif of him yet.
I originally started with creating a site where content creators can upload images of their fan art for desktops/mobile devices. Japanese animation studios are more open to creating fan art as they see it as open publicity, although selling may have some legal implications so it is not on the roadmap right now.

### DESIGN DECISIONS
This api is closed off from the public and is only accessible through the client found in the link above. This choice was made to restrict the ways users can access the image repository to a channel that can be controlled by FANIMAGE, limiting the number of issues that can occur. Also, this is an easy way to make sure users are authenticated and implement access controls.

Tags may seem meaningless right now, but they were implemented to lay a pathway for a future release where search and filter would be the core.

### ROADMAP
To date, the current site has the ability to add, remove, and view images (if user is authenticated). Tags have also been added to each image to allow searching in future versions. Buying and selling images is not in the roadmap as of now due to the possible legal complications.

In the near future, FANIMAGE will see user profiles, "My Images" page, shareable links and other 3rd party integrations, and more.

The vision is to create an image repository, created by the community, for fan art wallpapers (mobile, desktop, etc).