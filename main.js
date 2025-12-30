
let score = 0;
let lang = "pl";

// Poprawny kod (zmień według potrzeb)
const correctCode = "montauk1983";

// Teksty w obu językach
const texts = {
    en: {
        subtitle:"Declassified Conspiracy Archive",
        enter:"ENTER ARCHIVES",
        about_title:"What Was Project Montauk?",
       about_1: "The Montauk Project is one of the most famous conspiracy theories alleging secret U.S. government experiments conducted at Camp Hero in Montauk, New York. Although historically the site was a radar station during the Cold War, legends speak of much deeper research.",

about_2: "The story of Montauk emerged in the 1992 book \"The Montauk Project: Experiments in Time,\" by Preston Nichols and Peter Moon, who claimed to have recovered memories of their involvement in the project.",

about_3: "According to conspiracy proponents, the project began as a continuation of earlier government research on mind manipulation and psychological warfare, linked to the MK-Ultra program.",

about_4: "Officially, Camp Hero was a radar defense station that closed in 1969, long before it became the center of Montauk conspiracy lore.",

about_5: "One of the central elements of the narrative is the so-called \"Montauk Chair,\" an alleged electromagnetic device used to amplify psychic abilities.",

about_6: "Followers of the theory say the project included research into telepathy, psychokinesis, and other unusual human capabilities, intended to give military advantage.",

about_7: "Some accounts claim that individuals with psychic talents, including children, were recruited or kidnapped for experimental purposes.",

about_8: "Conspiracy writers often link Montauk with the Philadelphia Experiment, a legendary alleged attempt to manipulate time and make a navy ship invisible.",

about_9: "Proponents argue that concepts from the Philadelphia Experiment were incorporated into Montauk’s later research on time and consciousness.",

about_10: "Some believers assert that extensive underground facilities existed beneath Camp Hero, although no such infrastructure is officially acknowledged.",

about_11: "Alleged experiments reportedly involved time travel and opening portals to other dimensions, one of the most extraordinary aspects of the legend.",

about_12: "According to some stories, participants experienced transportation of objects and people through time and space.",

about_13: "Certain claims suggest that these activities transformed subjects into beings capable of manipulating reality itself.",

about_14: "While no official agency has confirmed such experiments, the Montauk lore has gained widespread popularity in alternative culture.",

about_15: "Critics note that many reports come from personal narratives without verifiable evidence.",

about_16: "Nevertheless, the tales of Montauk have become the basis of numerous books, podcasts, and discussions about secret human experimentation.",

about_17: "Over time, legends expanded to include alleged alien contacts and tests of technology alleged to originate from UFOs.",

about_18: "The Montauk Project also inspired the creators of \"Stranger Things,\" whose working title was originally Montauk before the setting was changed.",

about_19: "Even today, Camp Hero attracts conspiracy enthusiasts exploring the old base for traces of its supposed activities.",

about_20: "Although most experts regard the Montauk Project as an urban legend, fascination with mystery and unexplained phenomena persists.",

        theories_title:"Main Theories",    
        t1_title:"🧠 Mind Control",
t1_text:"Some claim Montauk was used to develop mind control and psychological warfare techniques, extending controversial research into human behavior manipulation.",

t2_title:"🧒 Montauk Boys",
t2_text:"According to the legend, children were used in tests of psychic abilities because they were believed to have heightened perceptions, making them important to the project’s goals.",

t3_title:"🕳️ Time Travel",
t3_text:"One famous theory says that Montauk conducted research into time travel and spacetime manipulation, connecting it to stories about the Philadelphia Experiment.",

t4_title:"👁️ Portals & Dimensions",
t4_text:"Some proponents claim the project opened portals to other dimensions or realities, allowing access to alternate worlds and beings.",

t5_title:"👽 Alien Technology",
t5_text:"Legend has it the government had contact with or used alien technology to enhance its psychic experiments at Montauk.",

t6_title:"📡 Energy Manipulation",
t6_text:"Montauk was supposedly experimenting with electromagnetic waves and energy fields to influence minds and behaviors as part of psychological warfare.",

t7_title:"🐉 Creatures & Manifestations",
t7_text:"Some narratives describe strange creatures allegedly encountered or summoned at Camp Hero, contributing to paranormal mythology.",

t8_title:"⏳ Alternate Timelines",
t8_text:"Theories suggest certain experiments created alternate timelines or parallel realities that observers might have witnessed."
,
        timeline_title:"Timeline",
        time1:"1947 – Camp Hero becomes a military base",
        time2:"1969 – Early radar and psychic experiments",
        time3:"1971 – Development of the Montauk Chair",
        time4:"1983 – Alleged incident terminating the project",
        time5:"1992 – Official shutdown and archives sealed",
        access_title:"Restricted Access",
        verify:"VERIFY",
        terminal_placeholder:"Type a command...",
        hint:"ENTER CODE — HINT IS IN THE APP"
    },
    pl: {
        subtitle:"Odtajnione Archiwum Spiskowe",
        enter:"WEJDŹ DO ARCHIWÓW",
        about_title:"Czym był Projekt Montauk?",
       about_1: "Projekt Montauk to jedna z najbardziej znanych teorii spiskowych o rzekomych tajnych eksperymentach rządu USA prowadzonych w Camp Hero na Long Island, Nowy Jork. Historycznie baza ta była wykorzystana do obrony wybrzeża krótkofalowymi radarami w czasach zimnej wojny, ale legendy mówią o o wiele głębszych badaniach.",

about_2: "Początki opowieści o Montauk sięgają publikacji książki \"The Montauk Project: Experiments in Time\" z 1992 roku, napisanej przez Prestona Nicholsa i Petera Moona, którzy twierdzili, że odzyskali wspomnienia o własnym udziale w projekcie.",

about_3: "Według zwolenników teorii, projekt miał rozpocząć się jako kontynuacja wcześniejszych rządowych badań nad manipulacją świadomością i psychologią w celach wojskowych, powiązanych z programem MK-Ultra.",

about_4: "Oficjalnie baza Camp Hero była stacją radarową używaną do obrony wybrzeża USA i została zamknięta w 1969 roku, zanim stała się częścią kampanii spiskowej Montauk.",

about_5: "Jednym z głównych elementów opowieści jest tzw. \"Montauk Chair\", urządzenie rzekomo wykorzystujące pole elektromagnetyczne do wzmacniania zdolności psychicznych badanych.",

about_6: "Zwolennicy teorii twierdzą, że projekt obejmował badania nad telepatią, telekinezją i innymi nietypowymi zdolnościami ludzkimi, których rozwinięcie miało dawać przewagę militarną.",

about_7: "Według opowieści, rząd miał porywać lub rekrutować osoby z wybranymi zdolnościami psychicznymi, szczególnie dzieci, które podobno miały większe możliwości w projektowanych eksperymentach.",

about_8: "Teorie spiskowe łączą Projekt Montauk z rzekomym \"Eksperymentem Filadelfia\", który miał zbadać możliwość manipulacji czasoprzestrzenią i niewidzialności radarowej, chociaż żadnych oficjalnych dowodów na to nie ma.",

about_9: "Zwolennicy twierdzą, że elementy teorii Filadelfijskiej zostały wykorzystane później w Montauk, co miało prowadzić do jeszcze bardziej zaawansowanych badań nad czasem i świadomością.",

about_10: "Niektórzy badacze spiskowi twierdzą, że pod bazą Camp Hero znajdowały się rozległe, podziemne kompleksy badawcze, chociaż oficjalnie żadna taka infrastruktura nie została potwierdzona.",

about_11: "Rzekome eksperymenty miały dotyczyć także podróży w czasie i otwierania portali do innych wymiarów, co jest jedną z najbardziej fantastycznych części legendy Montauk.",

about_12: "Według relacji publikowanych w książkach, niektórzy uczestnicy twierdzili, że doświadczenia w projekcie obejmowały przenoszenie obiektów i ludzi w czasie i przestrzeni.",

about_13: "Pewne opowieści sugerują, że te działania miały przekształcić uczestników w istoty zdolne manipulować rzeczywistością w sposób podobny do telekinezy czy kontroli umysłu.",

about_14: "Chociaż żadna oficjalna agencja rządowa nigdy nie potwierdziła istnienia takich eksperymentów, legendy o Montauk zyskały ogromną popularność w internecie i kulturze alternatywnej.",

about_15: "Krytycy teorii podkreślają, że wiele z relacji pochodzi z pamiętników i narracji osobistych, bez potwierdzonych źródeł i dowodów.",

about_16: "Mimo sceptycyzmu, opowieści o Montauk stały się fundamentem licznych książek, podcastów i dyskusji o tajnych eksperymentach na ludziach.",

about_17: "Z czasem legendy wokół Montauk zaczęły obejmować także rzekome kontakty z istotami pozaziemskimi albo testy technologii pochodzącej z UFO.",

about_18: "Projekt Montauk zainspirował także twórców serialu \"Stranger Things\", którzy pierwotnie planowali umieścić akcję w Montauk, zanim przenieśli ją do Hawkins.",

about_19: "Nawet dziś, Camp Hero przyciąga uwagę miłośników teorii spiskowych, którzy eksplorują teren dawnej bazy i szukają śladów rzekomej działalności.",

about_20: "Chociaż większość ekspertów uważa Projekt Montauk za legendę miejską bez faktycznych dowodów, fascynacja tajemnicą i niewyjaśnionymi zjawiskami trwa nadal.",

        theories_title:"Główne Teorie",    
       t1_title:"🧠 Kontrola Umysłu",
t1_text:"Niektórzy twierdzą, że Montauk był używany do rozwijania technik kontroli umysłu i manipulacji psychologicznej, rozszerzając kontrowersyjne badania nad MK-Ultra.",

t2_title:"🧒 Chłopcy z Montauk",
t2_text:"Według legendy rząd miał wykorzystywać dzieci do testów nad zdolnościami psychicznymi, ponieważ młodzi badani mieli większą percepcję i intuicję, co czyniło ich eksperymenty ważnymi dla projektu.",

t3_title:"🕳️ Podróże w Czasie",
t3_text:"Jedna z najbardziej znanych teorii mówi, że Montauk prowadził badania nad podróżami w czasie i manipulacją czasoprzestrzenią, łącząc je z wcześniejszymi opowieściami o eksperymentach Filadelfia.",

t4_title:"👁️ Portale i Wymiary",
t4_text:"Niektórzy zwolennicy historii twierdzą, że projekt otworzył portale do innych wymiarów lub rzeczywistości, umożliwiając dostęp do alternatywnych światów i istot.",

t5_title:"👽 Technologia Obcych",
t5_text:"W legendach pojawia się przekonanie, że rząd miał kontakt z technologią pozaziemską lub wykorzystał ją do wzmocnienia eksperymentów psychicznych.",

t6_title:"📡 Manipulacja Energią",
t6_text:"Projekty Montauk miały rzekomo eksperymentować z falami elektromagnetycznymi i polami energetycznymi w celu wpływania na umysły i zachowania, co czyniło je elementem psychologicznej wojny.",

t7_title:"🐉 Kreatury i Manifestacje",
t7_text:"Niektóre relacje opisują dziwne stworzenia rzekomo przywoływane lub obserwowane w bazie Camp Hero, tworząc mitologię o paranormalnych manifestacjach.",

t8_title:"⏳ Alternatywne Linie Czasu",
t8_text:"Teorie sugerują, że niektóre eksperymenty miały skutkować powstawaniem alternatywnych linii czasowych lub równoległych rzeczywistości, które obserwatorzy rzekomo mogli widzieć.",

        timeline_title:"Oś Czasu",
        time1:"1947 – Camp Hero staje się bazą wojskową",
        time2:"1969 – Wczesne eksperymenty radarowe i psychiczne",
        time3:"1971 – Opracowanie Krzesła Montauk do kontroli umysłu",
        time4:"1983 – Rzekomy incydent kończący projekt",
        time5:"1992 – Oficjalne zamknięcie i zarchiwizowanie materiałów",
        access_title:"Dostęp Zastrzeżony",
        verify:"SPRAWDŹ",
        terminal_placeholder:"Wpisz komendę...",
        hint:"WPROWADŹ KOD — PODPOWIEDŹ JEST W APLIKACJI"
    }
};

