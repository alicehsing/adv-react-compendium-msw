export async function futuramaFetch() {
  const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes');
  const data = await res.json();
  return data.map((item) => ({
    name: item.character,
    image: item.image,
    quote: item.quote,
  }));
}
