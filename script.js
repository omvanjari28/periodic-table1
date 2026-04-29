// Voice Synthesis Variables
let synthesis = window.speechSynthesis;
let voices = [];
let voiceSelect, rateSlider, pitchSlider, muteBtn, stopBtn;
let isMuted = false;

// Periodic Table Data Generated Automatically
const elementsData = [
  {
    "name": "Hydrogen",
    "symbol": "H",
    "number": 1,
    "group": 1,
    "period": 1,
    "category": "reactive-nonmetal",
    "categoryName": "diatomic nonmetal",
    "meltingPoint": "-259.16 \u00b0C",
    "boilingPoint": "-252.88 \u00b0C",
    "configuration": "1s1",
    "summary": "Hydrogen is a chemical element with chemical symbol H and atomic number 1. With an atomic weight of 1.00794 u, hydrogen is the lightest element on the periodic table. Its monatomic form (H) is the most abundant chemical substance in the Universe, constituting roughly 75% of all baryonic mass.",
    "xpos": 1,
    "ypos": 1
  },
  {
    "name": "Helium",
    "symbol": "He",
    "number": 2,
    "group": 18,
    "period": 1,
    "category": "noble-gas",
    "categoryName": "noble gas",
    "meltingPoint": "-272.2 \u00b0C",
    "boilingPoint": "-268.93 \u00b0C",
    "configuration": "1s2",
    "summary": "Helium is a chemical element with symbol He and atomic number 2. It is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas that heads the noble gas group in the periodic table. Its boiling and melting points are the lowest among all the elements.",
    "xpos": 18,
    "ypos": 1
  },
  {
    "name": "Lithium",
    "symbol": "Li",
    "number": 3,
    "group": 1,
    "period": 2,
    "category": "alkali-metal",
    "categoryName": "alkali metal",
    "meltingPoint": "180.5 \u00b0C",
    "boilingPoint": "1329.85 \u00b0C",
    "configuration": "1s2 2s1",
    "summary": "Lithium (from Greek:\u03bb\u03af\u03b8\u03bf\u03c2 lithos, \"stone\") is a chemical element with the symbol Li and atomic number 3. It is a soft, silver-white metal belonging to the alkali metal group of chemical elements. Under standard conditions it is the lightest metal and the least dense solid element.",
    "xpos": 1,
    "ypos": 2
  },
  {
    "name": "Beryllium",
    "symbol": "Be",
    "number": 4,
    "group": 2,
    "period": 2,
    "category": "alkaline-earth",
    "categoryName": "alkaline earth metal",
    "meltingPoint": "1286.85 \u00b0C",
    "boilingPoint": "2468.85 \u00b0C",
    "configuration": "1s2 2s2",
    "summary": "Beryllium is a chemical element with symbol Be and atomic number 4. It is created through stellar nucleosynthesis and is a relatively rare element in the universe. It is a divalent element which occurs naturally only in combination with other elements in minerals.",
    "xpos": 2,
    "ypos": 2
  },
  {
    "name": "Boron",
    "symbol": "B",
    "number": 5,
    "group": 13,
    "period": 2,
    "category": "metalloid",
    "categoryName": "metalloid",
    "meltingPoint": "2075.85 \u00b0C",
    "boilingPoint": "3926.85 \u00b0C",
    "configuration": "1s2 2s2 2p1",
    "summary": "Boron is a metalloid chemical element with symbol B and atomic number 5. Produced entirely by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a low-abundance element in both the Solar system and the Earth's crust. Boron is concentrated on Earth by the water-solubility of its more common naturally occurring compounds, the borate minerals.",
    "xpos": 13,
    "ypos": 2
  },
  {
    "name": "Carbon",
    "symbol": "C",
    "number": 6,
    "group": 14,
    "period": 2,
    "category": "reactive-nonmetal",
    "categoryName": "polyatomic nonmetal",
    "meltingPoint": "Unknown",
    "boilingPoint": "Unknown",
    "configuration": "1s2 2s2 2p2",
    "summary": "Carbon (from Latin:carbo \"coal\") is a chemical element with symbol C and atomic number 6. On the periodic table, it is the first (row 2) of six elements in column (group) 14, which have in common the composition of their outer electron shell. It is nonmetallic and tetravalent\u2014making four electrons available to form covalent chemical bonds.",
    "xpos": 14,
    "ypos": 2
  },
  {
    "name": "Nitrogen",
    "symbol": "N",
    "number": 7,
    "group": 15,
    "period": 2,
    "category": "reactive-nonmetal",
    "categoryName": "diatomic nonmetal",
    "meltingPoint": "-210.0 \u00b0C",
    "boilingPoint": "-195.79 \u00b0C",
    "configuration": "1s2 2s2 2p3",
    "summary": "Nitrogen is a chemical element with symbol N and atomic number 7. It is the lightest pnictogen and at room temperature, it is a transparent, odorless diatomic gas. Nitrogen is a common element in the universe, estimated at about seventh in total abundance in the Milky Way and the Solar System.",
    "xpos": 15,
    "ypos": 2
  },
  {
    "name": "Oxygen",
    "symbol": "O",
    "number": 8,
    "group": 16,
    "period": 2,
    "category": "reactive-nonmetal",
    "categoryName": "diatomic nonmetal",
    "meltingPoint": "-218.79 \u00b0C",
    "boilingPoint": "-182.96 \u00b0C",
    "configuration": "1s2 2s2 2p4",
    "summary": "Oxygen is a chemical element with symbol O and atomic number 8. It is a member of the chalcogen group on the periodic table and is a highly reactive nonmetal and oxidizing agent that readily forms compounds (notably oxides) with most elements. By mass, oxygen is the third-most abundant element in the universe, after hydrogen and helium.",
    "xpos": 16,
    "ypos": 2
  },
  {
    "name": "Fluorine",
    "symbol": "F",
    "number": 9,
    "group": 17,
    "period": 2,
    "category": "reactive-nonmetal",
    "categoryName": "diatomic nonmetal",
    "meltingPoint": "-219.67 \u00b0C",
    "boilingPoint": "-188.12 \u00b0C",
    "configuration": "1s2 2s2 2p5",
    "summary": "Fluorine is a chemical element with symbol F and atomic number 9. It is the lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard conditions. As the most electronegative element, it is extremely reactive:almost all other elements, including some noble gases, form compounds with fluorine.",
    "xpos": 17,
    "ypos": 2
  },
  {
    "name": "Neon",
    "symbol": "Ne",
    "number": 10,
    "group": 18,
    "period": 2,
    "category": "noble-gas",
    "categoryName": "noble gas",
    "meltingPoint": "-248.59 \u00b0C",
    "boilingPoint": "-246.05 \u00b0C",
    "configuration": "1s2 2s2 2p6",
    "summary": "Neon is a chemical element with symbol Ne and atomic number 10. It is in group 18 (noble gases) of the periodic table. Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about two-thirds the density of air.",
    "xpos": 18,
    "ypos": 2
  },
  {
    "name": "Sodium",
    "symbol": "Na",
    "number": 11,
    "group": 1,
    "period": 3,
    "category": "alkali-metal",
    "categoryName": "alkali metal",
    "meltingPoint": "97.79 \u00b0C",
    "boilingPoint": "882.94 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s1",
    "summary": "Sodium /\u02c8so\u028adi\u0259m/ is a chemical element with symbol Na (from Ancient Greek \u039d\u03ac\u03c4\u03c1\u03b9\u03bf) and atomic number 11. It is a soft, silver-white, highly reactive metal. In the Periodic table it is in column 1 (alkali metals), and shares with the other six elements in that column that it has a single electron in its outer shell, which it readily donates, creating a positively charged atom - a cation.",
    "xpos": 1,
    "ypos": 3
  },
  {
    "name": "Magnesium",
    "symbol": "Mg",
    "number": 12,
    "group": 2,
    "period": 3,
    "category": "alkaline-earth",
    "categoryName": "alkaline earth metal",
    "meltingPoint": "649.85 \u00b0C",
    "boilingPoint": "1089.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2",
    "summary": "Magnesium is a chemical element with symbol Mg and atomic number 12. It is a shiny gray solid which bears a close physical resemblance to the other five elements in the second column (Group 2, or alkaline earth metals) of the periodic table:they each have the same electron configuration in their outer electron shell producing a similar crystal structure. Magnesium is the ninth most abundant element in the universe.",
    "xpos": 2,
    "ypos": 3
  },
  {
    "name": "Aluminium",
    "symbol": "Al",
    "number": 13,
    "group": 13,
    "period": 3,
    "category": "post-transition",
    "categoryName": "post-transition metal",
    "meltingPoint": "660.32 \u00b0C",
    "boilingPoint": "2469.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p1",
    "summary": "Aluminium (or aluminum; see different endings) is a chemical element in the boron group with symbol Al and atomic number 13. It is a silvery-white, soft, nonmagnetic, ductile metal. Aluminium is the third most abundant element (after oxygen and silicon), and the most abundant metal, in the Earth's crust.",
    "xpos": 13,
    "ypos": 3
  },
  {
    "name": "Silicon",
    "symbol": "Si",
    "number": 14,
    "group": 14,
    "period": 3,
    "category": "metalloid",
    "categoryName": "metalloid",
    "meltingPoint": "1413.85 \u00b0C",
    "boilingPoint": "3264.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p2",
    "summary": "Silicon is a chemical element with symbol Si and atomic number 14. It is a tetravalent metalloid, more reactive than germanium, the metalloid directly below it in the table. Controversy about silicon's character dates to its discovery.",
    "xpos": 14,
    "ypos": 3
  },
  {
    "name": "Phosphorus",
    "symbol": "P",
    "number": 15,
    "group": 15,
    "period": 3,
    "category": "reactive-nonmetal",
    "categoryName": "polyatomic nonmetal",
    "meltingPoint": "Unknown",
    "boilingPoint": "Unknown",
    "configuration": "1s2 2s2 2p6 3s2 3p3",
    "summary": "Phosphorus is a chemical element with symbol P and atomic number 15. As an element, phosphorus exists in two major forms\u2014white phosphorus and red phosphorus\u2014but due to its high reactivity, phosphorus is never found as a free element on Earth. Instead phosphorus-containing minerals are almost always present in their maximally oxidised state, as inorganic phosphate rocks.",
    "xpos": 15,
    "ypos": 3
  },
  {
    "name": "Sulfur",
    "symbol": "S",
    "number": 16,
    "group": 16,
    "period": 3,
    "category": "reactive-nonmetal",
    "categoryName": "polyatomic nonmetal",
    "meltingPoint": "115.21 \u00b0C",
    "boilingPoint": "444.65 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p4",
    "summary": "Sulfur or sulphur (see spelling differences) is a chemical element with symbol S and atomic number 16. It is an abundant, multivalent non-metal. Under normal conditions, sulfur atoms form cyclic octatomic molecules with chemical formula S8.",
    "xpos": 16,
    "ypos": 3
  },
  {
    "name": "Chlorine",
    "symbol": "Cl",
    "number": 17,
    "group": 17,
    "period": 3,
    "category": "reactive-nonmetal",
    "categoryName": "diatomic nonmetal",
    "meltingPoint": "-101.55 \u00b0C",
    "boilingPoint": "-34.04 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p5",
    "summary": "Chlorine is a chemical element with symbol Cl and atomic number 17. It also has a relative atomic mass of 35.5. Chlorine is in the halogen group (17) and is the second lightest halogen following fluorine.",
    "xpos": 17,
    "ypos": 3
  },
  {
    "name": "Argon",
    "symbol": "Ar",
    "number": 18,
    "group": 18,
    "period": 3,
    "category": "noble-gas",
    "categoryName": "noble gas",
    "meltingPoint": "-189.34 \u00b0C",
    "boilingPoint": "-185.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6",
    "summary": "Argon is a chemical element with symbol Ar and atomic number 18. It is in group 18 of the periodic table and is a noble gas. Argon is the third most common gas in the Earth's atmosphere, at 0.934% (9,340 ppmv), making it over twice as abundant as the next most common atmospheric gas, water vapor (which averages about 4000 ppmv, but varies greatly), and 23 times as abundant as the next most common non-condensing atmospheric gas, carbon dioxide (400 ppmv), and more than 500 times as abundant as the next most common noble gas, neon (18 ppmv).",
    "xpos": 18,
    "ypos": 3
  },
  {
    "name": "Potassium",
    "symbol": "K",
    "number": 19,
    "group": 1,
    "period": 4,
    "category": "alkali-metal",
    "categoryName": "alkali metal",
    "meltingPoint": "63.55 \u00b0C",
    "boilingPoint": "758.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s1",
    "summary": "Potassium is a chemical element with symbol K (derived from Neo-Latin, kalium) and atomic number 19. It was first isolated from potash, the ashes of plants, from which its name is derived. In the Periodic table, potassium is one of seven elements in column (group) 1 (alkali metals):they all have a single valence electron in their outer electron shell, which they readily give up to create an atom with a positive charge - a cation, and combine with anions to form salts.",
    "xpos": 1,
    "ypos": 4
  },
  {
    "name": "Calcium",
    "symbol": "Ca",
    "number": 20,
    "group": 2,
    "period": 4,
    "category": "alkaline-earth",
    "categoryName": "alkaline earth metal",
    "meltingPoint": "841.85 \u00b0C",
    "boilingPoint": "1483.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2",
    "summary": "Calcium is a chemical element with symbol Ca and atomic number 20. Calcium is a soft gray alkaline earth metal, fifth-most-abundant element by mass in the Earth's crust. The ion Ca2+ is also the fifth-most-abundant dissolved ion in seawater by both molarity and mass, after sodium, chloride, magnesium, and sulfate.",
    "xpos": 2,
    "ypos": 4
  },
  {
    "name": "Scandium",
    "symbol": "Sc",
    "number": 21,
    "group": 3,
    "period": 4,
    "category": "transition-metal",
    "categoryName": "transition metal",
    "meltingPoint": "1540.85 \u00b0C",
    "boilingPoint": "2835.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d1",
    "summary": "Scandium is a chemical element with symbol Sc and atomic number 21. A silvery-white metallic d-block element, it has historically been sometimes classified as a rare earth element, together with yttrium and the lanthanoids. It was discovered in 1879 by spectral analysis of the minerals euxenite and gadolinite from Scandinavia.",
    "xpos": 3,
    "ypos": 4
  },
  {
    "name": "Titanium",
    "symbol": "Ti",
    "number": 22,
    "group": 4,
    "period": 4,
    "category": "transition-metal",
    "categoryName": "transition metal",
    "meltingPoint": "1667.85 \u00b0C",
    "boilingPoint": "3286.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d2",
    "summary": "Titanium is a chemical element with symbol Ti and atomic number 22. It is a lustrous transition metal with a silver color, low density and high strength. It is highly resistant to corrosion in sea water, aqua regia and chlorine.",
    "xpos": 4,
    "ypos": 4
  },
  {
    "name": "Vanadium",
    "symbol": "V",
    "number": 23,
    "group": 5,
    "period": 4,
    "category": "transition-metal",
    "categoryName": "transition metal",
    "meltingPoint": "1909.85 \u00b0C",
    "boilingPoint": "3406.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d3",
    "summary": "Vanadium is a chemical element with symbol V and atomic number 23. It is a hard, silvery grey, ductile and malleable transition metal. The element is found only in chemically combined form in nature, but once isolated artificially, the formation of an oxide layer stabilizes the free metal somewhat against further oxidation.",
    "xpos": 5,
    "ypos": 4
  },
  {
    "name": "Chromium",
    "symbol": "Cr",
    "number": 24,
    "group": 6,
    "period": 4,
    "category": "transition-metal",
    "categoryName": "transition metal",
    "meltingPoint": "1906.85 \u00b0C",
    "boilingPoint": "2670.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s1 3d5",
    "summary": "Chromium is a chemical element with symbol Cr and atomic number 24. It is the first element in Group 6. It is a steely-gray, lustrous, hard and brittle metal which takes a high polish, resists tarnishing, and has a high melting point.",
    "xpos": 6,
    "ypos": 4
  },
  {
    "name": "Manganese",
    "symbol": "Mn",
    "number": 25,
    "group": 7,
    "period": 4,
    "category": "transition-metal",
    "categoryName": "transition metal",
    "meltingPoint": "1245.85 \u00b0C",
    "boilingPoint": "2060.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d5",
    "summary": "Manganese is a chemical element with symbol Mn and atomic number 25. It is not found as a free element in nature; it is often found in combination with iron, and in many minerals. Manganese is a metal with important industrial metal alloy uses, particularly in stainless steels.",
    "xpos": 7,
    "ypos": 4
  },
  {
    "name": "Iron",
    "symbol": "Fe",
    "number": 26,
    "group": 8,
    "period": 4,
    "category": "transition-metal",
    "categoryName": "transition metal",
    "meltingPoint": "1537.85 \u00b0C",
    "boilingPoint": "2860.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d6",
    "summary": "Iron is a chemical element with symbol Fe (from Latin:ferrum) and atomic number 26. It is a metal in the first transition series. It is by mass the most common element on Earth, forming much of Earth's outer and inner core.",
    "xpos": 8,
    "ypos": 4
  },
  {
    "name": "Cobalt",
    "symbol": "Co",
    "number": 27,
    "group": 9,
    "period": 4,
    "category": "transition-metal",
    "categoryName": "transition metal",
    "meltingPoint": "1494.85 \u00b0C",
    "boilingPoint": "2926.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d7",
    "summary": "Cobalt is a chemical element with symbol Co and atomic number 27. Like nickel, cobalt in the Earth's crust is found only in chemically combined form, save for small deposits found in alloys of natural meteoric iron. The free element, produced by reductive smelting, is a hard, lustrous, silver-gray metal.",
    "xpos": 9,
    "ypos": 4
  },
  {
    "name": "Nickel",
    "symbol": "Ni",
    "number": 28,
    "group": 10,
    "period": 4,
    "category": "transition-metal",
    "categoryName": "transition metal",
    "meltingPoint": "1454.85 \u00b0C",
    "boilingPoint": "2729.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d8",
    "summary": "Nickel is a chemical element with symbol Ni and atomic number 28. It is a silvery-white lustrous metal with a slight golden tinge. Nickel belongs to the transition metals and is hard and ductile.",
    "xpos": 10,
    "ypos": 4
  },
  {
    "name": "Copper",
    "symbol": "Cu",
    "number": 29,
    "group": 11,
    "period": 4,
    "category": "transition-metal",
    "categoryName": "transition metal",
    "meltingPoint": "1084.62 \u00b0C",
    "boilingPoint": "2561.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s1 3d10",
    "summary": "Copper is a chemical element with symbol Cu (from Latin:cuprum) and atomic number 29. It is a soft, malleable and ductile metal with very high thermal and electrical conductivity. A freshly exposed surface of pure copper has a reddish-orange color.",
    "xpos": 11,
    "ypos": 4
  },
  {
    "name": "Zinc",
    "symbol": "Zn",
    "number": 30,
    "group": 12,
    "period": 4,
    "category": "transition-metal",
    "categoryName": "transition metal",
    "meltingPoint": "419.53 \u00b0C",
    "boilingPoint": "906.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10",
    "summary": "Zinc, in commerce also spelter, is a chemical element with symbol Zn and atomic number 30. It is the first element of group 12 of the periodic table. In some respects zinc is chemically similar to magnesium:its ion is of similar size and its only common oxidation state is +2.",
    "xpos": 12,
    "ypos": 4
  },
  {
    "name": "Gallium",
    "symbol": "Ga",
    "number": 31,
    "group": 13,
    "period": 4,
    "category": "post-transition",
    "categoryName": "post-transition metal",
    "meltingPoint": "29.76 \u00b0C",
    "boilingPoint": "2399.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p1",
    "summary": "Gallium is a chemical element with symbol Ga and atomic number 31. Elemental gallium does not occur in free form in nature, but as the gallium(III) compounds that are in trace amounts in zinc ores and in bauxite. Gallium is a soft, silvery metal, and elemental gallium is a brittle solid at low temperatures, and melts at 29.76 \u00b0C (85.57 \u00b0F) (slightly above room temperature).",
    "xpos": 13,
    "ypos": 4
  },
  {
    "name": "Germanium",
    "symbol": "Ge",
    "number": 32,
    "group": 14,
    "period": 4,
    "category": "metalloid",
    "categoryName": "metalloid",
    "meltingPoint": "938.25 \u00b0C",
    "boilingPoint": "2832.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p2",
    "summary": "Germanium is a chemical element with symbol Ge and atomic number 32. It is a lustrous, hard, grayish-white metalloid in the carbon group, chemically similar to its group neighbors tin and silicon. Purified germanium is a semiconductor, with an appearance most similar to elemental silicon.",
    "xpos": 14,
    "ypos": 4
  },
  {
    "name": "Arsenic",
    "symbol": "As",
    "number": 33,
    "group": 15,
    "period": 4,
    "category": "metalloid",
    "categoryName": "metalloid",
    "meltingPoint": "Unknown",
    "boilingPoint": "Unknown",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p3",
    "summary": "Arsenic is a chemical element with symbol As and atomic number 33. Arsenic occurs in many minerals, usually in conjunction with sulfur and metals, and also as a pure elemental crystal. Arsenic is a metalloid.",
    "xpos": 15,
    "ypos": 4
  },
  {
    "name": "Selenium",
    "symbol": "Se",
    "number": 34,
    "group": 16,
    "period": 4,
    "category": "reactive-nonmetal",
    "categoryName": "polyatomic nonmetal",
    "meltingPoint": "220.85 \u00b0C",
    "boilingPoint": "684.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p4",
    "summary": "Selenium is a chemical element with symbol Se and atomic number 34. It is a nonmetal with properties that are intermediate between those of its periodic table column-adjacent chalcogen elements sulfur and tellurium. It rarely occurs in its elemental state in nature, or as pure ore compounds.",
    "xpos": 16,
    "ypos": 4
  },
  {
    "name": "Bromine",
    "symbol": "Br",
    "number": 35,
    "group": 17,
    "period": 4,
    "category": "reactive-nonmetal",
    "categoryName": "diatomic nonmetal",
    "meltingPoint": "-7.35 \u00b0C",
    "boilingPoint": "58.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p5",
    "summary": "Bromine (from Ancient Greek:\u03b2\u03c1\u1ff6\u03bc\u03bf\u03c2, br\u00f3mos, meaning \"stench\") is a chemical element with symbol Br, and atomic number 35. It is a halogen. The element was isolated independently by two chemists, Carl Jacob L\u00f6wig and Antoine Jerome Balard, in 1825\u20131826.",
    "xpos": 17,
    "ypos": 4
  },
  {
    "name": "Krypton",
    "symbol": "Kr",
    "number": 36,
    "group": 18,
    "period": 4,
    "category": "noble-gas",
    "categoryName": "noble gas",
    "meltingPoint": "-157.37 \u00b0C",
    "boilingPoint": "-153.22 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6",
    "summary": "Krypton (from Greek:\u03ba\u03c1\u03c5\u03c0\u03c4\u03cc\u03c2 kryptos \"the hidden one\") is a chemical element with symbol Kr and atomic number 36. It is a member of group 18 (noble gases) elements. A colorless, odorless, tasteless noble gas, krypton occurs in trace amounts in the atmosphere, is isolated by fractionally distilling liquefied air, and is often used with other rare gases in fluorescent lamps.",
    "xpos": 18,
    "ypos": 4
  },
  {
    "name": "Rubidium",
    "symbol": "Rb",
    "number": 37,
    "group": 1,
    "period": 5,
    "category": "alkali-metal",
    "categoryName": "alkali metal",
    "meltingPoint": "39.3 \u00b0C",
    "boilingPoint": "687.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1",
    "summary": "Rubidium is a chemical element with symbol Rb and atomic number 37. Rubidium is a soft, silvery-white metallic element of the alkali metal group, with an atomic mass of 85.4678. Elemental rubidium is highly reactive, with properties similar to those of other alkali metals, such as very rapid oxidation in air.",
    "xpos": 1,
    "ypos": 5
  },
  {
    "name": "Strontium",
    "symbol": "Sr",
    "number": 38,
    "group": 2,
    "period": 5,
    "category": "alkaline-earth",
    "categoryName": "alkaline earth metal",
    "meltingPoint": "776.85 \u00b0C",
    "boilingPoint": "1376.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2",
    "summary": "Strontium is a chemical element with symbol Sr and atomic number 38. An alkaline earth metal, strontium is a soft silver-white or yellowish metallic element that is highly reactive chemically. The metal turns yellow when it is exposed to air.",
    "xpos": 2,
    "ypos": 5
  },
  {
    "name": "Yttrium",
    "symbol": "Y",
    "number": 39,
    "group": 3,
    "period": 5,
    "category": "transition-metal",
    "categoryName": "transition metal",
    "meltingPoint": "1525.85 \u00b0C",
    "boilingPoint": "2929.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d1",
    "summary": "Yttrium is a chemical element with symbol Y and atomic number 39. It is a silvery-metallic transition metal chemically similar to the lanthanides and it has often been classified as a \"rare earth element\". Yttrium is almost always found combined with the lanthanides in rare earth minerals and is never found in nature as a free element.",
    "xpos": 3,
    "ypos": 5
  },
  {
    "name": "Zirconium",
    "symbol": "Zr",
    "number": 40,
    "group": 4,
    "period": 5,
    "category": "transition-metal",
    "categoryName": "transition metal",
    "meltingPoint": "1854.85 \u00b0C",
    "boilingPoint": "4376.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d2",
    "summary": "Zirconium is a chemical element with symbol Zr and atomic number 40. The name of zirconium is taken from the name of the mineral zircon, the most important source of zirconium. The word zircon comes from the Persian word zargun \u0632\u0631\u06af\u0648\u0646, meaning \"gold-colored\".",
    "xpos": 4,
    "ypos": 5
  },
  {
    "name": "Niobium",
    "symbol": "Nb",
    "number": 41,
    "group": 5,
    "period": 5,
    "category": "transition-metal",
    "categoryName": "transition metal",
    "meltingPoint": "2476.85 \u00b0C",
    "boilingPoint": "4743.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d4",
    "summary": "Niobium, formerly columbium, is a chemical element with symbol Nb (formerly Cb) and atomic number 41. It is a soft, grey, ductile transition metal, which is often found in the pyrochlore mineral, the main commercial source for niobium, and columbite. The name comes from Greek mythology:Niobe, daughter of Tantalus since it is so similar to tantalum.",
    "xpos": 5,
    "ypos": 5
  },
  {
    "name": "Molybdenum",
    "symbol": "Mo",
    "number": 42,
    "group": 6,
    "period": 5,
    "category": "transition-metal",
    "categoryName": "transition metal",
    "meltingPoint": "2622.85 \u00b0C",
    "boilingPoint": "4638.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d5",
    "summary": "Molybdenum is a chemical element with symbol Mo and atomic number 42. The name is from Neo-Latin molybdaenum, from Ancient Greek \u039c\u03cc\u03bb\u03c5\u03b2\u03b4\u03bf\u03c2 molybdos, meaning lead, since its ores were confused with lead ores. Molybdenum minerals have been known throughout history, but the element was discovered (in the sense of differentiating it as a new entity from the mineral salts of other metals) in 1778 by Carl Wilhelm Scheele.",
    "xpos": 6,
    "ypos": 5
  },
  {
    "name": "Technetium",
    "symbol": "Tc",
    "number": 43,
    "group": 7,
    "period": 5,
    "category": "transition-metal",
    "categoryName": "transition metal",
    "meltingPoint": "2156.85 \u00b0C",
    "boilingPoint": "4264.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d5",
    "summary": "Technetium (/t\u025bk\u02c8ni\u02d0\u0283i\u0259m/) is a chemical element with symbol Tc and atomic number 43. It is the element with the lowest atomic number in the periodic table that has no stable isotopes:every form of it is radioactive. Nearly all technetium is produced synthetically, and only minute amounts are found in nature.",
    "xpos": 7,
    "ypos": 5
  },
  {
    "name": "Ruthenium",
    "symbol": "Ru",
    "number": 44,
    "group": 8,
    "period": 5,
    "category": "transition-metal",
    "categoryName": "transition metal",
    "meltingPoint": "2333.85 \u00b0C",
    "boilingPoint": "4149.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d7",
    "summary": "Ruthenium is a chemical element with symbol Ru and atomic number 44. It is a rare transition metal belonging to the platinum group of the periodic table. Like the other metals of the platinum group, ruthenium is inert to most other chemicals.",
    "xpos": 8,
    "ypos": 5
  },
  {
    "name": "Rhodium",
    "symbol": "Rh",
    "number": 45,
    "group": 9,
    "period": 5,
    "category": "transition-metal",
    "categoryName": "transition metal",
    "meltingPoint": "1963.85 \u00b0C",
    "boilingPoint": "3694.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d8",
    "summary": "Rhodium is a chemical element with symbol Rh and atomic number 45. It is a rare, silvery-white, hard, and chemically inert transition metal. It is a member of the platinum group.",
    "xpos": 9,
    "ypos": 5
  },
  {
    "name": "Palladium",
    "symbol": "Pd",
    "number": 46,
    "group": 10,
    "period": 5,
    "category": "transition-metal",
    "categoryName": "transition metal",
    "meltingPoint": "1554.9 \u00b0C",
    "boilingPoint": "2962.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10",
    "summary": "Palladium is a chemical element with symbol Pd and atomic number 46. It is a rare and lustrous silvery-white metal discovered in 1803 by William Hyde Wollaston. He named it after the asteroid Pallas, which was itself named after the epithet of the Greek goddess Athena, acquired by her when she slew Pallas.",
    "xpos": 10,
    "ypos": 5
  },
  {
    "name": "Silver",
    "symbol": "Ag",
    "number": 47,
    "group": 11,
    "period": 5,
    "category": "transition-metal",
    "categoryName": "transition metal",
    "meltingPoint": "961.78 \u00b0C",
    "boilingPoint": "2161.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d10",
    "summary": "Silver is a chemical element with symbol Ag (Greek:\u03ac\u03c1\u03b3\u03c5\u03c1\u03bf\u03c2 \u00e1rguros, Latin:argentum, both from the Indo-European root *h\u2082er\u01f5- for \"grey\" or \"shining\") and atomic number 47. A soft, white, lustrous transition metal, it possesses the highest electrical conductivity, thermal conductivity and reflectivity of any metal. The metal occurs naturally in its pure, free form (native silver), as an alloy with gold and other metals, and in minerals such as argentite and chlorargyrite.",
    "xpos": 11,
    "ypos": 5
  },
  {
    "name": "Cadmium",
    "symbol": "Cd",
    "number": 48,
    "group": 12,
    "period": 5,
    "category": "transition-metal",
    "categoryName": "transition metal",
    "meltingPoint": "321.07 \u00b0C",
    "boilingPoint": "766.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10",
    "summary": "Cadmium is a chemical element with symbol Cd and atomic number 48. This soft, bluish-white metal is chemically similar to the two other stable metals in group 12, zinc and mercury. Like zinc, it prefers oxidation state +2 in most of its compounds and like mercury it shows a low melting point compared to transition metals.",
    "xpos": 12,
    "ypos": 5
  },
  {
    "name": "Indium",
    "symbol": "In",
    "number": 49,
    "group": 13,
    "period": 5,
    "category": "post-transition",
    "categoryName": "post-transition metal",
    "meltingPoint": "156.6 \u00b0C",
    "boilingPoint": "2071.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p1",
    "summary": "Indium is a chemical element with symbol In and atomic number 49. It is a post-transition metallic element that is rare in Earth's crust. The metal is very soft, malleable and easily fusible, with a melting point higher than sodium, but lower than lithium or tin.",
    "xpos": 13,
    "ypos": 5
  },
  {
    "name": "Tin",
    "symbol": "Sn",
    "number": 50,
    "group": 14,
    "period": 5,
    "category": "post-transition",
    "categoryName": "post-transition metal",
    "meltingPoint": "231.93 \u00b0C",
    "boilingPoint": "2601.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p2",
    "summary": "Tin is a chemical element with the symbol Sn (for Latin:stannum) and atomic number 50. It is a main group metal in group 14 of the periodic table. Tin shows a chemical similarity to both neighboring group-14 elements, germanium and lead, and has two possible oxidation states, +2 and the slightly more stable +4.",
    "xpos": 14,
    "ypos": 5
  },
  {
    "name": "Antimony",
    "symbol": "Sb",
    "number": 51,
    "group": 15,
    "period": 5,
    "category": "metalloid",
    "categoryName": "metalloid",
    "meltingPoint": "630.63 \u00b0C",
    "boilingPoint": "1634.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p3",
    "summary": "Antimony is a chemical element with symbol Sb (from Latin:stibium) and atomic number 51. A lustrous gray metalloid, it is found in nature mainly as the sulfide mineral stibnite (Sb2S3). Antimony compounds have been known since ancient times and were used for cosmetics; metallic antimony was also known, but it was erroneously identified as lead upon its discovery.",
    "xpos": 15,
    "ypos": 5
  },
  {
    "name": "Tellurium",
    "symbol": "Te",
    "number": 52,
    "group": 16,
    "period": 5,
    "category": "metalloid",
    "categoryName": "metalloid",
    "meltingPoint": "449.51 \u00b0C",
    "boilingPoint": "987.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p4",
    "summary": "Tellurium is a chemical element with symbol Te and atomic number 52. It is a brittle, mildly toxic, rare, silver-white metalloid. Tellurium is chemically related to selenium and sulfur.",
    "xpos": 16,
    "ypos": 5
  },
  {
    "name": "Iodine",
    "symbol": "I",
    "number": 53,
    "group": 17,
    "period": 5,
    "category": "reactive-nonmetal",
    "categoryName": "diatomic nonmetal",
    "meltingPoint": "113.7 \u00b0C",
    "boilingPoint": "184.25 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p5",
    "summary": "Iodine is a chemical element with symbol I and atomic number 53. The name is from Greek \u1f30\u03bf\u03b5\u03b9\u03b4\u03ae\u03c2 ioeid\u0113s, meaning violet or purple, due to the color of iodine vapor. Iodine and its compounds are primarily used in nutrition, and industrially in the production of acetic acid and certain polymers.",
    "xpos": 17,
    "ypos": 5
  },
  {
    "name": "Xenon",
    "symbol": "Xe",
    "number": 54,
    "group": 18,
    "period": 5,
    "category": "noble-gas",
    "categoryName": "noble gas",
    "meltingPoint": "-111.75 \u00b0C",
    "boilingPoint": "-108.1 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6",
    "summary": "Xenon is a chemical element with symbol Xe and atomic number 54. It is a colorless, dense, odorless noble gas, that occurs in the Earth's atmosphere in trace amounts. Although generally unreactive, xenon can undergo a few chemical reactions such as the formation of xenon hexafluoroplatinate, the first noble gas compound to be synthesized.",
    "xpos": 18,
    "ypos": 5
  },
  {
    "name": "Cesium",
    "symbol": "Cs",
    "number": 55,
    "group": 1,
    "period": 6,
    "category": "alkali-metal",
    "categoryName": "alkali metal",
    "meltingPoint": "28.55 \u00b0C",
    "boilingPoint": "670.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s1",
    "summary": "Caesium or cesium is a chemical element with symbol Cs and atomic number 55. It is a soft, silvery-gold alkali metal with a melting point of 28 \u00b0C (82 \u00b0F), which makes it one of only five elemental metals that are liquid at or near room temperature. Caesium is an alkali metal and has physical and chemical properties similar to those of rubidium and potassium.",
    "xpos": 1,
    "ypos": 6
  },
  {
    "name": "Barium",
    "symbol": "Ba",
    "number": 56,
    "group": 2,
    "period": 6,
    "category": "alkaline-earth",
    "categoryName": "alkaline earth metal",
    "meltingPoint": "726.85 \u00b0C",
    "boilingPoint": "1844.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2",
    "summary": "Barium is a chemical element with symbol Ba and atomic number 56. It is the fifth element in Group 2, a soft silvery metallic alkaline earth metal. Because of its high chemical reactivity barium is never found in nature as a free element.",
    "xpos": 2,
    "ypos": 6
  },
  {
    "name": "Lanthanum",
    "symbol": "La",
    "number": 57,
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "categoryName": "lanthanide",
    "meltingPoint": "919.85 \u00b0C",
    "boilingPoint": "3463.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 5d1",
    "summary": "Lanthanum is a soft, ductile, silvery-white metallic chemical element with symbol La and atomic number 57. It tarnishes rapidly when exposed to air and is soft enough to be cut with a knife. It gave its name to the lanthanide series, a group of 15 similar elements between lanthanum and lutetium in the periodic table:it is also sometimes considered the first element of the 6th-period transition metals.",
    "xpos": 3,
    "ypos": 9
  },
  {
    "name": "Cerium",
    "symbol": "Ce",
    "number": 58,
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "categoryName": "lanthanide",
    "meltingPoint": "794.85 \u00b0C",
    "boilingPoint": "3442.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 5d1 4f1",
    "summary": "Cerium is a chemical element with symbol Ce and atomic number 58. It is a soft, silvery, ductile metal which easily oxidizes in air. Cerium was named after the dwarf planet Ceres (itself named after the Roman goddess of agriculture).",
    "xpos": 4,
    "ypos": 9
  },
  {
    "name": "Praseodymium",
    "symbol": "Pr",
    "number": 59,
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "categoryName": "lanthanide",
    "meltingPoint": "934.85 \u00b0C",
    "boilingPoint": "3129.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f3",
    "summary": "Praseodymium is a chemical element with symbol Pr and atomic number 59. Praseodymium is a soft, silvery, malleable and ductile metal in the lanthanide group. It is valued for its magnetic, electrical, chemical, and optical properties.",
    "xpos": 5,
    "ypos": 9
  },
  {
    "name": "Neodymium",
    "symbol": "Nd",
    "number": 60,
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "categoryName": "lanthanide",
    "meltingPoint": "1023.85 \u00b0C",
    "boilingPoint": "3073.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f4",
    "summary": "Neodymium is a chemical element with symbol Nd and atomic number 60. It is a soft silvery metal that tarnishes in air. Neodymium was discovered in 1885 by the Austrian chemist Carl Auer von Welsbach.",
    "xpos": 6,
    "ypos": 9
  },
  {
    "name": "Promethium",
    "symbol": "Pm",
    "number": 61,
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "categoryName": "lanthanide",
    "meltingPoint": "1041.85 \u00b0C",
    "boilingPoint": "2999.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f5",
    "summary": "Promethium, originally prometheum, is a chemical element with the symbol Pm and atomic number 61. All of its isotopes are radioactive; it is one of only two such elements that are followed in the periodic table by elements with stable forms, a distinction shared with technetium. Chemically, promethium is a lanthanide, which forms salts when combined with other elements.",
    "xpos": 7,
    "ypos": 9
  },
  {
    "name": "Samarium",
    "symbol": "Sm",
    "number": 62,
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "categoryName": "lanthanide",
    "meltingPoint": "1071.85 \u00b0C",
    "boilingPoint": "1899.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f6",
    "summary": "Samarium is a chemical element with symbol Sm and atomic number 62. It is a moderately hard silvery metal that readily oxidizes in air. Being a typical member of the lanthanide series, samarium usually assumes the oxidation state +3.",
    "xpos": 8,
    "ypos": 9
  },
  {
    "name": "Europium",
    "symbol": "Eu",
    "number": 63,
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "categoryName": "lanthanide",
    "meltingPoint": "825.85 \u00b0C",
    "boilingPoint": "1528.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f7",
    "summary": "Europium is a chemical element with symbol Eu and atomic number 63. It was isolated in 1901 and is named after the continent of Europe. It is a moderately hard, silvery metal which readily oxidizes in air and water.",
    "xpos": 9,
    "ypos": 9
  },
  {
    "name": "Gadolinium",
    "symbol": "Gd",
    "number": 64,
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "categoryName": "lanthanide",
    "meltingPoint": "1311.85 \u00b0C",
    "boilingPoint": "2999.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f7 5d1",
    "summary": "Gadolinium is a chemical element with symbol Gd and atomic number 64. It is a silvery-white, malleable and ductile rare-earth metal. It is found in nature only in combined (salt) form.",
    "xpos": 10,
    "ypos": 9
  },
  {
    "name": "Terbium",
    "symbol": "Tb",
    "number": 65,
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "categoryName": "lanthanide",
    "meltingPoint": "1355.85 \u00b0C",
    "boilingPoint": "3122.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f9",
    "summary": "Terbium is a chemical element with symbol Tb and atomic number 65. It is a silvery-white rare earth metal that is malleable, ductile and soft enough to be cut with a knife. Terbium is never found in nature as a free element, but it is contained in many minerals, including cerite, gadolinite, monazite, xenotime and euxenite.",
    "xpos": 11,
    "ypos": 9
  },
  {
    "name": "Dysprosium",
    "symbol": "Dy",
    "number": 66,
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "categoryName": "lanthanide",
    "meltingPoint": "1406.85 \u00b0C",
    "boilingPoint": "2566.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f10",
    "summary": "Dysprosium is a chemical element with the symbol Dy and atomic number 66. It is a rare earth element with a metallic silver luster. Dysprosium is never found in nature as a free element, though it is found in various minerals, such as xenotime.",
    "xpos": 12,
    "ypos": 9
  },
  {
    "name": "Holmium",
    "symbol": "Ho",
    "number": 67,
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "categoryName": "lanthanide",
    "meltingPoint": "1460.85 \u00b0C",
    "boilingPoint": "2599.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f11",
    "summary": "Holmium is a chemical element with symbol Ho and atomic number 67. Part of the lanthanide series, holmium is a rare earth element. Holmium was discovered by Swedish chemist Per Theodor Cleve.",
    "xpos": 13,
    "ypos": 9
  },
  {
    "name": "Erbium",
    "symbol": "Er",
    "number": 68,
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "categoryName": "lanthanide",
    "meltingPoint": "1528.85 \u00b0C",
    "boilingPoint": "2867.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f12",
    "summary": "Erbium is a chemical element in the lanthanide series, with symbol Er and atomic number 68. A silvery-white solid metal when artificially isolated, natural erbium is always found in chemical combination with other elements on Earth. As such, it is a rare earth element which is associated with several other rare elements in the mineral gadolinite from Ytterby in Sweden, where yttrium, ytterbium, and terbium were discovered.",
    "xpos": 14,
    "ypos": 9
  },
  {
    "name": "Thulium",
    "symbol": "Tm",
    "number": 69,
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "categoryName": "lanthanide",
    "meltingPoint": "1544.85 \u00b0C",
    "boilingPoint": "1949.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f13",
    "summary": "Thulium is a chemical element with symbol Tm and atomic number 69. It is the thirteenth and antepenultimate (third-last) element in the lanthanide series. Like the other lanthanides, the most common oxidation state is +3, seen in its oxide, halides and other compounds.",
    "xpos": 15,
    "ypos": 9
  },
  {
    "name": "Ytterbium",
    "symbol": "Yb",
    "number": 70,
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "categoryName": "lanthanide",
    "meltingPoint": "823.85 \u00b0C",
    "boilingPoint": "1195.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14",
    "summary": "Ytterbium is a chemical element with symbol Yb and atomic number 70. It is the fourteenth and penultimate element in the lanthanide series, which is the basis of the relative stability of its +2 oxidation state. However, like the other lanthanides, its most common oxidation state is +3, seen in its oxide, halides and other compounds.",
    "xpos": 16,
    "ypos": 9
  },
  {
    "name": "Lutetium",
    "symbol": "Lu",
    "number": 71,
    "group": 3,
    "period": 6,
    "category": "lanthanide",
    "categoryName": "lanthanide",
    "meltingPoint": "1651.85 \u00b0C",
    "boilingPoint": "3401.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d1",
    "summary": "Lutetium is a chemical element with symbol Lu and atomic number 71. It is a silvery white metal, which resists corrosion in dry, but not in moist air. It is considered the first element of the 6th-period transition metals and the last element in the lanthanide series, and is traditionally counted among the rare earths.",
    "xpos": 17,
    "ypos": 9
  },
  {
    "name": "Hafnium",
    "symbol": "Hf",
    "number": 72,
    "group": 4,
    "period": 6,
    "category": "transition-metal",
    "categoryName": "transition metal",
    "meltingPoint": "2232.85 \u00b0C",
    "boilingPoint": "4602.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d2",
    "summary": "Hafnium is a chemical element with symbol Hf and atomic number 72. A lustrous, silvery gray, tetravalent transition metal, hafnium chemically resembles zirconium and is found in zirconium minerals. Its existence was predicted by Dmitri Mendeleev in 1869, though it was not identified until 1923, making it the penultimate stable element to be discovered (rhenium was identified two years later).",
    "xpos": 4,
    "ypos": 6
  },
  {
    "name": "Tantalum",
    "symbol": "Ta",
    "number": 73,
    "group": 5,
    "period": 6,
    "category": "transition-metal",
    "categoryName": "transition metal",
    "meltingPoint": "3016.85 \u00b0C",
    "boilingPoint": "5457.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d3",
    "summary": "Tantalum is a chemical element with symbol Ta and atomic number 73. Previously known as tantalium, its name comes from Tantalus, an antihero from Greek mythology. Tantalum is a rare, hard, blue-gray, lustrous transition metal that is highly corrosion-resistant.",
    "xpos": 5,
    "ypos": 6
  },
  {
    "name": "Tungsten",
    "symbol": "W",
    "number": 74,
    "group": 6,
    "period": 6,
    "category": "transition-metal",
    "categoryName": "transition metal",
    "meltingPoint": "3421.85 \u00b0C",
    "boilingPoint": "5929.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d4",
    "summary": "Tungsten, also known as wolfram, is a chemical element with symbol W and atomic number 74. The word tungsten comes from the Swedish language tung sten, which directly translates to heavy stone. Its name in Swedish is volfram, however, in order to distinguish it from scheelite, which in Swedish is alternatively named tungsten.",
    "xpos": 6,
    "ypos": 6
  },
  {
    "name": "Rhenium",
    "symbol": "Re",
    "number": 75,
    "group": 7,
    "period": 6,
    "category": "transition-metal",
    "categoryName": "transition metal",
    "meltingPoint": "3185.85 \u00b0C",
    "boilingPoint": "5595.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d5",
    "summary": "Rhenium is a chemical element with symbol Re and atomic number 75. It is a silvery-white, heavy, third-row transition metal in group 7 of the periodic table. With an estimated average concentration of 1 part per billion (ppb), rhenium is one of the rarest elements in the Earth's crust.",
    "xpos": 7,
    "ypos": 6
  },
  {
    "name": "Osmium",
    "symbol": "Os",
    "number": 76,
    "group": 8,
    "period": 6,
    "category": "transition-metal",
    "categoryName": "transition metal",
    "meltingPoint": "3032.85 \u00b0C",
    "boilingPoint": "5011.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d6",
    "summary": "Osmium (from Greek osme (\u1f40\u03c3\u03bc\u03ae) meaning \"smell\") is a chemical element with symbol Os and atomic number 76. It is a hard, brittle, bluish-white transition metal in the platinum group that is found as a trace element in alloys, mostly in platinum ores. Osmium is the densest naturally occurring element, with a density of 22.59 g/cm3.",
    "xpos": 8,
    "ypos": 6
  },
  {
    "name": "Iridium",
    "symbol": "Ir",
    "number": 77,
    "group": 9,
    "period": 6,
    "category": "transition-metal",
    "categoryName": "transition metal",
    "meltingPoint": "2445.85 \u00b0C",
    "boilingPoint": "4129.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d7",
    "summary": "Iridium is a chemical element with symbol Ir and atomic number 77. A very hard, brittle, silvery-white transition metal of the platinum group, iridium is generally credited with being the second densest element (after osmium) based on measured density, although calculations involving the space lattices of the elements show that iridium is denser. It is also the most corrosion-resistant metal, even at temperatures as high as 2000 \u00b0C. Although only certain molten salts and halogens are corrosive to solid iridium, finely divided iridium dust is much more reactive and can be flammable.",
    "xpos": 9,
    "ypos": 6
  },
  {
    "name": "Platinum",
    "symbol": "Pt",
    "number": 78,
    "group": 10,
    "period": 6,
    "category": "transition-metal",
    "categoryName": "transition metal",
    "meltingPoint": "1768.25 \u00b0C",
    "boilingPoint": "3824.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s1 4f14 5d9",
    "summary": "Platinum is a chemical element with symbol Pt and atomic number 78. It is a dense, malleable, ductile, highly unreactive, precious, gray-white transition metal. Its name is derived from the Spanish term platina, which is literally translated into \"little silver\".",
    "xpos": 10,
    "ypos": 6
  },
  {
    "name": "Gold",
    "symbol": "Au",
    "number": 79,
    "group": 11,
    "period": 6,
    "category": "transition-metal",
    "categoryName": "transition metal",
    "meltingPoint": "1064.18 \u00b0C",
    "boilingPoint": "2969.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s1 4f14 5d10",
    "summary": "Gold is a chemical element with symbol Au (from Latin:aurum) and atomic number 79. In its purest form, it is a bright, slightly reddish yellow, dense, soft, malleable and ductile metal. Chemically, gold is a transition metal and a group 11 element.",
    "xpos": 11,
    "ypos": 6
  },
  {
    "name": "Mercury",
    "symbol": "Hg",
    "number": 80,
    "group": 12,
    "period": 6,
    "category": "transition-metal",
    "categoryName": "transition metal",
    "meltingPoint": "-38.83 \u00b0C",
    "boilingPoint": "356.73 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10",
    "summary": "Mercury is a chemical element with symbol Hg and atomic number 80. It is commonly known as quicksilver and was formerly named hydrargyrum (/ha\u026a\u02c8dr\u0251\u02d0rd\u0292\u0259r\u0259m/). A heavy, silvery d-block element, mercury is the only metallic element that is liquid at standard conditions for temperature and pressure; the only other element that is liquid under these conditions is bromine, though metals such as caesium, gallium, and rubidium melt just above room temperature.",
    "xpos": 12,
    "ypos": 6
  },
  {
    "name": "Thallium",
    "symbol": "Tl",
    "number": 81,
    "group": 13,
    "period": 6,
    "category": "post-transition",
    "categoryName": "post-transition metal",
    "meltingPoint": "303.85 \u00b0C",
    "boilingPoint": "1472.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p1",
    "summary": "Thallium is a chemical element with symbol Tl and atomic number 81. This soft gray post-transition metal is not found free in nature. When isolated, it resembles tin, but discolors when exposed to air.",
    "xpos": 13,
    "ypos": 6
  },
  {
    "name": "Lead",
    "symbol": "Pb",
    "number": 82,
    "group": 14,
    "period": 6,
    "category": "post-transition",
    "categoryName": "post-transition metal",
    "meltingPoint": "327.46 \u00b0C",
    "boilingPoint": "1748.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p2",
    "summary": "Lead (/l\u025bd/) is a chemical element in the carbon group with symbol Pb (from Latin:plumbum) and atomic number 82. Lead is a soft, malleable and heavy post-transition metal. Metallic lead has a bluish-white color after being freshly cut, but it soon tarnishes to a dull grayish color when exposed to air.",
    "xpos": 14,
    "ypos": 6
  },
  {
    "name": "Bismuth",
    "symbol": "Bi",
    "number": 83,
    "group": 15,
    "period": 6,
    "category": "post-transition",
    "categoryName": "post-transition metal",
    "meltingPoint": "271.55 \u00b0C",
    "boilingPoint": "1563.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p3",
    "summary": "Bismuth is a chemical element with symbol Bi and atomic number 83. Bismuth, a pentavalent post-transition metal, chemically resembles arsenic and antimony. Elemental bismuth may occur naturally, although its sulfide and oxide form important commercial ores.",
    "xpos": 15,
    "ypos": 6
  },
  {
    "name": "Polonium",
    "symbol": "Po",
    "number": 84,
    "group": 16,
    "period": 6,
    "category": "post-transition",
    "categoryName": "post-transition metal",
    "meltingPoint": "253.85 \u00b0C",
    "boilingPoint": "961.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p4",
    "summary": "Polonium is a chemical element with symbol Po and atomic number 84, discovered in 1898 by Marie Curie and Pierre Curie. A rare and highly radioactive element with no stable isotopes, polonium is chemically similar to bismuth and tellurium, and it occurs in uranium ores. Applications of polonium are few.",
    "xpos": 16,
    "ypos": 6
  },
  {
    "name": "Astatine",
    "symbol": "At",
    "number": 85,
    "group": 17,
    "period": 6,
    "category": "metalloid",
    "categoryName": "metalloid",
    "meltingPoint": "301.85 \u00b0C",
    "boilingPoint": "336.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p5",
    "summary": "Astatine is a very rare radioactive chemical element with the chemical symbol At and atomic number 85. It occurs on Earth as the decay product of various heavier elements. All its isotopes are short-lived; the most stable is astatine-210, with a half-life of 8.1 hours.",
    "xpos": 17,
    "ypos": 6
  },
  {
    "name": "Radon",
    "symbol": "Rn",
    "number": 86,
    "group": 18,
    "period": 6,
    "category": "noble-gas",
    "categoryName": "noble gas",
    "meltingPoint": "-71.15 \u00b0C",
    "boilingPoint": "-61.65 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6",
    "summary": "Radon is a chemical element with symbol Rn and atomic number 86. It is a radioactive, colorless, odorless, tasteless noble gas, occurring naturally as a decay product of radium. Its most stable isotope, 222Rn, has a half-life of 3.8 days.",
    "xpos": 18,
    "ypos": 6
  },
  {
    "name": "Francium",
    "symbol": "Fr",
    "number": 87,
    "group": 1,
    "period": 7,
    "category": "alkali-metal",
    "categoryName": "alkali metal",
    "meltingPoint": "26.85 \u00b0C",
    "boilingPoint": "676.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s1",
    "summary": "Francium is a chemical element with symbol Fr and atomic number 87. It used to be known as eka-caesium and actinium K. It is the second-least electronegative element, behind only caesium. Francium is a highly radioactive metal that decays into astatine, radium, and radon.",
    "xpos": 1,
    "ypos": 7
  },
  {
    "name": "Radium",
    "symbol": "Ra",
    "number": 88,
    "group": 2,
    "period": 7,
    "category": "alkaline-earth",
    "categoryName": "alkaline earth metal",
    "meltingPoint": "959.85 \u00b0C",
    "boilingPoint": "1736.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2",
    "summary": "Radium is a chemical element with symbol Ra and atomic number 88. It is the sixth element in group 2 of the periodic table, also known as the alkaline earth metals. Pure radium is almost colorless, but it readily combines with nitrogen (rather than oxygen) on exposure to air, forming a black surface layer of radium nitride (Ra3N2).",
    "xpos": 2,
    "ypos": 7
  },
  {
    "name": "Actinium",
    "symbol": "Ac",
    "number": 89,
    "group": 3,
    "period": 7,
    "category": "actinide",
    "categoryName": "actinide",
    "meltingPoint": "1226.85 \u00b0C",
    "boilingPoint": "3226.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d1",
    "summary": "Actinium is a radioactive chemical element with symbol Ac (not to be confused with the abbreviation for an acetyl group) and atomic number 89, which was discovered in 1899. It was the first non-primordial radioactive element to be isolated. Polonium, radium and radon were observed before actinium, but they were not isolated until 1902.",
    "xpos": 3,
    "ypos": 10
  },
  {
    "name": "Thorium",
    "symbol": "Th",
    "number": 90,
    "group": 3,
    "period": 7,
    "category": "actinide",
    "categoryName": "actinide",
    "meltingPoint": "1749.85 \u00b0C",
    "boilingPoint": "4787.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d2",
    "summary": "Thorium is a chemical element with symbol Th and atomic number 90. A radioactive actinide metal, thorium is one of only two significantly radioactive elements that still occur naturally in large quantities as a primordial element (the other being uranium). It was discovered in 1828 by the Norwegian Reverend and amateur mineralogist Morten Thrane Esmark and identified by the Swedish chemist J\u00f6ns Jakob Berzelius, who named it after Thor, the Norse god of thunder.",
    "xpos": 4,
    "ypos": 10
  },
  {
    "name": "Protactinium",
    "symbol": "Pa",
    "number": 91,
    "group": 3,
    "period": 7,
    "category": "actinide",
    "categoryName": "actinide",
    "meltingPoint": "1567.85 \u00b0C",
    "boilingPoint": "4026.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f2 6d1",
    "summary": "Protactinium is a chemical element with symbol Pa and atomic number 91. It is a dense, silvery-gray metal which readily reacts with oxygen, water vapor and inorganic acids. It forms various chemical compounds where protactinium is usually present in the oxidation state +5, but can also assume +4 and even +2 or +3 states.",
    "xpos": 5,
    "ypos": 10
  },
  {
    "name": "Uranium",
    "symbol": "U",
    "number": 92,
    "group": 3,
    "period": 7,
    "category": "actinide",
    "categoryName": "actinide",
    "meltingPoint": "1132.15 \u00b0C",
    "boilingPoint": "4130.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f3 6d1",
    "summary": "Uranium is a chemical element with symbol U and atomic number 92. It is a silvery-white metal in the actinide series of the periodic table. A uranium atom has 92 protons and 92 electrons, of which 6 are valence electrons.",
    "xpos": 6,
    "ypos": 10
  },
  {
    "name": "Neptunium",
    "symbol": "Np",
    "number": 93,
    "group": 3,
    "period": 7,
    "category": "actinide",
    "categoryName": "actinide",
    "meltingPoint": "638.85 \u00b0C",
    "boilingPoint": "4173.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f4 6d1",
    "summary": "Neptunium is a chemical element with symbol Np and atomic number 93. A radioactive actinide metal, neptunium is the first transuranic element. Its position in the periodic table just after uranium, named after the planet Uranus, led to it being named after Neptune, the next planet beyond Uranus.",
    "xpos": 7,
    "ypos": 10
  },
  {
    "name": "Plutonium",
    "symbol": "Pu",
    "number": 94,
    "group": 3,
    "period": 7,
    "category": "actinide",
    "categoryName": "actinide",
    "meltingPoint": "639.35 \u00b0C",
    "boilingPoint": "3231.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f6",
    "summary": "Plutonium is a transuranic radioactive chemical element with symbol Pu and atomic number 94. It is an actinide metal of silvery-gray appearance that tarnishes when exposed to air, and forms a dull coating when oxidized. The element normally exhibits six allotropes and four oxidation states.",
    "xpos": 8,
    "ypos": 10
  },
  {
    "name": "Americium",
    "symbol": "Am",
    "number": 95,
    "group": 3,
    "period": 7,
    "category": "actinide",
    "categoryName": "actinide",
    "meltingPoint": "1175.85 \u00b0C",
    "boilingPoint": "2606.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f7",
    "summary": "Americium is a radioactive transuranic chemical element with symbol Am and atomic number 95. This member of the actinide series is located in the periodic table under the lanthanide element europium, and thus by analogy was named after the Americas. Americium was first produced in 1944 by the group of Glenn T.Seaborg from Berkeley, California, at the metallurgical laboratory of University of Chicago.",
    "xpos": 9,
    "ypos": 10
  },
  {
    "name": "Curium",
    "symbol": "Cm",
    "number": 96,
    "group": 3,
    "period": 7,
    "category": "actinide",
    "categoryName": "actinide",
    "meltingPoint": "1339.85 \u00b0C",
    "boilingPoint": "3109.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f7 6d1",
    "summary": "Curium is a transuranic radioactive chemical element with symbol Cm and atomic number 96. This element of the actinide series was named after Marie and Pierre Curie \u2013 both were known for their research on radioactivity. Curium was first intentionally produced and identified in July 1944 by the group of Glenn T. Seaborg at the University of California, Berkeley.",
    "xpos": 10,
    "ypos": 10
  },
  {
    "name": "Berkelium",
    "symbol": "Bk",
    "number": 97,
    "group": 3,
    "period": 7,
    "category": "actinide",
    "categoryName": "actinide",
    "meltingPoint": "985.85 \u00b0C",
    "boilingPoint": "2626.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f9",
    "summary": "Berkelium is a transuranic radioactive chemical element with symbol Bk and atomic number 97. It is a member of the actinide and transuranium element series. It is named after the city of Berkeley, California, the location of the University of California Radiation Laboratory where it was discovered in December 1949.",
    "xpos": 11,
    "ypos": 10
  },
  {
    "name": "Californium",
    "symbol": "Cf",
    "number": 98,
    "group": 3,
    "period": 7,
    "category": "actinide",
    "categoryName": "actinide",
    "meltingPoint": "899.85 \u00b0C",
    "boilingPoint": "1469.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f10",
    "summary": "Californium is a radioactive metallic chemical element with symbol Cf and atomic number 98. The element was first made in 1950 at the University of California Radiation Laboratory in Berkeley, by bombarding curium with alpha particles (helium-4 ions). It is an actinide element, the sixth transuranium element to be synthesized, and has the second-highest atomic mass of all the elements that have been produced in amounts large enough to see with the unaided eye (after einsteinium).",
    "xpos": 12,
    "ypos": 10
  },
  {
    "name": "Einsteinium",
    "symbol": "Es",
    "number": 99,
    "group": 3,
    "period": 7,
    "category": "actinide",
    "categoryName": "actinide",
    "meltingPoint": "859.85 \u00b0C",
    "boilingPoint": "995.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f11",
    "summary": "Einsteinium is a synthetic element with symbol Es and atomic number 99. It is the seventh transuranic element, and an actinide. Einsteinium was discovered as a component of the debris of the first hydrogen bomb explosion in 1952, and named after Albert Einstein.",
    "xpos": 13,
    "ypos": 10
  },
  {
    "name": "Fermium",
    "symbol": "Fm",
    "number": 100,
    "group": 3,
    "period": 7,
    "category": "actinide",
    "categoryName": "actinide",
    "meltingPoint": "1526.85 \u00b0C",
    "boilingPoint": "Unknown",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f12",
    "summary": "Fermium is a synthetic element with symbol Fm and atomic number 100. It is a member of the actinide series. It is the heaviest element that can be formed by neutron bombardment of lighter elements, and hence the last element that can be prepared in macroscopic quantities, although pure fermium metal has not yet been prepared.",
    "xpos": 14,
    "ypos": 10
  },
  {
    "name": "Mendelevium",
    "symbol": "Md",
    "number": 101,
    "group": 3,
    "period": 7,
    "category": "actinide",
    "categoryName": "actinide",
    "meltingPoint": "826.85 \u00b0C",
    "boilingPoint": "Unknown",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f13",
    "summary": "Mendelevium is a synthetic element with chemical symbol Md (formerly Mv) and atomic number 101. A metallic radioactive transuranic element in the actinide series, it is the first element that currently cannot be produced in macroscopic quantities through neutron bombardment of lighter elements. It is the antepenultimate actinide and the ninth transuranic element.",
    "xpos": 15,
    "ypos": 10
  },
  {
    "name": "Nobelium",
    "symbol": "No",
    "number": 102,
    "group": 3,
    "period": 7,
    "category": "actinide",
    "categoryName": "actinide",
    "meltingPoint": "826.85 \u00b0C",
    "boilingPoint": "Unknown",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14",
    "summary": "Nobelium is a synthetic chemical element with symbol No and atomic number 102. It is named in honor of Alfred Nobel, the inventor of dynamite and benefactor of science. A radioactive metal, it is the tenth transuranic element and is the penultimate member of the actinide series.",
    "xpos": 16,
    "ypos": 10
  },
  {
    "name": "Lawrencium",
    "symbol": "Lr",
    "number": 103,
    "group": 3,
    "period": 7,
    "category": "actinide",
    "categoryName": "actinide",
    "meltingPoint": "1626.85 \u00b0C",
    "boilingPoint": "Unknown",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 7p1",
    "summary": "Lawrencium is a synthetic chemical element with chemical symbol Lr (formerly Lw) and atomic number 103. It is named in honor of Ernest Lawrence, inventor of the cyclotron, a device that was used to discover many artificial radioactive elements. A radioactive metal, lawrencium is the eleventh transuranic element and is also the final member of the actinide series.",
    "xpos": 17,
    "ypos": 10
  },
  {
    "name": "Rutherfordium",
    "symbol": "Rf",
    "number": 104,
    "group": 4,
    "period": 7,
    "category": "transition-metal",
    "categoryName": "transition metal",
    "meltingPoint": "2126.85 \u00b0C",
    "boilingPoint": "5526.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d2",
    "summary": "Rutherfordium is a chemical element with symbol Rf and atomic number 104, named in honor of physicist Ernest Rutherford. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and radioactive; the most stable known isotope, 267Rf, has a half-life of approximately 1.3 hours. In the periodic table of the elements, it is a d - block element and the second of the fourth - row transition elements.",
    "xpos": 4,
    "ypos": 7
  },
  {
    "name": "Dubnium",
    "symbol": "Db",
    "number": 105,
    "group": 5,
    "period": 7,
    "category": "transition-metal",
    "categoryName": "transition metal",
    "meltingPoint": "Unknown",
    "boilingPoint": "Unknown",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d3",
    "summary": "Dubnium is a chemical element with symbol Db and atomic number 105. It is named after the town of Dubna in Russia (north of Moscow), where it was first produced. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and radioactive; the most stable known isotope, dubnium-268, has a half-life of approximately 28 hours.",
    "xpos": 5,
    "ypos": 7
  },
  {
    "name": "Seaborgium",
    "symbol": "Sg",
    "number": 106,
    "group": 6,
    "period": 7,
    "category": "transition-metal",
    "categoryName": "transition metal",
    "meltingPoint": "Unknown",
    "boilingPoint": "Unknown",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d4",
    "summary": "Seaborgium is a synthetic element with symbol Sg and atomic number 106. Its most stable isotope 271Sg has a half-life of 1.9 minutes. A more recently discovered isotope 269Sg has a potentially slightly longer half-life (ca.",
    "xpos": 6,
    "ypos": 7
  },
  {
    "name": "Bohrium",
    "symbol": "Bh",
    "number": 107,
    "group": 7,
    "period": 7,
    "category": "transition-metal",
    "categoryName": "transition metal",
    "meltingPoint": "Unknown",
    "boilingPoint": "Unknown",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d5",
    "summary": "Bohrium is a chemical element with symbol Bh and atomic number 107. It is named after Danish physicist Niels Bohr. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and radioactive; the most stable known isotope, 270Bh, has a half-life of approximately 61 seconds.",
    "xpos": 7,
    "ypos": 7
  },
  {
    "name": "Hassium",
    "symbol": "Hs",
    "number": 108,
    "group": 8,
    "period": 7,
    "category": "transition-metal",
    "categoryName": "transition metal",
    "meltingPoint": "-147.15 \u00b0C",
    "boilingPoint": "Unknown",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d6",
    "summary": "Hassium is a chemical element with symbol Hs and atomic number 108, named after the German state of Hesse. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and radioactive; the most stable known isotope, 269Hs, has a half-life of approximately 9.7 seconds, although an unconfirmed metastable state, 277mHs, may have a longer half-life of about 130 seconds. More than 100 atoms of hassium have been synthesized to date.",
    "xpos": 8,
    "ypos": 7
  },
  {
    "name": "Meitnerium",
    "symbol": "Mt",
    "number": 109,
    "group": 9,
    "period": 7,
    "category": "unknown,-probably-transition-metal",
    "categoryName": "unknown, probably transition metal",
    "meltingPoint": "Unknown",
    "boilingPoint": "Unknown",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d7",
    "summary": "Meitnerium is a chemical element with symbol Mt and atomic number 109. It is an extremely radioactive synthetic element (an element not found in nature that can be created in a laboratory). The most stable known isotope, meitnerium-278, has a half-life of 7.6 seconds.",
    "xpos": 9,
    "ypos": 7
  },
  {
    "name": "Darmstadtium",
    "symbol": "Ds",
    "number": 110,
    "group": 10,
    "period": 7,
    "category": "unknown,-probably-transition-metal",
    "categoryName": "unknown, probably transition metal",
    "meltingPoint": "Unknown",
    "boilingPoint": "Unknown",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d8",
    "summary": "Darmstadtium is a chemical element with symbol Ds and atomic number 110. It is an extremely radioactive synthetic element. The most stable known isotope, darmstadtium-281, has a half-life of approximately 10 seconds.",
    "xpos": 10,
    "ypos": 7
  },
  {
    "name": "Roentgenium",
    "symbol": "Rg",
    "number": 111,
    "group": 11,
    "period": 7,
    "category": "unknown,-probably-transition-metal",
    "categoryName": "unknown, probably transition metal",
    "meltingPoint": "Unknown",
    "boilingPoint": "Unknown",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d9",
    "summary": "Roentgenium is a chemical element with symbol Rg and atomic number 111. It is an extremely radioactive synthetic element (an element that can be created in a laboratory but is not found in nature); the most stable known isotope, roentgenium-282, has a half-life of 2.1 minutes. Roentgenium was first created in 1994 by the GSI Helmholtz Centre for Heavy Ion Research near Darmstadt, Germany.",
    "xpos": 11,
    "ypos": 7
  },
  {
    "name": "Copernicium",
    "symbol": "Cn",
    "number": 112,
    "group": 12,
    "period": 7,
    "category": "transition-metal",
    "categoryName": "transition metal",
    "meltingPoint": "Unknown",
    "boilingPoint": "3296.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10",
    "summary": "Copernicium is a chemical element with symbol Cn and atomic number 112. It is an extremely radioactive synthetic element that can only be created in a laboratory. The most stable known isotope, copernicium-285, has a half-life of approximately 29 seconds, but it is possible that this copernicium isotope may have a nuclear isomer with a longer half-life, 8.9 min.",
    "xpos": 12,
    "ypos": 7
  },
  {
    "name": "Nihonium",
    "symbol": "Nh",
    "number": 113,
    "group": 13,
    "period": 7,
    "category": "unknown,-probably-transition-metal",
    "categoryName": "unknown, probably transition metal",
    "meltingPoint": "426.85 \u00b0C",
    "boilingPoint": "1156.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p1",
    "summary": "Nihonium is a chemical element with atomic number 113. It has a symbol Nh. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and is extremely radioactive; its most stable known isotope, nihonium-286, has a half-life of 20 seconds.",
    "xpos": 13,
    "ypos": 7
  },
  {
    "name": "Flerovium",
    "symbol": "Fl",
    "number": 114,
    "group": 14,
    "period": 7,
    "category": "post-transition",
    "categoryName": "post-transition metal",
    "meltingPoint": "66.85 \u00b0C",
    "boilingPoint": "146.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p2",
    "summary": "Flerovium is a superheavy artificial chemical element with symbol Fl and atomic number 114. It is an extremely radioactive synthetic element. The element is named after the Flerov Laboratory of Nuclear Reactions of the Joint Institute for Nuclear Research in Dubna, Russia, where the element was discovered in 1998.",
    "xpos": 14,
    "ypos": 7
  },
  {
    "name": "Moscovium",
    "symbol": "Mc",
    "number": 115,
    "group": 15,
    "period": 7,
    "category": "unknown,-probably-post-transition-metal",
    "categoryName": "unknown, probably post-transition metal",
    "meltingPoint": "396.85 \u00b0C",
    "boilingPoint": "1126.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p3",
    "summary": "Moscovium is the name of a synthetic superheavy element in the periodic table that has the symbol Mc and has the atomic number 115. It is an extremely radioactive element; its most stable known isotope, moscovium-289, has a half-life of only 220 milliseconds. It is also known as eka-bismuth or simply element 115.",
    "xpos": 15,
    "ypos": 7
  },
  {
    "name": "Livermorium",
    "symbol": "Lv",
    "number": 116,
    "group": 16,
    "period": 7,
    "category": "unknown,-probably-post-transition-metal",
    "categoryName": "unknown, probably post-transition metal",
    "meltingPoint": "435.85 \u00b0C",
    "boilingPoint": "811.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p4",
    "summary": "Livermorium is a synthetic superheavy element with symbol Lv and atomic number 116. It is an extremely radioactive element that has only been created in the laboratory and has not been observed in nature. The element is named after the Lawrence Livermore National Laboratory in the United States, which collaborated with the Joint Institute for Nuclear Research in Dubna, Russia to discover livermorium in 2000.",
    "xpos": 16,
    "ypos": 7
  },
  {
    "name": "Tennessine",
    "symbol": "Ts",
    "number": 117,
    "group": 17,
    "period": 7,
    "category": "unknown,-probably-metalloid",
    "categoryName": "unknown, probably metalloid",
    "meltingPoint": "449.85 \u00b0C",
    "boilingPoint": "609.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p5",
    "summary": "Tennessine is a superheavy artificial chemical element with an atomic number of 117 and a symbol of Ts. Also known as eka-astatine or element 117, it is the second-heaviest known element and penultimate element of the 7th period of the periodic table. As of 2016, fifteen tennessine atoms have been observed: six when it was first synthesized in 2010, seven in 2012, and two in 2014.",
    "xpos": 17,
    "ypos": 7
  },
  {
    "name": "Oganesson",
    "symbol": "Og",
    "number": 118,
    "group": 18,
    "period": 7,
    "category": "unknown,-predicted-to-be-noble-gas",
    "categoryName": "unknown, predicted to be noble gas",
    "meltingPoint": "Unknown",
    "boilingPoint": "76.85 \u00b0C",
    "configuration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p6",
    "summary": "Oganesson is IUPAC's name for the transactinide element with the atomic number 118 and element symbol Og. It is also known as eka-radon or element 118, and on the periodic table of the elements it is a p-block element and the last one of the 7th period. Oganesson is currently the only synthetic member of group 18.",
    "xpos": 18,
    "ypos": 7
  },
];

