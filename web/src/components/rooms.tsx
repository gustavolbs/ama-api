import { useSuspenseQuery } from "@tanstack/react-query";
import { getRooms } from "../http/get-rooms";
import { Link } from "react-router-dom";

export function Rooms() {
  const { data } = useSuspenseQuery({
    queryKey: ["rooms"],
    queryFn: () => getRooms(),
  });

  return (
    <ol className="list-decimal list-outside px-3 space-y-8">
      {data?.rooms.map((room) => {
        return (
          <div key={room.id} className="flex flex-col">
            <Link to={`/room/${room.id}`}>
              <li className="ml-4 leading-relaxed text-zinc-100 data-[answered=true]:opacity-50 data-[answered=true]:pointer-events-none">
                {room.theme}
              </li>
              <span className="text-sm text-zinc-500 truncate">
                Código da sala: <span className="text-zinc-300">{room.id}</span>
              </span>
            </Link>
          </div>
        );
      })}
    </ol>
  );
}
