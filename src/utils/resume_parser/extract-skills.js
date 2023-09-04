import { deepClone } from "./deep-clone.js";
import { getSectionLinesByKeywords } from "./get-section-lines.js";
import {
  getBulletPointsFromLines,
  getDescriptionsLineIdx,
} from "./bullet-points.js";


const initialFeaturedSkill = { skill: "", rating: 4 };
const initialFeaturedSkills = Array(6).fill({
  ...initialFeaturedSkill,
});

const extractSkills = (sections) => {
  const lines = getSectionLinesByKeywords(sections, ["skill"]);
  const descriptionsLineIdx = getDescriptionsLineIdx(lines) || 0;
  const descriptionsLines = lines.slice(descriptionsLineIdx);
  const descriptions = getBulletPointsFromLines(descriptionsLines);

  const featuredSkills = deepClone(initialFeaturedSkills);
  if (descriptionsLineIdx !== 0) {
    const featuredSkillsLines = lines.slice(0, descriptionsLineIdx);
    const featuredSkillsTextItems = featuredSkillsLines
      .flat()
      .filter((item) => item.text.trim())
      .slice(0, 6);
    for (let i = 0; i < featuredSkillsTextItems.length; i++) {
      featuredSkills[i].skill = featuredSkillsTextItems[i].text;
    }
  }

  const skills = {
    featuredSkills,
    descriptions,
  };

  return { skills };
};

export  {
  extractSkills
};
