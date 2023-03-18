import React from "react";
import Comment from "./Comment";
import CommentsList from "./CommentsList";
const commentsData = [
  {
    name: "Parshuram Dadas",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    replies: [
      {
        name: "Parshuram Dadas",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        replies: [
          {
            name: "Parshuram Dadas",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            replies: [
              {
                name: "Parshuram Dadas",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                replies: [],
              },
              {
                name: "Parshuram Dadas",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                replies: [
                  {
                    name: "Parshuram Dadas",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                    replies: [
                      {
                        name: "Parshuram Dadas",
                        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Parshuram Dadas",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    replies: [],
  },
  {
    name: "Parshuram Dadas",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    replies: [],
  },
  {
    name: "Parshuram Dadas",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    replies: [],
  },
  {
    name: "Parshuram Dadas",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    replies: [],
  },
  {
    name: "Parshuram Dadas",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    replies: [],
  },
];
const CommentsContainer = () => {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">Comments :</h1>
      </div>
      <CommentsList comments={commentsData} />
    </>
  );
};

export default CommentsContainer;
