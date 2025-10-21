import React from "react";

export default function BotCard({ bot, onEnlist, onDischarge }) {
  return (
    <article className="bot-card" aria-label={bot.name}>
      <button className="discharge" aria-label={`Discharge ${bot.name}`} onClick={(e) => { e.stopPropagation(); onDischarge(); }}>
        x
      </button>

      <img src={bot.avatar_url} alt={`${bot.name} avatar`} width="120" height="120" />
      <h3>{bot.name}</h3>
      <p><em>{bot.catchphrase}</em></p>
      <ul>
        <li>Health: {bot.health}</li>
        <li>Damage: {bot.damage}</li>
        <li>Armor: {bot.armor}</li>
        <li>Class: {bot.bot_class}</li>
      </ul>

      <div>
        <button onClick={onEnlist}>Enlist</button>
      </div>
    </article>
  );
}
