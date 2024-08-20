import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main data-theme="dark">
      <h1>Hello</h1>
      <Link href="/users">Users</Link>
    </main>
  );
}
