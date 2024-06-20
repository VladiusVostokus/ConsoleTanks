import { Tank } from '../src/tank';
import { GameField } from '../src/gamefield';

jest.mock('../src/gamefield', () => {
    return {
        GameField: jest.fn().mockImplementation(() => {
            return {
                setCell: jest.fn(),
                updateGameField: jest.fn(),
            };
        }),
    };
});

describe('Tank and projectile', () => {
    const gamefield = new GameField(10, 10);
    gamefield.updateGameField();
    const tank = new Tank(5, 5, 10, 10);
    
    it('Check fire() push and updateProjectiles() put projectiles correctly', () => {
        tank.turnUp();
        tank.fire();
        tank.turnDown();
        tank.fire();

        expect(tank.projectilesCount).toBe(2);
        gamefield.updateGameField();
        tank.putTank(gamefield);
        tank.updateProjectiles(gamefield);
        expect(gamefield.setCell).toHaveBeenCalledWith(3, 6, 'o');
        expect(gamefield.setCell).toHaveBeenCalledWith(8, 6, 'o'); 
    });
});