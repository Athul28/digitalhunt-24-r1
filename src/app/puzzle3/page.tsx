'use client'
import Link from "next/link";
import { useRef } from "react";

export default function Page() {
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const showAnswer = () => {
    let answer = ""
    //api call to the answer
    fetch("http://localhost:5000/show-answer")
    .then((data)=> data.text())
    .then((ans)=> {answer=ans})
    .then(()=>{
      if(btnRef.current) {
        btnRef.current.textContent = answer;
      }
    })
  }

  return (
    <button style={{border: "2px solid white", padding: "2px"}} onClick={showAnswer} ref={btnRef}>
      <Link href={"/"}>Click me</Link>
    </button>
  );
}