// Funkcja ustawiająca język
function setLang(l){
    lang = l;
    document.querySelectorAll("[data-i18n]").forEach(el=>{
        el.innerText = texts[lang][el.dataset.i18n] || "";
    });
    const terminalInput = document.getElementById("terminal-input");
    if(terminalInput) terminalInput.placeholder = texts[lang].terminal_placeholder;
}
setLang(lang);

// Smooth scroll
function scrollToSection(id){
    document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

// HINT
function showHint(){
    const hintDiv = document.getElementById("hint");
    hintDiv.innerText = texts[lang].hint;
    hintDiv.style.display = "block";
    setTimeout(()=>{hintDiv.style.display="none";},5000);
}

// Obsługa przycisku SPRAWDŹ
document.getElementById("verify-btn").addEventListener("click", () => {
    const userInput = document.getElementById("code").value.trim();
    if(userInput === correctCode){
        document.getElementById("verify-btn").style.display = "none";
        document.getElementById("code").style.display = "none";
        document.getElementById("secret").classList.remove("hidden");
        document.getElementById("secret").scrollIntoView({behavior:"smooth"});
        addTerminalLine("Welcome to Montauk terminal. Type 'help' for commands.");
    } else {
        showHint();
    }
});

// Przełączanie języków
document.querySelectorAll(".lang-switch button").forEach(btn=>{
    btn.addEventListener("click", ()=>{
        setLang(btn.dataset.lang);
    });
});

// TERMINAL
const terminalOutput = document.getElementById("terminal-output");
document.getElementById("terminal-input").addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        const input = e.target.value.trim();
        if(!input) return;
        addTerminalLine("> " + input);

        switch(input.toLowerCase()){
            case "help":
                addTerminalLine("Available commands: help, clear, exit, about, theories, timeline, secret, contact, aliens, experiments, mindcontrol");
                break;
            case "clear":
                terminalOutput.innerHTML = "";
                break;
            case "exit":
                addTerminalLine("Exiting terminal...");
                document.getElementById("secret").classList.add("hidden");
                document.getElementById("verify-btn").style.display = "inline-block";
                document.getElementById("code").style.display = "inline-block";
                break;
            case "about":
                addTerminalLine(texts[lang].about_1);
                addTerminalLine(texts[lang].about_2);
                addTerminalLine(texts[lang].about_3);
                break;
            case "theories":
                addTerminalLine(texts[lang].t1_title + ": " + texts[lang].t1_text);
                addTerminalLine(texts[lang].t2_title + ": " + texts[lang].t2_text);
                addTerminalLine(texts[lang].t3_title + ": " + texts[lang].t3_text);
                addTerminalLine(texts[lang].t4_title + ": " + texts[lang].t4_text);
                addTerminalLine(texts[lang].t5_title + ": " + texts[lang].t5_text);
                addTerminalLine(texts[lang].t6_title + ": " + texts[lang].t6_text);
                addTerminalLine(texts[lang].t7_title + ": " + texts[lang].t7_text);
                addTerminalLine(texts[lang].t8_title + ": " + texts[lang].t8_text);
                break;
            case "timeline":
                addTerminalLine(texts[lang].time1);
                addTerminalLine(texts[lang].time2);
                addTerminalLine(texts[lang].time3);
                addTerminalLine(texts[lang].time4);
                addTerminalLine(texts[lang].time5);
                break;
            case "secret":
                addTerminalLine("Accessing hidden Montauk archives...");
                addTerminalLine("Classified documents require higher clearance.");
                break;
            case "contact":
                addTerminalLine("For inquiries, contact the Montauk Research Unit.");
                addTerminalLine("Email: montauk@archive.gov (not real!)");
                break;
            case "aliens":
                addTerminalLine("Investigating UFO sightings and alien technology...");
                break;
            case "experiments":
                addTerminalLine("Listing known experimental programs: Mind Control, Genetic, Time Travel.");
                break;
            case "mindcontrol":
                addTerminalLine("Montauk Project allegedly conducted mind control experiments on subjects.");
                break;
            default:
                addTerminalLine("Unknown command: " + input + ". Type 'help' for a list of commands.");
        }

        e.target.value = "";
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }
});

function addTerminalLine(text){
    const div = document.createElement("div");
    div.textContent = text;
    terminalOutput.appendChild(div);
}
