import React from "react";

export default function YourBotArmy({ army, onRelease }) {
  return (
    <section>
      <h2>Your Bot Army ({army.length})</h2>
      <div className="army-list">
        {army.length === 0 ? (
          <p>No bots enlisted yet. Click a bot to add it to your army.</p>
        ) : (
          army.map(bot => (
            <div key={bot.id} className="army-item" onClick={() => onRelease(bot.id)} role="button" tabIndex={0}>
              <img src={bot.avatar_url} alt={`${bot.name} avatar`} width="80" />
              <div>
                <strong>{bot.name}</strong>
                <div>{bot.bot_class}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
