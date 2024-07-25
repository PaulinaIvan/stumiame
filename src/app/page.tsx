import Image from "next/image";
import Link from "next/link";
import './globals.css'

export default function Home() {
  return (
    <main className="">
      <Link href="/sign-in">
        <button className="authButton">Sign In</button>
      </Link>
      <Link href="/sign-up">
        <button className="authButton">Sign Up</button>
      </Link>
    </main>
  );
}
