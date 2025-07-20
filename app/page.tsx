import Main from "./components/main";
import Secondary from "./components/secondary";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Main />
      <Secondary />
    </div>
  );
}
