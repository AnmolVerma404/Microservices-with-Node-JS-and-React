# Introducation

## What is a Microservice?

- Until now I have been creating a full stack application which was not so huge and scalable, but still was build using a single database, server, and it's components were not break down into services.
- A single microservice contains a single feature of our app. And that should be completly independent from other feature. So that if any of them bugs out our whole application will not crash down.
- The main point to be taken care off is data management b/w microservices.
- The two ways to manage issue is Sync and Async.
- Sync - Services communicate with each other using direct request
    - If dependent service fail, then all the parent services will also fail which are some how connected with main/parent service
- Async - Services communicate with each other using events
    - One of the way is to use Data Bus
    - And the better way is to create a new database which will listen to Data bus whenever a entity is updated.
        - The intresting thins here is, if other service go down, it wouldn't affect this new service.
        - There might be some delay due to this method, Eg in YouTube live subscriber count, and subscriber count at YT page is different, as they are not being updated simultaneous. Afcourse it not this simple YouTube have much complex system.
- Docker - We creat series of things called **container**.
    - Container - It's like an *isolated computing environment*, it contain everything required to run one single program.
    - That's what called a Docker Container
    - Eg :- Container for different services in a App like Posts, Comments, Moderation, Event-Bus, Query, etc.
- Kubernetes - It's a tool for running a bunch of different container together
    - It is going to create these container that are going to run our program for us, and it's going to handle communication or network request between all these container.
    - In simple words it's a tool for simplifying communication between different container/programs.