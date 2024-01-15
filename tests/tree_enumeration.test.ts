import { NodeElement, getTreeNodes } from "../src/tree_enumeration";

import { TTemplateObject } from '../src/tree_enumeration';

import { Tmp } from "./tree_enumration.tmp";

describe('getTreeNodes', () => {
  let testObject: TTemplateObject | null;
  let expectResult: unknown;

  afterEach(() => {
    testObject = null;
    (expectResult as null) = null;
  });

  test('Correct One-level Object Nodes', ():void => {
    testObject = JSON.parse(JSON.stringify(Tmp.oneLevelTestObject));

    (expectResult as NodeElement[]) = [...Tmp.oneLevelNodeArray];

    expect(getTreeNodes(testObject as TTemplateObject))
      .toEqual(expectResult);
  });

  test('Correct Two-level Object Nodes', ():void => {
    testObject = JSON.parse(JSON.stringify(Tmp.twoLevelTestObject));

    (expectResult as NodeElement[]) = [...Tmp.twoLevelArray];

    expect(getTreeNodes(testObject as TTemplateObject))
      .toEqual(expectResult);
  });

  test('Correct Three-level Object Nodes', ():void => {
    testObject = JSON.parse(JSON.stringify(Tmp.threeLevelTestObject));

    (expectResult as NodeElement[]) = [...Tmp.threeLevelArray];

    expect(getTreeNodes(testObject as TTemplateObject))
      .toEqual(expectResult);
  });

  test('Uncorrect value', ():void => {
  });
});