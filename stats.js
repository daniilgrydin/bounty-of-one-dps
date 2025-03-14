const upgrades_high = [
  {
    name: "Damage +45",
    type: "damage",
    value: 45,
    img: "upgrades_high/damage5.png",
    special: true,
  },
  {
    name: "Damage +30",
    type: "damage",
    value: 30,
    img: "upgrades_high/damage4.png",
    special: false,
  },
  {
    name: "Damage +20",
    type: "damage",
    value: 20,
    img: "upgrades_high/damage3.png",
    special: false,
  },
  {
    name: "Damage +15",
    type: "damage",
    value: 15,
    img: "upgrades_high/damage2.png",
    special: false,
  },
  {
    name: "Damage +10",
    type: "damage",
    value: 10,
    img: "upgrades_high/damage1.png",
    special: false,
  },
  {
    name: "Attack Speed +1.5",
    type: "attack_speed",
    value: 1.5,
    img: "upgrades_high/speed5.png",
    special: true,
  },
  {
    name: "Attack Speed +1",
    type: "attack_speed",
    value: 1,
    img: "upgrades_high/speed4.png",
    special: false,
  },
  {
    name: "Attack Speed +0.6",
    type: "attack_speed",
    value: 0.6,
    img: "upgrades_high/speed3.png",
    special: false,
  },
  {
    name: "Attack Speed +0.45",
    type: "attack_speed",
    value: 0.45,
    img: "upgrades_high/speed2.png",
    special: false,
  },
  {
    name: "Attack Speed +0.2",
    type: "attack_speed",
    value: 0.2,
    img: "upgrades_high/speed1.png",
    special: false,
  },
  {
    name: "Crit Chance +25%",
    type: "crit_chance",
    value: 25,
    img: "upgrades_high/chance5.png",
    special: true,
  },
  {
    name: "Crit Chance +15%",
    type: "crit_chance",
    value: 15,
    img: "upgrades_high/chance4.png",
    special: false,
  },
  {
    name: "Crit Chance +10%",
    type: "crit_chance",
    value: 10,
    img: "upgrades_high/chance3.png",
    special: false,
  },
  {
    name: "Crit Chance +7%",
    type: "crit_chance",
    value: 7,
    img: "upgrades_high/chance2.png",
    special: false,
  },
  {
    name: "Crit Chance +5%",
    type: "crit_chance",
    value: 5,
    img: "upgrades_high/chance1.png",
    special: false,
  },
  {
    name: "Crit Damage +60%",
    type: "crit_damage",
    value: 60,
    img: "upgrades_high/crit5.png",
    special: true,
  },
  {
    name: "Crit Damage +40%",
    type: "crit_damage",
    value: 40,
    img: "upgrades_high/crit4.png",
    special: false,
  },
  {
    name: "Crit Damage +30%",
    type: "crit_damage",
    value: 30,
    img: "upgrades_high/crit3.png",
    special: false,
  },
  {
    name: "Crit Damage +20%",
    type: "crit_damage",
    value: 20,
    img: "upgrades_high/crit2.png",
    special: false,
  },
  {
    name: "Pierce +1",
    type: "pierce",
    value: 1,
    img: "upgrades_high/pierce4.png",
    special: false,
  },
  {
    name: "Pierce +2",
    type: "pierce",
    value: 2,
    img: "upgrades_high/pierce5.png",
    special: true,
  },
  {
    name: "Bounce +1",
    type: "bounce",
    value: 1,
    img: "upgrades_high/bounce4.png",
    special: false,
  },
  {
    name: "Bounce +2",
    type: "bounce",
    value: 2,
    img: "upgrades_high/bounce5.png",
    special: true,
  },
];
const healths = [50, 100, 300, 400, 500, 600];

const presets = [
  {
    damage: 60,
    attack_speed: 2.1,
    crit_chance: 5,
    crit_damage: 200,
    pickup_range: 110,
    cooldown: 90,
    bounce: 0,
    pierce: 0,
    move_speed: 1,
    health: 6,
  },

  {
    damage: 50,
    attack_speed: 2.1,
    crit_chance: 5,
    crit_damage: 200,
    pickup_range: 110,
    cooldown: 90,
    bounce: 0,
    pierce: 5,
    move_speed: 1,
    health: 6,
  },

  {
    damage: 60,
    attack_speed: 2.1 * 0.8,
    crit_chance: 5,
    crit_damage: 200,
    pickup_range: 110,
    cooldown: 90 * 0.8,
    bounce: 0,
    pierce: 0,
    move_speed: 1,
    health: 6,
  },

  {
    damage: 60,
    attack_speed: 2.1,
    crit_chance: 5,
    crit_damage: 200,
    pickup_range: 110,
    cooldown: 90,
    bounce: 0,
    pierce: 0,
    move_speed: 1.3,
    health: 6,
  },

  {
    damage: 60,
    attack_speed: 1.9,
    crit_chance: 5,
    crit_damage: 200,
    pickup_range: 110,
    cooldown: 90,
    bounce: 0,
    pierce: 0,
    move_speed: 1,
    health: 4,
  },

  {
    damage: 60,
    attack_speed: 2.1,
    crit_chance: 5,
    crit_damage: 200,
    pickup_range: 110,
    cooldown: 90,
    bounce: 0,
    pierce: 0,
    move_speed: 1,
    health: 6,
  },

  {
    damage: 60,
    attack_speed: 2.1 - 0.3,
    crit_chance: 5,
    crit_damage: 200,
    pickup_range: 110,
    cooldown: 90,
    bounce: 0,
    pierce: 0,
    move_speed: 1.3,
    health: 6,
  },

  {
    damage: 60,
    attack_speed: 2.1,
    crit_chance: 5,
    crit_damage: 200,
    pickup_range: 110,
    cooldown: 90,
    bounce: 0,
    pierce: 0,
    move_speed: 1,
    health: 6,
  },

  {
    damage: 60,
    attack_speed: 2.1 * 0.8,
    crit_chance: 5,
    crit_damage: 200,
    pickup_range: 110 * 1.3,
    cooldown: 90,
    bounce: 0,
    pierce: 0,
    move_speed: 1,
    health: 6,
  },
];

const items = [
    {
        name: "180 No Scope",
        modifier:
        {
            dps: {operation: 'mult', value: 1.8}
        },
        img: "objects/180_no_Scope.webp"
    },
    {
        name: "Corkscrew Bullet",
        modifier:
        {
            pierce: {operation: 'add', value: 1}
        },
        img: "objects/CorkscrewBullet.webp"
    },
    {
        name: "Dirty Nigel",
        modifier:
        {
            damage: {operation: 'multiply', value: 1.2},
            projectile_speed: {operation: 'mult', value: 0.5}
        },
        img: "objects/DirtyNigel.webp"
    },
    {
        name: "Far Sight",
        modifier:
        {
            damage: {operation: 'mult', value: 1.3},
            attack_speed: {operation: 'mult', value: 0.8},
            projectile_speed: {operation: 'mult', value: 2}
        },
        img: "objects/FarSight.webp"
    },
    {
        name: "Hawk Eye",
        modifier:
        {
            damage: {operation: 'mult', value: 0.5},
            crit_chance: {operation: 'add', value: 60}
        },
        img: "objects/HawkEye.webp"
    },
];