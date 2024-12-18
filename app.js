import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();

app.get("/restaurants", (c) => c.text("Listing restaurants."));
app.post("/restaurants", (c) => c.text("Adding a restaurant."));
app.get("/restaurants/:id", (c) => c.text(`Showing restaurant with id ${c.req.param("id")}.`));
app.get("/restaurants/:id/reviews", (c) => c.text(`Listing reviews for restaurant with id ${c.req.param("id")}.`));
app.post("/restaurants/:id/reviews", (c) => c.text(`Adding a review for restaurant with id ${c.req.param("id")}.`));
app.delete("/restaurants/:id/reviews/:rid", (c) => c.text(`Removing review ${c.req.param("rid")} from restaurant with id ${c.req.param("id")}.`));

export default app
