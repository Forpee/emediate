import React from "react";
import { RichText } from "prismic-reactjs";

function Text({ slice }) {
  return (
    <div className="post-part single container">{RichText.asText(slice)}</div>
  );
}

export default function SliceZone({ sliceZone }) {
  return <Text slice={sliceZone} />;
}
