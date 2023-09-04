import {groupTextItemsIntoLines} from './group-text-items-into-lines.js'
import {groupLinesIntoSections} from './group-lines-into-sections.js'
import {extractResumeFromSections} from './extract-resume-from-sections.js'
import {reformat} from './reformat.js'
import {readPdf} from './read-pdf.js'

const parseResume = async (file) => {
    const fileUrl = URL.createObjectURL(file);
    console.log("file url: ", fileUrl);

    const textItems = await readPdf(fileUrl);
    const lines = groupTextItemsIntoLines(textItems);
    const sections = groupLinesIntoSections(lines);
    const resume = extractResumeFromSections(sections);
    const parsedResume = reformat(resume);

    console.log("parsed resume: ", parsedResume);
    return parsedResume;
}

export default parseResume;

