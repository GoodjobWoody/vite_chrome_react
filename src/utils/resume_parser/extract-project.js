import { getSectionLinesByKeywords } from "./get-section-lines.js";
import {
  DATE_FEATURE_SETS,
  getHasText,
  isBold,
} from "./common-features.js";
import { divideSectionIntoSubsections } from "./subsections.js";
import { getTextWithHighestFeatureScore } from "./feature-scoring-system.js";
import {
  getBulletPointsFromLines,
  getDescriptionsLineIdx,
} from "./bullet-points.js";

const extractProject = (sections) => {
  const projects = [];
  const projectsScores = [];
  const lines = getSectionLinesByKeywords(sections, ["project"]);
  const subsections = divideSectionIntoSubsections(lines);

  for (const subsectionLines of subsections) {
    const descriptionsLineIdx = getDescriptionsLineIdx(subsectionLines) ?? 1;

    const subsectionInfoTextItems = subsectionLines
      .slice(0, descriptionsLineIdx)
      .flat();
    const [date, dateScores] = getTextWithHighestFeatureScore(
      subsectionInfoTextItems,
      DATE_FEATURE_SETS
    );
    const PROJECT_FEATURE_SET = [
      [isBold, 2],
      [getHasText(date), -4],
    ];
    const [project, projectScores] = getTextWithHighestFeatureScore(
      subsectionInfoTextItems,
      PROJECT_FEATURE_SET,
      false
    );

    const descriptionsLines = subsectionLines.slice(descriptionsLineIdx);
    const descriptions = getBulletPointsFromLines(descriptionsLines);

    projects.push({ project, date, descriptions });
    projectsScores.push({
      projectScores,
      dateScores,
    });
  }
  return { projects, projectsScores };
};

export  {extractProject};
