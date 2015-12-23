import { newGame } from '../src/tic_tac_toe_game'
import {expect} from 'chai'
import {describe} from 'mocha'

describe('new game', ()=>{
    describe('contains empty cells', ()=>{
        let game = newGame();
        game.test()

        expect(game.cells).to.be.null;
    })
})