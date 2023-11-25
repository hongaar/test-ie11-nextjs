"use client"

import { useEffect, useState } from "react";
import { Nav } from "../Nav";

export default function Client() {
  const [message, setMessage] = useState("loading client component...");

  useEffect(() => {
    setMessage("this should be rendered on the client")
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>{message}</p>
      <Nav />
    </main>)
}
