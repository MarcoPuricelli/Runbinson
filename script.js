// Traduzioni per il supporto multilingua
const translations = {
    it: {
      // Auth
      "login-title": "Accedi",
      "signup-title": "Registrati",
      "remember-text": "Ricorda i miei dati",
      "switch-to-signup": "Non hai un account? <span>Registrati</span>",
      "switch-to-login": "Hai già un account? <span>Accedi</span>",
      "select-language-text": "Seleziona la lingua",
  
      // Strava
      "connect-strava-text": "Connetti il tuo account Strava",
      "strava-description": "Per giocare a Runbinson, devi collegare il tuo account Strava per tracciare le tue corse.",
      "connect-btn-text": "Connetti con Strava",
  
      // Game UI
      "survival-label": "Sopravvivenza",
      "xp-label": "Esperienza",
      "add-marker-text": "Aggiungi Marker",
      "remove-marker-text": "Rimuovi Marker",
  
      // Menu
      "menu-title": "Menu",
  
      // Diary
      "diary-title": "Diario di Sopravvivenza",
      "new-entry-title": "Nuova Pagina",
  
      // Build
      "build-title": "Costruisci",
      "hut-cost": "Costo: 15 XP",
      "hoe-cost": "Costo: 5 XP",
      "fence-cost": "Costo: 5 XP",
      "bow-cost": "Costo: 10 XP",
      completed: "Completato",
  
      // Unlock
      "unlock-title": "Sblocca Zone",
      "zone1-name": "Zona 1: Spiaggia Nord",
      "zone2-name": "Zona 2: Foresta",
      "zone3-name": "Zona 3: Montagna",
      "zone4-name": "Zona 4: Grotta",
      "zone5-name": "Zona 5: Tempio",
      "zone1-cost": "Costo: 10 XP",
      "zone2-cost": "Costo: 15 XP",
      "zone3-cost": "Costo: 30 XP",
      "zone4-cost": "Costo: 50 XP",
      "zone5-cost": "Costo: 100 XP",
  
      // Marker
      "marker-title": "Aggiungi Marker",
  
      // Events
      "event-title": "Evento",
      "hunger-event": "Hai fame! Devi mangiare qualcosa o perderai punti sopravvivenza.",
      "thirst-event": "Hai sete! Devi bere qualcosa o perderai punti sopravvivenza.",
      "event-action": "Spendi 3 XP",
      "event-cancel": "Ignora",
  
      // Notifications
      "not-enough-xp": "Non hai abbastanza punti esperienza!",
      "zone-unlocked": "Hai sbloccato una nuova zona!",
      "item-built": "Hai costruito un nuovo oggetto!",
      "marker-added": "Marker aggiunto con successo!",
      "marker-removed": "Marker rimosso con successo!",
      "map-reset": "Mappa riportata alla posizione iniziale!",
      "max-items-reached": "Hai raggiunto il numero massimo di questo oggetto in questa zona!",
      "zone-locked": "Questa zona è bloccata! Sbloccala prima di costruire qui.",
      "survival-decreased": "Hai perso punti sopravvivenza!",
      "survival-increased": "Hai guadagnato punti sopravvivenza!",
      "xp-gained": "Hai guadagnato punti esperienza!",
      "diary-saved": "Pagina di diario salvata!",
      "strava-connected": "Account Strava collegato con successo!",
      "strava-error": "Errore durante la connessione a Strava. Riprova.",
      "login-success": "Accesso effettuato con successo!",
      "login-error": "Username o password errati!",
      "signup-success": "Registrazione completata con successo!",
      "passwords-not-match": "Le password non corrispondono!",
      "game-over": "Game Over! I tuoi punti sopravvivenza sono arrivati a 0.",
      "escape-ready": "Puoi costruire la barca per fuggire dall'isola!",
      "escape-not-ready": "Per fuggire hai bisogno di 30 punti sopravvivenza e 50 punti esperienza!",
      "escape-success": "Congratulazioni! Sei riuscito a fuggire dall'isola!",
      "logout-success": "Logout effettuato con successo!",
      "select-marker-to-remove": "Seleziona un marker da rimuovere",
    },
    en: {
      // Auth
      "login-title": "Login",
      "signup-title": "Sign Up",
      "remember-text": "Remember me",
      "switch-to-signup": "Don't have an account? <span>Sign Up</span>",
      "switch-to-login": "Already have an account? <span>Login</span>",
      "select-language-text": "Select Language",
  
      // Strava
      "connect-strava-text": "Connect your Strava account",
      "strava-description": "To play Runbinson, you need to connect your Strava account to track your runs.",
      "connect-btn-text": "Connect with Strava",
  
      // Game UI
      "survival-label": "Survival",
      "xp-label": "Experience",
      "add-marker-text": "Add Marker",
      "remove-marker-text": "Remove Marker",
  
      // Menu
      "menu-title": "Menu",
  
      // Diary
      "diary-title": "Survival Diary",
      "new-entry-title": "New Page",
  
      // Build
      "build-title": "Build",
      "hut-cost": "Cost: 15 XP",
      "hoe-cost": "Cost: 5 XP",
      "fence-cost": "Cost: 5 XP",
      "bow-cost": "Cost: 10 XP",
      completed: "Completed",
  
      // Unlock
      "unlock-title": "Unlock Zones",
      "zone1-name": "Zone 1: North Beach",
      "zone2-name": "Zone 2: Forest",
      "zone3-name": "Zone 3: Mountain",
      "zone4-name": "Zone 4: Cave",
      "zone5-name": "Zone 5: Temple",
      "zone1-cost": "Cost: 10 XP",
      "zone2-cost": "Cost: 15 XP",
      "zone3-cost": "Cost: 30 XP",
      "zone4-cost": "Cost: 50 XP",
      "zone5-cost": "Cost: 100 XP",
  
      // Marker
      "marker-title": "Add Marker",
  
      // Events
      "event-title": "Event",
      "hunger-event": "You are hungry! You need to eat something or you will lose survival points.",
      "thirst-event": "You are thirsty! You need to drink something or you will lose survival points.",
      "event-action": "Spend 3 XP",
      "event-cancel": "Ignore",
  
      // Notifications
      "not-enough-xp": "Not enough experience points!",
      "zone-unlocked": "You've unlocked a new zone!",
      "item-built": "You've built a new item!",
      "marker-added": "Marker added successfully!",
      "marker-removed": "Marker removed successfully!",
      "map-reset": "Map reset to initial position!",
      "max-items-reached": "You've reached the maximum number of this item in this zone!",
      "zone-locked": "This zone is locked! Unlock it before building here.",
      "survival-decreased": "You've lost survival points!",
      "survival-increased": "You've gained survival points!",
      "xp-gained": "You've gained experience points!",
      "diary-saved": "Diary page saved!",
      "strava-connected": "Strava account connected successfully!",
      "strava-error": "Error connecting to Strava. Please try again.",
      "login-success": "Login successful!",
      "login-error": "Incorrect username or password!",
      "signup-success": "Registration completed successfully!",
      "passwords-not-match": "Passwords do not match!",
      "game-over": "Game Over! Your survival points have reached 0.",
      "escape-ready": "You can build the boat to escape from the island!",
      "escape-not-ready": "To escape you need 30 survival points and 50 experience points!",
      "escape-success": "Congratulations! You managed to escape from the island!",
      "logout-success": "Logout successful!",
      "select-marker-to-remove": "Select a marker to remove",
    },
    de: {
      // Auth
      "login-title": "Anmelden",
      "signup-title": "Registrieren",
      "remember-text": "Angemeldet bleiben",
      "switch-to-signup": "Noch kein Konto? <span>Registrieren</span>",
      "switch-to-login": "Bereits ein Konto? <span>Anmelden</span>",
      "select-language-text": "Sprache auswählen",
  
      // Strava
      "connect-strava-text": "Verbinde dein Strava-Konto",
      "strava-description": "Um Runbinson zu spielen, musst du dein Strava-Konto verbinden, um deine Läufe zu verfolgen.",
      "connect-btn-text": "Mit Strava verbinden",
  
      // Game UI
      "survival-label": "Überleben",
      "xp-label": "Erfahrung",
      "add-marker-text": "Marker hinzufügen",
      "remove-marker-text": "Marker entfernen",
  
      // Menu
      "menu-title": "Menü",
  
      // Diary
      "diary-title": "Überlebenstagebuch",
      "new-entry-title": "Neue Seite",
  
      // Build
      "build-title": "Bauen",
      "hut-cost": "Kosten: 15 XP",
      "hoe-cost": "Kosten: 5 XP",
      "fence-cost": "Kosten: 5 XP",
      "bow-cost": "Kosten: 10 XP",
      completed: "Abgeschlossen",
  
      // Unlock
      "unlock-title": "Zonen freischalten",
      "zone1-name": "Zone 1: Nordstrand",
      "zone2-name": "Zone 2: Wald",
      "zone3-name": "Zone 3: Berg",
      "zone4-name": "Zone 4: Höhle",
      "zone5-name": "Zone 5: Tempel",
      "zone1-cost": "Kosten: 10 XP",
      "zone2-cost": "Kosten: 15 XP",
      "zone3-cost": "Kosten: 30 XP",
      "zone4-cost": "Kosten: 50 XP",
      "zone5-cost": "Kosten: 100 XP",
  
      // Marker
      "marker-title": "Marker hinzufügen",
  
      // Events
      "event-title": "Ereignis",
      "hunger-event": "Du hast Hunger! Du musst etwas essen oder du verlierst Überlebenspunkte.",
      "thirst-event": "Du hast Durst! Du musst etwas trinken oder du verlierst Überlebenspunkte.",
      "event-action": "3 XP ausgeben",
      "event-cancel": "Ignorieren",
  
      // Notifications
      "not-enough-xp": "Nicht genug Erfahrungspunkte!",
      "zone-unlocked": "Du hast eine neue Zone freigeschaltet!",
      "item-built": "Du hast einen neuen Gegenstand gebaut!",
      "marker-added": "Marker erfolgreich hinzugefügt!",
      "marker-removed": "Marker erfolgreich entfernt!",
      "map-reset": "Karte auf Ausgangsposition zurückgesetzt!",
      "max-items-reached": "Du hast die maximale Anzahl dieses Gegenstands in dieser Zone erreicht!",
      "zone-locked": "Diese Zone ist gesperrt! Schalte sie frei, bevor du hier baust.",
      "survival-decreased": "Du hast Überlebenspunkte verloren!",
      "survival-increased": "Du hast Überlebenspunkte gewonnen!",
      "xp-gained": "Du hast Erfahrungspunkte gewonnen!",
      "diary-saved": "Tagebuchseite gespeichert!",
      "strava-connected": "Strava-Konto erfolgreich verbunden!",
      "strava-error": "Fehler beim Verbinden mit Strava. Bitte versuche es erneut.",
      "login-success": "Anmeldung erfolgreich!",
      "login-error": "Falscher Benutzername oder Passwort!",
      "signup-success": "Registrierung erfolgreich abgeschlossen!",
      "passwords-not-match": "passwörter stimmen nicht überein!",
      "game-over": "Game Over! Deine Überlebenspunkte haben 0 erreicht.",
      "escape-ready": "Du kannst das Boot bauen, um von der Insel zu fliehen!",
      "escape-not-ready": "Um zu fliehen, benötigst du 30 Überlebenspunkte und 50 Erfahrungspunkte!",
      "escape-success": "Glückwunsch! Du hast es geschafft, von der Insel zu fliehen!",
      "logout-success": "Abmeldung erfolgreich!",
      "select-marker-to-remove": "Wähle einen Marker zum Entfernen aus",
    },
  }
  
  // Lingua corrente
  let currentLanguage = "it"
  
  // Funzione per cambiare lingua
  function setLanguage(lang) {
    currentLanguage = lang
    document.documentElement.lang = lang
    updateUILanguage()
  }
  
  // Aggiorna tutti i testi dell'interfaccia
  function updateUILanguage() {
    const elements = document.querySelectorAll("[id]")
    elements.forEach((element) => {
      const id = element.id
      if (translations[currentLanguage][id]) {
        if (id.includes("switch-to")) {
          element.innerHTML = translations[currentLanguage][id]
        } else {
          element.textContent = translations[currentLanguage][id]
        }
      }
    })
  
    // Aggiorna i testi di completamento
    const completionBadges = document.querySelectorAll(".completion-badge span:first-child")
    completionBadges.forEach((badge) => {
      badge.textContent = translations[currentLanguage]["completed"]
    })
  }
  
  // Ottieni una traduzione specifica
  function getTranslation(key) {
    return translations[currentLanguage][key] || key
  }
  
  // Gestione dello storage locale
  const storage = {
    // Salva i dati nel localStorage
    save: (key, data) => {
      localStorage.setItem(key, JSON.stringify(data))
    },
  
    // Carica i dati dal localStorage
    load: (key) => {
      const data = localStorage.getItem(key)
      return data ? JSON.parse(data) : null
    },
  
    // Rimuove i dati dal localStorage
    remove: (key) => {
      localStorage.removeItem(key)
    },
  
    // Verifica se esistono dati salvati
    exists: (key) => localStorage.getItem(key) !== null,
  
    // Salva i dati di gioco
    saveGameData: function (gameData) {
      this.save("runbinson_game", gameData)
    },
  
    // Carica i dati di gioco
    loadGameData: function () {
      return (
        this.load("runbinson_game") || {
          survivalPoints: 20,
          maxSurvivalPoints: 30,
          experiencePoints: 0,
          lastRunDate: null,
          consecutiveDaysWithoutRun: 0,
          unlockedZones: [0], // La zona 0 è quella iniziale
          buildings: {},
          markers: [],
          diaryEntries: [],
        }
      )
    },
  
    // Modifica la funzione saveCredentials nel storage object per salvare anche la scelta dell'utente
    saveCredentials: function (username, password, remember) {
      // Salva sempre la scelta dell'utente (remember)
      this.save("runbinson_remember", remember)
  
      if (remember) {
        this.save("runbinson_auth", { username, password })
        console.log("Credenziali salvate per il login automatico")
      } else {
        this.remove("runbinson_auth")
        console.log("Credenziali non salvate (remember me non selezionato)")
      }
    },
  
    // Aggiungi una nuova funzione per verificare se l'utente ha scelto di essere ricordato
    isRememberMeEnabled: function () {
      console.log(this.load("runbinson_remember") === true)
      return this.load("runbinson_remember") === true
    },
  
    // Carica le credenziali utente
    loadCredentials: function () {
      return this.load("runbinson_auth")
    },
  
    // Salva la lingua selezionata
    saveLanguage: function (lang) {
      this.save("runbinson_lang", lang)
    },
  
    // Carica la lingua selezionata
    loadLanguage: function () {
      return this.load("runbinson_lang") || "it"
    },
  
    // Salva il token di Strava
    saveStravaToken: function (token) {
      this.save("runbinson_strava", token)
    },
  
    // Carica il token di Strava
    loadStravaToken: function () {
      return this.load("runbinson_strava")
    },
  }
  
  // Gestione dell'autenticazione
  const auth = {
    // Utenti registrati (in un'app reale, questo sarebbe su un server)
    users: {},
  
    // Utente corrente
    currentUser: null,
  
    // Modifica la funzione init dell'oggetto auth per utilizzare la nuova funzione
    init: function () {
      // Carica gli utenti salvati
      const savedUsers = storage.load("runbinson_users")
      if (savedUsers) {
        this.users = savedUsers
      }
  
      // Controlla se ci sono credenziali salvate e se l'utente ha scelto di essere ricordato
      const savedCredentials = storage.loadCredentials()
      if (savedCredentials && storage.isRememberMeEnabled()) {
        // Esegui il login automatico con le credenziali salvate
        if (this.login(savedCredentials.username, savedCredentials.password)) {
          this.currentUser = savedCredentials.username
          console.log("Login automatico effettuato con successo")
  
          // Se il login automatico ha successo, vai alla schermata di gioco o Strava
          if (storage.loadStravaToken()) {
            showGameScreen()
          } else {
            showStravaConnectScreen()
          }
        } else {
          // Se il login automatico fallisce, rimuovi le credenziali salvate
          storage.remove("runbinson_auth")
          storage.save("runbinson_remember", false)
        }
      }
  
      // Event listeners per i form
      document.getElementById("login-btn").addEventListener("click", () => {
        const username = document.getElementById("username").value
        const password = document.getElementById("password").value
        const remember = document.getElementById("remember").checked
  
        // Nascondi eventuali messaggi di errore precedenti
        hideLoginError()
  
        if (this.login(username, password)) {
          // Salva le credenziali e la scelta dell'utente
          storage.saveCredentials(username, password, remember)
          showNotification(getTranslation("login-success"))
  
          // Controlla se l'utente ha già collegato Strava
          if (storage.loadStravaToken()) {
            showGameScreen()
          } else {
            showStravaConnectScreen()
          }
        } else {
          // Mostra messaggio di errore
          showLoginError(getTranslation("login-error"))
        }
      })
  
      document.getElementById("signup-btn").addEventListener("click", () => {
        const username = document.getElementById("new-username").value
        const password = document.getElementById("new-password").value
        const confirmPassword = document.getElementById("confirm-password").value
  
        // Nascondi eventuali messaggi di errore precedenti
        hideSignupError()
  
        if (password !== confirmPassword) {
          showSignupError(getTranslation("passwords-not-match"))
          return
        }
  
        if (this.register(username, password)) {
          showNotification(getTranslation("signup-success"))
  
          // Passa alla schermata di login
          document.getElementById("signup-form").classList.add("hidden")
          document.getElementById("login-form").classList.remove("hidden")
  
          // Pre-compila il campo username
          document.getElementById("username").value = username
        } else {
          showSignupError("Username già in uso")
        }
      })
  
      // Switch tra login e registrazione
      document.getElementById("switch-to-signup").addEventListener("click", () => {
        document.getElementById("login-form").classList.add("hidden")
        document.getElementById("signup-form").classList.remove("hidden")
        hideLoginError()
      })
  
      document.getElementById("switch-to-login").addEventListener("click", () => {
        document.getElementById("signup-form").classList.add("hidden")
        document.getElementById("login-form").classList.remove("hidden")
        hideSignupError()
      })
  
      // Modifica la funzione logout per aggiornare anche la scelta dell'utente
      document.getElementById("logout-btn").addEventListener("click", () => {
        this.logout()
        showNotification(getTranslation("logout-success"))
        document.getElementById("game-menu").classList.add("hidden")
        showAuthScreen()
      })
    },
  
    // Registra un nuovo utente
    register: function (username, password) {
      if (this.users[username]) {
        return false // Username già esistente
      }
  
      this.users[username] = {
        password: password,
        createdAt: new Date().toISOString(),
      }
  
      // Salva gli utenti
      storage.save("runbinson_users", this.users)
      return true
    },
  
    // Effettua il login
    login: function (username, password) {
      const user = this.users[username]
      if (user && user.password === password) {
        this.currentUser = username
        return true
      }
      return false
    },
  
    // Modifica la funzione logout per aggiornare anche la scelta dell'utente
    logout: function () {
      this.currentUser = null
      storage.remove("runbinson_auth")
      storage.save("runbinson_remember", false) // Resetta la scelta dell'utente
      console.log("Logout effettuato, credenziali rimosse e remember me disattivato")
    },
  
    // Verifica se l'utente è autenticato
    isAuthenticated: function () {
      return this.currentUser !== null
    },
  }
  
  // Funzioni per gestire i messaggi di errore
  function showLoginError(message) {
    const errorElement = document.getElementById("login-error")
    errorElement.textContent = message
    errorElement.style.display = "block"
  }
  
  function hideLoginError() {
    document.getElementById("login-error").style.display = "none"
  }
  
  function showSignupError(message) {
    const errorElement = document.getElementById("signup-error")
    errorElement.textContent = message
    errorElement.style.display = "block"
  }
  
  function hideSignupError() {
    document.getElementById("signup-error").style.display = "none"
  }
  
  // Simulazione dell'integrazione con Strava API
  const strava = {
    // Token di accesso simulato
    accessToken: null,
  
    // Inizializza l'integrazione con Strava
    init: function () {
      // Carica il token salvato
      this.accessToken = storage.loadStravaToken()
  
      // Event listener per il pulsante di connessione
      document.getElementById("connect-strava-btn").addEventListener("click", () => {
        // Simula la connessione a Strava
        this.simulateConnection()
      })
    },
  
    // Simula la connessione a Strava
    simulateConnection: function () {
      // Simula un ritardo di connessione
      setTimeout(() => {
        // Genera un token casuale
        this.accessToken = "simulated_token_" + Math.random().toString(36).substring(2)
        storage.saveStravaToken(this.accessToken)
  
        showNotification(getTranslation("strava-connected"))
        showGameScreen()
      }, 1000)
    },
  
    // Simula la verifica se l'utente ha corso oggi
    hasRunToday: () =>
      new Promise((resolve) => {
        // 30% di probabilità che l'utente abbia corso oggi
        const hasRun = Math.random() < 0.3
        setTimeout(() => resolve(hasRun), 300)
      }),
  
    // Simula il calcolo dei chilometri totali corsi
    getTotalRunningDistance: () =>
      new Promise((resolve) => {
        // Genera un numero casuale di chilometri (0-30km)
        const distance = Math.floor(Math.random() * 30000)
        setTimeout(() => resolve(distance), 300)
      }),
  
    // Simula la verifica dei giorni senza corsa
    getDaysWithoutRunning: () =>
      new Promise((resolve) => {
        // Genera un numero casuale di giorni (0-5)
        const days = Math.floor(Math.random() * 6)
        setTimeout(() => resolve(days), 300)
      }),
  }
  
  // Gestione della mappa
  const gameMap = {
    // Elementi DOM
    mapElement: null,
    mapWrapper: null,
    pointer: null,
    markersContainer: null,
  
    // Stato della mappa
    scale: 1,
    translateX: 0,
    translateY: 0,
    isDragging: false,
    startX: 0,
    startY: 0,
    isAddingMarker: false,
    isRemovingMarker: false,
  
    // Zone della mappa
    zones: [
      { id: 0, name: "Starting Area", unlocked: true },
      { id: 1, name: "North Beach", cost: 10, element: "fog-1" },
      { id: 2, name: "Forest", cost: 15, element: "fog-2" },
      { id: 3, name: "Mountain", cost: 30, element: "fog-3" },
      { id: 4, name: "Cave", cost: 50, element: "fog-4" },
      { id: 5, name: "Temple", cost: 100, element: "fog-5" },
    ],
  
    // Inizializza la mappa
    init: function () {
      this.mapElement = document.getElementById("map")
      this.mapWrapper = document.getElementById("map-wrapper")
      this.pointer = document.getElementById("pointer")
      this.markersContainer = document.getElementById("markers-container")
  
      // Carica lo stato delle zone
      const gameData = storage.loadGameData()
      this.updateFogOfWar(gameData.unlockedZones)
  
      // Carica i marker salvati
      this.loadMarkers(gameData.markers)
  
      // Event listeners per lo zoom
      document.getElementById("zoom-in").addEventListener("click", () => {
        this.zoom(0.1)
      })
  
      document.getElementById("zoom-out").addEventListener("click", () => {
        this.zoom(-0.1)
      })
  
      // Event listener per il reset della mappa
      document.getElementById("reset-map").addEventListener("click", () => {
        this.resetMap()
      })
  
      // Event listener per il panning
      this.mapElement.addEventListener("mousedown", this.startDrag.bind(this))
      document.addEventListener("mousemove", this.drag.bind(this))
      document.addEventListener("mouseup", this.endDrag.bind(this))
  
      // Touch events per dispositivi mobili
      this.mapElement.addEventListener("touchstart", this.startDragTouch.bind(this))
      document.addEventListener("touchmove", this.dragTouch.bind(this))
      document.addEventListener("touchend", this.endDragTouch.bind(this))
  
      // Event listener per l'aggiunta di marker
      document.getElementById("add-marker").addEventListener("click", () => {
        this.toggleMarkerMode()
      })
  
      // Event listener per la rimozione di marker
      document.getElementById("remove-marker").addEventListener("click", () => {
        this.toggleRemoveMarkerMode()
      })
  
      this.mapElement.addEventListener("click", this.handleMapClick.bind(this))
  
      // Event listeners per il modal dei marker
      document.getElementById("save-marker").addEventListener("click", this.saveMarker.bind(this))
      document.getElementById("cancel-marker").addEventListener("click", () => {
        document.getElementById("marker-modal").classList.add("hidden")
      })
    },
  
    // Aggiorna la nebbia di guerra in base alle zone sbloccate
    updateFogOfWar: function (unlockedZones) {
      this.zones.forEach((zone) => {
        if (zone.element) {
          const fogElement = document.getElementById(zone.element)
          if (unlockedZones.includes(zone.id)) {
            fogElement.style.display = "none"
          } else {
            fogElement.style.display = "block"
          }
        }
      })
    },
  
    // Carica i marker salvati
    loadMarkers: function (markers) {
      if (!markers) return
  
      this.markersContainer.innerHTML = ""
  
      markers.forEach((marker) => {
        this.createMarker(marker.x, marker.y, marker.name, marker.id)
      })
    },
  
    // Crea un nuovo marker sulla mappa
    createMarker: function (x, y, name, id) {
      const marker = document.createElement("div")
      marker.className = "map-marker"
      marker.style.left = `${x}px`
      marker.style.top = `${y}px`
  
      // Assegna un ID al marker se non esiste
      const markerId = id || Date.now()
      marker.dataset.id = markerId
  
      const label = document.createElement("div")
      label.className = "marker-label"
      label.textContent = name
  
      marker.appendChild(label)
      this.markersContainer.appendChild(marker)
  
      // Aggiungi event listener per la rimozione del marker
      marker.addEventListener("click", (e) => {
        if (this.isRemovingMarker) {
          e.stopPropagation()
          this.removeMarker(markerId)
        }
      })
  
      // Salva il marker nei dati di gioco solo se è nuovo
      if (!id) {
        const gameData = storage.loadGameData()
        gameData.markers.push({ x, y, name, id: markerId })
        storage.saveGameData(gameData)
      }
  
      return marker
    },
  
    // Rimuovi un marker dalla mappa
    removeMarker: function (markerId) {
      // Trova il marker nel DOM
      const marker = document.querySelector(`.map-marker[data-id="${markerId}"]`)
      if (marker) {
        marker.remove()
  
        // Rimuovi il marker dai dati di gioco
        const gameData = storage.loadGameData()
        gameData.markers = gameData.markers.filter((m) => m.id != markerId)
        storage.saveGameData(gameData)
  
        showNotification(getTranslation("marker-removed"))
  
        // Disattiva la modalità rimozione marker
        this.isRemovingMarker = false
        this.mapElement.style.cursor = "grab"
      }
    },
  
    // Reset della mappa alla posizione iniziale
    resetMap: function () {
      this.scale = 1
      this.translateX = 0
      this.translateY = 0
      this.updateMapTransform()
      showNotification(getTranslation("map-reset"))
    },
  
    // Zoom sulla mappa
    zoom: function (delta) {
      const newScale = this.scale + delta
  
      // Limita lo zoom tra 0.5 e 2
      if (newScale >= 0.5 && newScale <= 2) {
        this.scale = newScale
        this.updateMapTransform()
      }
    },
  
    // Inizia il trascinamento della mappa (mouse)
    startDrag: function (e) {
      if (this.isAddingMarker || this.isRemovingMarker) return
  
      this.isDragging = true
      this.startX = e.clientX - this.translateX
      this.startY = e.clientY - this.translateY
      this.mapElement.style.cursor = "grabbing"
    },
  
    // Trascina la mappa (mouse)
    drag: function (e) {
      if (!this.isDragging) return
  
      this.translateX = e.clientX - this.startX
      this.translateY = e.clientY - this.startY
      this.updateMapTransform()
    },
  
    // Termina il trascinamento della mappa (mouse)
    endDrag: function () {
      this.isDragging = false
      this.mapElement.style.cursor = "grab"
    },
  
    // Inizia il trascinamento della mappa (touch)
    startDragTouch: function (e) {
      if (this.isAddingMarker || this.isRemovingMarker) return
  
      this.isDragging = true
      this.startX = e.touches[0].clientX - this.translateX
      this.startY = e.touches[0].clientY - this.translateY
    },
  
    // Trascina la mappa (touch)
    dragTouch: function (e) {
      if (!this.isDragging) return
  
      e.preventDefault()
      this.translateX = e.touches[0].clientX - this.startX
      this.translateY = e.touches[0].clientY - this.startY
      this.updateMapTransform()
    },
  
    // Termina il trascinamento della mappa (touch)
    endDragTouch: function () {
      this.isDragging = false
    },
  
    // Aggiorna la trasformazione della mappa
    updateMapTransform: function () {
      this.mapElement.style.transform = `translate(${this.translateX}px, ${this.translateY}px) scale(${this.scale})`
    },
  
    // Attiva/disattiva la modalità di aggiunta marker
    toggleMarkerMode: function () {
      // Disattiva la modalità rimozione marker se attiva
      if (this.isRemovingMarker) {
        this.isRemovingMarker = false
      }
  
      this.isAddingMarker = !this.isAddingMarker
  
      if (this.isAddingMarker) {
        this.pointer.classList.remove("hidden")
        this.mapElement.style.cursor = "crosshair"
      } else {
        this.pointer.classList.add("hidden")
        this.mapElement.style.cursor = "grab"
      }
    },
  
    // Attiva/disattiva la modalità di rimozione marker
    toggleRemoveMarkerMode: function () {
      // Disattiva la modalità aggiunta marker se attiva
      if (this.isAddingMarker) {
        this.isAddingMarker = false
        this.pointer.classList.add("hidden")
      }
  
      this.isRemovingMarker = !this.isRemovingMarker
  
      if (this.isRemovingMarker) {
        this.mapElement.style.cursor = "not-allowed"
        showNotification(getTranslation("select-marker-to-remove"))
      } else {
        this.mapElement.style.cursor = "grab"
      }
    },
  
    // Gestisce il click sulla mappa
    handleMapClick: function (e) {
      if (!this.isAddingMarker) return
  
      // Calcola la posizione del click relativa alla mappa
      const rect = this.mapElement.getBoundingClientRect()
      const x = (e.clientX - rect.left) / this.scale - this.translateX / this.scale
      const y = (e.clientY - rect.top) / this.scale - this.translateY / this.scale
  
      // Verifica se il punto è in una zona sbloccata
      const gameData = storage.loadGameData()
      const isInUnlockedZone = this.isPointInUnlockedZone(x, y, gameData.unlockedZones)
  
      if (!isInUnlockedZone) {
        showNotification(getTranslation("zone-locked"))
        return
      }
  
      // Mostra il modal per nominare il marker
      document.getElementById("marker-modal").classList.remove("hidden")
      document.getElementById("marker-name").value = ""
      document.getElementById("marker-name").focus()
  
      // Salva temporaneamente le coordinate
      this.tempMarkerX = x
      this.tempMarkerY = y
    },
  
    // Salva il marker
    saveMarker: function () {
      const name = document.getElementById("marker-name").value.trim()
  
      if (name) {
        this.createMarker(this.tempMarkerX, this.tempMarkerY, name)
        document.getElementById("marker-modal").classList.add("hidden")
        showNotification(getTranslation("marker-added"))
  
        // Disattiva la modalità marker
        this.isAddingMarker = false
        this.pointer.classList.add("hidden")
        this.mapElement.style.cursor = "grab"
      }
    },
  
    // Verifica se un punto è in una zona sbloccata
    isPointInUnlockedZone: (x, y, unlockedZones) => {
      // Questa è una semplificazione. In un'app reale, dovresti verificare
      // se il punto è all'interno dei confini di una zona sbloccata.
      // Per questa demo, assumiamo che sia sempre in una zona sbloccata.
      return true
    },
  }
  
  // Gestione degli eventi di gioco
  const events = {
    // Inizializza gli eventi
    init: function () {
      // Event listeners per i dialoghi
      document.getElementById("dialog-btn").addEventListener("click", () => {
        document.getElementById("dialog-box").classList.add("hidden")
  
        // Esegui il callback se presente
        if (this.dialogCallback) {
          this.dialogCallback()
          this.dialogCallback = null
        }
      })
    },
  
    // Callback per i dialoghi
    dialogCallback: null,
  }
  
  // Mostra una notifica
  function showNotification(message) {
    const notification = document.getElementById("notification")
    const notificationText = document.getElementById("notification-text")
  
    notificationText.textContent = message
    notification.classList.remove("hidden")
  
    // Nascondi la notifica dopo 3 secondi
    setTimeout(() => {
      notification.classList.add("hidden")
    }, 3000)
  }
  
  // Mostra un dialogo
  function showDialog(message, callback) {
    const dialogBox = document.getElementById("dialog-box")
    const dialogText = document.getElementById("dialog-text")
  
    dialogText.textContent = message
    dialogBox.classList.remove("hidden")
  
    // Salva il callback
    events.dialogCallback = callback
  }
  
  // Logica principale del gioco
  const game = {
    // Dati di gioco
    data: null,
  
    // Timer per gli eventi
    eventTimer: null,
  
    // Inizializza il gioco
    init: function () {
      // Carica i dati di gioco
      this.data = storage.loadGameData()
  
      // Aggiorna l'interfaccia
      this.updateUI()
  
      // Inizializza gli eventi casuali
      this.startRandomEvents()
  
      // Controlla le corse su Strava
      this.checkStravaActivities()
  
      // Event listeners per i menu
      document.getElementById("menu-btn").addEventListener("click", () => {
        document.getElementById("game-menu").classList.remove("hidden")
      })
  
      document.getElementById("close-menu").addEventListener("click", () => {
        document.getElementById("game-menu").classList.add("hidden")
      })
  
      document.getElementById("diary-btn").addEventListener("click", () => {
        document.getElementById("game-menu").classList.add("hidden")
        document.getElementById("diary-modal").classList.remove("hidden")
        this.updateDiary()
      })
  
      document.getElementById("build-btn").addEventListener("click", () => {
        document.getElementById("game-menu").classList.add("hidden")
        document.getElementById("build-modal").classList.remove("hidden")
        this.updateBuildCosts()
        this.updateItemCounters() // Aggiorna i contatori degli oggetti
      })
  
      document.getElementById("unlock-btn").addEventListener("click", () => {
        document.getElementById("game-menu").classList.add("hidden")
        document.getElementById("unlock-modal").classList.remove("hidden")
        this.updateUnlockZones()
      })
  
      // Chiusura dei modali
      document.getElementById("close-diary").addEventListener("click", () => {
        document.getElementById("diary-modal").classList.add("hidden")
      })
  
      document.getElementById("close-build").addEventListener("click", () => {
        document.getElementById("build-modal").classList.add("hidden")
      })
  
      document.getElementById("close-unlock").addEventListener("click", () => {
        document.getElementById("unlock-modal").classList.add("hidden")
      })
  
      // Event listener per il salvataggio del diario
      document.getElementById("save-entry").addEventListener("click", this.saveDiaryEntry.bind(this))
  
      // Event listeners per la costruzione di oggetti
      const buildItems = document.querySelectorAll(".build-item")
      buildItems.forEach((item) => {
        item.addEventListener("click", () => {
          const itemType = item.dataset.type
          const baseCost = Number.parseInt(item.dataset.cost)
          this.buildItem(itemType, baseCost)
        })
      })
  
      // Event listeners per lo sblocco delle zone
      const unlockButtons = document.querySelectorAll(".unlock-btn")
      unlockButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const zoneId = Number.parseInt(button.id.split("-")[2])
          const zoneItem = button.parentElement
          const cost = Number.parseInt(zoneItem.dataset.cost)
          this.unlockZone(zoneId, cost)
        })
      })
    },
  
    // Aggiorna l'interfaccia utente
    updateUI: function () {
      // Aggiorna i punti sopravvivenza
      document.getElementById("survival-value").textContent = `${this.data.survivalPoints}/${this.data.maxSurvivalPoints}`
      const survivalPercentage = (this.data.survivalPoints / this.data.maxSurvivalPoints) * 100
      document.getElementById("survival-progress").style.width = `${survivalPercentage}%`
  
      // Aggiorna i punti esperienza
      document.getElementById("xp-value").textContent = this.data.experiencePoints
      const xpPercentage = Math.min(100, (this.data.experiencePoints / 100) * 100)
      document.getElementById("xp-progress").style.width = `${xpPercentage}%`
    },
  
    // Aggiorna i costi di costruzione in base ai punti sopravvivenza
    updateBuildCosts: function () {
      const buildItems = document.querySelectorAll(".build-item")
      const survivalDeficit = this.data.maxSurvivalPoints - this.data.survivalPoints
  
      buildItems.forEach((item) => {
        const baseCost = Number.parseInt(item.dataset.cost)
        const actualCost = baseCost + survivalDeficit
  
        const costElement = item.querySelector("p")
        costElement.textContent = `${getTranslation("hut-cost").split(":")[0]}: ${actualCost} XP`
      })
    },
  
    // Aggiorna i contatori degli oggetti
    updateItemCounters: function () {
      const buildItems = document.querySelectorAll(".build-item")
  
      buildItems.forEach((item) => {
        const itemType = item.dataset.type
        const maxItems = Number.parseInt(item.dataset.max)
        const itemCount = this.getItemCountInCurrentZone(itemType)
  
        // Aggiorna il contatore
        const counterElement = item.querySelector(".item-counter")
        counterElement.textContent = `${itemCount}/${maxItems}`
  
        // Mostra/nascondi il badge di completamento
        const completionBadge = item.querySelector(".completion-badge")
        if (itemCount >= maxItems) {
          completionBadge.classList.remove("hidden")
        } else {
          completionBadge.classList.add("hidden")
        }
      })
    },
  
    // Aggiorna lo stato delle zone sbloccabili
    updateUnlockZones: function () {
      const zoneItems = document.querySelectorAll(".zone-item")
  
      zoneItems.forEach((item) => {
        const zoneId = Number.parseInt(item.dataset.zone)
        const unlockButton = item.querySelector(".unlock-btn")
  
        if (this.data.unlockedZones.includes(zoneId)) {
          item.classList.add("unlocked")
          unlockButton.disabled = true
          unlockButton.textContent = "Sbloccato"
        } else {
          item.classList.remove("unlocked")
          unlockButton.disabled = false
          unlockButton.textContent = "Sblocca"
        }
      })
    },
  
    // Aggiorna il diario
    updateDiary: function () {
      const diaryEntries = document.getElementById("diary-entries")
      diaryEntries.innerHTML = ""
  
      if (this.data.diaryEntries.length === 0) {
        const emptyMessage = document.createElement("p")
        emptyMessage.textContent = "Il tuo diario è vuoto. Scrivi la tua prima pagina!"
        diaryEntries.appendChild(emptyMessage)
        return
      }
  
      // Ordina le voci per data (dalla più recente)
      const sortedEntries = [...this.data.diaryEntries].sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
      })
  
      sortedEntries.forEach((entry) => {
        const entryElement = document.createElement("div")
        entryElement.className = "diary-entry"
  
        const dateElement = document.createElement("div")
        dateElement.className = "entry-date"
        dateElement.textContent = new Date(entry.date).toLocaleDateString()
  
        const contentElement = document.createElement("div")
        contentElement.className = "entry-content"
        contentElement.textContent = entry.content
  
        entryElement.appendChild(dateElement)
        entryElement.appendChild(contentElement)
        diaryEntries.appendChild(entryElement)
      })
    },
  
    // Salva una nuova pagina di diario
    saveDiaryEntry: function () {
      const diaryText = document.getElementById("diary-text").value.trim()
  
      if (diaryText) {
        this.data.diaryEntries.push({
          date: new Date().toISOString(),
          content: diaryText,
        })
  
        storage.saveGameData(this.data)
        this.updateDiary()
  
        // Pulisci il campo di testo
        document.getElementById("diary-text").value = ""
  
        showNotification(getTranslation("diary-saved"))
      }
    },
  
    // Costruisci un oggetto
    buildItem: function (itemType, baseCost) {
      // Calcola il costo effettivo in base ai punti sopravvivenza
      const survivalDeficit = this.data.maxSurvivalPoints - this.data.survivalPoints
      const actualCost = baseCost + survivalDeficit
  
      // Verifica se l'utente ha abbastanza punti esperienza
      if (this.data.experiencePoints < actualCost) {
        showNotification(getTranslation("not-enough-xp"))
        return
      }
  
      // Verifica il limite di costruzioni per zona
      const itemCount = this.getItemCountInCurrentZone(itemType)
      const maxItems = Number.parseInt(document.querySelector(`.build-item[data-type="${itemType}"]`).dataset.max)
      if (itemCount >= maxItems) {
        showNotification(getTranslation("max-items-reached"))
        return
      }
  
      // Sottrai i punti esperienza
      this.data.experiencePoints -= actualCost
  
      // Aggiungi l'oggetto costruito
      if (!this.data.buildings[itemType]) {
        this.data.buildings[itemType] = []
      }
  
      this.data.buildings[itemType].push({
        zone: this.getCurrentZone(),
        built: new Date().toISOString(),
      })
  
      // Salva i dati di gioco
      storage.saveGameData(this.data)
  
      // Aggiorna l'interfaccia
      this.updateUI()
      this.updateItemCounters() // Aggiorna i contatori degli oggetti
  
      // Chiudi il modal
      document.getElementById("build-modal").classList.add("hidden")
  
      showNotification(getTranslation("item-built"))
  
      // Verifica se l'utente può costruire la barca
      this.checkEscapeCondition()
    },
  
    // Sblocca una zona
    unlockZone: function (zoneId, cost) {
      // Verifica se l'utente ha abbastanza punti esperienza
      if (this.data.experiencePoints < cost) {
        showNotification(getTranslation("not-enough-xp"))
        return
      }
  
      // Verifica se la zona è già sbloccata
      if (this.data.unlockedZones.includes(zoneId)) {
        return
      }
  
      // Sottrai i punti esperienza
      this.data.experiencePoints -= cost
  
      // Aggiungi la zona alle zone sbloccate
      this.data.unlockedZones.push(zoneId)
  
      // Aggiorna la nebbia di guerra
      gameMap.updateFogOfWar(this.data.unlockedZones)
  
      // Salva i dati di gioco
      storage.saveGameData(this.data)
  
      // Aggiorna l'interfaccia
      this.updateUI()
      this.updateUnlockZones()
  
      // Chiudi il modal
      document.getElementById("unlock-modal").classList.add("hidden")
  
      // Mostra la notifica
      showNotification(getTranslation("zone-unlocked"))
  
      // Riproduci un suono (simulato)
      console.log("Suono di sblocco riprodotto")
    },
  
    // Ottieni il numero di oggetti di un tipo nella zona corrente
    getItemCountInCurrentZone: function (itemType) {
      if (!this.data.buildings[itemType]) {
        return 0
      }
  
      const currentZone = this.getCurrentZone()
      return this.data.buildings[itemType].filter((item) => item.zone === currentZone).length
    },
  
    // Ottieni la zona corrente (semplificato per la demo)
    getCurrentZone: function () {
      // In un'app reale, dovresti determinare la zona in base alla posizione sulla mappa
      return this.data.unlockedZones[0]
    },
  
    // Inizia gli eventi casuali
    startRandomEvents: function () {
      // Pulisci eventuali timer esistenti
      if (this.eventTimer) {
        clearInterval(this.eventTimer)
      }
  
      this.eventTimer = setInterval(() => {
        // 50% di probabilità di generare un evento
        if (Math.random() > 0.5) {
          this.triggerRandomEvent()
        }
      }, 30 * 60 * 1000) // 30 minuti
    },
  
    // Genera un evento casuale
    triggerRandomEvent: function () {
      // 50% fame, 50% sete
      const isHunger = Math.random() > 0.5
  
      const eventModal = document.getElementById("event-modal")
      const eventTitle = document.getElementById("event-title")
      const eventDescription = document.getElementById("event-description")
      const eventAction = document.getElementById("event-action")
  
      eventTitle.textContent = getTranslation("event-title")
      eventDescription.textContent = getTranslation(isHunger ? "hunger-event" : "thirst-event")
      eventAction.textContent = getTranslation("event-action")
  
      // Mostra il modal
      eventModal.classList.remove("hidden")
  
      // Event listener per l'azione
      const handleAction = () => {
        // Verifica se l'utente ha abbastanza punti esperienza
        if (this.data.experiencePoints >= 3) {
          // Sottrai i punti esperienza
          this.data.experiencePoints -= 3
  
          // Aggiorna l'interfaccia
          this.updateUI()
  
          // Chiudi il modal
          eventModal.classList.add("hidden")
  
          // Rimuovi l'event listener
          eventAction.removeEventListener("click", handleAction)
          document.getElementById("event-cancel").removeEventListener("click", handleCancel)
        } else {
          showNotification(getTranslation("not-enough-xp"))
  
          // L'utente ha ancora mezz'ora per ottenere i punti
          setTimeout(() => {
            // Se il modal è ancora aperto, l'utente non ha risolto l'evento
            if (!eventModal.classList.contains("hidden")) {
              this.decreaseSurvivalPoints(2)
              eventModal.classList.add("hidden")
            }
          }, 30 * 1000) // 30 secondi per la demo
        }
      }
  
      const handleCancel = () => {
        // Chiudi il modal
        eventModal.classList.add("hidden")
  
        // L'utente ha mezz'ora per ottenere i punti
        setTimeout(() => {
          this.decreaseSurvivalPoints(2)
        }, 30 * 1000) // 30 secondi per la demo
  
        // Rimuovi gli event listener
        eventAction.removeEventListener("click", handleAction)
        document.getElementById("event-cancel").removeEventListener("click", handleCancel)
      }
  
      // Aggiungi gli event listener
      eventAction.addEventListener("click", handleAction)
      document.getElementById("event-cancel").addEventListener("click", handleCancel)
    },
  
    // Diminuisci i punti sopravvivenza
    decreaseSurvivalPoints: function (amount) {
      this.data.survivalPoints = Math.max(0, this.data.survivalPoints - amount)
  
      // Salva i dati di gioco
      storage.saveGameData(this.data)
  
      // Aggiorna l'interfaccia
      this.updateUI()
  
      // Mostra la notifica
      showNotification(getTranslation("survival-decreased"))
  
      // Verifica se il gioco è finito
      if (this.data.survivalPoints === 0) {
        this.gameOver()
      }
    },
  
    // Aumenta i punti sopravvivenza
    increaseSurvivalPoints: function (amount) {
      this.data.survivalPoints = Math.min(this.data.maxSurvivalPoints, this.data.survivalPoints + amount)
  
      // Salva i dati di gioco
      storage.saveGameData(this.data)
  
      // Aggiorna l'interfaccia
      this.updateUI()
  
      // Mostra la notifica
      showNotification(getTranslation("survival-increased"))
    },
  
    // Aumenta i punti esperienza
    increaseExperiencePoints: function (amount) {
      this.data.experiencePoints += amount
  
      // Se i punti sopravvivenza sono al massimo, aggiungi punti esperienza extra
      if (this.data.survivalPoints === this.data.maxSurvivalPoints) {
        this.data.experiencePoints += 10
      }
  
      // Salva i dati di gioco
      storage.saveGameData(this.data)
  
      // Aggiorna l'interfaccia
      this.updateUI()
  
      // Mostra la notifica
      showNotification(getTranslation("xp-gained"))
    },
  
    // Game over
    gameOver: function () {
      // Mostra un dialogo di game over
      showDialog(getTranslation("game-over"), () => {
        // Resetta il gioco
        this.data = {
          survivalPoints: 20,
          maxSurvivalPoints: 30,
          experiencePoints: 0,
          lastRunDate: null,
          consecutiveDaysWithoutRun: 0,
          unlockedZones: [0],
          buildings: {},
          markers: [],
          diaryEntries: this.data.diaryEntries, // Mantieni il diario
        }
  
        // Salva i dati di gioco
        storage.saveGameData(this.data)
  
        // Aggiorna l'interfaccia
        this.updateUI()
  
        // Aggiorna la nebbia di guerra
        gameMap.updateFogOfWar(this.data.unlockedZones)
      })
    },
  
    // Controlla le attività su Strava
    checkStravaActivities: function () {
      // Verifica se l'utente ha corso oggi
      strava.hasRunToday().then((hasRun) => {
        if (hasRun) {
          // Resetta il contatore dei giorni senza corsa
          this.data.consecutiveDaysWithoutRun = 0
          this.data.lastRunDate = new Date().toISOString()
        } else {
          // Verifica se è passato un giorno dall'ultima verifica
          const lastCheck = this.data.lastRunDate ? new Date(this.data.lastRunDate) : null
          const today = new Date()
  
          if (!lastCheck || today.toDateString() !== lastCheck.toDateString()) {
            // Incrementa il contatore dei giorni senza corsa
            this.data.consecutiveDaysWithoutRun++
            this.data.lastRunDate = today.toISOString()
  
            // Se sono passati 3 giorni senza correre, diminuisci i punti sopravvivenza
            if (this.data.consecutiveDaysWithoutRun >= 3) {
              this.decreaseSurvivalPoints(1)
              this.data.consecutiveDaysWithoutRun = 0 // Resetta il contatore
            }
          }
        }
  
        // Salva i dati di gioco
        storage.saveGameData(this.data)
      })
  
      // Calcola i chilometri totali corsi
      strava.getTotalRunningDistance().then((distance) => {
        // Converti da metri a chilometri
        const km = distance / 1000
  
        // Ogni 10km, aggiungi 1 punto esperienza
        const xpGained = Math.floor(km / 10)
  
        if (xpGained > 0) {
          this.increaseExperiencePoints(xpGained)
        }
  
        // Ogni 3 punti esperienza, aggiungi 1 punto sopravvivenza
        const survivalGained = Math.floor(xpGained / 3)
  
        if (survivalGained > 0) {
          this.increaseSurvivalPoints(survivalGained)
        }
      })
    },
  
    // Verifica se l'utente può costruire la barca per fuggire
    checkEscapeCondition: function () {
      // Verifica se tutte le zone sono state sbloccate
      const allZonesUnlocked = gameMap.zones.every((zone) => zone.id === 0 || this.data.unlockedZones.includes(zone.id))
  
      // Verifica se l'utente ha abbastanza punti sopravvivenza ed esperienza
      const hasEnoughPoints = this.data.survivalPoints >= 30 && this.data.experiencePoints >= 50;
  
      if (allZonesUnlocked && hasEnoughPoints) {
        showDialog(getTranslation("escape-ready"), () => {
          // Mostra un dialogo di vittoria
          showDialog(getTranslation("escape-success"), () => {
            // Resetta il gioco
            this.data = {
              survivalPoints: 20,
              maxSurvivalPoints: 30,
              experiencePoints: 0,
              lastRunDate: null,
              consecutiveDaysWithoutRun: 0,
              unlockedZones: [0],
              buildings: {},
              markers: [],
              diaryEntries: this.data.diaryEntries, // Mantieni il diario
            }
  
            // Salva i dati di gioco
            storage.saveGameData(this.data)
  
            // Aggiorna l'interfaccia
            this.updateUI()
  
            // Aggiorna la nebbia di guerra
            gameMap.updateFogOfWar(this.data.unlockedZones)
          })
        })
      }
    },
  }
  
  // Gestione del diario
  const diary = {
    // Inizializza il diario
    init: function () {
      // Carica le voci del diario
      this.loadEntries()
    },
  
    // Carica le voci del diario
    loadEntries: () => {
      const gameData = storage.loadGameData()
      const diaryEntries = document.getElementById("diary-entries")
  
      diaryEntries.innerHTML = ""
  
      if (gameData.diaryEntries.length === 0) {
        const emptyMessage = document.createElement("p")
        emptyMessage.textContent = "Il tuo diario è vuoto. Scrivi la tua prima pagina!"
        diaryEntries.appendChild(emptyMessage)
        return
      }
  
      // Ordina le voci per data (dalla più recente)
      const sortedEntries = [...gameData.diaryEntries].sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
      })
  
      sortedEntries.forEach((entry) => {
        const entryElement = document.createElement("div")
        entryElement.className = "diary-entry"
  
        const dateElement = document.createElement("div")
        dateElement.className = "entry-date"
        dateElement.textContent = new Date(entry.date).toLocaleDateString()
  
        const contentElement = document.createElement("div")
        contentElement.className = "entry-content"
        contentElement.textContent = entry.content
  
        entryElement.appendChild(dateElement)
        entryElement.appendChild(contentElement)
        diaryEntries.appendChild(entryElement)
      })
    },
  }
  
  // Inizializzazione dell'applicazione
  document.addEventListener("DOMContentLoaded", () => {
    // Mostra la schermata di caricamento
    const loadingScreen = document.getElementById("loading-screen")
    const loadingProgress = document.querySelector(".loading-progress")
  
    // Simula il caricamento
    let progress = 0
    const loadingInterval = setInterval(() => {
      progress += 5
      loadingProgress.style.width = `${progress}%`
  
      if (progress >= 100) {
        clearInterval(loadingInterval)
  
        // Carica la lingua salvata
        const savedLanguage = storage.loadLanguage()
        setLanguage(savedLanguage)
  
        // Mostra la schermata di selezione lingua o di autenticazione
        setTimeout(() => {
          loadingScreen.classList.add("hidden")
  
          // Se la lingua è già stata selezionata, vai direttamente all'autenticazione
          if (storage.exists("runbinson_lang")) {
            if (localStorage.getItem("runbinson_remember") === "false") {
              //TEST per evitare login
              showAuthScreen()
            }
          } else {
            showLanguageScreen()
          }
        }, 500)
      }
    }, 100)
  
    // Inizializza i moduli
    auth.init()
    strava.init()
    events.init()
  
    // Event listeners per la selezione della lingua
    document.getElementById("lang-it").addEventListener("click", () => {
      setLanguage("it")
      storage.saveLanguage("it")
      showAuthScreen()
    })
  
    document.getElementById("lang-en").addEventListener("click", () => {
      setLanguage("en")
      storage.saveLanguage("en")
      showAuthScreen()
    })
  
    document.getElementById("lang-de").addEventListener("click", () => {
      setLanguage("de")
      storage.saveLanguage("de")
      showAuthScreen()
    })
  })
  
  // Mostra la schermata di selezione lingua
  function showLanguageScreen() {
    document.getElementById("language-select").classList.remove("hidden")
    document.getElementById("auth-screen").classList.add("hidden")
    document.getElementById("strava-connect").classList.add("hidden")
    document.getElementById("game-screen").classList.add("hidden")
  }
  
  // Mostra la schermata di autenticazione
  function showAuthScreen() {
    document.getElementById("language-select").classList.add("hidden")
    document.getElementById("auth-screen").classList.remove("hidden")
    document.getElementById("strava-connect").classList.add("hidden")
    document.getElementById("game-screen").classList.add("hidden")
  
    // Aggiorna i testi in base alla lingua
    updateUILanguage()
  
    // Nascondi eventuali messaggi di errore
    hideLoginError()
    hideSignupError()
  }
  
  // Mostra la schermata di connessione a Strava
  function showStravaConnectScreen() {
    document.getElementById("language-select").classList.add("hidden")
    document.getElementById("auth-screen").classList.add("hidden")
    document.getElementById("strava-connect").classList.remove("hidden")
    document.getElementById("game-screen").classList.add("hidden")
  
    // Aggiorna i testi in base alla lingua
    updateUILanguage()
  }
  
  // Mostra la schermata di gioco
  function showGameScreen() {
    document.getElementById("language-select").classList.add("hidden")
    document.getElementById("auth-screen").classList.add("hidden")
    document.getElementById("strava-connect").classList.add("hidden")
    document.getElementById("game-screen").classList.remove("hidden")
  
    // Aggiorna i testi in base alla lingua
    updateUILanguage()
  
    // Inizializza la mappa e il gioco
    gameMap.init()
    game.init()
    diary.init()
  }