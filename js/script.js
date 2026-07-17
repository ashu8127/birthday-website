/* =====================================================================
   ROMANTIC BIRTHDAY WEBSITE — main.js
   Pure HTML/CSS/JS. No backend. Cinematic experience.
   Everything editable via CONFIG object at the top.
   ===================================================================== */

/* ------------------------------------------------------------------ */
/* 1. CONFIG — edit everything here                                    */
/* ------------------------------------------------------------------ */
const CONFIG = {
  // Love letter (typewriter). Use \n for line breaks.
  letterText:
    "Mujhe kabhi expect nahi tha ki tum meri life mein itni jaldi itni important ho jaogi. " +
    "Mujhe aaj bhi yaad hai jab hum pehli baar CP mein mile the, Gate No. 8 par, jahan tum aayi thi aur jiske liye tumne mujhe pure 40 minute wait karwaya tha. " +
    "Mujhe to us din bhi doubt tha ki tum shayad nahi aaogi. Mazak! 😄\n\n" +
    "Lekin shayad us din se hi ek alag si journey start ho gayi thi. Dheere dheere tum meri life ka itna important part ban gayi ki ab kuch baatein aur kuch moments tumhare bina adhure lagte hain.\n\n" +
    "Mujhe pata hai ki main kabhi kabhi bahut zyada bol deta hoon, overreact kar deta hoon, ya bina soche samjhe kuch aisi baatein keh deta hoon jo shayad tumhe buri lagti hongi. " +
    "Lekin ek baat jo maine hamesha notice ki hai, woh ye hai ki maine tumhari taraf se kabhi ye nahi suna ki ‘main bhi tumhe chhod dungi’ ya ‘ab bas’. " +
    "Aur sach kahun, mujhe ummeed hai ki kabhi sunne ko milega bhi nahi.\n\n" +
    "Har relationship perfect nahi hota, aur na hi hum perfect hain. Lekin tumhara patience, tumhara samajhna aur har situation mein saath rehna mere liye bahut matter karta hai. " +
    "Shayad main hamesha express na kar paun, par tum meri life mein bahut special ho.\n\n" +
    "Tumhare birthday par bas itna kehna chahta hoon ki tum hamesha khush raho, haste raho, aur tumhari life mein jitni bhi khushiyan hain woh aur badhti rahein. " +
    "Aur agar kabhi humare beech chhoti moti problems aaye bhi, to bas itna sa promise rahe ki hum baat karke unhe solve karenge, ek dusre ka saath nahi chhodenge.\n\n" +
    "Happy Birthday to the girl who unexpectedly became babu for me & one of the most important parts of my life. ❤️🎂",

  letterSign: "Forever yours, ❤️",

  // Photos: { src, caption }. Add as many as you like.
  // Use remote URLs or drop files in ./assets/photos/ and reference "./assets/photos/your.jpg".
  photos: [
    { src: "./assets/photos/WhatsApp Image 2026-07-16 at 16.21.14 (1).jpeg", caption: "The first smile" },
    { src: "./assets/photos/WhatsApp Image 2026-07-16 at 16.21.13 (1).jpeg", caption: "Lost in your eyes" },
    { src: "./assets/photos/WhatsApp Image 2026-07-16 at 16.21.14 (2).jpeg", caption: "Golden hour" },
    { src: "./assets/photos/WhatsApp Image 2026-07-16 at 16.21.15 (1).jpeg", caption: "Together" },
    { src: "./assets/photos/WhatsApp Image 2026-07-16 at 16.21.15.jpeg", caption: "My favorite view" },
    { src: "./assets/photos/WhatsApp Image 2026-07-16 at 16.21.13.jpeg", caption: "Pure joy" },
  ],

  // Timeline: { date, title, text }
  timeline: [
    { date: "Day One", title: "First Talk", text: "A simple hello that changed everything." },
    { date: "Week One", title: "First Call", text: "Hours felt like minutes — we never ran out of words." },
    { date: "Month One", title: "First Selfie", text: "That awkward, perfect first picture together." },
    { date: "Seasons", title: "Our Favorite Day", text: "The day we realized this was something rare." },
    { date: "Today", title: "Today ❤️", text: "Celebrating you, the heart of my world." },
  ],

  // 12 reasons
  reasons: [
    "Your smile lights up my darkest days.",
    "You listen — truly listen — to every word.",
    "Your kindness is endless.",
    "You make ordinary moments magical.",
    "You believe in me more than I do.",
    "Your laugh is my favorite melody.",
    "You're beautifully, unapologetically you.",
    "You hold my hand through every storm.",
    "You turn silence into comfort.",
    "You dream with me, not beside me.",
    "You forgive without keeping score.",
    "You are my favorite hello and hardest goodbye.",
  ],

  // Love notes (bottles)
  notes: [
    "You are my favorite notification.",
    "If hugs were seconds, I'd hug you for hours.",
    "You + me = my favorite equation.",
    "You make my heart do backflips.",
    "I'd choose you in every lifetime.",
    "You're the plot twist I needed.",
  ],

  // Wish wall
  wishes: [
    "May your dreams be bigger than your fears.",
    "May laughter fill every room you enter.",
    "May you always know how loved you are.",
    "May this year be kinder than the last.",
    "May you shine, always.",
    "May our story have no final page.",
  ],

  // Final signature
  finalSignature: "— Yours, always",

  // Secret message after 5 heart clicks
  secretMessage: "Psst… you found the secret. I love you more than words can hold. ❤️",

  // Music: add your own track to ./assets/music/indila.mp3 (or use a URL)
  // Note: If you were hearing a "beep beep" from this file/track,
  // replace musicUrl with your YouTube audio/video (downloaded) WAV/MP3 file.
  musicUrl: "./assets/music/indila.mp3",
  musicAltUrl: "./assets/music/song.mp3", // optional fallback URL
  puzzleMusicUrl: "./assets/music/song.mp3",
  puzzleMusicAltUrl: "./assets/music/song.wav", // optional fallback URL

  // Background music change for heart-rain section (optional)
  // IMPORTANT: YouTube embed se direct audio project ke andar load nahi hota.
  // Beep/beep hatane ke liye YouTube se audio download karke ./assets/music/ me rakhna zaroori hai.
  heartRainMusicUrl: "",

  // Signature name for final
  signatureName: "Your Name",

  // Passcode lock (set to empty string "" to disable)
  // Enter the password to unlock the birthday experience
  passcodeEnabled: true,
  passcode: "1825",
  passcodeHint: "Enter the birthday date (MMDD format)",
  passcodeImage: "", // Change to your image URL
};

