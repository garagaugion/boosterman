import { NextRequest, NextResponse } from 'next/server';

function getWeatherImpact(conditionId: number) {
  if (conditionId >= 200 && conditionId < 300) return 0.4;
  if (conditionId >= 300 && conditionId < 400) return 0.1;
  if (conditionId >= 500 && conditionId < 505) return 0.15;
  if (conditionId >= 505 && conditionId < 600) return 0.3;
  if (conditionId >= 600 && conditionId < 700) return 0.5;
  if (conditionId >= 700 && conditionId < 800) return 0.25;
  return 0;
}

export async function GET(req: NextRequest) {
  const apiKey = process.env.OPENWEATHER_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: 'OPENWEATHER_API_KEY non configurata su Vercel' },
      { status: 500 }
    );
  }

  const { searchParams } = new URL(req.url);
  const lat = Number(searchParams.get('lat'));
  const lng = Number(searchParams.get('lng'));

  if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
    return NextResponse.json(
      { error: 'Latitudine e longitudine valide richieste' },
      { status: 400 }
    );
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lng)}&appid=${apiKey}&units=metric&lang=it`;

  try {
    const response = await fetch(url, { next: { revalidate: 300 } });
    const data = await response.json();

    if (!response.ok || Number(data.cod) !== 200) {
      return NextResponse.json(
        { error: 'Errore API meteo', details: data?.message || null },
        { status: response.status || 500 }
      );
    }

    const conditionId = data.weather?.[0]?.id || 800;

    return NextResponse.json({
      temp: Math.round(data.main.temp),
      condition: conditionId,
      description: data.weather?.[0]?.description || '',
      impact: getWeatherImpact(conditionId)
    });
  } catch {
    return NextResponse.json({ error: 'Errore di rete' }, { status: 500 });
  }
}
