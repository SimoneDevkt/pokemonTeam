import { NextResponse } from 'next/server'
//const { MongoClient } = require('mongodb');

import { getPokemon, addTeam, getTeams } from '../util';



function getRandomNumber(max: number) {
    return Math.floor(Math.random() * max) + 1;
}
export async function POST(request: Request) { 
    const data = await request.json();
    
    const teamName = data.team

    try {        
        let poke = await getPokemon(getRandomNumber(1010))
        await addTeam(teamName, poke)        
        return NextResponse.json({ team: data.team }, {status: 201})
    } catch (error) {
        return NextResponse.json({ error: 'Generic Error' }, { status: 400 })
    }
}

export async function GET(request: Request) { 
    try {        
        let teams = await getTeams()
        return NextResponse.json(teams, {status: 200})
    } catch (error) {
        return NextResponse.json({ error: 'Generic Error' }, { status: 400 })
    }
}