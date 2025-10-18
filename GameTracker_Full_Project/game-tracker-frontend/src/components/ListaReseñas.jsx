import React, { useEffect, useState } from 'react';
import API from '../api';
import FormularioReseña from './FormularioReseña';

export default function ListaReseñas({ game }) {
  const [reviews, setReviews] = useState([]);
  const [editing, setEditing] = useState(null);

  const fetch = async () => {
    const res = await API.get('/reviews' + (game ? `?gameId=${game._id}` : ''));
    setReviews(res.data);
  };

  useEffect(() => { fetch(); }, [game]);

  return (
    <div className="reviews">
      <h3>Reseñas {game ? `de ${game.title}` : ''}</h3>
      <FormularioReseña onSaved={fetch} game={game} editing={editing} setEditing={setEditing} />
      <ul>
        {reviews.map(r => (
          <li key={r._id}>
            <strong>{r.author}</strong> ({r.stars}★)
            <p>{r.content}</p>
            <div className="rev-actions">
              <button onClick={() => setEditing(r)}>Editar</button>
              <button onClick={async () => { if(confirm('Eliminar reseña?')){ await API.delete(`/reviews/${r._id}`); fetch(); } }}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
