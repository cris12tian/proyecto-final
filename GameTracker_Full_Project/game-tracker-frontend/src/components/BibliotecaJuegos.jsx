import React, { useEffect, useState } from 'react';
import API from '../api';
import TarjetaJuego from './TarjetaJuego';
import FormularioJuego from './FormularioJuego';
import ListaReseñas from './ListaReseñas';
import EstadisticasPersonales from './EstadisticasPersonales';

export default function BibliotecaJuegos() {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);

  const fetchGames = async () => {
    const res = await API.get('/games');
    setGames(res.data);
  };

  useEffect(() => { fetchGames(); }, []);

  return (
    <div className="library">
      <div className="left">
        <FormularioJuego onSaved={fetchGames} selectedGame={selectedGame} setSelectedGame={setSelectedGame} />
        <div className="cards">
          {games.map(g => (
            <TarjetaJuego key={g._id} game={g} onEdit={() => setSelectedGame(g)} onDelete={async () => { if(confirm('Eliminar?')){ await API.delete(`/games/${g._id}`); fetchGames(); } }} onSelect={() => setSelectedGame(g)} />
          ))}
        </div>
      </div>
      <div className="right">
        <EstadisticasPersonales games={games} />
        <ListaReseñas game={selectedGame} />
      </div>
    </div>
  );
}
