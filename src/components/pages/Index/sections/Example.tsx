import React from "react";

import { Button } from "~/components/core/Button";

import { useDialogs } from "~/hooks/useDialogs";

import { useController } from "~/hooks/useController";

export const Example = () => {
  const { useGetExample, usePostExample } = useController();

  const { openDialog } = useDialogs();

  const { data: queryData } = useGetExample("2");
  const { mutate, data: postData } = usePostExample();

  const handlePost = () => {
    mutate({ id: "12345" }); // Data from the state to post
  };

  return (
    <div>
      <Button variant="default" handleClick={() => openDialog("example")}>
        openDialog
      </Button>
      {queryData?.example && queryData.example.message}
      <br />
      <Button variant="default" handleClick={() => handlePost()}>
        PostExample
      </Button>
      {postData?.message}
    </div>
  );
};
