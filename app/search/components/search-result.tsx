import { prisma } from "@/lib/prisma";
interface Data {
  id: string;
  title: string;
  description: string;
}
export default async function SearchResult({ query }: { query: string }) {
  if (!query) return null;

  const data: Data[] = await prisma.$queryRaw`
            SELECT id, title, description, price FROM post 
            WHERE search_vector @@ plainto_tsquery('english',${query}) limit 5; `;

  if (data.length === 0) return <p>No data found!</p>;
  console.log(data);
  return (
    <>
      <div>
        {data.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))}
      </div>
    </>
  );
}
