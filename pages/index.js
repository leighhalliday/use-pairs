import React from "react";
import Link from "next/link";

export default function IndexPage() {
  return (
    <main>
      <h1>
        <Link href="/">
          <a>
            usePairs() <img src="/bird.png" />
          </a>
        </Link>
      </h1>
      <ul>
        <li>
          <Link href="/en/[lang]" as="/en/es">
            <a>Practice Spanish</a>
          </Link>
        </li>
        <li>
          <Link href="/en/[lang]" as="/en/fr">
            <a>Practice French</a>
          </Link>
        </li>
      </ul>
    </main>
  );
}
