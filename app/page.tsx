import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div>
        <h1 className="text-2xl font-bold">Team:</h1>
        <ul>
          <li>
            <Link href={"https://github.com/rubenofen"} target="_blank">
              Rubén Sahagún Benítez
            </Link>
          </li>
          <li>
          <Link href={"https://github.com/22guerrabruno"} target="_blank">
              Bruno Guerra
            </Link>
            </li>
            <li>
          <Link href={"https://github.com/Angelheredia20"} target="_blank">
              Angel Heredia
            </Link>
            </li>
        </ul>
      </div>
    </main>
  );
}
