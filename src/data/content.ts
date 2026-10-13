/**
 * Hand-written copy for every element: discovery, a short summary,
 * everyday uses and one memorable fact.
 *
 * `note` is optional extra nuclear context shown in the stability section
 * (for example a famous radioactive isotope of an otherwise stable element).
 */
export type ElementCopy = {
  year: string;
  by: string;
  summary: string;
  uses: string[];
  fact: string;
  note?: string;
};

export const COPY: Record<string, ElementCopy> = {
  H: {
    year: "1766",
    by: "Henry Cavendish",
    summary:
      "The lightest and most abundant element in the universe: one proton, one electron and, usually, no neutron at all. Roughly three-quarters of all ordinary matter is hydrogen, and stars shine by fusing it into helium.",
    uses: [
      "Making ammonia for fertiliser (the Haber–Bosch process)",
      "Refining petroleum and hardening vegetable oils",
      "Fuel cells and rocket propellant",
    ],
    fact: "The hydrogen in the water you drink is about 13.8 billion years old: its protons formed in the first second after the Big Bang.",
    note: "Hydrogen-3 (tritium) is radioactive, with a half-life of about 12.3 years. It lights up some watch dials and exit signs.",
  },
  He: {
    year: "1868",
    by: "Pierre Janssen and Norman Lockyer",
    summary:
      "A colourless, unreactive noble gas that was spotted in the Sun's light during a solar eclipse 27 years before anyone isolated it on Earth. It is the second most abundant element in the universe.",
    uses: [
      "Cooling the superconducting magnets in MRI scanners",
      "Lifting gas for weather balloons and airships",
      "Shielding gas for welding and leak detection",
    ],
    fact: "Below −271 °C liquid helium becomes a superfluid that can creep up the walls of its container and over the rim.",
  },
  Li: {
    year: "1817",
    by: "Johan August Arfwedson",
    summary:
      "The lightest metal, soft enough to cut with a knife and light enough to float on oil. It reacts with water and air, so it is stored under oil or argon.",
    uses: [
      "Rechargeable lithium-ion batteries",
      "Mood-stabilising medication (lithium carbonate)",
      "Heat-resistant glass and ceramics",
    ],
    fact: "Lithium is one of only three elements made in the Big Bang itself, alongside hydrogen and helium.",
  },
  Be: {
    year: "1798",
    by: "Louis Nicolas Vauquelin",
    summary:
      "A light, stiff, steel-grey metal that is almost transparent to X-rays. Its dust and compounds are toxic, so it is handled with great care.",
    uses: [
      "Windows for X-ray tubes and detectors",
      "Copper–beryllium alloys for springs and non-sparking tools",
      "Mirrors for space telescopes",
    ],
    fact: "The 18 mirror segments of the James Webb Space Telescope are made of gold-coated beryllium.",
  },
  B: {
    year: "1808",
    by: "Joseph Louis Gay-Lussac, Louis Jacques Thénard and Humphry Davy",
    summary:
      "A hard, black metalloid that is almost never found free in nature; it is mined mostly as borax and other borates. Plants cannot grow without traces of it.",
    uses: [
      "Borosilicate glass for labware and ovenware",
      "Neodymium–iron–boron magnets",
      "Neutron-absorbing control rods in nuclear reactors",
    ],
    fact: "Boron carbide is so hard it is used in body armour and tank plating.",
  },
  C: {
    year: "Ancient",
    by: "Known since prehistory",
    summary:
      "The backbone of all known life. Carbon atoms link to each other in chains and rings, forming millions of compounds, and the pure element can be soft, slippery graphite or diamond, the hardest natural material.",
    uses: [
      "Steel, which is iron with a little carbon",
      "Fuels such as coal, oil and natural gas",
      "Carbon fibre, graphite pencils and lubricants",
    ],
    fact: "Diamond and graphite are both pure carbon. The only difference is how the atoms are arranged.",
    note: "Carbon-14 is radioactive (half-life about 5,730 years). Measuring how much is left in bone, wood or cloth dates things that were once alive.",
  },
  N: {
    year: "1772",
    by: "Daniel Rutherford",
    summary:
      "A colourless gas that makes up about 78% of the air. Its two atoms are joined by a triple bond so strong that most living things cannot use nitrogen until bacteria or lightning break it apart.",
    uses: [
      "Ammonia-based fertilisers",
      "Liquid nitrogen for freezing food, cells and cryosurgery",
      "An inert atmosphere for packaging food and making electronics",
    ],
    fact: "Liquid nitrogen boils at −196 °C, cold enough to make a flower shatter like glass.",
  },
  O: {
    year: "1774",
    by: "Carl Wilhelm Scheele and Joseph Priestley",
    summary:
      "A reactive gas that makes up about 21% of the air and nearly half the mass of Earth's crust. Animals use it to release energy from food, and almost all of it in the air was put there by photosynthesis.",
    uses: [
      "Medical oxygen therapy",
      "Steelmaking and cutting torches",
      "Rocket oxidiser, as liquid oxygen",
    ],
    fact: "Liquid oxygen is pale blue and is pulled towards a strong magnet.",
  },
  F: {
    year: "1886",
    by: "Henri Moissan",
    summary:
      "The most reactive and most electronegative element of all: a pale yellow gas that attacks almost everything, even glass. Several chemists were injured or killed trying to isolate it.",
    uses: [
      "Fluoride in toothpaste and drinking water",
      "Non-stick PTFE (Teflon) coatings",
      "Enriching uranium as uranium hexafluoride",
    ],
    fact: "Henri Moissan won the 1906 Nobel Prize in Chemistry for finally isolating fluorine.",
  },
  Ne: {
    year: "1898",
    by: "William Ramsay and Morris Travers",
    summary:
      "An inert noble gas that glows a vivid red-orange when electricity passes through it. It is rare on Earth and is extracted from liquefied air.",
    uses: [
      "Neon signs (pure neon gives the red-orange ones)",
      "Helium–neon lasers",
      "High-voltage indicators and vacuum tubes",
    ],
    fact: "Most 'neon' signs in other colours actually use argon, mercury vapour or coated glass.",
  },
  Na: {
    year: "1807",
    by: "Humphry Davy",
    summary:
      "A soft, silvery alkali metal that reacts violently with water. Bonded to chlorine it becomes table salt, and sodium ions carry the electrical signals in your nerves.",
    uses: [
      "Table salt and the chemical industry built on it",
      "Yellow sodium-vapour street lights",
      "Coolant in some fast nuclear reactors",
    ],
    fact: "Its symbol, Na, comes from natrium, the Latin name for soda.",
  },
  Mg: {
    year: "1755",
    by: "Joseph Black",
    summary:
      "A light, strong alkaline earth metal that burns with a dazzling white flame. A magnesium atom sits at the centre of every chlorophyll molecule, so plants cannot photosynthesise without it.",
    uses: [
      "Lightweight alloys for cars, laptops and aircraft",
      "Flares, sparklers and fireworks",
      "Supplements and antacids",
    ],
    fact: "Magnesium is about a third lighter than aluminium.",
  },
  Al: {
    year: "1825",
    by: "Hans Christian Ørsted",
    summary:
      "The most abundant metal in Earth's crust: light, non-magnetic and protected from corrosion by a thin oxide skin. It was once so hard to extract that it cost more than gold.",
    uses: [
      "Drink cans, foil and packaging",
      "Aircraft, car and building structures",
      "Overhead power lines",
    ],
    fact: "The tip of the Washington Monument, set in 1884, is a small pyramid of aluminium, chosen because it was then a precious metal.",
  },
  Si: {
    year: "1824",
    by: "Jöns Jacob Berzelius",
    summary:
      "A shiny blue-grey metalloid and the second most abundant element in Earth's crust, mostly locked up in sand and rock. Purified, it is the semiconductor at the heart of nearly every computer chip.",
    uses: [
      "Microchips and transistors",
      "Solar cells",
      "Glass, concrete and silicone rubbers",
    ],
    fact: "Silicon for chips is purified to about 99.9999999%: nine nines.",
  },
  P: {
    year: "1669",
    by: "Hennig Brand",
    summary:
      "Discovered by an alchemist boiling down urine in search of the philosopher's stone. White phosphorus glows in the dark and can catch fire in air; red phosphorus is far more stable.",
    uses: [
      "Phosphate fertilisers",
      "Safety matches (red phosphorus on the striking strip)",
      "Food additives and flame retardants",
    ],
    fact: "The backbone of your DNA and the ATP that powers your cells are both built from phosphate groups.",
  },
  S: {
    year: "Ancient",
    by: "Known since antiquity",
    summary:
      "A bright yellow nonmetal found around volcanoes and hot springs, known in the ancient world as brimstone. It is part of the proteins in every living cell.",
    uses: [
      "Sulfuric acid, one of the most-produced industrial chemicals",
      "Vulcanising rubber for tyres",
      "Fertilisers and fungicides",
    ],
    fact: "The rotten-egg smell blamed on sulfur comes from hydrogen sulfide. Pure sulfur is nearly odourless.",
  },
  Cl: {
    year: "1774",
    by: "Carl Wilhelm Scheele",
    summary:
      "A yellow-green, choking gas and a powerful disinfectant. Chlorine is too reactive to occur free in nature, but bound to sodium it forms ordinary salt.",
    uses: [
      "Disinfecting drinking water and swimming pools",
      "PVC plastic",
      "Bleach and many medicines",
    ],
    fact: "Scheele didn't realise he had found an element. Humphry Davy proved it in 1810 and named it after the Greek chloros, pale green.",
  },
  Ar: {
    year: "1894",
    by: "Lord Rayleigh and William Ramsay",
    summary:
      "A noble gas that makes up almost 1% of the air, more than twenty times as much as carbon dioxide. It was found because nitrogen taken from air was slightly heavier than nitrogen made chemically.",
    uses: [
      "Shielding gas for welding",
      "Filling incandescent and fluorescent bulbs",
      "Insulating gas between double-glazed window panes",
    ],
    fact: "Its name comes from the Greek argos, meaning lazy or idle.",
  },
  K: {
    year: "1807",
    by: "Humphry Davy",
    summary:
      "A soft alkali metal that reacts with water so fast it bursts into a lilac flame. Potassium ions help nerve cells fire and keep your heart beating steadily.",
    uses: [
      "Potash fertilisers",
      "Potassium nitrate in gunpowder and food curing",
      "Soft soaps and liquid detergents",
    ],
    fact: "Bananas are very slightly radioactive because a tiny share of their potassium is potassium-40.",
    note: "About 0.012% of natural potassium is radioactive potassium-40, half-life 1.25 billion years. It is the largest source of natural radioactivity inside your body.",
  },
  Ca: {
    year: "1808",
    by: "Humphry Davy",
    summary:
      "A silvery alkaline earth metal and the most abundant metal in the human body. It builds bones, teeth and shells; limestone, marble and chalk are all calcium carbonate.",
    uses: [
      "Cement, concrete and lime",
      "Plaster and blackboard chalk",
      "Supplements and fortified foods",
    ],
    fact: "A typical adult carries about a kilogram of calcium, almost all of it in the skeleton.",
  },
  Sc: {
    year: "1879",
    by: "Lars Fredrik Nilson",
    summary:
      "A light, silvery transition metal that Mendeleev predicted years before it was found, calling it eka-boron. It is spread thinly through many minerals and rarely concentrated.",
    uses: [
      "Aluminium–scandium alloys for bike frames and sports gear",
      "Metal-halide lamps for stadiums and film sets",
      "Solid oxide fuel cells",
    ],
    fact: "Only a few tens of tonnes of scandium are produced each year, mostly as a by-product of other mining.",
  },
  Ti: {
    year: "1791",
    by: "William Gregor",
    summary:
      "A strong, light, corrosion-resistant metal about as strong as many steels at roughly half the weight. The body tolerates it so well that bone grows directly onto titanium implants.",
    uses: [
      "Aircraft frames and jet engines",
      "Hip replacements and dental implants",
      "Titanium dioxide, the white pigment in paint, paper and sunscreen",
    ],
    fact: "It is named after the Titans of Greek mythology.",
  },
  V: {
    year: "1801",
    by: "Andrés Manuel del Río",
    summary:
      "A hard, silvery-grey metal whose compounds come in a rainbow of colours, which is why its rediscoverer named it after Vanadís, a Norse goddess of beauty.",
    uses: [
      "Toughening steel for tools, springs and axles",
      "Vanadium redox-flow batteries for grid storage",
      "Catalyst for making sulfuric acid",
    ],
    fact: "Some sea squirts concentrate vanadium in their blood cells millions of times above the level in seawater.",
  },
  Cr: {
    year: "1797",
    by: "Louis Nicolas Vauquelin",
    summary:
      "A hard, shiny metal that keeps stainless steel from rusting and makes rubies red. Its name comes from the Greek chroma, colour, after its vivid compounds.",
    uses: [
      "Stainless steel, which contains at least about 10.5% chromium",
      "Chrome plating",
      "Pigments such as chrome yellow and chrome green",
    ],
    fact: "Traces of chromium make rubies red and help make emeralds green.",
  },
  Mn: {
    year: "1774",
    by: "Johan Gottlieb Gahn",
    summary:
      "A hard, brittle grey metal that steel cannot do without: most manganese mined ends up there. In plants, a cluster of manganese atoms splits water to release oxygen.",
    uses: [
      "Steelmaking, where it removes sulfur and adds strength",
      "Battery cathodes",
      "Aluminium alloys for drink cans",
    ],
    fact: "Prehistoric cave painters used manganese oxides as black pigment.",
  },
  Fe: {
    year: "Ancient",
    by: "Known since prehistory",
    summary:
      "The most common element on Earth by mass, forming much of the planet's core. Cheap, strong and magnetic, iron built the modern world as steel, and in your blood it carries oxygen inside haemoglobin.",
    uses: [
      "Steel for buildings, cars, ships and tools",
      "Magnets and transformer cores",
      "Iron supplements and fortified cereals",
    ],
    fact: "Stars can fuse elements up to iron, but fusing iron releases no energy. When iron piles up in a giant star's core, the core collapses and the star explodes as a supernova.",
  },
  Co: {
    year: "1735",
    by: "Georg Brandt",
    summary:
      "A hard, magnetic, silvery metal named after the kobold, a goblin that German miners blamed for ores that gave off poisonous fumes and yielded no copper.",
    uses: [
      "Lithium-ion battery cathodes",
      "Superalloys for jet engine turbines",
      "Cobalt blue pigment for glass and ceramics",
    ],
    fact: "Vitamin B12 is built around a single cobalt atom.",
    note: "Cobalt-60 is a radioactive isotope (half-life 5.3 years) used in radiotherapy and to sterilise medical equipment and food.",
  },
  Ni: {
    year: "1751",
    by: "Axel Fredrik Cronstedt",
    summary:
      "A hard, silvery, corrosion-resistant metal. Its name comes from Kupfernickel, 'copper demon', an ore that looked as if it should contain copper but didn't.",
    uses: [
      "Stainless steel",
      "Rechargeable batteries",
      "Coins and plating",
    ],
    fact: "Earth's core is mostly iron alloyed with several percent nickel.",
  },
  Cu: {
    year: "Ancient",
    by: "Known since prehistory",
    summary:
      "A reddish metal that conducts electricity and heat better than anything except silver. It was one of the first metals people worked, and alloying it with tin began the Bronze Age.",
    uses: [
      "Electrical wiring and motors",
      "Plumbing pipes",
      "Brass and bronze",
    ],
    fact: "The Statue of Liberty is made of copper. Its green colour is a patina that formed over about 30 years.",
  },
  Zn: {
    year: "1746",
    by: "Andreas Sigismund Marggraf",
    summary:
      "A bluish-grey metal best known for protecting steel from rust. A coating of zinc corrodes first, sacrificing itself to keep the iron underneath intact.",
    uses: [
      "Galvanising steel",
      "Brass, an alloy of copper and zinc",
      "Batteries, sunscreen and supplements",
    ],
    fact: "Zinc was smelted on an industrial scale at Zawar in India centuries before Europeans isolated it.",
  },
  Ga: {
    year: "1875",
    by: "Paul-Émile Lecoq de Boisbaudran",
    summary:
      "A soft, silvery metal that melts at about 30 °C, so it turns liquid in the warmth of your hand. Mendeleev predicted it as eka-aluminium and got its properties remarkably right.",
    uses: [
      "Gallium nitride in LEDs and compact phone chargers",
      "Gallium arsenide chips for phones and satellites",
      "Low-melting alloys that replace mercury in thermometers",
    ],
    fact: "A spoon cast from gallium melts away when you stir hot tea with it, a classic chemistry prank.",
  },
  Ge: {
    year: "1886",
    by: "Clemens Winkler",
    summary:
      "A greyish-white metalloid predicted by Mendeleev as eka-silicon. The first transistor, built in 1947, was made of germanium.",
    uses: [
      "Fibre-optic cables",
      "Infrared lenses for thermal and night-vision cameras",
      "High-speed silicon–germanium chips",
    ],
    fact: "Winkler named it after his homeland, Germany.",
  },
  As: {
    year: "c. 1250",
    by: "Albertus Magnus",
    summary:
      "A grey metalloid notorious as a poison, so common in historic murders that it was nicknamed 'inheritance powder'. In tiny, controlled amounts it is also used to tune semiconductors.",
    uses: [
      "Gallium arsenide semiconductors",
      "Hardening lead in batteries",
      "Arsenic trioxide as a leukaemia treatment",
    ],
    fact: "Some green 19th-century wallpapers were coloured with arsenic pigments that could give off toxic vapours in damp rooms.",
  },
  Se: {
    year: "1817",
    by: "Jöns Jacob Berzelius",
    summary:
      "A nonmetal that conducts electricity better when light shines on it, a property once used in photocopiers and light meters. It is an essential nutrient in tiny amounts but toxic in excess.",
    uses: [
      "Decolouring glass, or tinting it red",
      "Solar cells and photocells",
      "Supplements and anti-dandruff shampoo",
    ],
    fact: "Berzelius named it after selene, the Moon, because it resembled tellurium, named after the Earth.",
  },
  Br: {
    year: "1826",
    by: "Antoine Jérôme Balard",
    summary:
      "One of only two elements that are liquid at room temperature: a dense, red-brown liquid that gives off choking fumes. Its name comes from the Greek bromos, stench.",
    uses: [
      "Flame retardants",
      "Dense drilling fluids for oil and gas wells",
      "Water treatment and medicines",
    ],
    fact: "Tyrian purple, the ancient dye reserved for royalty and made from sea snails, is a bromine compound.",
  },
  Kr: {
    year: "1898",
    by: "William Ramsay and Morris Travers",
    summary:
      "A colourless noble gas found in tiny amounts in the air; it glows whitish-violet in an electric discharge. Its name is Greek for 'the hidden one'.",
    uses: [
      "Insulating gas in energy-efficient windows",
      "Photographic flashes and high-performance lamps",
      "Krypton fluoride lasers for chipmaking",
    ],
    fact: "From 1960 to 1983 the metre was officially defined by the orange-red light of krypton-86.",
  },
  Rb: {
    year: "1861",
    by: "Robert Bunsen and Gustav Kirchhoff",
    summary:
      "A very soft alkali metal that ignites in air and reacts explosively with water. It was found through the deep red lines in its spectrum, which gave it its name (Latin rubidus, deep red).",
    uses: [
      "Compact atomic clocks, including in GPS satellites",
      "Research on ultracold atoms",
      "Speciality glass and photocells",
    ],
    fact: "The first Bose–Einstein condensate, a new state of matter made in 1995, was a cloud of rubidium atoms.",
    note: "Rubidium-87 is weakly radioactive (half-life about 49 billion years) and is used to date ancient rocks.",
  },
  Sr: {
    year: "1790",
    by: "Adair Crawford",
    summary:
      "A soft alkaline earth metal named after Strontian, the Scottish village where its ore was first found. Its salts burn with a brilliant crimson flame.",
    uses: [
      "Red fireworks and flares",
      "Strontium ferrite fridge and speaker magnets",
      "Toothpaste for sensitive teeth",
    ],
    fact: "Some of the most precise optical atomic clocks ever built tick using strontium atoms.",
    note: "Radioactive strontium-90, from nuclear fallout, is dangerous because the body treats it like calcium and stores it in bone.",
  },
  Y: {
    year: "1794",
    by: "Johan Gadolin",
    summary:
      "A silvery metal named after Ytterby, a Swedish village whose quarry gave its name to four elements: yttrium, ytterbium, terbium and erbium.",
    uses: [
      "Phosphors in white LEDs",
      "YAG lasers for cutting and surgery",
      "High-temperature superconductors (YBCO)",
    ],
    fact: "In 1987 YBCO became the first superconductor to work above the boiling point of liquid nitrogen.",
  },
  Zr: {
    year: "1789",
    by: "Martin Heinrich Klaproth",
    summary:
      "A strong, corrosion-resistant grey metal that barely absorbs neutrons, which makes it ideal for holding nuclear fuel. Its oxide crystal, cubic zirconia, is a popular diamond substitute.",
    uses: [
      "Cladding for nuclear fuel rods",
      "Ceramic knives and dental crowns",
      "Cubic zirconia gemstones",
    ],
    fact: "Zircon crystals from Western Australia, about 4.4 billion years old, are the oldest known pieces of Earth.",
  },
  Nb: {
    year: "1801",
    by: "Charles Hatchett",
    summary:
      "A soft, grey transition metal first named columbium. Alloyed with titanium or tin, it becomes a superconductor used in some of the most powerful magnets ever built.",
    uses: [
      "Superconducting magnets in MRI scanners and particle accelerators",
      "Strengthening steel for pipelines and cars",
      "Jet engine and rocket nozzle alloys",
    ],
    fact: "The magnets that steer beams around the Large Hadron Collider are wound with niobium–titanium cable.",
  },
  Mo: {
    year: "1778",
    by: "Carl Wilhelm Scheele",
    summary:
      "A silvery metal with one of the highest melting points of any element. Its name comes from the Greek molybdos, lead, because its ore was mistaken for lead ore.",
    uses: [
      "High-strength, heat-resistant steels",
      "Molybdenum disulfide lubricants",
      "Catalysts that remove sulfur from fuels",
    ],
    fact: "Bacteria that pull nitrogen from the air rely on an enzyme with molybdenum at its core.",
  },
  Tc: {
    year: "1937",
    by: "Carlo Perrier and Emilio Segrè",
    summary:
      "The lightest element with no stable isotopes, and the first made artificially, from molybdenum bombarded in a cyclotron. Its name comes from the Greek technetos, artificial.",
    uses: [
      "Technetium-99m medical imaging, used in tens of millions of scans a year",
      "Bone, heart and thyroid scans",
    ],
    fact: "Some red giant stars show technetium in their light. Since it decays quickly, it was proof that stars forge new elements.",
  },
  Ru: {
    year: "1844",
    by: "Karl Ernst Claus",
    summary:
      "A hard, rare platinum-group metal named after Ruthenia, the Latin name for Russia, where it was discovered.",
    uses: [
      "Layers in hard-disk drives",
      "Wear-resistant electrical contacts",
      "Catalysts, including for producing hydrogen",
    ],
    fact: "Ruthenium was the last of the six platinum-group metals to be discovered.",
  },
  Rh: {
    year: "1804",
    by: "William Hyde Wollaston",
    summary:
      "A rare, silvery, highly reflective platinum-group metal and one of the most expensive metals in the world. Its name comes from the rose-red colour of its salts.",
    uses: [
      "Catalytic converters that clean car exhaust",
      "Plating for jewellery and mirrors",
      "Thermocouples for very high temperatures",
    ],
    fact: "Most of the rhodium mined each year ends up in catalytic converters.",
  },
  Pd: {
    year: "1803",
    by: "William Hyde Wollaston",
    summary:
      "A soft, silvery-white platinum-group metal that can soak up about 900 times its own volume of hydrogen gas.",
    uses: [
      "Catalytic converters",
      "Electronics and dental alloys",
      "Catalysts for making medicines (2010 Nobel Prize)",
    ],
    fact: "Wollaston named it after the asteroid Pallas, discovered just a year earlier.",
  },
  Ag: {
    year: "Ancient",
    by: "Known since prehistory",
    summary:
      "A lustrous white metal with the highest electrical and thermal conductivity of any element. It has been prized for coins and jewellery for thousands of years, and it kills bacteria.",
    uses: [
      "Electronics and solar panels",
      "Jewellery, silverware and coins",
      "Antibacterial wound dressings",
    ],
    fact: "Its symbol, Ag, comes from argentum, Latin for silver, which also gave Argentina its name.",
  },
  Cd: {
    year: "1817",
    by: "Friedrich Stromeyer",
    summary:
      "A soft, bluish-white metal that is highly toxic. It was discovered as an impurity in zinc ore and is still mostly obtained as a by-product of refining zinc.",
    uses: [
      "Nickel–cadmium rechargeable batteries",
      "Cadmium yellow and red pigments",
      "Neutron-absorbing control rods",
    ],
    fact: "Cadmium pollution in Japan caused itai-itai disease, named for the cry 'it hurts, it hurts'.",
  },
  In: {
    year: "1863",
    by: "Ferdinand Reich and Hieronymous Theodor Richter",
    summary:
      "A very soft, silvery metal that gives a high-pitched 'cry' when bent. It was named after the indigo-blue line in its spectrum.",
    uses: [
      "Indium tin oxide, the transparent conductor in touchscreens",
      "Low-melting solders",
      "Semiconductors for LEDs",
    ],
    fact: "Pure indium is soft enough to scratch with a fingernail.",
    note: "Almost all natural indium is indium-115, which is technically radioactive, with a half-life about 30,000 times the age of the universe.",
  },
  Sn: {
    year: "Ancient",
    by: "Known since prehistory",
    summary:
      "A silvery, malleable metal that resists corrosion. Alloyed with copper it makes bronze, and a thin coat of it on steel makes 'tin' cans.",
    uses: [
      "Solder for electronics",
      "Tin-plated steel cans",
      "Bronze and pewter",
    ],
    fact: "In the cold, white tin can slowly crumble into powdery grey tin, a change known as tin pest.",
    note: "Tin has ten stable isotopes, more than any other element. Its 50 protons are a 'magic number' that fills a nuclear shell.",
  },
  Sb: {
    year: "Ancient",
    by: "Known since antiquity",
    summary:
      "A brittle, silvery-grey metalloid. Ancient Egyptians used its black sulfide mineral, stibnite, as kohl eye make-up.",
    uses: [
      "Flame retardants",
      "Hardening lead in batteries and bullets",
      "Semiconductor devices",
    ],
    fact: "Its symbol, Sb, comes from stibium, the Latin name for stibnite.",
  },
  Te: {
    year: "1782",
    by: "Franz-Joseph Müller von Reichenstein",
    summary:
      "A rare, brittle, silvery-white metalloid, about as scarce in Earth's crust as gold. Absorbing even a tiny amount gives people a strong garlic smell on their breath.",
    uses: [
      "Cadmium telluride solar panels",
      "Thermoelectric coolers and generators",
      "Rewritable optical discs",
    ],
    fact: "Its name comes from tellus, Latin for Earth.",
    note: "Tellurium-128 holds the record for the longest half-life ever measured: about 2.2 × 10²⁴ years.",
  },
  I: {
    year: "1811",
    by: "Bernard Courtois",
    summary:
      "A dark violet-black solid that turns straight into violet vapour when heated. Your thyroid gland needs it to make hormones.",
    uses: [
      "Iodised salt",
      "Antiseptics such as tincture of iodine",
      "Contrast agents for X-ray scans",
    ],
    fact: "Courtois found iodine while extracting chemicals from seaweed ash for gunpowder during the Napoleonic Wars.",
    note: "Radioactive iodine-131 (half-life 8 days) treats thyroid conditions and is a key hazard after nuclear accidents.",
  },
  Xe: {
    year: "1898",
    by: "William Ramsay and Morris Travers",
    summary:
      "A heavy, rare noble gas that glows blue in an electric discharge. Despite being 'noble', it was the first noble gas shown to form chemical compounds, in 1962.",
    uses: [
      "Car headlamps and cinema projector lamps",
      "Ion thrusters that push spacecraft",
      "General anaesthesia",
    ],
    fact: "Its name comes from the Greek xenos, stranger.",
  },
  Cs: {
    year: "1860",
    by: "Robert Bunsen and Gustav Kirchhoff",
    summary:
      "A soft, golden alkali metal that melts at 28.5 °C and explodes on contact with water. It was found in mineral water by two sky-blue lines in its spectrum (Latin caesius, sky blue).",
    uses: [
      "Atomic clocks, which define the second",
      "Caesium formate drilling fluids",
      "Photoelectric cells",
    ],
    fact: "One second is defined as 9,192,631,770 cycles of the radiation from a caesium-133 atom.",
    note: "Caesium-137 (half-life 30 years) is one of the main radioactive contaminants after nuclear accidents.",
  },
  Ba: {
    year: "1774",
    by: "Carl Wilhelm Scheele",
    summary:
      "A soft alkaline earth metal whose name comes from the Greek barys, heavy, after the dense mineral barite. Its compounds colour flames green.",
    uses: [
      "Barium meals for X-rays of the digestive tract",
      "Green fireworks",
      "Drilling mud for oil wells",
    ],
    fact: "Barium sulfate is safe to swallow only because it barely dissolves; soluble barium salts are poisonous.",
  },
  La: {
    year: "1839",
    by: "Carl Gustaf Mosander",
    summary:
      "The first of the lanthanides, a soft, silvery metal. Its name comes from the Greek lanthanein, to lie hidden, because it was hiding inside cerium ore.",
    uses: [
      "High-quality camera and telescope lenses",
      "Nickel–metal hydride batteries in hybrid cars",
      "Catalysts for refining petroleum",
    ],
    fact: "The battery pack of an early Toyota Prius contained around 10 to 15 kg of lanthanum.",
  },
  Ce: {
    year: "1803",
    by: "Jöns Jacob Berzelius and Wilhelm Hisinger",
    summary:
      "The most abundant rare-earth element, about as common as copper in Earth's crust. It was named after the dwarf planet Ceres, discovered two years earlier.",
    uses: [
      "Lighter flints (ferrocerium)",
      "Polishing glass and lenses",
      "Catalytic converters and self-cleaning ovens",
    ],
    fact: "Scraping ferrocerium throws sparks hot enough to light a fire, which is why it is in survival kits.",
  },
  Pr: {
    year: "1885",
    by: "Carl Auer von Welsbach",
    summary:
      "A soft, silvery rare-earth metal that grows a green oxide coat in air. It was split out of 'didymium', which turned out to be two elements.",
    uses: [
      "Powerful magnets, alongside neodymium",
      "Yellow-green glass and welders' goggles",
      "Aircraft engine alloys",
    ],
    fact: "Its name means 'green twin': it was the green half of didymium.",
  },
  Nd: {
    year: "1885",
    by: "Carl Auer von Welsbach",
    summary:
      "A rare-earth metal used to make the strongest permanent magnets you can buy. A neodymium magnet the size of a coin can hold up several kilograms.",
    uses: [
      "Magnets in electric motors, wind turbines and earbuds",
      "Nd:YAG lasers",
      "Violet-tinted glass",
    ],
    fact: "Its name means 'new twin', the other half of didymium.",
  },
  Pm: {
    year: "1945",
    by: "Jacob Marinsky, Lawrence Glendenin and Charles Coryell",
    summary:
      "A rare-earth element with no stable isotopes, so almost none exists naturally. It was finally identified among uranium fission products at Oak Ridge.",
    uses: [
      "Nuclear batteries for early pacemakers and spacecraft",
      "Thickness gauges in manufacturing",
    ],
    fact: "It is named after Prometheus, who stole fire from the gods.",
  },
  Sm: {
    year: "1879",
    by: "Paul-Émile Lecoq de Boisbaudran",
    summary:
      "A hard, silvery rare-earth metal named after the mineral samarskite, which honours a Russian mining official, making it the first element named, indirectly, after a person.",
    uses: [
      "Samarium–cobalt magnets that work when hot",
      "Samarium-153 for bone cancer pain",
      "Neutron absorbers in reactors",
    ],
    fact: "Samarium–cobalt magnets keep their strength at temperatures that would weaken neodymium magnets.",
  },
  Eu: {
    year: "1901",
    by: "Eugène-Anatole Demarçay",
    summary:
      "The most reactive rare-earth metal, tarnishing quickly in air. Its compounds glow brightly under ultraviolet light.",
    uses: [
      "Red and blue phosphors in screens and LED lamps",
      "Anti-forgery marks on euro banknotes",
      "Neutron absorbers",
    ],
    fact: "Euro banknotes glow under UV light partly thanks to europium compounds.",
  },
  Gd: {
    year: "1880",
    by: "Jean Charles Galissard de Marignac",
    summary:
      "A silvery rare-earth metal that absorbs neutrons better than any other stable element and is magnetic only when slightly cooler than a room.",
    uses: [
      "MRI contrast agents",
      "Neutron shielding and control rods",
      "Research into magnetic refrigeration",
    ],
    fact: "Gadolinium loses its magnetism at about 20 °C, so the warmth of your hand can switch it off.",
  },
  Tb: {
    year: "1843",
    by: "Carl Gustaf Mosander",
    summary:
      "A soft, silvery rare-earth metal named after Ytterby in Sweden. Its compounds glow a vivid green.",
    uses: [
      "Green phosphors in screens and lamps",
      "Terfenol-D, an alloy that changes shape in a magnetic field",
      "Keeping neodymium magnets strong at high temperatures",
    ],
    fact: "A Terfenol-D actuator can turn a flat surface, such as a window or a table, into a loudspeaker.",
  },
  Dy: {
    year: "1886",
    by: "Paul-Émile Lecoq de Boisbaudran",
    summary:
      "A bright silvery rare-earth metal named after the Greek dysprositos, 'hard to get at', because separating it took dozens of painstaking attempts.",
    uses: [
      "Keeping magnets strong in hot electric-car motors",
      "Lasers and metal-halide lamps",
      "Control rods",
    ],
    fact: "Pure dysprosium metal wasn't produced until the 1950s.",
  },
  Ho: {
    year: "1878",
    by: "Marc Delafontaine and Jacques-Louis Soret",
    summary:
      "A soft rare-earth metal with the highest magnetic moment of any natural element. It is named after Holmia, the Latin name for Stockholm.",
    uses: [
      "Pole pieces for the strongest electromagnets",
      "Holmium lasers in surgery",
      "Calibrating spectrometers",
    ],
    fact: "Holmium lasers can break up kidney stones without a single incision.",
  },
  Er: {
    year: "1843",
    by: "Carl Gustaf Mosander",
    summary:
      "A silvery rare-earth metal named after Ytterby. Its ions tint glass pink and can amplify light.",
    uses: [
      "Amplifiers in fibre-optic internet cables",
      "Laser skin treatments",
      "Pink glass and glazes",
    ],
    fact: "Erbium-doped fibre boosts the light in undersea internet cables without first turning it into electricity.",
  },
  Tm: {
    year: "1879",
    by: "Per Teodor Cleve",
    summary:
      "A soft, silvery metal named after Thule, an old name for the far north. Apart from radioactive promethium, it is the rarest of the lanthanides.",
    uses: [
      "Portable X-ray sources (thulium-170)",
      "Surgical lasers",
      "Fibre amplifiers",
    ],
    fact: "Thulium-170 makes X-ray machines small enough to carry, with no power supply needed.",
  },
  Yb: {
    year: "1878",
    by: "Jean Charles Galissard de Marignac",
    summary:
      "A soft, silvery rare-earth metal named after Ytterby. It powers some of the most precise atomic clocks ever built.",
    uses: [
      "Ytterbium optical atomic clocks",
      "Fibre lasers for cutting and welding",
      "Stress gauges for earthquakes and explosions",
    ],
    fact: "The best ytterbium clocks would drift by less than a second over the age of the universe.",
  },
  Lu: {
    year: "1907",
    by: "Georges Urbain",
    summary:
      "The last and densest of the lanthanides, a hard silvery metal named after Lutetia, the Roman name for Paris.",
    uses: [
      "Detector crystals in PET scanners",
      "Lutetium-177 cancer therapy",
      "Catalysts in oil refining",
    ],
    fact: "Lutetium-177 drugs deliver radiation straight to prostate and neuroendocrine tumours.",
    note: "Natural lutetium contains a little radioactive lutetium-176 (half-life about 37 billion years), used to date meteorites.",
  },
  Hf: {
    year: "1923",
    by: "Dirk Coster and George de Hevesy",
    summary:
      "A shiny metal so chemically similar to zirconium that it hid inside zirconium ores until 1923, when X-ray spectroscopy revealed it.",
    uses: [
      "Control rods in nuclear reactors and submarines",
      "Insulating layers in modern microchips",
      "Jet engine and rocket alloys",
    ],
    fact: "Its name comes from Hafnia, the Latin name for Copenhagen, where it was found.",
  },
  Ta: {
    year: "1802",
    by: "Anders Gustaf Ekeberg",
    summary:
      "A hard, blue-grey metal so corrosion-resistant that almost no acid can touch it. It is named after Tantalus from Greek myth, who could never drink the water around him.",
    uses: [
      "Tiny capacitors in phones and laptops",
      "Surgical implants",
      "Turbine blades and chemical equipment",
    ],
    fact: "Much tantalum comes from coltan ore mined in central Africa, which has made it a notorious conflict mineral.",
  },
  W: {
    year: "1783",
    by: "Juan José and Fausto Elhuyar",
    summary:
      "The metal with the highest melting point of all, 3,422 °C. Its symbol, W, comes from wolfram, its German name.",
    uses: [
      "Light bulb filaments and welding electrodes",
      "Tungsten carbide drill bits and cutting tools",
      "Radiation shielding and counterweights",
    ],
    fact: "Tungsten is almost exactly as dense as gold, which has made it a favourite for counterfeit gold bars.",
  },
  Re: {
    year: "1925",
    by: "Walter Noddack, Ida Tacke and Otto Berg",
    summary:
      "One of the rarest elements in Earth's crust and the last naturally occurring element with a stable isotope to be discovered. It shrugs off extreme heat.",
    uses: [
      "Superalloys for jet engine turbine blades",
      "Catalysts for high-octane petrol",
      "High-temperature thermocouples",
    ],
    fact: "It is named after the river Rhine.",
    note: "Most natural rhenium is rhenium-187, which is radioactive with a half-life of about 41 billion years.",
  },
  Os: {
    year: "1803",
    by: "Smithson Tennant",
    summary:
      "The densest naturally occurring element: a fist-sized lump weighs about as much as a bowling ball. Its oxide has a sharp smell, which gave it its name (Greek osme, smell).",
    uses: [
      "Hard alloys for fountain-pen nibs and electrical contacts",
      "Staining tissue for electron microscopy",
      "Fingerprint detection",
    ],
    fact: "A one-litre bottle filled with osmium would weigh about 22.6 kg.",
  },
  Ir: {
    year: "1803",
    by: "Smithson Tennant",
    summary:
      "The most corrosion-resistant metal known and one of the densest. Its salts are so colourful that Tennant named it after Iris, goddess of the rainbow.",
    uses: [
      "Long-life spark plugs",
      "Crucibles for growing crystals",
      "Iridium-192 for radiotherapy and industrial X-rays",
    ],
    fact: "A thin, iridium-rich layer in 66-million-year-old rocks worldwide is key evidence that an asteroid wiped out the dinosaurs.",
  },
  Pt: {
    year: "1735",
    by: "Antonio de Ulloa",
    summary:
      "A dense, unreactive, silvery-white precious metal. Spanish colonists called it platina, 'little silver', and threw it away as a nuisance when mining gold.",
    uses: [
      "Catalytic converters",
      "Jewellery",
      "Cancer drugs (cisplatin) and pacemaker electrodes",
    ],
    fact: "The kilogram was defined by a cylinder of platinum–iridium kept near Paris until 2019.",
  },
  Au: {
    year: "Ancient",
    by: "Known since prehistory",
    summary:
      "A soft, dense, yellow metal that never tarnishes. It is so malleable that a single gram can be beaten into a sheet about a square metre in size.",
    uses: [
      "Jewellery and bullion",
      "Corrosion-free connectors in electronics",
      "Dentistry and some arthritis and cancer treatments",
    ],
    fact: "Most of Earth's gold was probably forged in collisions between neutron stars, long before the Sun formed.",
  },
  Hg: {
    year: "Ancient",
    by: "Known since antiquity",
    summary:
      "The only metal that is liquid at room temperature, a heavy silvery liquid once called quicksilver. Its vapour is toxic, so it has largely been phased out of thermometers.",
    uses: [
      "Fluorescent lamps",
      "Some dental amalgam fillings",
      "Laboratory and industrial instruments",
    ],
    fact: "Its symbol, Hg, comes from hydrargyrum, Greek for 'water-silver'.",
  },
  Tl: {
    year: "1861",
    by: "William Crookes",
    summary:
      "A soft, grey metal discovered through a bright green line in its spectrum (Greek thallos, green shoot). Its compounds are extremely toxic and were once used as rat poison.",
    uses: [
      "Infrared optics",
      "Thallium-201 heart scans",
      "Speciality electronics and glass",
    ],
    fact: "Because it is tasteless and odourless, thallium poisoning drives the plot of Agatha Christie's novel The Pale Horse.",
  },
  Pb: {
    year: "Ancient",
    by: "Known since prehistory",
    summary:
      "A soft, dense, grey metal the Romans used for water pipes; the word plumbing comes from its Latin name, plumbum. It is now known to be a dangerous nerve poison.",
    uses: [
      "Lead–acid car batteries",
      "Radiation shielding",
      "Weights and ammunition",
    ],
    fact: "Lead is the heaviest element with stable isotopes. Every element after it is radioactive.",
    note: "Lead-208 is 'doubly magic': both its 82 protons and its 126 neutrons fill complete nuclear shells, making it the heaviest stable nucleus known.",
  },
  Bi: {
    year: "1753",
    by: "Claude François Geoffroy",
    summary:
      "A heavy, brittle metal that grows stunning iridescent, staircase-shaped crystals. Unusually for a heavy metal, it is barely toxic.",
    uses: [
      "Pink stomach remedies (bismuth subsalicylate)",
      "Lead-free solder and shot",
      "Low-melting alloys in fire sprinklers",
    ],
    fact: "Bismuth was thought to be stable until 2003, when its only natural isotope was caught decaying, with a half-life about a billion times the age of the universe.",
  },
  Po: {
    year: "1898",
    by: "Marie and Pierre Curie",
    summary:
      "A rare, intensely radioactive metal discovered by Marie and Pierre Curie, who named it after Marie's homeland, Poland. Gram for gram it is one of the most toxic substances known.",
    uses: [
      "Static eliminators in industry and photography",
      "Heat source for early spacecraft and lunar rovers",
    ],
    fact: "Polonium-210 is so radioactive that half a gram heats itself to about 500 °C.",
  },
  At: {
    year: "1940",
    by: "Dale Corson, Kenneth MacKenzie and Emilio Segrè",
    summary:
      "One of the rarest natural elements: there is probably less than a gram in Earth's crust at any moment. No one has seen a visible amount, because its own radioactivity would vaporise it.",
    uses: ["Astatine-211 for targeted alpha therapy against cancer"],
    fact: "Its name comes from the Greek astatos, unstable.",
  },
  Rn: {
    year: "1899",
    by: "Ernest Rutherford and Friedrich Ernst Dorn",
    summary:
      "A colourless, odourless radioactive noble gas that seeps out of rocks and soil as uranium decays. When it builds up indoors, it is a leading cause of lung cancer after smoking.",
    uses: [
      "Tracing groundwater and studying earthquakes",
      "Early radiation therapy (now replaced)",
    ],
    fact: "Radon is invisible as a gas but glows yellow, then orange-red, when frozen solid.",
  },
  Fr: {
    year: "1939",
    by: "Marguerite Perey",
    summary:
      "The least stable naturally occurring element: its longest-lived isotope lasts only about 22 minutes. Perhaps 30 grams exist in the whole of Earth's crust at any time.",
    uses: ["Research into atomic structure and fundamental physics"],
    fact: "Marguerite Perey went on to become the first woman elected to the French Academy of Sciences.",
  },
  Ra: {
    year: "1898",
    by: "Marie and Pierre Curie",
    summary:
      "A radioactive alkaline earth metal that glows faintly blue. It won Marie Curie her second Nobel Prize, and it was once added to toothpaste, cosmetics and tonics.",
    uses: [
      "Radium-223 treatment for prostate cancer that has spread to bone",
      "Luminous paint for watch dials (historically)",
    ],
    fact: "The 'Radium Girls' who painted watch dials in the 1920s were poisoned by licking their brushes to a point, a case that led to new worker-safety laws.",
  },
  Ac: {
    year: "1899",
    by: "André-Louis Debierne",
    summary:
      "A silvery radioactive metal that glows pale blue in the dark. It gave its name to the actinide series that follows it.",
    uses: [
      "Actinium-225 for targeted cancer therapy",
      "Neutron sources, combined with beryllium",
    ],
    fact: "Actinium-227 is about 150 times more radioactive than radium.",
  },
  Th: {
    year: "1829",
    by: "Jöns Jacob Berzelius",
    summary:
      "A weakly radioactive, silvery metal named after Thor, the Norse god of thunder. It is about three times more abundant than uranium in Earth's crust.",
    uses: [
      "Potential fuel for thorium reactors",
      "Gas mantles for lanterns (historically)",
      "Tungsten welding electrodes",
    ],
    fact: "Its half-life of 14 billion years is longer than the age of the universe, so most of the thorium Earth formed with is still here.",
  },
  Pa: {
    year: "1913",
    by: "Kasimir Fajans and Oswald Göhring",
    summary:
      "A dense, silvery, radioactive metal that is rare and highly toxic. Its name means 'before actinium', because it decays into actinium.",
    uses: ["Dating ocean sediments, paired with thorium"],
    fact: "In 1961 the UK extracted about 125 grams of protactinium from 60 tonnes of nuclear waste, long the bulk of the world's supply.",
  },
  U: {
    year: "1789",
    by: "Martin Heinrich Klaproth",
    summary:
      "A heavy, silvery, weakly radioactive metal and the heaviest element found in large amounts in nature. Its uranium-235 atoms can split in a chain reaction, releasing enormous energy.",
    uses: [
      "Fuel for nuclear power stations",
      "Dense counterweights and shielding (depleted uranium)",
      "Dating rocks with uranium–lead dating",
    ],
    fact: "About two billion years ago, uranium deposits at Oklo in Gabon ran nuclear chain reactions on their own: natural reactors.",
  },
  Np: {
    year: "1940",
    by: "Edwin McMillan and Philip Abelson",
    summary:
      "The first element heavier than uranium, made by hitting uranium with neutrons. Named after Neptune, the planet beyond Uranus.",
    uses: [
      "Making plutonium-238 to power spacecraft",
      "Neutron detectors",
    ],
    fact: "Tiny traces of neptunium form naturally in uranium ores.",
  },
  Pu: {
    year: "1940",
    by: "Glenn T. Seaborg, Arthur Wahl, Joseph Kennedy and Edwin McMillan",
    summary:
      "A dense, silvery radioactive metal named after Pluto. Plutonium-239 can sustain a chain reaction, and plutonium-238 is a long-lasting heat source.",
    uses: [
      "Reactor fuel (mixed oxide)",
      "Power for deep-space probes such as Voyager and the Mars rovers",
      "Nuclear weapons",
    ],
    fact: "A pellet of plutonium-238 glows red-hot from the heat of its own decay.",
  },
  Am: {
    year: "1944",
    by: "Glenn T. Seaborg, Ralph James, Leon Morgan and Albert Ghiorso",
    summary:
      "A silvery radioactive metal made in nuclear reactors and named after the Americas. It is the only synthetic element you are likely to have at home.",
    uses: [
      "Ionisation smoke detectors",
      "Thickness and density gauges",
      "Proposed power source for spacecraft",
    ],
    fact: "A typical smoke detector holds less than a microgram of americium-241.",
  },
  Cm: {
    year: "1944",
    by: "Glenn T. Seaborg, Ralph James and Albert Ghiorso",
    summary:
      "A hard, silvery radioactive metal named after Marie and Pierre Curie. It glows purple-red in the dark.",
    uses: [
      "Alpha-particle X-ray spectrometers on Mars rovers",
      "Research into compact power sources",
    ],
    fact: "Curium-244 on Mars rovers fires alpha particles at rocks to reveal what they are made of.",
  },
  Bk: {
    year: "1949",
    by: "Stanley Thompson, Albert Ghiorso and Glenn T. Seaborg",
    summary:
      "A synthetic radioactive metal named after Berkeley, California, where it was first made. Only about a gram has ever been produced.",
    uses: ["Target material for creating heavier elements"],
    fact: "Berkelium made at Oak Ridge was used to create tennessine in 2010.",
  },
  Cf: {
    year: "1950",
    by: "Stanley Thompson, Kenneth Street Jr., Albert Ghiorso and Glenn T. Seaborg",
    summary:
      "A synthetic radioactive metal named after California. Californium-252 is a fierce neutron emitter: a single microgram releases about 170 million neutrons a minute.",
    uses: [
      "Starting up nuclear reactors",
      "Detecting gold, oil and explosives by neutron analysis",
      "Cancer treatment",
    ],
    fact: "Californium targets were used to make oganesson, the heaviest element known.",
  },
  Es: {
    year: "1952",
    by: "Albert Ghiorso and colleagues",
    summary:
      "A synthetic element first found in the debris of the first hydrogen bomb test, 'Ivy Mike', in 1952. A sample is so radioactive that it glows and damages its own crystal structure.",
    uses: ["Scientific research and making heavier elements"],
    fact: "It is named after Albert Einstein.",
  },
  Fm: {
    year: "1952",
    by: "Albert Ghiorso and colleagues",
    summary:
      "A synthetic element also found in the fallout from Ivy Mike, named after Enrico Fermi. It is the heaviest element that can be built up by neutron capture.",
    uses: [],
    fact: "Fermium has never been made in a visible amount.",
  },
  Md: {
    year: "1955",
    by: "Albert Ghiorso, Glenn T. Seaborg, Bernard Harvey, Gregory Choppin and Stanley Thompson",
    summary:
      "A synthetic element named after Dmitri Mendeleev, who created the periodic table. It was the first element made one atom at a time: the first experiments yielded just 17 atoms.",
    uses: [],
    fact: "The original target was a speck of einsteinium containing only about a billion atoms.",
  },
  No: {
    year: "1966",
    by: "Joint Institute for Nuclear Research, Dubna",
    summary:
      "A synthetic element named after Alfred Nobel. Its discovery was disputed for years between laboratories in Sweden, the United States and the Soviet Union.",
    uses: [],
    fact: "Unusually for an actinide, nobelium prefers to lose just two electrons when it forms compounds.",
  },
  Lr: {
    year: "1961",
    by: "Albert Ghiorso and colleagues, Berkeley",
    summary:
      "The last of the actinides, named after Ernest Lawrence, inventor of the cyclotron. It is made only a few atoms at a time.",
    uses: [],
    fact: "Relativistic effects are thought to give lawrencium an unusual outer electron in a 7p orbital instead of 6d.",
  },
  Rf: {
    year: "1964–69",
    by: "JINR Dubna and Berkeley",
    summary:
      "The first superheavy element after the actinides, named after Ernest Rutherford, who discovered the atomic nucleus.",
    uses: [],
    fact: "Rutherfordium behaves chemically like hafnium and zirconium, the elements above it.",
  },
  Db: {
    year: "1968–70",
    by: "JINR Dubna and Berkeley",
    summary:
      "A synthetic element named after Dubna, the Russian town that is home to the Joint Institute for Nuclear Research.",
    uses: [],
    fact: "Its naming was so contested it was called hahnium and nielsbohrium before chemists settled on dubnium in 1997.",
  },
  Sg: {
    year: "1974",
    by: "Albert Ghiorso and colleagues, Berkeley",
    summary:
      "Named after Glenn T. Seaborg, the first element named after a living person. Seaborg had a hand in discovering ten elements.",
    uses: [],
    fact: "Seaborg joked that he could receive mail addressed in elements: seaborgium, lawrencium, berkelium, californium, americium.",
  },
  Bh: {
    year: "1981",
    by: "Peter Armbruster and Gottfried Münzenberg, GSI Darmstadt",
    summary:
      "A synthetic element named after Niels Bohr, whose model of electrons in shells is the one drawn on this page.",
    uses: [],
    fact: "Chemists have studied bohrium using just a handful of atoms; it behaves like rhenium.",
  },
  Hs: {
    year: "1984",
    by: "Peter Armbruster and Gottfried Münzenberg, GSI Darmstadt",
    summary:
      "A synthetic element named after Hesse, the German state where the GSI laboratory stands.",
    uses: [],
    fact: "In 2001, seven atoms were enough to show that hassium forms a volatile oxide, just like osmium above it.",
  },
  Mt: {
    year: "1982",
    by: "Peter Armbruster and Gottfried Münzenberg, GSI Darmstadt",
    summary:
      "Named after Lise Meitner, co-discoverer of nuclear fission, who was left out of the Nobel Prize awarded for it.",
    uses: [],
    fact: "It was first identified from a single atom.",
  },
  Ds: {
    year: "1994",
    by: "Sigurd Hofmann and colleagues, GSI Darmstadt",
    summary:
      "A synthetic element named after Darmstadt, Germany, where it was first made.",
    uses: [],
    fact: "It is predicted to behave like platinum, but no experiment has yet tested its chemistry.",
  },
  Rg: {
    year: "1994",
    by: "Sigurd Hofmann and colleagues, GSI Darmstadt",
    summary:
      "Named after Wilhelm Röntgen, discoverer of X-rays. It sits below gold in the table.",
    uses: [],
    fact: "Relativistic effects may make roentgenium behave quite differently from gold, despite sitting in the same group.",
  },
  Cn: {
    year: "1996",
    by: "Sigurd Hofmann and colleagues, GSI Darmstadt",
    summary:
      "Named after Nicolaus Copernicus. It sits below mercury and may be a liquid, or even a gas, at room temperature.",
    uses: [],
    fact: "Experiments suggest it is a very volatile metal that behaves almost like a noble gas.",
  },
  Nh: {
    year: "2004",
    by: "Kosuke Morita and colleagues, RIKEN",
    summary:
      "The first element discovered in Asia, made at RIKEN and named after Nihon, a Japanese name for Japan.",
    uses: [],
    fact: "The team ran experiments for nearly nine years and saw just three atoms.",
  },
  Fl: {
    year: "1999",
    by: "JINR Dubna and Lawrence Livermore",
    summary:
      "Named after the Flerov Laboratory of Nuclear Reactions in Dubna. It sits near a predicted 'island of stability' where superheavy nuclei may last longer.",
    uses: [],
    fact: "Some of its isotopes last for seconds, far longer than their neighbours, hinting that the island of stability is real.",
  },
  Mc: {
    year: "2003",
    by: "JINR Dubna and Lawrence Livermore",
    summary:
      "Named after the Moscow region, home of Dubna. Each atom lasts less than a second before decaying.",
    uses: [],
    fact: "It is predicted to behave somewhat like bismuth, the element above it.",
  },
  Lv: {
    year: "2000",
    by: "JINR Dubna and Lawrence Livermore",
    summary:
      "Named after Lawrence Livermore National Laboratory in California, a partner in its discovery.",
    uses: [],
    fact: "In 2024, Berkeley Lab made livermorium with a titanium-50 beam, a rehearsal for attempting element 120.",
  },
  Ts: {
    year: "2010",
    by: "JINR Dubna, Oak Ridge, Vanderbilt and Lawrence Livermore",
    summary:
      "The second-heaviest element known, named after Tennessee, home of Oak Ridge National Laboratory, which supplied the berkelium target.",
    uses: [],
    fact: "Making the target took 250 days of reactor time to produce 22 milligrams of berkelium.",
  },
  Og: {
    year: "2002",
    by: "JINR Dubna and Lawrence Livermore",
    summary:
      "The heaviest element known, named after physicist Yuri Oganessian. It sits among the noble gases but is predicted to be a solid and may even be reactive.",
    uses: [],
    fact: "Only about five atoms of oganesson have ever been reliably detected.",
  },
};
