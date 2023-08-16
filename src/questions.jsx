import React, { useState } from "react";
import { BsFillPlusCircleFill, BsFillDashCircleFill } from "react-icons/bs";

export default function Questions({ questions }) {
  return (
    <div>
      <ul>
        {questions.map((question) => (
          <Question key={questions.id} question={question} />
        ))}
      </ul>
    </div>
  );
}

function Question({ question }) {
  const [seeMore, setSeeMore] = useState(false);
  const { id, title, info } = question;

  function handleClick(params) {
    setSeeMore(!seeMore);
  }

  return (
    <li>
      <div className="content">
        <h2>{title}</h2>
        <div>
          {seeMore ? (
            <BsFillDashCircleFill
              className="question-btn"
              onClick={handleClick}
            />
          ) : (
            <BsFillPlusCircleFill
              className="question-btn"
              onClick={handleClick}
            />
          )}
        </div>
      </div>
      <p>{seeMore ? info : null}</p>
    </li>
  );
}
