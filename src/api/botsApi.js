const BASE = "http://localhost:8001";

export async function getBots() {
  const res = await fetch(`${BASE}/bots`);
  if (!res.ok) throw new Error("Failed to fetch bots");
  return res.json();
}

export async function deleteBot(id) {
  const res = await fetch(`${BASE}/bots/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete bot");
  return {};
}
