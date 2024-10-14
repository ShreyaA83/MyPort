// BooksContent.tsx
"use client";

import React, { useEffect, useState } from "react";
import { Hourglass } from 'react-loader-spinner';

interface Book {
  title: string;
  author: string;
  isbn: string;
}

const books: Book[] = [
  { title: "Atomic Habits", author: "James Clear", isbn: "9780735211292" },
  { title: "The Alchemist", author: "Paulo Coelho", isbn: "9780061122415" },
  { title: "The Song of Achilles", author: "Madeline Miller", isbn: "9780062060624" },
  { title: "What Lies Between Us", author: "John Marrs", isbn: "9781542017022" },
  { title: "When Ashes Fall", author: "Marni Mann", isbn: "9781790378418" },
  { title: "When Breath Becomes Air", author: "Paul Kalanithi", isbn: "9780812988406" },
  { title: "The Metamorphosis", author: "Franz Kafka", isbn: "9781557427663" },
  { title: "The Happiness Advantage", author: "Shawn Achor", isbn: "9780307591548" },
  { title: "The Body keeps the Score", author: "Bessel van der Kolk", isbn: "9780143127741" },
  { title: "The Midnight Library", author: "Matt Haig", isbn: "9780525559498" },
  { title: "A Thousand Splendid Suns", author: "Khaled Hosseini", isbn: "9781594483851" },
  { title: "Anxious People", author: "Fredrik Backman", isbn: "9781501160837" },
  { title: "Gone Girl", author: "Gillian Flynn", isbn: "9780307588371" },
  { title: "A Little Life", author: "Hanya Yanagihara", isbn: "9780804172707" },
  { title: "Brother", author: "Ania Ahlborn", isbn: "9781476783734" },
  { title: "I Am Thinking of Ending Things", author: "Iain Reid", isbn: "9781501126949" },
  { title: "Believe Me", author: "Tahereh Mafi", isbn: "9780063228313" },
  { title: "Defy Me", author: "Tahereh Mafi", isbn: "9780062676401" },
  { title: "Destroy Me", author: "Tahereh Mafi", isbn: "9780062208190" },
  { title: "Fracture Me", author: "Tahereh Mafi", isbn: "9780062284839" },
  { title: "Glass Sword", author: "Victoria Aveyard", isbn: "9780062310664" },
  { title: "Ignite Me", author: "Tahereh Mafi", isbn: "9780062085579" },
  { title: "Imagine Me", author: "Tahereh Mafi", isbn: "9780062676425" },
  { title: "King's Cage", author: "Victoria Aveyard", isbn: "9780062310695" },
  { title: "Me Before You", author: "Jojo Moyes", isbn: "9780143124542" },
  { title: "Red Queen", author: "Victoria Aveyard", isbn: "9780062310644" },
  { title: "Restore Me", author: "Tahereh Mafi", isbn: "9780062676364" },
  { title: "Reveal Me", author: "Tahereh Mafi", isbn: "9780062906274" },
  { title: "Shadow Me", author: "Tahereh Mafi", isbn: "9780062906267" },
  { title: "Verity", author: "Colleen Hoover", isbn: "9781538724736" },
  { title: "Shatter Me", author: "Tahereh Mafi", isbn: "9780062085504" },
  { title: "Unravel Me", author: "Tahereh Mafi", isbn: "9780062085531" },
  { title: "War Storm", author: "Victoria Aveyard", isbn: "9780062423009" },
  { title: "It Ends with Us", author: "Colleen Hoover", isbn: "9781501110368" },
  { title: "It Starts with Us", author: "Colleen Hoover", isbn: "9781668001226" },
  { title: "My Dark Vanessa", author: "Kate Elizabeth Russell", isbn: "9780062941503" },
  { title: "Pack Up the Moon", author: "Kristan Higgins", isbn: "9780451489487" },
  { title: "Reminders of Him", author: "Colleen Hoover", isbn: "9781542025607" },
  { title: "The Girl on the Train", author: "Paula Hawkins", isbn: "9781594634024" },
  { title: "The Silent Patient", author: "Alex Michaelides", isbn: "9781250301697" },

];

const BooksContent = () => {
  const [bookData, setBookData] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBookCovers = async () => {
      const fetchedData: { [key: string]: string } = {};

      // Create an array of promises for parallel fetching
      const fetchPromises = books.map(async (book) => {
        const query = book.isbn
          ? `isbn:${book.isbn}`
          : `${book.title} ${book.author}`;

        try {
          const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&printType=books&langRestrict=en&orderBy=relevance`
          );
          const data = await response.json();
          const thumbnail = data.items?.[0]?.volumeInfo?.imageLinks?.thumbnail || "/fallback-cover.jpg";
          fetchedData[book.title] = thumbnail;
        } catch (error) {
          console.error(`Error fetching cover for ${book.title}`, error);
          fetchedData[book.title] = "/fallback-cover.jpg";
        }
      });

      // Wait for all fetch requests to finish
      await Promise.all(fetchPromises);

      setBookData(fetchedData);
      setIsLoading(false); // Stop loading once all requests complete
    };

    fetchBookCovers();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loader-container pt-40">
          <div className="spinner"></div>
          <p style={{ color: "white", textAlign: "center", justifyContent: "center" }}><Hourglass /></p>
        </div>
      ) : (
        <div
          id="books"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 pt-10 justify-center w-full"
        >
          {books.map((book) => (
            <div
              key={book.title}
              className="flex flex-col items-center"
              style={{ textAlign: "center" }}
            >
              <img
                src={bookData[book.title] || "/fallback-cover.jpg"}
                alt={`${book.title} cover`}
                loading="lazy"
                style={{ width: "150px", height: "230px", objectFit: "cover" }}
              />

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BooksContent;