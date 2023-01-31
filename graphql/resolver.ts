export const resolvers = {
  Query: {
    swords: () => [
      {
        id: 'the_vault:sword',
        name: 'Vault Sword',
        modifiers: {
          implicit: [
            {
              id: 'the_vault:base_attack_damage',
              name: 'Attack Damage',
              color: '#C82626',
              tiers: [
                {
                  minLevel: 0,
                  maxLevel: 30,
                  weight: 10,
                  value: {
                    min: 8,
                    max: 12,
                    step: 0.5,
                  },
                },
                {
                  minLevel: 19,
                  maxLevel: 50,
                  weight: 10,
                  value: {
                    min: 13,
                    max: 20,
                    step: 0.5,
                  },
                },
                {
                  minLevel: 36,
                  maxLevel: 80,
                  weight: 10,
                  value: {
                    min: 21,
                    max: 30,
                    step: 0.5,
                  },
                },
                {
                  minLevel: 50,
                  maxLevel: 80,
                  weight: 10,
                  value: {
                    min: 31,
                    max: 40,
                    step: 0.5,
                  },
                },
                {
                  minLevel: 65,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 41,
                    max: 50,
                    step: 0.5,
                  },
                },
                {
                  minLevel: 81,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 51,
                    max: 60,
                    step: 0.5,
                  },
                },
                {
                  minLevel: 99,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 61,
                    max: 74,
                    step: 0.5,
                  },
                },
              ],
              limitations: [],
            },
            {
              id: 'the_vault:base_attack_speed',
              name: 'Attack Speed',
              color: '#FFDA68',
              tiers: [
                {
                  minLevel: 0,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: -2.4,
                    max: -2.3,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 50,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: -2.29,
                    max: -2.2,
                    step: 0.01,
                  },
                },
              ],
              limitations: [],
            },
            {
              id: 'the_vault:base_durability',
              name: 'Durability',
              color: '#DFD0FE',
              tiers: [
                {
                  minLevel: 0,
                  maxLevel: 40,
                  weight: 10,
                  value: {
                    min: 1400,
                    max: 2000,
                    step: 1,
                  },
                },
                {
                  minLevel: 8,
                  maxLevel: 70,
                  weight: 10,
                  value: {
                    min: 2001,
                    max: 2800,
                    step: 1,
                  },
                },
                {
                  minLevel: 18,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 2801,
                    max: 3600,
                    step: 1,
                  },
                },
                {
                  minLevel: 34,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 3601,
                    max: 4800,
                    step: 1,
                  },
                },
                {
                  minLevel: 49,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 4801,
                    max: 6000,
                    step: 1,
                  },
                },
              ],
              limitations: [],
            },
          ],
          prefix: [
            {
              id: 'the_vault:mod_attack_damage',
              name: 'Attack Damage',
              color: '#C82626',
              tiers: [
                {
                  minLevel: 0,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 2,
                    max: 6,
                    step: 0.5,
                  },
                },
                {
                  minLevel: 22,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 7,
                    max: 12,
                    step: 0.5,
                  },
                },
                {
                  minLevel: 41,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 13,
                    max: 18,
                    step: 0.5,
                  },
                },
                {
                  minLevel: 52,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 19,
                    max: 24,
                    step: 0.5,
                  },
                },
                {
                  minLevel: 66,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 25,
                    max: 30,
                    step: 0.5,
                  },
                },
                {
                  minLevel: 79,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 31,
                    max: 35,
                    step: 0.5,
                  },
                },
                {
                  minLevel: 95,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 36,
                    max: 40,
                    step: 0.5,
                  },
                },
                {
                  minLevel: 101,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 41,
                    max: 50,
                    step: 0.5,
                  },
                },
                {
                  minLevel: 102,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 51,
                    max: 60,
                    step: 0.5,
                  },
                },
              ],
              limitations: ['Chaining', 'Stunning'],
            },
            {
              id: 'the_vault:mod_fatal_strike_damage',
              name: 'Fatal Strike Damage',
              color: '#BF0D00',
              tiers: [
                {
                  minLevel: 13,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.4,
                    max: 0.6,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 31,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.61,
                    max: 0.85,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 49,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.86,
                    max: 1.1,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 70,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 1.11,
                    max: 1.35,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 86,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 1.36,
                    max: 1.65,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 96,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 1.66,
                    max: 2,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 101,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 2.01,
                    max: 2.25,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 102,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 2.26,
                    max: 2.5,
                    step: 0.01,
                  },
                },
              ],
              limitations: [],
            },
            {
              id: 'the_vault:mod_on_hit_chain',
              name: 'Chaining',
              color: '#5D5EB8',
              tiers: [
                {
                  minLevel: 5,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 1,
                    max: 2,
                    step: 1,
                  },
                },
                {
                  minLevel: 40,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 3,
                    max: 4,
                    step: 1,
                  },
                },
                {
                  minLevel: 98,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 5,
                    max: 6,
                    step: 1,
                  },
                },
                {
                  minLevel: 101,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 7,
                    max: 8,
                    step: 1,
                  },
                },
                {
                  minLevel: 102,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 9,
                    max: 9,
                    step: 1,
                  },
                },
              ],
              limitations: ['Attack Damage', 'Stunning'],
            },
            {
              id: 'the_vault:mod_on_hit_stun',
              name: 'Stunning',
              color: '#19A6E4',
              tiers: [
                {
                  minLevel: 0,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.1,
                    max: 0.2,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 22,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.21,
                    max: 0.3,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 39,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.31,
                    max: 0.4,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 58,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.41,
                    max: 0.5,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 76,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.51,
                    max: 0.6,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 94,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.61,
                    max: 0.7,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 101,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.71,
                    max: 0.8,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 102,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.81,
                    max: 0.9,
                    step: 0.01,
                  },
                },
              ],
              limitations: ['Attack Damage', 'Chaining'],
            },
            {
              id: 'the_vault:mod_sweeping_hit_chance',
              name: 'Sweeping Hit Chance',
              color: '#E0BA61',
              tiers: [
                {
                  minLevel: 0,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.5,
                    max: 0.65,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 26,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.66,
                    max: 0.73,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 51,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.74,
                    max: 0.8,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 101,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.81,
                    max: 0.9,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 102,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.91,
                    max: 1,
                    step: 0.01,
                  },
                },
              ],
              limitations: [],
            },
            {
              id: 'the_vault:mod_damage_increase',
              name: 'Damage Increase',
              color: '#FF6B00',
              tiers: [
                {
                  minLevel: 6,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.05,
                    max: 0.09,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 21,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.1,
                    max: 0.14,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 44,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.15,
                    max: 0.21,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 73,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.22,
                    max: 0.28,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 90,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.29,
                    max: 0.35,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 101,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.36,
                    max: 0.42,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 102,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.43,
                    max: 0.5,
                    step: 0.01,
                  },
                },
              ],
              limitations: [],
            },
            {
              id: 'the_vault:mod_damage_illagers',
              name: 'Spiteful',
              color: '#009FB2',
              tiers: [
                {
                  minLevel: 0,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.1,
                    max: 0.15,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 18,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.16,
                    max: 0.22,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 36,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.23,
                    max: 0.3,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 52,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.31,
                    max: 0.38,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 80,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.39,
                    max: 0.45,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 101,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.46,
                    max: 0.5,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 102,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.51,
                    max: 0.55,
                    step: 0.01,
                  },
                },
              ],
              limitations: ['Baneful', 'Holy'],
            },
            {
              id: 'the_vault:mod_damage_spiders',
              name: 'Baneful',
              color: '#7E5E5E',
              tiers: [
                {
                  minLevel: 0,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.1,
                    max: 0.15,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 18,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.16,
                    max: 0.22,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 36,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.23,
                    max: 0.3,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 52,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.31,
                    max: 0.38,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 80,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.39,
                    max: 0.45,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 101,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.46,
                    max: 0.5,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 102,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.51,
                    max: 0.55,
                    step: 0.01,
                  },
                },
              ],
              limitations: ['Spiteful', 'Holy'],
            },
            {
              id: 'the_vault:mod_damage_undead',
              name: 'Holy',
              color: '#F9F8B0',
              tiers: [
                {
                  minLevel: 0,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.1,
                    max: 0.15,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 18,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.16,
                    max: 0.22,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 36,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.23,
                    max: 0.3,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 52,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.31,
                    max: 0.38,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 80,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.39,
                    max: 0.45,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 101,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.46,
                    max: 0.5,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 102,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.51,
                    max: 0.55,
                    step: 0.01,
                  },
                },
              ],
              limitations: ['Spiteful', 'Baneful'],
            },
          ],
          suffix: [
            {
              id: 'the_vault:mod_durability',
              name: 'Durability',
              color: '#DFD0FE',
              tiers: [
                {
                  minLevel: 11,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 500,
                    max: 900,
                    step: 1,
                  },
                },
                {
                  minLevel: 28,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 901,
                    max: 1300,
                    step: 1,
                  },
                },
                {
                  minLevel: 46,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 1301,
                    max: 1700,
                    step: 1,
                  },
                },
                {
                  minLevel: 67,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 1701,
                    max: 2100,
                    step: 1,
                  },
                },
                {
                  minLevel: 89,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 2101,
                    max: 2500,
                    step: 1,
                  },
                },
                {
                  minLevel: 101,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 2501,
                    max: 3700,
                    step: 1,
                  },
                },
                {
                  minLevel: 102,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 3701,
                    max: 5000,
                    step: 1,
                  },
                },
              ],
              limitations: [],
            },
            {
              id: 'the_vault:mod_soulbound',
              name: 'Soulbound',
              color: '#9664FD',
              tiers: [
                {
                  minLevel: 0,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    flag: true,
                  },
                },
              ],
              limitations: [],
            },
            {
              id: 'the_vault:mod_healing_cloud',
              name: 'Healing Cloud',
              color: '#E500AC',
              tiers: [
                {
                  minLevel: 0,
                  maxLevel: -1,
                  weight: 4,
                  value: {
                    tooltipDisplayName: 'Healing',
                    potion: 'minecraft:empty',
                    additionalEffects: [
                      {
                        effect: 'minecraft:instant_health',
                        duration: 20,
                        amplifier: 0,
                        showParticles: true,
                        showIcon: true,
                      },
                    ],
                    duration: 40,
                    radius: 3,
                    color: -65536,
                    affectsOwner: true,
                    triggerChance: 0.02,
                  },
                },
                {
                  minLevel: 6,
                  maxLevel: -1,
                  weight: 4,
                  value: {
                    tooltipDisplayName: 'Healing+',
                    potion: 'minecraft:empty',
                    additionalEffects: [
                      {
                        effect: 'minecraft:instant_health',
                        duration: 20,
                        amplifier: 2,
                        showParticles: true,
                        showIcon: true,
                      },
                    ],
                    duration: 5,
                    radius: 24,
                    color: -65536,
                    affectsOwner: true,
                    triggerChance: 0.02,
                  },
                },
                {
                  minLevel: 32,
                  maxLevel: -1,
                  weight: 4,
                  value: {
                    tooltipDisplayName: 'Healing II',
                    potion: 'minecraft:empty',
                    additionalEffects: [
                      {
                        effect: 'minecraft:instant_health',
                        duration: 20,
                        amplifier: 1,
                        showParticles: true,
                        showIcon: true,
                      },
                    ],
                    duration: 40,
                    radius: 3,
                    color: -65536,
                    affectsOwner: true,
                    triggerChance: 0.02,
                  },
                },
                {
                  minLevel: 38,
                  maxLevel: -1,
                  weight: 4,
                  value: {
                    tooltipDisplayName: 'Healing II+',
                    potion: 'minecraft:empty',
                    additionalEffects: [
                      {
                        effect: 'minecraft:instant_health',
                        duration: 20,
                        amplifier: 3,
                        showParticles: true,
                        showIcon: true,
                      },
                    ],
                    duration: 5,
                    radius: 24,
                    color: -65536,
                    affectsOwner: true,
                    triggerChance: 0.02,
                  },
                },
                {
                  minLevel: 64,
                  maxLevel: -1,
                  weight: 4,
                  value: {
                    tooltipDisplayName: 'Healing III',
                    potion: 'minecraft:empty',
                    additionalEffects: [
                      {
                        effect: 'minecraft:instant_health',
                        duration: 20,
                        amplifier: 2,
                        showParticles: true,
                        showIcon: true,
                      },
                    ],
                    duration: 40,
                    radius: 3,
                    color: -65536,
                    affectsOwner: true,
                    triggerChance: 0.02,
                  },
                },
                {
                  minLevel: 72,
                  maxLevel: -1,
                  weight: 4,
                  value: {
                    tooltipDisplayName: 'Healing III+',
                    potion: 'minecraft:empty',
                    additionalEffects: [
                      {
                        effect: 'minecraft:instant_health',
                        duration: 20,
                        amplifier: 4,
                        showParticles: true,
                        showIcon: true,
                      },
                    ],
                    duration: 5,
                    radius: 24,
                    color: -65536,
                    affectsOwner: true,
                    triggerChance: 0.02,
                  },
                },
                {
                  minLevel: 101,
                  maxLevel: -1,
                  weight: 4,
                  value: {
                    tooltipDisplayName: 'Healing IV',
                    potion: 'minecraft:empty',
                    additionalEffects: [
                      {
                        effect: 'minecraft:instant_health',
                        duration: 20,
                        amplifier: 3,
                        showParticles: true,
                        showIcon: true,
                      },
                    ],
                    duration: 40,
                    radius: 3,
                    color: -65536,
                    affectsOwner: true,
                    triggerChance: 0.02,
                  },
                },
                {
                  minLevel: 102,
                  maxLevel: -1,
                  weight: 4,
                  value: {
                    tooltipDisplayName: 'Healing IV+',
                    potion: 'minecraft:empty',
                    additionalEffects: [
                      {
                        effect: 'minecraft:instant_health',
                        duration: 20,
                        amplifier: 4,
                        showParticles: true,
                        showIcon: true,
                      },
                    ],
                    duration: 5,
                    radius: 24,
                    color: -65536,
                    affectsOwner: true,
                    triggerChance: 0.05,
                  },
                },
              ],
              limitations: ['Poison Cloud'],
            },
            {
              id: 'the_vault:mod_poison_cloud',
              name: 'Poison Cloud',
              color: '#E500AC',
              tiers: [
                {
                  minLevel: 0,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    tooltipDisplayName: 'Poison',
                    potion: 'minecraft:empty',
                    additionalEffects: [
                      {
                        effect: 'minecraft:poison',
                        duration: 60,
                        amplifier: 1,
                        showParticles: true,
                        showIcon: true,
                      },
                    ],
                    duration: 60,
                    radius: 4,
                    color: 4236591,
                    affectsOwner: false,
                    triggerChance: 0.05,
                  },
                },
                {
                  minLevel: 6,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    tooltipDisplayName: 'Poison+',
                    potion: 'minecraft:empty',
                    additionalEffects: [
                      {
                        effect: 'minecraft:poison',
                        duration: 20,
                        amplifier: 2,
                        showParticles: true,
                        showIcon: true,
                      },
                    ],
                    duration: 5,
                    radius: 24,
                    color: 4236591,
                    affectsOwner: false,
                    triggerChance: 0.05,
                  },
                },
                {
                  minLevel: 32,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    tooltipDisplayName: 'Poison II',
                    potion: 'minecraft:empty',
                    additionalEffects: [
                      {
                        effect: 'minecraft:poison',
                        duration: 60,
                        amplifier: 2,
                        showParticles: true,
                        showIcon: true,
                      },
                    ],
                    duration: 60,
                    radius: 4,
                    color: 4236591,
                    affectsOwner: false,
                    triggerChance: 0.05,
                  },
                },
                {
                  minLevel: 38,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    tooltipDisplayName: 'Poison II+',
                    potion: 'minecraft:empty',
                    additionalEffects: [
                      {
                        effect: 'minecraft:poison',
                        duration: 20,
                        amplifier: 4,
                        showParticles: true,
                        showIcon: true,
                      },
                    ],
                    duration: 5,
                    radius: 24,
                    color: 4236591,
                    affectsOwner: false,
                    triggerChance: 0.05,
                  },
                },
                {
                  minLevel: 64,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    tooltipDisplayName: 'Poison III',
                    potion: 'minecraft:empty',
                    additionalEffects: [
                      {
                        effect: 'minecraft:poison',
                        duration: 60,
                        amplifier: 3,
                        showParticles: true,
                        showIcon: true,
                      },
                    ],
                    duration: 60,
                    radius: 4,
                    color: 4236591,
                    affectsOwner: false,
                    triggerChance: 0.05,
                  },
                },
                {
                  minLevel: 72,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    tooltipDisplayName: 'Poison III+',
                    potion: 'minecraft:empty',
                    additionalEffects: [
                      {
                        effect: 'minecraft:poison',
                        duration: 20,
                        amplifier: 5,
                        showParticles: true,
                        showIcon: true,
                      },
                    ],
                    duration: 5,
                    radius: 24,
                    color: 4236591,
                    affectsOwner: false,
                    triggerChance: 0.05,
                  },
                },
                {
                  minLevel: 101,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    tooltipDisplayName: 'Poison IV',
                    potion: 'minecraft:empty',
                    additionalEffects: [
                      {
                        effect: 'minecraft:poison',
                        duration: 60,
                        amplifier: 4,
                        showParticles: true,
                        showIcon: true,
                      },
                    ],
                    duration: 60,
                    radius: 4,
                    color: 4236591,
                    affectsOwner: false,
                    triggerChance: 0.05,
                  },
                },
                {
                  minLevel: 102,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    tooltipDisplayName: 'Poison IV+',
                    potion: 'minecraft:empty',
                    additionalEffects: [
                      {
                        effect: 'minecraft:poison',
                        duration: 20,
                        amplifier: 6,
                        showParticles: true,
                        showIcon: true,
                      },
                    ],
                    duration: 5,
                    radius: 24,
                    color: 4236591,
                    affectsOwner: false,
                    triggerChance: 0.05,
                  },
                },
              ],
              limitations: ['Healing Cloud'],
            },
            {
              id: 'the_vault:mod_fatal_strike_chance',
              name: 'Fatal Strike Chance',
              color: '#FC2000',
              tiers: [
                {
                  minLevel: 13,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.05,
                    max: 0.1,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 33,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.11,
                    max: 0.15,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 51,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.16,
                    max: 0.2,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 72,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.21,
                    max: 0.25,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 88,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.26,
                    max: 0.3,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 100,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.31,
                    max: 0.35,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 101,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.36,
                    max: 0.5,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 102,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.51,
                    max: 0.7,
                    step: 0.01,
                  },
                },
              ],
              limitations: [],
            },
            {
              id: 'the_vault:mod_soul_chance',
              name: 'Soul Chance',
              color: '#4800FF',
              tiers: [
                {
                  minLevel: 22,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.5,
                    max: 0.75,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 44,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.76,
                    max: 1,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 66,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 1.01,
                    max: 1.5,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 88,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 1.51,
                    max: 2,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 101,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 2.01,
                    max: 3,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 102,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 3.01,
                    max: 4,
                    step: 0.01,
                  },
                },
              ],
              limitations: [],
            },
            {
              id: 'the_vault:mod_attack_speed_percent',
              name: 'Attack Speed',
              color: '#FFDA68',
              tiers: [
                {
                  minLevel: 0,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.05,
                    max: 0.1,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 36,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.11,
                    max: 0.15,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 65,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.16,
                    max: 0.2,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 96,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.21,
                    max: 0.25,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 101,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.26,
                    max: 0.3,
                    step: 0.01,
                  },
                },
                {
                  minLevel: 102,
                  maxLevel: -1,
                  weight: 10,
                  value: {
                    min: 0.31,
                    max: 0.35,
                    step: 0.01,
                  },
                },
              ],
              limitations: [],
            },
          ],
        },
      },
    ],
  },
};
