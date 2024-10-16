// app/books/page.tsx
"use client";
import React from "react";
import BooksContent from "../components/sub/BooksContent"; // Adjust the path if necessary

const Books = () => {
  return (
    <div className="w-full flex flex-col items-center px-4 lg:px-0 mt-30">
      <h2 className="text-3xl text-white font-bold mb-6 text-center">
        Reading List
      </h2>
      <BooksContent />
    </div>
  );
};

export default function BooksPage() {
  return <Books />;
}
