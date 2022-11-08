import React, { useState } from "react";
import "./harry.css"

export default function Harry() {

  const [status,setStatus] = useState(false);
  const [spell,setSpell] = useState("");
  const [ron,setRon] = useState(false);

  return (
    <div>
      
      {!ron && <h3 style={{color : "white", textAlign:"center"}}>They are approaching!!!!!</h3>}
      {ron && <h3 style={{color : "white", textAlign:"center"}}>One more needed from the Dumbledore's Army, to ward them off...</h3>}
      <p style={{color:"black", width:"fit-content"}}>
        [<p>"Aardvark",</p>
        <p>"Albatross",</p>
        <p>"Alligator",</p>
        <p>"Alpaca",</p>
        <p>"Ant",</p>
        <p>"Anteater",</p>
        <p>"Antelope",</p>
        <p>"Ape",</p>
        <p>"Armadillo",</p>
        <p>"Donkey",</p>
        <p>"Baboon",</p>
        <p>"Badger",</p>
        <p>"Barracuda",</p>
        <p>"Bat",</p>
        <p>"Bear",</p>
        <p>"Beaver",</p>
        <p>"Bee",</p>
        <p>"Bison",</p>
        <p className={status === true ? "glow" : ""}>"Boar",</p>
        <p>"Buffalo",</p>
        <p>"Butterfly",</p>
        <p>"Camel",</p>
        <p>"Capybara",</p>
        <p>"Caribou",</p>
        <p>"Cassowary",</p>
        <p>"Cat",</p>
        <p>"Caterpillar",</p>
        <p>"Cattle",</p>
        <p>"Chamois",</p>
        <p>"Cheetah",</p>
        <p>"Chicken",</p>
        <p>"Chimpanzee",</p>
        <p>"Chinchilla",</p>
        <p>"Chough",</p>
        <p>"Clam",</p>
        <p>"Cobra",</p>
        <p>"Cockroach",</p>
        <p>"Cod",</p>
        <p>"Cormorant",</p>
        <p>"Coyote",</p>
        <p>"Crab",</p>
        <p>"Crane",</p>
        <p>"Crocodile",</p>
        <p>"Crow",</p>
        <p>"Curlew",</p>
        <p>"Deer",</p>
        <p>"Dinosaur",</p>
        <p>"Dog",</p>
        <p>"Dogfish",</p>
        <p>"Dolphin",</p>
        <p>"Dotterel",</p>
        <p>"Dove",</p>
        <p>"Dragonfly",</p>
        <p>"Duck",</p>
        <p>"Dugong",</p>
        <p>"Dunlin",</p>
        <p>"Eagle",</p>
        <p>"Echidna",</p>
        <p>"Eel",</p>
        <p>"Eland",</p>
        <p>"Elephant",</p>
        <p>"Elk",</p>
        <p>"Emu",</p>
        <p>"Falcon",</p>
        <p>"Ferret",</p>
        <p>"Finch",</p>
        <p>"Fish",</p>
        <p>"Flamingo",</p>
        <p>"Fly",</p>
        <p className={status === true ? "glow" : ""}>"Fox",</p>
        <p>"Frog",</p>
        <p>"Gaur",</p>
        <p>"Gazelle",</p>
        <p>"Gerbil",</p>
        <p>"Giraffe",</p>
        <p>"Gnat",</p>
        <p>"Gnu",</p>
        <p>"Goat",</p>
        <p>"Goldfinch",</p>
        <p>"Goldfish",</p>
        <p>"Goose",</p>
        <p>"Gorilla",</p>
        <p>"Goshawk",</p>
        <p>"Grasshopper",</p>
        <p>"Grouse",</p>
        <p>"Guanaco",</p>
        <p>"Gull",</p>
        <p>"Hamster",</p>
        <p className={status === true ? "glow" : ""}>"Hare",</p>
        <p>"Hawk",</p>
        <p>"Hedgehog",</p>
        <p>"Heron",</p>
        <p>"Herring",</p>
        <p>"Hippopotamus",</p>
        <p>"Hornet",</p>
        <p className={status === true ? "glow" : ""}>"Horse",</p>
        <p>"Human",</p>
        <p>"Hummingbird",</p>
        <p>"Hyena",</p>
        <p>"Ibex",</p>
        <p>"Ibis",</p>
        <p>"Jackal",</p>
        <p>"Jaguar",</p>
        <p>"Jay",</p>
        <p>"Jellyfish",</p>
        <p>"Kangaroo",</p>
        <p>"Kingfisher",</p>
        <p>"Koala",</p>
        <p>"Kookabura",</p>
        <p>"Kouprey",</p>
        <p>"Kudu",</p>
        <p>"Lapwing",</p>
        <p>"Lark",</p>
        <p>"Lemur",</p>
        <p>"Leopard",</p>
        <p>"Lion",</p>
        <p>"Llama",</p>
        <p>"Lobster",</p>
        <p>"Locust",</p>
        <p>"Loris",</p>
        <p>"Louse",</p>
        <p>"Lyrebird",</p>
        <p className={status === true ? "glow" : ""}>"Magpie",</p>
        <p>"Mallard",</p>
        <p>"Manatee",</p>
        <p>"Mandrill",</p>
        <p>"Mantis",</p>
        <p>"Marten",</p>
        <p>"Meerkat",</p>
        <p>"Mink",</p>
        <p>"Mole",</p>
        <p>"Mongoose",</p>
        <p>"Monkey",</p>
        <p>"Moose",</p>
        <p>"Mosquito",</p>
        <p>"Mouse",</p>
        <p>"Mule",</p>
        <p>"Narwhal",</p>
        <p className={status === true ? "glow" : ""}>"Non Corporeal",</p>
        <p>"Nightingale",</p>
        <p>"Octopus",</p>
        <p>"Okapi",</p>
        <p>"Opossum",</p>
        <p>"Oryx",</p>
        <p>"Ostrich",</p>
        <p className={status === true ? "glow" : ""}>"Otter",</p>
        <p>"Owl",</p>
        <p>"Oyster",</p>
        <p>"Panther",</p>
        <p>"Parrot",</p>
        <p>"Partridge",</p>
        <p>"Peafowl",</p>
        <p>"Pelican",</p>
        <p>"Penguin",</p>
        <p>"Pheasant",</p>
        <p>"Pig",</p>
        <p>"Pigeon",</p>
        <p>"Pony",</p>
        <p>"Porcupine",</p>
        <p>"Porpoise",</p>
        <p>"Quail",</p>
        <p>"Quelea",</p>
        <p>"Quetzal",</p>
        <p>"Rabbit",</p>
        <p>"Raccoon",</p>
        <p>"Rail",</p>
        <p>"Ram",</p>
        <p>"Rat",</p>
        <p>"Raven",</p>
        <p>"Red deer",</p>
        <p>"Red panda",</p>
        <p>"Reindeer",</p>
        <p>"Rhinoceros",</p>
        <p>"Rook",</p>
        <p>"Salamander",</p>
        <p>"Salmon",</p>
        <p>"Sand Dollar",</p>
        <p>"Sandpiper",</p>
        <p>"Sardine",</p>
        <p>"Scorpion",</p>
        <p>"Seahorse",</p>
        <p>"Seal",</p>
        <p>"Shark",</p>
        <p>"Sheep",</p>
        <p>"Shrew",</p>
        <p>"Skunk",</p>
        <p>"Snail",</p>
        <p>"Snake",</p>
        <p>"Sparrow",</p>
        <p>"Spider",</p>
        <p className={status === true ? "glow" : ""}>"Stag",</p>
        <p>"Squid",</p>
        <p>"Squirrel",</p>
        <p>"Starling",</p>
        <p>"Stingray",</p>
        <p>"Stinkbug",</p>
        <p>"Stork",</p>
        <p>"Swallow",</p>
        <p className={status === true ? "glow" : ""}>"Swan",</p>
        <p>"Tapir",</p>
        <p>"Tarsier",</p>
        <p>"Termite",</p>
        <p>"Tiger",</p>
        <p>"Walrus",</p>
        <p>"Wren",</p>
        <p>"Yak",</p>
        <p>"Zebra"</p>]
      </p>
      <form onSubmit={(e) => {
        e.preventDefault()
        // console.log(e);
        if((e.target.username.value).toLowerCase() === "expectopatronum" || (e.target.username.value).toLowerCase() === "expecto patronum"){
          console.log(e.target.username.value)
          setStatus(true);
          setRon(true);
        }
      }}>
        <div>
          {/* <div> */}
          <div
            className="nes-container is-dark with-title "
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <span class="title">Cast Spell</span>
            <div class="nes-field">
              {/* <input type="text" id="name_field" class="nes-input" placeholder="Type your username"/> */}
              <input
                id="username"
                name="username"
                type="text"
                value={spell}
                onChange={(e) => setSpell(e.target.value)}
                // placeholder="its all dark"
                className="login-form-input"
                required
              />
            </div>
            <div className="login-button">
              <button type="submit">Cast</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
