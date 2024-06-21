import { Player } from '../src/player';

jest.mock('../src/tank'); 

describe('Player class', () => {
  let player: Player;

  beforeEach(() => {
    player = new Player(5, 5, 20, 20)
  })

    it('Check correct call control functions', () => {
        player.action('w');
        expect(player.turnUp).toHaveBeenCalledTimes(1);

        player.action('s');
        expect(player.turnDown).toHaveBeenCalledTimes(1);

        player.action('a');
        expect(player.turnLeft).toHaveBeenCalledTimes(1);

        player.action('d');
        expect(player.turnRight).toHaveBeenCalledTimes(1);

        player.action('f');
        expect(player.fire).toHaveBeenCalledTimes(1);
    });

    it('Check correct hanfling of unknown button', () => {
        expect(() => player.action('z')).not.toThrow();
    });
});
