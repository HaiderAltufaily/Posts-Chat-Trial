import React from "react";
import Card from "../ui/Card";
import Reply from "./Reply";
import { v4 as uuid } from "uuid";

function ReplyList({ replies }) {
  return (
    <Card>
      {replies.map((reply) => (
        <Reply key={uuid()} reply={reply} />
      ))}
    </Card>
  );
}

export default ReplyList;
