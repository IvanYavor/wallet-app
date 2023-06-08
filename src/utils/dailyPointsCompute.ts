export default function calculatePoints(day: number, month: number): string {
  const seasons: Record<string, number[]> = {
    winter: [12, 1, 2],
    spring: [3, 4, 5],
    summer: [6, 7, 8],
    autumn: [9, 10, 11],
  };

  const seasonStartDates: Record<string, string> = {
    winter: `${new Date().getFullYear()}-12-01`,
    spring: `${new Date().getFullYear()}-03-01`,
    summer: `${new Date().getFullYear()}-06-01`,
    autumn: `${new Date().getFullYear()}-09-01`,
  };

  const currentSeason = Object.keys(seasons).find((season) =>
    seasons[season].includes(month)
  );

  if (!currentSeason) {
    throw new Error("Invalid season");
  }

  const seasonStartDate = new Date(seasonStartDates[currentSeason]);
  const currentDate = new Date(seasonStartDate.getFullYear(), month - 1, day);

  const timeDiff = Math.abs(currentDate.getTime() - seasonStartDate.getTime());
  const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  let points = 0;

  if (dayDiff === 1) {
    points = 2;
  } else if (dayDiff === 2) {
    points = 3;
  } else if (dayDiff >= 3) {
    let prevDayPoints = 3;
    let prevPrevDayPoints = 2;

    for (let i = 3; i <= dayDiff; i++) {
      const currentPoints = Math.round(
        prevDayPoints * 1 + prevPrevDayPoints * 0.6
      );
      prevPrevDayPoints = prevDayPoints;
      prevDayPoints = currentPoints;
      points = currentPoints;
    }
  }

  if (points >= 1000) {
    const roundedPoints = Math.floor(points / 1000);
    return `${roundedPoints}K`;
  }

  return points.toString();
}
