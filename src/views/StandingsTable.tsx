import React from "react";
import {Paper} from "@material-ui/core";
import MaterialTable from "@material-table/core";
import {Game, Player} from "../App";
import {correctResult, correctWinner} from "../utils";

export function StandingsTable({results, players}: { results: Game[], players: Player[] }) {
    const finishedGames = results.filter(res => res.awayScore !== '-');
    const playerScores = players.map(player => {
        let score = 0;
        let winner = 0;
        let wrong = 0;

        player.predictions.forEach(prediction => {
            const gameResult = finishedGames.find(game => game.id === prediction.id);
            if (!!gameResult) {
                if (correctResult(prediction, gameResult)) {
                    score++;
                } else if (correctWinner(prediction, gameResult)) {
                    winner++;
                } else {
                    wrong++;
                }
            }
        })

        return {
            name: player.name,
            score,
            winner,
            wrong,
            points: score*3 + winner*2,
        }
    })
    return (
        <Paper style={{maxWidth: '700px', margin: '5px'}} elevation={3}>
            <MaterialTable
                columns={[
                    {title: 'Navn', field: 'name', width: '70px'},
                    {title: 'Riktig resultat', field: 'score', width: '70px'},
                    {title: 'Riktig vinner', field: 'winner', width: '70px'},
                    {title: 'Bom', field: 'wrong', width: '70px'},
                    {title: 'Peong', field: 'points', width: '70px'},
                ]}
                data={playerScores.sort((a, b) => a.points > b.points ? -1 : a.points === b.points ? 0 : 1)}
                title="Sammenlagt"
                options={{
                    paging: false,
                    search: false,
                    sorting: false,
                    tableLayout: 'fixed',
                }}
            />
        </Paper>
    )
}
