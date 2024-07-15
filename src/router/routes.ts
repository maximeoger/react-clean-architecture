export const routes = {
  home: "/",
  reviews: (movie = ":movie")=> `/reviews/${movie}`
}