// DOM Elements
const tableContainer = document.getElementById('periodic-table');
const searchInput = document.getElementById('search-input');
const modal = document.getElementById('element-modal');
const closeBtn = document.getElementById('close-btn');
const modalDetails = document.getElementById('modal-details');

// Category Colors Map matching CSS variables
const colorMap = {
  'alkali-metal': 'var(--alkali-metal)',
  'alkaline-earth': 'var(--alkaline-earth)',
  'transition-metal': 'var(--transition-metal)',
  'post-transition': 'var(--post-transition)',
  'metalloid': 'var(--metalloid)',
  'reactive-nonmetal': 'var(--reactive-nonmetal)',
  'noble-gas': 'var(--noble-gas)',
  'lanthanide': 'var(--lanthanide)',
  'actinide': 'var(--actinide)',
  'unknown': 'var(--unknown)'
};

// Render Table
function renderTable(elements) {
  tableContainer.innerHTML = '';

  // Create elements
  elements.forEach(el => {
    const tile = document.createElement('div');
    tile.className = 'element';

    // Grid positioning
    tile.style.gridColumn = el.xpos;
    tile.style.gridRow = el.ypos;

    // CSS Custom Property for effects
    const catColor = colorMap[el.category] || colorMap['unknown'];
    tile.style.setProperty('--category-color', catColor);

    tile.innerHTML = `
            <span class="atomic-number">${el.number}</span>
            <span class="symbol">${el.symbol}</span>
            <span class="name">${el.name}</span>
        `;

    tile.addEventListener('click', () => {
      speakElement(el);
      showModal(el, catColor);
    });
    tableContainer.appendChild(tile);
  });
}

