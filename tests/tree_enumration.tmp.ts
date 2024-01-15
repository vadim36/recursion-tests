import { NodeElement, TTemplateObject } from '../src/tree_enumeration';

export namespace Tmp {
  export const oneLevelTestObject: TTemplateObject = {
    a: {a1: 1, a2: 2, a3: 3}
  }
  
  export const oneLevelNodeArray: NodeElement[] = [
    new NodeElement(1),
    new NodeElement(2),
    new NodeElement(3)
  ];

  export const twoLevelTestObject: TTemplateObject = {
    a: {a1: 1, a2: 2, a3: 3},
    b: {b1: 4, b2: 5}
  }

  export const twoLevelArray: NodeElement[] = [
    new NodeElement(1, [new NodeElement(4), new NodeElement(5)]),
    new NodeElement(2, [new NodeElement(4), new NodeElement(5)]),
    new NodeElement(3, [new NodeElement(4), new NodeElement(5)]),
    new NodeElement(4),
    new NodeElement(5),
  ];

  export const threeLevelTestObject: TTemplateObject = {
      a: {a1: 1, a2: 2, a3: 3},
      b: {b1: 4, b2: 5},
      c: {c1: 6, c2: 7, c3: 8, c4: 9}
  }

  export const threeLevelArray: NodeElement[] = [
    new NodeElement(1, [new NodeElement(4, [
      new NodeElement(6),
      new NodeElement(7),
      new NodeElement(8),
      new NodeElement(9)
    ]), new NodeElement(5, [
      new NodeElement(6),
      new NodeElement(7),
      new NodeElement(8),
      new NodeElement(9)
    ])]),
    new NodeElement(2, [new NodeElement(4, [
      new NodeElement(6),
      new NodeElement(7),
      new NodeElement(8),
      new NodeElement(9)
    ]), new NodeElement(5, [
      new NodeElement(6),
      new NodeElement(7),
      new NodeElement(8),
      new NodeElement(9)
    ])]),
    new NodeElement(3, [new NodeElement(4, [
      new NodeElement(6),
      new NodeElement(7),
      new NodeElement(8),
      new NodeElement(9)
    ]), new NodeElement(5, [
      new NodeElement(6),
      new NodeElement(7),
      new NodeElement(8),
      new NodeElement(9)
    ])]),
    new NodeElement(4, [
      new NodeElement(6),
      new NodeElement(7),
      new NodeElement(8),
      new NodeElement(9)
    ]),
    new NodeElement(5, [
      new NodeElement(6),
      new NodeElement(7),
      new NodeElement(8),
      new NodeElement(9)
    ]),
    new NodeElement(6),
    new NodeElement(7),
    new NodeElement(8),
    new NodeElement(9)
  ];
}