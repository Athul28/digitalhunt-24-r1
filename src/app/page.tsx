import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-24">
      <h2 className="text-center mb-12">Puzzle List</h2>

      <p>Round1 puzzles</p>
     <ul>

      <li><Link href={"/responsive"} className="underline text-blue-500 italic">1. responsive puzzle</Link></li>
      <li className="text-sm">*add new puzzles here*</li> 
        
     </ul>

     <br />
     <p>Round2 puzzles</p>
     <ul>
      <li><Link href={""} className="underline text-blue-500 italic">...</Link></li>
     </ul>
    </main>
  );
}