function showModal(el, color) {
  const content = document.getElementById('modal-content');
  content.style.setProperty('--category-color', color);

  modalDetails.innerHTML = `
        <div class="modal-header">
            <div class="modal-symbol-box" style="--category-color: ${color}">
                <span class="m-number">${el.number}</span>
                <span class="m-symbol">${el.symbol}</span>
            </div>
            <div class="modal-title">
                <h2 style="display: flex; align-items: center; gap: 10px;">
                    ${el.name}
                    <button class="speak-btn" id="modal-speak-btn" title="Pronounce Element">🔊</button>
                </h2>
                <p style="color: ${color}">${el.categoryName}</p>
            </div>
        </div>
        <div class="modal-info">
            <div class="info-item">
                <div class="info-label">Atomic Number</div>
                <div class="info-value">${el.number}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Group / Period</div>
                <div class="info-value">${el.group} / ${el.period}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Melting Point</div>
                <div class="info-value">${el.meltingPoint}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Boiling Point</div>
                <div class="info-value">${el.boilingPoint}</div>
            </div>
            <div class="info-item full-width">
                <div class="info-label">Electronic Configuration</div>
                <div class="info-value" style="font-family: monospace; letter-spacing: 0.5px; font-size: 1rem;">${el.configuration}</div>
            </div>
            <div class="info-item full-width">
                <div class="info-label">Overview & Uses</div>
                <div class="info-value summary-text">${el.summary}</div>
            </div>
        </div>
    `;

  modal.classList.remove('hidden');

  document.getElementById('modal-speak-btn').addEventListener('click', (e) => {
    e.stopPropagation(); // prevent modal close or double trigger
    speakElement(el);
  });
}

