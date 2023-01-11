class Game {
    constructor(players) {
        if (!Array.isArray(players)) {
            throw new Error('Please give players as an array!')
        }
        if (players.length < 1) {
            throw new Error('Need at least one player!')
        }

        this.players = players
        this.gameStarted = false
    }

    start() {
        if (this.gameStarted) {
            throw new Error('Game is already started!')
        }
        this.gameStarted = true
        this.players.forEach(player => {
            if (player.getCurrentGame() !== null) {
                throw new Error('Player is already playing another game!')
            }
            player.setCurrentGame(this)
        })
        return this.players[0]
    }
}

module.exports = Game
