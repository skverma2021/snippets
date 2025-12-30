import { db } from "@/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import * as actions from '@/actions';

type NewSnippetProps = {
 params: Promise<{ id: string }>;
}

export default async function NewSnippet(props: NewSnippetProps) {

    await new Promise((resolve) => setTimeout(resolve, 2000));
    const { id } = await props.params;
    const snippet = await db.snippet.findFirst({
        where: { id: parseInt(id) },
    });
    if (!snippet) {
        notFound();
    }
    const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);
    return <div>
        <div className="flex justify-between items-center m-4">
            <h1 className="text-3xl font-bold">
                {snippet.title}
            </h1>
            <div className="flex gap-4">
                <Link href={`/snippets/${snippet.id}/edit`} className="p-2 border rounded">Edit</Link>
                <form action={deleteSnippetAction}>
                    <button className="p-2 border rounded">Delete</button>
                </form>
            </div>
        </div>
        <pre className="border rounded p-3 bg-gray-200 border-gray-200">
            <code>{snippet.code}</code>
        </pre>
    </div>;
}
export async function generateStaticParams() {
    const snippets = await db.snippet.findMany({
        select: { id: true },
    });
    return snippets.map((snippet) => ({
        id: snippet.id.toString(),
    }));
}