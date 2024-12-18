import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const getFeedbackCount = async (feedbackValue) => {
  const kv = await Deno.openKv();
  const feedbackCount = await kv.get(["feedback", feedbackValue]);
  return feedbackCount.value ?? 0;
};

const incrementFeedbackCount = async (feedbackValue) => {
  const kv = await Deno.openKv();
  const currentCount = await getFeedbackCount(feedbackValue);
  await kv.set(["feedback", feedbackValue], currentCount + 1);
};

const app = new Hono();

app.get("/feedbacks/1", async (c) => {
  const count = await getFeedbackCount("1");
  return c.text(`Feedback 1: ${count}`);
});

app.post("/feedbacks/1", async (c) => {
  await incrementFeedbackCount("1");
  const count = await getFeedbackCount("1");
  return c.text(`Feedback 1: ${count}`);
});

app.get("/feedbacks/2", async (c) => {
  const count = await getFeedbackCount("2");
  return c.text(`Feedback 2: ${count}`);
});

app.post("/feedbacks/2", async (c) => {
  await incrementFeedbackCount("2");
  const count = await getFeedbackCount("2");
  return c.text(`Feedback 2: ${count}`);
});

app.get("/feedbacks/3", async (c) => {
  const count = await getFeedbackCount("3");
  return c.text(`Feedback 3: ${count}`);
});

app.post("/feedbacks/3", async (c) => {
  await incrementFeedbackCount("3");
  const count = await getFeedbackCount("3");
  return c.text(`Feedback 3: ${count}`);
});

export default app;
