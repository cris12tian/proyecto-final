import React from 'react';

export default function TarjetaJuego({ game, onEdit, onDelete, onSelect }) {
  return (
    <div className="card" onClick={onSelect}>
      <div className="cover">{game.cover ? <img src={game.cover} alt={game.title} /> : <div className="no-cover">No Cover</div>}</div>
      <div className="info">
        <h3>{game.title}</h3>
        <p>{game.platform}</p>
        <p>Horas: {game.hoursPlayed}</p>
        <p>Completado: {game.completed ? 'Sí' : 'No'}</p>
        <div className="actions">
          <button onClick={(e) => { e.stopPropagation(); onEdit(); }}>Editar</button>
          <button onClick={(e) => { e.stopPropagation(); onDelete(); }}>Eliminar</button>
        </div>
      </div>
    </div>
  );
}
