export const bodyParts = [
  // Front
  "Bumper fram",
  "Front spoiler",
  "Radiator",
  "Strålkastare vänster",
  "Strålkastare höger", 
  "Blinkers vänster",
  "Blinkers höger",
  "Dimljus vänster",
  "Dimljus höger",
  "Motorhuv",
  "Vindrutetorkare vänster",
  "Vindrutetorkare höger",
  "Vindruta",
  "Vindruta ram",
  
  // Right side
  "Sidokjolar",
  "Skärm fram",
  "Blinkers sida",
  "Backspegelhus",
  "Backspegelglas",
  "Framdörr",
  "Framdörrsfönster",
  "Framdörrshandtag",
  "A-stolpe",
  "B-stolpe",
  "C-stolpe",
  "D-stolpe",
  "Bakdörr",
  "Bakdörrsfönster",
  "Bakdörrshandtag",
  "Sidofönster bak",
  "Skärm bak",
  "Tanklock",

  // Rear end
  "Spoiler bak",
  "Stötfångare bak",
  "Bakpanel",
  "Baklucka",
  "Bakruta",
  "Bakrutefäste",
  "Diffusor",
  "Bakljus vänster",
  "Bakljus höger",
  "Dimljus bak vänster",
  "Dimljus bak höger",
  "Dragkrok",
  "Avgasrör",

  // Roof
  "Tak",
  "Cabriolet sufflett",
  "Taklucka",
  "Takräcke",
  "Panoramatak",
  "Antenn",
  "Hardtop",
  "Sufflett fönster",
  "Takräcke tvärstag"
];

export const damageTypes = [
  "Saknad del",
  "Stenskott",
  "Spricka",
  "Bucklor",
  "Repor",
  "Rost",
  "Färgskada",
  "Omlackering",
  "Ej originalutrustning",
  "Hagelskador under 10 bucklor",
  "Hagelskador över 10 bucklor",
  "Glapp/passform",
  "Foliering",
  "Blekt lack",
  "Läckage",
  "Referensvärde"
];

type DamageTypeMapping = {
  [key: string]: string[];
};

