import { initApi } from "./initApi";
import { initMoodTrackerController } from "./moodTrackerController";

const api = initApi();

api.get("/healthcheck", (_, res) => {
  res.send({ status: "OK" });
});

initMoodTrackerController(api);
