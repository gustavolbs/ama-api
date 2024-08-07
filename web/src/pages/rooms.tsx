import amaLogo from "../assets/ama-logo.svg";
import { Suspense } from "react";
import { Rooms } from "../components/rooms";

export function RoomsPage() {
  return (
    <div className="mx-auto max-w-[640px] flex flex-col gap-6 py-10 px-4">
      <div className="flex items-center gap-3 px-3">
        <img src={amaLogo} alt="AMA" className="h-5" />
        <p className="leading-relaxed text-zinc-300 text-center">
          Todas as salas
        </p>
      </div>

      <div className="h-px w-full bg-zinc-900" />

      <Suspense fallback={<p>Carregando...</p>}>
        <Rooms />
      </Suspense>
    </div>
  );
}
