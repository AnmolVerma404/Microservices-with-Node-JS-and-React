# Introducation

## What is a Microservice?

- Until now I have been creating a full stack application that was not so huge and scalable, but still was built using a single database, and the server and its components were not broken down into services.
- A single microservice contains a single feature of our app. And that should be completely independent of other features. So that if any of them bugs out our whole application will not crash.
- The main point to be taken care of is data management b/w microservices.
- The two ways to manage the issue are Sync and Async.
- Sync - Services communicate with each other using direct request
  - If the dependent service fails then all the parent services will also fail which are somehow connected with the main/parent service
- Async - Services communicate with each other using events
  - One of the ways is to use Data Bus
  - And the better way is to create a new database that will listen to the Data bus whenever an entity is updated.
    - The interesting thing here is, if other services go down, it won't affect this new service.
    - There might be some delay due to this method, Eg in YouTube live subscriber count, and subscriber count on the YT page are different, as they are not being updated simultaneously. Of course, it is not this simple YouTube has a much more complex system.
- Docker - We create a series of things called **container**.
  - Container - It's like an *isolated computing environment*, it contains everything required to run one single program.
  - That's what is called a Docker Container
  - Eg:- Container for different services in an App like Posts, Comments, Moderation, Event-Bus, Query, etc.
  - Docker makes it easy to run and install a software without worrying about it's setup of dependencies.
  - Docker have and Image and a container.
  - A Docker image is a file used to execute code in a Docker container
    <img src="./Images/Docker_image_container.png" height="150px">
  - In simple words a image is like a *repository* which we can clone/download/cache/use in our local machine from **Docker Hub**(Like *GitHub*).
  - The command to do this is
    - `docker run <image name> <command>`
    - The `command` is a action, which we can justify after the image name. It should be present in the container to run successfully.
  - For viewing current running container
    - For running a container use `docker run busybox ping google.com`
    <img src="./Images/Container_running.png" height="150px">
    - `docker ps`
    <img src="./Images/Docker_ps.png" height="150px" >
  - `docker ps --all` will show all the container ever created and run.
  - (`docker run`) = (`docker create`) + (`docker start -a`)
  - `docker system prune` is the command to delete all the container, image, and cache present in your local machine.
  - To stop the docker container we have :-
    - `docker stop <id>` will give some time, to save/easily quit the container. If it take more than 10 sec `docker kill <id>` will automatically execute
    - `docker kill <id>` will immediately quit/kill/stop/force stop the container
    - `docker exec -it <container id> <command>` by this you will be able to add a new command in pre existing container
    - `docker exec -it <container id> sh` to open a new shell window inside a container.
    - Dockerfile :-
      - Initially it was having three commands `FROM`, `RUN`, `CMD`
      - `FROM` states a baseline of a Docker file, it is the necessary components for a container to begin the flow. It's the Docker image that we want to use as a base.
      - `RUN` it is use to execute some commands while we are preparing our custome image.
      - `CMD` it specifies what should be executed when our image is used to start a brand new container.
      - `COPY` As the files present in your directory is not present in the container/image, therefore you need to specify which files/folder are needed where.
    - **Port** in which our service is listening/running is in container therefore we have to map it with a port in our local machine. For that we use `docker run -p <local machine PORT>:<container PORT> <id>`
- Kubernetes - It's a tool for running a bunch of different containers together
  - It is going to create these containers that are going to run our program for us, and it's going to handle communication or network requests between all these containers.
  - In simple words, it's a tool for simplifying communication between different containers/programs.
  - `kubectl version` for checking Kubernetes version
  - **Kubernetes Cluster** - A Collection of nodes + a master to manage them
  - **Node** - A virtual machine that will run our container
  - **Pod** - A Pod can run multiple container, more or less a running container.
  - **Deployment** - It monitors a set of Pods, and make sure that they are running and restarts them if they crash.
  - **Service** - Provides a easy to remember URL to access a running container.
  - **yaml** is the language used to write and store Kubernetes commands, and **k8s** is the folder convention to store such kubernetes config files.
  - To run the config file use `kubectl apply -f <file name with ext(yaml)>`
  - To inspect and get a list of all the running Pods use `kubectl get pods`
  - `kubectl exec -it <pod name> [cmd]` Execute the given command in a running pod
  - `kubectl logs <pod name>` print out logs from the given pod
  - `kubectl delete pod <pod name>` deletes the given pod
  - `kubectl apply -f <config file name>` tells kubernetes to process the config
  - `kubectl describe pod <pod name>` print out some information about the running pod
  - **Deployments** commands - 
    - `kubectl get deployments` to get list of all current running deployment
    - `kubectl describe deployments <depl name>` to print out details about a specific deployment
    - `kubectl apply -f <config file name>` to create a deploynment out of a config file
    - `kubectl delete deploynment <depl name>`
  - To push the image in Docker hub use `docker push <user name/id>/<image name>`
  - To restart a pad after pushing(not necessary) use `kubectl rollout restart deployment <deployment name>`
  - Type of **Service** in Kubernetes :-
    - Cluster IP - URL to access a pod, only b/w pods *(IMP)*
    - Node Port - Make pod accessable outside the cluster
    - Load Balancer - Same as Node, but this way is more used *(IMP)*
    - External Name - Redirects as in in-cluster req to CNAME url(not imp)
  - After defining all the YAML file for service, deploy them in Docker Hub via Kubernetes, then you will be able to use and map ports, and get/post request on your local machine.s
  - Via these steps every service are independent i.e. microservice and even if they went down, due to deployment properties of k8s they will immediately restart on there own.
- In short steps are :-
  1. **Build** **image** via Dockerfile 
  2. **Push** them on Docker Hub
  3. Create a **deployment** and **clusterip service** for **each** Microservices
  4. **Apply** all the config file
  5. **Update** the **links** in the Services.