"use client";
import { useEffect, useState } from "react";
import { PayloadLexicalReactRendererContent } from "@atelier-disko/payload-lexical-react-renderer";

interface TableOfContentsProps {
  content: PayloadLexicalReactRendererContent;
}

interface TocItem {
  id: string;
  text: string;
  level: number;
}
export function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TocItem[]>([]);

  useEffect(() => {
    // Extract headings from the content
    const extractHeadings = () => {
      const mainElement = document.querySelector("main");
      if (!mainElement) return;

      const headingElements = mainElement.querySelectorAll(
        "h1, h2, h3, h4, h5, h6",
      );
      const tocItems: TocItem[] = [];

      headingElements.forEach((heading) => {
        const level = parseInt(heading.tagName[1]);
        const text = heading.textContent || "";
        const id = heading.id || text.toLowerCase().replace(/\s+/g, "-");

        // Ensure the heading has an ID for anchor links
        if (!heading.id) {
          heading.id = id;
        }

        tocItems.push({
          id,
          text,
          level,
        });
      });

      setHeadings(tocItems);
    };

    // Wait for the content to be rendered
    const timer = setTimeout(extractHeadings, 100);
    return () => clearTimeout(timer);
  }, [content]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className=" mb-8">
      <ul className="space-y-1">
        <h2 className="text-lg font-semibold mb-2">Inhaltsverzeichnis</h2>
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ marginLeft: `${(heading.level - 1) * 1}rem` }}
            className="text-gray-600 hover:text-gray-900"
          >
            <a href={`#${heading.id}`} className="hover:underline">
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
