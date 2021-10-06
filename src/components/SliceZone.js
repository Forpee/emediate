import React from "react";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "../prismic-configuration";


export default function SliceZone({ sliceZone }) {
  return <div>
    <RichText render={sliceZone}
      linkResolver={linkResolver}
    />
  </div>
}
