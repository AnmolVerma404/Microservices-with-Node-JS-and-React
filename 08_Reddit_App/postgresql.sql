create table users(
    id serial primary key,
    username varchar(8),
    email varchar(32),
    password varchar(164)
);

create table posts(
    id serial primary key,
    title varchar(32),
    description varchar(264),
    author integer references users(id),
    likes integer default 0
);

create table subreddits(
    id serial primary key,
    titlename varchar(32),
    description varchar(64)
);

create table subreddit_users(
    subreddit_id integer references subreddits(id),
    user_id integer references users(id)
);

create table comments(
    id serial primary key,
    post_id integer references posts(id),
    content varchar(128)
);

