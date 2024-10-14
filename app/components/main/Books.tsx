// Books.tsx
"use client";
import React from "react";
import BooksContent from "../sub/BooksContent"; // Adjust the path if necessary

const Books = () => {
  return (
    <div className="h-full w-full flex flex-col items-center">
      <h2 className="text-2xl text-white mb-6">My Reading List</h2>
      <BooksContent />
    </div>
  );
};

export default Books;
