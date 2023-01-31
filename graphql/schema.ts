import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Value {
    min: Float
    max: Float
    step: Float
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

  type ValueIdol {
    min: Float
    max: Float
    step: Float
  }

  type TiersIdol {
    minLevel: Int
    maxLevel: Int
    weight: Int
    value: ValueIdol
  }

  type SuffixIdol {
    id: String
    name: String
    color: String
    limitations: [String]
    tiers: [TiersIdol]
  }

  type ImplicitIdol {
    id: String
    name: String
    color: String
    limitations: [String]
    tiers: [TiersIdol]
  }

  type ModifiersIdol {
    suffix: [Suffix]
    prefix: [String]
    implicit: [Implicit]
  }

  type Idol {
    id: String
    name: String
    modifiers: ModifiersIdol
  }

  type Query {
    swords: [Gear]
    axes: [Gear]
    chestplates: [Gear]
    boots: [Gear]
    leggings: [Gear]
    helmets: [Gear]
    shields: [Gear]
    idol_idona: [Idol]
    idol_tenos: [Idol]
    idol_wendaar: [Idol]
    idol_valera: [Idol]
  }
`;
