export type AnswerType = "Covid" | "Stock" | "TopTracks" | "TopArtists" | "Commute" | "News";

export interface Answer {
    id: string;
    type: AnswerType;
}

export interface CovidCasesAnswer extends Answer {
    cases: number;
    deaths: number;
}

export interface StockAnswer extends Answer {
    shortName: string,
    longName: string,
    price: number,
    changePercent: number
}

export interface TopTracksAnswer extends Answer {
    tracks: {
        trackName: string;
        albumName: string;
        artistName: string;
        imageUrl: string;
    }[]
}

export interface TopArtistsAnswer extends Answer {
    artists: {
        name: string;
        imageUrl: string;
    }[]
}

export interface NewsFeedAnswer extends Answer {
    articles: {
       source: string,
       author: string,
       headline: string,
       imageUrl: string, 
    }[];
}

export type CommuteTransitType = "walk" | "transit";
export type CommuteVehicleType = "bus";

export interface CommuteAnswerLeg {
    travel_mode: CommuteTransitType,
    vehicle_types?: CommuteVehicleType[]
}

export interface CommuteAnswer extends Answer {
    directions: {
        routes: {
            duration_seconds: number,
            route_departure_time: string,
            route_arrival_time: string,
            legs: CommuteAnswerLeg[]
        }[]
    }
}