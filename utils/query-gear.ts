export const queryGear = (name: string, query: string) => {
  var query = `query ${name} {
    ${query} {
      id
      modifiers {
        implicit {
          color
          id
          limitations
          name
          tiers {
            maxLevel
            minLevel
            value {
              max
              min
              step
            }
            weight
          }
        }
        prefix {
          color
          id
          limitations
          name
          tiers {
            maxLevel
            minLevel
            value {
              max
              min
              step
            }
            weight
          }
        }
        suffix {
          color
          id
          limitations
          name
          tiers {
            maxLevel
            minLevel
            value {
              max
              min
              step
            }
            weight
          }
        }
      }
      name
    }
  }`;

  return { query };
};
