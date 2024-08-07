markMessageAsSolved;
interface MarkMessageAsSolvedRequest {
  roomId: string;
  messageId: string;
}

export async function markMessageAsSolved({
  messageId,
  roomId,
}: MarkMessageAsSolvedRequest) {
  await fetch(
    `${
      import.meta.env.VITE_APP_API_URL
    }/rooms/${roomId}/messages/${messageId}/answer`,
    {
      method: "PATCH",
    }
  );
}
