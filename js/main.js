const { createApp } = Vue;

createApp({
  data() {
    return {
        users:[
            {
                name: "Mark Webber",
                src: "assets/images/avatar-mark-webber.webp",
                status: "reacted to your recent post",
                post: "My first tournament today!",
                group: "",
                private_msg: "",
                time: " 1m ago",
                post_img: "",
                unread: true,
            },
            {
                name: "Angela Gray",
                src: "assets/images/avatar-angela-gray.webp",
                status: "followed you",
                post: "",
                group: "",
                private_msg: "",
                time: "5m ago",
                post_img: "",
                unread: true,
            },
            {
                name: "Jacob Thompson",
                src: "assets/images/avatar-jacob-thompson.webp",
                status: "has joined your group",
                post: "",
                group: "Chess Club",
                private_msg: "",
                time: "1 day ago",
                post_img: "",
                unread: true,
            },
            {
                name: "Rizky Hasanuddin",
                src: "assets/images/avatar-rizky-hasanuddin.webp",
                status: "sent you a private message",
                post: "",
                group: "",
                private_msg: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
                time: "5 days ago",
                post_img: "",
                unread: false,
            },
            {
                name: "Kimberly Smith",
                src: "assets/images/avatar-kimberly-smith.webp",
                status: "commented on your picture",
                post: "",
                group: "",
                private_msg: "",
                time: "1 week ago",
                post_img: "assets/images/image-chess.webp",
                unread: false,
            },
            {
                name: "Nathan Peterson",
                src: "assets/images/avatar-nathan-peterson.webp",
                status: "reacted to your recent post",
                post: "5 end-game strategies to increase your win rate",
                group: "",
                private_msg: "",
                time: "2 weeks ago",
                post_img: "",
                unread: false,
            },
            {
                name: "Anna Kim",
                src: "assets/images/avatar-anna-kim.webp",
                status: "left the group",
                post: "",
                group: "Chess Club",
                private_msg: "",
                time: "2 weeks ago",
                post_img: "",
                read: true,
              },
        ]
    }
  }
}).mount("#items");
