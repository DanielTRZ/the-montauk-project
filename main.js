let score = 0;
let lang = "pl";

// Teksty w obu językach
const texts = {
en: {
    subtitle: "Declassified Conspiracy Archive",
    enter: "ENTER ARCHIVES",
    about_title: "What Was Project Montauk?",
    about_1: "Project Montauk allegedly operated at Camp Hero, Long Island, under the supervision of the U.S. military. It officially started in the early 1970s and reportedly continued until the mid-1980s. Numerous witnesses claim strange phenomena occurred on-site, including unexplainable disappearances and anomalous events.",
    about_2: "The project is believed to have been a continuation of previous secret programs, notably MKUltra and the Philadelphia Experiment. Researchers allegedly aimed to expand human potential, manipulate consciousness, and experiment with unconventional technology.",
    about_3: "Children, referred to as the 'Montauk Boys,' were reportedly recruited or abducted to test psychic abilities. Experiments included remote viewing, telepathy, and time perception manipulation. Witness accounts suggest extreme psychological conditioning was applied.",
    about_4: "Equipment such as the 'Montauk Chair' was allegedly used to amplify psychic abilities. Experiments were claimed to involve mind control, trauma-based programming, and attempts to influence or observe alternate timelines.",
    about_5: "Some theories suggest interdimensional portals were opened, allowing access to other realities. Personnel reported encounters with unknown entities and temporal anomalies, creating a legend of a 'hidden world within Camp Hero.'",
    about_6: "Despite official denials and sealed documents, testimonies, declassified reports, and speculative reconstructions in media continue to fuel interest. Project Montauk remains one of the most intriguing conspiracy theories of modern times.",

    theories_title: "Main Theories",
    t1_title: "🧠 Mind Control",
    t1_text: "Project Montauk allegedly used advanced psychological techniques to control consciousness. Trauma-based programming, hypnosis, and sensory deprivation were reportedly applied to shape behavior and memory. The military aimed to create operatives capable of executing covert missions with enhanced obedience. Survivors describe intense mental conditioning. Some theorists link these experiments to mind control programs worldwide. Evidence is largely anecdotal, but compelling testimonies persist.",
    t2_title: "🧒 Montauk Boys",
    t2_text: "Children were reportedly central to experiments aimed at enhancing psychic capabilities. Remote viewing, telepathy, and extraordinary cognitive tasks were allegedly tested. Abductions, recruitment under false pretenses, and psychological conditioning are cited in testimonies. The boys were supposedly able to project consciousness across time and space. Allegations include involvement of alien technology. These experiments continue to inspire fiction and conspiracy theories.",
    t3_title: "🕳️ Time Travel",
    t3_text: "Some witnesses claim the project developed experimental time travel methods. Subjects allegedly experienced temporal displacement into past or parallel timelines. Equipment such as the Montauk Chair was said to be crucial. Observers reported visions of alternate realities and historical events. Some researchers suggest temporal loops and causality experiments were performed. These claims remain highly controversial and unverified.",
    t4_title: "👁️ Portals",
    t4_text: "Interdimensional portals are a recurring element in Montauk stories. These openings supposedly allowed glimpses into other dimensions or future events. Personnel reported seeing unknown entities and phenomena inconsistent with reality. The portals were linked to psychic amplification equipment. These experiences contributed to the mythology surrounding Montauk. Some theories suggest portals were also linked to alien technology.",
    t5_title: "👽 Alien Tech",
    t5_text: "Reverse-engineered alien technology is suggested to have played a role in amplifying psychic experiments. Devices of unknown origin allegedly helped manipulate time and consciousness. Some claim crashed UFOs were used as research sources. The integration of this technology purportedly enabled the creation of interdimensional portals. Evidence is speculative, but it fuels popular culture depictions. Researchers and authors continue to explore this narrative.",

    timeline_title: "Timeline",
    time1: "1947 – Camp Hero becomes a military base",
    time2: "1969 – Early radar and psychic experiments",
    time3: "1971 – Development of the Montauk Chair",
    time4: "1983 – Alleged incident terminating the project",
    time5: "1992 – Official shutdown and archives sealed",

    media_title: "Films & Series",
    test_title: "Montauk Psychological Assessment",
    q1: "Do you feel time differently when alone?",
    q2: "Have you dreamed of unknown places?",
    q3: "Do you trust your memories?",
    yes: "YES", no: "NO",
    access_title: "Restricted Access",
    verify: "VERIFY"
},
pl: {
    subtitle: "Odtajnione Archiwum Spiskowe",
    enter: "WEJDŹ DO ARCHIWÓW",
    about_title: "Czym był Projekt Montauk?",
    about_1: "Projekt Montauk rzekomo działał w Camp Hero na Long Island pod nadzorem wojska USA. Oficjalnie rozpoczął się na początku lat 70., a podobno trwał do połowy lat 80. Liczni świadkowie donoszą o dziwnych zjawiskach na miejscu, w tym o niewyjaśnionych zniknięciach i anomaliach.",
    about_2: "Projekt uważany jest za kontynuację wcześniejszych tajnych programów, w szczególności MKUltra i Eksperymentu Filadelfijskiego. Naukowcy mieli rzekomo rozszerzać możliwości ludzkie, manipulować świadomością i eksperymentować z nietypową technologią.",
    about_3: "Dzieci, nazywane 'Chłopcami z Montauk', miały być rekrutowane lub porywane, aby testować zdolności psychiczne. Eksperymenty obejmowały zdalne postrzeganie, telepatię i manipulację percepcją czasu. Świadkowie opisują ekstremalne warunki psychologiczne.",
    about_4: "Sprzęt, taki jak 'Krzesło Montauk', rzekomo służył do wzmocnienia zdolności psychicznych. Eksperymenty obejmowały kontrolę umysłu, programowanie oparte na traumie i próby obserwowania alternatywnych linii czasowych.",
    about_5: "Niektóre teorie mówią o otwarciu portali międzywymiarowych, umożliwiających dostęp do innych rzeczywistości. Personel raportował spotkania z nieznanymi bytami i anomalie czasowe, tworząc legendę 'ukrytego świata w Camp Hero'.",
    about_6: "Pomimo oficjalnych zaprzeczeń i zarchiwizowanych dokumentów, zeznania świadków, zdeklasowane raporty i rekonstrukcje medialne nadal podsycają zainteresowanie. Projekt Montauk pozostaje jedną z najbardziej fascynujących teorii spiskowych współczesności.",

    theories_title: "Główne Teorie",
    t1_title: "🧠 Kontrola Umysłu",
    t1_text: "Projekt Montauk rzekomo wykorzystywał zaawansowane techniki psychologiczne w celu kontroli świadomości. Programowanie oparte na traumie, hipnoza i deprywacja sensoryczna miały kształtować zachowanie i pamięć. Celem było stworzenie agentów zdolnych do wykonywania tajnych misji z pełną posłusznością. Świadkowie opisują intensywne warunki psychiczne. Niektórzy teoretycy wiążą te eksperymenty z programami kontroli umysłu na całym świecie. Dowody są głównie anegdotyczne, ale świadectwa są przekonujące.",
    t2_title: "🧒 Chłopcy z Montauk",
    t2_text: "Dzieci rzekomo były centralnym elementem eksperymentów mających na celu rozwinięcie zdolności psychicznych. Testowano zdalne postrzeganie, telepatię i niezwykłe zadania poznawcze. Świadectwa mówią o porywaniach, rekrutacji pod fałszywymi pretekstami i warunkowaniu psychicznym. Chłopcy mieli rzekomo umiejętność projekcji świadomości w czasie i przestrzeni. Niektóre zeznań obejmują udział technologii pozaziemskiej. Eksperymenty te nadal inspirują literaturę i teorie spiskowe.",
    t3_title: "🕳️ Podróże w Czasie",
    t3_text: "Niektórzy świadkowie twierdzą, że projekt opracował metody eksperymentalnej podróży w czasie. Uczestnicy mieli doświadczać przesunięć czasowych do przeszłości lub równoległych linii czasowych. Sprzęt taki jak Krzesło Montauk był kluczowy. Obserwatorzy raportowali wizje alternatywnych rzeczywistości i wydarzeń historycznych. Niektórzy badacze sugerują, że przeprowadzano eksperymenty z pętlami czasowymi i przyczynowością. Twierdzenia te pozostają kontrowersyjne i niezweryfikowane.",
    t4_title: "👁️ Portale",
    t4_text: "Portale międzywymiarowe to powtarzający się element opowieści o Montauk. Rzekomo umożliwiały obserwowanie innych wymiarów lub przyszłych wydarzeń. Personel raportował spotkania z nieznanymi bytami i zjawiska sprzeczne z rzeczywistością. Portale miały być powiązane z urządzeniami wzmacniającymi zdolności psychiczne. Doświadczenia te przyczyniły się do mitologii Montauk. Niektóre teorie sugerują powiązanie portali z technologią pozaziemską.",
    t5_title: "👽 Technologia Obcych",
    t5_text: "Sugeruje się, że odzyskana technologia pozaziemska była używana do wzmacniania eksperymentów psychicznych. Urządzenia nieznanego pochodzenia miały pomagać w manipulacji czasem i świadomością. Niektórzy twierdzą, że wykorzystano rozbite UFO jako źródło badań. Integracja tej technologii rzekomo umożliwiała tworzenie portali międzywymiarowych. Dowody są spekulacyjne, ale inspirują popkulturę. Badacze i autorzy nadal eksplorują tę narrację.",

    timeline_title: "Oś Czasu",
    time1: "1947 – Camp Hero staje się bazą wojskową",
    time2: "1969 – Wczesne eksperymenty radarowe i psychiczne",
    time3: "1971 – Opracowanie Krzesła Montauk do kontroli umysłu",
    time4: "1983 – Rzekomy incydent kończący projekt",
    time5: "1992 – Oficjalne zamknięcie i zarchiwizowanie materiałów",

    media_title: "Filmy i Seriale",
    test_title: "Test Psychologiczny Montauk",
    q1: "Czy czas płynie inaczej gdy jesteś sam?",
    q2: "Czy śniłeś o miejscach, których nie znasz?",
    q3: "Czy ufasz swoim wspomnieniom?",
    yes: "TAK", no: "NIE",
    access_title: "Dostęp Zastrzeżony",
    verify: "SPRAWDŹ"
}
};

