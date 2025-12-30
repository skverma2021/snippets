'use client';
import React from 'react';
import type { Snippet } from '@prisma/client';
// import { Editor } from "@monaco-editor/react";
import { useState } from 'react';
// import * as monaco from "monaco-editor";

import * as actions from '@/actions';


interface SnippetEditFormProps {
    // Define any props if needed
    snippet: Snippet;
}
export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
    const [code, setCode] = useState<string>(snippet?.code || '');
    // const handleEditorChange = (value: string | undefined) => {
    //     setCode(value || '');
    // };
const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

    return <div>
        {/* <Editor
            height="40 vh"
            defaultLanguage="javascript"
            defaultValue={snippet?.code || '// Start coding...'}
            theme='vs-dark'
            options={{ minimap: { enabled: false } }}
            onChange={handleEditorChange}
        /> */}
        <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            style={{ width: '100%', height: '400px', fontFamily: 'monospace', fontSize: '14px' }}
        />
        {/* <button onClick={handleSave}>Save</button> */}
        <form action={editSnippetAction}>
            <button type="submit" className='p-2 border rounded'>Save</button>
        </form>
    </div>;
}