import { useState } from "react";

const jsonData = [
  {
    id: 1,
    text: "This is the first comment!",
    author: "User1",
    replies: [
      {
        id: 2,
        text: "Replying to the first comment.",
        author: "User2",
        replies: [],
      },
      {
        id: 3,
        text: "Another reply to the first comment.",
        author: "User3",
        replies: [
          {
            id: 4,
            text: "Nested reply to the previous reply.",
            author: "User1",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    text: "This is the second comment!",
    author: "User4",
    replies: [],
  },
];
function Comment({ data, handleClick, viewChildren, style = {} }) {
  return (
    <>
      {data.map(({ text, replies, id }) => (
        <div style={{ ...style }}>
          <div style={{ display: "flex" }}>
            <li>{text}</li>
            {replies.length > 0 && (
              <a href="#d" onClick={() => handleClick(id)}>
                View Replies
              </a>
            )}
          </div>
          {viewChildren[id] && replies.length > 0 && (
            <Comment
              style={{ marginLeft: 20 }}
              data={replies}
              handleClick={handleClick}
              viewChildren={viewChildren}
            />
          )}
        </div>
      ))}
    </>
  );
}

export default function App() {
  const [data, setData] = useState(jsonData);
  const [viewChildren, setViewChildren] = useState({});

  const handleClick = (value) => {
    setViewChildren({
      ...viewChildren,
      [value]: !viewChildren[value],
    });
  };

  return (
    <ul>
      <Comment
        data={data}
        handleClick={handleClick}
        viewChildren={viewChildren}
        style={{}}
      />
    </ul>
  );
}
