import { NextResponse } from "next/server"
import dotenv from 'dotenv';

// // Configura dotenv para cargar las variables de entorno desde el archivo .env
dotenv.config();

export async function GET(request: Request) {

    const yourApiKey = process.env.API_KEY || '';

    const alpha = require('alphavantage')({ key: yourApiKey });

    try {
        // const data = await alpha.data.intraday(`msft`); 
        const data = await alpha.experimental('NEWS_SENTIMENT');

        return NextResponse.json(data);
    } catch (err) {
        console.error(err);
        return NextResponse.error();
    }
}






