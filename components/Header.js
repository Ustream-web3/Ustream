import Link from "next/Link";

export default function Header() {
  return (
    <nav className="p-5 border-b-2 flex flex-row justify-content space-around">
      <h1 className="py-4 px-4 font-bold text-3xl">
        {/* <Link href="/" className="mr-4 p-6"> */}
        <b>Ustream</b> {/* </Link> */}
      </h1>
      <div className="flex flex-row items-center">
        <Link href="/movies" className="mr-4 p-6">
          Movies
        </Link>
        <Link href="/subscribe" className="mr-4 p-6">
          Subscribe
        </Link>
        <Link href="/vote" className="mr-4 p-6">
          Vote
        </Link>
      </div>
    </nav>
  );
}
