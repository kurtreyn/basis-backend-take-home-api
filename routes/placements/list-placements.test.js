// These tests are based directly on the results at
// https://stash.centro.net/projects/CEN/repos/jd_interview_exercise/browse/01-take-home/challenge

const listPlacements = require("./list-placements");

const summarizeDelivery = (placements) =>
  placements.map((placement) => ({
    placementName: placement.name,
    impressions: placement.delivery
      .map((delivery) => delivery.impressions)
      .map((impressions) => parseInt(impressions, 10))
      .reduce((a, b) => a + b, 0),
  }));

it("returns all of the placements and delivery with no start and end date", () => {
  const placements = listPlacements({});

  expect(summarizeDelivery(placements)).toEqual([
    { placementName: "Sports", impressions: 1083576 },
    { placementName: "Business", impressions: 1607958 },
    { placementName: "Travel", impressions: 1035966 },
    { placementName: "Politics", impressions: 1529821 },
  ]);
});

it("filters the results", () => {
  const placements = listPlacements({
    startDate: "11/22/2020",
    endDate: "12/5/2020",
  });
  const placementSummary = summarizeDelivery(placements);

  const totalImpressions = placementSummary
    .map((summary) => summary.impressions)
    .reduce((a, b) => a + b, 0);

  expect(totalImpressions).toEqual(1126785);
});
