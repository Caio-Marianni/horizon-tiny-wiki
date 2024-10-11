import Weapon from "../types/Weapon";

const weapons: Weapon[] = [
  {
    id: 1,
    nome: "Spear",
    imagem: "/weapons/Spear.webp",
    tagsType: ["Melee"],
    rarity: "Uncommun",
    rarityColor: "#6ec030",
    tagsElement: ["/elements/Damage.webp"],
    description: "Strong attacks have a long charge up time and deal moderate damage to enemies. Aloy executes a heavier sequence of two vertical slashes which can knock down small to medium sized machines. Depending on the size of the machine, it may take only one hit to do so; alternately, they may be immune to the spear's knock down effect completely. Strong attacks also have a high chance of removing armor and components from machines.",
  },{
    id: 2,
    nome: "Basic Bow",
    imagem: "/weapons/Basic-Bow.webp",
    tagsType: ["Ranged"],
    rarity: "Uncommun",
    rarityColor: "#6ec030",
    tagsElement: ["/elements/Damage.webp"],
    description: "The Nora Longshot Bow, Carja Mighty Bow, and Banuk Culling Bow are variants of the Hunter Bow, available by trading special tokens that are pre-loaded in the inventory with certain editions or DLC. All three are of `Rare` value with 2 slots, and slightly altered stats compared to the Carja Hunter Bow. The tokens to get these bows do not reload upon starting New Game+, as with other special purchase contents. In the Complete Edition, the Banuk Culling Bow and Carja Mighty Bow are available for free (one time only) from tier 2-4 merchants.",
  },{
    id: 3,
    nome: "Sharpshot Bow",
    imagem: "/weapons/Sharpshot-Bow.webp",
    tagsType: ["Ranged"],
    rarity: "Rare",
    rarityColor: "#6895b1",
    tagsElement: ["/elements/Damage.webp"],
    description: "The Banuk Powershot Bow is a specialized Sharpshot Bow available only once per playthrough, from Bluegleam Merchants in The Cut. It normally costs 14 Bluegleam, though the AdeptNG+ version requires additional resources. It is capable of 'overdrawn' shots where the user can draw the string longer than the limit of regular variants for exceedingly powerful shots. It has 3 slots and is capable of using all 3 varieties of Sharpshot Bow ammo like the Shadow variant. Combined with nocking triple arrows and the usage of damage mods, a fully power-drawn shot can deal extremely high damage per shot from a rather surprising range, perfect for sniping.",
  },{
    id: 4,
    nome: "Tearblaster",
    imagem: "/weapons/Tearblaster.webp",
    tagsType: ["Ranged"],
    rarity: "Rare",
    rarityColor: "#6895b1",
    tagsElement: ["/elements/Damage.webp", "/elements/Explosive.webp"],
    description: "The Tearblaster is a short-range ranged weapon that fires blasts of compressed air that easily strip armor and components from machines and stagger human and small machine enemies.",
  },{
    id: 5,
    nome: "Icerail",
    imagem: "/weapons/Icerail.webp",
    tagsType: ["Ranged"],
    rarity: "Epic",
    rarityColor: "#82218c",
    tagsElement: ["/elements/Damage.webp", "/elements/Freeze.webp"],
    description: "The Icerail is a close-ranged weapon in Horizon Zero Dawn: The Frozen Wilds. It fires a close-ranged attack that deals low amounts of damage but has high Freeze severity. The weapon is first given to Aloy as reward for completing the quest For the Werak. It can later be purchased from Special Merchants in The Cut.",
  },{
    id: 6,
    nome: "War Bow",
    imagem: "/weapons/War-Bow.webp",
    tagsType: ["Ranged"],
    rarity: "Epic",
    rarityColor: "#82218c",
    tagsElement: ["/elements/Freeze.webp", "/elements/Shock.webp", "/elements/Corruption.webp"],
    description: "The War Bow is a ranged weapon in Horizon Zero Dawn. It is a low damage bow that specializes in delivering elemental payloads to targets, forcing them into vulnerable states. This bow is best used in conjunction with other weapons due to its low impact and tear damage."
  }
]

export default weapons;