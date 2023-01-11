class Player {
    constructor(name) {
        if (!name) {
            throw new Error('Players need a name!')
        }
        this.name = name
        this.currentGame = null
    }

    getName() {
        return this.name
    }

    getCurrentGame() {
        return this.currentGame
    }

    setCurrentGame(game) {
        this.currentGame = game
    }
}

module.exports = Player