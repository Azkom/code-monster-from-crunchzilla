// Copyright 2012 Geeky Ventures

// Each lesson has a tutor message, the code given at the start of the
// lesson, some hiddenCode that is not shown but defines some
// convenience functions and globals, a lessonSection that is
// displayed to give a sense of where you are and progress, which
// tutorImage to display, and a check that (when it exists) will
// display a little congratulatory "You got it!" the first time that
// regex appears in the student's code.
// code, if missing, will not change the code in the box.
// hiddenCode, lessonSection, and tutorImage all will, if missing, use
// the hiddenCode from the last lesson where it was defined.
// youGotItCheck, if missing, will just not display the congrats message.
// Of these, the message is always there and the code often there.  Others
// are usually missing for most lessons.

var lessons =
	[

		// Draw box
		{ message: "Én a Code Monster vagyok! (kattints a nevemre, hogy megnézzed, mi következik!)",
		  code: "c.fillRect(20, 20, 50, 75);\n",
		  lessonSection: "Kezdjük el!",
		  tutorImage: 1,
		  hiddenCode: "var c = document.getElementById('pane').getContext('2d');\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n"
		  // Hide the access to the canvas, which is ugly, giving instead c
		  // rgba() is a string, but students sometimes want to use it as
		  // a function.  Let that quietly succeed, not worth confusing them
		  // on that.
		},
		{ message: "Ezzel megkezded a programozás tanulást! (kattints ismét!)"
		},
		{ message: "Alattam, a baloldalon, van a Javascript kód, a jobb oldalon, az, amit a kód csinál."
		},
		{ message: "A fillRect() utasítást arra használhatod, hogy rajzolj egy dobozt. Látod  az 50-es számot? Ki tudod cserélni 150-re? ",
		  code: "c.fillRect(20, 20, 50, 75);\n",
		  youGotItCheck: "150",
		},
		{ message: "Ez tette a dobozt szélesebbé. Mit gondolsz, mit csinál a többi szám? Próbáld megváltoztatni őket!",
		  lessonSection: "Paraméterek és Rajzolás",
		},
		{ message: "Megfejtetted?  A számok jelentése sorban: milyen messze rajzolja a bal oldalhoz (1.szám) és a tetejéhez (2.szám) képest a dobozt, milyen széles (3.szám) és milyen magas (4.szám) dobozt rajzol."
		},
		{ message: "Próbáld kicserélni az összes számot!  Játssz vele!",
		},
		{ message: "Két doboz. Ki tudod cserélni a számokat, hogy nagyobbá tedd őket?",
		  code: "c.fillRect(20, 20, 50, 75);\nc.fillRect(100, 100, 60, 80);\n"
		},
		{ message: "Ki tudod cserélni a számokat, hogy mozgasd körülötte?"
		},
		{ message: "Ki tudod cserélni a számokat úgy, hogy az egyik fedje a másikat?"
		},

		// Variables
		{ message: "Monster a négyzet dobozokat szereti.",
		  code: "c.fillRect(20, 20, 80, 80);\n"
		},
		{ message: "Egy négyzet szélessége és magassága azonos. Ennek a doboznak azonos a magassága és a szélessége, mindkettő 80.",
		  code: "c.fillRect(20, 20, 80, 80);\n"
		},
		{ message: "Hey, nézd, ez a kód ugyanazt csinálja!",
		  code: "var size = 80;\nc.fillRect(20, 20, size, size);\n",
		  lessonSection: "Változók",
		  // tutorImage: 2,
		},
		{ message: "Miért csinálja ez a kód ugyanazt?  Bármilyen ötlet?",
		},
		{ message: "A var változót(variable) jelent. Amit csináltunk: létrehozunk egy változót, elnevezzük  <span class=tutor-code>size</span>-nak, egyenlővé tesszük 80-nal, és ezután a <span class=tutor-code>size</span> változót ott használhatjuk , ahol korábban a 80-at használtuk. Tudod, mi miért akarhatjuk ezt?",
		  code: "var size = 80;\nc.fillRect(20, 20, size, size);\n"
		},
		{ message: "Mi történik ha a 80-at 220-ra cseréljük?"
		},
		{ message: "És nézd!  Szélesebb és magasabb a doboz, mindkettő ugyanabban az időben!"
		},
		{ message: "Meg tudod változtatni a másik két számot úgy, hogy a dobozt  köré mozgasd?"
		},
		{ message: "Tudsz csinálni egy nagyon kicsi dobozt?"
		},
		{ message: "Mi történik, ha a <span class=tutor-code>size</span>-t 0-val teszed egyenlővé? Vagy valamilyen valóban nagy számmal, pl. 5000-el?"
		},

		// More boxes
		{ message: "Monster két dobozt akar.",
		  code: "var size = 80;\nc.fillRect(20, 20, size, size);\nc.fillRect(90, 90, size, size);\n"
		},
		{ message: "Mindkét doboz azonos méretű.  Ez egy ügyes trükk."
		},
		{ message: "Megváltoztathatod  a <span class=tutor-code>size</span> értékét.  Ez megnöveli vagy összezsugorítja egyszerre mindkét dobozt! Próbáld az értéket megváltoztatni 80-ról 180-ra!"
		},
		{ message: "Tudod mozgatni mindegyik dobozt körbe néhány szám megváltoztatásával?"
		},
		{ message: "Monster több dobozt akar.  Három dobozt!",
		  code: "var size = 80;\nc.fillRect(20, 20, size, size);\nc.fillRect(80, 80, size, size);\nc.fillRect(140, 140, size, size);\n"
		},
		{ message: "Nos mi történik, amikor megváltoztatod a <span class=tutor-code>size</span> értékét?",
		},
		{ message: "Több doboz!  Próbáld ki: változtasd meg a doboz méretét!",
		  code: "var size = 80;\nc.fillRect(20, 20, size, size);\nc.fillRect(60, 60, size, size);\nc.fillRect(100, 100, size, size);\nc.fillRect(140, 140, size, size);\nc.fillRect(180, 180, size, size);\n"
		},

		// Two colored boxes
		{ message: "Ó!  Szines!  Csodás!",
		  code: "var size = 80;\n\nc.fillStyle = \"blue\";\nc.fillRect(20, 20, size, size);\n",
		  lessonSection: "Szín",
		},
		{ message: "Még több szín.  Próbáld ki  a \"green\" vagy  a \"purple\" vagy  a \"gold\" színeket. A szövegben az angol neveket kell szerepeltetni. További információt itt találhatsz a lehetséges  további nevekről: \"https://www.w3schools.com/colors/colors_names.asp\" ."
		},
		{ message: "Mit szólsz két pink dobozhoz?",
		  code: "var size = 80;\n\nc.fillStyle =\"pink\";\nc.fillRect(20, 20, size, size);\nc.fillRect(90, 90, size, size);\n"
		},
		{ message: "Egy pink és egy silver doboz.",
		  code: "var size = 80;\n\nc.fillStyle =\"pink\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"silver\";\nc.fillRect(90, 90, size, size);\n"
		},
		{ message: "Meg tudod változtatni a silver dobozt inkább gold dobozzá?  És a pink-et  blue-vá?",
		  code: "var size = 80;\n\nc.fillStyle =\"pink\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"silver\";\nc.fillRect(90, 90, size, size);\n"
		},
		{ message: "Itt van két doboz, amelyek ismét azonos színűek. Nos, meg tudod csinálni, hogy a két doboz ismét különböző színű legyen?",
		  code: "var size = 80;\n\nc.fillStyle =\"green\";\nc.fillRect(20, 20, size, size);\n\nc.fillRect(90, 90, size, size);\n"
		},
		{ message: "Itt van egy változat.  Én a pirosat (red) és a kéket(blue) szeretem.",
		  code: "var size = 80;\n\nc.fillStyle =\"red\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"blue\";\nc.fillRect(80, 80, size, size);\n"
		},
		{ message: "Piros (red), zöld (green), és kék (blue).  Ez csodás.",
		  code: "var size = 80;\n\nc.fillStyle =\"red\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"lime\";\nc.fillRect(80, 80, size, size);\nc.fillStyle =\"blue\";\nc.fillRect(140, 140, size, size);\n"
		},
		{ message: "Wha... Ez ugyanazt csinálja!  Mi lehet az rgb()?",
		  code: "var size = 80;\n\nc.fillStyle =\"rgb(255, 0, 0)\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"rgb(0, 255, 0)\";\nc.fillRect(80, 80, size, size);\nc.fillStyle =\"rgb(0, 0, 255)\";\nc.fillRect(140, 140, size, size);\n"
		},
		{ message: "Próbáld ki: változtasd meg bármelyik nullát pl 200-ra vagy egy másik számra. És próbáld ki: változtasd meg bármelyik 255-t 0-ra. Mi látszik, mit csinálnak a számok?",
		  code: "var size = 80;\n\nc.fillStyle =\"rgb(255, 0, 0)\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"rgb(0, 255, 0)\";\nc.fillRect(80, 80, size, size);\nc.fillStyle =\"rgb(0, 0, 255)\";\nc.fillRect(140, 140, size, size);\n"
		},
		{ message: "Meg tudod fogalmazni az rgb() jelentését?"
		},
		{ message: "Az rgb()  a pirosra (red), zöldre (green), és a kékre (blue) utal.  A számok 0 és 255 közöttiek. Így, az <span class=tutor-code>rgb(0, 255, 0)</span> azt jelenti, hogy nincs piros (red) vagy kék(blue), de minden zöld (green)!"
		},
		{ message: "Számos színt tudsz így  előállítani, ha kicserélsz néhány számot.  Próbáld ki!"
		},
		{ message: "Játsszunk egy kicsit. Ugyanarra a színre tudod állítani mindkét doboz színét?",
		  code: "var size = 80;\n\nc.fillStyle =\"rgb(0, 0, 0)\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"red\";\nc.fillRect(80, 80, size, size);\n",
		  lessonSection: "Teszt: Szín",
		},
		{ message: "Kékre (blue) tudod állítani mindkettőt?",
		  code: "var size = 80;\n\nc.fillStyle =\"rgb(0, 0, 0)\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"blue\";\nc.fillRect(80, 80, size, size);\n"
		},
		{ message: "Ki tudod találni, milyen  rgb() számokat kell beállítani, hogy mindkét doboz sárga (yellow) legyen?",
		  code: "var size = 80;\n\nc.fillStyle =\"rgb(255, 0, 0)\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"yellow\";\nc.fillRect(80, 80, size, size);\n"
		},
		{ message: "Ki tudod találni, milyen  rgb() számokat kell beállítani, hogy mindkét doboz kékeszöld (teal) legyen?",
		  code: "var size = 80;\n\nc.fillStyle =\"rgb(0, 0, 128)\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"teal\";\nc.fillRect(80, 80, size, size);\n"
		},
		{ message: "Ok, ez tényleg nehéz. Meg tudod csinálni, hogy mindkettő pontosan egyezzen?  Ki tudod találni, milyen  rgb() számolat kell beírni, hogy mindkettő crimson legyen? Ne aggódj, ha nem találod el pontosan, csak látszódjon, milyen közel jutottál!",
		  code: "var size = 80;\n\nc.fillStyle =\"rgb(0, 0, 0)\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"crimson\";\nc.fillRect(80, 80, size, size);\n"
		},
		{ message: "Úgy van.  Huh, ez tényleg egy nehéz feladat!  Milyen közel jutottál?",
		  code: "var size = 80;\n\nc.fillStyle =\"rgb(220, 20, 60)\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"crimson\";\nc.fillRect(80, 80, size, size);\n"
		},
		{ message: "Ha szeretnél egy másikat kipróbálni, akkor használd az \"olive\", a \"purple\",  az \"aqua\", vagy  bármilyen másik színt,amit kigondoltál az első dobozra, majd próbálkozz, hogy kitaláld az rgb számokat, amik megfelelnek ennek!",
		},


		// rgba
		{ message: "Az rgba()  egy érdekes rgb() változat. Nézzük mit csinál?  Ez megad egy számot a végén, ami 0.5.  Mit csinál ez az utolsó szám? Próbáld meg 0.5-ről 0.1-re változtni.  Vagy  0.8-ra.  Mit csinál ez?",
		  code: "var size = 80;\n\nc.fillStyle =\"rgba(255, 0, 0, 0.5)\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"rgba(0, 0, 255, 0.5)\";\nc.fillRect(80, 80, size, size);\n",
		  lessonSection: "Szín és Átlátszóság",
		},
		{ message: "Az <span class=\"tutor-code\">a</span> az rgba-ban az <span class=\"tutor-code\">alpha</span>-t (mennyire átlátszó a doboz) jelenti  a 0.0-tól (nem látszik,\" invisible\")  1.0-ig (tömör \"solid\") adhatunk neki értéket."
		},
		{ message: "Az rgba()-val nagyon király dolgokat csinálhatsz.  Nézd ezt!  Próbáld megváltoztatni a 0.5-s alpha értékét 0.2-re vagy 0.8-ra!",
		  code: "var size = 80;\n\nc.fillStyle =\"rgba(255, 0, 0, 0.5)\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"rgba(0, 255, 0, 0.5)\";\nc.fillRect(80, 80, size, size);\nc.fillStyle =\"rgba(0, 0, 255, 0.5)\";\nc.fillRect(140, 140, size, size);\n"
		},
		{ message: "Próbáld megváltoztatni a size értékét 80-ról  180-ra!  Érdekes effekteket kaphatsz, ha a  színek átlapolódnak. Játssz ezzel!",
	  },
    
		// Operators and assignment
		{ message: "Térjünk vissza a változókhoz! A Monster nem szereti ismételni a számokat. Helyettesíteni tudod mindkét 20-as számot az <span class=tutor-code>offset</span>-tel?",
		  code: "var offset = 30;\nvar size = 80;\nc.fillStyle =\"lime\";\nc.fillRect(20, 20, size, size);\nc.fillRect(90, 90, size, size);\n",
		  lessonSection: "Műveleti jelek és hozzárendelés",
		  // tutorImage: 3,
		},
		{ message: "Most próbáld meg kicserélni az <span class=tutor-code>offset</span> 30-as értékét 50-re.  Nézd meg hogyan tudod az első dobozt mozgatni?",
		  code: "var offset = 30;\nvar size = 80;\nc.fillStyle =\"lime\";\nc.fillRect(offset, offset, size, size);\nc.fillRect(90, 90, size, size);\n"
		},
		{ message: "A változóknak új értéket lehet adni. Nézd meg, hogy a program az offsetet hogyan állítja be 100-ra, mielőtt a program ezt haszálja a második dobozra?",
		  code: "var offset = 30;\nvar size = 80;\nc.fillStyle =\"lime\";\nc.fillRect(offset, offset, size, size);\noffset = 100;\nc.fillRect(offset, offset, size, size);\n"
		},
		{ message: "Próbáld mozgatni a második dobozt!  Változtasd meg a 100-at 50-re vagy 150-re.",
		},
		{ message: "Próbáld mozgatni az első dobozt is!",
		},
		{ message: "Egymás tetejére tudod tenni a dobozokat úgy, hogy éppen egy doboznak nézzenek ki?"
		},
		{ message: "A változókhoz hozzáadhatsz számokat. Látod ez mit csinál? Ez megváltoztatja az offset értékét 50-nel <span class=tutor-code>offset = offset + 50</span>.",
		  code: "var offset = 30;\nvar size = 80;\nc.fillStyle =\"lime\";\nc.fillRect(offset, offset, size, size);\noffset = offset + 50;\nc.fillRect(offset, offset, size, size);\n"
		},
		{ message: "Az <span class=tutor-code>offset = offset + 50</span> kifejezés azt jelenti, hogy veszi az <span class=tutor-code>offset</span> értékét, hozzáad 50-et, majd ezt az értéket adja az offsetnek.  Más szavakkal , tedd 50-nel nagyobbá az offsetet, mint korábban volt."
		},
		{ message: "Mi újság, kipróbáltad? Helyettesíteni tudod mindkét 90-es számot változóra, amelyet a második doboz (bal \"left\", jobb \"right\") értékeire használ a program? Tipp: Vagy létrehozol egy új változót, vagy új értéket adsz az offset változónak, és utána azt használod.",
		  code: "var offset = 30;\nvar size = 80;\nc.fillStyle =\"lime\";\nc.fillRect(offset, offset, size, size);\n\nc.fillRect(90, 90, size, size);\n",
		  lessonSection: "Teszt: Változók és műveleti jelek",
		},
		{ message: "Monsters szereti az összeadást.  Jó, összeadok.  Ok, most próbáld megváltoztatni az <span class=tutor-code>offset</span> értékét 30-ról 80-ra.  Látod, mi történik?",
		  code: "var offset = 30;\nvar size = 80;\nc.fillStyle =\"lime\";\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillRect(offset, offset, size, size);\n"
		},
		{ message: "Ó, mindkét dobozt együtt tudod mozgatni! Változtasd meg az offset-et és mozgasd őket körbe!",
		},
		{ message: "Ez ugyanannak tűnik, de van egy kis különbség.  Mi az, amit a <span class=tutor-code>*</span> csinál?  Mi történik, ha megváltoztatod a <span class=tutor-code>* 3</span>-at  <span class=tutor-code>* 2</span>-re?  Próbáld megváltoztatni ezt <span class=tutor-code>* 1</span>-re. Próbáld megváltoztatni az offset-et is.  Kitaláltad, hogy a <span class=tutor-code>*</span> mit jelent?",
		  code: "var offset = 30;\nvar size = 80;\nc.fillStyle =\"lime\";\nc.fillRect(offset, offset, size, size);\noffset = offset * 3;\nc.fillRect(offset, offset, size, size);\n",
		  lessonSection: "További műveleti jelek",
		},
		{ message: "A <span class=tutor-code>*</span> jel a szorzást jelenti.  <span class=tutor-code>2 * 2</span> eredménye 4.  Így, az  <span class=tutor-code>offset = offset * 3</span> azt jelenti, hogy tedd az offset-et háromszor nagyobbá."
		},
		{ message: "<span class=tutor-code>*</span> jel jelenti a szorzást, <span class=tutor-code>/</span> jel jelenti az osztást. Úgy, ahogy mi lent értéket adunk az egy bonyolult módja annak, hogy azt  mondjuk a size értéke legyen  100.  Ugye?",
		  code: "var size = 20 * 6 / 2 + 50 - 10;\nvar offset = 30;\nc.fillStyle =\"lime\";\nc.fillRect(offset, offset, size, size);\noffset = offset * 3;\nc.fillRect(offset, offset, size, size);\n"
		},
  
		// Conditionals and comparisons
		{ message: "Mi összehasonlíthatunk számokat. Nézd ezt a kódot?  Akkor rajzolunk egy másik dobozt, amikor a <span class=tutor-code>size</span> értéke kisebb, mint 80.",
		  code: "var size = 50;\n\nc.fillRect(20, 20, size, size);\nif (size < 80) {\n  c.fillRect(100, 100, size, size);\n}\n",
		  lessonSection: "Ha(if) és összehasonlítás",
		},
		{ message: "Próbáld a size értékét 150-re változtatni.  Látod mi történik? Próbáld a size értékét 79-re változtatni.  Majd változtasd 80-ra.",
		},

		// Three colored boxes
		{ message: "Ok, lássuk mit tudunk!  Itt van két doboz.  Hozzá tudsz adni egy harmadik dobozt (offset értéke legyen további 60 a második doboztól)?",
		  code: "var size = 80;\nvar offset = 20;\n\nc.fillStyle =\"lime\";\n\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillRect(offset, offset, size, size);\n",
		  lessonSection: "Teszt: Változók és szín",
		},
		{ message: "Ez itt egy módja annak, hogy ezt megcsináld. Próbáld megváltoztatni a size vagy az offset értékét!",
		  code: "var size = 80;\nvar offset = 20;\n\nc.fillStyle =\"lime\";\n\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillRect(offset, offset, size, size);\n"
		},
		{ message: "Emlékszel az rgba()-ra?   A Monster szereti.  Meg tudod csinálni nekem, hogy a három doboz színe különböző legyen?",
		  code: "var size = 80;\nvar offset = 20;\n\nc.fillStyle =\"rgba(0, 0, 255, 0.5)\";\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillStyle =\"rgba(0, 0, 255, 0.5)\";\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillStyle =\"rgba(0, 0, 255, 0.5)\";\nc.fillRect(offset, offset, size, size);\n"
		},
		{ message: "Itt van egy megoldás.  Ó!  Csodás!  Próbáld megváltoztatni a size, offset értékét, vagy a red, blue, és green számokat!",
		  code: "var size = 80;\nvar offset = 20;\n\nc.fillStyle =\"rgba(0, 0, 255, 0.5)\";\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillStyle =\"rgba(0, 255, 0, 0.5)\";\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillStyle =\"rgba(255, 0, 0, 0.5)\";\nc.fillRect(offset, offset, size, size);\n"
		},

		// For loop to avoid repeated code
		{ message: "Monster nem szereti a kódot egynél többször leírni.  Sokan itt szeretik ugyanazt a kódot leírni több, mint egyszer, Én nem szeretem.",
		  code: "var size = 80;\nvar offset = 20;\n\nc.fillStyle =\"blue\";\n\nc.fillRect(offset, offset, size, size);\noffset = offset + 40;\nc.fillRect(offset, offset, size, size);\noffset = offset + 40;\nc.fillRect(offset, offset, size, size);\n",
		  lessonSection: "For ciklusok",
		  // tutorImage: 4,
		},
		{ message: "Ez a  <span class=tutor-code>for</span> ciklus. Ez megismétli a kódot anélkül, hogy leírnánk több, mint egyszer.  Én ezt szeretem.  Próbáld megváltoztatni a 3-t 5-re!",
		  code: "var size = 80;\nvar offset = 20;\n\nc.fillStyle =\"blue\";\nfor (var i = 0; i < 3; i = i + 1) {\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 40;\n}\n",
		},
		{ message: "A For ciklus három részből áll, ahol elkezdődik (<span class=tutor-code>i = 0</span>), amikor tovább megy (<span class=tutor-code>i < 5</span>), és amennyivel változik minden egyes ciklusban  (<span class=tutor-code>i = i + 1</span>). Tudnál 10 dobozt csinálni?",
		  code: "var size = 80;\nvar offset = 20;\n\nc.fillStyle =\"blue\";\nfor (var i = 0; i < 5; i = i + 1) {\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 40;\n}\n",
		},
		{ message: "Ah!  Ők nem illeszkednek.  Hogyan tudnád megcsinálni, hogy a 10 doboz illeszkedjen?",
		  code: "var size = 80;\nvar offset = 20;\n\nc.fillStyle =\"blue\";\nfor (var i = 0; i < 10; i = i + 1) {\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 40;\n}\n",
		},
		{ message: "Ez itt egy megoldás!",
		  code: "var size = 80;\nvar offset = 20;\n\nc.fillStyle =\"blue\";\nfor (var i = 0; i < 10; i = i + 1) {\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 10;\n}\n",
		},
		{ message: "Kisebb dobozok mindig illeszkednek.  Próbálj meg játszani a size, az offset értékekkel és cseréljük őket 10-re!",
		  code: "var size = 20;\nvar offset = 20;\n\nc.fillStyle =\"blue\";\nfor (var i = 0; i < 10; i = i + 1) {\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 10;\n}\n",
		},

		// Lots of colored boxes
		{ message: "Emlékszel az rgba()-ra? Mi az amit ez csinál?  Játssz vele!",
		  code: "var size = 50;\nvar offset = 20;\n\nfor (var i = 0; i < 10; i = i + 1) {\n  var b = i * 25;\n  var rgba = \"rgba(0, 0, \" + b + \", 0.5)\";\n  c.fillStyle = rgba;\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 20;\n}\n",
		  lessonSection: "Egy kis móka a For ciklusokkal",
		},
		{ message: "Komplikált!  Ez azt jelenti, hogy  használj 0-t halvány kéket az első dobozra, 25-öt a másodikra, majd  50-et, 75-öt, 100-at..."
		},
		{ message: "Itt egy másik példa, ez az alpha-t változtatja!  Neat-o!",
		  code: "var size = 50;\nvar offset = 20;\n\nfor (var i = 0.1; i < 0.5; i = i + 0.05) {\n  var rgba = \"rgba(0, 0, 255, \" + i + \")\";\n  c.fillStyle = rgba;\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 20;\n}\n"
		},

		// Quiz
		{ message: "Meg tudod nekem mutani, hogy mit tanultál?  Rajzolj nekem egy négyzetet! Tipp: Emlékezz <span class=tutor-code>c.fillRect(<i> bal(left), tető(top), szélesség(width), magasság(height)</i>);</span>-re, hogy egy dobozt rajzolj.",
		  code: "",
		  lessonSection: "Teszt: Írj egy kódot saját magad!",
		},
		{ message: "Hozzá tudsz adni még egy négyzetet?"
		},
		{ message: "Most be tudod a második négyzetet pirosra szinezni?<br>(Tipp: <span class=tutor-code>c.fillStyle = \"blue\";</span> parancs a fillRect() parancs előtt kékre szinezi a téglalapot)"
		},
		{ message: "Nagyszerű! Valami hasonlót kaptál, mint ez? Ha nem, próbálj játszani a számokkal egy kicsit, hogy lásd, ez hogyan működik!",
		  code: "c.fillRect(10, 10, 20, 20);\nc.fillStyle = \"red\";\nc.fillRect(50, 50, 100, 100);\n"
		},
		
		// Draw line
		{ message: "Monster vonalat rajzol. Mit gondolsz a  moveTo() csinálja? a lineTo()?  Próbáld megváltoztatni a 20-at 50-re.",
		  code: "c.beginPath();\nc.moveTo(30, 20);\nc.lineTo(120, 40);\nc.stroke();\n",
		  lessonSection: "Vonalak",
		},
		{ message: "Próbáld megváltoztatni a további számokat is.  Kitalálod, mit csinál a  moveTo() és a lineTo()?"
		},
		{ message: "A moveTo(left[bal], top[tető]) a ceruzát egy helyre mozgatja rajzolás nélkül. A lineTo(left[bal], top[tető])  egy vonalat rajzol onnan, ahol a ceruza van egy helyig.",
		},
		{ message: "Íme, ez történik akkor, ha  egy második lineTo()-t csinálunk.  A második vonal onnan indul, ahol az első vonal befejeződött.",
		  code: "c.beginPath();\nc.moveTo(30, 20);\nc.lineTo(120, 40);\nc.lineTo(120, 150);\nc.stroke();\n"
		},
		{ message: "Mi  így rajzolunk egy utat, egy egymással összekötött  vonalak útvonalát.  Az utat beginPath()-zal kezdjük, és mindent stroke()-kal rajzolunk."
		},
		{ message: "Ha mi egy moveTo()-t helyezünk a második lineTo() elé,  akkor a ceruzát mozgatjuk rajzolás nélkül.  Ugye?",
		  code: "c.beginPath();\nc.moveTo(30, 20);\nc.lineTo(120, 40);\nc.moveTo(120, 60);\nc.lineTo(120, 150);\nc.stroke();\n"
		},
		{ message: "Próbáld ki ezt!  Adj hozzá egy további sort, helyezz el egy második  c.lineTo() az első után, amely az (50,115)-höz megy.",
		  code: "c.beginPath();\nc.moveTo(100, 30);\nc.lineTo(150, 115);\n\nc.stroke();\n"
		},
		{ message: "Megcsináltad azt, amit elvártál?  Próbálj meg egy harmadik sort hozzáadni!",
		  code: "c.beginPath();\nc.moveTo(100, 30);\nc.lineTo(150, 115);\nc.lineTo(50, 115);\n\nc.stroke();\n"
		},
		{ message: "Tudsz egy háromszöget csinálni?",
		},
		{ message: "Íme, itt egy módszer, egy háromszög!",
		  code: "c.beginPath();\nc.moveTo(100, 30);\nc.lineTo(150, 115);\nc.lineTo(50, 115);\nc.lineTo(100, 30);\nc.stroke();\n"
		},
		{ message: "Ok, egy orange háromszög.  Jobban szereted a blue-t.  Meg tudod csinálni blue-ra?",
		  code: "c.beginPath();\nc.strokeStyle = \"orange\";\nc.moveTo(100, 30);\nc.lineTo(150, 115);\nc.lineTo(50, 115);\nc.lineTo(100, 30);\nc.stroke();\n"
		},
		{ message: "Megpróbáltam két háromszöget csinálni, de elfelejtettem a moveTo()-t.  Látod mi történt?",
		  code: "c.beginPath();\nc.moveTo(100, 30);\nc.lineTo(150, 115);\nc.lineTo(50, 115);\nc.lineTo(100, 30);\n\nc.lineTo(250, 215);\nc.lineTo(150, 215);\nc.lineTo(200, 130);\nc.stroke();\n"
		},
		{ message: "Ez így nem jó.  Hozzá tudsz adni egy  <span class=tutor-code>c.moveTo(200, 130);</span> utasítást, hogy két különálló háromszöget csináljunk?",
		},
		{ message: "Egy csomó háromszöget szeretnék. A <span class=tutor-code>for</span>-t kell használnunk!  Ez a for ciklus két háromszöget rajzol.",
		  code: "c.beginPath();\nfor (var i = 30; i <= 60; i = i + 30) {\n  c.moveTo(70 + i, i);\n  c.lineTo(120 + i, 85 + i);\n  c.lineTo(20 + i, 85 + i);\n  c.lineTo(70 + i, i);\n}\nc.stroke();\n",
		  lessonSection: "Vonalak és ciklusok",
		  // tutorImage: 5,
		},
		{ message: "Ez a for ciklus 30-nál kezdődik és mindes egyes alkalommal 30-cal növekszik.  Így , addig, amíg nem mondjuk meg, hogy álljon meg, ez elszámol 30, 60, 90, 120...  Jelenleg, a for ciklust úgy állították be, hogy 60-nál álljon meg."
		},
		{ message: "Nos, meg tudod csinálni ezt a  for ciklust úgy, hogy három háromszöget rajzoljon? Ötöt?",
		},
		{ message: "Tudsz még több háromszöget csinálni a for ciklus megváltoztatásával, hogy hogyan menjen tovább?  Mi van ha  10-zel számol, de  számolhat 30-cal, 40-el, 50-el , 60-al... Ki tudod próbálni ezt?",
		},
		{ message: "Aieee!  Nézd ezt!  Negyven zöld(green) háromszög!",
		  code: "c.strokeStyle = \"green\";\nc.beginPath();\nfor (var i = 10; i <= 210; i = i + 5) {\n  c.moveTo(70 + i, i);\n  c.lineTo(120 + i, 85 + i);\n  c.lineTo(20 + i, 85 + i);\n  c.lineTo(70 + i, i);\n}\nc.stroke();\n"
		},
		{ message: "Játssz ezzel tovább!  Meg tudod változtatni a színt?  Tudsz még több háromszöget csinálni?",
		},

		// Draw a box using lines
		{ message: "Két doboz, az egyik a strokeRect()-et használja, a másik négy vonalat használ.",
		  code: "var size = 100;\n// Első doboz\nc.strokeRect(30, 30, size, size);\n// Második doboz\nc.beginPath();\nc.moveTo(80, 80);\nc.lineTo(80 + size, 80);\nc.lineTo(80 + size, 80 + size);\nc.lineTo(80, 80 + size);\nc.lineTo(80, 80);\nc.stroke();\n",
		  lessonSection: "Kódolj könnyen",
		},
		{ message: "Egy biztos, a vonalakkal rajzolás több kódot igényel. Hozzá tudsz adni egy harmadik dobozt?",
		  code: "var size = 100;\n// Első doboz\nc.strokeRect(30, 30, size, size);\n// Második doboz\nc.beginPath();\nc.moveTo(80, 80);\nc.lineTo(80 + size, 80);\nc.lineTo(80 + size, 80 + size);\nc.lineTo(80, 80 + size);\nc.lineTo(80, 80);\nc.stroke();\n// Harmadik doboz?\n"
		},
		{ message: " A strokeRect() könnyebb, nemde?  Íme három doboz, amely mindegyike strokeRect()-t használ. Hozzá tudsz adni egy negyediket?",
		  code : "var size = 100;\n\nc.strokeRect(30, 30, size, size);\nc.strokeRect(80, 80, size, size);\nc.strokeRect(130, 130, size, size);\n"
		},
		{ message: "Mi van, ha még több dobozt akarunk?  Rengeteg másolás.  Yuck-o.",
		  lessonSection: "Kerüld el a kódismétlést",
		},
		{ message: "Tudom!  Használj for ciklust!  Tudsz több dobozt csinálni a Code Monster számára?",
		  code: "var size = 100;\n\nfor (var x = 30; x <= 80; x = x + 50) {\n  c.strokeRect(x, x, size, size);\n}\n"
		},
		{ message: "Tudsz több, mint 10 dobozt csinálni?  És még mindegyik  benn marad a képernyőn?",
		},
		{ message: "Most könnyebb több dobozt csinálni? Miért van ez?",
		  code: "var size = 100;\nvar num = 3;\nvar offset = 30;\n\nfor (var i = 1; i <= num; i = i + 1) {\n  c.strokeRect(i * offset, i * offset, size, size);\n}\n",
		  lessonSection: "Változók szintén megkönnyítik ezt.",
		},
		{ message: "Ez úgy működik, hogy van egy <span class=tutor-code>i</span> változónk, amely számol  1, 2, 3... azután minden egyes doboz (left, top)  értékének az  <span class=tutor-code>i * offset</span> értéket adja, így, mivel  az offset értéke 30,  az első doboz top left értéke (30, 30), a másodiké (60, 60), majd (90, 90) ...",
		},
		{ message: "Próbáld megváltoztatni a size, a num, és az offset értékét.  Látod, mi történik?  Játssz ezzel!",
		},
		{ message: "Legtöbbször jó az, ha változók vannak arra, hogy dolgokat vezéreljenek (pl. size, num, és offset) együttesen, így könnyű őket megváltoztatni.  Szereted ezt?"
		},

		// Quiz
		{ message: "Meg tudod mutatni nekem, hogy mit tudsz? Rajzolj egy dobozt. <br>Tipp: A <span class=tutor-code>c.strokeRect(<i>left, top, width, height</i>);</span>  egy dobozt  rajzol.",
		  code: "",
		  lessonSection: "Teszt: For ciklusok",
		},
		{ message: "Most rajzolj négy dobozt.<br> Tipp: Négy doboz elkészítése könnyű a <span class=tutor-code>for</span> ciklushasználatával. Emlékezz, a <span class=tutor-code>for</span> ciklus a következőképpen néz ki: <span class=tutor-code>for (var i = 0; i < 3; i += 1) { }</span>",
		 code: ""
		},
		{ message: "Meg tudod ezt úgy csinálni, hogy az összes dobozod  összes méretét egyidőben változtasd meg?<br>Tipp: Egy <span class=tutor-code>size</span> nevű és 50 értékű változót, a  <span class=tutor-code>var size = 50;</span> használatával hozhatunk létre."
		},
		{ message: "Wow, programozni tanulsz!  Számos módja van annak, ahogy ezt csinálhatod, de valami hasonlót kaptál, mint ez? Ha nem, próbálj kicserélni néhány dolgot, találd ki, ez hogyan működik!",
		  code: "var size = 50;\n\nfor (var i = 0; i < 4; i += 1) {\n  var x = 80 + 30 * i;\n  var y = 80 + 10 * i;\n  c.strokeRect(x, y, size, size);\n}\n",
		},

		// Functions and squares
		{ message: "Code Monster nem szereti ismételni magát. Nem szereti. Nem szereti.  For ciklusok elkerülik az ismétlést.  Most mutasd meg nekem a függvényt is. A függvények szintén elkerülik az ismétlést.",
		  code: "// All work and no play\n// make monster a dull boy\n// All work and no play\n// make monster a dull boy\n// All work and no play\n// make monster a dull boy\n",
		  lessonSection: "A te saját függvényeid",
		},
		{ message: "Ez egy új függvény,  a  strokeSquare().  Ez hasonló, mint a  strokeRect(), de négyzeteket rajzol.",
		  code: "function strokeSquare(left, top, size) {\n  c.strokeRect(left, top, size, size);\n}\n\nstrokeSquare(30, 100, 50);\nstrokeSquare(10, 10, 200);\nstrokeSquare(50, 50, 10);\n"
		},
		{ message: " A strokeSquare() a strokeRect()-et hasznája, hogy egy téglalapot  rajzoljon azonos szélességgel és magasággal. Látod, hogyan működik?"
		},
		{ message: "Íme, az első négyzet a (30, 100) pozíciónál indul és 50-es a szélessége és a magassága. Látod?",
		},
		{ message: "Hozzá tudsz adni egy negyedik négyzetet a többiek alatt, a strokeSquare() használatával?",
		},

		// Draw a star
		{ message: "Ó! Egy csillag! Csodás! Változtass meg néhány számot!  Elrontottad!",
		  code: "c.beginPath();\nc.moveTo(50, 100);\nc.lineTo(150, 100);\nc.lineTo(65, 150);\nc.lineTo(100, 60);\nc.lineTo(135, 150);\nc.lineTo(50, 100);\nc.stroke();\n",
		  lessonSection: "Több vonal",
		},
		{ message: "Várj, a csillagok nem zöldek.  Yellow (sárga) vagy gold(arany) színűvé tudod tenni?",
		  code: "c.strokeStyle = \"green\";\nc.beginPath();\nc.moveTo(50, 100);\nc.lineTo(150, 100);\nc.lineTo(65, 150);\nc.lineTo(100, 60);\nc.lineTo(135, 150);\nc.lineTo(50, 100);\nc.stroke();\n"
		},
		{ message: "Ó! Egy tömör gold (arany) csillag!  Tudod, hogyan kell ezt csinálni? Változtass meg néhány számot!  Elrontottad!",
		  code: "c.fillStyle = \"gold\";\nc.beginPath();\nc.moveTo(50, 100);\nc.lineTo(150, 100);\nc.lineTo(65, 150);\nc.lineTo(100, 60);\nc.lineTo(135, 150);\nc.lineTo(50, 100);\nc.fill();\n"
		},
		{ message: "A változók megkönnyítik azt, hogy több csillagot megváltoztass vagy hozzáadj. Próbáld megváltoztatni az x,  az y, és a size (vagy bármelyik másik) értékét!",
		  code: "c.fillStyle = \"gold\";\n\nvar x = 50;\nvar y = 100;\nvar size = 100;\n\nc.beginPath();\nc.moveTo(x, y);\nc.lineTo(x + size, y);\nc.lineTo(x + size * 0.15, y + size * 0.5);\nc.lineTo(x + size / 2, y - size * 0.4);\nc.lineTo(x + size * 0.85, y + size * 0.5);\nc.lineTo(x, y);\nc.fill();\n"
		},
		{ message: "Itt van két csillag, de minden ismétlés  fáj nekem. Nem szeretem. Mit tegyünk?",
		  code: "c.fillStyle = \"gold\";\n\nvar x = 50;\nvar y = 100;\nvar size = 100;\n\nc.beginPath();\nc.moveTo(x, y);\nc.lineTo(x + size, y);\nc.lineTo(x + size * 0.15, y + size * 0.5);\nc.lineTo(x + size / 2, y - size * 0.4);\nc.lineTo(x + size * 0.85, y + size * 0.5);\nc.lineTo(x, y);\nc.fill();\nx += 100;\ny += 50;\nc.beginPath();\nc.moveTo(x, y);\nc.lineTo(x + size, y);\nc.lineTo(x + size * 0.15, y + size * 0.5);\nc.lineTo(x + size / 2, y - size * 0.4);\nc.lineTo(x + size * 0.85, y + size * 0.5);\nc.lineTo(x, y);\nc.fill();\n"
		},
		{ message: "Függvények! Ez a  fillStar()! Hozzá tudsz adni egy harmadik csillagot?",
		  code: "c.fillStyle = \"gold\";\nvar size = 100;\n\nfunction fillStar(x, y, s) {\n  c.beginPath();\n  c.moveTo(x, y);\n  c.lineTo(x + s, y);\n  c.lineTo(x + s * 0.15, y + s * 0.5);\n  c.lineTo(x + s / 2, y - s * 0.4);\n  c.lineTo(x + s * 0.85, y + s * 0.5);\n  c.lineTo(x, y);\n  c.fill();\n}\n\nfillStar(50, 100, size);\nfillStar(150, 150, size);",
		  lessonSection: "További függvények",
		},
		{ message: "Négy csillag a sorban!  Tudsz 8-at csinálni?",
		  code: "c.fillStyle = \"gold\";\nvar size = 40;\n\nfunction fillStar(x, y, s) {\n  c.beginPath();\n  c.moveTo(x, y);\n  c.lineTo(x + s, y);\n  c.lineTo(x + s * 0.15, y + s * 0.5);\n  c.lineTo(x + s / 2, y - s * 0.4);\n  c.lineTo(x + s * 0.85, y + s * 0.5);\n  c.lineTo(x, y);\n  c.fill();\n}\n\nfor (var i = 0; i < 4; i = i + 1) {\n  fillStar(i * size, 50, size);\n}\n",
		},
		{ message: "Két ciklus!  Próbáld megváltoztatni a size vagy a csillagok száma értékét!",
		  code: "c.fillStyle = \"gold\";\nvar size = 40;\n\nfor (var i = 0; i < 5; i = i + 1) {\n  for (var j = 0; j < 3; j = j + 1) {\n    fillStar(i * size, j * size, size);\n  }\n}\n\nfunction fillStar(x, y, s) {\n  c.beginPath();\n  c.moveTo(x, y + s * 0.4);\n  c.lineTo(x + s, y + s * 0.4);\n  c.lineTo(x + s * 0.15, y + s * 0.9);\n  c.lineTo(x + s / 2, y);\n  c.lineTo(x + s * 0.85, y + s * 0.9);\n  c.lineTo(x, y + s * 0.4);\n  c.fill();\n}\n",
		  lessonSection: "Beágyazott ciklusok",
		  // tutorImage: 6,
		},
		{ message: "Tudtad, két ciklust tudsz csinálni, mint ez, az egyik a másikon belül van?",
		},
		{ message: "Tudod, ez hogyan működik?",
		},
		{ message: "A <span class=tutor-code>j</span> növekszik 0, 1, 2.  Első ciklusban a  <span class=tutor-code>j</span> növekszik 0, 1, 2,  az <span class=tutor-code>i</span>  0 lesz.  A következő ciklusban a j növekszik 0, 1, 2, az  i  1 lesz.",
		  code: "c.fillStyle = \"gold\";\nvar size = 40;\n\nfor (var i = 0; i < 5; i = i + 1) {\n  for (var j = 0; j < 3; j = j + 1) {\n    fillStar(i * size, j * size, size);\n  }\n}\n\nfunction fillStar(x, y, s) {\n  c.beginPath();\n  c.moveTo(x, y + s * 0.4);\n  c.lineTo(x + s, y + s * 0.4);\n  c.lineTo(x + s * 0.15, y + s * 0.9);\n  c.lineTo(x + s / 2, y);\n  c.lineTo(x + s * 0.85, y + s * 0.9);\n  c.lineTo(x, y + s * 0.4);\n  c.fill();\n}\n",
		},
		{ message: "Így , az első csillag esetében az i = 0 és a j = 0.  A második csillag esetében az i = 0  és a j = 1.  Harmadik, i = 0 és j = 2. Majd, i = 1 és j = 0, i = 1 és j = 1, i = 1 és j = 2, stb.",
		},
		{ message: "Ki tudod találni, hogy ez milyen sorrendben rajzolja a  csillagokat?  Melyik csillagot rajzolja meg elsőként?  Melyik a másodjára megrajzolt csillag?",
		},
		{ message: "A bal felső lesz az első csillag.  A második az alatta levő.  Látod miért?",
		},
		{ message: "Wow!  Mindenütt csillag! Próbáld a size-t megváltoztatni!",
		  code: "c.fillStyle = \"gold\";\nvar size = 40;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar maxI = Math.floor(w / size);\nvar maxJ = Math.floor(h / size);\n\nfor (var i = 0; i < maxI; i = i + 1) {\n  for (var j = 0; j < maxJ; j = j + 1) {\n    fillStar(i * size, j * size, size);\n  }\n}\n\nfunction fillStar(x, y, s) {\n  c.beginPath();\n  c.moveTo(x, y + s * 0.4);\n  c.lineTo(x + s, y + s * 0.4);\n  c.lineTo(x + s * 0.15, y + s * 0.9);\n  c.lineTo(x + s / 2, y);\n  c.lineTo(x + s * 0.85, y + s * 0.9);\n  c.lineTo(x, y + s * 0.4);\n  c.fill();\n}\n",
		  lessonSection: "Móka csillagokkal",
		},
		{ message: "Wow!  Öt csillag, véletlenül elhelyezve, minden egyes alkalommal változik.Tudsz 50 csillagot rajzolni? Százat?  Mi újság a nagyobb és a kisebb csillagokkal?",
		  code: "c.fillStyle = \"gold\";\nvar n = 5;\nvar size = 20;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < n; i = i + 1) {\n  var x = (w - size) * Math.random();\n  var y = (h - size) * Math.random();\n  fillStar(x, y, size);\n}\n\nfunction fillStar(x, y, s) {\n  c.beginPath();\n  c.moveTo(x, y + s * 0.4);\n  c.lineTo(x + s, y + s * 0.4);\n  c.lineTo(x + s * 0.15, y + s * 0.9);\n  c.lineTo(x + s / 2, y);\n  c.lineTo(x + s * 0.85, y + s * 0.9);\n  c.lineTo(x, y + s * 0.4);\n  c.fill();\n}\n",
		},

		// Draw many lines to point
		{ message: "Uh,fáraszt a csillagok nézése.  Itt van két különálló vonal. Látod mennyire ismétlődik? Nem szeretem. Mit tudunk tenni?",
		  code: "c.beginPath();\nc.moveTo(20, 20);\nc.lineTo(200, 20);\nc.stroke();\nc.beginPath();\nc.moveTo(20, 50);\nc.lineTo(200, 50);\nc.stroke();\n",
		  lessonSection: "Még több függvény",
		},
		{ message: "Kell egy drawLine() függvény.  Itt van.  Most rajzolj egy vonalat (20, 20)-tól  (200, 20)-ig és egy másikat (20, 50)-tól (200, 50)-ig.",
		  code: "function drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n\n"
		},
		{ message: "Megvan? Íme egy változat.  Hozzá tudsz adni egy harmadik vonalat a másik kettő alá?",
		  code: "function drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n\ndrawLine(20, 20, 200, 20);\ndrawLine(20, 50, 200, 50);\n"
		},
		{ message: "Három függőleges vonal, amely cilklust használ.  Tudsz 10 vonalat csinálni?",
		  code: "function drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n\nfor (var i = 0; i < 3; i = i + 1) {\n  var x = 20 + i * 30;\n  drawLine(x, 20, x, 200);\n}\n",
		  lessonSection: "Móka vonalakkal",
		},
		{ message: "Tíz vonal egy pontban végződik.  Próbáld mozgatni a pontot!",
		  code: "function drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n\nvar px = 200;\nvar py = 150;\nfor (var i = 0; i < 10; i = i + 1) {\n  var y = i * 30;\n  drawLine(0, y, px, py);\n}\n"
		},
		{ message: "Kész vagy valami keményebbre?  Nos a vonalak most jobbra  \"legyeznek\".  Hozzá tudod adni azt, amit legutóbb láttunk, Balra mennek?",
		  code: "function drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n\nvar px = 200;\nvar py = 150;\nfor (var i = 0; i < 10; i = i + 1) {\n  var y = i * 30;\n  drawLine(400, y, px, py);\n}\n"
		},
		{ message: "Megvan?  Ez az egyik módja annak, hogy megcsináld.  Most próbáld mozgatni a pontot!",
		  code: "function drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n\nvar px = 200;\nvar py = 150;\nfor (var i = 0; i < 10; i = i + 1) {\n  var y = i * 30;\n  drawLine(0, y, px, py);\n  drawLine(400, y, px, py);\n}\n"
		},
		{ message: "O!  Szeret engem!  Próbáld megváltoztatni a num, a px, vagy a py értéket!",
		  code: "var num = 20;\nvar px = 200;\nvar py = 150;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < num; i = i + 1) {\n  var y = i * h / (num - 1);\n  drawLine(400, y, px, py);\n  var x = y * w / h;\n  drawLine(x, 300, px, py);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
		},
		{ message: "Tudsz vonalakat csinálni mindegyik oldalról?  Négy  drawLine() függvény szükséges és a te kettő újad 0-t használ  a w és a h helyett.  Meg tudod csinálni?",
		  code: "var num = 20;\nvar px = 200;\nvar py = 150;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < num; i = i + 1) {\n  var y = i * h / (num - 1);\n  drawLine(w, y, px, py);\n  var x = y * w / h;\n  drawLine(x, h, px, py);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
		},
		{ message: "Az enyémet kéken (blue) szeretem.  Játssz vele!",
		  code: "var num = 10;\nvar px = 200;\nvar py = 150;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nc.strokeStyle = \"blue\";\nfor (var i = 0; i < num; i = i + 1) {\n  var y = i * h / (num - 1);\n  drawLine(0, y, px, py);\n  drawLine(w, y, px, py);\n  var x = y * w / h;\n  drawLine(x, 0, px, py);\n  drawLine(x, h, px, py);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
		},

		// Fan curves
		{ message: "When me little monster, me draw these.  Szereted te is?  Változtasd meg a vonalak számát!",
		  code: "var num = 10;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < num; i = i + 1) {\n  var x = i * w / (num - 1);\n  var y = i * h / (num - 1);\n  drawLine(0, y, x, h);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n",
		  lessonSection: "Még több móka a vonalakkal",
		},
		{ message: "Hozzá tudsz adni egy további görbét a jobb felső pozícióba?  Egy további  drawLine()-ra lesz szükséged, de használd az x, 0, w, y paramétereket.",
		  code: "var num = 10;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < num; i = i + 1) {\n  var x = i * w / (num - 1);\n  var y = i * h / (num - 1);\n  drawLine(0, y, x, h);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
		},
		{ message: "Csodás!  Próbálj más színeket és változtasd meg a vonalak számát!",
		  code: "var num = 30;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nc.strokeStyle = \"gold\";\nfor (var i = 0; i < num; i = i + 1) {\n  var x = i * w / (num - 1);\n  var y = i * h / (num - 1);\n  drawLine(0, y, x, h);\n  drawLine(x, 0, w, y);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
		},
		{ message: "Meg tudod ezt úgy csinálni, hogy a két görbe két különböző színű legyen?",
		},
		{ message: "Íme egy verzió.  Próbáld megváltozatni a színeket!",
		  code: "var num = 30;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < num; i = i + 1) {\n  var x = i * w / (num - 1);\n  var y = i * h / (num - 1);\n  c.strokeStyle = \"gold\";\n  drawLine(0, y, x, h);\n  c.strokeStyle = \"red\";\n  drawLine(x, 0, w, y);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
		},
		{ message: "Íme egy őrült mókás színeket véletlenül cserélő változat.  Ez komplikált, de pillants rá.  Ki tudod találni, hogyan működik? És próbáld megváltoztatni a  num értékét!",
		  code: "var num = 30;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < num; i = i + 1) {\n  var x = i * w / (num - 1);\n  var y = i * h / (num - 1);\n  c.strokeStyle = randomRGBA();\n  drawLine(0, y, x, h);\n  c.strokeStyle = randomRGBA();\n  drawLine(x, 0, w, y);\n}\n\nfunction randomRGBA() {\n  var r = randInt(255);\n  var g = randInt(255);\n  var b = randInt(255);\n  var a = Math.random();\n  var rgba = [r,g,b,a].join(\",\");\n  return \"rgba(\" + rgba + \")\";\n}\nfunction randInt(limit) {\n  var x = Math.random() * limit;\n  return Math.floor(x);\n}\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
		},

		// Quiz
		{ message: "Te ismered a programozást? Mutasd meg nekem!  Tudsz csinálni egy fillSquare() nevű függvényt, és utána használd ezt arra, hogy egy második nagyobb négyzetet rajzolj ?<br>Tipp: Szükséged lesz valamire, mint a <span class=tutor-code>function fillSquare(left, top, size) { }</span> függvény.",
		  code: "c.fillRect(20, 30, 100, 100);\n",
		  lessonSection: "Teszt: Függvények",
		},
		{ message: "Megvan?  Valami ilyesmi? Nos, meg tudod csinálni, hogy az első négyzet is a fillSquare()-t használja a  fillRect() hívása helyett?",
		  code: "c.fillRect(20, 30, 100, 100);\n\nfillSquare(200, 70, 150);\nfunction fillSquare(x, y, s) {\n  c.fillRect(x, y, s, s);\n}\n",
		},
		{ message: "Nézd, egy vonal. Huh. Többet akarok. Több vonal hozzáadása könnyebb lenne, ha van egy  drawLine() függvényünk ismét. Meg tudod írni ezt és utána a vonalak készítésére használni?<br>Tipp: Készíts egy függvényt a <span class=tutor-code>function doStuff(a, b, c, d) { } használatával.</span><br> Figyelem: a c-vel vigyázz, mert az már foglalt!",
		  code:"c.beginPath();\nc.moveTo(30, 20);\nc.lineTo(200, 50);\nc.stroke();\n"
		},
		{ message: "Ahh, nem jobb ez? Adj hozzá egy további vonalat a jelenlegi alá.  Nem volt ez könnyebb most?",
		  code: "drawLine(30, 20, 200, 50);\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
		},
		{ message: "Így könnyű további vonalak hozzáadása, Sok vonalat akarok.  Adj nekem összesen 10 vonalat , egyik a másiknak a tetején, 10-zel elválasztva!<br>Tipp: For ciklussal könnyebb. For ciklus így néz ki <span class=tutor-code>for (var i = 0; i < 3; i += 1) { }</span>",
		},
		{ message: "Valami ehhez hasonlót kaptál?  Jobban vagy!  Próbálj játszani a számokkal! Én az n = 40 és a dy = 5-t szeretem!",
		  code: "var n = 10;\nvar dy = 10;\nfor (var i = 0; i < n; i = i + 1) {\n  var y = 20 + i * dy;\n  drawLine(30, y, 200, y + 30);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n",
		},
 	
		// Two boxes and a white box
		{ message: "Nekem hiányoznak a dobozok.  Hey, nézd, dobozok, tudod törölni!  Próbáld a fehér dobozt mozgatni (50, 50)-től (20, 20)-ig!",
		  code: "function fillSquare(w, h, s) {\n  c.fillRect(w, h, s, s);\n}\n\nc.fillStyle = \"blue\";\nfillSquare(10, 10, 100);\nfillSquare(100, 100, 100);\nc.fillStyle = \"white\";\nfillSquare(50, 50, 100);\n",
		  lessonSection: "Törlés",
		},
		{ message: "Sorrendi ügyek.  Az utoljára rajzolt marad felül!  Próbáld most mozgatni a fehér dobozt!",
		  code: "function fillSquare(w, h, s) {\n  c.fillRect(w, h, s, s);\n}\n\nc.fillStyle = \"blue\";\nfillSquare(10, 10, 100);\nc.fillStyle = \"white\";\nfillSquare(50, 50, 100);\nc.fillStyle = \"blue\";\nfillSquare(100, 100, 100);\n"
		},

		// Make a little face using a box and clearRect()
		{ message: "További módszer a  clearRect()-tel törlés. Ennek felhasználásával tudsz egy kék  smiley arcot csinálni?  Ez majdnem megvan.  Csak mozgatnod kell  őket.",
		  code: "c.fillStyle = \"blue\";\nc.fillRect(50, 20, 200, 200);\n// Szemek\nc.clearRect(80, 150, 20, 20);\nc.clearRect(120, 150, 20, 20);\n// Száj\nc.clearRect(70, 50, 100, 10);\n"
		},
		{ message: "Nekem tetszik ez a fickó.  Ó, barátom.",
		  code: "c.fillStyle = \"blue\";\nc.fillRect(50, 20, 200, 200);\n// Szemek\nc.clearRect(80, 50, 20, 20);\nc.clearRect(150, 50, 20, 20);\n// Száj\nc.clearRect(70, 150, 100, 10);\n"
		},

		// Clearing the screen
		{ message: "Egy nagy clearRect() mindent töröl.  Szüntesd meg a nagy clearRect() előtti megjegyzést (töröld a <span class=tutor-code>//</span> írásjelet)  és nézd meg mi történik.",
		  code: "var size = 80;\nvar offset = 20;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nc.fillStyle =\"rgba(0, 0, 255, 0.5)\";\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillStyle =\"rgba(0, 255, 0, 0.5)\";\nc.fillRect(offset, offset, size, size);\n// c.clearRect(0, 0, w, h);\noffset = offset + 60;\nc.fillStyle =\"rgba(255, 0, 0, 0.5)\";\nc.fillRect(offset, offset, size, size);\n"
		},

		// Comments
		{ message: "A sor elején használt <span class=tutor-code>//</span>  írásjelek a sort mellőzik.  Ezt \"megjegyzéssé tesz\"-nek (commenting out) nevezik .  Egy másik sor elején próbáld hozzáadni a  <span class=tutor-code>//</span> írásjeleket, és nézd meg mi történik!",
		  code: "var size = 80;\nvar offset = 20;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nc.fillStyle =\"rgba(0, 0, 255, 0.5)\";\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillStyle =\"rgba(0, 255, 0, 0.5)\";\nc.fillRect(offset, offset, size, size);\n// c.clearRect(0, 0, w, h);\noffset = offset + 60;\nc.fillStyle =\"rgba(255, 0, 0, 0.5)\";\nc.fillRect(offset, offset, size, size);\n",
		  lessonSection: "Megjegyzések",
		},

		// Rotation and translation
		{ message: "Egy doboz. De azt hogyan érted el, hogy messze van a szélétől?  Próbáld megváltoztatni az x és y értékét.",
		  code: "var x = 50;\nvar y = 50;\n\nc.fillStyle = \"purple\";\nc.translate(x, y);\nc.fillRect(0, 0, 100, 100);\n",
		  lessonSection: "Forgatás és  áthelyezés",
		},
		{ message: "A fillRect() azt mondja, hogy helyezd a (left, top) -ot a  (0, 0) -ra , így nem gondolod, hogy a doboznak a bal felső sarokban kellene lennie? De, várj,  mi az a translate()?"
		},
		{ message: "A translate() megváltoztatja azt,  ahol  a (0, 0)  van.  Például a translate(50, 50) után bármi , ami a (0, 0) pozícióba próbál rajzolni, az (50, 50) pozícióba fog rajzolni.  A (20, 20)-ba rajzolás a  (70, 70)-be fog rajzolni, mivel  50 + 20 = 70. Látod?"
		},
		{ message: "Miért csinálja ez azt, amit csinál?  Mi történik ha a megjegyzést törlöd (uncomment) a  save() és a restore() sorokban? Próbáld ki! Az van, amit elvártál?",
		  code: "var x = 50;\nvar y = 50;\n\n// c.save();\nc.fillStyle = \"purple\";\nc.translate(x, y);\nc.fillRect(0, 0, 100, 100);\n// c.restore();\nc.translate(x, y);\nc.fillRect(0, 0, 100, 100);\n"
		},
		{ message: "A második doboz fekete lesz és pont  az első dobozra kerül!  Miért?",
		  code: "var x = 50;\nvar y = 50;\n\nc.save();\nc.fillStyle = \"purple\";\nc.translate(x, y);\nc.fillRect(0, 0, 100, 100);\nc.restore();\nc.translate(x, y);\nc.fillRect(0, 0, 100, 100);\n"
		},
		{ message: "A restore() megszünteti  az utolsó save() óta végrehajtott összes változtatást.  Így, ha mentesz (save), utána megváltoztatod a  fillStyle-al a színt vagy végzel egy translate()-et , majd  visszaállítasz (restore), minden visszaáll oda, ahol a mentést (save) megelőzően volt."
		},
		{ message: "A dolgokat forgathatjuk is.  Próbáld változtatni a szöget!",
		  code: "var x = 50;\nvar y = 50;\nvar angle = 0.1;\n\nc.translate(x, y);\nc.rotate(angle);\nc.strokeRect(0, 0, 100, 100);\n"
		},
		{ message: "Szeretnéd a fokot használni?  A  Javascriptben a szöget  radiánban adjuk meg.  45 fok az kb. 0.8 radiánban.  Próbáld megváltoztatni a szöget 0.1-től  0.8-ig!",
		  code: "var x = 50;\nvar y = 50;\nvar angle = 0.1;\n\nc.translate(x, y);\nc.rotate(angle);\nc.strokeRect(0, 0, 100, 100);\n"
		},
		{ message: "A teljes körbeforgatás az  360 fok, igaz?  Radiánban ez kb. 6.28.",
		},
		{ message: "Észrevetted, hogy ez a doboz a  bal felső sarok körül forog , amikor forgatod?  Ez ugyanaz a pont, mint ami a  translate()-tel kapcsolatos, igaz?"
		},
		{ message: "Próbáld most megváltoztatni a szöget.  Micsoda különbség?",
		  code: "var x = 100;\nvar y = 100;\nvar angle = 0.1;\n\nc.translate(x, y);\nc.rotate(angle);\nc.strokeRect(-50, -50, 100, 100);\n"
		},
		{ message: "Ugye milyen furcsa a -50 ,amit a strokeRect()  használ a bal (left) és felső (top) pozícióra ?  De a doboz felső(top) bal(left) értéke még az (50, 50)-nél van, mivel mi áthelyeztük a (100, 100) pozícióba,  100 - 50 = 50."
		},
		{ message: "Amikor forgatunk, a (100, 100) körül forgatunk a translate() miatt. Óh, és (100, 100) a doboz közepe!  Így, ez a doboz a középpontja körül forog!",
		},
		{ message: "A translate() és a  rotate() hozzáadódik bármilyen korábbi translate()-hez és rotate()-hez, kivéve ha a restore() visszaállított egy korábbi állapotot.  Próbáld megváltoztani az angle értékét vagy megszüntetni a megjegyzést a save()-nél és a restore()-nál!",
		  code: "var x = 100;\nvar y = 100;\nvar angle = 0.1;\n\n// c.save();\nc.fillStyle = \"purple\";\nc.translate(x, y);\nc.rotate(angle);\nc.fillRect(-50, -50, 100, 100);\n// c.restore();\nc.translate(x, y);\nc.rotate(angle);\nc.fillRect(-50, -50, 100, 100);\n"
		},
		{ message: "Azt csinálta, ami elvártál?  Látod miért azt csinálta, amit csinált?  A save()-vel és a restore()-ral, a második doboz fekete és  pontosan az első lila (purple) dobozra rajzolódik."
		},
		{ message: "El tudod mozgatni a fekete (black) dobozt a lila (purple) dobozról?  Így láthatod mindkettőt.",
		  code: "var x = 100;\nvar y = 100;\nvar angle = 0.1;\n\nc.save();\nc.fillStyle = \"purple\";\nc.translate(x, y);\nc.rotate(angle);\nc.fillRect(-50, -50, 100, 100);\nc.restore();\nc.translate(x, y);\nc.rotate(angle);\nc.fillRect(-50, -50, 100, 100);\n"
		},
		{ message: "Íme egy megoldás. See how the translate() is to a different spot?  Próbáld most megváltozatni az angle értékét!  Próbáltál már az angle-re negatív értéket, mint a -0.2?",
		  code: "var x = 100;\nvar y = 100;\nvar angle = 0.1;\n\nc.save();\nc.fillStyle = \"purple\";\nc.translate(x, y);\nc.rotate(angle);\nc.fillRect(-50, -50, 100, 100);\nc.restore();\nc.translate(x * 2, y * 2);\nc.rotate(angle*2);\nc.fillRect(-50, -50, 100, 100);\n"
		},
		{ message: "Boxes rotated relative to their center are usually what you want. Nézd egy függvény, ami különböző szögekkel forgatja a dobozokat!  Hozzá tudsz adni néhány további dobozt?",
		  code: "function strokeSquare(x, y, size, angle) {\n  c.save();\n  c.translate(x + size / 2, y + size / 2);\n  c.rotate(angle);\n  c.strokeRect(-size / 2, -size / 2,\n                size, size);\n  c.restore();\n}\n\nstrokeSquare(50, 50, 100, 0.2);\nstrokeSquare(180, 100, 50, -0.1);\n",
		},

		// Quiz
		{ message: "Te most programozó vagy? Mutasd meg nekem! Rajzolj egy dobozt  -0.5-tel elforgatva.  Tipp: Használd a c.rotate(); és c.strokeRect() utasításokat;",
		  code: "",
		  lessonSection: "Teszt: Forgatás és áthelyezés",
		},
		{ message: "Óh, ez könnyű nagyon ? Nehezebb problémát akarsz? Rajzolj öt dobozt egymásra, mindegyik több mint 0.3-mal elfordítva, mint az utolsó.<br>Tipp: a c.translate() hasznos lehet<br>Tipp: For ciklus így néz ki <span class=tutor-code>for (var i = 0; i < 5; i += 1) { }</span>",
		},
		{ message: "Valami hasonlót kaptál? Látod, ez hogyan működik?  Ez először egy adott helyre mozog a translate()-tel, majd ismételten négyzeteket rajzol az adott hely körül és forgatja az adott hely körül.",
		  code: "var angle = 0.2;\nvar num = 5;\nc.translate(150, 150);\nfor (var i = 0; i < num; i = i + 1) {\n  c.strokeRect(-75, -75, 150, 150);\n  c.rotate(angle);\n}\n"
		},
		{ message: "Játssz ezzel egy kicsit!  Próbáld megváltoztatni a num és az angle értékét!",
		},

		// Draw a branching structure
		{ message: "Mondjuk megpróbálunk egy fát rajzolni.  Hogyan lehet ezt megcsinálni?",
		  code: "",
		  lessonSection: "Egy nehéz probléma",
		  // tutorImage: 7,
		},
		{ message: "A fáknak ágai vannak.  Íme egy kezdés. Hozzá tudsz adni további ágakat?",
		  code: "drawLine(200, 300, 200, 200);\ndrawLine(200, 200, 160, 130);\ndrawLine(200, 200, 240, 130);\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n",
		},
		{ message: "Oog, az rengeteg munka.",
		},
		{ message: "Megpróbálom változók segítségével. Ez könnyebbé teszi?  Nem vagy biztos, hogy ez működik. Mit gondolsz?",
		  code: "var w = c.canvas.width;\nvar h = c.canvas.height;\n\ndrawLine(w * 0.5, h, w * 0.5, h * 0.7);\ndrawLine(w * 0.5, h * 0.7, w * 0.4, h * 0.5);\ndrawLine(w * 0.5, h * 0.7, w * 0.6, h * 0.5);\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n",
		},
		{ message: "Bleah, ez továbbra is túl sok munka. Talán a for ciklus?  Ez hogyan működhet? Nem tudom.Hogyan tudnánk minden ágtól két ágat rajzolni? Nem vagyok biztos benne.  Mit gondolsz?",
		},
		{ message: "Nem, én nem látom a módját, hogy könnyen rajzoljunk fákat for ciklus használatával. Mit használhatunk ezen kívül?  Használhatunk függvényeket?",
		},
		{ message: "Talán egy függvény rajzolhat ágat.  De hogyan rajzolhat két további ágat egy ág?",
		},
		{ message: "Kezdjünk egy függvénnyel, ami egy ágat rajzol.  Itt van egy.  Ez vesz négy számot, honnan indul (x,y), a hossz <span class=tutor-code>l</span>, a <span class=tutor-code>direction (irány)</span> , amely megmondja  vajon balra (left), jobbra (right), vagy egyenesen (straight) rajzoljon.",
		  code: "var w = c.canvas.width;\nvar h = c.canvas.height;\n\ndrawBranch(w / 2, h, 100, 0);\n\nfunction drawBranch(x, y, l, direction) {\n  var x2 = x + l * direction;\n  var y2 = y - l;\n  drawLine(x, y, x2, y2);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
		},
		{ message: "Az <span class=tutor-code>irány (direction)</span> az ág balra (left) (negatív számokra) vagy jobbra (right) (pozitívokra) dőlésével működik.  Látod?  Próbáld megváltoztatni ezt!",
		  code: "var w = c.canvas.width;\nvar h = c.canvas.height;\n\ndrawBranch(w / 2, h, 100, -0.1);\n\nfunction drawBranch(x, y, l, direction) {\n  var x2 = x + l * direction;\n  var y2 = y - l;\n  drawLine(x, y, x2, y2);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
		},
		{ message: "Hogyan tudunk most ezzel a rajzolással két további ágat rajzolni?"
		},
		{ message: "Ah, én tudom, csináld úgy, hogy a függvény saját magát használja! Látod ez mit csinál?",
		  code: "var w = c.canvas.width;\nvar h = c.canvas.height;\n\ndrawBranch(w/2, h, 100, 0);\n\nfunction drawBranch(x, y, l, direction) {\n  var x2 = x + l * direction;\n  var y2 = y - l;\n  drawLine(x, y, x2, y2);\n  if (l > 20) {\n    // Call drawBranch twice more\n    drawBranch(x2, y2, l / 2, -0.8);\n    drawBranch(x2, y2, l / 2, 0.8);\n  }\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n",
		  lessonSection: "Rekurzió",
		},
		{ message: "Ez ördögi! Íme egy verzió amellyel könnyebb, hogy \"malmozz\" (to twiddle).  Próbálj játszani ezzel!  Változtasd meg az <span class=tutor-code>xScale</span>, az <span class=tutor-code>yScale</span>, vagy a  <span class=tutor-code>minLength</span> értékét!  Cool, huh?",
		  code: "var minLength = 20;\nvar yScale = 0.5;\nvar xScale = 0.8;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\ndrawBranch(w/2, h, 100, 0);\n\nfunction drawBranch(x, y, l, direction) {\n  var x2 = x + l * direction;\n  var y2 = y - l;\n  drawLine(x, y, x2, y2);\n  if (l > minLength) {\n    // Call drawBranch twice more\n    drawBranch(x2, y2, l * yScale, -xScale);\n    drawBranch(x2, y2, l * yScale, xScale);\n  }\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
		},
		{ message: "Itt számos új elem van.  Monster megáll, hogy elmagyarázza."},
		{ message: "A drawBranch() egy <i>rekursív</i> függvény.  Ami azt jelenti,hogy saját magát hívja."},
		{ message: "A drawBranch() csak akkor hívja saját magát ha az <span class=tutor-code>l > minLength</span>. Az <span class=tutor-code>l</span> egyre kisebb és kisebb lesz mindenkor, amikor a drawBranch() saját magát hívja, így a drawBranch() végül leáll saját maga hívásával, amikor az ág hossza elég kicsi lesz."},

		// Recursion
		{ message: "A rekurzív függvények csinosak, de trükkösek! Csináljunk egy kicsit többet. Változtasd ezt meg, hogy a <span class=tutor-code>nSquareRecursive(4);</span> függvényt hívja a <span class=tutor-code>nSquare(4);</span> függvény helyett.",
		  code: "nSquare(4);\n\nfunction nSquare(n) {\n  c.strokeStyle = \"blue\";\n  for (var i = n; i > 0; i = i - 1) {\n    c.strokeRect(i * 30, i * 30, 100, 100);\n  }\n}\nfunction nSquareRecursive(n) {\n  if (n > 1) {\n    nSquareRecursive(n - 1);\n  }\n  c.strokeRect(n * 30, n * 30, 100, 100);\n}\n",
		},
		{ message: "Semmi más, csak annyi, hogy nem kék (blue), ez ugyanaz, igaz?  Látod, hogyan működik mindkettő?",
		},
		{ message: "Az nSquare() egy for ciklust használ, 4-nél indul, és visszaszámol: 4, 3, 2, 1.",
		},
		{ message: "Az nSquareRecursive() saját magát hívja minden egyes alkalommal eggyel kisebb számmal.  Így, amikor 4-gyel hívja meg, ez meghívja saját magát 3-mal, és az a hívás meghívja saját magát 2-vel, és az a hívás meghívja saját magát 1-gyel.  Egynél, ez azt mondja, állj le a saját magad hívásával, így megáll.  És, minden hívásra, egy dobozt rajzol, amely (n * 30, n * 30) pozícióban helyezkedik el.  Látod?",
		},
		{ message: "Ez kicsi kód darab egy zsugorodó dobozok halmazát rajzolja meg. Látod hogyan működik?",
		  code: "branchBox(100);\n\nfunction branchBox(size) {\n  c.translate(size, size);\n  c.strokeRect(-size, -size, size, size);\n  if (size > 5) {\n    branchBox(size * 0.65);\n  }\n}\n"
		},
		{ message: "Ez úgy működik, hogy ez végrehajt egy translate()-et a doboz jobb alsó sarkához, majd megrajzolja a dobozt e mögé. Így a doboz <span class=tutor-code>size</span> nagyságú lesz a (-size, -size)-tól kezdődően.  Ezután, mindaddig amíg a doboz nem lesz túl kicsi, ezt végrehajtja ismét saját maga hívásával, de következő alkalommal a doboz méretének zsugorításával.",
		},
		{ message: "Íme ugyanaz a darab, amely inkább a for ciklust használja. Hasonlítsd össze a kettőt. Látod, hogyan működik mindkettő?",
		  code: "branchBoxForLoop(100);\n\nfunction branchBoxForLoop(size) {\n  c.strokeStyle = \"blue\";\n  for (var i = size; i > 4; i = i * 0.65) {\n    c.translate(i, i);\n    c.strokeRect(-i, -i, i, i);\n  }\n}\nfunction branchBox(size) {\n  c.translate(size, size);\n  c.strokeRect(-size, -size, size, size);\n  if (size > 5) {\n    branchBox(size * 0.65);\n  }\n}\n"
		},
		{ message: "A for ciklus egy 100-as méretű doboz rajzolásával kezdődik, majd egy 65-ös, és így tovább. Így működik a rekurzív változat, de a rekurzív ezt saját maga hívásával csinálja.",
		},
		{ message: "Megváltoztathatod őket, ha akarod!  Gyakorold!",
		},

		// Rotation and branching
		{ message: "Vissza a fákhoz.  Óh!  Egy még jobb fához!",
		  code: "var angle = 0.35;\nvar branchScale = 0.75;\nvar l = 75;\nvar minL = 5;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nc.translate(w/2, h);\ndrawBranch(l, 0);\n\nfunction drawBranch(l, direction) {\n  c.save();\n  c.rotate(angle * direction);\n  c.fillRect(-l / 20, 0, l / 10, -l);\n  if (l > minL) {\n    c.translate(0, -l);\n    drawBranch(l * branchScale, -1);\n    drawBranch(l * branchScale, 1);\n  }\n  c.restore();\n}\n",
		  lessonSection: "Forgatás, áthelyezés, és rekurzió",
		},
		{ message: "Látod, hogyan működik? Ez translate()-et használ, hogy egy ág végére mozogjon, és utána a rotate()-et, hogy az ágakat az egyik vagy másik oldalra billentse.",
		},
		{ message: "Próbáld megváltoztatni az <span class=tutor-code>angle</span>, a <span class=tutor-code>branchScale</span>, az <span class=tutor-code>l</span>, és a <span class=tutor-code>minL</span> értékeket!  Ha van egy kis gyakorlatod, néhány valóban \"király\" rajzot kaphatsz. Játssz vele!",
		},
		{ message: "Azt gondolom ez még jobban olyan lenne, mint egy fa, ha az <span class=tutor-code>angle</span> értéke egy kicsit jobban véletlenszerű lenne.  Nagyobbá tudod tenni a szöget és utána egy rotate()-et csinálni, amely egy számot használ 0 és az angle között? (Tipp: a <span class=tutor-code>Math.random()</span> eredményül ad egy számot 0.0-tól  1.0-ig.)"
		},
		{ message: "Íme egy változat.  A <span class=tutor-code>branchScale</span> értékét is jobban véletlenszerűvé tudod tenni?",
		  code: "var angle = 0.5;\nvar branchScale = 0.75;\nvar l = 75;\nvar minL = 5;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nc.translate(w/2, h);\ndrawBranch(l, 0);\n\nfunction drawBranch(l, direction) {\n  c.save();\n  // Make a number between 0 and angle\n  var a = angle * Math.random();\n  c.rotate(a * direction);\n  c.fillRect(-l / 20, 0, l / 10, -l);\n  if (l > minL) {\n    c.translate(0, -l);\n    drawBranch(l * branchScale, -1);\n    drawBranch(l * branchScale, 1);\n  }\n  c.restore();\n}\n"
		},
		{ message: "Óóó!  Ez az, ez nagyon hasonlít egy fára !",
		  code: "var angle = 0.5;\nvar branchScale = 0.75;\nvar l = 60;\nvar minL = 5;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nc.translate(w/2, h);\ndrawBranch(l, 0);\n\nfunction drawBranch(l, direction) {\n  c.save();\n  var a = angle * Math.random();\n  c.rotate(a * direction);\n  c.fillRect(-l / 20, 0, l / 10, -l);\n  if (l > minL) {\n    c.translate(0, -l);\n    // Make a number between -0.1 and 0.1\n    var b = 0.2 * (Math.random() - 0.5);\n    // Now make it between 0.9 and 1.1\n    b = b + 1;\n    // And use it to change branchScale\n    drawBranch(l * b * branchScale, -1);\n    b = 1 + 0.2 * (Math.random() - 0.5);\n    drawBranch(l * b * branchScale, 1);\n  }\n  c.restore();\n}\n",
		},
		{ message: "Próbáld megváltoztatni az <span class=tutor-code>angle</span>, a <span class=tutor-code>branchScale</span>, az <span class=tutor-code>l</span>, és a <span class=tutor-code>minL</span> értékeket!  Ha van egy kis gyakorlatod, néhány csinos vad dolgot kaphatsz!",
		},

		// Quiz on recursion, draw your own trees
		{ message: "Fogadom, most meg tudod rajzolni a saját fádat! Meg akarod próbálni?  Segítek neked!",
		  code: "",
		  lessonSection: "Saját fa rajzolása",
		},
		{ message: "Rajzoljunk fákat, ahogy azt korábban tettük.  Csináljuk meg a növényt, váltogatva az ágakat megosztva jobb és bal között.  Néhány növény ezt csinálja.  Kész vagy a kezdésre?  Végigvezetlek a folyamaton!",
		},
		{ message: "Akkor, először kell egy ág.  Hozzunk létre egy drawBranch() függvényt, ami két változót használ , egy hossz változót, amit <span class=tutor-code>l</span>-nek hív, és egy <span class=tutor-code>direction (irány)</span> változót.",
		  code: "",
		},
		{ message: "Emlékszel, hogyan írsz egy függvény, mint ez? Nem szükséges, hogy még bármi egyebet csinálj, csak deklarálj egy drawBranch() nevű függvényt.",
		},
		{ message: "Valami hasonlón gondolkozol?",
		  code: "function drawBranch(l, direction) {\n  \n}\n"
		},
		{ message: "Hozzáadtam néhány megjegyzést arról, hogy  mi a következő lépés. El kell kezdenünk a saját fánk rajzolását. Meg tudod írni a kódot minden egyes megjegyzés alá?",
		  code: "function drawBranch(l, direction) {\n  \n}\n\n// Használd a c.translate()-et, hogy a (200, 250)\n// pozícióba mozogj.\n\n// Hívd meg a drawBranch() függyvényt 50-es length \n// értékkel és 1-es direction értékkel!\n",
		},
		{ message: "Ok, ezzel áthelyezed (translate()), és elkezded a megfelelő helyen majd megpróbálsz egy ágat rajzolni.  Most meg kell csinálnunk a drawBranch() függvényt, hogy csináljon valamit!  Meg tudod csinálni,azt amit a megjegyzések mondanak, hogy csináld meg?  Egy egyedüli ágat kell kapnod (amely úgy néz ki, mint egy fa törzse) amikor kész vagy.",
		  code: "function drawBranch(l, direction) {\n  // c.fillRect(left, top, width, height);\n  // egy négyszöget rajzol.\n  // Használd ezt, hogy egy négyszöget rajzoljon, amely\n  //(-l, 0)-nál indul és 2 széles\n  // és -l (amely az l mint length(hosszúság)) magas.\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n",
		},
		{ message: "Mostanra valami hasonló kell, hogy legyen a tied is.  Menjünk tovább!  Keresd meg a megjegyzéseket, amelyek megmondják a következő lépést!",
		  code: "function drawBranch(l, direction) {\n  c.fillRect(-1, 0, 2, -l);\n  \n  // Használd a c.translate()-et, hogy az ág\n  // végére mozogj.\n  // Tipp: A vége (0, -l)-nél van, ahol l,\n  // mint a length(hossz).\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n",
		},
		{ message: "Nagyszerű!  Most megrajzoltad az első ágat, elmozogtál ennek az ágnak a végére, és kész vagy arra, hogy további ágakat rajzolj!",
		  code: "function drawBranch(l, direction) {\n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n",
		},
		{ message: "Álljunk meg egy másodpercre és gondolkozzunk el arról, hogy mit akarunk a következő lépésben tenni.",
		},
		{ message: "Ez a növény két ágra fog elágazni, az egyik felfelé megy, a másik oldalra.  Mi azt akarjuk azokkal, amik oldalra mennek, hogy váltakozzanak, az első jobbra, majd balra, majd jobbra, majd balra.",
		},
		{ message: "Mi addig folytatjuk az elágazást és rajzolást és elágazást és rajzolást, amíg az ágak nagyon kicsik nem lesznek.",
		},
		{ message: "Adjuk hozzá a következőt.  Nekünk akkor kell további ágakat rajzolni, ha a hossz (length) <span class=tutor-code>l</span> nagyobb, mint 5.  Hozzá tudod ezt adni?",
		  code: "function drawBranch(l, direction) {\n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n  // Cseréld ki az alábbi \"true\"-t valamivel, ami\n  // megvizsgálja, vajon az l elég nagy-e.\n  if ( true ) {\n    // Még ne csinálj itt semmit.\n    // További ágakat később adunk hozzá.\n  }\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n",
		},
		{ message: "Mostanra ilyen kell legyen tied.",
		  code: "function drawBranch(l, direction) {\n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n  if ( l > 5 ) {\n    // Itt még nem csinál semmit.\n    // További ágakat később adunk hozzá.\n  }\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n",
		},
		{ message: "Csak egy ágat addj hozzá, ami felfelé megy. Tegyük ezt egy kicsit rövidebbé, mint az utolsó ág, amit utoljára rajzoltunk.  Kövesd az utasításokat a megjegyzésben.",
		  code: "function drawBranch(l, direction) {\n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n  if ( l > 5 ) {\n    // Hívd meg a drawBranch() függvényt  l * 0.8-cal\n   // és direction-nal    \n  }\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n",
		},
		{ message: "Mostanra ez van neked?  Nézd, mit csinál ez?  Ez ismételten egy ágat rajzol egyenesen felfelé, minden eggyes alkalommal rövidebbé teszi az ágat.  Ez úgy néz ki, mint egy vonal, de ez valójában az ágak egy kötege egymás tetejére halmozva.",
		  code: "function drawBranch(l, direction) {\n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n  if ( l > 5 ) {\n    drawBranch(l * 0.8, direction);\n  }\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n",
		},
		{ message: "Meglehetősen unalmas eddig?",
		},
		{ message: "Ez arról szól, hogy valami sokkal izgalmasabbat kapjunk!",
		},
		{ message: "Adjuk hozzá a második ágat!  Arra az ágra, mi elvégzünk egy forgatást abba az irányba, amelyet a direction(irány) jelez, majd rajzolunk egy rövidebb ágat. Kövesd az utasításokat a megjegyzésekben",
		  code: "function drawBranch(l, direction) {\n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n  if ( l > 5 ) {\n    drawBranch(l * 0.8, direction);\n    \n    // Használd a c.rotate()-et \n    // 0.5 * direction értékű angle-lel\n    \n    \n    // Hívd a  drawBranch-et l * 0.7-tel\n    // és direction-nal\n    \n  }\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n",
		},
		{ message: "Aieeee!  Mit tettél?",
		},
		{ message: "Csak ugratlak!  Minden rendben van!",
		},
		{ message: "Ez az a rész, amit hibakeresésnek (debugging) hívunk, hogy megfejtsük a bugokat (problémát).",
		},
		{ message: "Szóval, ez nem azt csinálja, amit elvártál tőle, hogy csináljon, ugye?",
		},
		{ message: "Bármilyen ötlet, hogy mi a rossz?",
		},
		{ message: "Mi történik akkor, amikor azok a translate() és a rotate() hívások az összeset egymás tetejére halmozzák.  Mi valójában nem ezt akajuk.  Amikor itt az ideje, hogy egy második ágat rajzoljunk, mi valójában azt akarjuk, hogy minden úgy legyen, ahogy az akkor volt, amikor mi megcsináltuk az első ágat, de ez nem az, mi áthelyeztük és forgattuk az összeset az egész területen.",
		},
		{ message: "Ments (save) és állíts vissza (restore), hogy megmentsük!  Hozzá tudod adni a <span class=tutor-code>c.save();</span> és a <span class=tutor-code>c.restore();</span> utasításokat, ahol a megjegyzések azt mondják, hogy add hozzá őket?",
		  code: "function drawBranch(l, direction) {\n  // Ments( save) itt!\n  \n  \n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n  if ( l > 5 ) {\n    drawBranch(l * 0.8, direction);\n    \n    c.rotate(0.5 * direction);\n    drawBranch(l * 0.7, direction);\n  }\n  \n  // Állítsd vissza (restore) itt!\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n",
		},
		{ message: "Ez sokkal jobb.  De ez csak a fa egyik oldalára rajzol!  Miért van ez?",
		  code: "function drawBranch(l, direction) {\n  c.save();\n  \n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n  if ( l > 5 ) {\n    drawBranch(l * 0.8, direction);\n    \n    c.rotate(0.5 * direction);\n    drawBranch(l * 0.7, direction);\n  }\n  \n  c.restore();\n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n",
		},
		{ message: "Kitaláltad?",
		},
		{ message: "Ez azért van, mert mi nem változtattuk az irányt (direction). Az irány mindig ugyanaz, mint ami volt a kezdésnél, ez mindig 1.  Ezt váltogatni kell, 1, -1, 1, -1 ..."
		},
		{ message: "Meg tudod ezt csinálni, így mindkét drawBranch() hívás  a drawBranch()-en belül  -direction értéket használja a direction helyett?",
		},
		{ message: "Ez van nálad is most?  Wow, azép munka!",
		  code: "function drawBranch(l, direction) {\n  c.save();\n  \n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n  if ( l > 5 ) {\n    drawBranch(l * 0.8, -direction);\n    \n    c.rotate(0.5 * direction);\n    drawBranch(l * 0.7, -direction);\n  }\n  \n  c.restore();\n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n",
		},
		{ message: "Próbálj többet játszani vele! Próbáld megváltozatni a 0.8-as, a 0.7-es, és a 0.5-ös értéket, hogy lássad mi történik!",
		  lessonSection: "Játssz a saját fáddal",
		},
		{ message: "Nézd! Zöld levelek az ágak végein!",
		  code: "function drawBranch(l, direction) {\n  c.save();\n  c.fillRect(-1, 0, 2, -l);\n  c.translate(0, -l);\n  if (l > 5) {\n    drawBranch(l * 0.8, -direction);\n    c.rotate(0.5 * direction);\n    drawBranch(l * 0.7, -direction);\n  } else {\n    c.fillStyle = \"green\";\n    c.fillRect(-2, -2, 4, 4);\n  }\n  c.restore();\n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n",
		},
		{ message: "Látod, ez hogyan működik? A kicsi 4-es méretű zöld négyzetek a levelek! Őket csak akkor adtuk hozzá, amikor elértük az ág végét.",
		},
		{ message: "Barnára (brown) tudod színezni az ágakat?",
		},
		{ message: "Hadd mutassak neked egy valódi \"király\" dolgot, ez csak egy kis változtatás ahhoz képest, amit csináltál!",
		  code: "function drawBranch(l) {\n  // Tedd a hosszabb ágakat szélesebbé\n  var w = 0.5 + l / 30;\n  c.fillRect(w / 2, 0, w, -l);\n  c.save();\n  c.translate(0, -l);\n  if (l > 1) {\n    // Indulj -80 foknál\n    var a = -Math.PI * 4 / 9;\n    // Rajzolj három ágat\n    for (var i = 0; i < 3; i = i + 1) {\n      // Az új ágaink hossza\n      var l2 = l * 0.5;\n      // Tedd a középső ágat nagyobbá\n      if (i == 1) { l2 = l2 + 0.3 * l; }\n      \n      c.save();\n      c.rotate(a);\n      drawBranch(l2);\n      c.restore();\n      \n      // Adj 90 fokot a következő ágra\n      a = a + Math.PI / 2;\n    }\n  }\n  c.restore();\n}\n\nc.fillStyle = \"green\";\nc.translate(170, 270);\ndrawBranch(60);\n",
		  lessonSection: "Móka páfrányokkal",
		},
		{ message: "Ezt a páfrányt úgy rajzoltuk, hogy minden egyes ághoz három ágat rajzoltunk, mindegyiket elforgattuk -80, 10, és 100 fokkal.  Látod, ez hogyan működik?",
		},
		{ message: "Mindenkor amikor egy ágat rajzol, három további ágat rajzol, az adott ág végétől.  Ezt folyamatosan csinálja és csinálja, kisebbet és kisebbet, és te megkapod azt, ami úgy néz ki mint egy páfrány!",
		},

		// Fractals
		{ message: "Az összes ilyen dolog a fákkal és a páfrányokkal egy tipikus minta, amit <i>fractal</i>-nak hívnak. A fraktálok bolondos \"király\" mókák a matematikával.",
		  lessonSection: "Fraktálok",
		},
		{ message: "Ezt a fraktált Terdragon-nak hívják.",
		  code: "var n = 8;\nvar l = 5;\nvar angle = 120 * Math.PI / 180;\n\nc.translate(300, 200);\nterdragon(n);\nfunction terdragon(n) {\n  if (n <= 1) {\n    drawLine(l);\n  } else {\n    terdragon(n-1);\n    c.rotate(angle);\n    terdragon(n-1);\n    c.rotate(-angle);\n    terdragon(n-1);\n  }\n}\nfunction drawLine(l) {\n  c.beginPath();\n  c.moveTo(0, 0);\n  c.lineTo(l, 0);\n  c.stroke();\n  // Finish at the end of the line we drew\n  c.translate(l, 0);\n}\n"
		},
		{ message: "Ha l értéke nagyobb, akkor bele tudsz nagyítani és láthatod ez kicsi háromszögekből épül fel!",
		},
		{ message: "Ki tudod találni, ez hogyan működik? Vess egy pillatnást a kódra.",
		},
		{ message: "Próbáld <span class=tutor-code>l=10</span> megadásával és utána az <span class=tutor-code>n=1</span> és azután  <span class=tutor-code>n=2</span> azután <span class=tutor-code>n=3</span>, és látni fogod ez hogyan növekszik.",
		},

		// Quiz
		{ message: "Okay, itt az idő az utolsó tesztre.  Ez nehéz, így ne aggódj, ha nem tudod befejezni.  Számos jó dolog lesz majd ezek után.  Bármit is csinálsz, ne hagyd itt abba, biztosíts , hogy tovább folytatod, így láthatod az összes mókás dolgot!",
		  code: "",
		  lessonSection: "Teszt: Kihívás probléma",
		},
		{ message: "A teszten, azt akarom, hogy írj valamit teljesen magadtól.  Csinálj egy sakktábla mintát, egy fekete négyzet, utan egy fehár, utána egy fekete, és így tovább, legalább 4 sor ezekből  (például  6 x 4 -es rács).  Meg tudod ezt csinálni?",
		  code: ""
		},
		{ message: "Ha megcsináltad, jó munka, ez tényleg nehéz, El vagyok ragadtatva!  Ha nem kaptad ezt meg, ne aggódj, itt egy tipp, két for ciklusra lehet szükséged, egyik a másikon belül, legalább egy c.fillRect() utasítást fogsz használni, és ne felejtsd el egy  for ciklus valahogy így néz ki <span class=tutor-code>for (var i = 0; i < 3; i += 1) { }</span>",
		},
		{ message: "Kész vagy arra, hogy megnézz egy eltérő módszert a megoldásra?",
		},
		{ message: "Íme egy módszer.  Látod, ez hogyan működik?",
		  code: "var size = 50;\n\nfor (var i = 0; i < 300; i = i + 100) {\n  for (var j = 0; j < 200; j = j + 100) {\n    fillSquare(i, j, size);\n  }\n}\nfor (var i = 50; i < 300; i = i + 100) {\n  for (var j = 50; j < 200; j = j + 100) {\n    fillSquare(i, j, size);\n  }\n}\n\nfunction fillSquare(x, y, s) {\n  c.fillRect(x, y, size, size);\n}\n",
		  lessonSection: "Számos módja van a kódolásnak",
		},
		{ message: "Ha nem, próbáld megjegyzéssé tenni az egyik fillSquare() sort (a <span class=tutor-code>//</span>) írásjelek használatával, így láthatod azt, hogy a másik mit rajzol.",
		},
		{ message: "Ez az első és a harmadik sort rajzolja, (0, 0)-val kezdve, azután folytatva a (0, 100)-zal, azután folytatva a (100, 0)-val, azután a (100, 100)-zal, és így tovább.  Azután megrajzolja a második és a negyedik sort , kezdve a (50, 50)-nel, azután a (50, 150)-nel, és így tovább.  Érted már?",
		},
		{ message: "Nézzük meg a sakktábla készítés néhány további módját.  Íme egy másik verzió.Látod, ez hogyan működik?",
		  code: "var size = 50;\n\nfor (var i = 0; i < 3; i = i + 1) {\n  for (var j = 0; j < 2; j = j + 1) {\n    var x = i * 2 * size;\n    var y = j * 2 * size;\n    fillSquare(x, y, size);\n    x = x + size;\n    y = y + size;\n    fillSquare(x, y, size);\n  }\n}\n\nfunction fillSquare(x, y, s) {\n  c.fillRect(x, y, size, size);\n}\n"
		},
		{ message: "A cikluson keresztül mindenkor két négyzetet rajzol, alatta és a másiktól jobbra.",
		},
		{ message: "Azután, ez megcsinálja ezt háromszor keresztbe és kétszer lefelé, a fehér négyzeteket átugorva.  \"Király\", huh?",
		},

		// Modulo
		{ message: "Íme még egy másik módszer a sakktábla készítésre.  Bármilyen ötlet, ez hogyan működik?  Mit csinál az <span class=tutor-code>i % 2</span> utasítás ?",
		  code: "var size = 50;\n\nfor (var i = 0; i < 6; i = i + 1) {\n  for (var j = 0; j < 4; j = j + 1) {\n    if ((i % 2 + j % 2) % 2) {\n      var x = i * size;\n      var y = j * size;\n      fillSquare(x, y, size);\n\n    }\n  }\n}\n\nfunction fillSquare(x, y, s) {\n  c.fillRect(x, y, size, size);\n}\n",
		  lessonSection: "Modulo",
		},
		{ message: "A <span class=tutor-code>%</span> modulot jelent, ez a maradékot adja vissza az osztás után.",
		},
		{ message: "Így, az <span class=tutor-code>1 % 2</span> értéke 1, a <span class=tutor-code>2 % 2</span> értéke 0 (mivel a 2 osztva  2-vel  maradék nélkül osztható),  a <span class=tutor-code>3 % 2</span> értéke ismét 1, a <span class=tutor-code>4 % 2</span> értéke 0.",
		},
		{ message: "Szóval, hogyan működik ez a  -- <span class=tutor-code>(i % 2 + j % 2) % 2</span> -- komplikált kifejezés? Amikor i páros, az <span class=tutor-code>i % 2</span> 0 értékű lesz. Ugyanez igaz j-re.  Ha mindkettő páratlan, akkor az eredmény (1 + 1) % 2, értéke 0. Így , a kifejezés értéke 0 lesz, ha mind az i mind a j páros vagy mind az i mind a  j páratlan.",
		},
		{ message: "Az if állítás miatt, 0 false-ot jelent és minden más true-t.  Szóval, végrehajtjuk azt, ami az if állításon belül van akkor , amikor az i vagy j egyike páratlan.",
		},
		{ message: "Szóval, ez azt csinálja, hogy meglátogat minden négyzetet a 6x4-es rácson, de csak akkor rajzol egy fekete négyzetet arra a négyzetre, ahol akár az oszlop sorszám akár a sor sorszám páratlan, de nem mindkettő.  Most már érted?",
		},
		{ message: "Látod, hogy mennyi módja van annak, hogy megoldjál egy ilyen problémát?  Általában nem csak egy megoldás van valamire , amit  meg akarsz csinálni, számos stratégia működhet. Ez ugye takaros?",
		},

		// Animation
		{ message: "Okay, itt az idő a mókára! Animáljunk!",
		  code: "",
		  lessonSection: "Animáció",
		  // tutorImage: 8,
		},
		{ message: "Mozgó dolog mókás, de egy kicsit furcsa. Megközelítőleg egy másodperc minden egyes 1/20-ad részében valaminek történnie kell. Mi csinálja ezt?",
		  code: "var vx = 4;\nvar vy = 1;\nvar step = 50;  // In milliseconds\n\nvar x = 0;\nvar y = 0;\nvar size = 50;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\ndrawStep();\nfunction drawStep() {\n  // Clear the screen\n  c.clearRect(0, 0, w, h);\n  // Draw the box\n  c.strokeRect(x, y, size, size);\n  // Move the box unless at edge\n  if (x + vx + size < w &&\n      y + vy + size < h) {\n    x += vx;\n    y += vy;\n    clearTimeout(cmTID);\n    // Do it again in a little bit\n    cmTID = setTimeout(drawStep, step);\n  }\n}\n",
		  hiddenCode: "var c = document.getElementById('pane').getContext('2d');\ndocument.stopAnimation = function() {clearTimeout(cmTID);};\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n"
		},
		{ message: "A mód ahogy ez működik: mindenkor, amikor  azt mondjuk, hogy hajtsd végre a drawStep()-et, mi töröljük a képernyőt, mozgatjuk a dobozt, rajzoljuk a dobozt, és, hacsak nem értintjük a szélét, mi azt mondjuk, hogy csinálj drawStep()-et ismét egy kicsivel később.",
		},
		{ message: "Próbáld megváltoztatni a <span class=tutor-code>vx</span>, a <span class=tutor-code>vy</span>, és a <span class=tutor-code>step</span> értékét. Megváltoztathatod a doboz sebességét és különböző irányokba mozgathatod!"
		},
		{ message: "Próbáld megjegyzéssé tenni a clearRect()-et.  Ez egyfajta \"király\" dolog, ugye?"
		},


		// Spin a box
		{ message: "Egy doboz forgatása az mókás.  Meg tudod azt csinálni, hogy gyorsabban menjen ?",
		  code: "var step = 100;\nvar angle = 0.01;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nc.translate(w / 2, h / 2);\ndrawStep();\nfunction drawStep() {\n  c.clearRect(-w / 2, -h / 2, w, h);\n  c.strokeRect(-50, -50, 100, 100);\n  c.rotate(angle);\n  clearTimeout(cmTID);\n  cmTID = setTimeout(drawStep, step);\n}\n",
		  lessonSection: "Forgatás mozgatás",
		},
		{ message: "Ez ugyanúgy működik, mint egy doboz mozgatása.  Mindenkor azt mondjuk, hogy hajtsd végre a drawStep()-et, ez törli a képernyőt, forgat, rajzol egy dobozt, és azután azt mondja hajtsd végre a drawStep()-et ismét egy kicsivel később.",
		},
		{ message: "Mi történik akkor, ha megjegyzéssé teszed a clearRect()-et?",
		},
		{ message: "Próbálj hozzáadni további dobozokat. Ez azt csinálta, amit elvártál?",
		  code: "var step = 100;\nvar angle = 0.01;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nc.translate(w / 2, h / 2);\ndrawStep();\nfunction drawStep() {\n  c.clearRect(-w / 2, -h / 2, w, h);\n  c.strokeRect(-50, -50, 100, 100);\n  c.rotate(angle);\n  clearTimeout(cmTID);\n  cmTID = setTimeout(drawStep, step);\n}\n",
		},
		{ message: "Ezt a változatot szeretem.  Ez olyan, mint a naprendszer!  Most próbáld a sebességet megváltoztatni!",
		  code: "var step = 100;\nvar angle = 0.01;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nc.translate(w / 2, h / 2);\ndrawStep();\nfunction drawStep() {\n  c.clearRect(-w / 2, -h / 2, w, h);\n  c.strokeRect(-20, -20, 40, 40);\n  c.fillRect(10, 100, 5, 5);\n  c.fillRect(-50, -70, 5, 5);\n  c.fillRect(50, 30, 5, 5);\n  c.rotate(angle);\n  clearTimeout(cmTID);\n  cmTID = setTimeout(drawStep, step);\n}\n",
		},

		// Intro to objects
		{ message: "Állj meg egy másodpercre.  Dölj hátra és gondolkozz el azon hogyan hozhatsz létre három mozgó dobozt.",
		  code: "",
		  hiddenCode: "var c = document.getElementById('pane').getContext('2d');\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n",
		  lessonSection: "Objektumok",
		},
		{ message: "Nos, szükséged lesz mindegyik x és y pozíciójára, igaz?  És mindegyik méretére.  És talán mindegyik dx és dy sebességére?  És a szögre?",
		},
		{ message: "Létrehozhatsz változókat x1, x2, x3, y1, y2, y3, dx1 ... ugh.  Ez egészen fájdalmas, nemde?",
		},
		{ message: "Van egy másik módja, hogy ezt megcsináljuk, létrehozhatunk objektumot! Objektumok a változók és a kód kis csomagjai. Íme egy Box objektum.  Vess rá egy pillantást.  Látod, ez hogyan működik?",
		  code: "// Box objektum\nfunction Box(x, y, size) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = 0;\n  this.dx = 0;\n  this.dy = 0;\n}\n// Egy új box létrehozása\nvar b = new Box(10, 10, 100);\nc.strokeRect(b.x, b.y, b.size, b.size);\n"
		},
		{ message: "Mi történik akkor, amikor a <span class=tutor-code>new Box(10, 10, 100)</span> létrehoz egy objektumot, azután azonnal meghívja  a Box() függvényt ,hogy létrehozza azt. Box() ezután használja a <span class=tutor-code>this.x</span>-et, hogy beállítson egy x-nek nevezett változót az objektumban x-hez , amely a függvénynek átadásra került."
		},
		{ message: "Ez ugyanazt a dolgot csinálja, hogy beállítja az összes további változót az új Box objektumunkban.  Amikor egyszer az objektumot létrehoztuk és beállítottuk, mi beállítjuk a <span class=tutor-code>b</span> változónkat hozzá.  Később, mi megkaphatjuk az x és az y és a további változóinkat a <span class=tutor-code>b.x</span>, a <span class=tutor-code>b.y</span>,  stb. használatával."
		},
		{ message: "A box objektumunk az csak a változók egy kicsi csomagja , amely leírja a mi dobozunkat.  Ez megmondja hol van a doboz, a sebességét (dx és dy), hogy milyen nagy, mindent, ami azt jelenti, hogy ez egy doboz.",
		},
		{ message: "Nekünk akár olyan  box objektumaink lehetnek, amelyek tudják hogyan kell saját magukat megrajzolni.",
		  code: "function Box(x, y, size) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = 0;\n  this.dx = 0;\n  this.dy = 0;\n\n  this.stroke = function() {\n    c.strokeRect(this.x, this.y,\n                 this.size, this.size);\n  };\n}\nvar b1 = new Box(30, 30, 120);\nb1.stroke();\n"
		},
		{ message: "Látod hogyan létesíti a <span class=tutor-code>this.stroke</span>-t  mint, egy függvényt?  És ez a függvény meghívja a strokeRect()-et, hogy megrajzolja ezt a dobozt?  Ezután, később, létrehoz egy box-ot, amit b1-nek nevez és megmondja neki, hogy rajzolja meg saját magát a <span class=tutor-code>b1.stroke()</span>-kal. Ez nagyon \"király\", nemde?",
		},
		{ message: "Tudod , monsternek van egy titka.  Monster valamit elrejtett előled.",
		  lessonSection: "Canvas Objektum",
		},
		{ message: "Kiváncsi vagy , hogy miért használjuk a c.strokeRect()-et, hogy egy dobozt rajzoljunk?  Mi az helyzet ezzel a <span class=tutor-code>c.</span>-vel?  Miért van ez ott?",
		},
		{ message: "Ezt mindenkor kikapcsolja, amikor egy objektumot használsz rajzolásra, amit canvas objektumnak hívnak.",
		},
		{ message: "A Monster hozzáadott néhány kódot neked, hogy megkapd a weblapról az adott objektumot és egy  <span class=tutor-code>c</span>-nek nevezett változóba helyezi, így használhatod ezt.  Hadd mutassam meg neked, hogyan néz ki a rejtett kód.",
		  code: "// Ez a kód korábban rejtett volt\nvar pane = document.getElementById('pane');\nvar c = pane.getContext('2d');\n\nfunction Box(x, y, size) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = 0;\n  this.dx = 0;\n  this.dy = 0;\n\n  this.stroke = function() {\n    c.strokeRect(this.x, this.y,\n                 this.size, this.size);\n  };\n}\nvar b1 = new Box(30, 30, 120);\nb1.stroke();\n",
		},
		{ message: "Ez a kód megkéri a document objektumot (amely a weblap), hogy a weblapon \'pane\'-nek hívott elemet adja nekünk (a \'pane\' az id(azonosítója)-ja a canvas(rajzvászon)-nak a weblapon ahová mi rajzolunk), és ezután megkapja 2d rajzvásznat az adott elemtől. A canvas objektumot <span class=tutor-code>c</span>-nek hívjuk és felhsználjuk az összes rajzoló funkcióját, ez az amiért mi <span class=tutor-code>c.</span>-ot használjuk  minden strokeRect() használat előtt."
		},
		{ message: "Ez hasznos, hogy tudjad, ha saját Javascript programodat írod később a saját rajzolásod miatt  egy weboldalon!  De, most, rejtsük el ismét, így mi a Box objektumokra tudunk koncentrálni.",
		  code: "function Box(x, y, size) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = 0;\n  this.dx = 0;\n  this.dy = 0;\n\n  this.stroke = function() {\n    c.strokeRect(this.x, this.y,\n                 this.size, this.size);\n  };\n}\nvar b1 = new Box(30, 30, 120);\nb1.stroke();\n",
		  lessonSection: "Obejtumok használata",
		},
		{ message: "Létre tudsz hozni pár box-ot, amelyek meg tudját saját magukat rajzolni? Mindegyikre, használnod kell a new and stroke() utasításokat, ahogy mi tettük ezt a box esetében, amit b1-nek hívtunk.",
		},
		{ message: "Ez nagyon csinos, de minden egyes doboz b1, b2, b3 vagy bármelyik hívása fájdalmas. Mi van, ha 10 dobozt akarunk?  Vagy százat?",
		},
		{ message: "Amire szükségem van az egy boxes lista, mint ez!",
		  code: "function Box(x, y, size) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = 0;\n  this.dx = 0;\n  this.dy = 0;\n\n  this.stroke = function() {\n    c.strokeRect(this.x, this.y,\n                 this.size, this.size);\n  };\n}\n// Létrehoz egy üres boxes listát\nvar boxes = [];\n// Létrehoz egy új dobozt és hozzáadja a listánkhoz\nfor (var i = 0; i < 3; i = i + 1) {\n  boxes.push(new Box(i * 30, i * 20, 100));\n}\n// Megmondja az összes boxes-nak, hogy rajzolja meg önmagát\nfor (var i = 0; i < boxes.length; i = i + 1) {\n  boxes[i].stroke();\n}\n",
		  lessonSection: "Listák (Tömbök)",
		},
		// Explain lists/arrays
		{ message: "Íme egy nagy, új dolog.  Monster elmagyarázza.",
		},
		{ message: "A <span class=tutor-code>[]</span> írásjelek létrehoznak valamit, amit egy <i>array (tömb)</i>-nek hivnak, amely alapvetően egy lista, és dolgokat tárol.  Ezek a listák objektumokat, számokat, bármit amit akarsz is tárolhatnak.",
		},
		{ message: "Így, a <span class=tutor-code>var boxes = []</span>  egy üres lista létrehozását jelenti, amit <span class=tutor-code>boxes</span>-nak hívnak.",
		},
		{ message: "A <span class=tutor-code>boxes.push()</span> hozzáad valamit a lista végére.  Itt, arra használjuk, hogy hozzáadjunk egy új dobozt.  Mivel ez egy for ciklusban van, amely elszámol 0, 1, 2-ig és azután megáll, mi hozzá fogunk adni három dobozt a lista végére.",
		},
		{ message: "Vess egy pillantást a második for ciklusra. A <span class=tutor-code>boxes.length</span> a lista hossza. A <span class=tutor-code>boxes[0]</span> az első doboz a listában, a <span class=tutor-code>boxes[1]</span> a második, és így tovább.  Így, a második for ciklus végigmegy a listában lévő minden egyes dobozon és megmondja neki, hogy rajzolja meg saját magát a <span class=tutor-code>boxes[i].stroke();</span> hívásával.",
		},
		{ message: "Hozzá tudsz adni néhány további dobozt?",
		},

		// Boxes should rotate themselves, move themselves, update themselves
		{ message: "Eddig, mi valójában nem csináltuk meg annyit, amit a Box obejektumot igényelnek.  De lépjünk tovább.  Csináljunk dobozokat, amelyeket animálunk és mozognak!",
		  lessonSection: "Eljárások (methods) az objektumokra",
		},
		{ message: "Kezdjük el megrajzolni a dobozainkat, bármilyen szöget feltételezve nekik. Látod, hogyan működik a stroke() új változata?",
		  code: "function Box(x, y, size, a) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = a;\n  this.dx = 0;\n  this.dy = 0;\n\n  this.stroke = function() {\n    c.save();\n    // Találd meg a doboz középét\n    var x = this.x + this.size / 2;\n    var y = this.y + this.size / 2;\n    // Mozogj a doboz közepéhez\n    c.translate(x, y);\n    // Forgasd a dobozt a középpontja körül\n    c.rotate(this.angle);\n    // Rajzold meg a dobozt a közepe körül\n    c.strokeRect(-this.size / 2, -this.size / 2,\n                 this.size, this.size);\n    c.restore();\n  };\n}\n\nvar boxes = [];\nfor (var i = 1; i < 6; i = i + 1) {\n  var a = Math.random() * 2 - 1;\n  boxes.push(new Box(i * 50, i * 30, 100, a));\n}\nfor (var i = 0; i < boxes.length; i = i + 1) {\n  boxes[i].stroke();\n}\n"
		},
		{ message: "Amikor megmondjuk egy box-nak, hogy rajzolja meg önmagát, mi ezt a doboz közepébe mozgatásával, ezen közép körüli forgatással végezzük, hogy illeszkedjen a doboz szögéhez (angle), és utána a dobozt megrajzoljuk a közepe körül.  Hasonlóan, amit mi korábban  a forgatott dobozokkal csináltunk , igaz?",
		},
		{ message: "Most pörgessük a dobozt!  Nézd az új függvényt updateAll(). Látod, hogy ez mit csinál?",
		  code: "var rotateSpeed = 0.02;\nvar timeStep = 50; // Milliszekundumban\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nfunction updateAll() {\n  c.clearRect(0, 0, w, h);\n  for (var i = 0; i < boxes.length; i = i + 1) {\n    boxes[i].angle += rotateSpeed;\n    boxes[i].stroke();\n  }\n  clearTimeout(cmTID);\n  cmTID = setTimeout(updateAll, timeStep);\n}\n\n// A boxes létrehozása\nvar boxes = [];\nfor (var i = 1; i < 6; i = i + 1) {\n  var a = Math.random() * 2 - 1;\n  boxes.push(new Box(i * 50, i * 30, 100, a));\n}\n// Csináld meg az első update-et\nupdateAll();\n\nfunction Box(x, y, size, a) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = a;\n  this.dx = 0;\n  this.dy = 0;\n\n  this.stroke = function() {\n    c.save();\n    // Találd meg a doboz közepét\n    var x = this.x + this.size / 2;\n    var y = this.y + this.size / 2;\n    // Mozogj a doboz közepéhez\n    c.translate(x, y);\n    // Forgasd a dobozt a közepe körül\n    c.rotate(this.angle);\n    // Rajzold meg a dobozt a közepe körül\n    c.strokeRect(-this.size / 2, -this.size / 2,\n                 this.size, this.size);\n    c.restore();\n  };\n}\n",
		  hiddenCode: "var c = document.getElementById('pane').getContext('2d');\ndocument.stopAnimation = function() {clearTimeout(cmTID);};\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n"
		},
		{ message: "Az updateAll() a képernyő törlésével indul, azután mindegyik dobozt forgatja egy kicsit tovább mielőtt megrajzolná azt. Végül, azt mondja, hívj meg ismét 1/20-ad másodperc múlva.  Így, 20-szor egy másodpercben, mindegyik dobozt forgatjuk egy kicsit és újrarajzoljuk azt.  \"Király\", huh?",
		},
		{ message: "Meg tudod csinálni, hogy a dobozok gyorsabban forogjanak?",
		},
		{ message: "Meg tudod csinálni, hogy ők az ellentétes irányban forogjanak (óramutató járásával ellentétes, az óramutató járásával megegyező helyett)?",
		},
		{ message: "Hozzá tudsz adni további dobozokat?  Három dolgot kell kicserélned ahhoz, hogy az összes illeszkedjen a rajzvászonra,  de fogadom ezt ki tudod találni.  60-nal szerettem ezt, valóban természet felettinek néz ki!",
		},
		{ message: "Az összes gyorsan pörgő doboz elszédíti a Monstert. Lassítsd le ezt ismét és hadd mutassak valami mást.  Az update-et elmozgathatjuk minden egyes Box objektumba. Ez akkor hasznos, amikor tudjuk, hogy az update többet csinál. Látod ez mit csinál most?",
		  code: "var rotateSpeed = 0.01;\nvar timeStep = 50; // Milliszekundumban\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nfunction updateAll() {\n  c.clearRect(0, 0, w, h);\n  for (var i = 0; i < boxes.length; i = i + 1) {\n    boxes[i].update();\n  }\n  clearTimeout(cmTID);\n  cmTID = setTimeout(updateAll, timeStep);\n}\n\n// A boxes létrehozása\nvar boxes = [];\nfor (var i = 1; i < 6; i = i + 1) {\n  var a = Math.random() * 2 - 1;\n  boxes.push(new Box(i * 50, i * 30, 100, a));\n}\n// Csináld meg az első frissítést\nupdateAll();\n\nfunction Box(x, y, size, a) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = a;\n  this.dx = 0;\n  this.dy = 0;\n\n  this.update = function() {\n    this.angle += rotateSpeed;\n    this.stroke();\n  };\n  \n  this.stroke = function() {\n    c.save();\n    var x = this.x + this.size / 2;\n    var y = this.y + this.size / 2;\n    c.translate(x, y);\n    c.rotate(this.angle);\n    c.strokeRect(-this.size / 2, -this.size / 2,\n                 this.size, this.size);\n    c.restore();\n  };\n}\n",
		},
		{ message: "Az updateAll() csak meghívja a box update()-jét. Az update() a box-ban megváltoztatja a szöget(angle) és azután megrajzolja a dobozt.  Most minden doboz tudja, hogy kell frissíteni és megrajzolni saját magát.",
		},
		{ message: "Mozgattassuk is a dobozokat!  Csak annyit kell tenned, hogy az update használja a  <span class=tutor-code>dx</span> és a  <span class=tutor-code>dy</span> változókat.  Vess egy pillantást a <span class=tutor-code>Box</span>-ra és nézd hogyan frissül most!",
		  code: "function Box(x, y, size, a, dx, dy, da) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = a;\n  this.dx = dx;\n  this.dy = dy;\n  this.da = da;\n\n  this.update = function() {\n    this.angle += this.da;\n    this.x = this.x + this.dx;\n    this.y = this.y + this.dy;\n    // Ütközés a széleknél\n    if (this.x < 0 ||\n        this.x + this.size > w) {\n      this.dx = -this.dx;\n      this.da = -this.da;\n    }\n    if (this.y < 0 ||\n        this.y + this.size > h) {\n      this.dy = -this.dy;\n      this.da = -this.da;\n    }\n    this.stroke();\n  };\n  \n  this.stroke = function() {\n    c.save();\n    var x = this.x + this.size / 2;\n    var y = this.y + this.size / 2;\n    c.translate(x, y);\n    c.rotate(this.angle);\n    c.strokeRect(-this.size / 2, -this.size / 2,\n                 this.size, this.size);\n    c.restore();\n  };\n}\n\nvar timeStep = 50; // Milliszekundumban\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nfunction updateAll() {\n  c.clearRect(0, 0, w, h);\n  for (var i = 0; i < boxes.length; i = i + 1) {\n    boxes[i].update();\n  }\n  clearTimeout(cmTID);\n  cmTID = setTimeout(updateAll, timeStep);\n}\n\n// Hozd létre a dobozokat\nvar boxes = [];\nvar s = 80;\nfor (var i = 0; i < 3; i = i + 1) {\n  var x = Math.random() * (w - s);\n  var y = Math.random() * (h - s);\n  var a = Math.random() * 2 - 1;\n  var dx = Math.random() * 2 - 1;\n  var dy = Math.random() * 2 - 1;\n  var da = 0.1 * (Math.random() * 2 - 1);\n  boxes.push(new Box(x, y, s, a, dx, dy, da));\n}\n// Csináld meg az első frissítést\nupdateAll();\n\n",
		  lessonSection: "Sebesség és ütközések",
		},
		{ message: "Ez egy kicsit komplikáltabb, de csak egy kicsit.  Mindenkor, amikor egy box-nak megmondják, hogy update()-t csináljon, ez mozog a saját sebességével (<span class=tutor-code>dx</span> és <span class=tutor-code>dy</span>) és forog a szögsebességével (<span class=tutor-code>da</span>).",
		},
		{ message: "Ha egy doboz elmegy a képernyő szélésig, mi megfordítjuk a sebességeket, úgy csinálva, hogy ütközésnek tünjön!  \"Király\"!",
		},

		// Bitwise operators
		{ message: "Egy dolog van, ami új itt.  Amikor a doboz ellenőrzi ha a képernyő szélénél van, ott van valami, amit nem láttál korábban, <span class=tutor-code>||</span>",
		  lessonSection: "Bitenkénti műveletek (And(És) és  Or(Vagy))",
		},
		{ message: "A <span class=tutor-code>||</span> jelenti az <i>or</i>-t (a vagyot) , mint az akár-akár, így az első állítás ellenőrzi azt, ha a doboz kiment akár a bal szélen, akár a jobb szélen, és a második ellenőrzi, ha ez kiment akár felül, akár alul.  Érted?",
		},
		{ message: "Van egy módja annak, hogy  <i>and(és)</i>-t is használjunk, amelyben mindkettőnek true-nak kell lennie, ez a  <span class=tutor-code>&&</span>.  Így, a <span class=tutor-code>||</span> az <i>or(vagy)</i>-t jelenti és a <span class=tutor-code>&&</span> az <i>and(és)</i>-t jelenti.",
		},

		// Play with bouncing boxes
		{ message: "Vissza a mókához. Kipróbáltad már , hogy sok dobozt helyezel be?  Próbáld ki!  Csináld, igy van 10 doboz!  Vagy 50!",
		  lessonSection: "Objektumokkal könnyű",
		},
		{ message: "Látod, hogy milyen könnyű az összes doboz nyomonkövetése, a pozíciójuk, szögük, sebességük, és minden egyéb, amelyek objektumokat használnak?  Egyszer, amikor megmondod azt, hogy mi egy Box objektum, utána könnyű többet és többet létrehozni belőlük!",
		},

		// Do physics with bouncing ball, three types of collision
		{ message: "Közel vagy a leckék végéhez.  De van még néhány mókás dolog, amit szeretnék neked megmutatni.",
		  code: "",
		  hiddenCode: "var c = document.getElementById('pane').getContext('2d');\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n",
		  lessonSection: "Körök, körívek és labdák",
		  // tutorImage: 1,
		},
		{ message: "Most, hogy ismered az objektumokat sebesség elemmel, mi aktuálisan tényleg közel vagyunk ahhoz, hogy képesek legyünk \"király\" dologkat csinálni, mint a labda visszapattanása.  Amire szükségünk van ez egy kis fizika, some acceleration to go with our velocities!",
		},
		{ message: "Íme egy <span class=tutor-code>Ball</span> objektum.  Ez sokban olyan, mint a Box objektum amit korábban láttad, de vannak különbségek.  Vess egy pillantást a kódra.",
		  code: "function Ball(x, y, r, dx, dy) {\n  this.x = x;\n  this.y = y;\n  this.r = r;\n  this.dx = dx;\n  this.dy = dy;\n\n  this.update = function() {\n    this.x = this.x + this.dx;\n    this.y = this.y + this.dy;\n    // Visszapattanás a széleknél\n    if (this.x - this.r < 0 ||\n        this.x + this.r > w) {\n      this.dx = -this.dx;\n    }\n    if (this.y - this.r < 0 ||\n        this.y + this.r > h) {\n      this.dy = -this.dy;\n    }\n    this.stroke();\n  };\n  \n  this.stroke = function() {\n    c.beginPath();\n    c.arc(this.x, this.y, this.r,\n                 0, Math.PI * 2);\n    c.stroke();\n  };\n}\n\nvar timeStep = 50; // Milliszekundumban\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nfunction updateAll() {\n  c.clearRect(0, 0, w, h);\n  for (var i = 0; i < balls.length; i = i + 1) {\n    balls[i].update();\n  }\n  clearTimeout(cmTID);\n  cmTID = setTimeout(updateAll, timeStep);\n}\n\n// A labdák létrehozása\nvar balls = [];\nvar r = 40;\nfor (var i = 0; i < 1; i = i + 1) {\n  var x = Math.random() * (w - r * 2) + r;\n  var y = Math.random() * (h - r * 2) + r;\n  var dx = Math.random() * 2 - 1;\n  var dy = Math.random() * 2 - 1;\n  \n  balls.push(new Ball(x, y, r, dx, dy));\n}\n// Csináld meg az első frissítést\nupdateAll();\n\n",
		  hiddenCode: "var c = document.getElementById('pane').getContext('2d');\ndocument.stopAnimation = function() {clearTimeout(cmTID);};\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n"
		},
		{ message: "Egy lényeges különbség van, mivel a labda kerek, így a szög nem számít.  Nézd meg a kódot. Nincs a továbbiakban szög, igaz?",
		},
		{ message: "A másik nagy különbség az az, hogy az arc()-ot használjuk arra, hogy kört rajzoljon.  Az Arc utasítás \"király\", egy kicsit komplikált csak egy kör rajzolására. Hadd magyarázzam meg, hogyan működik.",
		},
		{ message: "Javascriptben ahhoz, hogy egy kört rajzolj, meghívod a <span class=tutor-code>c.arc(x, y, r, 0, Math.PI * 2);</span>-ot, ahol (x, y) a kör középpontja, r a sugara, és ezután 0 és a <span class=tutor-code>Math.PI * 2</span> megmondja azt, hogy rajzolj egy körívet 0 foktól 360 fokig (mivel 2 * pi radiánban  360 fok).",
		},
		{ message: "Mivel mi a középpontból rajzoljuk a köröket, egy csokor egyéb dolog megváltozik, úgy mint pontosan hogyan kell ellenőriznünk vajon a széleknél vissza kell-e pattanni.",
		},
		{ message: "Vess egy pillantást ismét a kódra.  Most jobban érthető?",
		},
		{ message: "Okay, most mi visszapattanó labdákat csinálunk.  Hogy kezejük a fizikát, szükségünk van sebességra és gyorsulásra.  Eddig , volt sebességünk, de nincs gyorsulásunk.  Adjuk hozzá a gyorsulást!  Íme itt van!",
		  code: "function Ball(x, y, r, dx, dy) {\n  this.x = x;\n  this.y = y;\n  this.r = r;\n  this.dx = dx;\n  this.dy = dy;\n\n  this.update = function() {\n    // Visszapattanás a széleknél\n    if (this.x - this.r + this.dx < 0 ||\n        this.x + this.r + this.dx > w) {\n      this.dx = -this.dx;\n    }\n    if (this.y - this.r + this.dy < 0 ||\n        this.y + this.r + this.dy > h) {\n      this.dy = -this.dy;\n    } else {\n      // Csak a gravitáció a mi gyorsulásunk\n      this.dy += gravity;\n    }\n    \n    this.x = this.x + this.dx;\n    this.y = this.y + this.dy;\n    \n    this.stroke();\n  };\n  \n  this.stroke = function() {\n    c.beginPath();\n    c.arc(this.x, this.y, this.r,\n                 0, Math.PI * 2);\n    c.stroke();\n  };\n}\n\nvar gravity = 0.05;\nvar timeStep = 25; // Milliszekundumban\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nfunction updateAll() {\n  c.clearRect(0, 0, w, h);\n  for (var i = 0; i < balls.length; i = i + 1) {\n    balls[i].update();\n  }\n  clearTimeout(cmTID);\n  cmTID = setTimeout(updateAll, timeStep);\n}\n\n// A labdák létrehozása\nvar balls = [];\nvar r = 40;\nfor (var i = 0; i < 1; i = i + 1) {\n  var x = Math.random() * (w - r * 2) + r;\n  var y = Math.random() * (h - r * 2) + r;\n  var dx = Math.random() * 2 - 1;\n  var dy = Math.random() * 2 - 1;\n  \n  balls.push(new Ball(x, y, r, dx, dy));\n}\n// Csináld meg az első frissítést\nupdateAll();\n\n",
		  lessonSection: "Gyorsulás, sebesség és fizika",
		},
		{ message: "Látod?  Most, mindig, amikor mi frisítünk (update()) egy Ball-on (és a labda nem pattan vissza, hogy egyszerűsítsük a dolgokat), megváltoztatjuk a leszálló sebességet (<span class=tutor-code>dy</span>) mindenkori gravitációval.",
		},
		{ message: "Nagyon \"király\"!  Próbálj 10-15 labdát hozzáadni és figyeld egy kis ideig.  Ez egy teljes fizika szimuláció gravitációval és ütközéssel!  Nagyon mókás!",
		},
		{ message: "Hadd mutassak be még valamit, mielőtt tovább lépünk a visszapattanó labdáktól.  Amit részleges rugalmas ütközésnek hívnak.",
		  code: "function Ball(x, y, r, dx, dy) {\n  this.x = x;\n  this.y = y;\n  this.r = r;\n  this.dx = dx;\n  this.dy = dy;\n\n  this.update = function() {\n    // Bounce off the edges\n    if (this.x - this.r + this.dx < 0 ||\n        this.x + this.r + this.dx > w) {\n      this.dx = -this.dx * friction;\n    }\n    if (this.y - this.r + this.dy < 0 ||\n        this.y + this.r + this.dy > h) {\n      this.dy = -this.dy * friction;\n    } else {\n      // Csak a gravitáció a mi gyorsulásunk\n      this.dy += gravity;\n    }\n    \n    this.x = this.x + this.dx;\n    this.y = this.y + this.dy;\n    \n    this.stroke();\n  };\n  \n  this.stroke = function() {\n    c.beginPath();\n    c.arc(this.x, this.y, this.r,\n                 0, Math.PI * 2);\n    c.stroke();\n  };\n}\n\nvar gravity = 0.2;\nvar friction = 0.8;\nvar timeStep = 25; // Milliszekundumban\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nfunction updateAll() {\n  c.clearRect(0, 0, w, h);\n  for (var i = 0; i < balls.length; i = i + 1) {\n    balls[i].update();\n  }\n  clearTimeout(cmTID);\n  cmTID = setTimeout(updateAll, timeStep);\n}\n\n// A labdák létrehozása\nvar balls = [];\nvar r = 40;\nfor (var i = 0; i < 4; i = i + 1) {\n  var x = Math.random() * (w - r * 2) + r;\n  var y = Math.random() * (h - r * 2) + r;\n  var dx = Math.random() * 2 - 1;\n  var dy = Math.random() * 2 - 1;\n  \n  balls.push(new Ball(x, y, r, dx, dy));\n}\n// Csináld meg az első frissítést\nupdateAll();\n\n",
		  lessonSection: "Ütközés és fizika",
		},
		{ message: "A valóságban, amikor dolgok ütköznek, ők általában lassabban pattannak vissza egymásról, mint korábban.  Emiatt, amikor ledobsz egy labdát, ez nem pattog örökké.",
		},
		{ message: "Ha most ránézel a frissített kódra, felhasználunk egy súrlódási erőt, amikor a labda visszapattan a falaknál.  Ez lassabbá teszi őket, mint ahogy megérkeztek. Végül, a labdák mindegyikének leáll a pattogása és lassan elgurulnak alul.",
		},
		{ message: "\"Király\" szimuláció, és hozzáad valamennyi realitást.  Játssz egy kicsit ezzel!  Változtasd meg a súrlódást(friction), adj hozzá további labdákat, növeld a gravitációt(gravity), változtasd meg az ütemet (timeStep).  Try messing around with it!",
		},

		// Do mouse events, boxes attracted to mouse, boxes avoiding other boxes but attracted to mouse.
		{ message: "Az utolsó leckéinkben, foglalkozzunk egy kicsit az egér nyomonkövetésével. Ez sok móka!",
		  code: "",
		  hiddenCode: "var c = document.getElementById('pane').getContext('2d');\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n",
		  lessonSection: "Egér események(events)",
		},
		{ message: "Íme egy labda, ami hozzátapad az egérhez. Mindenkor ammikor az egér mozog, a labdát újrarajzolja az egér tetején.",
		  code: "var pane = document.getElementById('pane');\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\npane.onmousemove = function(evt) {\n  var x = evt.clientX;\n  var y = evt.clientY;\n  \n  c.clearRect(0, 0, w, h);\n  c.beginPath();\n  c.arc(x, y, 40, 0, Math.PI * 2);\n  c.stroke();\n};\n",
		},
		{ message: "Hogyan működik? Ez a pane változó beállításával kezdődik a weblap \'pane\' id-jú eleméhez, amely történetesen a mi rajzvásznunkat tartalmazza.",
		},
		{ message: "A <span class=tutor-code>pane.onmousemove = function(evt) {};</span> tényleg fontos. A kód egy függvényt köt az binds a function to the <i>onmousemove</i> eseményhez(event) a 'pane' elemnél, amely azt jelenti, hogy ezt a függvényt meghívjuk bármikor az egér a rajzvásznon belül mozog.",
		},
		{ message: "A függvényünk ezután lekérdezi az eseményt ahol az egér van (a <span class=tutor-code>clientX</span> és a <span class=tutor-code>clientY</span> adatokat) és rajzol egy nagy kört köré.  Érted?",
		},
		{ message: "Ami tényleg \"király\" ezzel kapcsolatban az az, hogy ezt animációval kombinálhatjuk.  Nézd meg ezt!",
		  code: "function Ball(x, y, r, dx, dy) {\n  this.x = x;\n  this.y = y;\n  this.r = r;\n  this.dx = dx;\n  this.dy = dy;\n\n  this.update = function() {\n    // Gyorsulás az egér felé\n    var diffX = mouseX - this.x;\n    var diffY = mouseY - this.y;\n    var dist2 = diffX * diffX + diffY * diffY + 1;\n    var ddx = accel * Math.abs(diffX) *\n              diffX / dist2;\n    var ddy = accel * Math.abs(diffY) *\n              diffY / dist2;\n    \n    // Visszapattanás a széleknél\n    if (this.x - this.r + this.dx < 0 ||\n        this.x + this.r + this.dx > w) {\n      this.dx = -this.dx * friction;\n    } else {\n      this.dx += ddx;\n    }\n    if (this.y - this.r + this.dy < 0 ||\n        this.y + this.r + this.dy > h) {\n      this.dy = -this.dy * friction;\n    } else {\n      this.dy += ddy;\n    }\n    \n    this.x = this.x + this.dx;\n    this.y = this.y + this.dy;\n    \n    // A határok érvényesítése\n    this.x = Math.max(this.r, this.x);\n    this.x = Math.min(w - this.r, this.x);\n    this.y = Math.max(this.r, this.y);\n    this.y = Math.min(h - this.r, this.y);\n    \n    this.stroke();\n  };\n  \n  this.stroke = function() {\n    c.beginPath();\n    c.arc(this.x, this.y, this.r,\n                 0, Math.PI * 2);\n    c.stroke();\n  };\n}\n\nvar accel = 0.1;\nvar friction = 0.8;\nvar mouseX = 0;\nvar mouseY = 0;\nvar timeStep = 25; // Milliszekundumban\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nfunction updateAll() {\n  c.clearRect(0, 0, w, h);\n  for (var i = 0; i < balls.length; i = i + 1) {\n    balls[i].update();\n  }\n  clearTimeout(cmTID);\n  cmTID = setTimeout(updateAll, timeStep);\n}\n\n// A labdák létrehozása\nvar balls = [];\nvar r = 40;\nfor (var i = 0; i < 4; i = i + 1) {\n  var x = Math.random() * (w - r * 2) + r;\n  var y = Math.random() * (h - r * 2) + r;\n  var dx = Math.random() * 2 - 1;\n  var dy = Math.random() * 2 - 1;\n  \n  balls.push(new Ball(x, y, r, dx, dy));\n}\n// Csináld meg az első frissítést\nupdateAll();\n\n// Tárold az egér pozícióját, amikor az egér mozog\nvar pane = document.getElementById('pane');\npane.onmousemove = function(evt) {\n  mouseX = evt.clientX;\n  mouseY = evt.clientY;\n};\n",
		  hiddenCode: "var c = document.getElementById('pane').getContext('2d');\ndocument.stopAnimation = function() {clearTimeout(cmTID);};\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n",
		  lessonSection: "Ugrások és fizika",
		},
		{ message: "Amit ez csinál az az,hogy  mindenkor, amikor az egér a vászon területére mozog, beállítja a <span class=tutor-code>mouseX</span> és a <span class=tutor-code>mouseY</span> értékeit az egér helyzetéhez.",
		},
		{ message: "Azután, amikor mindegyik labdát frissíti, kiszámolja, hogy milyen messze van az egértől, és gyorsít felé.",
		},
		{ message: "A gyorsulás a távolság négyzetgyöke, így azt erősebben vonzza, amikor az tényleg messze van. Képzeld el, mindegyik labdát hozzákötjük egy kis gumi szalaggal vagy rugóval az egérhez.  Ez egy kicsit olyan mint az.",
		},
		{ message: "Próbáld meg kisebbé tenni a labdákat!  És adj hozzá továbbiakat belőlük!  Kb 40 kicsi labdával szeretem az egér vadászatot.",
		},

		// The End
		{ message: "Szép munka! Az is amit tanultál? Élvezetes volt?",
		  code: "",
		  hiddenCode: "var c = document.getElementById('pane').getContext('2d');\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n",
		  lessonSection: "Vége",
		},
		{ message: "Wow, mindent megcsináltál!  Gratulálok, szép munka!  Sok közülük tényleg nehéz. El vagyok ragadtatva, hogy befejezted!  Remélem élvezted!",
		  code: "var pane = document.getElementById('pane');\nvar s = 3;\n\npane.onmousemove = function(evt) {\n  c.fillStyle = randomRGBA();\n  var x = evt.clientX;\n  var y = evt.clientY;\n  c.fillRect(x - s / 2, y - s / 2, s, s);};\n\nfunction randomRGBA() {\n  var r = randInt(255);\n  var g = randInt(255);\n  var b = randInt(255);\n  var a = Math.random();\n  var rgba = [r,g,b,a].join(\",\");\n  return \"rgba(\" + rgba + \")\";\n}\nfunction randInt(limit) {\n  var x = Math.random() * limit;\n  return Math.floor(x);\n}\n"
		},
	];


// To keep JSHint from complaining about variables and functions in
// the hidden code, list them here.  The boolean is whether they can
// be overridden by user code.
var predefForJSHint = {c: true,
					   rgb: true,
					   rgba: true,
					  };


// Images for tutor, referenced by the lessons to switch
// [ This is disabled.  It was too distracting in playtesting.
// still could be used later to switch poses in Code Maven. ]
var tutorImages = [ "i/monster2.png",
				  ];



/*
IDEAS FOR MORE:

onmousedown to clear screen?  Or to make boxes repelled instead of attracted?
Done enough fractals?  If more, snowflake fractal? Dragon curve? Sierpinski's Triangle?
A snake?  First box attracted to mouse, other boxes attracted to previous box?
Birds?  Boxes try to keep distance from each other?
Game of life?  Wolves and sheep?
*/
