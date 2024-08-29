import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-24">
      <h2 className="text-center mb-12">Puzzle List</h2>
     <ul>
      
      <li><Link href={"/responsive"} className="underline text-blue-500 italic">responsive puzzle</Link></li>
      <li><Link href={""} className="underline text-blue-500 italic">add new puzzles here</Link></li> 
        
     </ul>
    </main>
  );
}
