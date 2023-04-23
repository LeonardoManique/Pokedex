const pokeList = [
    { id: "001", name: "Bulbasaur", img: "./IMG/001.png", typeImg: ["./IMG/grass.png"], button: "CAPTURAR" },
    { id: "002", name: "Ivysaur", img: "./IMG/002.png", typeImg: ["./IMG/grass.png"], button: "CAPTURAR" },
    { id: "003", name: "Venusaur", img: "./IMG/003.png", typeImg: ["./IMG/grass.png"], button: "CAPTURAR" },
    { id: "004", name: "Charmander", img: "./IMG/004.png", typeImg: ["./IMG/Fire.png"], button: "CAPTURAR" },
    { id: "005", name: "Charmeleon", img: "./IMG/005.png", typeImg: ["./IMG/Fire.png"], button: "CAPTURAR" },
    { id: "006", name: "Charizard", img: "./IMG/006.png", typeImg: ["./IMG/Fire.png"], button: "CAPTURAR" },
    { id: "007", name: "Squirtle", img: "./IMG/007.png", typeImg: ["./IMG/water.png"], button: "CAPTURAR" },
    { id: "008", name: "Wartortle", img: "./IMG/008.png", typeImg: ["./IMG/water.png"], button: "CAPTURAR" },
    { id: "009", name: "Blastoise", img: "./IMG/009.png", typeImg: ["./IMG/water.png"], button: "CAPTURAR" },
    { id: "010", name: "Caterpie", img: "./IMG/010.png", typeImg: ["./IMG/bug.png"], button: "CAPTURAR" },
    { id: "011", name: "Metapod", img: "./IMG/011.png", typeImg: ["./IMG/bug.png"], button: "CAPTURAR" },
    { id: "012", name: "Butterfree", img: "./IMG/012.png", typeImg: ["./IMG/fly.png"], button: "CAPTURAR" },
    { id: "013", name: "Weedle", img: "./IMG/013.png", typeImg: ["./IMG/bug.png"], button: "CAPTURAR" },
    { id: "014", name: "Kakuna", img: "./IMG/014.png", typeImg: ["./IMG/bug.png"], button: "CAPTURAR" },
    { id: "015", name: "Beedrill", img: "./IMG/015.png", typeImg: ["./IMG/fly.png"], button: "CAPTURAR" },
    { id: "016", name: "Pidgey", img: "./IMG/016.png", typeImg: ["./IMG/fly.png"], button: "CAPTURAR" },
    { id: "017", name: "Pidgeotto", img: "./IMG/017.png", typeImg: ["./IMG/fly.png"], button: "CAPTURAR" },
    { id: "018", name: "Pidgeot", img: "./IMG/018.png", typeImg: ["./IMG/fly.png"], button: "CAPTURAR" },
    { id: "019", name: "Rattata", img: "./IMG/019.png", typeImg: ["./IMG/normal.png"], button: "CAPTURAR" },
    { id: "020", name: "Raticate", img: "./IMG/020.png", typeImg: ["./IMG/normal.png"], button: "CAPTURAR" },
    { id: "021", name: "Spearow", img: "./IMG/021.png", typeImg: ["./IMG/fly.png"], button: "CAPTURAR" },
    { id: "022", name: "Fearow", img: "./IMG/022.png", typeImg: ["./IMG/fly.png"], button: "CAPTURAR" },
    { id: "023", name: "Ekans", img: "./IMG/023.png", typeImg: ["./IMG/poison.png"], button: "CAPTURAR" },
    { id: "024", name: "Arbok", img: "./IMG/024.png", typeImg: ["./IMG/poison.png"], button: "CAPTURAR" },
    { id: "025", name: "Pikachu", img: "./IMG/025.png", typeImg: ["./IMG/electric.png"], button: "CAPTURAR" },
    { id: "026", name: "Raichu", img: "./IMG/026.png", typeImg: ["./IMG/electric.png"], button: "CAPTURAR" },
    { id: "027", name: "Sandshrew", img: "./IMG/027.png", typeImg: ["./IMG/ground.png"], button: "CAPTURAR" },
    { id: "028", name: "Sandslash", img: "./IMG/028.png", typeImg: ["./IMG/ground.png"], button: "CAPTURAR" },
    { id: "029", name: "Nidoran♀", img: "./IMG/029.png", typeImg: ["./IMG/rock.png"], button: "CAPTURAR" },
    { id: "030", name: "Nidorina", img: "./IMG/030.png", typeImg: ["./IMG/rock.png"], button: "CAPTURAR" },
    { id: "031", name: "Nidoqueen", img: "./IMG/031.png", typeImg: ["./IMG/rock.png"], button: "CAPTURAR" },
    { id: "032", name: "Nidoran♂", img: "./IMG/032.png", typeImg: ["./IMG/poison.png"], button: "CAPTURAR" },
    { id: "033", name: "Nidoran♂", img: "./IMG/033.png", typeImg: ["./IMG/poison.png"], button: "CAPTURAR" },
    { id: "034", name: "Nidoking", img: "./IMG/034.png", typeImg: ["./IMG/poison.png"], button: "CAPTURAR" },
    { id: "035", name: "Clefairy", img: "./IMG/035.png", typeImg: ["./IMG/normal.png"], button: "CAPTURAR" },
    { id: "036", name: "Clefable", img: "./IMG/036.png", typeImg: ["./IMG/normal.png"], button: "CAPTURAR" },
    { id: "037", name: "Vulpix", img: "./IMG/037.png", typeImg: ["./IMG/Fire.png"], button: "CAPTURAR" },
    { id: "038", name: "Ninetales", img: "./IMG/038.png", typeImg: ["./IMG/Fire.png"], button: "CAPTURAR" },
    { id: "039", name: "Jigglypuff", img: "./IMG/039.png", typeImg: ["./IMG/normal.png"], button: "CAPTURAR" },
    { id: "040", name: "Wigglytuff", img: "./IMG/040.png", typeImg: ["./IMG/normal.png"], button: "CAPTURAR" },
    { id: "041", name: "Zubat", img: "./IMG/041.png", typeImg: ["./IMG/fly.png"], button: "CAPTURAR" },
    { id: "042", name: "Golbat", img: "./IMG/042.png", typeImg: ["./IMG/fly.png"], button: "CAPTURAR" },
    { id: "043", name: "Oddish", img: "./IMG/043.png", typeImg: ["./IMG/grass.png"], button: "CAPTURAR" },
    { id: "044", name: "Gloom", img: "./IMG/044.png", typeImg: ["./IMG/poison.png"], button: "CAPTURAR" },
    { id: "045", name: "Vileplume", img: "./IMG/045.png", typeImg: ["./IMG/poison.png"], button: "CAPTURAR" },
    { id: "046", name: "Paras", img: "./IMG/046.png", typeImg: ["./IMG/ground.png"], button: "CAPTURAR" },
    { id: "047", name: "Parasect", img: "./IMG/047.png", typeImg: ["./IMG/ground.png"], button: "CAPTURAR" },
    { id: "048", name: "Venonat", img: "./IMG/048.png", typeImg: ["./IMG/bug.png"], button: "CAPTURAR" },
    { id: "049", name: "Venomoth", img: "./IMG/049.png", typeImg: ["./IMG/bug.png"], button: "CAPTURAR" },
    { id: "050", name: "Diglett", img: "./IMG/050.png", typeImg: ["./IMG/ground.png"], button: "CAPTURAR" },
    { id: "051", name: "Dugtrio", img: "./IMG/051.png", typeImg: ["./IMG/ground.png"], button: "CAPTURAR" },
    { id: "052", name: "Meowth", img: "./IMG/052.png", typeImg: ["./IMG/psychic.png"], button: "CAPTURAR" },
    { id: "053", name: "Persian", img: "./IMG/053.png", typeImg: ["./IMG/psychic.png"], button: "CAPTURAR" },
    { id: "054", name: "Psyduck", img: "./IMG/054.png", typeImg: ["./IMG/water.png"], button: "CAPTURAR" },
    { id: "055", name: "Golduck", img: "./IMG/055.png", typeImg: ["./IMG/water.png"], button: "CAPTURAR" },
    { id: "056", name: "Mankey", img: "./IMG/056.png", typeImg: ["./IMG/luta.png"], button: "CAPTURAR" },
    { id: "057", name: "Primeape", img: "./IMG/057.png", typeImg: ["./IMG/luta.png"], button: "CAPTURAR" },
    { id: "058", name: "Growlithe", img: "./IMG/058.png", typeImg: ["./IMG/Fire.png"], button: "CAPTURAR" },
    { id: "059", name: "Arcanine", img: "./IMG/059.png", typeImg: ["./IMG/Fire.png"], button: "CAPTURAR" },
    { id: "060", name: "Poliwag", img: "./IMG/060.png", typeImg: ["./IMG/water.png"], button: "CAPTURAR" },
    { id: "061", name: "Poliwhirl", img: "./IMG/061.png", typeImg: ["./IMG/water.png"], button: "CAPTURAR" },
    { id: "062", name: "Poliwrath", img: "./IMG/062.png", typeImg: ["./IMG/water.png"], button: "CAPTURAR" },
    { id: "063", name: "Abra", img: "./IMG/063.png", typeImg: ["./IMG/psychic.png"], button: "CAPTURAR" },
    { id: "064", name: "Kadabra", img: "./IMG/064.png", typeImg: ["./IMG/psychic.png"], button: "CAPTURAR" },
    { id: "065", name: "Alakazam", img: "./IMG/065.png", typeImg: ["./IMG/psychic.png"], button: "CAPTURAR" },
    { id: "066", name: "Machop", img: "./IMG/066.png", typeImg: ["./IMG/luta.png"], button: "CAPTURAR" },
    { id: "067", name: "Machoke", img: "./IMG/067.png", typeImg: ["./IMG/luta.png"], button: "CAPTURAR" },
    { id: "068", name: "Machamp", img: "./IMG/068.png", typeImg: ["./IMG/luta.png"], button: "CAPTURAR" },
    { id: "069", name: "Bellsprout", img: "./IMG/069.png", typeImg: ["./IMG/grass.png"], button: "CAPTURAR" },
    { id: "070", name: "Weepinbell", img: "./IMG/070.png", typeImg: ["./IMG/grass.png"], button: "CAPTURAR" },
    { id: "071", name: "Victreebel", img: "./IMG/071.png", typeImg: ["./IMG/grass.png"], button: "CAPTURAR" },
    { id: "072", name: "Tentacool", img: "./IMG/072.png", typeImg: ["./IMG/water.png"], button: "CAPTURAR" },
    { id: "073", name: "Tentacruel", img: "./IMG/073.png", typeImg: ["./IMG/water.png"], button: "CAPTURAR" },
    { id: "074", name: "Geodude", img: "./IMG/074.png", typeImg: ["./IMG/rock.png"], button: "CAPTURAR" },
    { id: "075", name: "Graveler", img: "./IMG/075.png", typeImg: ["./IMG/rock.png"], button: "CAPTURAR" },
    { id: "076", name: "Golem", img: "./IMG/076.png", typeImg: ["./IMG/rock.png"], button: "CAPTURAR" },
    { id: "077", name: "Ponyta", img: "./IMG/077.png", typeImg: ["./IMG/Fire.png"], button: "CAPTURAR" },
    { id: "078", name: "Rapidash", img: "./IMG/078.png", typeImg: ["./IMG/Fire.png"], button: "CAPTURAR" },
    { id: "079", name: "Slowpoke", img: "./IMG/079.png", typeImg: ["./IMG/water.png"], button: "CAPTURAR" },
    { id: "080", name: "Slowbro", img: "./IMG/080.png", typeImg: ["./IMG/water.png"], button: "CAPTURAR" },
    { id: "081", name: "Magnemite", img: "./IMG/081.png", typeImg: ["./IMG/water.png"], button: "CAPTURAR" },
    { id: "082", name: "Magneton", img: "./IMG/082.png", typeImg: ["./IMG/water.png"], button: "CAPTURAR" },
    { id: "083", name: "Farfetch'd", img: "./IMG/083.png", typeImg: ["./IMG/water.png"], button: "CAPTURAR" },
    { id: "084", name: "Doduo", img: "./IMG/084.png", typeImg: ["./IMG/normal.png"], button: "CAPTURAR" },
    { id: "085", name: "Dodrio", img: "./IMG/085.png", typeImg: ["./IMG/normal.png"], button: "CAPTURAR" },
    { id: "086", name: "Seel", img: "./IMG/086.png", typeImg: ["./IMG/water.png"], button: "CAPTURAR" },
    { id: "087", name: "Dewgong", img: "./IMG/087.png", typeImg: ["./IMG/water.png"], button: "CAPTURAR" },
    { id: "088", name: "Grimer", img: "./IMG/088.png", typeImg: ["./IMG/poison.png"], button: "CAPTURAR" },
    { id: "089", name: "Muk", img: "./IMG/089.png", typeImg: ["./IMG/poison.png"], button: "CAPTURAR" },
    { id: "090", name: "Shellder", img: "./IMG/090.png", typeImg: ["./IMG/water.png"], button: "CAPTURAR" },
    { id: "091", name: "Cloyster", img: "./IMG/091.png", typeImg: ["./IMG/ice.png"], button: "CAPTURAR" },
    { id: "092", name: "Gastly", img: "./IMG/092.png", typeImg: ["./IMG/ghost.png"], button: "CAPTURAR" },
    { id: "093", name: "Haunter", img: "./IMG/093.png", typeImg: ["./IMG/ghost.png"], button: "CAPTURAR" },
    { id: "094", name: "Gengar", img: "./IMG/094.png", typeImg: ["./IMG/ghost.png"], button: "CAPTURAR" },
    { id: "095", name: "Onix", img: "./IMG/095.png", typeImg: ["./IMG/rock.png"], button: "CAPTURAR" },
    { id: "096", name: "Drowzee", img: "./IMG/096.png", typeImg: ["./IMG/psychic.png"], button: "CAPTURAR" },
    { id: "097", name: "Hypno", img: "./IMG/097.png", typeImg: ["./IMG/psychic.png"], button: "CAPTURAR" },
    { id: "098", name: "Krabby", img: "./IMG/098.png", typeImg: ["./IMG/water.png"], button: "CAPTURAR" },
    { id: "099", name: "Kingler", img: "./IMG/099.png", typeImg: ["./IMG/water.png"], button: "CAPTURAR" },
    { id: "100", name: "Voltorb", img: "./IMG/100.png", typeImg: ["./IMG/electric.png"], button: "CAPTURAR" },
    { id: "101", name: "Electrode", img: "./IMG/101.png", typeImg: ["./IMG/electric.png"], button: "CAPTURAR" },
    { id: "102", name: "Exeggcute", img: "./IMG/102.png", typeImg: ["./IMG/grass.png"], button: "CAPTURAR" },
    { id: "103", name: "Exeggutor", img: "./IMG/103.png", typeImg: ["./IMG/grass.png"], button: "CAPTURAR" },
    { id: "104", name: "Cubone", img: "./IMG/104.png", typeImg: ["./IMG/ground.png"], button: "CAPTURAR" },
    { id: "105", name: "Marowak", img: "./IMG/105.png", typeImg: ["./IMG/ground.png"], button: "CAPTURAR" },
    { id: "106", name: "Hitmonlee", img: "./IMG/106.png", typeImg: ["./IMG/luta.png"], button: "CAPTURAR" },
    { id: "107", name: "Hitmonchan", img: "./IMG/107.png", typeImg: ["./IMG/luta.png"], button: "CAPTURAR" },
    { id: "108", name: "Lickitung", img: "./IMG/108.png", typeImg: ["./IMG/normal.png"], button: "CAPTURAR" },
    { id: "109", name: "Koffing", img: "./IMG/109.png", typeImg: ["./IMG/poison.png"], button: "CAPTURAR" },
    { id: "110", name: "Weezing", img: "./IMG/110.png", typeImg: ["./IMG/poison.png"], button: "CAPTURAR" },
    { id: "111", name: "Rhyhorn", img: "./IMG/111.png", typeImg: ["./IMG/rock.png"], button: "CAPTURAR" },
    { id: "112", name: "Rhydon", img: "./IMG/112.png", typeImg: ["./IMG/rock.png"], button: "CAPTURAR" },
    { id: "113", name: "Chansey", img: "./IMG/113.png", typeImg: ["./IMG/normal.png"], button: "CAPTURAR" },
    { id: "114", name: "Tangela", img: "./IMG/114.png", typeImg: ["./IMG/water.png"], button: "CAPTURAR" },
    { id: "115", name: "Kangaskhan", img: "./IMG/115.png", typeImg: ["./IMG/ground.png"], button: "CAPTURAR" },
    { id: "116", name: "Horsea", img: "./IMG/116.png", typeImg: ["./IMG/water.png"], button: "CAPTURAR" },
    { id: "117", name: "Seadra", img: "./IMG/117.png", typeImg: ["./IMG/water.png"], button: "CAPTURAR" },
    { id: "118", name: "Goldeen", img: "./IMG/118.png", typeImg: ["./IMG/water.png"], button: "CAPTURAR" },
    { id: "119", name: "Seaking", img: "./IMG/119.png", typeImg: ["./IMG/water.png"], button: "CAPTURAR" },
    { id: "120", name: "Staryu", img: "./IMG/120.png", typeImg: ["./IMG/water.png"], button: "CAPTURAR" },
    { id: "121", name: "Starmie", img: "./IMG/121.png", typeImg: ["./IMG/water.png"], button: "CAPTURAR" },
    { id: "122", name: "Mr. Mime", img: "./IMG/122.png", typeImg: ["./IMG/psychic.png"], button: "CAPTURAR" },
    { id: "123", name: "Scyther", img: "./IMG/123.png", typeImg: ["./IMG/fly.png"], button: "CAPTURAR" },
    { id: "124", name: "Jynx", img: "./IMG/124.png", typeImg: ["./IMG/psychic.png"], button: "CAPTURAR" },
    { id: "125", name: "Electabuzz", img: "./IMG/125.png", typeImg: ["./IMG/electric.png"], button: "CAPTURAR" },
    { id: "126", name: "Magmar", img: "./IMG/126.png", typeImg: ["./IMG/Fire.png"], button: "CAPTURAR" },
    { id: "127", name: "Pinsir", img: "./IMG/127.png", typeImg: ["./IMG/bug.png"], button: "CAPTURAR" },
    { id: "128", name: "Tauros", img: "./IMG/128.png", typeImg: ["./IMG/normal.png"], button: "CAPTURAR" },
    { id: "129", name: "Magikarp", img: "./IMG/129.png", typeImg: ["./IMG/water.png"], button: "CAPTURAR" },
    { id: "130", name: "Gyarados", img: "./IMG/130.png", typeImg: ["./IMG/water.png"], button: "CAPTURAR" },
    { id: "131", name: "Lapras", img: "./IMG/131.png", typeImg: ["./IMG/ice.png"], button: "CAPTURAR" },
    { id: "132", name: "Ditto", img: "./IMG/132.png", typeImg: ["./IMG/normal.png"], button: "CAPTURAR" },
    { id: "133", name: "Eevee", img: "./IMG/133.png", typeImg: ["./IMG/normal.png"], button: "CAPTURAR" },
    { id: "134", name: "Vaporeon", img: "./IMG/134.png", typeImg: ["./IMG/water.png"], button: "CAPTURAR" },
    { id: "135", name: "Jolteon", img: "./IMG/135.png", typeImg: ["./IMG/electric.png"], button: "CAPTURAR" },
    { id: "136", name: "Flareon", img: "./IMG/136.png", typeImg: ["./IMG/Fire.png"], button: "CAPTURAR" },
    { id: "137", name: "Porygon", img: "./IMG/137.png", typeImg: ["./IMG/psychic.png"], button: "CAPTURAR" },
    { id: "138", name: "Omanyte", img: "./IMG/138.png", typeImg: ["./IMG/water.png"], button: "CAPTURAR" },
    { id: "139", name: "Omastar", img: "./IMG/139.png", typeImg: ["./IMG/water.png"], button: "CAPTURAR" },
    { id: "140", name: "Kabuto", img: "./IMG/140.png", typeImg: ["./IMG/water.png"], button: "CAPTURAR" },
    { id: "141", name: "Kabutops", img: "./IMG/141.png", typeImg: ["./IMG/water.png"], button: "CAPTURAR" },
    { id: "142", name: "Aerodactyl", img: "./IMG/142.png", typeImg: ["./IMG/rock.png"], button: "CAPTURAR" },
    { id: "143", name: "Snorlax", img: "./IMG/143.png", typeImg: ["./IMG/normal.png"], button: "CAPTURAR" },
    { id: "144", name: "Articuno", img: "./IMG/144.png", typeImg: ["./IMG/ice.png"], button: "CAPTURAR" },
    { id: "145", name: "Zapdos", img: "./IMG/145.png", typeImg: ["./IMG/electric.png"], button: "CAPTURAR" },
    { id: "146", name: "Moltres", img: "./IMG/146.png", typeImg: ["./IMG/Fire.png"], button: "CAPTURAR" },
    { id: "147", name: "Dratini", img: "./IMG/147.png", typeImg: ["./IMG/dragon.png"], button: "CAPTURAR" },
    { id: "148", name: "Dragonair", img: "./IMG/148.png", typeImg: ["./IMG/dragon.png"], button: "CAPTURAR" },
    { id: "149", name: "Dragonite", img: "./IMG/149.png", typeImg: ["./IMG/dragon.png"], button: "CAPTURAR" },
    { id: "150", name: "Mewtwo", img: "./IMG/150.png", typeImg: ["./IMG/psychic.png"], button: "CAPTURAR" },
    { id: "151", name: "Mew", img: "./IMG/151.png", typeImg: ["./IMG/psychic.png"], button: "CAPTURAR" },
       
    
  ];
  
  const container = document.getElementById("poke-container");
  
  pokeList.forEach(pokemon => {
    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
      <img class="icon" src="${pokemon.img}" alt="${pokemon.name}">
      <p>${pokemon.id}-${pokemon.name}</p>
      <img class="type" src="${pokemon.typeImg}" alt="${pokemon.type}">
      <button class="info">${pokemon.button}</button>
    `;
    container.appendChild(div);


    const searchButton = document.getElementById("search-button");
    searchButton.addEventListener("click", search);
    function search() {
        const searchTerm = document.getElementById("search-input").value.toLowerCase();
        const resultsContainer = document.getElementById("search-results");
        resultsContainer.innerHTML = "";
      
        pokeList.forEach(pokemon => {
          if (pokemon.name.toLowerCase().includes(searchTerm)) {
            const div = document.createElement("div");
            div.classList.add("pokemon");
            div.innerHTML = `
              <img class="icon" src="${pokemon.img}" alt="${pokemon.name}">
              <p>${pokemon.id}-${pokemon.name}</p>
              <img class="type" src="${pokemon.typeImg}" alt="${pokemon.type}">
              <button class="info">${pokemon.button}</button>
            `;
            resultsContainer.appendChild(div);
          }
        });
      }
      
      
  });
  