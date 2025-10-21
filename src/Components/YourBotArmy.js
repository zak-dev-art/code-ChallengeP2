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
            <div key={bot.id} className="army-item">
              <img
                src={bot.avatar_url}
                alt={`${bot.name} avatar`}
                width="80"
                height="80"
              />
              <div className="army-info">
                <strong>{bot.name}</strong>
                <div>{bot.bot_class}</div>
              </div>
              <button
                className="deselect-btn"
                onClick={() => onRelease(bot.id)}
              >
                Deselect
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
