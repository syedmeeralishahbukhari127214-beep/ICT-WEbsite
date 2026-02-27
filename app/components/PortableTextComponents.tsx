import Link from "next/link";

export const portableTextComponents = {
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold mt-10 mb-4">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-semibold mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-semibold mt-6 mb-3">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl font-semibold mt-5 mb-2">{children}</h4>
    ),
    normal: ({ children }: any) => (
      <p className="text-gray-700 leading-7 mb-4">{children}</p>
    ),
  },

  marks: {
    strong: ({ children }: any) => (
      <strong className="font-semibold text-black">{children}</strong>
    ),

    link: ({ value, children }: any) => {
      const rel = !value?.href?.startsWith("/")
        ? "noopener noreferrer"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="text-blue-600 underline hover:text-blue-800"
        >
          {children}
        </Link>
      );
    },
  },

  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-6 mb-4">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal pl-6 mb-4">{children}</ol>
    ),
  },

  listItem: {
    bullet: ({ children }: any) => (
      <li className="mb-2">{children}</li>
    ),
    number: ({ children }: any) => (
      <li className="mb-2">{children}</li>
    ),
  },

  // 🔥 WORKING TABLE RENDERER
  types: {
    table: ({ value }: any) => {
      const rows = value?.rows || [];
      if (!rows.length) return null;

      return (
        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-300 text-sm">
            <tbody>
              {rows.map((row: any, rowIndex: number) => (
                <tr
                  key={rowIndex}
                  className={rowIndex % 2 === 0 ? "bg-gray-50" : ""}
                >
                  {row.cells?.map((cell: string, cellIndex: number) => (
                    <td
                      key={cellIndex}
                      className="border border-gray-300 px-4 py-2"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },
  },
};
