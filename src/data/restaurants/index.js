import { demoRestaurant } from './demo-restaurant'

// Add each new restaurant's data file here to publish it at /menu/:slug.
// No new React page is needed — RestaurantMenuPage renders any restaurant in this list.
export const restaurants = [demoRestaurant]

export function getRestaurantBySlug(slug) {
  return restaurants.find((r) => r.slug === slug)
}
