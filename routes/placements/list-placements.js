const parse = require("date-fns/parse");
const fs = require("fs");
const Papa = require("papaparse");
const camelize = require("camelize");
const {
  endOfDay,
  startOfDay,
  areIntervalsOverlapping,
  isWithinInterval,
} = require("date-fns");

const parseCSV = (filename) => {
  const content = fs.readFileSync(filename, "utf-8");
  const rows = Papa.parse(content, { header: true, transformHeader: camelize });

  return rows.data;
};

const delivery = parseCSV("./delivery.csv");
const placements = parseCSV("./placements.csv");

const deliveryByPlacementId = delivery.reduce((memo, deliveryRecord) => {
  const recordsAlreadyAdded = memo[deliveryRecord.placementId] || [];
  const updatedDeliveryForThisPlacement = {
    [deliveryRecord.placementId]: [...recordsAlreadyAdded, deliveryRecord],
  };

  return { ...memo, ...updatedDeliveryForThisPlacement };
}, {});

const now = new Date();
const data = placements
  .map((placement) => ({
    ...placement,
    delivery: deliveryByPlacementId[placement.id],
  }))
  .map((placement) => ({
    ...placement,
    start: startOfDay(parse(placement.start, "MM/d/yy", now)),
  }))
  .map((placement) => ({
    ...placement,
    end: endOfDay(parse(placement.end, "MM/d/yy", now)),
  }));

const listPlacements = (filters) => {
  const { startDate, endDate } = {
    startDate: "1/1/1000",
    endDate: "1/1/3000",
    ...filters,
  };

  const reportStartDate = startOfDay(parse(startDate, "M/d/yyyy", now));
  const reportEndDate = endOfDay(parse(endDate, "M/d/yyyy", now));

  const includedPlacements = data.filter((placement) =>
    areIntervalsOverlapping(
      { start: placement.start, end: placement.end },
      { start: reportStartDate, end: reportEndDate }
    )
  );

  return includedPlacements.map((placement) => {
    const delivery = placement.delivery.filter((delivery) => {
      const deliveryDate = startOfDay(parse(delivery.date, "MM/d/yyyy", now));

      return isWithinInterval(deliveryDate, {
        start: reportStartDate,
        end: reportEndDate,
      });
    });

    return { ...placement, delivery };
  });
};

module.exports = listPlacements;
