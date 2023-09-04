import { BULLET_POINTS } from "./bullet-points.js";
import { isBold } from "./common-features.js";

const divideSectionIntoSubsections = (lines) => {
  const isLineNewSubsectionByLineGap = createIsLineNewSubsectionByLineGap(lines);

  let subsections = createSubsections(lines, isLineNewSubsectionByLineGap);

  if (subsections.length === 1) {
    const isLineNewSubsectionByBold = (line, prevLine) => {
      if (
        !isBold(prevLine[0]) &&
        isBold(line[0]) &&
        !BULLET_POINTS.includes(line[0].text)
      ) {
        return true;
      }
      return false;
    };

    subsections = createSubsections(lines, isLineNewSubsectionByBold);
  }

  return subsections;
};

const createIsLineNewSubsectionByLineGap = (lines) => {
  const lineGapToCount = {};
  const linesY = lines.map((line) => line[0].y);
  let lineGapWithMostCount = 0;
  let maxCount = 0;
  for (let i = 1; i < linesY.length; i++) {
    const lineGap = Math.round(linesY[i - 1] - linesY[i]);
    if (!lineGapToCount[lineGap]) lineGapToCount[lineGap] = 0;
    lineGapToCount[lineGap] += 1;
    if (lineGapToCount[lineGap] > maxCount) {
      lineGapWithMostCount = lineGap;
      maxCount = lineGapToCount[lineGap];
    }
  }
  const subsectionLineGapThreshold = lineGapWithMostCount * 1.4;

  const isLineNewSubsection = (line, prevLine) => {
    return Math.round(prevLine[0].y - line[0].y) > subsectionLineGapThreshold;
  };

  return isLineNewSubsection;
};

const createSubsections = (lines, isLineNewSubsection) => {
  const subsections = [];
  let subsection = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (i === 0) {
      subsection.push(line);
      continue;
    }
    if (isLineNewSubsection(line, lines[i - 1])) {
      subsections.push(subsection);
      subsection = [];
    }
    subsection.push(line);
  }
  if (subsection.length > 0) {
    subsections.push(subsection);
  }
  return subsections;
};

export {
  divideSectionIntoSubsections
};
