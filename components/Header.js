import Link from "next/link"

export default function Header() {
  return (
    <nav
      className="p-5  flex flex-row justify-content space-around"
      style={{
        backgroundImage: "linear-gradient(to right, #9796F0 , #FBC7D4)",
        margin: "0",
        overflow: "hidden",
        boxShadow: "inset 0 0 10px #000000",
      }}
    >
      <h1 className="py-4 px-4 font-bold text-3xl"></h1>
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