// Event Listeners for Modal
closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});

// Search Functionality
searchInput.addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase().trim();
  const elementTiles = document.querySelectorAll('.element');

  if (term.length > 0) {
    tableContainer.classList.add('searching');
    tableContainer.style.display = 'flex';
  } else {
    tableContainer.classList.remove('searching');
    tableContainer.style.display = 'grid'; // Reverts to CSS grid definition
  }

  elementTiles.forEach(tile => {
    const symbol = tile.querySelector('.symbol').textContent.toLowerCase();
    const name = tile.querySelector('.name').textContent.toLowerCase();

    if (symbol.includes(term) || name.includes(term)) {
      tile.style.display = 'flex';
    } else {
      tile.style.display = 'none';
    }
  });
});

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  // We only call renderTable if elementsData exists (which it does via the generated JSON)
  if (typeof elementsData !== 'undefined') {
    renderTable(elementsData);
  }

  // Initialize Voice Controls
  voiceSelect = document.getElementById('voice-select');
  rateSlider = document.getElementById('rate-slider');
  pitchSlider = document.getElementById('pitch-slider');
  muteBtn = document.getElementById('mute-btn');
  stopBtn = document.getElementById('stop-btn');

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  muteBtn.addEventListener('click', () => {
    isMuted = !isMuted;
    muteBtn.textContent = isMuted ? '🔇' : '🔊';
    if (isMuted) synthesis.cancel();
  });

  stopBtn.addEventListener('click', () => {
    synthesis.cancel();
  });
});

function populateVoiceList() {
  voices = synthesis.getVoices();
  voiceSelect.innerHTML = '';

  let defaultSet = false;
  voices.forEach((voice, i) => {
    const option = document.createElement('option');
    option.textContent = `${voice.name} (${voice.lang})`;
    option.value = i;
    if (voice.lang === 'en-US' && !defaultSet) {
      option.selected = true;
      defaultSet = true;
    }
    voiceSelect.appendChild(option);
  });
}

function speakElement(el) {
  if (isMuted) return;
  synthesis.cancel(); // Stop current speaking

  const textToSpeak = `${el.name}. Atomic number ${el.number}. Group ${el.group}, Period ${el.period}. Melting point ${el.meltingPoint}. Boiling point ${el.boilingPoint}.`;

  const utterance = new SpeechSynthesisUtterance(textToSpeak);
  const selectedVoice = voices[voiceSelect.value];
  if (selectedVoice) {
    utterance.voice = selectedVoice;
  }
  utterance.rate = rateSlider.value;
  utterance.pitch = pitchSlider.value;

  synthesis.speak(utterance);
}
