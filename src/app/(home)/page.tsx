import Banner from "@/app/(home)/Components/Banner";
import BookList from "./Components/BookList";

export default async function Home() {
    // Data fetching
    const response = await fetch(`${process.env.BACKEND_URL}/books`, {
        // Ensure to include credentials if needed
        cache: "no-store", // Prevents caching
    });

    if (!response.ok) {
        throw new Error("An error occurred while fetching books");
    }

    const books = await response.json();
    console.log("books", books);

    return (
        <>
            <Banner />
            <BookList books={books} />
        </>
    );
}
