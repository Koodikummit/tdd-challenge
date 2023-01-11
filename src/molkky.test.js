const Game = require('./Game')
const Player = require('./Player')

describe('Player', () => {
    it('can be created with a name', () => {
        const player = new Player('Niko')
    })

    it('knows their name', () => {
        const player = new Player('Niko')
        expect(player.getName()).toBe('Niko')
    })

    it('has a separate name for each player', () => {
        const player1 = new Player('Niko')
        const player2 = new Player('Markus')
        expect(player1.getName()).toBe('Niko')
        expect(player2.getName()).toBe('Markus')
    })

    it('cannot be created without a name', () => {        
        expect(() => new Player()).toThrow()
    })

    it('knows which game they are playing in', () => {
        const player = new Player('Niko')
        const game = new Game([player])

        game.start()

        expect(player.getCurrentGame()).toBe(game)
    })

    it('cannot play in two games at the same time', () => {
        const player = new Player('Niko')
        const game1 = new Game([player])
        const game2 = new Game([player])

        game1.start()

        expect(() => game2.start()).toThrow()
    })

    it('cannot throw when it is not their turn', () => {
        const player = new Player('Niko')
        const player2 = new Player('Markus')
        const game = new Game([player, player2])
        
        game.start()
        expect(() => player2.throw([1])).toThrow()
    })

})

describe('Game', () => {
    it('cannot be created without an array of players', () => {
        expect(() => new Game()).toThrow()
    })

    it('cannot be created with a string as a parameter', () => {
        expect(() => new Game('Niko')).toThrow()
    })

    it('can be created with one player', () => {
        const player = new Player('Niko')
        const game = new Game([ player ])
    })

    it('cannot be created without at least one player', () => {
        const player = new Player('Niko')

        expect(() => new Game([])).toThrow()
    })

    it('returns the first player when a game is started', () => {
        const player = new Player('Niko')
        const game = new Game([ player ])

        const firstPlayer = game.start()

        expect(firstPlayer).toBe(player)
    })

    it('cannot be started multiple times', () => {
        const player = new Player('Niko')
        const game = new Game([ player ])

        game.start()

        expect(() => game.start()).toThrow()
    })
})