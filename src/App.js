import React, { useEffect, useState } from "react";
import { getBots, deleteBot } from "./api/botsApi";
import BotCollection from "./Components/BotCollection";
import YourBotArmy from "./Components/YourBotArmy";
import "./index.css";


function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await getBots();
        setBots(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  function handleEnlist(bot) {
    if (army.find(b => b.id === bot.id)) return; // already enlisted
    setArmy(prev => [...prev, bot]);
  }

  function handleRelease(botId) {
    setArmy(prev => prev.filter(b => b.id !== botId));
  }

  async function handleDischarge(botId) {
    // Optimistic update with rollback
    const prevBots = bots;
    const prevArmy = army;
    try {
      setBots(prev => prev.filter(b => b.id !== botId));
      setArmy(prev => prev.filter(b => b.id !== botId));
      await deleteBot(botId);
    } catch (e) {
      // rollback on error
      setBots(prevBots);
      setArmy(prevArmy);
      setError("Failed to delete bot: " + e.message);
    }
  }

  if (loading) return <div>Loading bots…</div>;
  if (error) return <div role="alert">Error: {error}</div>;

  return (
    <div className="app">
      <h1>Bot Battlr</h1>
      <YourBotArmy army={army} onRelease={handleRelease} />
      <BotCollection
        bots={bots}
        onEnlist={handleEnlist}
        onDischarge={handleDischarge}
      />
    </div>
  );
}

export default App;
