import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = function () {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          name="Sidhu"
          time="Today at 4.56Pm"
          post="Nice Blog"
          image={faker.image.avatar()}
        ></CommentDetail>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          name="Siddharth"
          time="Today at 8.06Am"
          post="Better to Post"
          image={faker.image.avatar()}
        ></CommentDetail>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          name="SomeOne"
          time="Today at 5.60Pm"
          post="Great Phone"
          image={faker.image.avatar()}
        ></CommentDetail>
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

// Semantic Ui css link ---> https://semantic-ui.com/  ==> Def: [semantic is a Opensource Css framework]
// semantic CSS link ==> https://cdnjs.com/libraries/semantic-ui
