import { v4 as uuidv4 } from "uuid";

export const currentUserData = {
  profilePic:
    "https://cdn.pixabay.com/photo/2023/01/06/20/49/handsome-7702113_1280.jpg",
  userBio: [
    {
      id: 1,
      text: "Former Steering Committe Member a ",
      highlighted: "Prithvi,IIT Kharagpur",
      icon: "FaBriefcase",
    },
    {
      id: 2,
      text: "Former Summer Internship at Schlumberger",
      highlighted: "",
      icon: "FaBriefcase",
    },
    {
      id: 3,
      text: "Former Steering Committe Member (Tech Team) at ",
      highlighted: "Spring Fest, IIIT Kharagpur",
      icon: "FaBriefcase",
    },
    {
      id: 4,
      text: "Former Student Mentor at ",
      highlighted: "Student Welfare Group - SWG, IIT Kharagpur",
      icon: "FaBriefcase",
    },
    {
      id: 5,
      text: "Former Summer Internship at ",
      highlighted: "Cairn Oil and Gas, Vedanta Limited",
      icon: "FaBriefcase",
    },
    {
      id: 6,
      text: "Former Summer Internship at ",
      highlighted: "ONGC Limited",
      icon: "FaBriefcase",
    },
    {
      id: 7,
      text: "Studied At ",
      highlighted: " IIT Kharagpur",
      icon: "FaBriefcase",
    },
    {
      id: 8,
      text: "Went to ",
      highlighted: "Delhi Public School,Jaipur",
      icon: "FaBriefcase",
    },
    {
      id: 9,
      text: "SWent to Subodh Public Schoo,airport ",
      highlighted: "",
      icon: "FaBriefcase",
    },
    {
      id: 10,
      text: "Lives in  ",
      highlighted: "Mumbai, Maharashtra",
      icon: "FaBriefcase",
    },
    {
      id: 11,
      text: "From ",
      highlighted: " Jaipur,Rajasthan",
      icon: "FaBriefcase",
    },
    {
      id: 12,
      text: "Followed by ",
      highlighted: "241 People",
      icon: "FaBriefcase",
    },
  ],
};