/* ------------------------------------------------------------------ */
/* 2. Tiny helpers                                                     */
/* ------------------------------------------------------------------ */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const on = (el, ev, fn, opts) => el && el.addEventListener(ev, fn, opts);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const rand = (a, b) => a + Math.random() * (b - a);

function loadScript(src) {
  return new Promise((res, rej) => {
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.onload = res;
    s.onerror = () => rej(new Error("Failed: " + src));
    document.head.appendChild(s);
  });
}

/* ------------------------------------------------------------------ */
/* 3. CDN libs (GSAP, Lenis, canvas-confetti)                          */
/* ------------------------------------------------------------------ */
let gsap = null,
  lenis = null,
  confetti = null;

async function loadLibs() {
  try {
    await Promise.all([
      loadScript("https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"),
      loadScript("https://cdn.jsdelivr.net/npm/lenis@1.1.13/dist/lenis.min.js"),
      loadScript("https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"),
    ]);
    gsap = window.gsap;
    confetti = window.confetti;
    if (window.Lenis) {
      lenis = new window.Lenis({ lerp: 0.09, smoothWheel: true });
      const raf = (t) => {
        lenis.raf(t);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    }
  } catch (e) {
    console.warn("Optional libs failed to load — using fallbacks.", e);
  }
}

/* ------------------------------------------------------------------ */
/* 4. Background canvas (stars)                                        */
/* ------------------------------------------------------------------ */
function initBgCanvas() {
  const canvas = $("#bgCanvas");
  const ctx = canvas.getContext("2d");
  let w, h, stars;
  function resize() {
    w = canvas.width = innerWidth;
    h = canvas.height = innerHeight;
    stars = Array.from({ length: Math.floor((w * h) / 9000) }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: rand(0.3, 1.6),
      a: rand(0.2, 0.9),
      tw: rand(0.005, 0.02),
      ph: Math.random() * Math.PI * 2,
    }));
  }
  resize();
  addEventListener("resize", resize);
  function draw(t) {
    ctx.clearRect(0, 0, w, h);
    for (const s of stars) {
      const a = s.a * (0.6 + 0.4 * Math.sin(t * s.tw + s.ph));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${a})`;
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
}

/* ------------------------------------------------------------------ */
/* 5. Petals + fireflies                                               */
/* ------------------------------------------------------------------ */
function spawnPetals(n = 14) {
  const layer = $("#petalsLayer");
  for (let i = 0; i < n; i++) {
    const p = document.createElement("span");
    p.className = "petal";
    p.style.left = Math.random() * 100 + "%";
    p.style.animationDuration = rand(8, 16) + "s";
    p.style.animationDelay = rand(0, 10) + "s";
    p.style.transform = `scale(${rand(0.6, 1.3)})`;
    layer.appendChild(p);
  }
}
function spawnFireflies(n = 18) {
  const layer = $("#firefliesLayer");
  for (let i = 0; i < n; i++) {
    const f = document.createElement("span");
    f.className = "firefly";
    f.style.left = Math.random() * 100 + "%";
    f.style.top = Math.random() * 100 + "%";
    f.style.animationDuration = rand(4, 9) + "s";
    f.style.animationDelay = rand(0, 5) + "s";
    layer.appendChild(f);
  }
}

/* ------------------------------------------------------------------ */
/* 6. Custom cursor + ripple + floating hearts                         */
/* ------------------------------------------------------------------ */
function initCursor() {
  const cursor = $("#magicCursor");
  const heart = $("#cursorHeart");
  if (!cursor || matchMedia("(hover: none)").matches) return;
  let cx = 0, cy = 0, tx = 0, ty = 0;
  addEventListener("mousemove", (e) => {
    tx = e.clientX; ty = e.clientY;
    heart.style.left = tx + "px";
    heart.style.top = ty + "px";
  });
  function loop() {
    cx += (tx - cx) * 0.18;
    cy += (ty - cy) * 0.18;
    cursor.style.left = cx + "px";
    cursor.style.top = cy + "px";
    requestAnimationFrame(loop);
  }
  loop();
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest("button, .polaroid, .flip-card, .bottle, .candle, .easter-egg, .wish-note")) {
      cursor.classList.add("is-active");
    } else {
      cursor.classList.remove("is-active");
    }
  });
}

function initRipple() {
  const layer = $("#rippleLayer");
  addEventListener("click", (e) => {
    if (e.target.closest("button, .polaroid, .flip-card, .bottle, .candle, .easter-egg")) return;
    const r = document.createElement("span");
    r.className = "ripple";
    r.style.left = e.clientX + "px";
    r.style.top = e.clientY + "px";
    layer.appendChild(r);
    setTimeout(() => r.remove(), 700);
  });
}

function spawnFloatHeart(x, y) {
  const h = document.createElement("span");
  h.className = "float-heart";
  h.textContent = "❤";
  h.style.left = x + "px";
  h.style.top = y + "px";
  h.style.color = `hsl(${rand(330, 355)}, 90%, ${rand(65, 80)}%)`;
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 2600);
}
function initFloatHearts() {
  setInterval(() => {
    spawnFloatHeart(rand(0, innerWidth), innerHeight - 20);
  }, 1400);
}

/* ------------------------------------------------------------------ */
/* 7. Music                                                            */
/* ------------------------------------------------------------------ */
let audio = null,
  musicPlaying = false,
  heartRainAudio = null,
  musicObjectUrl = null;
let puzzleRefreshCallback = null;

function initMusic() {
  const toggle = $("#musicToggle");
  const icon = $("#musicIcon");
  const uploadBtn = $("#musicUploadBtn");
  const fileInput = $("#musicFileInput");
  audio = new Audio();
  audio.src = CONFIG.musicUrl;
  audio.loop = true;
  audio.volume = 0.45;
  audio.preload = "auto";
  audio.load();
  audio.crossOrigin = "anonymous";
  audio.addEventListener("error", () => {
    if (CONFIG.musicAltUrl) {
      audio.src = CONFIG.musicAltUrl;
      audio.load();
    }
  });

  on(uploadBtn, "click", () => fileInput.click());
  on(fileInput, "change", async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (musicObjectUrl) URL.revokeObjectURL(musicObjectUrl);
    musicObjectUrl = URL.createObjectURL(file);
    audio.src = musicObjectUrl;
    audio.load();
    uploadBtn.classList.add("is-ready");
    if (musicPlaying) {
      try {
        await audio.play();
      } catch {}
    }
  });

  on(toggle, "click", () => {
    if (musicPlaying) {
      audio.pause();
      toggle.classList.remove("is-playing");
      icon.textContent = "♪";
      musicPlaying = false;
    } else {
      audio.play().then(() => {
        musicPlaying = true;
        toggle.classList.add("is-playing");
        icon.textContent = "♫";
      }).catch(() => {});
    }
  });
}

let musicStartPending = false;

function updateMusicUi() {
  const toggle = $("#musicToggle");
  const icon = $("#musicIcon");
  if (!toggle || !icon) return;
  if (musicPlaying) {
    toggle.classList.add("is-playing");
    icon.textContent = "♫";
  } else {
    toggle.classList.remove("is-playing");
    icon.textContent = "♪";
  }
}

function startMusic() {
  if (musicPlaying) return;
  if (!audio) return;

  const tryPlay = async () => {
    try {
      await audio.play();
      musicPlaying = true;
      musicStartPending = false;
      updateMusicUi();
      return true;
    } catch {
      return false;
    }
  };

  // Immediate attempt
  tryPlay().then((ok) => {
    if (!ok) {
      // Autoplay blocked: retry on next real user gesture.
      musicStartPending = true;
      const retry = async () => {
        if (!musicStartPending || musicPlaying) return;
        const success = await tryPlay();
        if (!success) return; // keep waiting for another gesture
        window.removeEventListener("pointerdown", retry, { passive: true });
        window.removeEventListener("keydown", retry);
      };

      window.addEventListener("pointerdown", retry, { passive: true, once: true });
      window.addEventListener("keydown", retry, { once: true });
    }
  });
}


function switchToPuzzleMusic() {
  if (!audio) return;
  const source = CONFIG.puzzleMusicUrl || CONFIG.musicAltUrl || CONFIG.musicUrl;
  const fadeDuration = 1800;
  const targetVolume = 0.32;

  const playNextTrack = () => {
    audio.pause();
    audio.currentTime = 0;
    audio.src = source;
    audio.load();
    audio.volume = 0.0001;
    audio.play().then(() => {
      const startTime = performance.now();
      const fade = () => {
        const elapsed = performance.now() - startTime;
        const progress = Math.min(elapsed / fadeDuration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        audio.volume = 0.0001 + targetVolume * eased;
        if (progress < 1) requestAnimationFrame(fade);
      };
      requestAnimationFrame(fade);
      musicPlaying = true;
      updateMusicUi();
    }).catch(() => {
      musicPlaying = false;
      updateMusicUi();
    });
  };

  if (musicPlaying) {
    const fadeOut = () => {
      const currentVolume = audio.volume;
      if (currentVolume <= 0.01) {
        audio.pause();
        playNextTrack();
        return;
      }
      audio.volume = Math.max(0.01, currentVolume - 0.018);
      requestAnimationFrame(fadeOut);
    };
    fadeOut();
  } else {
    playNextTrack();
  }
}

function switchToHeartRainMusic() {
  if (!CONFIG.heartRainMusicUrl) return;
  audio.src = CONFIG.heartRainMusicUrl;
  audio.play().catch(() => {});
}

/* ------------------------------------------------------------------ */
/* 8. Passcode lock                                                    */
/* ------------------------------------------------------------------ */
let passcodeVerified = false;
let puzzleSolved = false;

function initPasscode() {
  if (!CONFIG.passcodeEnabled) {
    passcodeVerified = true;
    return;
  }

  // Set passcode image from CONFIG
  const passcodeImg = $("#passcodeImage");
  if (passcodeImg && CONFIG.passcodeImage) {
    passcodeImg.src = CONFIG.passcodeImage;
  }

  const screen = $("#passcode-screen");
  const display = $("#passcodeDisplay");
  const errorMsg = $("#passcodeError");
  const deleteBtn = $("#passcodeDelete");
  const keypadBtns = $$(".keypad-btn[data-digit]");
  const hintEl = $("#passcodeHint");
  
  let enteredCode = "";
  
  // Update UI to show entered digits as dots
  const updateDisplay = () => {
    display.innerHTML = "";
    for (let i = 0; i < CONFIG.passcode.length; i++) {
      const dot = document.createElement("div");
      dot.className = "passcode-dot";
      if (i < enteredCode.length) {
        dot.classList.add("is-filled");
      }
      display.appendChild(dot);
    }
    // show entered digits (visible) for debugging
    const valEl = $("#passcodeValue");
    if (valEl) valEl.textContent = enteredCode.split("").map(() => "●").join("");
  };
  
  // Handle digit click
  keypadBtns.forEach((btn) => {
    on(btn, "click", () => {
      if (enteredCode.length >= CONFIG.passcode.length) return;
      
      enteredCode += btn.dataset.digit;
      errorMsg.textContent = "";
      updateDisplay();
      
      // Check if complete
      if (enteredCode.length === CONFIG.passcode.length) {
        setTimeout(() => {
          if (enteredCode === CONFIG.passcode) {
            // Correct!
            passcodeVerified = true;
            // visually unlock + ensure the passcode overlay is hidden
            try {
              screen.classList.add("is-unlocked");
              screen.style.display = "none";
            } catch (e) { /* ignore */ }
            console.log("Passcode correct — unlocked");
            if (confetti) {
              confetti({ particleCount: 50, spread: 80, origin: { y: 0.4 } });
            }
            // Show the new surprise sequence first
            revealScene($("#scene-surprise"));
            // reset entered code buffer
            enteredCode = "";
            updateDisplay();
          } else {
            // Wrong
            errorMsg.textContent = "❌ Wrong passcode. Try again!";
            errorMsg.style.animation = "none";
            setTimeout(() => {
              errorMsg.style.animation = "shake 0.5s";
            }, 10);
            enteredCode = "";
            updateDisplay();
          }
        }, 300);
      }
    });
  });
  
  // Delete button
  on(deleteBtn, "click", () => {
    enteredCode = enteredCode.slice(0, -1);
    errorMsg.textContent = "";
    updateDisplay();
  });

  // (no dev unlock handler)
  
  updateDisplay();
}

/* ------------------------------------------------------------------ */
/* 9. Loader                                                           */
/* ------------------------------------------------------------------ */
function initLoader() {
  const loader = $("#loader");
  const l1 = $(".loader__line-1");
  const l2 = $(".loader__line-2");
  setTimeout(() => l1.classList.add("is-show"), 200);
  setTimeout(() => l1.classList.remove("is-show"), 2200);
  setTimeout(() => l2.classList.add("is-show"), 2600);
  const finish = () => {
    loader.classList.add("is-done");
    // If passcode is enabled, show it. Otherwise go to earphones.
    if (CONFIG.passcodeEnabled) {
      startMusic();
      document.removeEventListener("click", finish);
      document.removeEventListener("keydown", finish);
    } else {
      startMusic();
      revealScene($("#scene-earphones"));
      document.removeEventListener("click", finish);
      document.removeEventListener("keydown", finish);
    }
  };
  setTimeout(() => {
    $(".loader__hint").style.opacity = 1;
    on(document, "click", finish, { once: true });
    on(document, "keydown", finish, { once: true });
  }, 3200);
}

/* ------------------------------------------------------------------ */
/* 10. Scene reveal                                                   */
/* ------------------------------------------------------------------ */
function revealScene(el) {
  if (!el) return;
  const activeScene = document.querySelector('.scene.is-active');
  if (activeScene && activeScene.id === 'scene-puzzle' && !puzzleSolved && el.id !== 'scene-puzzle') {
    return;
  }
  // Block scene navigation if passcode is required but not verified
  if (CONFIG.passcodeEnabled && !passcodeVerified && el.id !== "scene-earphones") {
    return;
  }
  $$(".scene").forEach((scene) => {
    scene.classList.remove("is-active", "is-visible");
  });

  el.classList.add("is-active", "is-visible");

  // Force a paint right after activation so transform/scroll don't desync
  // (fixes left-drift after envelope open)
  void el.offsetHeight;

  if (el.id === "scene-puzzle") puzzleRefreshCallback?.();
  if (el.id === "scene-earphones") startMusic();
  if (el.id === "scene-envelope") switchToPuzzleMusic();
  if (el.id === "scene-wishes") animateWishes();
  if (el.id === "scene-heartrain") startHeartRain();
}

/* ------------------------------------------------------------------ */
/* 10. Continue buttons                                                */
/* ------------------------------------------------------------------ */
function initContinues() {
  $$("[data-continue]").forEach((btn) => {
    on(btn, "click", () => {
      const target = $("#" + btn.dataset.continue);
      if (!target) return;
      revealScene(target);
    });
  });
}

/* ------------------------------------------------------------------ */
/* 11. Envelope                                                        */
/* ------------------------------------------------------------------ */
function initEnvelope() {
  const env = $("#envelope");
  on(env, "click", () => {
    if (env.classList.contains("is-open")) {
      setTimeout(() => {
        const letter = $("#scene-letter");
        revealScene(letter);
        startTypewriter();
      }, 2000);
    }
    env.classList.add("is-open");
  });
}

/* ------------------------------------------------------------------ */
/* 12. Typewriter letter                                               */
/* ------------------------------------------------------------------ */
let typingStarted = false;
function startTypewriter() {
  if (typingStarted) return;
  typingStarted = true;
  const body = $("#letterBody");
  const sign = $("#letterSign");
  body.innerHTML = '<span class="caret"></span>';
  const text = CONFIG.letterText;
  let i = 0;
  const caret = body.querySelector(".caret");
  const span = document.createElement("span");
  body.insertBefore(span, caret);
  const tick = () => {
    if (i < text.length) {
      span.textContent += text[i++];
      setTimeout(tick, text[i - 1] === "\n" ? 120 : 45);
    } else {
      caret.remove();
      let j = 0;
      const signText = CONFIG.letterSign;
      const typeSign = () => {
        if (j < signText.length) {
          sign.textContent += signText[j++];
          setTimeout(typeSign, 70);
        }
      };
      typeSign();
    }
  };
  setTimeout(tick, 300);
}

/* ------------------------------------------------------------------ */
/* 13. Gallery                                                         */
/* ------------------------------------------------------------------ */
function initGallery() {
  const gallery = $("#gallery");
  CONFIG.photos.forEach((p, idx) => {
    const card = document.createElement("div");
    card.className = "polaroid";
    card.style.transform = `rotate(${rand(-3, 3)}deg)`;
    card.innerHTML = `
      <span class="polaroid__heart">❤</span>
      <img src="${p.src}" alt="${p.caption || ""}" loading="lazy" />
      <p class="polaroid__caption">${p.caption || ""}</p>`;
    on(card, "click", () => openLightbox(p));
    gallery.appendChild(card);
  });
}
function openLightbox(p) {
  const lb = $("#lightbox");
  $("#lightboxImg").src = p.src;
  $("#lightboxImg").alt = p.caption || "";
  $("#lightboxCaption").textContent = p.caption || "";
  lb.classList.add("is-open");
  on($("#lightboxClose"), "click", closeLightbox, { once: true });
}
function closeLightbox() { $("#lightbox").classList.remove("is-open"); }
on(document, "keydown", (e) => { if (e.key === "Escape") closeLightbox(); });

/* ------------------------------------------------------------------ */
/* 14. Timeline                                                        */
/* ------------------------------------------------------------------ */
let timelineDone = false;
function initTimeline() {
  const tl = $("#timeline");
  CONFIG.timeline.forEach((m) => {
    const card = document.createElement("div");
    card.className = "tl-card glass";
    card.innerHTML = `
      <p class="tl-card__date">${m.date}</p>
      <h3 class="tl-card__title">${m.title}</h3>
      <p class="tl-card__text">${m.text}</p>`;
    tl.appendChild(card);
  });
}
function animateTimeline() {
  if (timelineDone) return;
  timelineDone = true;
  $$(".tl-card").forEach((c, i) => setTimeout(() => c.classList.add("is-visible"), i * 220));
}

/* ------------------------------------------------------------------ */
/* 15. Reasons flip cards                                              */
/* ------------------------------------------------------------------ */
function initReasons() {
  const grid = $("#reasonsGrid");
  CONFIG.reasons.forEach((reason, i) => {
    const card = document.createElement("div");
    card.className = "flip-card";
    card.innerHTML = `
      <div class="flip-card__inner">
        <div class="flip-card__face flip-card__face--front">
          <span class="flip-card__num">${String(i + 1).padStart(2, "0")}</span>
          <span class="flip-card__label">Reason</span>
        </div>
        <div class="flip-card__face flip-card__face--back">
          <p class="flip-card__reason">${reason}</p>
        </div>
      </div>`;
    on(card, "click", () => card.classList.toggle("is-flipped"));
    grid.appendChild(card);
  });
}

/* ------------------------------------------------------------------ */
/* 16. Love notes bottles                                              */
/* ------------------------------------------------------------------ */
function initNotes() {
  const wrap = $("#bottles");
  CONFIG.notes.forEach((note) => {
    const b = document.createElement("div");
    b.className = "bottle";
    b.innerHTML = `
      <div class="bottle__shape">
        <span class="bottle__note">❤</span>
      </div>`;
    on(b, "click", () => openNote(note));
    wrap.appendChild(b);
  });
}
function openNote(text) {
  const modal = document.createElement("div");
  modal.className = "note-modal";
  modal.innerHTML = `
    <div class="note-modal__card glass">
      <p class="note-modal__text">${text}</p>
      <button class="glow-btn note-modal__close">Close</button>
    </div>`;
  document.body.appendChild(modal);
  requestAnimationFrame(() => modal.classList.add("is-open"));
  const close = () => {
    modal.classList.remove("is-open");
    setTimeout(() => modal.remove(), 400);
  };
  modal.querySelector(".note-modal__close").addEventListener("click", close);
  modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
}

/* ------------------------------------------------------------------ */
/* 17. Wish wall                                                       */
/* ------------------------------------------------------------------ */
const wishColors = ["#ffd6e0", "#fff3b0", "#c8f0d0", "#d0e8ff", "#f0d0ff", "#ffe0c0"];
let wishesDone = false;
function initWishes() {
  const wall = $("#wishWall");
  CONFIG.wishes.forEach((w, i) => {
    const note = document.createElement("div");
    note.className = "wish-note";
    note.style.background = wishColors[i % wishColors.length];
    note.style.setProperty("--rot", rand(-4, 4) + "deg");
    note.textContent = w;
    wall.appendChild(note);
  });
}
function animateWishes() {
  if (wishesDone) return;
  wishesDone = true;
  $$(".wish-note").forEach((n, i) => setTimeout(() => n.classList.add("is-visible"), i * 180));
}

/* ------------------------------------------------------------------ */
/* 18. Heart rain                                                      */
/* ------------------------------------------------------------------ */
let heartRainActive = false;
function startHeartRain() {
  if (heartRainActive) return;
  heartRainActive = true;
  switchToHeartRainMusic();
  const layer = $("#heartRain");
  const spawn = () => {
    if (!heartRainActive) return;
    const h = document.createElement("span");
    h.className = "rain-heart";
    h.textContent = "❤";
    h.style.left = rand(0, 100) + "%";
    h.style.fontSize = rand(0.9, 2.2) + "rem";
    h.style.color = `hsl(${rand(330, 355)}, 90%, ${rand(60, 80)}%)`;
    h.style.animationDuration = rand(4, 9) + "s";
    layer.appendChild(h);
    setTimeout(() => h.remove(), 9000);
    setTimeout(spawn, rand(120, 320));
  };
  spawn();
}

/* ------------------------------------------------------------------ */
/* 19. Birthday cake + microphone blow                                */
/* ------------------------------------------------------------------ */
let candlesLit = false,
  micActive = false,
  audioCtx = null,
  analyser = null,
  micStream = null,
  blowRAF = null,
  candlesOut = 0,
  blowFrames = 0,
  nextBlowAt = 0;

function initCake() {
  const candles = $("#candles");
  const count = 5;
  for (let i = 0; i < count; i++) {
    const c = document.createElement("div");
    c.className = "candle";
    c.innerHTML = '<span class="candle__flame"></span><span class="candle__smoke"></span>';
    candles.appendChild(c);
  }
  // Light candles on first tap of the stage
  on($("#cakeStage"), "click", () => {
    if (!candlesLit) lightCandles();
  });
  on($("#cakeAction"), "click", handleMic);
}

function lightCandles() {
  candlesLit = true;
  candlesOut = 0;
  blowFrames = 0;
  $("#cakeStage").classList.remove("is-dark");
  $$(".candle").forEach((c) => c.classList.remove("is-out"));
  $("#cakeTitle").textContent = "Now blow the candle.";
  $("#cakeHint").textContent = "Blow or speak into your microphone — or tap the flames.";
  if (gsap) gsap.fromTo("#cake", { scale: 0.9 }, { scale: 1, duration: 0.6, ease: "back.out(1.7)" });
  // allow tap to extinguish
  $$(".candle").forEach((c) => on(c, "click", (e) => { e.stopPropagation(); blowOutCandle(c); }));
}

async function handleMic() {
  if (micActive) return;
  if (!candlesLit) lightCandles();
  try {
    if (!navigator.mediaDevices?.getUserMedia) throw new Error("Microphone unavailable");
    $("#cakeAction").textContent = "Listening…";
    micStream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: false,
        noiseSuppression: false,
        autoGainControl: false
      }
    });
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    await audioCtx.resume();
    const source = audioCtx.createMediaStreamSource(micStream);
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 1024;
    analyser.smoothingTimeConstant = 0.25;
    source.connect(analyser);
    micActive = true;
    $("#cakeAction").textContent = "Microphone is listening 🎙️";
    $("#cakeHint").textContent = "Listening… blow gently or say something loudly.";
    detectBlow();
  } catch (e) {
    $("#cakeAction").textContent = "Enable microphone & blow";
    $("#cakeHint").textContent = "Mic blocked — just tap each flame to blow it out.";
  }
}

function detectBlow() {
  if (!micActive) return;
  const timeData = new Uint8Array(analyser.fftSize);
  const check = () => {
    if (!micActive) return;
    analyser.getByteTimeDomainData(timeData);
    // RMS volume reliably catches both breath noise and spoken sound.
    let sum = 0;
    for (let i = 0; i < timeData.length; i++) {
      const sample = (timeData[i] - 128) / 128;
      sum += sample * sample;
    }
    const volume = Math.sqrt(sum / timeData.length);
    blowFrames = volume > 0.035 ? blowFrames + 1 : Math.max(0, blowFrames - 1);

    if (blowFrames >= 2 && Date.now() >= nextBlowAt) {
      const lit = $$(".candle").filter((c) => !c.classList.contains("is-out"));
      if (lit.length) blowOutCandle(lit[0]);
      nextBlowAt = Date.now() + 700;
      blowFrames = 0;
    }
    blowRAF = requestAnimationFrame(check);
  };
  check();
}

function blowOutCandle(c) {
  if (c.classList.contains("is-out")) return;
  c.classList.add("is-out");
  candlesOut++;
  if (confetti) confetti({ particleCount: 12, spread: 40, origin: { y: 0.4 }, scalar: 0.6, colors: ["#ffd166", "#ff9ec0"] });
  if (candlesOut >= $$(".candle").length) onAllCandlesOut();
}

function onAllCandlesOut() {
  micActive = false;
  if (blowRAF) cancelAnimationFrame(blowRAF);
  if (micStream) micStream.getTracks().forEach((t) => t.stop());
  if (audioCtx) audioCtx.close();
  $("#cakeAction").textContent = "Candles blown out ✨";
  $("#cakeStage").classList.add("is-dark");
  $("#cakeTitle").textContent = "Happy Birthday!";
  $("#cakeHint").textContent = "Make your wish — it's coming true.";
  // Big confetti + fireworks
  bigCelebration();
  // Background change
  document.body.style.transition = "background 1.2s ease";
  setTimeout(() => {
    $("#cakeStage").classList.remove("is-dark");
    // scroll to final
    const final = $("#scene-final");
    revealScene(final);
    final.scrollIntoView({ behavior: "smooth", block: "start" });
    startFinalSignature();
  }, 2600);
}

function bigCelebration() {
  if (!confetti) return;
  const end = Date.now() + 2500;
  const colors = ["#ff5d8f", "#7b5cff", "#ffd166", "#6ee7b7", "#fff"];
  (function frame() {
    confetti({ particleCount: 6, angle: 60, spread: 70, origin: { x: 0 }, colors });
    confetti({ particleCount: 6, angle: 120, spread: 70, origin: { x: 1 }, colors });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
  // fireworks
  setTimeout(() => {
    confetti({ particleCount: 120, spread: 360, startVelocity: 45, origin: { y: 0.5 }, colors, scalar: 1.1 });
  }, 600);
  setTimeout(() => {
    confetti({ particleCount: 80, spread: 100, startVelocity: 35, origin: { x: 0.5, y: 0.4 }, colors });
  }, 1200);
}

/* ------------------------------------------------------------------ */
/* 20. Final signature (SVG draw)                                     */
/* ------------------------------------------------------------------ */
let finalSigDone = false;
function startFinalSignature() {
  if (finalSigDone) return;
  finalSigDone = true;
  const el = $("#finalSignature");
  const text = CONFIG.finalSignature;
  let i = 0;
  el.textContent = "";
  const type = () => {
    if (i < text.length) {
      el.textContent += text[i++];
      setTimeout(type, 80);
    }
  };
  setTimeout(type, 800);
  // Extra petals + fireflies for the finale
  spawnPetals(20);
  spawnFireflies(12);
}

/* ------------------------------------------------------------------ */
/* 21. Ending buttons                                                  */
/* ------------------------------------------------------------------ */
function initEnding() {
  on($("#replayBtn"), "click", () => location.reload());
  on($("#downloadBtn"), "click", downloadMemories);
  on($("#shareBtn"), "click", shareSite);
}
function downloadMemories() {
  // Generate a small text keepsake of the configured content
  const lines = [
    "Happy Birthday ❤️",
    "",
    "A letter for you:",
    CONFIG.letterText,
    "",
    "Reasons I love you:",
    ...CONFIG.reasons.map((r, i) => `${i + 1}. ${r}`),
    "",
    "Wishes:",
    ...CONFIG.wishes,
    "",
    CONFIG.finalSignature,
  ].join("\n");
  const blob = new Blob([lines], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "birthday-memories.txt";
  a.click();
  URL.revokeObjectURL(a.href);
}
async function shareSite() {
  const url = location.href;
  if (navigator.share) {
    try { await navigator.share({ title: "Happy Birthday ❤️", url }); } catch {}
  } else {
    try { await navigator.clipboard.writeText(url); alert("Link copied to clipboard!"); } catch { alert(url); }
  }
}

/* ------------------------------------------------------------------ */
/* 22. Easter eggs                                                     */
/* ------------------------------------------------------------------ */
let heartClicks = 0;
function initEasterEggs() {
  on($("#easterTeddy"), "click", () => {
    $("#secretText").textContent = "🧸 You found the teddy! Hugs from afar.";
    $("#secretOverlay").classList.add("is-open");
  });
  on($("#easterMoon"), "click", () => {
    $("#secretText").textContent = "🌙 I love you to the moon and back.";
    $("#secretOverlay").classList.add("is-open");
  });
  on($("#secretClose"), "click", () => $("#secretOverlay").classList.remove("is-open"));
  // Secret: click floating hearts 5 times
  addEventListener("click", (e) => {
    if (e.target.classList && e.target.classList.contains("float-heart")) {
      heartClicks++;
      if (heartClicks >= 5) {
        $("#secretText").textContent = CONFIG.secretMessage;
        $("#secretOverlay").classList.add("is-open");
        heartClicks = 0;
      }
    }
  });
}

/* ------------------------------------------------------------------ */
/* 23. Parallax (light, via mouse)                                     */
/* ------------------------------------------------------------------ */
function initParallax() {
  if (matchMedia("(hover: none)").matches) return;
  addEventListener("mousemove", (e) => {
    const x = (e.clientX / innerWidth - 0.5) * 2;
    const y = (e.clientY / innerHeight - 0.5) * 2;
    $$(".aurora-blob").forEach((b, i) => {
      const f = (i + 1) * 6;
      b.style.transform = `translate(${x * f}px, ${y * f}px)`;
    });
  });
}

/* ------------------------------------------------------------------ */
/* 24. Boot                                                            */
/* ------------------------------------------------------------------ */
async function boot() {
  initBgCanvas();
  spawnPetals();
  spawnFireflies();
  initCursor();
  initRipple();
  initFloatHearts();
  initMusic();
  initPasscode();
  initLoader();
  initSurprise();
  initBirthdaySlide();
  initPuzzle();
  initContinues();
  initEnvelope();
  initGallery();
  initReasons();
  initNotes();
  initWishes();
  initCake();
  initEnding();
  initEasterEggs();
  initParallax();
  initNavigation();
  await loadLibs();
}

/* ---------- NEW: Surprise / Birthday / Puzzle inits ---------- */
function initSurprise() {
  const box = $("#surpriseBox");
  const hint = $("#surpriseHint");
  const cont = $("#surpriseContinue");
  if (!box) return;
  on(box, "click", () => {
    if (box.classList.contains("is-open")) return;
    box.classList.add("is-open");
    hint.textContent = "A surprise awaits you…";
    if (cont) cont.style.display = "";
    if (confetti) confetti({ particleCount: 30, spread: 60, origin: { y: 0.45 } });
  });
}

function initBirthdaySlide() {
  const dateEl = $("#bdayDate");
  const dayEl = $("#bdayDay");
  const timeEl = $("#bdayTime");
  const c1 = $("#counter1");
  const c2 = $("#counter2");
  const c3 = $("#counter3");
  if (!(dateEl && dayEl && timeEl)) return;
  const update = () => {
    const now = new Date();
    dateEl.textContent = now.toLocaleDateString();
    dayEl.textContent = now.toLocaleString(undefined, { weekday: "long" });
    timeEl.textContent = now.toLocaleTimeString();
  };
  update();
  setInterval(update, 1000);

  const animateTo = (el, target) => {
    if (!el) return;
    let v = 0;
    const tick = () => {
      v += Math.ceil((target - v) / 8);
      el.textContent = v.toLocaleString();
      if (v < target) requestAnimationFrame(tick);
    };
    tick();
  };
  // example numbers (customize as needed)
  animateTo(c1, 19);
  animateTo(c2, 18);
}

function initPuzzle() {
  const grid = $("#puzzleGrid");
  const refImg = $("#puzzleReferenceImg");
  const continueBtn = $("#puzzleContinue");
  if (!grid) return;
  const size = 3;
  const tileCount = size * size;
  // Use a random romantic couple image from Unsplash for the puzzle
  const imgUrl = `https://source.unsplash.com/600x600/?couple,romantic,portrait`;
  let img = imgUrl;
  let state = [...Array(tileCount).keys()]; // 0..8 (8 = blank)

  if (continueBtn) {
    continueBtn.style.display = "none";
    continueBtn.disabled = true;
  }

  const updateReference = () => {
    if (refImg) refImg.src = img;
  };

  const render = () => {
    grid.innerHTML = "";
    const dim = grid.clientWidth || grid.offsetWidth || 360;
    const computedStyle = window.getComputedStyle(grid);
    const gap = parseFloat(computedStyle.columnGap || computedStyle.gap) || 0;
    const tileW = Math.floor((dim - gap * (size - 1)) / size);
    for (let i = 0; i < tileCount; i++) {
      const idx = state[i];
      const r = Math.floor(i / size);
      const c = i % size;
      const tile = document.createElement("div");
      tile.className = "puzzle-tile" + (idx === tileCount - 1 ? " blank" : "");
      tile.style.width = tileW + "px";
      tile.style.height = tileW + "px";
      if (idx !== tileCount - 1) {
        const sr = Math.floor(idx / size);
        const sc = idx % size;
        tile.style.backgroundImage = `url(${img})`;
        tile.style.backgroundSize = `${tileW * size}px ${tileW * size}px`;
        tile.style.backgroundPosition = `${-sc * tileW}px ${-sr * tileW}px`;
      }
      tile.dataset.pos = i;
      tile.dataset.idx = idx;
      on(tile, "click", () => tryMove(i));
      grid.appendChild(tile);
    }
  };

  const neighbors = (pos) => {
    const r = Math.floor(pos / size), c = pos % size;
    const n = [];
    if (r > 0) n.push(pos - size);
    if (r < size - 1) n.push(pos + size);
    if (c > 0) n.push(pos - 1);
    if (c < size - 1) n.push(pos + 1);
    return n;
  };

  const tryMove = (pos) => {
    const blankPos = state.indexOf(tileCount - 1);
    if (neighbors(pos).includes(blankPos)) {
      // swap
      [state[pos], state[blankPos]] = [state[blankPos], state[pos]];
      render();
      checkSolved();
    }
  };

  const shuffle = (moves = 200) => {
    let blank = state.indexOf(tileCount - 1);
    for (let i = 0; i < moves; i++) {
      const n = neighbors(blank);
      const pick = n[Math.floor(Math.random() * n.length)];
      [state[blank], state[pick]] = [state[pick], state[blank]];
      blank = pick;
    }
    render();
  };

  const checkSolved = () => {
    for (let i = 0; i < tileCount; i++) if (state[i] !== i) return false;
    // solved
    puzzleSolved = true;
    if (continueBtn) {
      continueBtn.style.display = "";
      continueBtn.disabled = false;
    }
    if (confetti) confetti({ particleCount: 80, spread: 140, origin: { y: 0.4 } });
    return true;
  };

  const resizePuzzle = () => {
    render();
  };
  window.addEventListener("resize", resizePuzzle);

  // actions
  const shuffleBtn = $("#shufflePuzzle");
  const giveUpBtn = $("#giveUpPuzzle");
  on(shuffleBtn, "click", () => shuffle(100));
  on(giveUpBtn, "click", () => { state = [...Array(tileCount).keys()]; render(); checkSolved(); });

  // initial
  // Prefer local `shinchan.jpg` if available, otherwise fall back to Unsplash
  const localImg = "./assets/photos/shinchan.jpg";
  const remoteImg = `https://source.unsplash.com/600x600/?couple,romantic,portrait`;
  img = localImg; // start by trying local

  const finishInit = () => {
    render();
    setTimeout(() => shuffle(100), 100);
  };

  const tryRemote = () => {
    const pr = new Image();
    pr.crossOrigin = "anonymous";
    pr.src = remoteImg;
    pr.onload = () => { img = remoteImg; finishInit(); };
    pr.onerror = () => { img = localImg; finishInit(); };
  };

  puzzleRefreshCallback = () => {
    if (!grid) return;
    if (!grid.clientWidth && !grid.offsetWidth) return;
    render();
  };

  const pl = new Image();
  pl.src = localImg;
  pl.onload = () => { img = localImg; finishInit(); };
  pl.onerror = () => { tryRemote(); };
}

