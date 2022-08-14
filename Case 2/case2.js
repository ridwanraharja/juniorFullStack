"use strict";
// CASE 2
const comments = [
  {
    commentId: 1,
    commentContent: "Hai",
    replies: [
      {
        commentId: 11,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 111,
            commentContent: "Haai juga hai jugaa",
          },
          {
            commentId: 112,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
      {
        commentId: 12,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 121,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
    ],
  },
  {
    commentId: 2,
    commentContent: "Halooo",
  },
];

const counting = (comment) => {
  if (comment.replies) {
    return (
      1 +
      comment.replies.reduce((total, reply) => {
        return total + counting(reply);
      }, 0)
    );
  } else {
    return 1;
  }
};

const totalComments = comments.reduce((total, comment) => {
  return total + counting(comment);
}, 0);

console.log(totalComments);
