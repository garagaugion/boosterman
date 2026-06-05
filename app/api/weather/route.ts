import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'API key non configurata' }, { status: 500 });
  }
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Roma,IT&appid=${apiKey}&units=metric&lang=it`,
      { next: { revalidate: 1800 } }
    );
    if (!res.ok) throw new Error('OpenWeather error');
    const data = await res.json();
    return NextResponse.json({
      temp: Math.round(data.main.temp),
      desc: data.weather[0].description,
      icon: data.weather[0].icon,
    });
  } catch {
    return NextResponse.json({ error: 'Errore meteo' }, { status: 500 });
  }
}
