import Machine from "../types/Machine";

const machines: Machine[] = [
  {
    id: 1,
    nome: "Thurderjaw",
    icon: "../Thurderjaw-Icon",
    imagem: "../ThurderJaw",
    weakness: ["../Corruption", "../Purgewater"],
    resistance: ["../Shock", "../Frost"],
    shortDescription: "Apex combat machine, equipped with a wide array of heavy artillery and melee attacks.",
    longDescription: "The Thunderjaw is a huge bipedal machine with features akin to those of a Tyrannosaurus Rex: powerful and bulky legs, a long body, and a heavy tail to maintain equilibrium. Its body features symmetrical weaponry: a laser weapon in its mouth, cannons on its jaws, a radar array on its back, and Disc Launchers on its hips. Like most large machines, Thunderjaws are found alone. A pair can be found together protecting a herd of Lancehorns in the Glarebreak, west of Free Heap."
  },{
    id: 2,
    nome: "Scorcher",
    icon: "../Scorcher-Icon",
    imagem: "../Scorcher",
    weakness: ["../Freeze", "../Shock"],
    resistance: ["../Fire"],
    shortDescription: "A very agile and dangerous combat machine with fire-augmented melee attacks and a mounted mine launcher for ranged engagement",
    longDescription: "The Scorcher’s chassis somewhat resembles that of a Ravager but does not have the Ravager’s tactical vulnerability to fire. Indeed, whereas Ravagers are weak against fire, this element is the Scorcher’s forte. Its head is lupine, with a long, toothy snout, a split jaw and large ear-like structures. A pair of optical sensor arrays is positioned in the same location as a fox’s eyes. Mounted on its back, between its heavyset shoulders, is a mine launcher. Positioned atop each shoulder is a heavily armored Blaze or Purgewater canister, and between its haunches is an equally heavily armored power generator. Scorchers are found alone or in packs of up to three, either guarding a herd of terraforming machines or in the herd’s immediate vicinity, near enough to hear and immediately respond to their alarm cries on detecting a threat. Their servomotors produce a characteristic heavy, clanking sound, and embers periodically fall like spittle from their mouths, increasing their intimidating appearance. If a perceived threat such as a human is identified, either by them or a nearby machine, they immediately converge on the position and engage it."
  },{
    id: 3,
    nome: "Slitherfang",
    icon: "../Slitherfang-Icon",
    imagem: "../Slitherfang",
    weakness: ["../Fire", "../Frost", "../Plasma"],
    resistance: ["../Acid", "../Shock", "../Purgewater"],
    shortDescription: "An enormous, fast combat machine that can lash out from long range. Once it assumes a coiled stance, it has access to its full arsenal as its rotating body snaps into place.",
    longDescription: "The Slitherfang is a large serpentine machine with traits of both a cobra and a rattlesnake. Its head is similar to a cobra, a pair of tri-ocular sensors on a head with two extendable metal fangs. The `sonic hood` on its head resembles a cobra's frills and can extend them to use as sound blasters. it has a pair of earth-grinding drills on its front, including three big, detachable spinners. It has a sac on the throat and a sac on the back that can change between Metalbite and Purgewater. The data nexus of the Slitherfang is at the back of the neck. Its body is composed of multiple segments that can freely spin, allowing it to move like a snake. The end of the tail consists of three shock units that charge by the Slitherfang shaking it like a rattlesnake, and then snapping them into place for electric attacks. The Slitherfang is capable of coiling around ruins and burrowing underground. Although they appear to be solitary machines, three of them had gathered at the Far Zenith Launch Facility. As the Slitherfang takes damage during battle it will change its attack pattern."
  }, {
    id: 4,
    nome: "Tideripper",
    icon: "../Tideripper-Icon",
    imagem: "../Tideripper",
    weakness: ["../Freeze", "../Shock"],
    resistance: ["../fire", "../Purgwater"],
    shortDescription: "A large powerful acquisition machine that filters sediment for resources. Whether on land or in water, it weaponizes Purgewater for devastating attacks.",
    longDescription: "The Tideripper is a large amphibious machine reminiscent of a plesiosaur. Its mouth contains a giant drill that can open each segment, two Purgewater guns on the sides of its head that shoot pressurized water beams, and two resource canisters on its `horns.` It has four small Purgewater sacs lining its neck, and two bigger Purgewater sacs on its underbelly. It stands on four flipper-like appendages it uses for swimming and land traversal. On its back is a half-disc structure that can shoot water from three segments and can rotate. Sparkers and Glowblast Canisters are present in its hindquarters, and storage and Chillwater canisters are equipped on its tail, which ends in a larger flipper. In the center of the chest is the Tideripper's heart, and four big exhaust ports are present on the back and tailbase for when purgewater is depleted. Typical for large machines, the Tideripper is predominantly solitary. They are generally found in lakes or the ocean, where they filter sediment for resources. They only come onto dry land if they detect a threat (such as a hunter), although they will occasionally waddle onto shore."
  }
]

export default machines;