boot();

// Safety: if some earlier init failed, retry passcode init once after short delay
setTimeout(() => {
  try {
    initPasscode();
  } catch (e) {
    console.warn('initPasscode retry failed', e);
  }
}, 1200);

/* ------------------------------------------------------------------ */
/* 25. Slide navigation (wheel / touchpad / touch / keyboard)         */
/* ------------------------------------------------------------------ */
let _isNavigating = false;
function initNavigation() {
  let touchStartY = null;

  const scenes = () => $$(".scene");
  const getActiveIndex = () => scenes().findIndex((s) => s.classList.contains("is-active"));

  function navigate(dir) {
    if (_isNavigating) return;
    const list = scenes();
    let idx = getActiveIndex();
    if (idx === -1) idx = 0;
    const next = clamp(idx + dir, 0, list.length - 1);
    if (next === idx) return;
    const target = list[next];
    if (!target) return;
    _isNavigating = true;
    revealScene(target);
    setTimeout(() => { _isNavigating = false; }, 700);
  }

  // Wheel and touch navigation are disabled to prevent unintended scene fade-out while scrolling.
  // Users can still navigate using the on-screen buttons.

  window.addEventListener("touchstart", (e) => { touchStartY = e.touches[0].clientY; }, { passive: true });
  window.addEventListener("touchend", (e) => {
    if (touchStartY === null) return;
    const dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dy) < 40) { touchStartY = null; return; }
    const active = document.querySelector(".scene.is-active");
    if (active && active.scrollHeight > active.clientHeight + 2) {
      if (dy < 0 && active.scrollTop + active.clientHeight < active.scrollHeight - 2) { touchStartY = null; return; }
      if (dy > 0 && active.scrollTop > 2) { touchStartY = null; return; }
    }
    touchStartY = null;
  }, { passive: true });

  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown" || e.key === "PageDown") navigate(1);
    if (e.key === "ArrowUp" || e.key === "PageUp") navigate(-1);
  });
}
