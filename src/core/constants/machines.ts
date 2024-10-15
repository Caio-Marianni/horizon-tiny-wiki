import Machine from "../types/Machine";

const machines: Machine[] = [
  {
    id: 1,
    nome: "Sawtooth",
    icon: "/machines/Sawtooth-Icon.webp",
    imagem: "/machines/Sawtooth.webp",
    type: "Terrestrial",
    size: "Medium",
    weakness: ["/elements/Corruption.webp", "/elements/Purgewater.webp"],
    resistance: ["/elements/Shock.webp", "/elements/Freeze.webp"],
    shortDescription: "An aggressive hunter, quick to close the distance and engage with melee attacks.",
    longDescription: "HEPHAESTUS appears to have modeled the Sawtooth after Smilodon fatalis, an extinct feline apex predator of the Pleistocene epoch, commonly called the saber-toothed cat. Like the saber-toothed cat, it is heavyset at the front, with a large, broad chest, neck, and shoulders, powerful legs, and no tail. Its mouth is equipped with a pair of curved, scimitar-like serrated spikes, like a saber-toothed cat's fangs. Two optical sensor arrays are located on its face, in the same position as a saber-toothed cat’s eyes. Each is composed of two sensors in a vertical configuration. A long, metal crest-like structure runs along the forward area of its back, and an array of three long antenna-like structures protrude from its back in a fan-like pattern, just behind the shoulders. Its paws are equipped with non-retractable claws."
  },{
    id: 2,
    nome: "Scorcher",
    icon: "/machines/Scorcher-Icon.webp",
    imagem: "/machines/Scorcher.webp",
    weakness: ["/elements/Freeze.webp", "/elements/Shock.webp"],
    type: "Terrestrial",
    size: "Medium",
    resistance: ["/elements/Corruption.webp"],
    shortDescription: "A very agile and dangerous combat machine with fire-augmented melee attacks and a mounted mine launcher for ranged engagement",
    longDescription: "The Scorcher’s chassis somewhat resembles that of a Ravager but does not have the Ravager’s tactical vulnerability to fire. Indeed, whereas Ravagers are weak against fire, this element is the Scorcher’s forte. Its head is lupine, with a long, toothy snout, a split jaw and large ear-like structures. A pair of optical sensor arrays is positioned in the same location as a fox’s eyes. Mounted on its back, between its heavyset shoulders, is a mine launcher. Positioned atop each shoulder is a heavily armored Blaze or Purgewater canister, and between its haunches is an equally heavily armored power generator. Scorchers are found alone or in packs of up to three, either guarding a herd of terraforming machines or in the herd’s immediate vicinity, near enough to hear and immediately respond to their alarm cries on detecting a threat."
  },{
    id: 3,
    nome: "Slitherfang",
    icon: "/machines/Slitherfang-Icon.webp",
    imagem: "/machines/Slitherfang.webp",
    type: "Terrestrial",
    size: "Big",
    weakness: ["/elements/Corruption.webp", "/elements/Freeze.webp", "/elements/Plasma.webp"],
    resistance: ["/elements/Explosive.webp", "/elements/Shock.webp", "/elements/Purgewater.webp"],
    shortDescription: "An enormous, fast combat machine that can lash out from long range. Once it assumes a coiled stance, it has access to its full arsenal as its rotating body snaps into place.",
    longDescription: "The Slitherfang is a large serpentine machine with traits of both a cobra and a rattlesnake. Its head is similar to a cobra, a pair of tri-ocular sensors on a head with two extendable metal fangs. The `sonic hood` on its head resembles a cobra's frills and can extend them to use as sound blasters. it has a pair of earth-grinding drills on its front, including three big, detachable spinners. It has a sac on the throat and a sac on the back that can change between Metalbite and Purgewater. The data nexus of the Slitherfang is at the back of the neck. Its body is composed of multiple segments that can freely spin, allowing it to move like a snake. The end of the tail consists of three shock units that charge by the Slitherfang shaking it like a rattlesnake, and then snapping them into place for electric attacks."
  }, {
    id: 4,
    nome: "Clawstrider",
    icon: "/machines/Clawstrider-Icon.webp",
    imagem: "/machines/Clawstrider.webp",
    type: "Terrestrial",
    size: "Big",
    weakness: ["/elements/Shock.webp"],
    resistance: ["/elements/Corruption.webp"],
    shortDescription: "A fast and agile combat machine covered in razor-sharp blades. It is often encountered in small packs and is capable of a variety of deadly melee attacks.",
    longDescription: "The Clawstrider resembles a dromaeosaur; it stands bipedally, with claws on each limb, an enlarged hooked claw on each foot, and sharp metal plating that resembles feathers. However, its lower jaws resemble chainsaws, and two Resource Containers can be found on its back. They have also been shown to have a Power Cell on their underside. The Elemental variants have more subtle armor plating and a dramatically different tail shape. Behavior Clawstriders are seen moving in packs, and appear to be highly aggressive. They are fast and agile, and will relentlessly pursue their quarry. Additionally, they are highly aggressive and territorial, and will closely guard their land and the machines within. Clawstriders are mountable by humans, although they are noticeably slower than ungulate mounts like the Charger or Bristleback."
  }, {
    id: 5,
    nome: "Sunwing",
    icon: "/machines/Sunwing-Icon.webp",
    imagem: "/machines/Sunwing.webp",
    type: "Flying",
    size: "Big",
    weakness: ["/elements/Purgewater.webp"],
    resistance: ["/elements/Plasma.webp"],
    shortDescription: "A flying machine that absorbs solar energy and is often found in groups. It has a variety of plasma attacks, while its energy shields and maneuverability make it hard to hit.",
    longDescription: "The Sunwing resembles a pterosaur in form, with a retractable fin used for plasma attacks located on its head, mimicking the distinctive crest of these long extinct creatures. Its arms hold the majority of its defensive/acquisition equipment, with two shields situated at the bend in their joints and a thin conductive-mesh knitted to the body and the arms, acting both as wings and solar collection panels. It possesses a resource canister in its chest for storing collected materials and two Sparkers on its hips which, presumably, store collected solar energy. It also possesses a small tail, with a white tip and two small solar collection weaves. Advertisement Behavior Sunwings possess photovoltaic wings which they use to collect and store energy. They can be found patrolling the skies of the Forbidden West, frequently hovering at great heights or roosting on tall mountain peaks to absorb as much solar energy as possible."
  }, {
    id: 6,
    nome: "Glinthawk",
    icon: "/machines/Glinthawk-Icon.webp",
    imagem: "/machines/Glinthawk.webp",
    type: "Flying",
    size: "Medium",
    weakness: ["/elements/Purgewater.webp"],
    resistance: ["/elements/Freeze.webp"],
    shortDescription: "An aerial scavenger designed to keep the land clean of broken machines.",
    longDescription: "A Glinthawk has a distinctly avian appearance, resembling a vulture. Its wings, tail, legs and feet armor plating that resembles feathers and avian wings, tail, legs, and feet. The general appearance of the chassis resembles that of a vulture. The beak is composed of an upper mandible equipped longitudinally with an array of rotary cutting tools, a lower mandible equipped with a longitudinal saw-like cutting tool, and a pair of lateral mandibles, each equipped with a rotary cutting tool. This complex mechanism is highly efficient at cutting, grinding and processing parts and resources from the chassis of destroyed machines. A pair of optical sensor arrays is located in the same position as a vulture’s eyes. An armored Freeze sac containing Chillwater, is positioned on its breast, presumably as part of a cooling system that prevents excessive heat buildup in the beak’s cutting tools during scavenging."
  }
]

export default machines;