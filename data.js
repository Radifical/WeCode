//data for community boards
var defaultThreads = [
    {
        id: 1,
        title: "HTML",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    },
    {
        id: 2,
        title: "CSS",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    },
      {
        id: 3,
        title: "JavaScript",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content 3",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    },
  {
        id: 4,
        title: "Python",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content 4",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    },
  {
        id: 5,
        title: "Java",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content 5",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    },
  {
        id: 6,
        title: "C#",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content 6",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    }
  
  
]

var threads = defaultThreads
if (localStorage) {
    threads = JSON.parse(localStorage.getItem('threads'));
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}