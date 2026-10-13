/**
 * Serbian (Latin script) copy for every element.
 * Mirrors src/data/content.ts; discovery years and discoverers are shared.
 */
export type ElementCopySr = {
  name: string;
  summary: string;
  uses: string[];
  fact: string;
  note?: string;
  appearance?: string;
};

export const COPY_SR: Record<string, ElementCopySr> = {
  H: {
    name: "Vodonik",
    summary:
      "Najlakši i najzastupljeniji element u svemiru: jedan proton, jedan elektron i, najčešće, nijedan neutron. Otprilike tri četvrtine sve obične materije je vodonik, a zvezde sijaju tako što ga fuzijom pretvaraju u helijum.",
    uses: [
      "Proizvodnja amonijaka za veštačka đubriva (Haber–Bošov postupak)",
      "Prerada nafte i hidrogenizacija biljnih ulja",
      "Gorivne ćelije i raketno gorivo",
    ],
    fact: "Vodonik u vodi koju pijete star je oko 13,8 milijardi godina: njegovi protoni nastali su u prvoj sekundi posle Velikog praska.",
    note: "Vodonik-3 (tricijum) je radioaktivan, sa vremenom poluraspada od oko 12,3 godine. Koristi se za svetleće brojčanike satova i oznake izlaza u slučaju nužde.",
    appearance: "bezbojan gas",
  },
  He: {
    name: "Helijum",
    summary:
      "Bezbojan, nereaktivan plemeniti gas koji je uočen u Sunčevoj svetlosti tokom pomračenja, 27 godina pre nego što je izdvojen na Zemlji. Drugi je po zastupljenosti element u svemiru.",
    uses: [
      "Hlađenje superprovodnih magneta u aparatima za magnetnu rezonancu",
      "Gas za meteorološke balone i vazdušne brodove",
      "Zaštitni gas pri zavarivanju i otkrivanje curenja",
    ],
    fact: "Ispod −271 °C tečni helijum postaje superfluid koji može da se penje uz zidove posude i preliva preko ivice.",
    appearance: "bezbojan gas, pod visokim naponom svetli crvenonarandžasto",
  },
  Li: {
    name: "Litijum",
    summary:
      "Najlakši metal, dovoljno mek da se seče nožem i dovoljno lak da pluta na ulju. Reaguje sa vodom i vazduhom, pa se čuva pod uljem ili u argonu.",
    uses: [
      "Punjive litijum-jonske baterije",
      "Lekovi za stabilizaciju raspoloženja (litijum-karbonat)",
      "Vatrostalno staklo i keramika",
    ],
    fact: "Litijum je jedan od samo tri elementa nastala u samom Velikom prasku, uz vodonik i helijum.",
    appearance: "srebrnobeo",
  },
  Be: {
    name: "Berilijum",
    summary:
      "Lak, krut, čeličnosiv metal kroz koji rendgenski zraci prolaze gotovo nesmetano. Njegova prašina i jedinjenja su otrovni, pa se sa njim radi veoma pažljivo.",
    uses: [
      "Prozori rendgenskih cevi i detektora",
      "Legure bakra i berilijuma za opruge i alat koji ne varniči",
      "Ogledala svemirskih teleskopa",
    ],
    fact: "Svih 18 segmenata ogledala teleskopa Džejms Veb napravljeno je od berilijuma presvučenog zlatom.",
    appearance: "belosiv, metalnog sjaja",
  },
  B: {
    name: "Bor",
    summary:
      "Tvrd, crn metaloid koji se u prirodi gotovo nikada ne nalazi u čistom obliku; vadi se uglavnom kao boraks i drugi borati. Biljke ne mogu da rastu bez njegovih tragova.",
    uses: [
      "Borosilikatno staklo za laboratorijsko i vatrostalno posuđe",
      "Neodijum-gvožđe-bor magneti",
      "Kontrolne šipke koje upijaju neutrone u nuklearnim reaktorima",
    ],
    fact: "Bor-karbid je toliko tvrd da se koristi u pancirima i oklopima tenkova.",
    appearance: "crnosmeđ",
  },
  C: {
    name: "Ugljenik",
    summary:
      "Okosnica svih poznatih oblika života. Atomi ugljenika se povezuju u lance i prstenove i grade milione jedinjenja, a čist element može biti mek, klizav grafit ili dijamant, najtvrđi prirodni materijal.",
    uses: [
      "Čelik, koji je gvožđe sa malo ugljenika",
      "Goriva poput uglja, nafte i prirodnog gasa",
      "Karbonska vlakna, grafitne olovke i maziva",
    ],
    fact: "I dijamant i grafit su čist ugljenik. Jedina razlika je raspored atoma.",
    note: "Ugljenik-14 je radioaktivan (vreme poluraspada oko 5.730 godina). Merenjem koliko ga je ostalo u kostima, drvetu ili tkanini određuje se starost onoga što je nekada bilo živo.",
  },
  N: {
    name: "Azot",
    summary:
      "Bezbojan gas koji čini oko 78% vazduha. Njegova dva atoma povezana su trostrukom vezom toliko jakom da ga većina živih bića ne može iskoristiti dok ga bakterije ili munje ne razbiju.",
    uses: [
      "Azotna veštačka đubriva",
      "Tečni azot za zamrzavanje hrane i ćelija i za krioterapiju",
      "Inertna atmosfera za pakovanje hrane i proizvodnju elektronike",
    ],
    fact: "Tečni azot ključa na −196 °C, što je dovoljno hladno da cvet pukne kao staklo.",
    appearance: "bezbojan gas, tečnost ili čvrsta materija",
  },
  O: {
    name: "Kiseonik",
    summary:
      "Reaktivan gas koji čini oko 21% vazduha i skoro polovinu mase Zemljine kore. Životinje ga koriste da oslobode energiju iz hrane, a gotovo sav kiseonik u vazduhu nastao je fotosintezom.",
    uses: [
      "Medicinska terapija kiseonikom",
      "Proizvodnja čelika i rezanje gorionikom",
      "Oksidator u raketama, kao tečni kiseonik",
    ],
    fact: "Tečni kiseonik je bledoplav i privlači ga jak magnet.",
  },
  F: {
    name: "Fluor",
    summary:
      "Najreaktivniji i najelektronegativniji od svih elemenata: bledožut gas koji napada gotovo sve, čak i staklo. Nekoliko hemičara je povređeno ili poginulo pokušavajući da ga izdvoji.",
    uses: [
      "Fluorid u pastama za zube i pijaćoj vodi",
      "Nelepljivi PTFE (teflon) premazi",
      "Obogaćivanje uranijuma u obliku uranijum-heksafluorida",
    ],
    fact: "Anri Moasan je 1906. dobio Nobelovu nagradu za hemiju zato što je konačno izdvojio fluor.",
  },
  Ne: {
    name: "Neon",
    summary:
      "Inertan plemeniti gas koji svetli jarko crvenonarandžasto kada kroz njega prolazi struja. Na Zemlji je redak i dobija se iz tečnog vazduha.",
    uses: [
      "Neonske reklame (čist neon daje crvenonarandžaste)",
      "Helijum-neonski laseri",
      "Indikatori visokog napona i vakuumske cevi",
    ],
    fact: "Većina „neonskih“ reklama drugih boja zapravo koristi argon, živinu paru ili obojeno staklo.",
    appearance: "bezbojan gas, pod visokim naponom svetli narandžastocrveno",
  },
  Na: {
    name: "Natrijum",
    summary:
      "Mek, srebrnast alkalni metal koji burno reaguje sa vodom. Vezan sa hlorom postaje kuhinjska so, a joni natrijuma prenose električne signale kroz vaše nerve.",
    uses: [
      "Kuhinjska so i hemijska industrija zasnovana na njoj",
      "Žute natrijumove ulične svetiljke",
      "Rashladno sredstvo u nekim brzim nuklearnim reaktorima",
    ],
    fact: "Njegov simbol, Na, potiče od latinskog natrium, naziva za sodu.",
    appearance: "srebrnobeo, metalnog sjaja",
  },
  Mg: {
    name: "Magnezijum",
    summary:
      "Lak, čvrst zemnoalkalni metal koji gori zaslepljujuće belim plamenom. Atom magnezijuma nalazi se u središtu svakog molekula hlorofila, pa biljke bez njega ne mogu da vrše fotosintezu.",
    uses: [
      "Lake legure za automobile, laptopove i avione",
      "Baklje, prskalice i vatromet",
      "Suplementi i antacidi",
    ],
    fact: "Magnezijum je otprilike za trećinu lakši od aluminijuma.",
    appearance: "sjajan, siv",
  },
  Al: {
    name: "Aluminijum",
    summary:
      "Najzastupljeniji metal u Zemljinoj kori: lak, nemagnetan i zaštićen od korozije tankim slojem oksida. Nekada ga je bilo toliko teško dobiti da je bio skuplji od zlata.",
    uses: [
      "Limenke, folije i ambalaža",
      "Konstrukcije aviona, automobila i zgrada",
      "Nadzemni dalekovodi",
    ],
    fact: "Vrh Vašingtonskog spomenika, postavljen 1884, mala je piramida od aluminijuma, izabranog jer je tada bio plemeniti metal.",
    appearance: "srebrnosiv, metalnog sjaja",
  },
  Si: {
    name: "Silicijum",
    summary:
      "Sjajan, plavosiv metaloid i drugi po zastupljenosti element u Zemljinoj kori, uglavnom zarobljen u pesku i stenama. Prečišćen, on je poluprovodnik u srcu gotovo svakog računarskog čipa.",
    uses: ["Mikročipovi i tranzistori", "Solarne ćelije", "Staklo, beton i silikonske gume"],
    fact: "Silicijum za čipove prečišćava se do oko 99,9999999%: devet devetki.",
    appearance: "kristalan, sjajan, sa plavičastim odsjajem",
  },
  P: {
    name: "Fosfor",
    summary:
      "Otkrio ga je alhemičar koji je kuvao urin tražeći kamen mudrosti. Beli fosfor svetli u mraku i može da se zapali na vazduhu; crveni fosfor je mnogo stabilniji.",
    uses: [
      "Fosfatna veštačka đubriva",
      "Šibice (crveni fosfor na traci za paljenje)",
      "Aditivi za hranu i usporivači gorenja",
    ],
    fact: "Okosnica vaše DNK i ATP koji pokreće vaše ćelije izgrađeni su od fosfatnih grupa.",
    appearance: "bezbojan, voštano beo, žut, skerletan, crven, ljubičast ili crn",
  },
  S: {
    name: "Sumpor",
    summary:
      "Jarkožut nemetal koji se nalazi oko vulkana i toplih izvora, poznat od antičkih vremena. Deo je proteina u svakoj živoj ćeliji.",
    uses: [
      "Sumporna kiselina, jedna od najviše proizvedenih industrijskih hemikalija",
      "Vulkanizacija kaučuka za automobilske gume",
      "Veštačka đubriva i fungicidi",
    ],
    fact: "Miris pokvarenih jaja koji se pripisuje sumporu potiče od vodonik-sulfida. Čist sumpor gotovo da nema miris.",
    appearance: "limunžuti mikrokristali",
  },
  Cl: {
    name: "Hlor",
    summary:
      "Žutozelen, zagušljiv gas i snažno dezinfekciono sredstvo. Hlor je previše reaktivan da bi u prirodi postojao slobodan, ali vezan sa natrijumom gradi običnu so.",
    uses: [
      "Dezinfekcija pijaće vode i bazena",
      "PVC plastika",
      "Varikina i mnogi lekovi",
    ],
    fact: "Šele nije shvatio da je pronašao element. To je 1810. dokazao Hamfri Dejvi i nazvao ga po grčkoj reči chloros, bledozelen.",
    appearance: "bledo žutozelen gas",
  },
  Ar: {
    name: "Argon",
    summary:
      "Plemeniti gas koji čini skoro 1% vazduha, više od dvadeset puta više od ugljen-dioksida. Otkriven je zato što je azot iz vazduha bio malo teži od azota dobijenog hemijskim putem.",
    uses: [
      "Zaštitni gas pri zavarivanju",
      "Punjenje sijalica sa vlaknom i fluorescentnih cevi",
      "Izolacioni gas između stakala termopan prozora",
    ],
    fact: "Ime mu potiče od grčke reči argos, što znači lenj ili besposlen.",
    appearance: "bezbojan gas, pod visokim naponom svetli lila do ljubičasto",
  },
  K: {
    name: "Kalijum",
    summary:
      "Mek alkalni metal koji reaguje sa vodom toliko brzo da plane ljubičastim plamenom. Joni kalijuma pomažu nervnim ćelijama da prenose signale i održavaju ravnomeran rad srca.",
    uses: [
      "Kalijumova veštačka đubriva",
      "Kalijum-nitrat u barutu i salamurenju hrane",
      "Meki sapuni i tečni deterdženti",
    ],
    fact: "Banane su vrlo blago radioaktivne jer je mali deo njihovog kalijuma kalijum-40.",
    note: "Oko 0,012% prirodnog kalijuma čini radioaktivni kalijum-40, sa vremenom poluraspada od 1,25 milijardi godina. To je najveći izvor prirodne radioaktivnosti u vašem telu.",
    appearance: "srebrnosiv",
  },
  Ca: {
    name: "Kalcijum",
    summary:
      "Srebrnast zemnoalkalni metal i najzastupljeniji metal u ljudskom telu. Gradi kosti, zube i ljušture; krečnjak, mermer i kreda su kalcijum-karbonat.",
    uses: ["Cement, beton i kreč", "Gips i školska kreda", "Suplementi i obogaćena hrana"],
    fact: "Prosečna odrasla osoba nosi oko kilogram kalcijuma, gotovo sav u skeletu.",
  },
  Sc: {
    name: "Skandijum",
    summary:
      "Lak, srebrnast prelazni metal čije je postojanje Mendeljejev predvideo godinama pre otkrića, nazivajući ga eka-bor. Raspršen je u malim količinama kroz mnoge minerale i retko je koncentrisan.",
    uses: [
      "Legure aluminijuma i skandijuma za ramove bicikala i sportsku opremu",
      "Metal-halogene lampe za stadione i filmske setove",
      "Gorivne ćelije sa čvrstim oksidom",
    ],
    fact: "Godišnje se proizvede tek nekoliko desetina tona skandijuma, uglavnom kao sporedni proizvod drugog rudarstva.",
    appearance: "srebrnobeo",
  },
  Ti: {
    name: "Titan",
    summary:
      "Čvrst, lak metal otporan na koroziju, jak kao mnogi čelici, a otprilike upola lakši. Telo ga podnosi toliko dobro da kost srasta direktno sa titanskim implantima.",
    uses: [
      "Konstrukcije aviona i mlazni motori",
      "Veštački kukovi i zubni implanti",
      "Titan-dioksid, beli pigment u bojama, papiru i kremama za sunčanje",
    ],
    fact: "Ime je dobio po Titanima iz grčke mitologije.",
    appearance: "srebrnast, sivobeo, metalnog sjaja",
  },
  V: {
    name: "Vanadijum",
    summary:
      "Tvrd, srebrnastosiv metal čija jedinjenja imaju sve boje duge, zbog čega ga je jedan od njegovih otkrivača nazvao po Vanadis, nordijskoj boginji lepote.",
    uses: [
      "Ojačavanje čelika za alate, opruge i osovine",
      "Vanadijumske protočne baterije za skladištenje energije u mreži",
      "Katalizator u proizvodnji sumporne kiseline",
    ],
    fact: "Neke morske štrcaljke koncentrišu vanadijum u krvnim ćelijama milionima puta više nego što ga ima u morskoj vodi.",
    appearance: "plavkasto srebrnosiv metal",
  },
  Cr: {
    name: "Hrom",
    summary:
      "Tvrd, sjajan metal koji štiti nerđajući čelik od rđe i boji rubine u crveno. Ime mu dolazi od grčke reči chroma, boja, zbog njegovih živopisnih jedinjenja.",
    uses: [
      "Nerđajući čelik, koji sadrži najmanje oko 10,5% hroma",
      "Hromiranje",
      "Pigmenti poput hrom-žute i hrom-zelene",
    ],
    fact: "Tragovi hroma boje rubine u crveno i pomažu da smaragdi budu zeleni.",
    appearance: "srebrnast, metalnog sjaja",
  },
  Mn: {
    name: "Mangan",
    summary:
      "Tvrd, krt, sivi metal bez kog čelik ne može: najveći deo iskopanog mangana završi upravo u njemu. U biljkama, grupa atoma mangana razlaže vodu i oslobađa kiseonik.",
    uses: [
      "Proizvodnja čelika, gde uklanja sumpor i daje čvrstinu",
      "Katode baterija",
      "Legure aluminijuma za limenke",
    ],
    fact: "Praistorijski slikari pećina koristili su okside mangana kao crni pigment.",
    appearance: "srebrnast, metalnog sjaja",
  },
  Fe: {
    name: "Gvožđe",
    summary:
      "Najčešći element na Zemlji po masi, koji čini veliki deo njenog jezgra. Jeftino, čvrsto i magnetno, gvožđe je u obliku čelika izgradilo savremeni svet, a u vašoj krvi prenosi kiseonik kao deo hemoglobina.",
    uses: [
      "Čelik za zgrade, automobile, brodove i alate",
      "Magneti i jezgra transformatora",
      "Preparati gvožđa i obogaćene žitarice",
    ],
    fact: "Zvezde mogu fuzijom da grade elemente sve do gvožđa, ali fuzija gvožđa ne oslobađa energiju. Kada se gvožđe nagomila u jezgru džinovske zvezde, jezgro se uruši i zvezda eksplodira kao supernova.",
    appearance: "sjajan metal sa sivkastim odsjajem",
  },
  Co: {
    name: "Kobalt",
    summary:
      "Tvrd, magnetan, srebrnast metal nazvan po koboldu, goblinu koga su nemački rudari krivili za rude koje ispuštaju otrovna isparenja, a ne daju bakar.",
    uses: [
      "Katode litijum-jonskih baterija",
      "Superlegure za turbine mlaznih motora",
      "Kobalt-plavi pigment za staklo i keramiku",
    ],
    fact: "Vitamin B12 izgrađen je oko jednog jedinog atoma kobalta.",
    note: "Kobalt-60 je radioaktivni izotop (vreme poluraspada 5,3 godine) koji se koristi u radioterapiji i za sterilizaciju medicinske opreme i hrane.",
    appearance: "tvrd, sjajan, sivi metal",
  },
  Ni: {
    name: "Nikl",
    summary:
      "Tvrd, srebrnast metal otporan na koroziju. Ime potiče od Kupfernickel, „bakarni đavo“, rude koja je izgledala kao da sadrži bakar, a nije.",
    uses: ["Nerđajući čelik", "Punjive baterije", "Kovanice i niklovanje"],
    fact: "Zemljino jezgro je uglavnom gvožđe legirano sa nekoliko procenata nikla.",
    appearance: "sjajan, srebrnast metal sa zlatnim odsjajem",
  },
  Cu: {
    name: "Bakar",
    summary:
      "Crvenkast metal koji provodi struju i toplotu bolje od svega osim srebra. Bio je jedan od prvih metala koje su ljudi obrađivali, a legiranjem sa kalajem počelo je bronzano doba.",
    uses: ["Električni provodnici i motori", "Vodovodne cevi", "Mesing i bronza"],
    fact: "Kip slobode je napravljen od bakra. Njegova zelena boja je patina koja se formirala tokom tridesetak godina.",
    appearance: "crvenonarandžast metalni sjaj",
  },
  Zn: {
    name: "Cink",
    summary:
      "Plavičastosiv metal, najpoznatiji po tome što štiti čelik od rđe. Sloj cinka korodira prvi, žrtvujući se da bi gvožđe ispod ostalo netaknuto.",
    uses: [
      "Pocinkovanje čelika",
      "Mesing, legura bakra i cinka",
      "Baterije, kreme za sunčanje i suplementi",
    ],
    fact: "Cink se u industrijskim razmerama topio u Zavaru u Indiji vekovima pre nego što su ga Evropljani izdvojili.",
    appearance: "srebrnosiv",
  },
  Ga: {
    name: "Galijum",
    summary:
      "Mek, srebrnast metal koji se topi na oko 30 °C, pa postaje tečan u toploti vašeg dlana. Mendeljejev ga je predvideo kao eka-aluminijum i izuzetno tačno pogodio njegova svojstva.",
    uses: [
      "Galijum-nitrid u LED diodama i malim punjačima za telefone",
      "Galijum-arsenidni čipovi za telefone i satelite",
      "Legure niskog tališta koje zamenjuju živu u termometrima",
    ],
    fact: "Kašika izlivena od galijuma istopi se kada njome mešate vruć čaj, klasična hemijska šala.",
    appearance: "srebrnobeo",
  },
  Ge: {
    name: "Germanijum",
    summary:
      "Sivobeo metaloid koji je Mendeljejev predvideo kao eka-silicijum. Prvi tranzistor, napravljen 1947, bio je od germanijuma.",
    uses: [
      "Optička vlakna",
      "Infracrvena sočiva za termovizijske kamere i kamere za noćno snimanje",
      "Brzi silicijum-germanijumski čipovi",
    ],
    fact: "Vinkler ga je nazvao po svojoj domovini, Nemačkoj.",
    appearance: "sivobeo",
  },
  As: {
    name: "Arsen",
    summary:
      "Sivi metaloid ozloglašen kao otrov, toliko čest u istorijskim ubistvima da je dobio nadimak „prašak za nasledstvo“. U sićušnim, kontrolisanim količinama koristi se i za podešavanje poluprovodnika.",
    uses: [
      "Galijum-arsenidni poluprovodnici",
      "Ojačavanje olova u akumulatorima",
      "Arsen-trioksid kao lek za leukemiju",
    ],
    fact: "Neki zeleni tapeti iz 19. veka bojeni su arsenskim pigmentima koji su u vlažnim sobama mogli da ispuštaju otrovna isparenja.",
    appearance: "siv, metalnog sjaja",
  },
  Se: {
    name: "Selen",
    summary:
      "Nemetal koji bolje provodi struju kada je osvetljen, svojstvo koje se nekada koristilo u fotokopir-aparatima i svetlomerima. U sićušnim količinama je neophodan hranljivi sastojak, a u višku je otrovan.",
    uses: [
      "Obezbojavanje stakla ili bojenje u crveno",
      "Solarne ćelije i fotoćelije",
      "Suplementi i šamponi protiv peruti",
    ],
    fact: "Berzelijus ga je nazvao po grčkoj reči selene, Mesec, jer je podsećao na telur, nazvan po Zemlji.",
    appearance: "crni, crveni i sivi alotropski oblici",
  },
  Br: {
    name: "Brom",
    summary:
      "Jedan od samo dva elementa koji su tečni na sobnoj temperaturi: gusta, crvenosmeđa tečnost koja ispušta zagušljiva isparenja. Ime potiče od grčke reči bromos, smrad.",
    uses: [
      "Usporivači gorenja",
      "Guste isplake za bušenje naftnih i gasnih bušotina",
      "Prečišćavanje vode i lekovi",
    ],
    fact: "Tirski purpur, antička boja rezervisana za vladare i dobijana od morskih puževa, jedinjenje je broma.",
  },
  Kr: {
    name: "Kripton",
    summary:
      "Bezbojan plemeniti gas kog u vazduhu ima u sićušnim količinama; u električnom pražnjenju svetli belkastoljubičasto. Ime mu na grčkom znači „skriveni“.",
    uses: [
      "Izolacioni gas u energetski efikasnim prozorima",
      "Foto-blicevi i lampe visokih performansi",
      "Kripton-fluoridni laseri za proizvodnju čipova",
    ],
    fact: "Od 1960. do 1983. metar je zvanično bio definisan narandžastocrvenom svetlošću kriptona-86.",
    appearance: "bezbojan gas, u jakom električnom polju svetli belkasto",
  },
  Rb: {
    name: "Rubidijum",
    summary:
      "Veoma mek alkalni metal koji se pali na vazduhu i eksplozivno reaguje sa vodom. Otkriven je po tamnocrvenim linijama u spektru, po kojima je i dobio ime (latinski rubidus, tamnocrven).",
    uses: [
      "Kompaktni atomski satovi, uključujući one u GPS satelitima",
      "Istraživanja ultrahladnih atoma",
      "Specijalna stakla i fotoćelije",
    ],
    fact: "Prvi Boze–Ajnštajnov kondenzat, novo stanje materije dobijeno 1995, bio je oblak atoma rubidijuma.",
    note: "Rubidijum-87 je slabo radioaktivan (vreme poluraspada oko 49 milijardi godina) i koristi se za određivanje starosti drevnih stena.",
    appearance: "sivobeo",
  },
  Sr: {
    name: "Stroncijum",
    summary:
      "Mek zemnoalkalni metal nazvan po Strontijanu, škotskom selu gde je prvi put pronađena njegova ruda. Njegove soli gore blistavim tamnocrvenim plamenom.",
    uses: [
      "Crveni vatromet i baklje",
      "Stroncijum-feritni magneti za frižidere i zvučnike",
      "Paste za osetljive zube",
    ],
    fact: "Neki od najpreciznijih optičkih atomskih satova ikada napravljenih otkucavaju pomoću atoma stroncijuma.",
    note: "Radioaktivni stroncijum-90 iz nuklearnih padavina opasan je jer ga telo tretira kao kalcijum i skladišti u kostima.",
  },
  Y: {
    name: "Itrijum",
    summary:
      "Srebrnast metal nazvan po Iterbiju, švedskom selu čiji je kamenolom dao ime četirima elementima: itrijumu, iterbijumu, terbijumu i erbijumu.",
    uses: [
      "Fosfori u belim LED diodama",
      "YAG laseri za sečenje i hirurgiju",
      "Visokotemperaturni superprovodnici (YBCO)",
    ],
    fact: "YBCO je 1987. postao prvi superprovodnik koji radi iznad tačke ključanja tečnog azota.",
    appearance: "srebrnobeo",
  },
  Zr: {
    name: "Cirkonijum",
    summary:
      "Čvrst, sivi metal otporan na koroziju koji gotovo ne upija neutrone, zbog čega je idealan za oblaganje nuklearnog goriva. Njegov oksidni kristal, kubni cirkonijum, popularna je zamena za dijamant.",
    uses: [
      "Košuljice gorivnih šipki u nuklearnim reaktorima",
      "Keramički noževi i zubne krunice",
      "Kubni cirkonijum kao drago kamenje",
    ],
    fact: "Kristali cirkona iz Zapadne Australije, stari oko 4,4 milijarde godina, najstariji su poznati delići Zemlje.",
    appearance: "srebrnobeo",
  },
  Nb: {
    name: "Niobijum",
    summary:
      "Mek, sivi prelazni metal, prvobitno nazvan kolumbijum. Legiran sa titanom ili kalajem postaje superprovodnik koji se koristi u nekim od najjačih magneta ikada napravljenih.",
    uses: [
      "Superprovodni magneti u aparatima za magnetnu rezonancu i akceleratorima čestica",
      "Ojačavanje čelika za cevovode i automobile",
      "Legure za mlazne motore i raketne mlaznice",
    ],
    fact: "Magneti koji usmeravaju snopove u Velikom hadronskom sudaraču namotani su kablom od niobijuma i titana.",
    appearance: "siv, metalnog sjaja, plavičast kada oksidiše",
  },
  Mo: {
    name: "Molibden",
    summary:
      "Srebrnast metal sa jednom od najviših tačaka topljenja među elementima. Ime mu potiče od grčke reči molybdos, olovo, jer je njegova ruda zamenjivana olovnom.",
    uses: [
      "Izdržljivi čelici otporni na toplotu",
      "Maziva od molibden-disulfida",
      "Katalizatori koji uklanjaju sumpor iz goriva",
    ],
    fact: "Bakterije koje vezuju azot iz vazduha oslanjaju se na enzim sa molibdenom u središtu.",
    appearance: "siv, metalnog sjaja",
  },
  Tc: {
    name: "Tehnecijum",
    summary:
      "Najlakši element bez ijednog stabilnog izotopa i prvi napravljen veštački, od molibdena bombardovanog u ciklotronu. Ime potiče od grčke reči technetos, veštački.",
    uses: [
      "Snimanje tehnecijumom-99m, koje se koristi u desetinama miliona pregleda godišnje",
      "Snimanje kostiju, srca i štitne žlezde",
    ],
    fact: "Neke crvene džinovske zvezde pokazuju tehnecijum u svojoj svetlosti. Pošto se on brzo raspada, to je bio dokaz da zvezde stvaraju nove elemente.",
    appearance: "sjajan, sivi metal",
  },
  Ru: {
    name: "Rutenijum",
    summary:
      "Tvrd, redak metal iz platinske grupe, nazvan po Ruteniji, latinskom imenu za Rusiju, gde je i otkriven.",
    uses: [
      "Slojevi u tvrdim diskovima",
      "Električni kontakti otporni na habanje",
      "Katalizatori, između ostalog za proizvodnju vodonika",
    ],
    fact: "Rutenijum je poslednji otkriven od šest metala platinske grupe.",
    appearance: "srebrnobeo, metalnog sjaja",
  },
  Rh: {
    name: "Rodijum",
    summary:
      "Redak, srebrnast metal iz platinske grupe koji izuzetno dobro odbija svetlost i jedan je od najskupljih metala na svetu. Ime mu potiče od ružičastocrvene boje njegovih soli.",
    uses: [
      "Katalizatori koji čiste izduvne gasove automobila",
      "Presvlačenje nakita i ogledala",
      "Termoparovi za vrlo visoke temperature",
    ],
    fact: "Najveći deo rodijuma iskopanog svake godine završi u katalizatorima automobila.",
    appearance: "srebrnobeo, metalnog sjaja",
  },
  Pd: {
    name: "Paladijum",
    summary:
      "Mek, srebrnobeo metal iz platinske grupe koji može da upije oko 900 puta veću zapreminu vodonika od sopstvene.",
    uses: [
      "Katalizatori automobila",
      "Elektronika i zubne legure",
      "Katalizatori za proizvodnju lekova (Nobelova nagrada 2010)",
    ],
    fact: "Volaston ga je nazvao po asteroidu Paladi, otkrivenom samo godinu dana ranije.",
    appearance: "srebrnobeo",
  },
  Ag: {
    name: "Srebro",
    summary:
      "Sjajan beli metal sa najvećom električnom i toplotnom provodljivošću od svih elemenata. Hiljadama godina je cenjen za novac i nakit, a ubija i bakterije.",
    uses: ["Elektronika i solarni paneli", "Nakit, escajg i kovanice", "Antibakterijski zavoji"],
    fact: "Njegov simbol, Ag, potiče od latinskog argentum, srebro, po kome je i Argentina dobila ime.",
    appearance: "sjajan beli metal",
  },
  Cd: {
    name: "Kadmijum",
    summary:
      "Mek, plavičastobeo metal koji je veoma otrovan. Otkriven je kao primesa u cinkovoj rudi i i danas se uglavnom dobija kao sporedni proizvod rafinacije cinka.",
    uses: [
      "Nikl-kadmijumske punjive baterije",
      "Kadmijum-žuti i crveni pigmenti",
      "Kontrolne šipke koje upijaju neutrone",
    ],
    fact: "Zagađenje kadmijumom u Japanu izazvalo je bolest itai-itai, nazvanu po kriku „boli, boli“.",
    appearance: "srebrnasto plavičastosiv, metalnog sjaja",
  },
  In: {
    name: "Indijum",
    summary:
      "Veoma mek, srebrnast metal koji ispušta visok „krik“ kada se savija. Ime je dobio po indigoplavoj liniji u spektru.",
    uses: [
      "Indijum-kalaj-oksid, providan provodnik u ekranima osetljivim na dodir",
      "Lemovi niskog tališta",
      "Poluprovodnici za LED diode",
    ],
    fact: "Čist indijum je toliko mek da može da se ogrebe noktom.",
    note: "Gotovo sav prirodni indijum je indijum-115, koji je tehnički radioaktivan, sa vremenom poluraspada oko 30.000 puta dužim od starosti svemira.",
    appearance: "srebrnast, sjajan siv",
  },
  Sn: {
    name: "Kalaj",
    summary:
      "Srebrnast, kovan metal otporan na koroziju. Legiran sa bakrom daje bronzu, a tanak sloj kalaja na čeliku daje beli lim za konzerve.",
    uses: ["Lem za elektroniku", "Kalaisani čelik za konzerve", "Bronza i kositar"],
    fact: "Na hladnoći beli kalaj može polako da se raspadne u sivi prah, pojava poznata kao kalajna kuga.",
    note: "Kalaj ima deset stabilnih izotopa, više od bilo kog drugog elementa. Njegovih 50 protona je „magični broj“ koji popunjava nuklearnu ljusku.",
    appearance: "srebrnobeo (beta, β) ili siv (alfa, α)",
  },
  Sb: {
    name: "Antimon",
    summary:
      "Krt, srebrnastosiv metaloid. Stari Egipćani koristili su njegov crni sulfidni mineral, stibnit, kao kol za šminkanje očiju.",
    uses: [
      "Usporivači gorenja",
      "Ojačavanje olova u akumulatorima i mecima",
      "Poluprovodničke komponente",
    ],
    fact: "Njegov simbol, Sb, potiče od stibium, latinskog naziva za stibnit.",
    appearance: "srebrnast, sjajan siv",
  },
  Te: {
    name: "Telur",
    summary:
      "Redak, krt, srebrnobeo metaloid, otprilike podjednako redak u Zemljinoj kori kao zlato. Već i sićušna količina u telu daje dahu snažan miris na beli luk.",
    uses: [
      "Solarni paneli od kadmijum-telurida",
      "Termoelektrični hladnjaci i generatori",
      "Prepisivi optički diskovi",
    ],
    fact: "Ime mu potiče od tellus, latinske reči za Zemlju.",
    note: "Telur-128 drži rekord za najduže ikada izmereno vreme poluraspada: oko 2,2 × 10²⁴ godina.",
  },
  I: {
    name: "Jod",
    summary:
      "Tamna, ljubičastocrna čvrsta materija koja se zagrevanjem direktno pretvara u ljubičastu paru. Vašoj štitnoj žlezdi je potreban da bi proizvodila hormone.",
    uses: [
      "Jodirana so",
      "Antiseptici poput jodne tinkture",
      "Kontrastna sredstva za rendgensko snimanje",
    ],
    fact: "Kurtoa je otkrio jod dok je tokom Napoleonovih ratova iz pepela morskih algi izdvajao hemikalije za barut.",
    note: "Radioaktivni jod-131 (vreme poluraspada 8 dana) koristi se u lečenju bolesti štitne žlezde i jedna je od glavnih opasnosti posle nuklearnih nesreća.",
    appearance: "sjajan, metalno siv, ljubičast kao gas",
  },
  Xe: {
    name: "Ksenon",
    summary:
      "Težak, redak plemeniti gas koji u električnom pražnjenju svetli plavo. Iako je „plemenit“, bio je prvi plemeniti gas za koji je dokazano da gradi jedinjenja, 1962. godine.",
    uses: [
      "Farovi automobila i lampe bioskopskih projektora",
      "Jonski motori koji pokreću letelice u svemiru",
      "Opšta anestezija",
    ],
    fact: "Ime mu potiče od grčke reči xenos, stranac.",
    appearance: "bezbojan gas, pod visokim naponom svetli plavo",
  },
  Cs: {
    name: "Cezijum",
    summary:
      "Mek, zlatkast alkalni metal koji se topi na 28,5 °C i eksplodira u dodiru sa vodom. Pronađen je u mineralnoj vodi po dve nebeskoplave linije u spektru (latinski caesius, nebeskoplav).",
    uses: [
      "Atomski satovi, kojima je definisana sekunda",
      "Isplake za bušenje od cezijum-formata",
      "Fotoelektrične ćelije",
    ],
    fact: "Jedna sekunda je definisana kao 9.192.631.770 oscilacija zračenja atoma cezijuma-133.",
    note: "Cezijum-137 (vreme poluraspada 30 godina) jedan je od glavnih radioaktivnih zagađivača posle nuklearnih nesreća.",
    appearance: "srebrnastozlatan",
  },
  Ba: {
    name: "Barijum",
    summary:
      "Mek zemnoalkalni metal čije ime potiče od grčke reči barys, težak, po gustom mineralu baritu. Njegova jedinjenja boje plamen u zeleno.",
    uses: [
      "Barijumska kaša za rendgensko snimanje digestivnog trakta",
      "Zeleni vatromet",
      "Isplaka za naftne bušotine",
    ],
    fact: "Barijum-sulfat je bezbedno progutati samo zato što se gotovo ne rastvara; rastvorljive soli barijuma su otrovne.",
  },
  La: {
    name: "Lantan",
    summary:
      "Prvi od lantanoida, mek, srebrnast metal. Ime potiče od grčke reči lanthanein, biti skriven, jer se krio u rudi cerijuma.",
    uses: [
      "Kvalitetna sočiva za fotoaparate i teleskope",
      "Nikl-metal-hidridne baterije u hibridnim automobilima",
      "Katalizatori za preradu nafte",
    ],
    fact: "Baterija ranog modela Tojote Prius sadržala je oko 10 do 15 kg lantana.",
    appearance: "srebrnobeo",
  },
  Ce: {
    name: "Cerijum",
    summary:
      "Najzastupljeniji element retkih zemalja, u Zemljinoj kori otprilike koliko i bakar. Nazvan je po patuljastoj planeti Cereri, otkrivenoj dve godine ranije.",
    uses: [
      "Kremenčići za upaljače (ferocerijum)",
      "Poliranje stakla i sočiva",
      "Katalizatori i rerne koje se same čiste",
    ],
    fact: "Struganjem ferocerijuma dobijaju se varnice dovoljno vrele da zapale vatru, zbog čega se nalazi u priborima za preživljavanje.",
    appearance: "srebrnobeo",
  },
  Pr: {
    name: "Prazeodijum",
    summary:
      "Mek, srebrnast metal retkih zemalja koji na vazduhu dobija zelenu oksidnu prevlaku. Izdvojen je iz „didimijuma“, za koji se ispostavilo da su zapravo dva elementa.",
    uses: [
      "Snažni magneti, uz neodijum",
      "Žutozeleno staklo i naočare za zavarivače",
      "Legure za motore aviona",
    ],
    fact: "Ime mu znači „zeleni blizanac“: bio je zelena polovina didimijuma.",
    appearance: "sivobeo",
  },
  Nd: {
    name: "Neodijum",
    summary:
      "Metal retkih zemalja od koga se prave najjači trajni magneti koji mogu da se kupe. Neodijumski magnet veličine novčića može da drži nekoliko kilograma.",
    uses: [
      "Magneti u elektromotorima, vetrogeneratorima i slušalicama",
      "Nd:YAG laseri",
      "Staklo ljubičaste nijanse",
    ],
    fact: "Ime mu znači „novi blizanac“, druga polovina didimijuma.",
    appearance: "srebrnobeo",
  },
  Pm: {
    name: "Prometijum",
    summary:
      "Element retkih zemalja bez stabilnih izotopa, pa ga u prirodi gotovo i nema. Konačno je identifikovan među proizvodima fisije uranijuma u Ouk Ridžu.",
    uses: [
      "Nuklearne baterije za rane pejsmejkere i letelice",
      "Merači debljine u industriji",
    ],
    fact: "Nazvan je po Prometeju, koji je bogovima ukrao vatru.",
    appearance: "metalan",
  },
  Sm: {
    name: "Samarijum",
    summary:
      "Tvrd, srebrnast metal retkih zemalja nazvan po mineralu samarskitu, koji nosi ime ruskog rudarskog činovnika, pa je to prvi element nazvan, posredno, po jednoj osobi.",
    uses: [
      "Samarijum-kobalt magneti koji rade i kada su vreli",
      "Samarijum-153 za ublažavanje bola kod raka kostiju",
      "Apsorberi neutrona u reaktorima",
    ],
    fact: "Samarijum-kobalt magneti zadržavaju snagu na temperaturama koje bi oslabile neodijumske magnete.",
    appearance: "srebrnobeo",
  },
  Eu: {
    name: "Evropijum",
    summary:
      "Najreaktivniji metal retkih zemalja, koji brzo tamni na vazduhu. Njegova jedinjenja jarko svetle pod ultraljubičastom svetlošću.",
    uses: [
      "Crveni i plavi fosfori u ekranima i LED lampama",
      "Zaštita od falsifikovanja na novčanicama evra",
      "Apsorberi neutrona",
    ],
    fact: "Novčanice evra svetle pod UV svetlom delom zahvaljujući jedinjenjima evropijuma.",
  },
  Gd: {
    name: "Gadolinijum",
    summary:
      "Srebrnast metal retkih zemalja koji upija neutrone bolje od svih drugih stabilnih elemenata i magnetan je samo kada je malo hladniji od sobne temperature.",
    uses: [
      "Kontrastna sredstva za magnetnu rezonancu",
      "Zaštita od neutrona i kontrolne šipke",
      "Istraživanje magnetnog hlađenja",
    ],
    fact: "Gadolinijum gubi magnetizam na oko 20 °C, pa toplota vašeg dlana može da ga „isključi“.",
    appearance: "srebrnobeo",
  },
  Tb: {
    name: "Terbijum",
    summary:
      "Mek, srebrnast metal retkih zemalja nazvan po Iterbiju u Švedskoj. Njegova jedinjenja svetle živo zeleno.",
    uses: [
      "Zeleni fosfori u ekranima i lampama",
      "Terfenol-D, legura koja menja oblik u magnetnom polju",
      "Očuvanje snage neodijumskih magneta na visokim temperaturama",
    ],
    fact: "Aktuator od terfenola-D može ravnu površinu, poput prozora ili stola, da pretvori u zvučnik.",
    appearance: "srebrnobeo",
  },
  Dy: {
    name: "Disprozijum",
    summary:
      "Sjajan, srebrnast metal retkih zemalja nazvan po grčkoj reči dysprositos, „teško dostupan“, jer su za njegovo izdvajanje bile potrebne desetine mukotrpnih pokušaja.",
    uses: [
      "Očuvanje snage magneta u vrelim motorima električnih automobila",
      "Laseri i metal-halogene lampe",
      "Kontrolne šipke",
    ],
    fact: "Čist metalni disprozijum dobijen je tek 1950-ih.",
    appearance: "srebrnobeo",
  },
  Ho: {
    name: "Holmijum",
    summary:
      "Mek metal retkih zemalja sa najvećim magnetnim momentom od svih prirodnih elemenata. Nazvan je po Holmiji, latinskom imenu Stokholma.",
    uses: [
      "Polni nastavci najjačih elektromagneta",
      "Holmijumski laseri u hirurgiji",
      "Kalibracija spektrometara",
    ],
    fact: "Holmijumski laseri mogu da razbiju kamen u bubregu bez ijednog reza.",
    appearance: "srebrnobeo",
  },
  Er: {
    name: "Erbijum",
    summary:
      "Srebrnast metal retkih zemalja nazvan po Iterbiju. Njegovi joni boje staklo u ružičasto i mogu da pojačavaju svetlost.",
    uses: [
      "Pojačavači u optičkim internet kablovima",
      "Laserski tretmani kože",
      "Ružičasto staklo i glazure",
    ],
    fact: "Optičko vlakno sa erbijumom pojačava svetlost u podmorskim internet kablovima bez pretvaranja u struju.",
    appearance: "srebrnobeo",
  },
  Tm: {
    name: "Tulijum",
    summary:
      "Mek, srebrnast metal nazvan po Tuli, starom imenu za daleki sever. Ako se izuzme radioaktivni prometijum, najređi je od lantanoida.",
    uses: [
      "Prenosni izvori rendgenskog zračenja (tulijum-170)",
      "Hirurški laseri",
      "Optički pojačavači",
    ],
    fact: "Tulijum-170 omogućava rendgenske aparate dovoljno male da se nose, bez potrebe za napajanjem.",
    appearance: "srebrnosiv",
  },
  Yb: {
    name: "Iterbijum",
    summary:
      "Mek, srebrnast metal retkih zemalja nazvan po Iterbiju. Pokreće neke od najpreciznijih atomskih satova ikada napravljenih.",
    uses: [
      "Iterbijumski optički atomski satovi",
      "Fiber laseri za sečenje i zavarivanje",
      "Merači naprezanja za zemljotrese i eksplozije",
    ],
    fact: "Najbolji iterbijumski satovi odstupili bi za manje od sekunde tokom čitave starosti svemira.",
  },
  Lu: {
    name: "Lutecijum",
    summary:
      "Poslednji i najgušći od lantanoida, tvrd, srebrnast metal nazvan po Luteciji, rimskom imenu Pariza.",
    uses: [
      "Kristali detektora u PET skenerima",
      "Terapija raka lutecijumom-177",
      "Katalizatori u preradi nafte",
    ],
    fact: "Lekovi sa lutecijumom-177 isporučuju zračenje direktno u tumore prostate i neuroendokrine tumore.",
    note: "Prirodni lutecijum sadrži malo radioaktivnog lutecijuma-176 (vreme poluraspada oko 37 milijardi godina), koji se koristi za određivanje starosti meteorita.",
    appearance: "srebrnobeo",
  },
  Hf: {
    name: "Hafnijum",
    summary:
      "Sjajan metal toliko hemijski sličan cirkonijumu da se krio u njegovim rudama sve do 1923, kada ga je otkrila rendgenska spektroskopija.",
    uses: [
      "Kontrolne šipke u nuklearnim reaktorima i podmornicama",
      "Izolacioni slojevi u savremenim mikročipovima",
      "Legure za mlazne i raketne motore",
    ],
    fact: "Ime mu potiče od Hafnije, latinskog imena Kopenhagena, gde je pronađen.",
    appearance: "čeličnosiv",
  },
  Ta: {
    name: "Tantal",
    summary:
      "Tvrd, plavosiv metal toliko otporan na koroziju da ga gotovo nijedna kiselina ne može nagristi. Nazvan je po Tantalu iz grčkog mita, koji nikada nije mogao da se napije vode oko sebe.",
    uses: [
      "Sićušni kondenzatori u telefonima i laptopovima",
      "Hirurški implanti",
      "Lopatice turbina i hemijska oprema",
    ],
    fact: "Veliki deo tantala potiče iz rude koltan, iskopavane u centralnoj Africi, zbog čega je postao ozloglašen konfliktni mineral.",
    appearance: "sivoplav",
  },
  W: {
    name: "Volfram",
    summary:
      "Metal sa najvišom tačkom topljenja od svih, 3.422 °C. Njegov simbol, W, potiče od naziva wolfram, koji se koristi i u srpskom.",
    uses: [
      "Vlakna sijalica i elektrode za zavarivanje",
      "Burgije i rezni alati od volfram-karbida",
      "Zaštita od zračenja i kontrategovi",
    ],
    fact: "Volfram je gotovo tačno iste gustine kao zlato, pa je omiljen za falsifikovane zlatne poluge.",
    appearance: "sivobeo, sjajan",
  },
  Re: {
    name: "Renijum",
    summary:
      "Jedan od najređih elemenata u Zemljinoj kori i poslednji otkriveni prirodni element koji ima stabilan izotop. Odoleva ekstremnoj toploti.",
    uses: [
      "Superlegure za lopatice turbina mlaznih motora",
      "Katalizatori za visokooktanski benzin",
      "Termoparovi za visoke temperature",
    ],
    fact: "Ime je dobio po reci Rajni.",
    note: "Većina prirodnog renijuma je renijum-187, koji je radioaktivan, sa vremenom poluraspada od oko 41 milijarde godina.",
    appearance: "srebrnastosiv",
  },
  Os: {
    name: "Osmijum",
    summary:
      "Najgušći prirodni element: komad veličine pesnice težak je otprilike kao kugla za kuglanje. Njegov oksid ima oštar miris, po kome je dobio ime (grčki osme, miris).",
    uses: [
      "Tvrde legure za vrhove nalivpera i električne kontakte",
      "Bojenje tkiva za elektronsku mikroskopiju",
      "Otkrivanje otisaka prstiju",
    ],
    fact: "Boca od jednog litra napunjena osmijumom težila bi oko 22,6 kg.",
    appearance: "srebrnast, plavičastog odsjaja",
  },
  Ir: {
    name: "Iridijum",
    summary:
      "Metal najotporniji na koroziju i jedan od najgušćih. Njegove soli su toliko šarene da ga je Tenant nazvao po Iridi, boginji duge.",
    uses: [
      "Dugotrajne svećice",
      "Lonci za uzgajanje kristala",
      "Iridijum-192 za radioterapiju i industrijsko rendgensko snimanje",
    ],
    fact: "Tanak sloj bogat iridijumom u stenama starim 66 miliona godina širom sveta ključni je dokaz da je asteroid zbrisao dinosauruse.",
    appearance: "srebrnobeo",
  },
  Pt: {
    name: "Platina",
    summary:
      "Gust, nereaktivan, srebrnobeo plemeniti metal. Španski kolonisti su je zvali platina, „malo srebro“, i bacali su je kao smetnju pri iskopavanju zlata.",
    uses: [
      "Katalizatori automobila",
      "Nakit",
      "Lekovi protiv raka (cisplatin) i elektrode pejsmejkera",
    ],
    fact: "Kilogram je do 2019. bio definisan cilindrom od platine i iridijuma koji se čuvao kod Pariza.",
    appearance: "srebrnobela",
  },
  Au: {
    name: "Zlato",
    summary:
      "Mek, gust, žut metal koji nikada ne potamni. Toliko je kovan da se jedan jedini gram može iskovati u listić površine oko jednog kvadratnog metra.",
    uses: [
      "Nakit i poluge",
      "Konektori u elektronici koji ne korodiraju",
      "Stomatologija i neki lekovi za artritis i rak",
    ],
    fact: "Većina zlata na Zemlji verovatno je iskovana u sudarima neutronskih zvezda, mnogo pre nego što je nastalo Sunce.",
    appearance: "žuto, metalnog sjaja",
  },
  Hg: {
    name: "Živa",
    summary:
      "Jedini metal koji je tečan na sobnoj temperaturi, teška srebrnasta tečnost. Njena isparenja su otrovna, pa je uglavnom izbačena iz termometara.",
    uses: [
      "Fluorescentne cevi",
      "Neke amalgamske zubne plombe",
      "Laboratorijski i industrijski instrumenti",
    ],
    fact: "Njen simbol, Hg, potiče od hydrargyrum, grčkog izraza za „vodeno srebro“.",
    appearance: "srebrnasta",
  },
  Tl: {
    name: "Talijum",
    summary:
      "Mek, sivi metal otkriven po jarkozelenoj liniji u spektru (grčki thallos, zelena mladica). Njegova jedinjenja su izuzetno otrovna i nekada su se koristila kao otrov za pacove.",
    uses: [
      "Infracrvena optika",
      "Snimanje srca talijumom-201",
      "Specijalna elektronika i staklo",
    ],
    fact: "Pošto nema ni ukus ni miris, trovanje talijumom pokreće radnju jednog romana Agate Kristi.",
    appearance: "srebrnobeo",
  },
  Pb: {
    name: "Olovo",
    summary:
      "Mek, gust, sivi metal koji su Rimljani koristili za vodovodne cevi; engleska reč plumbing potiče od njegovog latinskog imena, plumbum. Danas znamo da je opasan otrov za nervni sistem.",
    uses: ["Olovni akumulatori za automobile", "Zaštita od zračenja", "Tegovi i municija"],
    fact: "Olovo je najteži element koji ima stabilne izotope. Svi elementi posle njega su radioaktivni.",
    note: "Olovo-208 je „dvostruko magično“: i njegova 82 protona i 126 neutrona popunjavaju cele nuklearne ljuske, pa je to najteže poznato stabilno jezgro.",
    appearance: "sivo, metalnog sjaja",
  },
  Bi: {
    name: "Bizmut",
    summary:
      "Težak, krt metal koji raste u zadivljujuće prelivne kristale u obliku stepenica. Za razliku od većine teških metala, gotovo nije otrovan.",
    uses: [
      "Ružičasti lekovi za stomak (bizmut-subsalicilat)",
      "Lem i sačma bez olova",
      "Legure niskog tališta u protivpožarnim prskalicama",
    ],
    fact: "Bizmut se smatrao stabilnim sve do 2003, kada je zabeležen raspad njegovog jedinog prirodnog izotopa, sa vremenom poluraspada oko milijardu puta dužim od starosti svemira.",
    appearance: "sjajan, srebrnast",
  },
  Po: {
    name: "Polonijum",
    summary:
      "Redak, izrazito radioaktivan metal koji su otkrili Marija i Pjer Kiri i nazvali ga po Marijinoj domovini, Poljskoj. Gram za gram, jedna je od najotrovnijih poznatih supstanci.",
    uses: [
      "Uređaji za uklanjanje statičkog elektriciteta u industriji i fotografiji",
      "Izvor toplote za rane letelice i lunarne rovere",
    ],
    fact: "Polonijum-210 je toliko radioaktivan da se pola grama samo od sebe zagreje na oko 500 °C.",
    appearance: "srebrnast",
  },
  At: {
    name: "Astat",
    summary:
      "Jedan od najređih prirodnih elemenata: u Zemljinoj kori ga u svakom trenutku verovatno ima manje od grama. Niko nije video njegovu vidljivu količinu, jer bi je sopstvena radioaktivnost isparila.",
    uses: ["Astat-211 za ciljanu alfa terapiju raka"],
    fact: "Ime mu potiče od grčke reči astatos, nestabilan.",
    appearance: "nepoznat, verovatno metalan",
  },
  Rn: {
    name: "Radon",
    summary:
      "Bezbojan radioaktivan plemeniti gas bez mirisa koji izlazi iz stena i tla dok se uranijum raspada. Kada se nakupi u zatvorenom prostoru, vodeći je uzrok raka pluća posle pušenja.",
    uses: [
      "Praćenje podzemnih voda i proučavanje zemljotresa",
      "Rana radioterapija (danas zamenjena)",
    ],
    fact: "Radon je kao gas nevidljiv, ali kada se zamrzne svetli žuto, a zatim narandžastocrveno.",
    appearance: "bezbojan gas, ponekad svetli zeleno ili crveno u cevima za pražnjenje",
  },
  Fr: {
    name: "Francijum",
    summary:
      "Najnestabilniji element koji se javlja u prirodi: njegov najdugovečniji izotop traje samo oko 22 minuta. U celoj Zemljinoj kori ga u svakom trenutku ima možda 30 grama.",
    uses: ["Istraživanja strukture atoma i fundamentalne fizike"],
    fact: "Margerit Perej, koja ga je otkrila, kasnije je postala prva žena izabrana u Francusku akademiju nauka.",
  },
  Ra: {
    name: "Radijum",
    summary:
      "Radioaktivan zemnoalkalni metal koji slabo svetli plavo. Doneo je Mariji Kiri drugu Nobelovu nagradu, a nekada se dodavao pastama za zube, kozmetici i tonicima.",
    uses: [
      "Lečenje radijumom-223 kod raka prostate koji se proširio na kosti",
      "Svetleća boja za brojčanike satova (nekada)",
    ],
    fact: "„Radijumske devojke“ koje su 1920-ih bojile brojčanike satova otrovale su se oblizujući četkice da bi ih zašiljile, slučaj koji je doveo do novih zakona o bezbednosti na radu.",
    appearance: "srebrnobeo, metalnog sjaja",
  },
  Ac: {
    name: "Aktinijum",
    summary:
      "Srebrnast radioaktivan metal koji u mraku svetli bledoplavo. Po njemu je nazvana serija aktinoida koja sledi.",
    uses: [
      "Aktinijum-225 za ciljanu terapiju raka",
      "Izvori neutrona, u kombinaciji sa berilijumom",
    ],
    fact: "Aktinijum-227 je oko 150 puta radioaktivniji od radijuma.",
  },
  Th: {
    name: "Torijum",
    summary:
      "Slabo radioaktivan, srebrnast metal nazvan po Toru, nordijskom bogu groma. U Zemljinoj kori ga ima oko tri puta više nego uranijuma.",
    uses: [
      "Potencijalno gorivo za torijumske reaktore",
      "Mrežice za fenjere (nekada)",
      "Volframove elektrode za zavarivanje",
    ],
    fact: "Njegovo vreme poluraspada od 14 milijardi godina duže je od starosti svemira, pa je većina torijuma sa kojim je Zemlja nastala još uvek tu.",
    appearance: "srebrnast, često sa crnom prevlakom",
  },
  Pa: {
    name: "Protaktinijum",
    summary:
      "Gust, srebrnast, radioaktivan metal koji je redak i veoma otrovan. Ime mu znači „pre aktinijuma“, jer se raspada u aktinijum.",
    uses: ["Određivanje starosti okeanskih sedimenata, u paru sa torijumom"],
    fact: "Velika Britanija je 1961. iz 60 tona nuklearnog otpada izdvojila oko 125 grama protaktinijuma, što je dugo bio najveći deo svetskih zaliha.",
    appearance: "jarkog, srebrnastog metalnog sjaja",
  },
  U: {
    name: "Uranijum",
    summary:
      "Težak, srebrnast, slabo radioaktivan metal i najteži element koga u prirodi ima u velikim količinama. Njegovi atomi uranijuma-235 mogu da se cepaju u lančanoj reakciji, oslobađajući ogromnu energiju.",
    uses: [
      "Gorivo za nuklearne elektrane",
      "Gusti kontrategovi i zaštita (osiromašeni uranijum)",
      "Određivanje starosti stena metodom uranijum–olovo",
    ],
    fact: "Pre oko dve milijarde godina, ležišta uranijuma u Oklu u Gabonu sama su održavala nuklearne lančane reakcije: bili su to prirodni reaktori.",
  },
  Np: {
    name: "Neptunijum",
    summary:
      "Prvi element teži od uranijuma, dobijen bombardovanjem uranijuma neutronima. Nazvan je po Neptunu, planeti iza Urana.",
    uses: ["Proizvodnja plutonijuma-238 za napajanje letelica", "Detektori neutrona"],
    fact: "Sićušni tragovi neptunijuma prirodno nastaju u rudama uranijuma.",
    appearance: "srebrnast, metalnog sjaja",
  },
  Pu: {
    name: "Plutonijum",
    summary:
      "Gust, srebrnast radioaktivan metal nazvan po Plutonu. Plutonijum-239 može da održava lančanu reakciju, a plutonijum-238 je dugotrajan izvor toplote.",
    uses: [
      "Reaktorsko gorivo (mešani oksid)",
      "Napajanje svemirskih sondi poput Vojadžera i marsovskih rovera",
      "Nuklearno oružje",
    ],
    fact: "Peleta plutonijuma-238 užari se do crvenog od toplote sopstvenog raspada.",
    appearance: "srebrnobeo, na vazduhu tamni do tamnosivog",
  },
  Am: {
    name: "Americijum",
    summary:
      "Srebrnast radioaktivan metal koji nastaje u nuklearnim reaktorima, nazvan po Americi. To je jedini veštački element koji verovatno imate kod kuće.",
    uses: [
      "Jonizacioni detektori dima",
      "Merači debljine i gustine",
      "Predloženi izvor energije za letelice",
    ],
    fact: "Tipičan detektor dima sadrži manje od jednog mikrograma americijuma-241.",
    appearance: "srebrnobeo",
  },
  Cm: {
    name: "Kirijum",
    summary:
      "Tvrd, srebrnast radioaktivan metal nazvan po Mariji i Pjeru Kiri. U mraku svetli ljubičastocrveno.",
    uses: [
      "Alfa-rendgenski spektrometri na marsovskim roverima",
      "Istraživanje kompaktnih izvora energije",
    ],
    fact: "Kirijum-244 na marsovskim roverima ispaljuje alfa čestice u stene da bi otkrio od čega su napravljene.",
    appearance: "srebrnast, metalnog sjaja, u mraku svetli ljubičasto",
  },
  Bk: {
    name: "Berklijum",
    summary:
      "Veštački radioaktivan metal nazvan po Berkliju u Kaliforniji, gde je prvi put dobijen. Do sada je proizveden tek oko jedan gram.",
    uses: ["Materijal za mete pri stvaranju težih elemenata"],
    fact: "Berklijum proizveden u Ouk Ridžu iskorišćen je 2010. za stvaranje tenesina.",
    appearance: "srebrnast",
  },
  Cf: {
    name: "Kalifornijum",
    summary:
      "Veštački radioaktivan metal nazvan po Kaliforniji. Kalifornijum-252 je snažan izvor neutrona: jedan jedini mikrogram oslobađa oko 170 miliona neutrona u minuti.",
    uses: [
      "Pokretanje nuklearnih reaktora",
      "Otkrivanje zlata, nafte i eksploziva neutronskom analizom",
      "Lečenje raka",
    ],
    fact: "Mete od kalifornijuma korišćene su za dobijanje oganesona, najtežeg poznatog elementa.",
    appearance: "srebrnast",
  },
  Es: {
    name: "Ajnštajnijum",
    summary:
      "Veštački element prvi put pronađen u ostacima prve probe hidrogenske bombe, „Ajvi Majk“, 1952. Uzorak je toliko radioaktivan da svetli i oštećuje sopstvenu kristalnu strukturu.",
    uses: ["Naučna istraživanja i stvaranje težih elemenata"],
    fact: "Nazvan je po Albertu Ajnštajnu.",
    appearance: "srebrne boje",
  },
  Fm: {
    name: "Fermijum",
    summary:
      "Veštački element takođe pronađen u padavinama posle probe „Ajvi Majk“, nazvan po Enriku Fermiju. To je najteži element koji može da nastane hvatanjem neutrona.",
    uses: [],
    fact: "Fermijum nikada nije dobijen u vidljivoj količini.",
  },
  Md: {
    name: "Mendeljevijum",
    summary:
      "Veštački element nazvan po Dmitriju Mendeljejevu, tvorcu periodnog sistema. Bio je prvi element dobijan atom po atom: prvi eksperimenti dali su samo 17 atoma.",
    uses: [],
    fact: "Prvobitna meta bila je zrnce ajnštajnijuma sa samo oko milijardu atoma.",
  },
  No: {
    name: "Nobelijum",
    summary:
      "Veštački element nazvan po Alfredu Nobelu. O njegovom otkriću godinama su se sporile laboratorije u Švedskoj, Sjedinjenim Državama i Sovjetskom Savezu.",
    uses: [],
    fact: "Neuobičajeno za aktinoid, nobelijum pri građenju jedinjenja radije gubi samo dva elektrona.",
  },
  Lr: {
    name: "Lorensijum",
    summary:
      "Poslednji od aktinoida, nazvan po Ernestu Lorensu, izumitelju ciklotrona. Dobija se samo po nekoliko atoma odjednom.",
    uses: [],
    fact: "Smatra se da relativistički efekti daju lorensijumu neobičan spoljašnji elektron u 7p orbitali umesto u 6d.",
  },
  Rf: {
    name: "Raderfordijum",
    summary:
      "Prvi superteški element posle aktinoida, nazvan po Ernestu Raderfordu, koji je otkrio atomsko jezgro.",
    uses: [],
    fact: "Raderfordijum se hemijski ponaša kao hafnijum i cirkonijum, elementi iznad njega.",
  },
  Db: {
    name: "Dubnijum",
    summary:
      "Veštački element nazvan po Dubni, ruskom gradu u kome se nalazi Združeni institut za nuklearna istraživanja.",
    uses: [],
    fact: "Oko imena se toliko sporilo da se zvao hanijum i nilsborijum pre nego što su se hemičari 1997. dogovorili oko dubnijuma.",
  },
  Sg: {
    name: "Siborgijum",
    summary:
      "Nazvan po Glenu T. Siborgu, prvi element nazvan po osobi koja je tada još bila živa. Siborg je učestvovao u otkriću deset elemenata.",
    uses: [],
    fact: "Siborg se šalio da može da prima poštu adresiranu samo elementima: siborgijum, lorensijum, berklijum, kalifornijum, americijum.",
  },
  Bh: {
    name: "Borijum",
    summary:
      "Veštački element nazvan po Nilsu Boru, čiji je model elektrona u ljuskama upravo onaj nacrtan na ovoj stranici.",
    uses: [],
    fact: "Hemičari su borijum proučavali na samo nekoliko atoma; ponaša se kao renijum.",
  },
  Hs: {
    name: "Hasijum",
    summary: "Veštački element nazvan po Hesenu, nemačkoj pokrajini u kojoj se nalazi laboratorija GSI.",
    uses: [],
    fact: "Godine 2001. bilo je dovoljno sedam atoma da se pokaže da hasijum gradi isparljiv oksid, baš kao osmijum iznad njega.",
  },
  Mt: {
    name: "Majtnerijum",
    summary:
      "Nazvan po Lizi Majtner, suotkrivačici nuklearne fisije, koja je izostavljena iz Nobelove nagrade dodeljene za to otkriće.",
    uses: [],
    fact: "Prvi put je identifikovan na osnovu jednog jedinog atoma.",
  },
  Ds: {
    name: "Darmštatijum",
    summary: "Veštački element nazvan po Darmštatu u Nemačkoj, gde je prvi put dobijen.",
    uses: [],
    fact: "Predviđa se da se ponaša kao platina, ali nijedan eksperiment još nije ispitao njegovu hemiju.",
  },
  Rg: {
    name: "Rendgenijum",
    summary: "Nazvan po Vilhelmu Rendgenu, otkrivaču X-zraka. U tabeli se nalazi ispod zlata.",
    uses: [],
    fact: "Relativistički efekti mogli bi učiniti da se rendgenijum ponaša sasvim drugačije od zlata, iako su u istoj grupi.",
  },
  Cn: {
    name: "Kopernicijum",
    summary:
      "Nazvan po Nikoli Koperniku. Nalazi se ispod žive i na sobnoj temperaturi bi mogao biti tečnost, pa čak i gas.",
    uses: [],
    fact: "Eksperimenti ukazuju na to da je reč o veoma isparljivom metalu koji se ponaša gotovo kao plemeniti gas.",
  },
  Nh: {
    name: "Nihonijum",
    summary:
      "Prvi element otkriven u Aziji, dobijen u institutu RIKEN i nazvan po Nihonu, jednom od japanskih imena za Japan.",
    uses: [],
    fact: "Tim je eksperimente izvodio skoro devet godina i video samo tri atoma.",
  },
  Fl: {
    name: "Flerovijum",
    summary:
      "Nazvan po Laboratoriji za nuklearne reakcije Flerov u Dubni. Nalazi se blizu predviđenog „ostrva stabilnosti“, gde bi superteška jezgra mogla da traju duže.",
    uses: [],
    fact: "Neki od njegovih izotopa traju sekundama, mnogo duže od suseda, što nagoveštava da ostrvo stabilnosti postoji.",
  },
  Mc: {
    name: "Moskovijum",
    summary:
      "Nazvan po Moskovskoj oblasti, u kojoj se nalazi Dubna. Svaki atom traje manje od sekunde pre nego što se raspadne.",
    uses: [],
    fact: "Predviđa se da se ponaša donekle kao bizmut, element iznad njega.",
  },
  Lv: {
    name: "Livermorijum",
    summary:
      "Nazvan po Nacionalnoj laboratoriji Lorens Livermor u Kaliforniji, partneru u njegovom otkriću.",
    uses: [],
    fact: "Laboratorija u Berkliju je 2024. dobila livermorijum pomoću snopa titana-50, kao probu za pokušaj stvaranja elementa 120.",
  },
  Ts: {
    name: "Tenesin",
    summary:
      "Drugi najteži poznati element, nazvan po Tenesiju, gde se nalazi Nacionalna laboratorija Ouk Ridž, koja je obezbedila metu od berklijuma.",
    uses: [],
    fact: "Za izradu mete bilo je potrebno 250 dana rada reaktora da bi se dobilo 22 miligrama berklijuma.",
  },
  Og: {
    name: "Oganeson",
    summary:
      "Najteži poznati element, nazvan po fizičaru Juriju Oganesjanu. Nalazi se među plemenitim gasovima, ali se predviđa da je čvrst i možda čak reaktivan.",
    uses: [],
    fact: "Do sada je pouzdano detektovano samo oko pet atoma oganesona.",
  },
};
