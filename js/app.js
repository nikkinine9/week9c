var tweets = ["Share the love by stopping hatred",
    "Always in our hearts",
    "Can corona spread through farts",
    "Who wants a java",
    "Just set up my twitter",
    "Are you ready to celebrate",
    "Turtles are not inside their shells, they are their shells",
    "Who won the game lastnight?",
    "Dude, where's my car?",
    "Four more years.. jk.. jk!",
];

for (var counter = 0; counter < tweets.length; counter++) {
    console.log(tweets[counter]);
}

console.log("--------------------");

var tweets = [{
        tweet: "Share the love by stopping hatred",
        username: "Ashley",
        age: 26,
        created_at: "09-20-2020"

    },
    {
        tweet: "Always in our hearts.",
        username: "Anne",
        age: 60,
        created_at: "07-28-2014"
    },
    {
        tweet: "Can corona spread through farts?",
        username: "Logan",
        age: 20,
        created_at: "12-16-2019"
    },
    {
        tweet: "Who wants a java?",
        username: "Pamela",
        age: 16,
        created_at: "07-28-2014"
    },
    {
        tweet: "Just set up my twitter!",
        username: "John",
        age: 34,
        created_at: "03-15-2020"
    },
    {
        tweet: "Are you ready to celebrate.",
        username: "Donovan",
        age: 15,
        created_at: "05-05-2006"
    },
    {
        tweet: "Turtles are not inside their shells, they are their shells.",
        username: "Nadya",
        age: 24,
        created_at: "12-14-2009"
    },
    {
        tweet: "Who won the game lastnight?",
        username: "Ricky",
        age: 47,
        created_at: "06-05-2016"
    },
    {
        tweet: "Dude, where's my car?",
        username: "Harry",
        age: 17,
        created_at: "10-15-2018"
    },
    {
        tweet: "Four more years.. jk.. jk!",
        username: "Donald",
        age: 74,
        created_at: "11-10-2020"
    }
];

for (var index = 0; index < tweets.length; index++) {
    console.log(tweets[index].tweet);
    console.log(tweets[index].username);
    console.log(tweets[index].created_at);
    console.log("--------------------");
}

function ageChecker(tweet) {
    return tweet.age >= 18;
}
var overEighteenTweets = tweets.filter(ageChecker);
console.log(overEighteenTweets);