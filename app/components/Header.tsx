import Image from "next/image";

export default function Header() {
  return (
    <header className="p-4 bg-white shadow">
      <div className="max-w-6xl mx-auto flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="logo"
          width={200}
          height={200}
        />
      </div>
    </header>
  );
}