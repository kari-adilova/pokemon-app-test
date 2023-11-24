export interface IPokemonResponse {
  id: number,
  name: string,
  height: number,
  base_experience: number,
  order: number,
  sprites: {
    other: {
      dream_world: {
        front_default: string
      }
    }
  }
}

export interface IPokemonListResponse {
  count: number,
  next: string,
  previous: string,
  results: PokemonTypeResponse[]
}

type PokemonTypeResponse = {
  name: string,
  url: string
}

export interface IPokemonDetails {
  id: number,
  name: string,
  height: number,
  weight: number,
  stats: PokemonStats[],
  sprites: {
    other: {
      dream_world: {
        front_default: string
      }
    }
  }
}

type PokemonStats = {
  base_stat: number,
  stat: {
    name: string
  }
}