export async function getInfo(id: string) {
  const res = await fetch(
    process.env.API_URL ??
      "http://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party",
    {
      cache: "force-cache",
      method: "POST",
      mode: "cors",

      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${process.env.API_KEY}`,
      },
      body: JSON.stringify({
        query: id,
      }),
    }
  );
  const data = await res.json();
  return data;
}
