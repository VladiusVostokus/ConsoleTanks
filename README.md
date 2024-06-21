# Сonsole Tanks
This is console version of 2D tanks like on Dendy, but simplified.

Authors: [Vladislav Kovalenko](https://github.com/VladiusVostokus), [Kiril Yakymchuk](https://github.com/stbestichhh)

## Usage

> [!IMPORTANT]
> To use code, you need Node.js 18.x+ to be installed on your PC.

1. Clone this repo
  ```bash
  git clone  https://github.com/VladiusVostokus/ConsoleTanks
  ```

2. Install dependencies
  ```bash
  $ npm install
  ```

3. In root directory of project write in console
```bash
 npx ts-node .\src\index.ts
# use keys
--difficulty (1-10) to set difficulty
if there are no this key - difficulty = 1
--size <size> to set the size of the square gamefield
if there are no this key - size = 20
```

3.1 Or use docker, white in console in root directory of project
```bash
docker build -t console_tanks .
docker run console_tanks 
# use keys
--difficulty (1-10) to set difficulty
docker run console_tanks node dist/index.js —difficulty (1-10)
if there are no this key - difficulty = 1
--size <size> to set the size of the square gamefield
if there are no this key - size = 20
```

4.To run tests
```bash
npm test
```

Design document [link](https://docs.google.com/document/d/1Y0PNJG-bHwTvqaTXDT-rgSu3SrC2AGUNtwA1PSLB84Y/edit)

