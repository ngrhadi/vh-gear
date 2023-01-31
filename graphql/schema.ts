import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Value {
    min: Int
    max: Int
    step: Int
  }

  type Tiers {
    minLevel: Int
    maxLevel: Int
    weight: Int
    value: Value
  }

  type Suffix {
    id: String
    name: String
    color: String
    limitations: [String]
    tiers: [Tiers]
  }

  type Prefix {
    id: String
    name: String
    color: String
    limitations: [String]
    tiers: [Tiers]
  }

  type Implicit {
    id: String
    name: String
    color: String
    limitations: [String]
    tiers: [Tiers]
  }

  type Modifiers {
    suffix: [Suffix]
    prefix: [Prefix]
    implicit: [Implicit]
  }

  type Gear {
    id: String
    name: String
    modifiers: Modifiers
  }

  type Query {
    swords: [Gear]!
    axes: [Gear]
    chesplates: [Gear]
    boots: [Gear]
    legings: [Gear]
    helmets: [Gear]
    shileds: [Gear]
    idol: [Gear]
  }
`;
