// Books.tsx
"use client";
import React from "react";
import BooksContent from "../sub/BooksContent"; // Adjust the path if necessary

const Books = () => {
  return (
    <div className="h-full w-full flex flex-col items-center">
      <BooksContent />
    </div>
  );
};

export default Books;
