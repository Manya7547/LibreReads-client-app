import Banner from "@/app/(home)/Components/Banner";
import Image from "next/image";
import BookList from "./Components/BookList";

export default async function Home() {
  //data fetching 
  const response = await fetch(`${process.env.BACKEND_URL}/books`);
  if(!response.ok){
    throw new Error('An error occured while fetching books');
  }

  const books = await response.json();
  console.log('books',books);
  //server component 
  //client component 

  return (
  <>
    <Banner />
    <BookList books={books}/>
  </>
  );
}
