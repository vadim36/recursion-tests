export type TTreeBranchObject = {
  [index:string]:number
}

export type TTemplateObject = {
  [index:string]: TTreeBranchObject
}

export class NodeElement {
  constructor (
    readonly body:number,
    public childrens?:NodeElement[]
  ) {}
}

export function getTreeNodes(objectTMP:TTemplateObject):NodeElement[] {
  const treeBranches:TTreeBranchObject[] = Object.values(objectTMP);
  const nodes: NodeElement[] = [];

  treeBranches.forEach((branch:TTreeBranchObject, branchIndex:number):number => {
    return nodes.push(...getNodes(branchIndex, treeBranches));
  });

  return nodes;
}

function getNodes(levelIndex:number, branchesArray:TTreeBranchObject[]):NodeElement[] {
  const nodes: NodeElement[] = [];
  const currentBranch = Object.values(branchesArray[levelIndex]);

  currentBranch.forEach((nodeBody:number):number => {
    const node: NodeElement = new NodeElement(nodeBody);

    if (levelIndex + 1 !== branchesArray.length) {
      node.childrens = getNodes(levelIndex + 1, branchesArray);
    }

    return nodes.push(node);
  });

  return nodes;
}