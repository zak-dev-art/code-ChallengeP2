const BOT_COUNT = 10;

export async function getBots() {
  // Generate dynamic bots
  const bots = Array.from({ length: BOT_COUNT }, (_, i) => ({
    id: i + 1,
    name: `Bot-${i + 1}`,
    health: Math.floor(Math.random() * 100),
    damage: Math.floor(Math.random() * 50),
    armor: Math.floor(Math.random() * 80),
    bot_class: ["Support", "Medic", "Fighter", "Assault"][i % 4],
    catchphrase: "Beep boop, ready for battle!",
    avatar_url: `https://robohash.org/bot${i + 1}?size=200x200&set=set2`,
  }));
  return bots;
}

export async function deleteBot(id) {
  // Simulate delete (no backend)
  console.log(`Bot with ID ${id} would be deleted.`);
  return {};
}
