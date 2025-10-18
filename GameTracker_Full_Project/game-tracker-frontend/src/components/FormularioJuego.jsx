import React, { useEffect, useState } from 'react';
import API from '../api';

export default function FormularioJuego({ onSaved, selectedGame, setSelectedGame }) {
  const [form, setForm] = useState({ title: '', platform: '', cover: '', hoursPlayed: 0, completed: false, rating: 0 });

  useEffect(() => { if (selectedGame) setForm(selectedGame); else setForm({ title: '', platform: '', cover: '', hoursPlayed: 0, completed: false, rating: 0 }); }, [selectedGame]);

  const save = async (e) => {
    e.preventDefault();
    try {
      if (selectedGame) {
        await API.put(`/games/${selectedGame._id}`, form);
        setSelectedGame(null);
      } else {
        await API.post('/games', form);
      }
      setForm({ title: '', platform: '', cover: '', hoursPlayed: 0, completed: false, rating: 0 });
      onSaved();
    } catch (err) { alert(err.response?.data?.error || err.message); }
  };

  return (
    <form className="game-form" onSubmit={save}>
      <h2>{selectedGame ? 'Editar juego' : 'Agregar juego'}</h2>
      <input required placeholder="Título" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
      <input placeholder="Plataforma" value={form.platform} onChange={e => setForm({ ...form, platform: e.target.value })} />
      <input placeholder="URL de portada" value={form.cover} onChange={e => setForm({ ...form, cover: e.target.value })} />
      <input type="number" placeholder="Horas jugadas" value={form.hoursPlayed} onChange={e => setForm({ ...form, hoursPlayed: Number(e.target.value) })} />
      <label><input type="checkbox" checked={form.completed} onChange={e => setForm({ ...form, completed: e.target.checked })} /> Completado</label>
      <input type="number" min="0" max="5" placeholder="Puntuación" value={form.rating} onChange={e => setForm({ ...form, rating: Number(e.target.value) })} />
      <button type="submit">Guardar</button>
    </form>
  );
}