export const bodyPartToDamageTypes: DamageTypeMapping = {
  // Front
  "Bumper fram": ["Saknad del", "Spricka", "Bucklor", "Repor", "Färgskada", "Omlackering", "Ej originalutrustning", "Glapp/passform"],
  "Front spoiler": ["Saknad del", "Spricka", "Bucklor", "Repor", "Färgskada", "Omlackering", "Ej originalutrustning", "Glapp/passform"],
  "Radiator": ["Saknad del", "Läckage", "Ej originalutrustning"],
  "Strålkastare vänster": ["Saknad del", "Spricka", "Repor", "Ej originalutrustning", "Glapp/passform"],
  "Strålkastare höger": ["Saknad del", "Spricka", "Repor", "Ej originalutrustning", "Glapp/passform"],
  "Blinkers vänster": ["Saknad del", "Spricka", "Repor", "Ej originalutrustning", "Glapp/passform"],
  "Blinkers höger": ["Saknad del", "Spricka", "Repor", "Ej originalutrustning", "Glapp/passform"],
  "Dimljus vänster": ["Saknad del", "Spricka", "Repor", "Ej originalutrustning", "Glapp/passform"],
  "Dimljus höger": ["Saknad del", "Spricka", "Repor", "Ej originalutrustning", "Glapp/passform"],
  "Motorhuv": ["Saknad del", "Stenskott", "Spricka", "Bucklor", "Repor", "Rost", "Färgskada", "Omlackering", "Ej originalutrustning", "Hagelskador under 10 bucklor", "Hagelskador över 10 bucklor", "Glapp/passform", "Foliering", "Blekt lack"],
  "Vindrutetorkare vänster": ["Saknad del", "Ej originalutrustning", "Glapp/passform"],
  "Vindrutetorkare höger": ["Saknad del", "Ej originalutrustning", "Glapp/passform"],
  "Vindruta": ["Saknad del", "Stenskott", "Spricka", "Ej originalutrustning", "Glapp/passform"],
  "Vindruta ram": ["Rost", "Färgskada", "Omlackering", "Ej originalutrustning", "Glapp/passform"],

  // Right side
  "Sidokjolar": ["Saknad del", "Spricka", "Bucklor", "Repor", "Rost", "Färgskada", "Omlackering", "Ej originalutrustning", "Glapp/passform", "Foliering"],
  "Skärm fram": ["Saknad del", "Stenskott", "Spricka", "Bucklor", "Repor", "Rost", "Färgskada", "Omlackering", "Ej originalutrustning", "Hagelskador under 10 bucklor", "Hagelskador över 10 bucklor", "Glapp/passform", "Foliering", "Blekt lack"],
  "Blinkers sida": ["Saknad del", "Spricka", "Repor", "Ej originalutrustning", "Glapp/passform"],
  "Backspegelhus": ["Saknad del", "Spricka", "Bucklor", "Repor", "Färgskada", "Omlackering", "Ej originalutrustning", "Glapp/passform", "Foliering"],
  "Backspegelglas": ["Saknad del", "Spricka", "Repor", "Ej originalutrustning", "Glapp/passform"],
  "Framdörr": ["Saknad del", "Stenskott", "Spricka", "Bucklor", "Repor", "Rost", "Färgskada", "Omlackering", "Ej originalutrustning", "Hagelskador under 10 bucklor", "Hagelskador över 10 bucklor", "Glapp/passform", "Foliering", "Blekt lack"],
  "Framdörrsfönster": ["Saknad del", "Spricka", "Repor", "Ej originalutrustning", "Glapp/passform"],
  "Framdörrshandtag": ["Saknad del", "Repor", "Ej originalutrustning", "Glapp/passform"],
  "A-stolpe": ["Rost", "Färgskada", "Omlackering", "Ej originalutrustning", "Glapp/passform"],
  "B-stolpe": ["Rost", "Färgskada", "Omlackering", "Ej originalutrustning", "Glapp/passform"],
  "C-stolpe": ["Rost", "Färgskada", "Omlackering", "Ej originalutrustning", "Glapp/passform"],
  "D-stolpe": ["Rost", "Färgskada", "Omlackering", "Ej originalutrustning", "Glapp/passform"],
  "Bakdörr": ["Saknad del", "Stenskott", "Spricka", "Bucklor", "Repor", "Rost", "Färgskada", "Omlackering", "Ej originalutrustning", "Hagelskador under 10 bucklor", "Hagelskador över 10 bucklor", "Glapp/passform", "Foliering", "Blekt lack"],
  "Bakdörrsfönster": ["Saknad del", "Spricka", "Repor", "Ej originalutrustning", "Glapp/passform"],
  "Bakdörrshandtag": ["Saknad del", "Repor", "Ej originalutrustning", "Glapp/passform"],
  "Sidofönster bak": ["Saknad del", "Spricka", "Repor", "Ej originalutrustning", "Glapp/passform"],
  "Skärm bak": ["Saknad del", "Stenskott", "Spricka", "Bucklor", "Repor", "Rost", "Färgskada", "Omlackering", "Ej originalutrustning", "Hagelskador under 10 bucklor", "Hagelskador över 10 bucklor", "Glapp/passform", "Foliering", "Blekt lack"],
  "Tanklock": ["Saknad del", "Repor", "Rost", "Färgskada", "Omlackering", "Ej originalutrustning", "Glapp/passform"],

  // Rear end
  "Spoiler bak": ["Saknad del", "Spricka", "Bucklor", "Repor", "Färgskada", "Omlackering", "Ej originalutrustning", "Glapp/passform", "Foliering"],
  "Stötfångare bak": ["Saknad del", "Spricka", "Bucklor", "Repor", "Färgskada", "Omlackering", "Ej originalutrustning", "Glapp/passform", "Foliering"],
  "Bakpanel": ["Saknad del", "Spricka", "Bucklor", "Repor", "Rost", "Färgskada", "Omlackering", "Ej originalutrustning", "Glapp/passform", "Foliering"],
  "Baklucka": ["Saknad del", "Stenskott", "Spricka", "Bucklor", "Repor", "Rost", "Färgskada", "Omlackering", "Ej originalutrustning", "Hagelskador under 10 bucklor", "Hagelskador över 10 bucklor", "Glapp/passform", "Foliering", "Blekt lack"],
  "Bakruta": ["Saknad del", "Spricka", "Repor", "Ej originalutrustning", "Glapp/passform"],
  "Bakrutefäste": ["Saknad del", "Rost", "Färgskada", "Omlackering", "Ej originalutrustning", "Glapp/passform"],
  "Diffusor": ["Saknad del", "Spricka", "Bucklor", "Repor", "Färgskada", "Omlackering", "Ej originalutrustning", "Glapp/passform"],
  "Bakljus vänster": ["Saknad del", "Spricka", "Repor", "Ej originalutrustning", "Glapp/passform"],
  "Bakljus höger": ["Saknad del", "Spricka", "Repor", "Ej originalutrustning", "Glapp/passform"],
  "Dimljus bak vänster": ["Saknad del", "Spricka", "Repor", "Ej originalutrustning", "Glapp/passform"],
  "Dimljus bak höger": ["Saknad del", "Spricka", "Repor", "Ej originalutrustning", "Glapp/passform"],
  "Dragkrok": ["Saknad del", "Rost", "Ej originalutrustning", "Glapp/passform"],
  "Avgasrör": ["Saknad del", "Rost", "Ej originalutrustning", "Glapp/passform"],

  // Roof
  "Tak": ["Saknad del", "Stenskott", "Spricka", "Bucklor", "Repor", "Rost", "Färgskada", "Omlackering", "Ej originalutrustning", "Hagelskador under 10 bucklor", "Hagelskador över 10 bucklor", "Glapp/passform", "Foliering", "Blekt lack"],
  "Cabriolet sufflett": ["Saknad del", "Spricka", "Repor", "Läckage", "Ej originalutrustning", "Glapp/passform"],
  "Taklucka": ["Saknad del", "Spricka", "Repor", "Läckage", "Ej originalutrustning", "Glapp/passform"],
  "Takräcke": ["Saknad del", "Rost", "Ej originalutrustning", "Glapp/passform"],
  "Panoramatak": ["Saknad del", "Spricka", "Repor", "Läckage", "Ej originalutrustning", "Glapp/passform"],
  "Antenn": ["Saknad del", "Ej originalutrustning", "Glapp/passform"],
  "Hardtop": ["Saknad del", "Spricka", "Bucklor", "Repor", "Rost", "Färgskada", "Omlackering", "Ej originalutrustning", "Glapp/passform", "Foliering"],
  "Sufflett fönster": ["Saknad del", "Spricka", "Repor", "Ej originalutrustning", "Glapp/passform"],
  "Takräcke tvärstag": ["Saknad del", "Rost", "Ej originalutrustning", "Glapp/passform"]
};
