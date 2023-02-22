// import Class from "../Class/Class";
// import Race from "../Race/Race";
// import General from "../General/General";
// import Generator from "../Generator/Generator";
// import Stat from "../Stat/Stat";
// import Route from "../Way/Way";
// import Preview from "../Preview/Preview";
// import Notice from "../Notice/Notice";
// import Sheet from "../Sheet/Sheet";
// import Profile from "../Profile/Profile";
// import Register from "../Register/Register";


// const races = [
//   {
//     name: "Demi-elfe",
//     description: "Le Demi-elfe a hérité des qualités de ses deux parents (humain et Elfe). Il est généralement traité avec condescendance parmi les Elfes et est considéré comme un Elfe parmi les humains.",
//     bonus1: "Instinct de survie (humain)",
//     bonus2: "Lumière des étoiles (Elfe)"
//   },
//   {
//     name: "Demi-orque",
//     description: "Le Demi-orque est de grande taille. Issu de l’union souvent forcée d’une humaine et d’un Orque, il possède une force physique hors du commun. Il est généralement méprisé par les autres races, en particulier par les Nains et les Elfes.",
//     bonus1: "dans le noir total, le Demi-orque voit comme dans la pénombre jusqu’à 30 m.",
//     bonus2: "",
//   },
//   {
//     name: "Elfe, haut",
//     description: "Le Haut-elfe est un être féerique qui vit extrêmement longtemps. Il est méprisant envers les Nains et arrogant envers les autres races. Proche de la nature, il maîtrise aussi bien les arts de la magie que ceux de la guerre.",
//     bonus1: "Lumière des étoiles : pour un Haut-elfe, l’obscurité de la nuit sous la lumière des étoiles n’est que de la pénombre, où seuls les petits détails lui échappent.",
//     bonus2: "",
//   },
//   {
//     name: "Elfe, sylvain",
//     description: "L’Elfe sylvain est issu d’une culture différente de celle des Hauts-elfes. Légèrement plus petits, ils vivent au plus profond des forêts, s’abritant dans les arbres et vivant simplement de la chasse et de la cueillette. Moins arrogants que leurs cousins Hauts-elfes, ils sont cependant beaucoup plus méfiants. Ils maitrisent particulièrement l’art du camouflage et l’utilisation de l’arc.",
//     bonus1: "Lumière des étoiles : pour un Elfe sylvain, l’obscurité de la nuit sous la lumière des étoiles n’est que de la pénombre, où seuls les petits détails lui échappent.",
//     bonus2: "",
//   },
//   {
//     name: "Gnome",
//     description: "Le Gnome est une créature de petite taille pourvue d’un gros nez, d’une bonne nature et d’une curiosité insatiable pour la magie et les sciences. C’est un compagnon souvent agréable bien qu’un peu original. Les Nains et les Halfelins l’apprécient, tandis que les 'grandes' races se montrent plutôt indifférentes à leur égard.",
//     bonus1: "soit son personnage gagne un bonus de +5 sur tous les tests d’INT ;",
//     bonus2: "soit il choisit une capacité de rang 1 d’Ensorceleur. Il peut utiliser ce sort sans pénalité avec une armure allant jusqu’à la chemise de maille.",
//   },
//   {
//     name: "Halfelin",
//     description: "Le Halfelin est la plus petite des races jouables. Toujours bon vivant, souvent vif, curieux, et parfois farceur, c’est un incompris que les autres Races considèrent souvent comme turbulent, pénible, voire parfois comme un voleur.",
//     bonus1: "Petite taille : le Halfelin obtient un bonus de +1 en DEF et de +2 à tous les tests de discrétion. En revanche, un Halfelin peut seulement utiliser à une main une arme dont les DM sont au maximum égaux à 1d6 (épée courte, masse, etc.). Il lui faut utiliser les 2 mains pour les armes qui infligent 1d8 à 1d10 de DM (épée longue). Enfin il lui est interdit d’utiliser les armes qui infligent plus de 1d10 DM.",
//     bonus2: "",
//   },
//   {
//     name: "Humain",
//     description: "L’humain se distingue par sa capacité d’adaptation et son instinct qui le pousse à coloniser tous les territoires qui l’entourent. La Race humaine est la plus représentée et la plus répandue dans les zones dites 'civilisées'.",
//     bonus1: "Instinct de survie : lorsqu’une attaque devrait amener le personnage à 0 PV, les DM qu’elle inflige sont divisés par 2 (minimum 1).",
//     bonus2: "",
//   },
//   {
//     name: "Nain",
//     description: "Le Nain est petit mais robuste. Célèbre pour sa barbe, il aime les profondeurs de la terre, dont il extrait des métaux et des pierres précieuses. Isolé, il est généralement ouvert et chaleureux, mais la société naine peut paraître sévère car le travail et l’entraînement militaire y sont des obligations.",
//     bonus1: "Vision dans le noir : dans le noir total, le Nain voit comme dans la pénombre jusqu’à 30 m.",
//     bonus2: "",
//   },
// ];

// const religions = [
//   {
//     name: "Aucune",
//     description: "",
//   },
//   {
//     name: "Bahamut",
//     description: "The Platinum Dragon, god of good dragons, justice, honor, protection, nobility, and wisdom.",
//   },
//   {
//     name: "Bane",
//     description: "The Black Lord, god of war, conquest, and tyranny.",
//   },
//   {
//     name: "Beshaba",
//     description: "Lady Doom, goddess of misfortune, accidents, bad luck, and random mischief.",
//   },
//   {
//     name: "Corellon Larethian",
//     description: "Creator of the elves, god of magic, music, arts, crafts, poetry, and warfare.",
//   },
//   {
//     name: "Gruumsh",
//     description: "One-Eye, god of orcs, conquest, survival, strength, and territory.",
//   },
//   {
//     name: "Lathander",
//     description: "The Morninglord, god of dawn, renewal, birth, vitality, and youth.",
//   },
//   {
//     name: "Moradin",
//     description: "Dwarf-Father, god of dwarves, creation, smithing, protection, family, and war.",
//   },
//   {
//     name: "Mystra",
//     description: "The Lady of Mysteries, goddess of magic, spells, the Weave, knowledge, and secrets.",
//   },
//   {
//     name: "Shar",
//     description: "Mistress of the Night, goddess of darkness, secrets, loss, forgetfulness, and caverns.",
//   },
//   {
//     name: "Tymora",
//     description: "Lady Luck, goddess of good fortune, victory, skill, adventure, and boldness.",
//   },
// ];

const Scriptorium = () => {
  return (
    <div>
      {/* <Class /> */}
      {/* {races.map((race, index) => (
        <Race
          key={index}
          name={race.name}
          description={race.description}
          bonus1={race.bonus1}
          bonus2={race.bonus2}
        />
      ))} */}
      {/* <General religions={religions} /> */}
      {/* <Generator /> */}
      {/* <Stat/> */}
      {/* <Way /> */}
      {/* <Preview /> */}
      {/* <Notice /> */}
      {/* <Sheet /> */}
      {/* <Profile /> */}
      {/* <Register /> */}
    </div>
  );
};

export default Scriptorium;
