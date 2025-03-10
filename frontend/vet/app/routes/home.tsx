import type { Route } from "./+types/home";
import { Welcome } from "../components/section/landing";
import Navbar from "~/components/navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
    <Navbar/>
      <Welcome />
    </>
  );
}
