import React, {useEffect, useState} from 'react';
import './App.css';
import Papa from 'papaparse';
import {GroupTable} from "./views/GroupTable";
import {StandingsTable} from "./views/StandingsTable";

const playerNames: string[] = ["yngve", "tobias", "wilberg", "ra"];
const groups: string[] = ["Group A", "Group B", "Group C", "Group D", "Group E", "Group F"]

export interface Game {
    id: number,
    time: string,
    type: string,
    homeTeam: string,
    homeScore: number,
    awayTeam: string,
    awayScore: number
}

export interface Player {
    name: string,
    predictions: Game[]
}

function App() {
    const [players, setPlayers] = useState<Player[]>([])
    const [results, setResults] = useState<Game[]>([])

    useEffect(() => {
        async function getPlayerPredictions() {
            const players: Player[] = []
            for (const name of playerNames) {
                await Papa.parse<Game>(`${process.env.PUBLIC_URL}/${name}.csv`, {
                    header: true,
                    download: true,
                    skipEmptyLines: true,
                    complete: data => {
                        players.push({
                            name,
                            predictions: data.data.sort((a, b) => a.time > b.time ? -1 : a.time === b.time ? 0 : 1)
                        })
                    }
                });
            }
            setPlayers(players)
            Papa.parse<Game>(`${process.env.PUBLIC_URL}/results.csv`, {
                header: true,
                download: true,
                skipEmptyLines: true,
                complete: data => {
                    setResults(data.data)
                }
            });
        }

        getPlayerPredictions();
    }, [])

    return (
        <>
            <div style={{width: '100%', display: 'flex', flexWrap: 'wrap'}}>
                <StandingsTable results={results} players={players}/>
            </div>
            <div style={{width: '100%', display: 'flex', flexWrap: 'wrap'}}>
                {players.length > 0 && results.length > 0 && (
                    groups.map(group => <GroupTable key={group} group={group} results={results} players={players}/>)
                )}
            </div>
        </>
    );
}

export default App;
