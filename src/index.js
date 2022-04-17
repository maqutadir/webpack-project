import { subjects } from "./subjects"

(function consoleLog() {
    console.log(`Here are all the subjects ${subjects} served by webpack project`)
})()

const eachSubject = subjects.forEach((subject) => {
    console.log('This subject is', subject)
})

let players = {player1: 'VK', player2: 'SRT', player3: 'MSD'}
let playerCount = 3

const addPlayer = (playerName) => {
    playerCount += 1
    //players[`players${playerCount}`] = playerName
    players = {...players, [`player${playerCount}`]: playerName}
}

addPlayer('MS')
addPlayer('RS')
addPlayer('JB')
addPlayer('BK')
console.log('Players are', players)