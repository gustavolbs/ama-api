export interface GetRoomsResponse {
  rooms: {
    id: string;
    theme: string;
  }[];
}

export async function getRooms(): Promise<GetRoomsResponse> {
  const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/rooms`);

  const data: Array<{
    ID: string;
    Theme: string;
  }> = await response.json();

  return {
    rooms: data.map((item) => {
      return {
        id: item.ID,
        theme: item.Theme,
      };
    }),
  };
}
