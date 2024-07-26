import Image from "next/image";
import Link from "next/link";
import './globals.css'
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

export default function Home() {
  return (
    <div className="mainContainer">
      <Link href="/sign-in">
        <div className="circleContainer">
          <button className="authButton"></button>
        </div>
        <button className="buttonText">Sign In</button>
      </Link>
      <Link href="/sign-up">
        <div className="circleContainer">
          <button className="authButton"></button>
        </div>
        <button className="buttonText">Sign Up</button>
      </Link>
    </div>
  );
}