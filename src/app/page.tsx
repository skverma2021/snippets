import { db } from "@/db";
import  Link  from "next/link";

const renderedSnippets = async () => {
  const snippets = await db.snippet.findMany();
  return (
    <div>
      {snippets.map((snippet) => (
        <div key={snippet.id} className="border-b border-gray-300 py-2">
          <Link href={`/snippets/${snippet.id}`} key={snippet.id} className="flex justify-between items-center border rounded p-4 hover:bg-gray-100"  >
            <div>{snippet.title}</div>
            <div>View</div>
          
          </Link>
        </div>
      ))}
    </div>
  );
}
export default async function Home() {
  return (
    <>
    <div className="flex justify-between items-center my-6">
      <h1 className ="text-xl font-bold">Snippets</h1>
      <Link href="/snippets/new">New</Link>
    </div>
    <div className="flex flex-col gap-2">{renderedSnippets()}</div>
    </>
  );
}
