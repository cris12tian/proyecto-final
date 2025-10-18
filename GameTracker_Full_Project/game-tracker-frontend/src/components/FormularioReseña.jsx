import React, { useEffect, useState } from 'react';
import API from '../api';

export default function FormularioReseña({ onSaved, game, editing, setEditing }) {
  const [form, setForm] = useState({ game: '', author: '', content: '', stars: 0 });

  useEffect(() => {
    if (editing) setForm(editing);
    else setForm({ game: game?._id || '', author: '', content: '', stars: 0 });
  }, [editing, game]);

  useEffect(() => { if (game) setForm(f => ({ ...f, game: game._id })); }, [game]);

  const save = async (e) => {
    e.preventDefault();
    if (!form.game) return alert('Selecciona un juego para reseñar');
    try {
      if (editing) {
        await API.put(`/reviews/${editing._id}`, form);
        setEditing(null);
      } else {
        await API.post('/reviews', form);
      }
      setForm({ game: game?._id || '', author: '', content: '', stars: 0 });
      onSaved();
    } catch (err) { alert(err.response?.data?.error || err.message); }
  };

  return (
    <form className="review-form" onSubmit={save}>
      <input placeholder="Autor" value={form.author} onChange={e => setForm({ ...form, author: e.target.value })} />
      <textarea placeholder="Escribe tu reseña" value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} />
      <input type="number" min="0" max="5" placeholder="Estrellas" value={form.stars} onChange={e => setForm({ ...form, stars: Number(e.target.value) })} />
      <button type="submit">{editing ? 'Actualizar' : 'Enviar reseña'}</button>
    </form>
  );
}
