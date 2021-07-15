import React from "react";
import { Link } from "react-router-dom";

/**
 * Not found (404) component
 */
const NotFound = () => (
  <div className="w-screen flex h-screen">
    <div className="m-auto text-center">
      <h1 className="text-9xl">404</h1>
      <h2 className=" text-7xl my-16">Document not found</h2>
      <p className=" hover:text-blue-700">
        <Link to="/">Return to homepage</Link>
      </p>
    </div>
  </div>
);

export default NotFound;