export const DB = [
  {
    userId: 1,
    imageUrl: "https://shorturl.at/dwOSY",
    name: "John Smith",
    isFriend: false,
    posts: [
      {
        postId: uuidv4(),
        postedContent: "https://shorturl.at/yCKW7",
        postedType: "IMAGE",
        timeLine: 10,
        postDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel consequat nisi. Donec ut semper dolor. Sed eget bibendum turpis. Integer at tristique erat. Duis at purus ultricies, placerat metus vitae, efficitur ligula. Morbi posuere, justo eget luctus lobortis, enim urna viverra odio, sed efficitur magna purus id ligula. Ut vel consequat orci, vitae varius odio. Phasell",
        likes: 2001,
        disLikes: 100,
        currentUserLiked: false,
        currentUserDisliked: false,
        currentUserFollowing: false,
        comments: [
          {
            commentId: uuidv4(),
            commentorId: 2,
            commentedProfile: "https://shorturl.at/dAG79",
            commentText:
              "velit lobortis et. Fusce efficitur malesuada maximus. Morbi ac metus pretium, consectetur mi sit amet, sagittis mi. Cras sit amet odio et mi semper vulputate eget at ",
            commentorName: "Alice",
          },
          {
            commentId: uuidv4(),
            commentorId: 3,
            commentedProfile: "https://shorturl.at/enK14",
            commentText:
              "malesuada maximus. Morbi ac metus pretium, consectetur mi sit amet, sagittis mi. Cras sit amet odio et mi semper vulputate eget at jsdf hsayfsdfsd jasfd",
            commentorName: "Claire",
          },
        ],
      },
    ],
    userBio: [
      {
        id: 1,
        text: " studies in  ",
        highlighted: "Prithvi,IIT Kharagpur",
        icon: "FaBriefcase",
      },
      {
        id: 2,
        text: "internship at ",
        highlighted: "",
        icon: "FaBriefcase",
      },
      {
        id: 3,
        text: "Former Steering Committe Member (Tech Team) at ",
        highlighted: "Spring Fest, IIIT Kharagpur",
        icon: "FaBriefcase",
      },
      {
        id: 4,
        text: "Former Student Mentor at ",
        highlighted: "Student Welfare Group - SWG, IIT Kharagpur",
        icon: "FaBriefcase",
      },
      {
        id: 5,
        text: "Former Summer Internship at ",
        highlighted: "Cairn Oil and Gas, Vedanta Limited",
        icon: "FaBriefcase",
      },
      {
        id: 6,
        text: "Former Summer Internship at ",
        highlighted: "ONGC Limited",
        icon: "FaBriefcase",
      },
      {
        id: 7,
        text: "Studied At ",
        highlighted: " IIT Kharagpur",
        icon: "FaBriefcase",
      },
      {
        id: 8,
        text: "Went to ",
        highlighted: "Delhi Public School,Jaipur",
        icon: "FaBriefcase",
      },
      {
        id: 9,
        text: "SWent to Subodh Public Schoo,airport ",
        highlighted: "",
        icon: "FaBriefcase",
      },
    ],
  },

  {
    userId: 2,
    imageUrl: "https://shorturl.at/dAG79",
    name: "Alice",
    isFriend: false,
    posts: [
      {
        postId: uuidv4(),

        postedContent: "https://shorturl.at/aefo7",
        postedType: "VIDEO",
        timeLine: 10,
        postDescription:
          "adaskd dsjfkshf jfsd fjufs fusay auqywr ewrkuyf sdfhysaf uytewr qurewr ukyr fmdhsfuoew kuyewr asduysaf sdfkhysgfsa fhjfd sdfhsdgf kewyret ektje tkuyrwer fkhfyw",
        likes: 201,
        disLikes: 1090,
        currentUserLiked: false,
        currentUserDisliked: false,
        currentUserFollowing: false,
        comments: [
          {
            commentId: uuidv4(),
            commentorId: 3,
            commentedProfile: "https://shorturl.at/enK14",
            commentText:
              "velit lobortis et. Fusce efficitur malesuada maximus. Morbi ac metus pretium, consectetur mi sit amet, sagittis mi. Cras sit amet odio et mi semper vulputate eget at ",
            commentorName: "Claire",
          },
          {
            commentId: uuidv4(),
            commentorId: 4,
            commentedProfile: "https://shorturl.at/joOU9",
            commentText:
              "malesuada maximus. Morbi ac metus pretium, consectetur mi sit amet, sagittis mi. Cras sit amet odio et mi semper vulputate eget at jsdf hsayfsdfsd jasfd",
            commentorName: "David",
          },
          {
            commentId: uuidv4(),
            commentorId: 1,
            commentedProfile: "https://shorturl.at/dwOSY",
            commentText:
              "jsaasdfhjfds ksdjf sdkjasfd sdkfs fdkdsfy ctetur mi sit amet, sagittis mi. Cras sit amet odio et mi semper vulputate eget at jsdf hsayfsdfsd jasfd",
            commentorName: "John Smith",
          },
        ],
      },
    ],
    userBio: [
      {
        id: 1,
        text: "Born on",
        highlighted: "10th Nov ",
        icon: "FaBriefcase",
      },
      {
        id: 2,
        text: "intersdf  ak adsf nship at ",
        highlighted: "",
        icon: "FaBriefcase",
      },
      {
        id: 3,
        text: "Former Steering Committe Member (Tech Team) at ",
        highlighted: "Spring Fest, IIIT Kharagpur",
        icon: "FaBriefcase",
      },

      {
        id: 7,
        text: "Studied At ",
        highlighted: " IIT Kharagpur",
        icon: "FaBriefcase",
      },
      {
        id: 8,
        text: "Went to ",
        highlighted: "Delhi Public School,Jaipur",
        icon: "FaBriefcase",
      },
      {
        id: 9,
        text: "SWent to Subodh Public Schoo,airport ",
        highlighted: "",
        icon: "FaBriefcase",
      },
    ],
  },
  {
    userId: 3,
    imageUrl: "https://shorturl.at/enK14",
    name: "Claire",
    isFriend: false,
    posts: [
      {
        postId: uuidv4(),

        postedContent: "https://shorturl.at/bz489",
        postedType: "IMAGE",
        timeLine: 10,
        postDescription:
          "some randomtext goes here some randomtext goes here some randomtext goes heresome randomtext goes here some randomtext goes heresome randomtext goes heresome randomtext goes heresome randomtext goes heresome randomtext goes here",
        likes: 101,
        disLikes: 13,
        currentUserLiked: false,
        currentUserDisliked: false,
        currentUserFollowing: false,
        comments: [
          {
            commentId: uuidv4(),
            commentedProfile: "https://shorturl.at/dwOSY",
            commentorId: 1,
            commentText:
              "scome comment text goes here here come comment text goes here here come comment text goes here herecome comment text goes here here come comment text goes here here",
            commentorName: "John Smith",
          },
          {
            commentId: uuidv4(),
            commentedProfile: "https://shorturl.at/ekvyD",
            commentorId: 5,
            commentText:
              "come comment text goes here here come comment text goes here here come comment text goes here herecome comment text goes here here come comment text goes here here",
            commentorName: "Benjamin",
          },
        ],
      },
    ],
    userBio: [
      {
        id: 1,
        text: "kjsa fkasjdf kfdsa fk",
        highlighted: "10th Nov ",
        icon: "FaBriefcase",
      },

      {
        id: 8,
        text: "Went to ",
        highlighted: "Delhi Public School,Jaipur",
        icon: "FaBriefcase",
      },
      {
        id: 9,
        text: "SWent to Subodh Public Schoo,airport ",
        highlighted: "",
        icon: "FaBriefcase",
      },
      {
        id: 2,
        text: "intersdf  ak adsf nship at ",
        highlighted: "",
        icon: "FaBriefcase",
      },
      {
        id: 3,
        text: "Former Steering Committe Member (Tech Team) at ",
        highlighted: "Spring Fest, IIIT Kharagpur",
        icon: "FaBriefcase",
      },
      {
        id: 7,
        text: "Studied At ",
        highlighted: " IIT Kharagpur",
        icon: "FaBriefcase",
      },
    ],
  },

  {
    userId: 4,
    imageUrl: "https://shorturl.at/joOU9",
    name: "David",
    isFriend: false,
    posts: [
      {
        postId: uuidv4(),

        postedContent: "https://shorturl.at/yCKW7",
        postedType: "IMAGE",
        timeLine: 10,
        postDescription:
          "nmsadf hjgaf sajdf asjdfwe fjgfds fchc cjhfa sdfksaht fskdfujgsadf kgfrsaf dskyfgasd ssfdjhdsf kjhsgdkfsaf sdkf yujfsdfj kufygdsf akjdgfa sfksjdfg kjdfhg asfkjsadgfk dsfhgkdsf kdsa",
        likes: 304,
        disLikes: 127,
        currentUserLiked: false,
        currentUserDisliked: false,
        currentUserFollowing: false,
        comments: [
          {
            commentId: uuidv4(),
            commentorId: 2,
            commentedProfile: "https://shorturl.at/dAG79",
            commentText:
              "velit lobortis et. Fusce efficitur malesuada maximus. Morbi ac metus pretium, consectetur mi sit amet, sagittis mi. Cras sit amet odio et mi semper vulputate eget at ",
            commentorName: "Alice",
          },
          {
            commentId: uuidv4(),
            commentorId: 5,
            commentedProfile: "https://shorturl.at/ekvyD",
            commentText:
              "malesuada maximus. Morbi ac metus pretium, consectetur mi sit amet, sagittis mi. Cras sit amet odio et mi semper vulputate eget at jsdf hsayfsdfsd jasfd",
            commentorName: "Benjamin",
          },
        ],
      },
    ],
    userBio: [
      {
        id: 1,
        text: "kjsa fkasjdf kfdsa fk",
        highlighted: "10th Nov ",
        icon: "FaBriefcase",
      },

      {
        id: 2,
        text: "intersdf  ak adsf nship at ",
        highlighted: "",
        icon: "FaBriefcase",
      },

      {
        id: 8,
        text: "Went to ",
        highlighted: "Delhi Public School,Jaipur",
        icon: "FaBriefcase",
      },
      {
        id: 7,
        text: "Studied At ",
        highlighted: " IIT Kharagpur",
        icon: "FaBriefcase",
      },
      {
        id: 9,
        text: "SWent to Subodh Public Schoo,airport ",
        highlighted: "",
        icon: "FaBriefcase",
      },

      {
        id: 3,
        text: "Former Steering Committe Member (Tech Team) at ",
        highlighted: "Spring Fest, IIIT Kharagpur",
        icon: "FaBriefcase",
      },
    ],
  },

  {
    userId: 5,
    imageUrl: "https://shorturl.at/ekvyD",
    name: "Benjamin",
    isFriend: false,
    posts: [
      {
        postId: uuidv4(),

        postedContent: "https://shorturl.at/yCKW7",
        postedType: "IMAGE",

        timeLine: 10,

        postDescription:
          "some randomtext goes here some randomtext goes here some randomtext goes heresome randomtext goes here some randomtext goes heresome randomtext goes heresome randomtext goes heresome randomtext goes heresome randomtext goes here",
        likes: 771,
        disLikes: 11,
        currentUserLiked: false,
        currentUserDisliked: false,
        currentUserFollowing: false,
        comments: [
          {
            commentId: uuidv4(),
            commentorId: 1,
            commentedProfile: "https://shorturl.at/dwOSY",
            commentText:
              "asfdka ,d kasdf lasurwer    efficitur malesuada maximus. Morbi ac metus pretium, consectetur mi sit amet, sagittis mi. Cras sit amet odio et mi semper vulputate eget at ",
            commentorName: "John Smith",
          },
          {
            commentId: uuidv4(),
            commentorId: 4,
            commentedProfile: "https://shorturl.at/joOU9",
            commentText:
              "malesuada maximus. Morbi ac metus pretium, consectetur mi sit amet, sagittis mi. Cras sit amet odio et mi semper vulputate eget at jsdf hsayfsdfsd jasfd",
            commentorName: "David",
          },
          {
            commentId: uuidv4(),
            commentorId: 2,
            commentedProfile: "https://shorturl.at/dAG79",
            commentText:
              "malesuada maximus. Morbi ac metus pretium, consectetur mi sit amet, sagittis mi. Cras sit amet odio et mi semper vulputate eget at jsdf hsayfsdfsd jasfd",
            commentorName: "Alice",
          },
        ],
      },
    ],
    userBio: [
      {
        id: 8,
        text: "Went to ",
        highlighted: "Delhi Public School,Jaipur",
        icon: "FaBriefcase",
      },
      {
        id: 7,
        text: "Studied At ",
        highlighted: " IIT Kharagpur",
        icon: "FaBriefcase",
      },
      {
        id: 1,
        text: "kjsa fkasjdf kfdsa fk",
        highlighted: "10th Nov ",
        icon: "FaBriefcase",
      },

      {
        id: 2,
        text: "intersdf  ak adsf nship at ",
        highlighted: "",
        icon: "FaBriefcase",
      },

      {
        id: 9,
        text: "SWent to Subodh Public Schoo,airport ",
        highlighted: "",
        icon: "FaBriefcase",
      },

      {
        id: 3,
        text: "Former Steering Committe Member (Tech Team) at ",
        highlighted: "Spring Fest, IIIT Kharagpur",
        icon: "FaBriefcase",
      },
    ],
  },
  {
    userId: 6,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2oxj90-ICFaxLxSv-LDrSWqraVQc57EYQwWwVprf-jA&s",
    name: "Andrew",
    isFriend: false,
    posts: [
      {
        postId: uuidv4(),
        postedContent: "https://shorturl.at/aefo7",
        postedType: "VIDEO",
        timeLine: 10,
        postDescription:
          "adaskd dsjfkshf jfsd fjufs fusay auqywr ewrkuyf sdfhysaf uytewr qurewr ukyr fmdhsfuoew kuyewr asduysaf sdfkhysgfsa fhjfd sdfhsdgf kewyret ektje tkuyrwer fkhfyw",
        likes: 201,
        disLikes: 1090,
        currentUserLiked: false,
        currentUserDisliked: false,
        currentUserFollowing: false,
        comments: [
          {
            commentId: uuidv4(),
            commentorId: 3,
            commentedProfile: "https://shorturl.at/enK14",
            commentText:
              "velit lobortis et. Fusce efficitur malesuada maximus. Morbi ac metus pretium, consectetur mi sit amet, sagittis mi. Cras sit amet odio et mi semper vulputate eget at ",
            commentorName: "Claire",
          },
          {
            commentId: uuidv4(),
            commentorId: 4,
            commentedProfile: "https://shorturl.at/joOU9",
            commentText:
              "malesuada maximus. Morbi ac metus pretium, consectetur mi sit amet, sagittis mi. Cras sit amet odio et mi semper vulputate eget at jsdf hsayfsdfsd jasfd",
            commentorName: "David",
          },
          {
            commentId: uuidv4(),
            commentorId: 1,
            commentedProfile: "https://shorturl.at/dwOSY",
            commentText:
              "jsaasdfhjfds ksdjf sdkjasfd sdkfs fdkdsfy ctetur mi sit amet, sagittis mi. Cras sit amet odio et mi semper vulputate eget at jsdf hsayfsdfsd jasfd",
            commentorName: "John Smith",
          },
        ],
      },
    ],
    userBio: [
      {
        id: 1,
        text: "Born on",
        highlighted: "10th Nov ",
        icon: "FaBriefcase",
      },
      {
        id: 2,
        text: "intersdf  ak adsf nship at ",
        highlighted: "",
        icon: "FaBriefcase",
      },
      {
        id: 3,
        text: "Former Steering Committe Member (Tech Team) at ",
        highlighted: "Spring Fest, IIIT Kharagpur",
        icon: "FaBriefcase",
      },

      {
        id: 7,
        text: "Studied At ",
        highlighted: " IIT Kharagpur",
        icon: "FaBriefcase",
      },
      {
        id: 8,
        text: "Went to ",
        highlighted: "Delhi Public School,Jaipur",
        icon: "FaBriefcase",
      },
      {
        id: 9,
        text: "SWent to Subodh Public Schoo,airport ",
        highlighted: "",
        icon: "FaBriefcase",
      },
    ],
  },
];
