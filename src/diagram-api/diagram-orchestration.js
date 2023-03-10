import { registerDiagram } from './diagramAPI.js';
// import mindmapDb from '../diagrams/mindmap/mindmapDb';
// import mindmapRenderer from '../diagrams/mindmap/mindmapRenderer';
// import mindmapParser from '../diagrams/mindmap/parser/mindmapDiagram';
// import mindmapDetector from '../diagrams/mindmap/mindmapDetector';

import gitGraphDb from '../diagrams/git/gitGraphAst';
import gitGraphRenderer from '../diagrams/git/gitGraphRenderer';
import gitGraphParser from '../diagrams/git/parser/gitGraph';
import gitGraphDetector from '../diagrams/git/gitGraphDetector';

// Register mindmap and other built-in diagrams
// registerDiagram(
//   'mindmap',
//   mindmapParser,
//   mindmapDb,
//   mindmapRenderer,
//   undefined,
//   mindmapRenderer,
//   mindmapDetector
// );
const addDiagrams = () => {
  registerDiagram(
    'gitGraph',
    gitGraphParser,
    gitGraphDb,
    gitGraphRenderer,
    undefined,
    gitGraphDetector
  );
};
export default addDiagrams;
