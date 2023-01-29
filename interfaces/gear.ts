export interface Value {
    min: number;
    max: number;
    step: number;
}

export interface Tier {
    minLevel: number;
    maxLevel: number;
    weight: number;
    value: Value;
}

export interface Implicit {
    id: string;
    name: string;
    color: string;
    tiers: Tier[];
    limitations: any[];
}

export interface Value2 {
    min: number;
    max: number;
    step: number;
}

export interface Tier2 {
    minLevel: number;
    maxLevel: number;
    weight: number;
    value: Value2;
}

export interface Prefix {
    id: string;
    name: string;
    color: string;
    tiers: Tier2[];
    limitations: string[];
}

export interface Value3 {
    min: number;
    max: number;
    step: number;
    flag?: boolean;
    effectKey: string;
    minChance?: number;
    maxChance?: number;
}

export interface Tier3 {
    minLevel: number;
    maxLevel: number;
    weight: number;
    value: Value3;
}

export interface Suffix {
    id: string;
    name: string;
    color: string;
    tiers: Tier3[];
    limitations: string[];
}

export interface Modifiers {
    implicit: Implicit[];
    prefix: Prefix[];
    suffix: Suffix[];
}

export interface Gear {
    id: string;
    name: string;
    modifiers: Modifiers;
}
