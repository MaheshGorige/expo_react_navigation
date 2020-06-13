// eslint-disable-next-line functional/no-class
export class UnreachableCaseError extends Error {
    public constructor(val: never) {
      super(`Unreachable case: ${val}`);
    }
  }
  
  // eslint-disable-next-line functional/no-class
  export class UnreachableGraphQlUnionTypeCaseError extends Error {
    public constructor(val: "%other" | never) {
      super(`Unreachable GraphQLUnionType case: ${val}`);
    }
  }