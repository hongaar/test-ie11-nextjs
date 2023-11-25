import { Nav } from "../Nav";

export default function Server() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>this should be rendered on the server</p>
      <Nav />
    </main>
  )
}
