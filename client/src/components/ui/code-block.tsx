import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language: string;
  className?: string;
}

export function CodeBlock({ code, language, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("code-snippet bg-gray-800 text-gray-100 rounded-md overflow-hidden shadow-lg", className)}>
      <div className="code-header flex justify-between items-center px-4 py-2 border-b border-gray-700">
        <div className="code-language uppercase text-xs font-medium text-gray-400">{language}</div>
        <button
          onClick={copyToClipboard}
          className="code-copy-button flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="font-mono text-sm md:text-base p-4 overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}
