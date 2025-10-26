import { useEffect, useState } from "react";
import * as shiki from "shiki";
import Dots from './Dots'

export default function Codespace({ code, lang = "python" }) {
  const [html, setHtml] = useState("");

  useEffect(() => {
    async function load() {
      const highlighter = await shiki.getSingletonHighlighter({
        themes: ["rose-pine"],
        langs: [lang],
      });

      const html = highlighter.codeToHtml(code, {
        lang,
        theme: "rose-pine",
      });

      setHtml(html);
    }

    load();
  }, [code, lang]);

  return (
    <div className="border-gray-700 rounded-r-4xl border opacity-40 hover:rotate-2 hover:scale-110 duration-300 hover:opacity-100 ">
        <div className="mt-3 ml-3">
            <Dots />
        </div>
        <h1 className="text-center text-3xl font-mono">Code Space</h1>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        className="rounded-xl overflow-hidden font-mono text-sm p-5 "
      />
    </div>

  );
}
