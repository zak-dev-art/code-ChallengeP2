import React from "react";
import BotCard from "./BotCard";

export default function BotCollection({ bots, onEnlist, onDischarge }) {
  return (
    <section>
      <h2>Available Bots</h2>
      <div className="bot-grid">
        {bots.map(bot => (
          <BotCard
            key={bot.id}
            bot={bot}
            onEnlist={() => onEnlist(bot)}
            onDischarge={() => onDischarge(bot.id)}
          />
        ))}
      </div>
    </section>
  );
}