// Funkcja ustawiająca język
function setLang(l){
    lang = l;
    document.querySelectorAll("[data-i18n]").forEach(el=>{
        el.innerText = texts[lang][el.dataset.i18n];
    });
}

// Domyślny język
setLang(lang);

// Smooth scroll
function scrollToSection(id){
    document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

// Test psychologiczny
function answer(v){
    score += v;
    document.getElementById("result").innerText =
        score <=1 ? "OBSERVER" :
        score<=3 ? "SUBJECT" :
        score<=5 ? "ASSET" : "REJECTED";
}

// Unlock sekcji z kodem
function unlock(){
    if(document.getElementById("code").value.toLowerCase()==="montauk1983"){
        document.getElementById("secret").classList.remove("hidden");
    }
}

// Odsłonięcie finalnej sekcji po "l"
document.addEventListener("keydown",e=>{
    if(e.key.toLowerCase()==="l"){
        document.getElementById("final").classList.remove("hidden");
    }
});

// Poprawne działanie przycisków językowych
document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.addEventListener("click", () => {
        const langAttr = btn.dataset.lang; // pobiera PL lub EN
        setLang(langAttr);
        glitchClick(btn); // efekt glitch przy kliknięciu
    });
});

// Funkcja dodająca glitch efekt przycisku
function glitchClick(btn){
    btn.classList.add("glitch-click");
    setTimeout(()=> btn.classList.remove("glitch-click"), 200);
}

