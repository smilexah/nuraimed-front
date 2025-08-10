import Link from "next/link";

export default async function HomePage() {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1>Welcome to the Home Page</h1>
            <p>
                This is the home page of your Next.js application. You can
                navigate to other pages using the links below.
            </p>
            <ul>
                <li>
                    <Link href="/about">About Us</Link>
                </li>
                <li>
                    <Link href="/contact">Contact Us</Link>
                </li>
            </ul>
        </div>
    )
}