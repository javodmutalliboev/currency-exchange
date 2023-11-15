"use client";
import "../styles/header.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <div id="i1">
      <div className={`link ${pathname === "/" ? "tab active" : "tab"}`}>
        <Link href="/" as={"/"}>
          Converter
        </Link>
      </div>
      <div
        className={`link ${pathname === "/currencies" ? "tab active" : "tab"}`}
      >
        <Link href="/currencies" as={"currencies"}>
          Currencies
        </Link>
      </div>
    </div>
  );
}