// Dodaj glitch do wszystkich przycisków z data-i18n
document.querySelectorAll("button[data-i18n]").forEach(btn => {
    btn.addEventListener("click", () => glitchClick(btn));
});
// Terminal Montauk
const terminalOutput = document.getElementById("terminal-output");
const terminalInput = document.getElementById("terminal-input");

// Komendy w obu językach
const terminalCommands = {
    en: {
        help: "Available commands: help, about, timeline, decrypt, whoami, logout",
        about: texts.en.about_1 + "\n" + texts.en.about_2 + "\n" + texts.en.about_3,
        timeline: texts.en.time1 + "\n" + texts.en.time2 + "\n" + texts.en.time3 + "\n" + texts.en.time4 + "\n" + texts.en.time5,
        decrypt: "File_1983 decrypted. Access granted.",
        whoami: "You are an Observer of Project Montauk.",
        logout: "Logging out..."
    },
    pl: {
        help: "Dostępne komendy: help, about, timeline, decrypt, whoami, logout",
        about: texts.pl.about_1 + "\n" + texts.pl.about_2 + "\n" + texts.pl.about_3,
        timeline: texts.pl.time1 + "\n" + texts.pl.time2 + "\n" + texts.pl.time3 + "\n" + texts.pl.time4 + "\n" + texts.pl.time5,
        decrypt: "Plik_1983 odszyfrowany. Dostęp przyznany.",
        whoami: "Jesteś Obserwatorem Projektu Montauk.",
        logout: "Wylogowywanie..."
    }
};

// Funkcja wyświetlająca wiadomość w terminalu
function terminalPrint(msg){
    const p = document.createElement("p");
    p.innerText = msg;
    terminalOutput.appendChild(p);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

// Obsługa Enter w terminalu
terminalInput.addEventListener("keydown", e => {
    if(e.key === "Enter"){
        const input = terminalInput.value.trim().toLowerCase();
        terminalInput.value = "";

        const commands = terminalCommands[lang]; // Pobiera aktualny język

        if(input in commands){
            terminalPrint("> " + input);
            terminalPrint(commands[input]);
            if(input === "logout") document.getElementById("secret").classList.add("hidden");
        } else {
            terminalPrint("> " + input);
            terminalPrint(lang === "pl" ? "Nieznana komenda" : "Unknown command");
        }
    }
});

// Fokus na input po odsłonięciu terminala
function unlock(){
    if(document.getElementById("code").value.toLowerCase()==="montauk1983"){
        const sec = document.getElementById("secret");
        sec.classList.remove("hidden");
        terminalInput.focus();
    }
}

// Przy zmianie języka - czyści terminal i resetuje język
function refreshTerminalLanguage(){
    terminalOutput.innerHTML = "";
}

// Dodanie glitch efektu przy przyciskach językowych
document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.addEventListener("click", () => {
        const langAttr = btn.dataset.lang; 
        setLang(langAttr);
        glitchClick(btn); // glitch efekt przy zmianie języka
        refreshTerminalLanguage(); // czyści terminal po zmianie języka
    });
});
