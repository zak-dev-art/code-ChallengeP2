import React, { useEffect, useState } from "react";
import BotCollection from "./Components/BotCollection";
import YourBotArmy from "./Components/YourBotArmy";
import "./index.css";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Generate mock bots instead of fetching from db.json
  useEffect(() => {
    async function load() {
      try {
        const classes = ["Support", "Medic", "Assault", "Defender", "Captain"];

        const data = Array.from({ length: 20 }).map((_, i) => ({
          id: i + 1,
          name: `Bot-${i + 1}`,
          health: Math.floor(Math.random() * 100),
          damage: Math.floor(Math.random() * 50),
          armor: Math.floor(Math.random() * 100),
          bot_class: classes[Math.floor(Math.random() * classes.length)],
          catchphrase: "Beep boop! Ready for duty!",
          avatar_url: `https://robohash.org/${i}?size=200x200&set=set1`,
        }));

        // Simulate network delay
        await new Promise((r) => setTimeout(r, 800));

        setBots(data);
      } catch (e) {
        setError("Failed to generate bot data");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // ✅ Enlist bot (if not already in army)
  function handleEnlist(bot) {
    if (army.find((b) => b.id === bot.id)) return;
    setArmy((prev) => [...prev, bot]);
  }

  // ✅ Release bot (deselect from army)
  function handleRelease(botId) {
    setArmy((prev) => prev.filter((b) => b.id !== botId));
  }

  // ✅ Discharge bot (delete from both lists)
  async function handleDischarge(botId) {
    const prevBots = bots;
    const prevArmy = army;
    try {
      setBots((prev) => prev.filter((b) => b.id !== botId));
      setArmy((prev) => prev.filter((b) => b.id !== botId));
      // Simulate delete delay
      await new Promise((r) => setTimeout(r, 300));
    } catch (e) {
      // rollback if something goes wrong
      setBots(prevBots);
      setArmy(prevArmy);
      setError("Failed to discharge bot");
    }
  }

  if (loading) return <div className="loading">Loading bots…</div>;
  if (error) return <div className="error" role="alert">Error: {error}</div>;

  return (
    <div className="app">
      <h1>🤖 Bot Battlr</h1>

      <YourBotArmy
        army={army}
        onRelease={handleRelease}
      />

      <BotCollection
        bots={bots}
        onEnlist={handleEnlist}
        onDischarge={handleDischarge}
      />
    </div>
  );
}

export default App;
