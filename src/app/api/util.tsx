import axios from 'axios';
import { MongoClient } from 'mongodb'
import { Pokemon } from './model/pokemonInfo';

export const getPokemon = async (id: number): Promise<Pokemon> => {
    let p: any = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data

    return {
        id,
        name: p.name,
        base_experience: p.base_experience || 0,
        sprite: p.sprites.front_default,
        abilities: p.abilities.map(a => a.ability.name),
        types: p.types.map(t => t.type.name)
    }
}

export const addTeam = async (teamName: string, pokemon: Pokemon): Promise<void> => {
    const uri = 'mongodb://10.5.0.5:27017';//TODO get uri from .env
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db('pokemon_team');
        const pokemonCollection = database.collection('team');        

        await pokemonCollection.insertOne({
            _id: teamName,
            pokemon: [pokemon]
        });
        console.log('Team succesfull add');
    } catch (error) {
        throw new Error(`Errore on addTeam: ${error}`);
    } finally {
        await client.close();
    }
}