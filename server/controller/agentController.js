require('../model/db');
const agent = require('../model/agent');


//get all agents

exports.listofagents = async(req, res) => {
 
 try {
  const agents = await agent.find({});
  res.status(200).json(agents);
 } catch (error) {
  res.status(500).json({ message : err});
 }
}


// // adding agents
// async function insertAgent() {
//  try {
//   await agent.insertMany([
//    {
//     "name" : "Brimstone",
//     "agentImg": "https://static.wikia.nocookie.net/valorant/images/3/37/Brimstone_artwork.png",
//     "role" : "controller",
//     "agentNumber" : 1,
//     "agentBio": "Joining from the USA, Brimstone's orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and from a distance make him an unmatched boots-on-the-ground commander.",
//     "selectionVoice" : "They think I'm an old dog? Heh, I'll show 'em just how many tricks I know.",
//     "bgColor" : "293462",
//     "qAbilityName" : "incendiary",
//     "qAbilityDescription" : "EQUIP an incendiary grenade launcher. FIRE to launch a grenade that detonates as it comes to a rest on the floor, creating a lingering fire zone that damages players within the zone.",
//     "eAbilityName" : "sky smoke",
//     "eAbilityDescription" : "EQUIP a tactical map. FIRE to set locations where Brimstone’s smoke clouds will land. ALTERNATE FIRE to confirm, launching long-lasting smoke clouds that block vision in the selected area.",
//     "cAbilityName" : "stim beacon",
//     "cAbilityDescription" : "EQUIP a stim beacon. FIRE to toss the stim beacon in front of Brimstone. Upon landing, the stim beacon will create a field that grants players RapidFire.",
//     "xAbilityName" : "orbital strike",
//     "xAbilityDescription" : "EQUIP a tactical map. FIRE to launch a lingering orbital strike laser at the selected location, dealing high damage-over-time to players caught in the selected area."    
//    },
//    {
//     "name" : "Phoenix",
//     "agentImg": "https://static.wikia.nocookie.net/valorant/images/f/fa/Phoenix_artwork.png",
//     "role" : "duelist",
//     "agentNumber" : 2,
//     "agentBio": "Hailing from the U.K., Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he's got backup or not, he'll rush into a fight on his own terms.",
//     "selectionVoice" : "Just take a seat, I got this.",
//     "bgColor" : "F7D716",
//     "qAbilityName" : "curveball",
//     "qAbilityDescription" : "EQUIP a flare orb that takes a curving path and detonates shortly after throwing. FIRE to curve the flare orb to the left, detonating and blinding any player who sees the orb. ALTERNATE FIRE to curve the flare orb to the right.",
//     "eAbilityName" : "hot hands",
//     "eAbilityDescription" : "EQUIP a fireball. FIRE to throw a fireball that explodes after a set amount of time or upon hitting the ground, creating a lingering fire zone that damages enemies.",
//     "cAbilityName" : "blaze",
//     "cAbilityDescription" : "EQUIP a flame wall. FIRE to create a line of flame that moves forward, creating a wall of fire that blocks vision and damages players passing through it. HOLD FIRE to bend the wall in the direction of your crosshair.",
//     "xAbilityName" : "run it back",
//     "xAbilityDescription" : "INSTANTLY place a marker at Phoenix’s location. While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to this location with full health."    
//    }
//   ]);
//  } catch (error) {
//   console.log(error);
//  }
// }

// insertAgent();



// async function insertAgent() {
//  try {
//   await agent.insertMany([
//    {
//     "name" : "",
//     "agentImg": "",
//     "role" : "",
//     "agentNumber" : 1,
//     "agentBio": "",
//     "selectionVoice" : "",
//     "bgColor" : "",
//     "qAbilityName" : "",
//     "qAbilityDescription" : "",
//     "eAbilityName" : "",
//     "eAbilityDescription" : "",
//     "cAbilityName" : "",
//     "cAbilityDescription" : "",
//     "xAbilityName" : "",
//     "xAbilityDescription" : ""    
//    }
//   ]);
//  } catch (error) {
//   console.log(error);
//  }
// }