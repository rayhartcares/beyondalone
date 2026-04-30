/* ============================================================
   BEYOND ALONE — Program Logic
   Brave Feelings Lab
   Version 1.0
   ============================================================ */

'use strict';

// ============================================================
// CONFIGURATION
// ============================================================
const CONFIG = {
  password: 'Hebrews13Verses56',
  storageKey: 'beyondalone_progress',
  storageVersion: 9, // Increment this when data structure changes — forces fresh state
  totalScreens: 150,
  programTitle: 'Beyond Alone'
};

// ============================================================
// STATE
// ============================================================
let state = {
  currentScreen: 0,
  totalScreens: CONFIG.totalScreens,
  answers: {},
  weekUnlocked: 1,
  startedAt: null,
  lastSaved: null
};

// ============================================================
// SCREEN DATA — WEEK 1: The Anatomy of the Void
// ============================================================
const screens = [

  // --- SESSION 1: The door opens (S-01 to S-03) ---

  {
    id: 'S-01',
    session: 'Session 1',
    sessionTitle: 'The room empties',
    week: 'Week 1',
    weekTitle: 'The Anatomy of the Void',
    badge: 'welcome',
    badgeLabel: 'Welcome',
    render: () => `
      <div class="screen-single">
        <div class="week-eyebrow">Week 1 — The Anatomy of the Void &nbsp;·&nbsp; Screen 1 of 19</div>
        <div class="hero-intro">
          <div class="hero-avatar-wrap">
            <div class="benne-avatar-lg" id="benne-avatar-s01"></div>
            <div class="hero-label">
              <div class="hero-label-name">Benne Hart</div>
              <div class="hero-label-role">Your Guide &amp; Mentor</div>
            </div>
          </div>
          <h1 class="screen-title" style="margin-top:1.5rem">You kept showing up.</h1>
          <div class="pull-quote">
            "You answer when spoken to. You smile when expected. You do what must be done.<br>
            And beneath all of it — quietly, persistently — you have been carrying something heavy."
          </div>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Welcome to <strong>Beyond Alone</strong>. Eight weeks from now you will understand that ache differently — and you will have real, practical tools for living with it, working through it, and moving beyond it. You are not broken. You are here. That is already something.</div>
          </div>
        </div>
        <div class="program-stats-row">
          <div class="stat-pill"><span class="stat-num">8</span><span class="stat-label">Weeks</span></div>
          <div class="stat-pill"><span class="stat-num">150</span><span class="stat-label">Screens</span></div>
          <div class="stat-pill"><span class="stat-num">40</span><span class="stat-label">Sessions</span></div>
          <div class="stat-pill"><span class="stat-num">11</span><span class="stat-label">Seeds</span></div>
        </div>
      </div>
    `
  },

  {
    id: 'S-02',
    session: 'Session 1',
    sessionTitle: 'The room empties',
    week: 'Week 1',
    weekTitle: 'The Anatomy of the Void',
    badge: 'insight',
    badgeLabel: 'What This Journey Is',
    render: () => `
      <div class="screen-single">
        <div class="week-eyebrow">Week 1 — The Anatomy of the Void &nbsp;·&nbsp; Screen 2 of 19</div>
        <div class="screen-badge-pill insight">What This Journey Is</div>
        <h1 class="screen-title">Not a cure. A guided walk.</h1>
        <div class="honest-cards">
          <div class="honest-card no">
            <div class="honest-card-icon">&#10007;</div>
            <div class="honest-card-text">Fix your loneliness in 8 weeks</div>
          </div>
          <div class="honest-card no">
            <div class="honest-card-icon">&#10007;</div>
            <div class="honest-card-text">Promise a full social calendar</div>
          </div>
          <div class="honest-card no">
            <div class="honest-card-icon">&#10007;</div>
            <div class="honest-card-text">Offer dramatic transformation</div>
          </div>
          <div class="honest-card yes">
            <div class="honest-card-icon">&#10003;</div>
            <div class="honest-card-text">Help you understand the ache</div>
          </div>
          <div class="honest-card yes">
            <div class="honest-card-icon">&#10003;</div>
            <div class="honest-card-text">Challenge what loneliness tells you</div>
          </div>
          <div class="honest-card yes">
            <div class="honest-card-icon">&#10003;</div>
            <div class="honest-card-text">Give you real steps toward connection</div>
          </div>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">${state.answers['S-03'] ? state.answers['S-03'] + ', everything' : 'Everything'} you write in this program stays between you and this space. Nothing leaves here. No one else reads it. You can be as honest as you need to be — that honesty is the whole engine of what is about to happen.</div>
          </div>
        </div>
        <div class="disclaimer-card">Beyond Alone is an educational and spiritual reflection program. It is not therapy, medical care, or a substitute for professional support. If you feel unsafe or unable to function, please contact a qualified professional immediately.</div>
      </div>
    `
  },

  {
    id: 'S-03',
    session: 'Session 1',
    sessionTitle: 'The room empties',
    week: 'Week 1',
    weekTitle: 'The Anatomy of the Void',
    badge: 'practice',
    badgeLabel: 'Your Private Space',
    render: () => `
      <div class="screen-single">
        <div class="week-eyebrow">Week 1 — The Anatomy of the Void &nbsp;·&nbsp; Screen 3 of 19</div>
        <div class="screen-badge-pill practice">Your Private Space</div>
        <h1 class="screen-title">A name for this journey.</h1>
        <p class="screen-body-text">Before we go further — choose a name or word for yourself in this program. It does not have to be your real name. It can be anything that feels honest for this season.</p>
        <div class="name-entry-card">
          <div class="name-entry-label">I will go by:</div>
          <input type="text" class="name-input-large" id="name-input-s03"
            placeholder="Your name or chosen name…"
            value="${state.answers['S-03'] || ''}"
            oninput="saveAnswer('S-03', this.value)">
          <div class="name-entry-hint">This name will appear in Benne's messages throughout the program.</div>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Whatever you choose — it is the name of someone who decided to take this seriously. That decision matters more than the name.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-04',
    session: 'Session 2',
    sessionTitle: 'Alone vs. lonely',
    week: 'Week 1',
    weekTitle: 'The Anatomy of the Void',
    badge: 'story',
    badgeLabel: 'Story',
    render: () => `
      <div class="screen-single">
        <div class="week-eyebrow">Week 1 — The Anatomy of the Void &nbsp;·&nbsp; Screen 4 of 19</div>
        <div class="story-cinema-band">
          <div class="cinema-badge">Session 2 &nbsp;·&nbsp; Alone vs. Lonely</div>
          <div class="cinema-caption">Marcus, 34. A full table — and still invisible.</div>
        </div>
        <h1 class="screen-title">The crowded room.</h1>
        <div class="dialogue-scene">
          <div class="scene-setting">A work event. Full table. Laughter in the room.</div>
          <div class="dialogue-line narrator">Marcus laughs at the right moments. His phone buzzes — he checks it so he has somewhere to look.</div>
          <div class="dialogue-line narrator">Driving home he realises he has not said one true thing all evening.</div>
          <div class="dialogue-callout">He is not physically alone.<br>He has never felt more invisible.</div>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Loneliness is not the same as being alone. That distinction is one of the most important things this program will teach. Marcus was not physically alone. He was surrounded. And the loneliness in that room was heavier than any empty apartment.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-05',
    session: 'Session 2',
    sessionTitle: 'Alone vs. lonely',
    week: 'Week 1',
    weekTitle: 'The Anatomy of the Void',
    badge: 'insight',
    badgeLabel: 'Insight',
    render: () => `
      <div class="screen-single">
        <div class="week-eyebrow">Week 1 — The Anatomy of the Void &nbsp;·&nbsp; Screen 5 of 19</div>
        <div class="screen-badge-pill insight">Insight</div>
        <h1 class="screen-title">Two completely different aches.</h1>
        <div class="three-card-grid">
          <div class="concept-card teal">
            <div class="concept-card-icon">&#9728;&#65039;</div>
            <div class="concept-card-tag">Chosen</div>
            <div class="concept-card-title">Solitude</div>
            <div class="concept-card-body">Restorative. Full. You are alone — and it nourishes you.</div>
          </div>
          <div class="concept-card coral">
            <div class="concept-card-icon">&#127774;</div>
            <div class="concept-card-tag">Unchosen</div>
            <div class="concept-card-title">Loneliness</div>
            <div class="concept-card-body">Depleting. Empty. You feel disconnected — wherever you are.</div>
          </div>
          <div class="concept-card navy">
            <div class="concept-card-icon">&#128101;</div>
            <div class="concept-card-tag">Measurable</div>
            <div class="concept-card-title">Isolation</div>
            <div class="concept-card-body">The counted absence of contact — separate from how lonely you feel.</div>
          </div>
        </div>
        <div class="research-cite-block">
          <div class="cite-source">Cacioppo &amp; Patrick<span class="cite-ref">&#185;</span>, <em>Loneliness</em> (2008)</div>
          <div class="cite-finding">Chronic loneliness activates the same neural pain pathways as physical injury. The brain processes social rejection as a genuine threat to survival.</div>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">You can be surrounded by people and still be profoundly lonely. The signal we are listening to is not about who is in the room — it is about whether you feel <em>known</em>.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-06',
    session: 'Session 2',
    sessionTitle: 'Alone vs. lonely',
    week: 'Week 1',
    weekTitle: 'The Anatomy of the Void',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen-single">
        <div class="week-eyebrow">Week 1 — The Anatomy of the Void &nbsp;·&nbsp; Screen 6 of 19</div>
        <div class="screen-badge-pill practice">Practice</div>
        <h1 class="screen-title">Which ache is mine?</h1>
        <p class="screen-body-text">Choose the one that feels most honest right now. There is no wrong answer.</p>
        <div class="choice-list">
          ${[
            {id:'a', icon:'&#128167;', text:'Loneliness — I feel disconnected even when surrounded by people.'},
            {id:'b', icon:'&#127757;', text:'Isolation — I genuinely have very few people in my life right now.'},
            {id:'c', icon:'&#9889;', text:'Both — the disconnection and the absence at the same time.'},
            {id:'d', icon:'&#127807;', text:'Something harder to name — a background ache I cannot quite identify.'}
          ].map(opt => `
            <button class="choice-item ${state.answers['S-06'] === opt.id ? 'selected' : ''}"
              onclick="selectChoice('S-06', '${opt.id}', this)">
              <span class="choice-icon">${opt.icon}</span>
              <span class="choice-text">${opt.text}</span>
            </button>
          `).join('')}
        </div>
        <div class="benne-bar" style="margin-top:1.25rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Whatever you chose — it is the most honest thing you have said today. The program listens to that answer throughout the weeks ahead.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-07',
    session: 'Session 3',
    sessionTitle: 'The body keeps score',
    week: 'Week 1',
    weekTitle: 'The Anatomy of the Void',
    badge: 'story',
    badgeLabel: 'Story',
    render: () => `
      <div class="screen-single">
        <div class="week-eyebrow">Week 1 — The Anatomy of the Void &nbsp;·&nbsp; Screen 7 of 19</div>
        <div class="story-cinema-band">
          <div class="cinema-badge">Session 3 &nbsp;·&nbsp; The Body Keeps Score</div>
          <div class="cinema-caption">Priya, 27. The body carries what the mind has not named.</div>
        </div>
        <h1 class="screen-title">The chest that tightens.</h1>
        <div class="dialogue-scene">
          <div class="scene-setting">End of a long day. Meetings. Messages. Smiling.</div>
          <div class="dialogue-line narrator">Priya gets home. Closes the door. Sits on the edge of the bed.</div>
          <div class="dialogue-line narrator">She does not know why she feels so heavy. Nothing specific happened. She just feels — dense. Like her chest has weight in it that should not be there.</div>
          <div class="dialogue-callout">"Nothing is wrong."<br>"Everything is fine."<br>The body disagrees.</div>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">The body is honest even when we are not. It has been trying to tell you something for a long time. We are finally listening. That heaviness Priya feels is not weakness — it is the body keeping an accurate record of what the mind has been working to ignore.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-08',
    session: 'Session 3',
    sessionTitle: 'The body keeps score',
    week: 'Week 1',
    weekTitle: 'The Anatomy of the Void',
    badge: 'insight',
    badgeLabel: 'Insight',
    render: () => `
      <div class="screen-single">
        <div class="week-eyebrow">Week 1 — The Anatomy of the Void &nbsp;·&nbsp; Screen 8 of 19</div>
        <div class="screen-badge-pill insight">Insight</div>
        <h1 class="screen-title">What loneliness does to the body.</h1>
        <div class="body-effects-grid">
          <div class="body-effect-card">
            <div class="body-effect-icon">&#10084;&#65039;</div>
            <div class="body-effect-title">Cardiovascular</div>
            <div class="body-effect-stat">+29%</div>
            <div class="body-effect-desc">increased risk of heart disease in chronically lonely adults</div>
          </div>
          <div class="body-effect-card">
            <div class="body-effect-icon">&#129504;</div>
            <div class="body-effect-title">Immune</div>
            <div class="body-effect-stat">Elevated</div>
            <div class="body-effect-desc">inflammatory markers — the body in persistent alert mode</div>
          </div>
          <div class="body-effect-card">
            <div class="body-effect-icon">&#128564;</div>
            <div class="body-effect-title">Sleep</div>
            <div class="body-effect-stat">Disrupted</div>
            <div class="body-effect-desc">lighter, more fragmented — the brain scanning for threat overnight</div>
          </div>
          <div class="body-effect-card">
            <div class="body-effect-icon">&#9889;</div>
            <div class="body-effect-title">Cortisol</div>
            <div class="body-effect-stat">Raised</div>
            <div class="body-effect-desc">chronic stress hormone activation — the body reads loneliness as danger</div>
          </div>
        </div>
        <div class="research-cite-block">
          <div class="cite-source">Holt-Lunstad et al.<span class="cite-ref">&#178;</span>, <em>PLOS Medicine</em> (2015)</div>
          <div class="cite-finding">Social isolation is as damaging to health as smoking 15 cigarettes a day. Loneliness increases mortality risk by 26%.</div>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">This is not about frightening you. It is about taking the signal seriously. The body is not overreacting. It is doing exactly what it was designed to do — alerting you that something important needs attention.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-09',
    session: 'Session 3',
    sessionTitle: 'The body keeps score',
    week: 'Week 1',
    weekTitle: 'The Anatomy of the Void',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen-single">
        <div class="week-eyebrow">Week 1 — The Anatomy of the Void &nbsp;·&nbsp; Screen 9 of 19</div>
        <div class="screen-badge-pill practice">Practice</div>
        <h1 class="screen-title">Where do you carry it?</h1>
        <p class="screen-body-text">When loneliness or emotional heaviness arrives — where do you feel it in your body? Choose as many as feel true.</p>
        <div class="body-select-grid" id="body-map">
          ${[
            {id:'chest', icon:'&#129361;', label:'Chest', desc:'tightness, heaviness'},
            {id:'throat', icon:'&#129354;', label:'Throat', desc:'constriction, lump'},
            {id:'stomach', icon:'&#129458;', label:'Stomach', desc:'hollowness, knot'},
            {id:'shoulders', icon:'&#128170;', label:'Shoulders', desc:'weight, tension'},
            {id:'jaw', icon:'&#128169;', label:'Jaw / Head', desc:'clenching, ache'},
            {id:'whole', icon:'&#127774;', label:'All over', desc:'heavy, dense, dull'},
            {id:'none', icon:'&#128528;', label:'Hard to say', desc:'I just feel flat'}
          ].map(opt => `
            <button class="body-select-btn ${(state.answers['S-09'] || []).includes(opt.id) ? 'selected' : ''}"
              onclick="toggleMultiChoice('S-09', '${opt.id}', this)">
              <span class="body-select-icon">${opt.icon}</span>
              <span class="body-select-label">${opt.label}</span>
              <span class="body-select-desc">${opt.desc}</span>
            </button>
          `).join('')}
        </div>
        <div class="benne-bar" style="margin-top:1.25rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">This matters later. When the feeling arrives, knowing where it lives in your body is the first step in the response protocol we will build together.</div>
          </div>
        </div>
        <div class="clinical-note">Your body locations are saved. They appear in your personalised BEYOND method at Screen 138.</div>
      </div>
    `
  },

  {
    id: 'S-10',
    session: 'Session 4',
    sessionTitle: 'The signal',
    week: 'Week 1',
    weekTitle: 'The Anatomy of the Void',
    badge: 'story',
    badgeLabel: 'Story',
    render: () => `
      <div class="screen-single">
        <div class="week-eyebrow">Week 1 — The Anatomy of the Void &nbsp;·&nbsp; Screen 10 of 19</div>
        <div class="story-cinema-band">
          <div class="cinema-badge">Session 4 &nbsp;·&nbsp; The Signal</div>
          <div class="cinema-caption">James, 42. The signal has been glowing for months.</div>
        </div>
        <h1 class="screen-title">The dashboard light.</h1>
        <div class="dialogue-scene">
          <div class="scene-setting">James has been ignoring a warning light on his car dashboard for three months.</div>
          <div class="dialogue-line narrator">He covers it with a piece of tape. Problem solved. Except the problem is not solved — it is just no longer visible.</div>
          <div class="dialogue-line dialogue-char"><span class="char-name">James:</span> <span class="char-words">"It is probably nothing. I will deal with it later."</span></div>
          <div class="dialogue-line narrator">The light was correct. The engine needed attention three months ago. Now the repair costs three times as much.</div>
          <div class="dialogue-callout">The feeling you have been covering<br>is not nothing.<br>It is a signal.</div>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Loneliness is not a character flaw. It is a dashboard light. It is the mind and body signalling that something important is asking for attention. The signal is not the problem. Ignoring it is.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-11',
    session: 'Session 4',
    sessionTitle: 'The signal',
    week: 'Week 1',
    weekTitle: 'The Anatomy of the Void',
    badge: 'insight',
    badgeLabel: 'Insight',
    render: () => `
      <div class="screen-single">
        <div class="week-eyebrow">Week 1 — The Anatomy of the Void &nbsp;·&nbsp; Screen 11 of 19</div>
        <div class="screen-badge-pill insight">Insight</div>
        <h1 class="screen-title">What the signal is saying.</h1>
        <div class="signal-decode">
          <div class="signal-row wrong">
            <div class="signal-what">What loneliness seems to say</div>
            <div class="signal-message">"You are fundamentally alone and always will be."</div>
          </div>
          <div class="signal-arrow">&#8595;</div>
          <div class="signal-row right">
            <div class="signal-what">What loneliness actually signals</div>
            <div class="signal-message">"You have a need for connection that is not yet being met. That need is real. And it is workable."</div>
          </div>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">The loneliness signal is not saying "you are defective." It is saying "something you genuinely need is not present." Those are very different messages — and how we interpret the signal determines everything about what we do next.</div>
          </div>
        </div>
        <div class="research-cite-block">
          <div class="cite-source">Cacioppo &amp; Patrick<span class="cite-ref">&#185;</span></div>
          <div class="cite-finding">Loneliness evolved as a survival signal — just as hunger signals a need for food, loneliness signals a need for social connection. The signal itself is healthy. Chronic loneliness occurs when the signal is persistently ignored or misread.</div>
        </div>
      </div>
    `
  },

  {
    id: 'S-12',
    session: 'Session 4',
    sessionTitle: 'The signal',
    week: 'Week 1',
    weekTitle: 'The Anatomy of the Void',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen-single">
        <div class="week-eyebrow">Week 1 — The Anatomy of the Void &nbsp;·&nbsp; Screen 12 of 19</div>
        <div class="screen-badge-pill practice">Practice</div>
        <h1 class="screen-title">How long have you been here?</h1>
        <p class="screen-body-text">Not precise dates — just seasons. How long have you been carrying some version of this weight?</p>
        <div class="timeline-select">
          ${[
            {id:'weeks', label:'A few weeks', sub:'Recent and raw'},
            {id:'months', label:'Several months', sub:'Long enough to feel familiar'},
            {id:'year', label:'About a year', sub:'A full cycle of seasons'},
            {id:'years', label:'A few years', sub:'It has become part of the landscape'},
            {id:'decade', label:'Most of my adult life', sub:'I cannot remember it being different'},
            {id:'always', label:'Always, in some form', sub:'As far back as I can remember'}
          ].map(opt => `
            <button class="timeline-btn ${state.answers['S-12'] === opt.id ? 'selected' : ''}"
              onclick="selectChoice('S-12', '${opt.id}', this)">
              <span class="timeline-label">${opt.label}</span>
              <span class="timeline-sub">${opt.sub}</span>
            </button>
          `).join('')}
        </div>
        <div class="benne-bar" style="margin-top:1.25rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">However long — it is real. And however long it has been building, eight weeks of honest attention can begin to shift it. Not erase it. Shift it. That is a different, more honest, and more achievable goal.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-13',
    session: 'Session 4',
    sessionTitle: 'The signal',
    week: 'Week 1',
    weekTitle: 'The Anatomy of the Void',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen-single">
        <div class="week-eyebrow">Week 1 — The Anatomy of the Void &nbsp;·&nbsp; Screen 13 of 19</div>
        <div class="screen-badge-pill practice">Practice</div>
        <h1 class="screen-title">My signal sentence.</h1>
        <p class="screen-body-text">Complete this sentence as honestly as you can. There is no right answer. Just the truest one you can find right now.</p>
        <div class="sentence-stem-card">
          <div class="stem-text">"My loneliness may be signaling that I need…"</div>
          <textarea class="sentence-textarea" id="input-S-13"
            placeholder="…to be truly known by someone. …to stop performing. …a place where I belong. Write whatever is most true."
            oninput="saveAnswer('S-13', this.value)"
          >${state.answers['S-13'] || ''}</textarea>
        </div>
        <div class="seed-notice">
          <span class="seed-icon">&#127807;</span>
          <span>This sentence is a <strong>seed</strong>. It will return in Week 8 — transformed by everything you build between now and then.</span>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Most people carry that sentence their whole lives without naming it. You just named it. That is not nothing. That is the first real act of this program.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-14',
    session: 'Session 5',
    sessionTitle: 'Ancient company',
    week: 'Week 1',
    weekTitle: 'The Anatomy of the Void',
    badge: 'story',
    badgeLabel: 'Story',
    render: () => `
      <div class="screen-single">
        <div class="week-eyebrow">Week 1 — The Anatomy of the Void &nbsp;·&nbsp; Screen 14 of 19</div>
        <div class="story-cinema-band">
          <div class="cinema-badge">Session 5 &nbsp;·&nbsp; Ancient Company</div>
          <div class="cinema-caption">Elena, 51. Watching the light on her birthday morning.</div>
        </div>
        <h1 class="screen-title">A voice from the wilderness.</h1>
        <div class="dialogue-scene">
          <div class="scene-setting">The morning of Elena's 51st birthday. No one has called yet.</div>
          <div class="dialogue-line narrator">She sits by the window watching the light move across the wall. The apartment is very quiet.</div>
          <div class="dialogue-line dialogue-char"><span class="char-name">Elena:</span> <span class="char-words">"I wonder if anyone will remember."</span></div>
          <div class="dialogue-line narrator">Her phone is face-down. She is not ready to check it yet — not ready to know.</div>
          <div class="dialogue-line narrator">She has felt this particular loneliness before. Not the absence of people — the absence of being held in someone's mind as mattering.</div>
          <div class="dialogue-callout">Somewhere, 3,000 years ago,<br>someone wrote a poem<br>about exactly this feeling.</div>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Elena is not the first person to sit with this. Not even close. There is a 3,000-year-old poem that describes her morning almost exactly — written by someone who also felt invisible, also felt far from everyone who mattered. Read the next screen slowly.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-15',
    session: 'Session 5',
    sessionTitle: 'Ancient company',
    week: 'Week 1',
    weekTitle: 'The Anatomy of the Void',
    badge: 'bridge',
    badgeLabel: 'Bridge',
    render: () => `
      <div class="screen-single">
        <div class="week-eyebrow">Week 1 — The Anatomy of the Void &nbsp;·&nbsp; Screen 15 of 19</div>
        <div class="screen-badge-pill bridge">Ancient Company</div>
        <h1 class="screen-title">Someone who felt exactly this.</h1>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">The Book of Psalms is not merely ancient literature preserved by human appreciation. These sacred writings were inspired by God, Jehovah — recorded by faithful servants whose words were guided by a purpose far greater than their own, and whose lives became living testimonies of His loving kindness. The psalmists wrote from real moments of danger, fear, and deep distress — times when Jehovah protected them, helped them, and never abandoned them, even in life-and-death situations. Carefully copied by devoted scribes and sung in worship across generations, these psalms have been preserved because Jehovah ensured that these testimonies would reach every person who would need them — including you, at this very moment.</div>
          </div>
        </div>
        <div class="bridge-invite">
          <div class="bridge-icon">&#128218;</div>
          <div class="bridge-text">Psalm 102 was written by someone in deep distress — isolated, sleepless, feeling forgotten. The images they chose are so specific, so physical, that scholars believe they wrote from real experience.<br><br>Read the next screen as if it were written for you. Because in a very real sense — it was.</div>
        </div>
      </div>
    `
  },

  {
    id: 'S-16',
    session: 'Session 5',
    sessionTitle: 'Ancient company',
    week: 'Week 1',
    weekTitle: 'The Anatomy of the Void',
    badge: 'anchor',
    badgeLabel: 'Scripture',
    render: () => `
      <div class="screen">
        <div class="scripture-screen">
          <div class="scripture-ref">Psalm 102:6-7 &nbsp;·&nbsp; NLT</div>
          <p class="scripture-text">
            "I am like an owl in the desert,<br>
            like a little owl in a far-off wilderness.<br>
            I lie awake,<br>
            lonely as a solitary bird on the roof."
          </p>
          <div class="scripture-divider"></div>
          <div class="scripture-translation-note">New Living Translation</div>
        </div>
      </div>
    `
  },

  {
    id: 'S-17',
    session: 'Session 5',
    sessionTitle: 'Ancient company',
    week: 'Week 1',
    weekTitle: 'The Anatomy of the Void',
    badge: 'insight',
    badgeLabel: 'What the Psalmist Understood',
    render: () => `
      <div class="screen-single">
        <div class="week-eyebrow">Week 1 — The Anatomy of the Void &nbsp;·&nbsp; Screen 17 of 19</div>
        <div class="screen-badge-pill insight">What the Psalmist Understood</div>
        <h1 class="screen-title">Still alive. Still watching.</h1>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">The person who wrote those words was still alive. Still watching. Still bearing witness to their own pain with enough clarity to find words for it. That is not weakness — that is exactly what you are doing right now, in this program. The owl in the wilderness did not disappear. It watched. It waited. It survived.</div>
          </div>
        </div>
        <div class="three-card-grid">
          <div class="concept-card teal">
            <div class="concept-card-icon">&#129417;</div>
            <div class="concept-card-title">The owl in the desert</div>
            <div class="concept-card-body">Out of place. Alone. Surviving in a landscape that was not made for them.</div>
          </div>
          <div class="concept-card navy">
            <div class="concept-card-icon">&#127769;</div>
            <div class="concept-card-title">Awake on the roof</div>
            <div class="concept-card-body">Sleepless. Isolated. Watching the rest of the world be at rest while they were not.</div>
          </div>
          <div class="concept-card gold">
            <div class="concept-card-icon">&#9889;</div>
            <div class="concept-card-title">3,000 years later</div>
            <div class="concept-card-body">These words were kept. Copied. Sung. Because generation after generation recognised themselves in them.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-18',
    session: 'Session 5',
    sessionTitle: 'Ancient company',
    week: 'Week 1',
    weekTitle: 'The Anatomy of the Void',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen-single">
        <div class="week-eyebrow">Week 1 — The Anatomy of the Void &nbsp;·&nbsp; Screen 18 of 19</div>
        <div class="screen-badge-pill practice">Practice</div>
        <h1 class="screen-title">What I would write.</h1>
        <p class="screen-body-text">In the spirit of the psalm — not as scripture, but as personal honesty — write one sentence about how you feel right now. It does not need to be eloquent.</p>
        <div class="psalm-card">
          <div class="psalm-prompt">My version of the psalm, right now:</div>
          <textarea class="sentence-textarea" id="input-S-18"
            placeholder="I am like… I lie awake… I feel… Write whatever is most true."
            oninput="saveAnswer('S-18', this.value)"
          >${state.answers['S-18'] || ''}</textarea>
          <div class="psalm-note">Some people write one word. Some write a paragraph. Both are right.</div>
        </div>
        <div class="benne-bar" style="margin-top:1rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Whatever you wrote — you are in good company. A very long, very human line of people who sat with this exact feeling and found words for it. That line includes you now.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-19',
    session: 'Session 5',
    sessionTitle: 'Ancient company',
    week: 'Week 1',
    weekTitle: 'The Anatomy of the Void',
    badge: 'close',
    badgeLabel: 'Week 1 Complete',
    render: () => `
      <div class="screen-single">
        <div class="week-complete-hero">
          <div class="week-complete-icon">&#10022;</div>
          <h1 class="week-complete-title">You made it through Week 1.</h1>
          <p class="week-complete-text">Week 1 was not about feeling better. It was about feeling <em>honestly</em>. You named something today that many people spend years avoiding.</p>
        </div>
        <div class="week-summary-cards">
          <div class="summary-card">
            <div class="summary-icon">&#127807;</div>
            <div class="summary-text">Signal sentence planted — returns in Week 8</div>
          </div>
          <div class="summary-card">
            <div class="summary-icon">&#129361;</div>
            <div class="summary-text">Body map saved — used in your BEYOND protocol</div>
          </div>
          <div class="summary-card">
            <div class="summary-icon">&#129417;</div>
            <div class="summary-text">Ancient company found — you are not the first</div>
          </div>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Week 2 takes you deeper — into the story loneliness has been telling about you, and the thoughts that have been riding along in your backpack without you noticing them. Rest here first. You have done real work today.</div>
          </div>
        </div>
        <button class="save-btn" style="width:100%;justify-content:center" onclick="saveProgress()">&#10003; &nbsp; Save Progress</button>
      </div>
    `
  },

  {
    id: 'S-20',
    session: 'Session 6',
    sessionTitle: 'The invisible backpack',
    week: 'Week 2',
    weekTitle: 'The Story Loneliness Tells',
    badge: 'story',
    badgeLabel: 'Story',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 2 — The Story Loneliness Tells</div>
          <div class="week-session">Session 6 of 10 &nbsp;·&nbsp; Screen 20 of 38</div>
        </div>
        <span class="screen-badge badge-story">Story</span>
        <h1 class="screen-title">The weight on the shoulders.</h1>
        <div class="story-block">
          <div class="story-character">Nadia — a true-to-life composite</div>
          <p class="story-text">
            Nadia, 38, wakes up already tired. Before she has spoken a word or checked her phone, a quiet inventory runs through her mind — who did not call, who forgot, who seems to have moved on without her.
          </p>
          <p class="story-text" style="margin-top:1rem">
            She does not choose to run this inventory. It runs itself. She gets up, makes coffee, and carries the weight of it into another day — without naming it, without telling anyone, without knowing that this invisible accounting is what is exhausting her.
          </p>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Most of us are carrying a backpack full of thoughts we never consciously chose to put there. They got packed over years — by experiences, by rejections, by silences that lasted too long. The heaviness is not your character. It is your history.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-21',
    session: 'Session 6',
    sessionTitle: 'The invisible backpack',
    week: 'Week 2',
    weekTitle: 'The Story Loneliness Tells',
    badge: 'insight',
    badgeLabel: 'Insight',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 2 — The Story Loneliness Tells</div>
          <div class="week-session">Session 6 of 10 &nbsp;·&nbsp; Screen 21 of 38</div>
        </div>
        <span class="screen-badge badge-insight">Insight</span>
        <h1 class="screen-title">Thoughts we did not pack.</h1>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Thoughts are not facts. They are patterns — some inherited, some learned, some built from repeated painful experience. The backpack can be examined. It can be lightened.</div>
          </div>
        </div>
        <div class="insight-block">
          <p class="screen-body-text" style="margin-bottom:1rem">
            Psychiatrist Aaron Beck<a class="cite" title="Beck, Cognitive Therapy, 1979">¹</a> discovered that depression and loneliness are maintained not just by circumstances but by the meaning we assign to them. He called these automatic negative thoughts — involuntary mental habits that fire before we have a chance to question them.
          </p>
          <p class="screen-body-text" style="margin-bottom:0">
            David Burns<a class="cite" title="Burns, Feeling Good, 1980">²</a> brought this research to millions of everyday readers — showing that these thought patterns are not a character flaw. They are learned. And what is learned can be examined, questioned, and gradually changed.
          </p>
          <div class="insight-source">
            <sup>1</sup> Aaron Beck, <em>Cognitive Therapy of Depression</em> (1979) &nbsp; <sup>2</sup> David Burns, <em>Feeling Good</em> (1980)
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-22',
    session: 'Session 6',
    sessionTitle: 'The invisible backpack',
    week: 'Week 2',
    weekTitle: 'The Story Loneliness Tells',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 2 — The Story Loneliness Tells</div>
          <div class="week-session">Session 6 of 10 &nbsp;·&nbsp; Screen 22 of 38</div>
        </div>
        <span class="screen-badge badge-practice">Practice</span>
        <h1 class="screen-title">What is in my backpack?</h1>
        <p class="screen-body-text">
          Select every thought that feels familiar. These are the ones that tend to run automatically — before you have had a chance to question them.
        </p>
        <div class="choice-list" id="backpack-list">
          ${[
            { id: 'a', text: 'Nobody thinks of me first.' },
            { id: 'b', text: 'I always end up on the outside.' },
            { id: 'c', text: 'People are polite to me but not truly interested in me.' },
            { id: 'd', text: 'I try and it never quite works.' },
            { id: 'e', text: 'There is something about me that keeps connection just out of reach.' },
            { id: 'f', text: 'Other people find this easy. I do not.' }
          ].map(opt => `
            <button class="choice-item ${(state.answers['S-22'] || []).includes(opt.id) ? 'selected' : ''}"
              onclick="toggleMultiChoice('S-22', '${opt.id}', this)">
              <div class="choice-radio" style="border-radius:3px"></div>
              <span class="choice-text">${opt.text}</span>
            </button>
          `).join('')}
        </div>
        <div class="benne-bar" style="margin-top:1.5rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">These are heavy things to carry. And you have been carrying them quietly for a long time. We are going to look at them carefully — not to shame you for having them, but because they deserve to be examined, not just endured.</div>
          </div>
        </div>
      </div>
    `
  },

  // --- SESSION 7: Thoughts are not facts (S-23 to S-25) ---

  {
    id: 'S-23',
    session: 'Session 7',
    sessionTitle: 'Thoughts are not facts',
    week: 'Week 2',
    weekTitle: 'The Story Loneliness Tells',
    badge: 'story',
    badgeLabel: 'Story',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 2 — The Story Loneliness Tells</div>
          <div class="week-session">Session 7 of 10 &nbsp;·&nbsp; Screen 23 of 38</div>
        </div>
        <span class="screen-badge badge-story">Story</span>
        <h1 class="screen-title">They did not wave back.</h1>
        <div class="story-block">
          <div class="story-character">Daniel — a true-to-life composite</div>
          <p class="story-text">
            Daniel, 22, waves at someone he knows across a parking lot. The person does not wave back. In the three seconds it takes to reach his car, Daniel's mind has already written the conclusion: "They don't like me. They were never really my friend. I always misread these things."
          </p>
          <p class="story-text" style="margin-top:1rem">
            He drives home convinced of something that may have no basis in reality. The person may simply not have seen him.
          </p>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">The lonely mind is not broken — it is trying to protect you. It has learned to read the room fast, to spot rejection early, to prepare for the worst. The problem is it has become so good at finding rejection that it finds it even when it is not there.</div>
          </div>
        </div>
        <div class="clinical-note">
          Cacioppo's neuroimaging research<a class="cite" title="Cacioppo & Patrick, Loneliness, 2008">³</a> showed that chronically lonely individuals show heightened activation in the brain's threat-detection circuits — processing ambiguous social cues as negative far more readily than non-lonely individuals.
        </div>
      </div>
    `
  },

  {
    id: 'S-24',
    session: 'Session 7',
    sessionTitle: 'Thoughts are not facts',
    week: 'Week 2',
    weekTitle: 'The Story Loneliness Tells',
    badge: 'insight',
    badgeLabel: 'Insight',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 2 — The Story Loneliness Tells</div>
          <div class="week-session">Session 7 of 10 &nbsp;·&nbsp; Screen 24 of 38</div>
        </div>
        <span class="screen-badge badge-insight">Insight</span>
        <h1 class="screen-title">The mind-reading trap.</h1>
        <div class="insight-block">
          <p class="screen-body-text" style="margin-bottom:1rem">
            One of the most common thought patterns in loneliness is called <strong style="color:var(--text-primary)">mind-reading</strong> — jumping to a conclusion about what someone thinks or feels without real evidence. The mind writes the whole story in seconds, and it almost always writes it negatively.
          </p>
          <p class="screen-body-text" style="margin-bottom:0">
            Another common pattern is <strong style="color:var(--text-primary)">personalizing</strong> — assuming neutral events are about you. The group chat went quiet. They must be tired of me. The invitation did not come. I must have done something wrong.
          </p>
          <div class="insight-source">
            <sup>1</sup> Beck cognitive distortion taxonomy &nbsp; <sup>2</sup> Burns, <em>Feeling Good</em> — mind-reading and personalisation categories
          </div>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">These are not personal flaws. They are learned patterns — and learned patterns can be interrupted. Not overnight. But with practice, the automatic story loses some of its grip.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-25',
    session: 'Session 7',
    sessionTitle: 'Thoughts are not facts',
    week: 'Week 2',
    weekTitle: 'The Story Loneliness Tells',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 2 — The Story Loneliness Tells</div>
          <div class="week-session">Session 7 of 10 &nbsp;·&nbsp; Screen 25 of 38</div>
        </div>
        <span class="screen-badge badge-practice">Practice</span>
        <h1 class="screen-title">Three other explanations.</h1>
        <p class="screen-body-text">
          Think of a recent moment when you interpreted an ambiguous event as rejection or proof of your invisibility. Write it briefly — then write three alternative explanations for what happened.
        </p>
        <div class="practice-prompt">The event I interpreted as rejection:</div>
        <textarea class="practice-textarea" style="min-height:80px" id="input-S-25a"
          placeholder="Briefly describe the moment…"
          oninput="saveAnswerKey('S-25', 'event', this.value)"
        >${(state.answers['S-25'] || {}).event || ''}</textarea>
        <div class="practice-prompt" style="margin-top:1rem">Three other possible explanations:</div>
        ${[1,2,3].map(n => `
          <input type="text" class="practice-input" id="input-S-25-${n}"
            placeholder="Explanation ${n}…"
            value="${((state.answers['S-25'] || {})['exp'+n]) || ''}"
            oninput="saveAnswerKey('S-25', 'exp${n}', this.value)">
        `).join('')}
        <div class="benne-bar" style="margin-top:0.5rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Not to talk yourself out of the pain. Just to remind yourself that the story the mind wrote in three seconds may not be the only story possible.</div>
          </div>
        </div>
      </div>
    `
  },

  // --- SESSION 8: The loneliness loop (S-26 to S-28) ---

  {
    id: 'S-26',
    session: 'Session 8',
    sessionTitle: 'The loneliness loop',
    week: 'Week 2',
    weekTitle: 'The Story Loneliness Tells',
    badge: 'story',
    badgeLabel: 'Story',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 2 — The Story Loneliness Tells</div>
          <div class="week-session">Session 8 of 10 &nbsp;·&nbsp; Screen 26 of 38</div>
        </div>
        <span class="screen-badge badge-story">Story</span>
        <h1 class="screen-title">The shrinking world.</h1>
        <div class="story-block">
          <div class="story-character">Grace — a true-to-life composite</div>
          <p class="story-text">
            Grace, 45, stopped accepting invitations about two years ago. At first it was just one — she was tired. Then it became easier not to go than to perform okayness for an evening. Now she rarely gets invited at all.
          </p>
          <p class="story-text" style="margin-top:1rem">
            She tells herself she prefers it. But at 11pm on a Saturday she checks her phone and the silence confirms what she feared: the world has quietly moved on without her. She did not decide to be here. She arrived here one small withdrawal at a time.
          </p>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Loneliness has a way of proving itself right. You feel alone, so you pull back. You pull back, so fewer people reach out. Fewer people reach out, so the feeling deepens. It is not a character flaw. It is a loop. And the only way out of a loop is to see it first.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-27',
    session: 'Session 8',
    sessionTitle: 'The loneliness loop',
    week: 'Week 2',
    weekTitle: 'The Story Loneliness Tells',
    badge: 'insight',
    badgeLabel: 'Insight',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 2 — The Story Loneliness Tells</div>
          <div class="week-session">Session 8 of 10 &nbsp;·&nbsp; Screen 27 of 38</div>
        </div>
        <span class="screen-badge badge-insight">Insight</span>
        <h1 class="screen-title">How the loop runs.</h1>
        <div class="insight-block">
          <p class="screen-body-text" style="margin-bottom:1rem">
            Researcher John Cacioppo<a class="cite" title="Cacioppo & Patrick, Loneliness, 2008">³</a> documented this cycle precisely and called it the loneliness loop:
          </p>
          <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:1rem">
            ${['Painful feeling of disconnection','Protective withdrawal from social situations','Reduced contact with others','Intensified loneliness','Deeper withdrawal'].map((step, i) => `
              <div style="display:flex;align-items:center;gap:10px">
                <div style="width:24px;height:24px;border-radius:50%;background:var(--teal-dim);border:1px solid var(--teal-border);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:11px;font-weight:500;color:var(--teal)">${i+1}</div>
                <span style="font-size:13px;color:var(--text-secondary);font-weight:300">${step}</span>
              </div>
            `).join('')}
          </div>
          <p class="screen-body-text" style="margin-bottom:0">
            Seeing the loop is the first move toward breaking it. Not because awareness instantly changes behavior — but because you can no longer mistake the loop for simply who you are.
          </p>
        </div>
      </div>
    `
  },

  {
    id: 'S-28',
    session: 'Session 8',
    sessionTitle: 'The loneliness loop',
    week: 'Week 2',
    weekTitle: 'The Story Loneliness Tells',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 2 — The Story Loneliness Tells</div>
          <div class="week-session">Session 8 of 10 &nbsp;·&nbsp; Screen 28 of 38</div>
        </div>
        <span class="screen-badge badge-practice">Practice</span>
        <h1 class="screen-title">Where am I in the loop?</h1>
        <p class="screen-body-text">Which of these most honestly describes where you are right now?</p>
        <div class="choice-list">
          ${[
            { id: 'a', text: 'I still reach out but feel unseen when I do.' },
            { id: 'b', text: 'I have started pulling back from people.' },
            { id: 'c', text: 'I have mostly stopped trying.' },
            { id: 'd', text: 'I have been withdrawn for a long time.' },
            { id: 'e', text: 'I move in and out of it — sometimes reaching, sometimes retreating.' }
          ].map(opt => `
            <button class="choice-item ${state.answers['S-28'] === opt.id ? 'selected' : ''}"
              onclick="selectChoice('S-28', '${opt.id}', this)">
              <div class="choice-radio"></div>
              <span class="choice-text">${opt.text}</span>
            </button>
          `).join('')}
        </div>
        <div class="benne-bar" style="margin-top:1.5rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">No option here is worse than another. Each one is simply honest. And honesty about where you are is the beginning of moving somewhere different.</div>
          </div>
        </div>
      </div>
    `
  },

  // --- SESSION 9: Shame beneath the surface (S-29 to S-32) ---

  {
    id: 'S-29',
    session: 'Session 9',
    sessionTitle: 'Shame beneath the surface',
    week: 'Week 2',
    weekTitle: 'The Story Loneliness Tells',
    badge: 'story',
    badgeLabel: 'Story',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 2 — The Story Loneliness Tells</div>
          <div class="week-session">Session 9 of 10 &nbsp;·&nbsp; Screen 29 of 38</div>
        </div>
        <span class="screen-badge badge-story">Story</span>
        <h1 class="screen-title">The thing under the loneliness.</h1>
        <div class="story-block">
          <div class="story-character">Thomas — a true-to-life composite</div>
          <p class="story-text">
            Thomas, 29, has been trying to name what he feels for months. It is not quite sadness. It is not quite anger. It is something quieter and more corrosive — a low-grade belief that there is something about him specifically that makes deep connection impossible.
          </p>
          <p class="story-text" style="margin-top:1rem">
            He watches other people and wonders what they have that he does not. He has never said this to anyone because saying it out loud would make it more real. And because he is ashamed of feeling it at all.
          </p>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Sadness says something painful happened to me. Shame says something is wrong with me. They feel similar from the inside — but they are pointing in completely different directions. Sadness is about an experience. Shame is about an identity.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-30',
    session: 'Session 9',
    sessionTitle: 'Shame beneath the surface',
    week: 'Week 2',
    weekTitle: 'The Story Loneliness Tells',
    badge: 'insight',
    badgeLabel: 'Insight',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 2 — The Story Loneliness Tells</div>
          <div class="week-session">Session 9 of 10 &nbsp;·&nbsp; Screen 30 of 38</div>
        </div>
        <span class="screen-badge badge-insight">Insight</span>
        <h1 class="screen-title">Sadness and shame are not the same.</h1>
        <div class="insight-block">
          <p class="screen-body-text" style="margin-bottom:1rem">
            Researcher Brené Brown<a class="cite" title="Brown, Daring Greatly, 2012">⁴</a> spent decades studying shame and identified it as the most corrosive of all social emotions — precisely because it attacks the self rather than the situation. Shame says: I am flawed and therefore unworthy of connection.
          </p>
          <p class="screen-body-text" style="margin-bottom:0">
            And shame thrives in silence. The less it is named, the more power it holds. Brown's research consistently found that naming shame — even privately — begins to reduce its grip. The shame that is spoken loses some of its authority over us.
          </p>
          <div class="insight-source">
            <sup>4</sup> Brené Brown, <em>Daring Greatly</em> (2012) &nbsp; <sup>5</sup> Brown, <em>The Gifts of Imperfection</em> (2010)
          </div>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Loneliness, when it goes deep enough, almost always has shame woven through it. Not because you did something wrong. Because painful experiences taught you a false conclusion about yourself — and you have been living inside that conclusion ever since.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-31',
    session: 'Session 9',
    sessionTitle: 'Shame beneath the surface',
    week: 'Week 2',
    weekTitle: 'The Story Loneliness Tells',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 2 — The Story Loneliness Tells</div>
          <div class="week-session">Session 9 of 10 &nbsp;·&nbsp; Screen 31 of 38</div>
        </div>
        <span class="screen-badge badge-practice">Practice</span>
        <h1 class="screen-title">The sentence shame whispers.</h1>
        <p class="screen-body-text">
          This is the most private practice in the program so far. You are not being asked to share this with anyone. Just to name it here — because a shame that is named is less powerful than one that runs silently.
        </p>
        <div class="practice-prompt">The sentence shame has been whispering about me is…</div>
        <div class="choice-list" style="margin-bottom:1rem">
          ${[
            { id: 'a', text: 'There is something about me that keeps people at a distance.' },
            { id: 'b', text: 'I am too much for most people.' },
            { id: 'c', text: "I am not enough to hold anyone's interest." },
            { id: 'd', text: 'I am easy to forget.' },
            { id: 'e', text: 'I have missed my window for connection.' },
            { id: 'f', text: 'I do not know how to connect the way others do.' }
          ].map(opt => `
            <button class="choice-item ${state.answers['S-31'] === opt.id ? 'selected' : ''}"
              onclick="selectChoice('S-31', '${opt.id}', this)">
              <div class="choice-radio"></div>
              <span class="choice-text">${opt.text}</span>
            </button>
          `).join('')}
        </div>
        <div class="practice-prompt">Or write your own:</div>
        <textarea class="practice-textarea" style="min-height:70px" id="input-S-31-own"
          placeholder="The shame sentence in your own words…"
          oninput="saveAnswerKey('S-31', 'own', this.value)"
        >${(state.answers['S-31-own'] || '')}</textarea>
        <div class="benne-bar" style="margin-top:1rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">That sentence has probably been running quietly for a long time. We are going to look at it carefully — not to shame you for having it, but because it deserves to be examined rather than simply endured.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-32',
    session: 'Session 9',
    sessionTitle: 'Shame beneath the surface',
    week: 'Week 2',
    weekTitle: 'The Story Loneliness Tells',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 2 — The Story Loneliness Tells</div>
          <div class="week-session">Session 9 of 10 &nbsp;·&nbsp; Screen 32 of 38</div>
        </div>
        <span class="screen-badge badge-practice">Practice</span>
        <h1 class="screen-title">Where did that sentence come from?</h1>
        <p class="screen-body-text">
          That sentence did not arrive fully formed. Something taught it to you. Identifying where it came from does not excuse the pain — but it reminds you that it was learned. And what is learned can be unlearned.
        </p>
        <p class="screen-body-text">Select any that feel true:</p>
        <div class="choice-list">
          ${[
            { id: 'a', text: 'Repeated experiences of rejection or exclusion.' },
            { id: 'b', text: 'A relationship that ended badly and changed how I saw myself.' },
            { id: 'c', text: 'Growing up in an emotionally distant or critical environment.' },
            { id: 'd', text: 'Social exclusion during formative years — school, community, or family.' },
            { id: 'e', text: 'A significant loss that left a silence no one filled.' },
            { id: 'f', text: 'I am not sure yet.' }
          ].map(opt => `
            <button class="choice-item ${(state.answers['S-32'] || []).includes(opt.id) ? 'selected' : ''}"
              onclick="toggleMultiChoice('S-32', '${opt.id}', this)">
              <div class="choice-radio" style="border-radius:3px"></div>
              <span class="choice-text">${opt.text}</span>
            </button>
          `).join('')}
        </div>
        <div class="benne-bar" style="margin-top:1.5rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Wherever it came from — it was learned. And what is learned can be unlearned. Not overnight. But it can.</div>
          </div>
        </div>
      </div>
    `
  },

  // --- SESSION 10: The scripture anchor (S-33 to S-38) ---

  {
    id: 'S-33',
    session: 'Session 10',
    sessionTitle: 'The scripture anchor',
    week: 'Week 2',
    weekTitle: 'The Story Loneliness Tells',
    badge: 'story',
    badgeLabel: 'Story',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 2 — The Story Loneliness Tells</div>
          <div class="week-session">Session 10 of 10 &nbsp;·&nbsp; Screen 33 of 38</div>
        </div>
        <span class="screen-badge badge-story">Story</span>
        <h1 class="screen-title">The person no one noticed.</h1>
        <div class="story-block">
          <div class="story-character">Ama — a true-to-life composite</div>
          <p class="story-text">
            Ama, 33, sits in a gathering she has attended faithfully for years. Around her, people cluster in conversations she is not part of. She is not excluded aggressively — no one has been unkind. She is simply overlooked.
          </p>
          <p class="story-text" style="margin-top:1rem">
            She leaves early, drives home in silence, and thinks: "I could stop coming and it would take weeks before anyone noticed." That thought — that specific thought — is the most painful one she has ever had about herself.
          </p>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">There is a piece of writing that is thousands of years old. The person who wrote it was not performing faith. They were telling the truth about what it felt like to look around and find no one who truly knew them. I want you to read it slowly.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-34',
    session: 'Session 10',
    sessionTitle: 'The scripture anchor',
    week: 'Week 2',
    weekTitle: 'The Story Loneliness Tells',
    badge: 'bridge',
    badgeLabel: 'Bridge',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 2 — The Story Loneliness Tells</div>
          <div class="week-session">Session 10 of 10 &nbsp;·&nbsp; Screen 34 of 38</div>
        </div>
        <span class="screen-badge badge-bridge">Ancient Company</span>
        <h1 class="screen-title">A cry from the darkest corner.</h1>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">The Book of Psalms is not merely ancient literature preserved by human appreciation. These sacred writings were inspired by God, Jehovah — recorded by faithful servants whose words were guided by a purpose far greater than their own, and whose lives became living testimonies of His loving kindness. The psalmists wrote from real moments of danger, fear, and deep distress — times when Jehovah protected them, helped them, and never abandoned them, even in life-and-death situations. Carefully copied by devoted scribes and sung in worship across generations, these psalms have been preserved because Jehovah ensured that these testimonies would reach every person who would need them — including you, at this very moment.</div>
          </div>
        </div>
        <p class="screen-body-text">
          Psalm 142 was written by David from a cave — literally in hiding, surrounded by enemies, with nowhere to turn. This was not metaphor. This was a person in genuine danger who felt completely unknown and unseen by everyone around him.
        </p>
        <p class="screen-body-text">
          Read the next screen slowly. Give it the space it deserves.
        </p>
      </div>
    `
  },

  {
    id: 'S-35',
    session: 'Session 10',
    sessionTitle: 'The scripture anchor',
    week: 'Week 2',
    weekTitle: 'The Story Loneliness Tells',
    badge: 'anchor',
    badgeLabel: 'Scripture',
    render: () => `
      <div class="screen">
        <div class="scripture-screen">
          <div class="scripture-ref">Psalm 142:4 &nbsp;·&nbsp; NLT</div>
          <p class="scripture-text">
            "I look for someone to come and help me,<br>
            but no one gives me a passing thought!<br>
            No one will help me;<br>
            no one cares a bit what happens to me."
          </p>
          <div class="scripture-divider"></div>
          <div class="scripture-translation-note">New Living Translation</div>
        </div>
      </div>
    `
  },

  {
    id: 'S-36',
    session: 'Session 10',
    sessionTitle: 'The scripture anchor',
    week: 'Week 2',
    weekTitle: 'The Story Loneliness Tells',
    badge: 'insight',
    badgeLabel: 'Insight',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 2 — The Story Loneliness Tells</div>
          <div class="week-session">Session 10 of 10 &nbsp;·&nbsp; Screen 36 of 38</div>
        </div>
        <span class="screen-badge badge-insight">What Those Words Carry</span>
        <h1 class="screen-title">No one gives me a passing thought.</h1>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">"No one gives me a passing thought." There it is. Not — I have no friends. Not — I am unpopular. Just: no one thinks of me. That is the specific ache, is it not. Not the absence of people. The absence of being held in someone's mind. This person wrote that down, in a cave, in genuine danger. And Jehovah preserved it — across all of history — so that you could read it and know: your ache has been understood by the One who matters most.</div>
          </div>
        </div>
        <p class="screen-body-text">
          David survived what he was going through. Jehovah was close to him in that cave — even when it did not feel that way. This is the testimony the psalm carries: not that the pain was not real. But that Jehovah's presence in the pain was even more real.
        </p>
        <div class="insight-block">
          <p class="screen-body-text" style="margin-bottom:0">
            The same Jehovah who heard David's cry in that cave hears yours. The same One who ensured this psalm would survive long enough to reach you today has not changed. His loving kindness does not expire.
          </p>
        </div>
      </div>
    `
  },

  {
    id: 'S-37',
    session: 'Session 10',
    sessionTitle: 'The scripture anchor',
    week: 'Week 2',
    weekTitle: 'The Story Loneliness Tells',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 2 — The Story Loneliness Tells</div>
          <div class="week-session">Session 10 of 10 &nbsp;·&nbsp; Screen 37 of 38</div>
        </div>
        <span class="screen-badge badge-practice">Practice</span>
        <h1 class="screen-title">What I would want someone to know.</h1>
        <p class="screen-body-text">
          If someone could truly know one thing about you — not your achievements, not your abilities, but something real about your inner experience — what would you want it to be?
        </p>
        <div class="practice-prompt">If someone could really know one true thing about me, it would be…</div>
        <textarea class="practice-textarea" id="input-S-37"
          placeholder="Write whatever is most honest — one sentence or more…"
          oninput="saveAnswer('S-37', this.value)"
        >${state.answers['S-37'] || ''}</textarea>
        <div class="benne-bar" style="margin-top:1rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">This is one of the most important things you will write in this program. It is a seed. It will return to you later — in a very different context. Hold it carefully.</div>
          </div>
        </div>
        <div class="clinical-note">
          Expressive writing research<a class="cite" title="Pennebaker, Opening Up, 1990">⁶</a> consistently shows that naming our inner experience — even privately — reduces the physiological and psychological weight of carrying it unspoken.
        </div>
      </div>
    `
  },

  {
    id: 'S-38',
    session: 'Session 10',
    sessionTitle: 'The scripture anchor',
    week: 'Week 2',
    weekTitle: 'The Story Loneliness Tells',
    badge: 'close',
    badgeLabel: 'Week 2 Complete',
    render: () => `
      <div class="screen">
        <div class="week-complete">
          <div class="week-complete-icon">✦</div>
          <h1 class="week-complete-title">You made it through Week 2.</h1>
          <p class="week-complete-text">
            Week 2 asked a lot of you. You looked at the thoughts you carry, the loop you may be in, and the shame that has been living quietly underneath it all. Most people spend their entire lives not looking at these things. You looked. That matters more than you know.
          </p>
          <div class="benne-bar" style="text-align:left; margin-bottom:2rem">
            <div class="benne-avatar"></div>
            <div class="benne-content">
              <div class="benne-name">Benne Hart</div>
              <div class="benne-text">The descent is not over — Week 3 will go deeper into what the shame story is built on. But you have named something this week that most people never name. Rest here. Save your progress. And know that what you wrote in Screen 37 — the one true thing — will matter more than you can see right now.</div>
            </div>
          </div>
          <button class="save-btn" onclick="saveProgress()">
            ✓ &nbsp; Save Progress
          </button>
        </div>
      </div>
    `
  }

,

  // ============================================================
  // WEEK 3 — RESISTING ERASURE THROUGH TRUTH (Screens 39–57)
  // ============================================================

  // --- SESSION 11: The pathology story (S-39 to S-41) ---

  {
    id: 'S-39',
    session: 'Session 11',
    sessionTitle: 'The pathology story',
    week: 'Week 3',
    weekTitle: 'Resisting Erasure Through Truth',
    badge: 'story',
    badgeLabel: 'Story',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 3 — Resisting Erasure Through Truth</div>
          <div class="week-session">Session 11 of 15 &nbsp;·&nbsp; Screen 39 of 57</div>
        </div>
        <span class="screen-badge badge-story">Story</span>
        <h1 class="screen-title">Something must be wrong with me.</h1>
        <div class="story-block">
          <div class="story-character">Sofia — a true-to-life composite</div>
          <p class="story-text">
            Sofia, 31, has been in therapy twice. Both times she arrived with the same quiet belief she never said out loud: that the therapist would eventually confirm what she already suspected — that something in her wiring makes sustained connection impossible for her specifically.
          </p>
          <p class="story-text" style="margin-top:1rem">
            She watches other people's ease with each other and concludes it is evidence. Every social stumble becomes more evidence. She has built an airtight case against herself over fifteen years. The case feels like self-awareness. It is actually a prison.
          </p>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">There is a difference between having a painful history with connection and being someone who cannot connect. The first is something that happened to you. The second is a story you started telling about yourself because of it. Those two things feel identical from the inside. But they are not the same thing at all.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-40',
    session: 'Session 11',
    sessionTitle: 'The pathology story',
    week: 'Week 3',
    weekTitle: 'Resisting Erasure Through Truth',
    badge: 'insight',
    badgeLabel: 'Insight',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 3 — Resisting Erasure Through Truth</div>
          <div class="week-session">Session 11 of 15 &nbsp;·&nbsp; Screen 40 of 57</div>
        </div>
        <span class="screen-badge badge-insight">Insight</span>
        <h1 class="screen-title">The story is not the person.</h1>
        <div class="insight-block">
          <p class="screen-body-text" style="margin-bottom:1rem">
            Therapists Michael White and David Epston<a class="cite" title="White & Epston, Narrative Means to Therapeutic Ends, 1990">¹</a> developed Narrative Therapy on a foundational insight: the person is not the problem. The story is the problem. When someone has lived inside a painful story long enough, they stop questioning it and start inhabiting it as identity.
          </p>
          <p class="screen-body-text" style="margin-bottom:0">
            The clinical term for this is a <strong style="color:var(--text-primary)">dominant story</strong> — a narrative so familiar it feels like fact. The therapeutic move is not to tell the person the story is wrong. It is to help them see the story as a story — something constructed, something that can be examined, and something that does not have to be the final word.
          </p>
          <div class="insight-source">
            <sup>1</sup> Michael White &amp; David Epston, <em>Narrative Means to Therapeutic Ends</em> (1990)
          </div>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">A story examined is already less powerful than a story lived in the dark. We are going to bring yours into the light this week — not to destroy it, but to see it clearly for what it is.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-41',
    session: 'Session 11',
    sessionTitle: 'The pathology story',
    week: 'Week 3',
    weekTitle: 'Resisting Erasure Through Truth',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 3 — Resisting Erasure Through Truth</div>
          <div class="week-session">Session 11 of 15 &nbsp;·&nbsp; Screen 41 of 57</div>
        </div>
        <span class="screen-badge badge-practice">Practice</span>
        <h1 class="screen-title">The story I have been living inside.</h1>
        <p class="screen-body-text">
          Write — in your own words — the story about yourself and connection that you have been living inside. Not a list of events. The story itself. The conclusion it reaches about who you are.
        </p>
        <div class="practice-prompt">The story I have been living says that I am someone who…</div>
        <textarea class="practice-textarea" id="input-S-41"
          placeholder="Write it honestly. We are going to look at it carefully together…"
          oninput="saveAnswer('S-41', this.value)"
        >${state.answers['S-41'] || ''}</textarea>
        <div class="benne-bar" style="margin-top:1rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Write it honestly. A story examined is already less powerful than a story lived in the dark. This is one of the most important things you will write in this program — it will return to you at the end, transformed.</div>
          </div>
        </div>
        <div class="clinical-note">
          This entry is saved privately and will reappear at Screen 147 — the final declaration — where you will write alongside it what you now know to be also true.
        </div>
      </div>
    `
  },

  // --- SESSION 12: Shaped not broken (S-42 to S-44) ---

  {
    id: 'S-42',
    session: 'Session 12',
    sessionTitle: 'Shaped, not broken',
    week: 'Week 3',
    weekTitle: 'Resisting Erasure Through Truth',
    badge: 'story',
    badgeLabel: 'Story',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 3 — Resisting Erasure Through Truth</div>
          <div class="week-session">Session 12 of 15 &nbsp;·&nbsp; Screen 42 of 57</div>
        </div>
        <span class="screen-badge badge-story">Story</span>
        <h1 class="screen-title">The brain that learned to brace.</h1>
        <div class="story-block">
          <div class="story-character">Leon — a true-to-life composite</div>
          <p class="story-text">
            Leon, 36, notices he is always slightly braced in social situations — scanning the room, monitoring expressions, preparing for the moment things go wrong. He has always assumed this is just his personality. Anxious. Awkward.
          </p>
          <p class="story-text" style="margin-top:1rem">
            He has never considered that it might be a learned response — that his nervous system is doing exactly what nervous systems do when they have been hurt enough times: preparing for the next impact before it arrives. He thinks it is who he is. It is actually what he learned.
          </p>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">The social anxiety, the bracing, the hypervigilance — that is not your personality. That is your nervous system doing its job after being trained by pain. It adapted. That is not weakness. That is survival intelligence.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-43',
    session: 'Session 12',
    sessionTitle: 'Shaped, not broken',
    week: 'Week 3',
    weekTitle: 'Resisting Erasure Through Truth',
    badge: 'insight',
    badgeLabel: 'Insight',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 3 — Resisting Erasure Through Truth</div>
          <div class="week-session">Session 12 of 15 &nbsp;·&nbsp; Screen 43 of 57</div>
        </div>
        <span class="screen-badge badge-insight">Insight</span>
        <h1 class="screen-title">What the research actually shows.</h1>
        <div class="insight-block">
          <p class="screen-body-text" style="margin-bottom:1rem">
            Cacioppo's neuroimaging research<a class="cite" title="Cacioppo & Patrick, Loneliness, 2008">²</a> showed that chronically lonely individuals show heightened activation in the brain's threat-detection circuits — particularly the amygdala — when processing social ambiguity. The brain has been trained to expect rejection, so it reads neutral situations as threatening.
          </p>
          <p class="screen-body-text" style="margin-bottom:1rem">
            Bessel van der Kolk's<a class="cite" title="van der Kolk, The Body Keeps the Score, 2014">³</a> research on how adverse experiences reshape the nervous system provides the broader framework: the body remembers what happened, and it prepares accordingly. This is not a character defect. It is a learned neural pathway.
          </p>
          <p class="screen-body-text" style="margin-bottom:0">
            And here is the crucial part: learned pathways can be redirected. The brain that learned to brace can learn, with the right conditions and consistent practice, to approach rather than retreat.
          </p>
          <div class="insight-source">
            <sup>2</sup> Cacioppo &amp; Patrick (2008) &nbsp; <sup>3</sup> van der Kolk, <em>The Body Keeps the Score</em> (2014)
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-44',
    session: 'Session 12',
    sessionTitle: 'Shaped, not broken',
    week: 'Week 3',
    weekTitle: 'Resisting Erasure Through Truth',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 3 — Resisting Erasure Through Truth</div>
          <div class="week-session">Session 12 of 15 &nbsp;·&nbsp; Screen 44 of 57</div>
        </div>
        <span class="screen-badge badge-practice">Practice</span>
        <h1 class="screen-title">What my nervous system learned.</h1>
        <p class="screen-body-text">
          Not to assign blame — but to locate the origin of a learned pattern. Understanding where the bracing began is the first step toward choosing something different.
        </p>
        <p class="screen-body-text">Select any that feel true:</p>
        <div class="choice-list">
          ${[
            { id: 'a', text: 'I experienced repeated social rejection or exclusion that taught me to expect it.' },
            { id: 'b', text: 'I grew up in an environment where emotional closeness was unpredictable or unavailable.' },
            { id: 'c', text: 'A significant relationship ended badly and changed how safe connection felt.' },
            { id: 'd', text: 'I was humiliated or excluded during formative years in ways that still echo.' },
            { id: 'e', text: 'I am not sure yet — but I notice the bracing and that is enough for now.' }
          ].map(opt => `
            <button class="choice-item ${(state.answers['S-44'] || []).includes(opt.id) ? 'selected' : ''}"
              onclick="toggleMultiChoice('S-44', '${opt.id}', this)">
              <div class="choice-radio" style="border-radius:3px"></div>
              <span class="choice-text">${opt.text}</span>
            </button>
          `).join('')}
        </div>
        <div class="benne-bar" style="margin-top:1.5rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Whatever you chose — that pattern was learned for a reason. The reason made sense once. We are beginning to ask whether it still serves you now.</div>
          </div>
        </div>
      </div>
    `
  },

  // --- SESSION 13: Recovering out loud (S-45 to S-47) ---

  {
    id: 'S-45',
    session: 'Session 13',
    sessionTitle: 'Recovering out loud',
    week: 'Week 3',
    weekTitle: 'Resisting Erasure Through Truth',
    badge: 'story',
    badgeLabel: 'Story',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 3 — Resisting Erasure Through Truth</div>
          <div class="week-session">Session 13 of 15 &nbsp;·&nbsp; Screen 45 of 57</div>
        </div>
        <span class="screen-badge badge-story">Story</span>
        <h1 class="screen-title">The parts kept in corners.</h1>
        <div class="story-block">
          <div class="story-character">Diane — a true-to-life composite</div>
          <p class="story-text">
            Diane, 58, has never told anyone the full story of her loneliness. She has told partial versions — edited for palatability, softened so as not to burden anyone, shaped to avoid the expressions of discomfort she has seen on faces when she edges toward the real thing.
          </p>
          <p class="story-text" style="margin-top:1rem">
            She has become expert at making her loneliness socially acceptable. The cost is that no one has ever heard the actual truth. And so no one has ever actually met her. She has been protected — and invisible — for decades.
          </p>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">When we hide the painful parts, we protect ourselves from possible rejection — but we also make genuine connection impossible. Because people can only connect with what they can actually see. If you keep the real thing hidden, the connection that forms is with a performance. And a performance cannot be held, or known, or loved.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-46',
    session: 'Session 13',
    sessionTitle: 'Recovering out loud',
    week: 'Week 3',
    weekTitle: 'Resisting Erasure Through Truth',
    badge: 'insight',
    badgeLabel: 'Insight',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 3 — Resisting Erasure Through Truth</div>
          <div class="week-session">Session 13 of 15 &nbsp;·&nbsp; Screen 46 of 57</div>
        </div>
        <span class="screen-badge badge-insight">Insight</span>
        <h1 class="screen-title">Why hiding makes it worse.</h1>
        <div class="insight-block">
          <p class="screen-body-text" style="margin-bottom:1rem">
            Brené Brown's<a class="cite" title="Brown, Daring Greatly, 2012">⁴</a> research on vulnerability established one of the most replicated findings in social psychology: vulnerability is not weakness — it is the birthplace of connection. The very armor we use to protect ourselves from pain is also what prevents the connection we most need.
          </p>
          <p class="screen-body-text" style="margin-bottom:0">
            James Pennebaker's<a class="cite" title="Pennebaker, Opening Up, 1990">⁵</a> research on disclosure adds the physiological dimension: honest expression literally reduces the body's stress load. People who express their inner experience — even privately in writing — show measurable improvements in immune function, sleep, and emotional resilience. Hiding is not neutral. It costs the body something real.
          </p>
          <div class="insight-source">
            <sup>4</sup> Brown, <em>Daring Greatly</em> (2012) &nbsp; <sup>5</sup> Pennebaker, <em>Opening Up</em> (1990)
          </div>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">You do not have to tell the whole truth to everyone. But you do need to tell it somewhere. This space is the safest place to begin.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-47',
    session: 'Session 13',
    sessionTitle: 'Recovering out loud',
    week: 'Week 3',
    weekTitle: 'Resisting Erasure Through Truth',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 3 — Resisting Erasure Through Truth</div>
          <div class="week-session">Session 13 of 15 &nbsp;·&nbsp; Screen 47 of 57</div>
        </div>
        <span class="screen-badge badge-practice">Practice</span>
        <h1 class="screen-title">One true thing — said here first.</h1>
        <p class="screen-body-text">
          Write — in this private space — one true thing about your experience of loneliness that you have never said out loud to another person. Not to share it. Just to say it to yourself, in writing, for the first time.
        </p>
        <div class="practice-prompt">The true thing I have never said out loud is…</div>
        <textarea class="practice-textarea" id="input-S-47"
          placeholder="Say it here first. This space holds it safely…"
          oninput="saveAnswer('S-47', this.value)"
        >${state.answers['S-47'] || ''}</textarea>
        <div class="benne-bar" style="margin-top:1rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">A truth spoken — even only to yourself — is less heavy than a truth swallowed. You just did something that took courage. That is not nothing.</div>
          </div>
        </div>
        <div class="clinical-note">
          Private written disclosure<a class="cite" title="Pennebaker, Opening Up, 1990">⁵</a> — even without sharing with anyone — produces measurable health benefits. This practice prepares the ground for eventual safe disclosure with trusted others in Weeks 5 and 6.
        </div>
      </div>
    `
  },

  // --- SESSION 14: Always and never (S-48 to S-51) ---

  {
    id: 'S-48',
    session: 'Session 14',
    sessionTitle: 'Always and never',
    week: 'Week 3',
    weekTitle: 'Resisting Erasure Through Truth',
    badge: 'story',
    badgeLabel: 'Story',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 3 — Resisting Erasure Through Truth</div>
          <div class="week-session">Session 14 of 15 &nbsp;·&nbsp; Screen 48 of 57</div>
        </div>
        <span class="screen-badge badge-story">Story</span>
        <h1 class="screen-title">The sentences that close the door.</h1>
        <div class="story-block">
          <div class="story-character">Ray — a true-to-life composite</div>
          <p class="story-text">
            Ray, 44, catches himself mid-thought: "I always end up alone. I will never really belong anywhere. This is just how it is for me." He has thought these sentences so many times they no longer feel like thoughts — they feel like facts. Like the weather. Like gravity.
          </p>
          <p class="story-text" style="margin-top:1rem">
            He does not question them. He simply accepts them as the permanent geography of his life — not knowing that the words "always" and "never" are doing more damage than the loneliness itself.
          </p>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">The words always and never are not descriptions of reality. They are conclusions. And once a conclusion is reached, the mind stops looking for evidence that might challenge it. Every moment of loneliness becomes proof. The door closes. And it closes from the inside.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-49',
    session: 'Session 14',
    sessionTitle: 'Always and never',
    week: 'Week 3',
    weekTitle: 'Resisting Erasure Through Truth',
    badge: 'insight',
    badgeLabel: 'Insight',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 3 — Resisting Erasure Through Truth</div>
          <div class="week-session">Session 14 of 15 &nbsp;·&nbsp; Screen 49 of 57</div>
        </div>
        <span class="screen-badge badge-insight">Insight</span>
        <h1 class="screen-title">What absolute language does.</h1>
        <div class="insight-block">
          <p class="screen-body-text" style="margin-bottom:1rem">
            Martin Seligman's<a class="cite" title="Seligman, Learned Optimism, 1991">⁶</a> research on explanatory style identified three hallmarks of the thought patterns most associated with depression and chronic loneliness: <strong style="color:var(--text-primary)">permanent</strong> ("it will always be this way"), <strong style="color:var(--text-primary)">pervasive</strong> ("it affects everything"), and <strong style="color:var(--text-primary)">personal</strong> ("it is because of who I am").
          </p>
          <p class="screen-body-text" style="margin-bottom:0">
            When a person says "I always end up alone," they are not describing their history accurately. They are applying a permanent, pervasive, personal filter to a pattern that is neither inevitable nor unchangeable. The language of permanence seals the conclusion shut.
          </p>
          <div class="insight-source">
            <sup>6</sup> Martin Seligman, <em>Learned Optimism</em> (1991)
          </div>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">One small word changes everything. Not "I always end up alone" — but "I have, so far, ended up alone." That tiny addition re-opens the door to possibility without dismissing the pain.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-50',
    session: 'Session 14',
    sessionTitle: 'Always and never',
    week: 'Week 3',
    weekTitle: 'Resisting Erasure Through Truth',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 3 — Resisting Erasure Through Truth</div>
          <div class="week-session">Session 14 of 15 &nbsp;·&nbsp; Screen 50 of 57</div>
        </div>
        <span class="screen-badge badge-practice">Practice</span>
        <h1 class="screen-title">My always and never sentences.</h1>
        <p class="screen-body-text">Select any that feel familiar — then Benne will show you how to soften them without dismissing what is true in them.</p>
        <div class="choice-list" style="margin-bottom:1.25rem">
          ${[
            { id: 'a', text: 'I always end up on the outside.' },
            { id: 'b', text: 'People never really stay.' },
            { id: 'c', text: 'I never know how to make it last.' },
            { id: 'd', text: 'Things always fall apart when I try.' },
            { id: 'e', text: 'I will never really belong anywhere.' },
            { id: 'f', text: 'Nobody ever chooses me first.' }
          ].map(opt => `
            <button class="choice-item ${(state.answers['S-50-select'] || []).includes(opt.id) ? 'selected' : ''}"
              onclick="toggleMultiChoice('S-50-select', '${opt.id}', this)">
              <div class="choice-radio" style="border-radius:3px"></div>
              <span class="choice-text">${opt.text}</span>
            </button>
          `).join('')}
        </div>
        <div class="practice-prompt">Now rewrite your most familiar one with "so far" added:</div>
        <input type="text" class="practice-input" id="input-S-50"
          placeholder='e.g. "I have, so far, always ended up on the outside."'
          value="${state.answers['S-50'] || ''}"
          oninput="saveAnswer('S-50', this.value)">
        <div class="benne-bar" style="margin-top:0.5rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">"So far" does not pretend the pain away. It simply refuses to let the past write the future in permanent ink.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-51',
    session: 'Session 14',
    sessionTitle: 'Always and never',
    week: 'Week 3',
    weekTitle: 'Resisting Erasure Through Truth',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 3 — Resisting Erasure Through Truth</div>
          <div class="week-session">Session 14 of 15 &nbsp;·&nbsp; Screen 51 of 57</div>
        </div>
        <span class="screen-badge badge-practice">Practice</span>
        <h1 class="screen-title">One exception to the rule.</h1>
        <p class="screen-body-text">
          Search your history — however far back, however briefly — for one moment of genuine connection. Not a grand relationship. Not a perfect friendship. Just one moment when you felt, even fleetingly, truly seen, known, or at ease with another person.
        </p>
        <div class="practice-prompt">One moment when I felt genuinely seen or at ease:</div>
        <textarea class="practice-textarea" style="min-height:100px" id="input-S-51"
          placeholder="It can be small. It can be from long ago. It just has to be real…"
          oninput="saveAnswer('S-51', this.value)"
        >${state.answers['S-51'] || ''}</textarea>
        <div class="benne-bar" style="margin-top:1rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">In Narrative Therapy this is called a unique outcome — a moment the dominant story cannot fully explain. One exception is enough to crack the story open. That moment you just wrote happened. Which means it can happen again.</div>
          </div>
        </div>
        <div class="clinical-note">
          This entry is a seed. It will reappear in Week 5 — the Tree of Life exercise — as the first branch of your counter-story. Keep it carefully.
        </div>
      </div>
    `
  },

  // --- SESSION 15: The scripture anchor (S-52 to S-57) ---

  {
    id: 'S-52',
    session: 'Session 15',
    sessionTitle: 'The scripture anchor',
    week: 'Week 3',
    weekTitle: 'Resisting Erasure Through Truth',
    badge: 'story',
    badgeLabel: 'Story',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 3 — Resisting Erasure Through Truth</div>
          <div class="week-session">Session 15 of 15 &nbsp;·&nbsp; Screen 52 of 57</div>
        </div>
        <span class="screen-badge badge-story">Story</span>
        <h1 class="screen-title">Living inside a lie.</h1>
        <div class="story-block">
          <div class="story-character">Mara — a true-to-life composite</div>
          <p class="story-text">
            Mara, 26, realizes midway through a conversation with a new acquaintance that she has been performing — editing, managing, presenting — without being aware of it. She is so practiced at it that it has become automatic.
          </p>
          <p class="story-text" style="margin-top:1rem">
            She goes home and asks herself: when was the last time she said something true in a social setting? Something unedited, unmanaged, genuinely her? She cannot remember. She has been so afraid of rejection that she has pre-rejected herself — offered a curated version and withheld the real one. She has never been rejected. But she has also never truly been met.
          </p>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">There is a line I have been thinking about this week. It comes from a text that has been with humanity for thousands of years — not as a slogan, but as something honest about what truth actually does to a person who has been living inside a lie.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-53',
    session: 'Session 15',
    sessionTitle: 'The scripture anchor',
    week: 'Week 3',
    weekTitle: 'Resisting Erasure Through Truth',
    badge: 'bridge',
    badgeLabel: 'Bridge',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 3 — Resisting Erasure Through Truth</div>
          <div class="week-session">Session 15 of 15 &nbsp;·&nbsp; Screen 53 of 57</div>
        </div>
        <span class="screen-badge badge-bridge">Ancient Company</span>
        <h1 class="screen-title">What kind of freedom.</h1>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">The Book of Psalms is not merely ancient literature preserved by human appreciation. These sacred writings were inspired by God, Jehovah — recorded by faithful servants whose words were guided by a purpose far greater than their own, and whose lives became living testimonies of His loving kindness. The psalmists wrote from real moments of danger, fear, and deep distress — times when Jehovah protected them, helped them, and never abandoned them, even in life-and-death situations. Carefully copied by devoted scribes and sung in worship across generations, these writings have been preserved because Jehovah ensured that these testimonies would reach every person who would need them — including you, at this very moment.</div>
          </div>
        </div>
        <p class="screen-body-text">
          This week we have been looking at the dominant story — the lie about who you are that loneliness has been telling. There is a line from John's account of Jesus that speaks directly to what happens when a person steps out of a lie and into truth.
        </p>
        <p class="screen-body-text">
          Read the next screen slowly. Give it the space it deserves.
        </p>
      </div>
    `
  },

  {
    id: 'S-54',
    session: 'Session 15',
    sessionTitle: 'The scripture anchor',
    week: 'Week 3',
    weekTitle: 'Resisting Erasure Through Truth',
    badge: 'anchor',
    badgeLabel: 'Scripture',
    render: () => `
      <div class="screen-single">
        <div class="screen-img-panel">
          <img src="assets/images/s54-john832.webp" alt="A key in light" loading="lazy">
        </div>
        <div class="screen-content-panel">
          <div class="screen">
            <div class="scripture-screen">
              <div class="scripture-ref">John 8:32 &nbsp;·&nbsp; NLT</div>
              <p class="scripture-text">
                "And you will know the truth,<br>
                and the truth will set you free."
              </p>
              <div class="scripture-divider"></div>
              <div class="scripture-translation-note">New Living Translation</div>
            </div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-55',
    session: 'Session 15',
    sessionTitle: 'The scripture anchor',
    week: 'Week 3',
    weekTitle: 'Resisting Erasure Through Truth',
    badge: 'insight',
    badgeLabel: 'Insight',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 3 — Resisting Erasure Through Truth</div>
          <div class="week-session">Session 15 of 15 &nbsp;·&nbsp; Screen 55 of 57</div>
        </div>
        <span class="screen-badge badge-insight">What the Truth Costs — and What It Gives</span>
        <h1 class="screen-title">Free. Not comfortable. Free.</h1>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">That word free is interesting. It does not say comfortable. It does not say painless. It says free. Which suggests that living inside the lie — the lie that you are broken, that connection is impossible for you, that always and never are facts — has been a kind of captivity. And that the truth, however uncomfortable, is the only door out of it.</div>
          </div>
        </div>
        <p class="screen-body-text">
          The truth this week is not a comfortable one. You have seen the dominant story clearly. You have named what was hidden. You have examined the absolute language. You have found one exception. None of that felt good. But all of it is the truth. And the truth — even when it is hard — is what sets you free to write a different story.
        </p>
        <div class="insight-block">
          <p class="screen-body-text" style="margin-bottom:0">
            Freedom here is not the absence of pain. It is the capacity to act from your values rather than from the story loneliness has been telling. That capacity is what we are building — one honest session at a time.
          </p>
        </div>
      </div>
    `
  },

  {
    id: 'S-56',
    session: 'Session 15',
    sessionTitle: 'The scripture anchor',
    week: 'Week 3',
    weekTitle: 'Resisting Erasure Through Truth',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 3 — Resisting Erasure Through Truth</div>
          <div class="week-session">Session 15 of 15 &nbsp;·&nbsp; Screen 56 of 57</div>
        </div>
        <span class="screen-badge badge-practice">Practice</span>
        <h1 class="screen-title">The lie I am ready to name.</h1>
        <p class="screen-body-text">
          Name one specific lie about yourself and connection that you are now willing to call a lie rather than a fact. Not to replace it yet. Just to reclassify it.
        </p>
        <div class="practice-prompt">The lie I have been living as a fact is…</div>
        <textarea class="practice-textarea" style="min-height:80px" id="input-S-56a"
          placeholder='e.g. "I am someone who cannot connect deeply with others."'
          oninput="saveAnswerKey('S-56', 'lie', this.value)"
        >${(state.answers['S-56'] || {}).lie || ''}</textarea>
        <div class="practice-prompt" style="margin-top:1rem">Reclassified as a story, not a fact:</div>
        <textarea class="practice-textarea" style="min-height:80px" id="input-S-56b"
          placeholder='e.g. "I have a story that says I cannot connect — and stories can be rewritten."'
          oninput="saveAnswerKey('S-56', 'story', this.value)"
        >${(state.answers['S-56'] || {}).story || ''}</textarea>
        <div class="benne-bar" style="margin-top:1rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">This entry will return to you at the final screen of this program — alongside what you know by then to be also true. Keep it. It is one of the most important seeds in Beyond Alone.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-57',
    session: 'Session 15',
    sessionTitle: 'The scripture anchor',
    week: 'Week 3',
    weekTitle: 'Resisting Erasure Through Truth',
    badge: 'close',
    badgeLabel: 'Week 3 Complete',
    render: () => `
      <div class="screen">
        <div class="week-complete">
          <div class="week-complete-icon">✦</div>
          <h1 class="week-complete-title">You made it through Week 3.</h1>
          <p class="week-complete-text">
            Week 3 asked you to look at the story you have been living inside — and to start questioning whether it is the whole truth. You named the dominant story. You found where the bracing came from. You said one true thing that had never been said. You challenged your absolute language. And you found one exception. That is the crack in the wall. Week 4 is where we go through it.
          </p>
          <div class="benne-bar" style="text-align:left; margin-bottom:2rem">
            <div class="benne-avatar"></div>
            <div class="benne-content">
              <div class="benne-name">Benne Hart</div>
              <div class="benne-text">Rest here. The lie you named in Screen 56 and the exception you found in Screen 51 are seeds. They will bloom in Week 5 in ways you cannot yet see. Save your progress and know that the wall has a crack. Week 4 goes through it.</div>
            </div>
          </div>
          <button class="save-btn" onclick="saveProgress()">
            ✓ &nbsp; Save Progress
          </button>
        </div>
      </div>
    `
  }

,

  // ============================================================
  // WEEK 4 — THE IRON MIND (Screens 58–76)
  // ============================================================

  // --- SESSION 16: Feelings as visitors (S-58 to S-60) ---

  {
    id: 'S-58',
    session: 'Session 16',
    sessionTitle: 'Feelings as visitors',
    week: 'Week 4',
    weekTitle: 'The Iron Mind',
    badge: 'story',
    badgeLabel: 'Story',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 4 — The Iron Mind</div>
          <div class="week-session">Session 16 of 20 &nbsp;·&nbsp; Screen 58 of 76</div>
        </div>
        <span class="screen-badge badge-story">Story</span>
        <h1 class="screen-title">The feeling that moved in.</h1>
        <div class="story-block">
          <div class="story-character">Kai — a true-to-life composite</div>
          <p class="story-text">
            Kai, 25, has been trying to make the loneliness go away for three years. Therapy. Exercise. Productivity. Social media detox. Moving cities. New jobs. The loneliness follows. Not because the strategies are wrong — but because he has been treating the feeling as an intruder to be expelled rather than a signal to be understood.
          </p>
          <p class="story-text" style="margin-top:1rem">
            He is exhausted from fighting something that cannot be fought out of existence. He is beginning to wonder if this is simply who he is now. He has not yet discovered that there is a third option between fighting it and surrendering to it.
          </p>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Most of us have tried two things with painful feelings: fight them or surrender to them. There is a third option. Not fighting the feeling. Not being consumed by it. Making room for it — without letting it make all the decisions. The feeling can be present. It does not have to be in charge.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-59',
    session: 'Session 16',
    sessionTitle: 'Feelings as visitors',
    week: 'Week 4',
    weekTitle: 'The Iron Mind',
    badge: 'insight',
    badgeLabel: 'Insight',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 4 — The Iron Mind</div>
          <div class="week-session">Session 16 of 20 &nbsp;·&nbsp; Screen 59 of 76</div>
        </div>
        <span class="screen-badge badge-insight">Insight</span>
        <h1 class="screen-title">The third option.</h1>
        <div class="insight-block">
          <p class="screen-body-text" style="margin-bottom:1rem">
            Acceptance and Commitment Therapy — ACT<a class="cite" title="Hayes, Get Out of Your Mind and Into Your Life, 2005">¹</a> — developed by psychologist Steven Hayes, does not aim to reduce or eliminate painful thoughts and feelings. It aims to change the person's relationship with them. The goal is not feeling better. The goal is living better while feeling what you feel.
          </p>
          <p class="screen-body-text" style="margin-bottom:0">
            ACT is built on over 300 randomized controlled trials<a class="cite" title="Hayes ACT research base, 2005">¹</a> and is now one of the most rigorously researched therapeutic approaches in existence. Its foundational insight: psychological flexibility — the ability to act from your values even while difficult feelings are present — is more predictive of wellbeing than the absence of painful emotions.
          </p>
          <div class="insight-source">
            <sup>1</sup> Steven Hayes, <em>Get Out of Your Mind and Into Your Life</em> (2005). 300+ randomized controlled trials on ACT efficacy.
          </div>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">This week we are not trying to make the loneliness disappear. We are learning to carry it differently — so it stops making all the decisions for you.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-60',
    session: 'Session 16',
    sessionTitle: 'Feelings as visitors',
    week: 'Week 4',
    weekTitle: 'The Iron Mind',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 4 — The Iron Mind</div>
          <div class="week-session">Session 16 of 20 &nbsp;·&nbsp; Screen 60 of 76</div>
        </div>
        <span class="screen-badge badge-practice">Practice</span>
        <h1 class="screen-title">I notice I am feeling.</h1>
        <p class="screen-body-text">
          The single most important language shift in ACT. Moving from <em>"I am lonely"</em> — which fuses you with the feeling — to <em>"I notice I am feeling lonely"</em> — which creates a millimeter of space between the observer and the observed. That millimeter is where freedom begins.
        </p>
        <div class="practice-prompt">Rewrite these three statements using "I notice I am feeling…"</div>
        ${[
          { key: 'a', original: '"I am invisible to people."' },
          { key: 'b', original: '"I am someone who never connects."' },
          { key: 'c', original: '"I am alone and always will be."' }
        ].map(item => `
          <div style="margin-bottom:1rem">
            <div style="font-size:12px;color:var(--text-muted);margin-bottom:6px;font-style:italic">${item.original}</div>
            <input type="text" class="practice-input" style="margin-bottom:0"
              placeholder='I notice I am feeling…'
              value="${((state.answers['S-60'] || {})[item.key]) || ''}"
              oninput="saveAnswerKey('S-60', '${item.key}', this.value)">
          </div>
        `).join('')}
        <div class="benne-bar" style="margin-top:0.5rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Notice the difference in how each version feels. The second version does not pretend the feeling is not real. It simply refuses to let the feeling be your entire identity.</div>
          </div>
        </div>
      </div>
    `
  },

  // --- SESSION 17: The passenger on the bus (S-61 to S-63) ---

  {
    id: 'S-61',
    session: 'Session 17',
    sessionTitle: 'The passenger on the bus',
    week: 'Week 4',
    weekTitle: 'The Iron Mind',
    badge: 'story',
    badgeLabel: 'Story',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 4 — The Iron Mind</div>
          <div class="week-session">Session 17 of 20 &nbsp;·&nbsp; Screen 61 of 76</div>
        </div>
        <span class="screen-badge badge-story">Story</span>
        <h1 class="screen-title">The loudest voice on the bus.</h1>
        <div class="story-block">
          <div class="story-character">Amara — a true-to-life composite</div>
          <p class="story-text">
            Amara, 40, is driving to a gathering she almost did not attend. The whole way there a voice runs commentary — "they won't really want you there," "you'll end up on the outside again," "this is going to be like last time." The voice is loud and confident. It sounds like truth.
          </p>
          <p class="story-text" style="margin-top:1rem">
            She almost turned around twice. She keeps driving. Not because the voice went quiet. Because she decided — just for tonight — not to let it steer.
          </p>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">A thought appears. It says something convincing — usually something it has said a thousand times before. Defusion does not ask you to argue with it or make it go away. It asks you to notice it. To say: yes, I see you there. And then to keep driving toward what matters to you anyway. The thought can speak. It does not have to steer.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-62',
    session: 'Session 17',
    sessionTitle: 'The passenger on the bus',
    week: 'Week 4',
    weekTitle: 'The Iron Mind',
    badge: 'insight',
    badgeLabel: 'Insight',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 4 — The Iron Mind</div>
          <div class="week-session">Session 17 of 20 &nbsp;·&nbsp; Screen 62 of 76</div>
        </div>
        <span class="screen-badge badge-insight">Insight</span>
        <h1 class="screen-title">You are the driver.</h1>
        <div class="insight-block">
          <p class="screen-body-text" style="margin-bottom:1rem">
            Cognitive defusion — one of ACT's core processes — does not ask you to win the argument with the loneliness thought. Research from Russ Harris,<a class="cite" title="Harris, The Happiness Trap, 2007">²</a> one of ACT's leading practitioners, shows that defusion techniques reduce the believability and impact of negative thoughts without requiring their elimination.
          </p>
          <p class="screen-body-text" style="margin-bottom:0">
            The lonely thought — "nobody really wants me here" — does not have to be defeated. It needs to be noticed and then set aside while you act from your values anyway. The passenger can stay on the bus. You keep driving.
          </p>
          <div class="insight-source">
            <sup>2</sup> Russ Harris, <em>The Happiness Trap</em> (2007). 40+ randomized controlled trials on defusion specifically.
          </div>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">That passenger has probably been with you a long time. It will likely stay on the bus for a while longer. But you are the driver. That has always been true — you just did not know it yet.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-63',
    session: 'Session 17',
    sessionTitle: 'The passenger on the bus',
    week: 'Week 4',
    weekTitle: 'The Iron Mind',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 4 — The Iron Mind</div>
          <div class="week-session">Session 17 of 20 &nbsp;·&nbsp; Screen 63 of 76</div>
        </div>
        <span class="screen-badge badge-practice">Practice</span>
        <h1 class="screen-title">My loudest passenger.</h1>
        <p class="screen-body-text">Identify the thought that most reliably tries to take the wheel — then practice the defusion reframe.</p>
        <div class="practice-prompt">My loudest loneliness passenger says:</div>
        <textarea class="practice-textarea" style="min-height:80px" id="input-S-63a"
          placeholder="Write it in full — exactly as it sounds in your head…"
          oninput="saveAnswerKey('S-63', 'thought', this.value)"
        >${(state.answers['S-63'] || {}).thought || ''}</textarea>
        <div class="practice-prompt" style="margin-top:1rem">Defusion reframe — "I notice I am having the thought that…"</div>
        <textarea class="practice-textarea" style="min-height:80px" id="input-S-63b"
          placeholder="I notice I am having the thought that…"
          oninput="saveAnswerKey('S-63', 'defuse', this.value)"
        >${(state.answers['S-63'] || {}).defuse || ''}</textarea>
        <div class="practice-prompt" style="margin-top:1rem">Give the passenger a name (optional — to create distance):</div>
        <input type="text" class="practice-input" id="input-S-63c"
          placeholder="e.g. The Critic, The Forecaster, The Verdict…"
          value="${(state.answers['S-63'] || {}).name || ''}"
          oninput="saveAnswerKey('S-63', 'name', this.value)">
        <div class="clinical-note">
          This passenger name and defusion practice are saved. They will appear in your BEYOND method at Week 8 — personalised to your specific voice.
        </div>
      </div>
    `
  },

  // --- SESSION 18: Making room (S-64 to S-66) ---

  {
    id: 'S-64',
    session: 'Session 18',
    sessionTitle: 'Making room',
    week: 'Week 4',
    weekTitle: 'The Iron Mind',
    badge: 'story',
    badgeLabel: 'Story',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 4 — The Iron Mind</div>
          <div class="week-session">Session 18 of 20 &nbsp;·&nbsp; Screen 64 of 76</div>
        </div>
        <span class="screen-badge badge-story">Story</span>
        <h1 class="screen-title">The tightening that will not stop.</h1>
        <div class="story-block">
          <div class="story-character">Petra — a true-to-life composite</div>
          <p class="story-text">
            Petra, 52, has noticed that when loneliness hits hardest she holds her breath. Tightens her shoulders. Clenches her jaw. Her whole body becomes a fist around the feeling — trying to contain it, compress it, keep it from expanding.
          </p>
          <p class="story-text" style="margin-top:1rem">
            The harder she holds, the heavier it becomes. She has never connected the physical bracing to the emotional pain. She has never tried the alternative — not gripping tighter, but deliberately making more room. She does not know yet that the grip is not containing the pain. It is intensifying it.
          </p>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Acceptance in ACT does not mean approval. It does not mean giving up. It means dropping the rope in the tug-of-war with the feeling — because the fighting is costing more than it is worth.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-65',
    session: 'Session 18',
    sessionTitle: 'Making room',
    week: 'Week 4',
    weekTitle: 'The Iron Mind',
    badge: 'insight',
    badgeLabel: 'Insight',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 4 — The Iron Mind</div>
          <div class="week-session">Session 18 of 20 &nbsp;·&nbsp; Screen 65 of 76</div>
        </div>
        <span class="screen-badge badge-insight">Insight</span>
        <h1 class="screen-title">Acceptance is not surrender.</h1>
        <div class="insight-block">
          <p class="screen-body-text" style="margin-bottom:1rem">
            Kristin Neff's<a class="cite" title="Neff, Self-Compassion, 2011">³</a> self-compassion research shows that meeting painful feelings with kindness rather than resistance actually reduces their duration and intensity. The participant is not being asked to enjoy the pain. They are being asked to stop adding the suffering of resistance to the pain itself.
          </p>
          <p class="screen-body-text" style="margin-bottom:0">
            ACT makes a precise clinical distinction: pain is inevitable — it is the signal. Suffering is optional — it is what happens when we fight the signal. The expansion practice below does not eliminate pain. It stops the amplification.
          </p>
          <div class="insight-source">
            <sup>3</sup> Kristin Neff, <em>Self-Compassion: The Proven Power of Being Kind to Yourself</em> (2011)
          </div>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">When you stop fighting a feeling and simply let it be present — breathe around it, give it space — something unexpected often happens. It does not necessarily grow. Sometimes it simply moves through.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-66',
    session: 'Session 18',
    sessionTitle: 'Making room',
    week: 'Week 4',
    weekTitle: 'The Iron Mind',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 4 — The Iron Mind</div>
          <div class="week-session">Session 18 of 20 &nbsp;·&nbsp; Screen 66 of 76</div>
        </div>
        <span class="screen-badge badge-practice">Practice</span>
        <h1 class="screen-title">Breathing around the feeling.</h1>
        <p class="screen-body-text">
          A guided expansion practice. This is not a relaxation exercise. It is a relationship practice — learning to be with the feeling rather than fighting it or fleeing it.
        </p>
        <div class="insight-block" style="margin-bottom:1.5rem">
          <p class="screen-body-text" style="margin-bottom:0.75rem"><strong style="color:var(--teal)">Step 1</strong> — Locate the feeling in your body right now. Where is it sitting? Chest, shoulders, stomach, throat.</p>
          <p class="screen-body-text" style="margin-bottom:0.75rem"><strong style="color:var(--teal)">Step 2</strong> — Breathe into the space around it — not into it, around it. Imagine your breath creating a little more room for the feeling to exist without filling everything.</p>
          <p class="screen-body-text" style="margin-bottom:0.75rem"><strong style="color:var(--teal)">Step 3</strong> — Notice its edges. It has edges — which means it is finite, not infinite. It can be present without filling the whole room.</p>
          <p class="screen-body-text" style="margin-bottom:0"><strong style="color:var(--teal)">Step 4</strong> — Say quietly: "There is room for this feeling here. It does not have to leave for me to be okay."</p>
        </div>
        <div class="practice-prompt">After the practice, note what you noticed:</div>
        <textarea class="practice-textarea" style="min-height:80px" id="input-S-66"
          placeholder="What shifted, if anything? What did the feeling do when you stopped fighting it?"
          oninput="saveAnswer('S-66', this.value)"
        >${state.answers['S-66'] || ''}</textarea>
        <div class="clinical-note">
          This grounding practice is saved. It becomes part of your solivagant toolkit in Week 7 and your daily anchor rhythms in Week 8.
        </div>
      </div>
    `
  },

  // --- SESSION 19: Values when the feeling is heavy (S-67 to S-71) ---

  {
    id: 'S-67',
    session: 'Session 19',
    sessionTitle: 'Values when the feeling is heavy',
    week: 'Week 4',
    weekTitle: 'The Iron Mind',
    badge: 'climax',
    badgeLabel: 'The Question',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 4 — The Iron Mind</div>
          <div class="week-session">Session 19 of 20 &nbsp;·&nbsp; Screen 67 of 76</div>
        </div>
        <span class="screen-badge" style="background:var(--coral-dim);color:var(--coral);border:1px solid rgba(212,130,106,0.3)">The Hardest Question</span>
        <h1 class="screen-title">The question at the bottom.</h1>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">You have done four weeks of serious work. You have named the pain, examined the lies, cracked the paradigm, and practiced new ways of being with the feeling. And the feeling may still be here. That is not a failure of the program. That is not a failure of you. It is the honest reality of what loneliness is — a deep human wound that does not heal on a schedule.</div>
          </div>
        </div>
        <div class="insight-block" style="border-color:rgba(212,130,106,0.3);background:var(--coral-dim)">
          <p class="screen-body-text" style="margin-bottom:0;color:var(--text-primary);font-size:15px;line-height:1.8">
            The question this week is not: <em>how do I make it go away?</em>
            <br><br>
            The question is: <strong>who do I want to be while it is still here?</strong>
          </p>
        </div>
        <p class="screen-body-text">
          That question is the hinge of the entire program. Everything before it named the wound. Everything after it builds the person who can carry it differently.
        </p>
      </div>
    `
  },

  {
    id: 'S-68',
    session: 'Session 19',
    sessionTitle: 'Values when the feeling is heavy',
    week: 'Week 4',
    weekTitle: 'The Iron Mind',
    badge: 'insight',
    badgeLabel: 'Insight',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 4 — The Iron Mind</div>
          <div class="week-session">Session 19 of 20 &nbsp;·&nbsp; Screen 68 of 76</div>
        </div>
        <span class="screen-badge badge-insight">Insight</span>
        <h1 class="screen-title">What Viktor Frankl understood.</h1>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Viktor Frankl survived conditions of suffering most of us will never come close to. He observed that the people who endured were not the ones who had no pain — they were the ones who could find something worth living toward even inside the pain. He called it meaning. ACT calls it values. The name matters less than the reality: when you know what you care about, you have a direction. And a direction is everything when the feeling is heavy.</div>
          </div>
        </div>
        <div class="insight-block">
          <p class="screen-body-text" style="margin-bottom:0">
            Frankl's logotherapy<a class="cite" title="Frankl, Man's Search for Meaning, 1946">⁴</a> — the foundation of meaning-centered psychotherapy and a direct precursor to ACT — established that the last of human freedoms is the ability to choose one's attitude in any given set of circumstances. You do not have to feel ready. You do not have to feel better. You just have to know what you value — and move toward it anyway.
          </p>
          <div class="insight-source">
            <sup>4</sup> Viktor Frankl, <em>Man's Search for Meaning</em> (1946/1959)
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-69',
    session: 'Session 19',
    sessionTitle: 'Values when the feeling is heavy',
    week: 'Week 4',
    weekTitle: 'The Iron Mind',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 4 — The Iron Mind</div>
          <div class="week-session">Session 19 of 20 &nbsp;·&nbsp; Screen 69 of 76</div>
        </div>
        <span class="screen-badge badge-practice">Practice</span>
        <h1 class="screen-title">What I care about — even now.</h1>
        <p class="screen-body-text">
          Choose three to five values that feel genuinely yours — not the ones you think you should choose, but the ones that, even in your loneliest moments, you still recognize as mattering to you. These values cannot be taken by the feeling.
        </p>
        <div class="choice-list">
          ${['Kindness','Faithfulness','Honesty','Courage','Presence',
             'Creativity','Service','Patience','Curiosity','Warmth',
             'Integrity','Humour','Gentleness','Resilience','Wisdom',
             'Hospitality','Loyalty','Generosity'].map(v => `
            <button class="choice-item ${(state.answers['S-69'] || []).includes(v) ? 'selected' : ''}"
              onclick="toggleMultiChoice('S-69', '${v}', this)">
              <div class="choice-radio" style="border-radius:3px"></div>
              <span class="choice-text">${v}</span>
            </button>
          `).join('')}
        </div>
        <div class="benne-bar" style="margin-top:1.5rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">These are yours whether the feeling is here or not. The feeling cannot take them. That is the whole point. They will form the trunk of your tree in Week 5 and the compass of your life in Week 8.</div>
          </div>
        </div>
        <div class="clinical-note">
          Your chosen values are saved and will appear in three future screens: the Tree of Life (Week 5), your connection rhythm plan (Week 6), and your final BEYOND method (Week 8).
        </div>
      </div>
    `
  },

  {
    id: 'S-70',
    session: 'Session 19',
    sessionTitle: 'Values when the feeling is heavy',
    week: 'Week 4',
    weekTitle: 'The Iron Mind',
    badge: 'insight',
    badgeLabel: 'Insight',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 4 — The Iron Mind</div>
          <div class="week-session">Session 19 of 20 &nbsp;·&nbsp; Screen 70 of 76</div>
        </div>
        <span class="screen-badge badge-insight">The Self-Compassion Turn</span>
        <h1 class="screen-title">What you would say to someone you love.</h1>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">If a person you loved came to you and said everything you have written in this program — every painful thought, every shame sentence, every lonely night — what would you say to them? Would you tell them they were broken? Would you confirm their worst fears? Or would you say something different? Whatever you would say to them — you are allowed to say to yourself. That is not weakness. That is self-compassion.</div>
          </div>
        </div>
        <div class="insight-block">
          <p class="screen-body-text" style="margin-bottom:0">
            Kristin Neff's self-compassion research<a class="cite" title="Neff, Self-Compassion, 2011">³</a> at the University of Texas — the most rigorously studied self-compassion framework in psychology — shows three components: self-kindness, common humanity, and mindfulness. Each maps precisely to work you have already done in this program. You are not being asked to do something new. You are being asked to turn the care you would give to another toward yourself.
          </p>
          <div class="insight-source">
            <sup>3</sup> Kristin Neff, <em>Self-Compassion</em> (2011). Multiple RCTs showing self-compassion reduces shame and chronic loneliness.
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-71',
    session: 'Session 19',
    sessionTitle: 'Values when the feeling is heavy',
    week: 'Week 4',
    weekTitle: 'The Iron Mind',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 4 — The Iron Mind</div>
          <div class="week-session">Session 19 of 20 &nbsp;·&nbsp; Screen 71 of 76</div>
        </div>
        <span class="screen-badge badge-practice">Practice</span>
        <h1 class="screen-title">What I would say to someone I love.</h1>
        <div class="practice-prompt">If someone I loved was carrying exactly what I have described in this program, I would say to them:</div>
        <textarea class="practice-textarea" id="input-S-71a"
          placeholder="Write what you would genuinely say — not what you think you should say…"
          oninput="saveAnswerKey('S-71', 'to_other', this.value)"
        >${(state.answers['S-71'] || {}).to_other || ''}</textarea>
        <div class="practice-prompt" style="margin-top:1rem">What it would mean to say some of that to myself:</div>
        <textarea class="practice-textarea" id="input-S-71b"
          placeholder="Not all of it. Just some. Even one sentence…"
          oninput="saveAnswerKey('S-71', 'to_self', this.value)"
        >${(state.answers['S-71'] || {}).to_self || ''}</textarea>
        <div class="benne-bar" style="margin-top:1rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">You have been carrying this with more courage than you know. That deserves to be acknowledged — by someone who has been with you through all of it. Let that someone be you, for now.</div>
          </div>
        </div>
      </div>
    `
  },

  // --- SESSION 20: The scripture anchor (S-72 to S-76) ---

  {
    id: 'S-72',
    session: 'Session 20',
    sessionTitle: 'The scripture anchor',
    week: 'Week 4',
    weekTitle: 'The Iron Mind',
    badge: 'story',
    badgeLabel: 'Story',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 4 — The Iron Mind</div>
          <div class="week-session">Session 20 of 20 &nbsp;·&nbsp; Screen 72 of 76</div>
        </div>
        <span class="screen-badge badge-story">Story</span>
        <h1 class="screen-title">Still here — still standing.</h1>
        <div class="story-block">
          <div class="story-character">Nadia — returning from Week 2</div>
          <p class="story-text">
            Nadia — from Week 2, who woke every morning already exhausted by the invisible inventory — is back. Four weeks have passed. The inventory still runs sometimes. But something has shifted. Not the feeling. Her relationship with it.
          </p>
          <p class="story-text" style="margin-top:1rem">
            She no longer tries to outrun it before breakfast. She notices it, names it, breathes around it, and gets up anyway. She is not healed. She is not fixed. But she is not collapsing under it anymore either. She is still here. She is still standing. That — she is beginning to understand — is not nothing. That is everything.
          </p>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">There is something I have been thinking about this week. It comes from one of the oldest texts in human history — and it says something about suffering that I think you are now ready to hear. Not as comfort that skips the pain. As a description of what the pain itself can build in you, if you let it.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-73',
    session: 'Session 20',
    sessionTitle: 'The scripture anchor',
    week: 'Week 4',
    weekTitle: 'The Iron Mind',
    badge: 'bridge',
    badgeLabel: 'Bridge',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 4 — The Iron Mind</div>
          <div class="week-session">Session 20 of 20 &nbsp;·&nbsp; Screen 73 of 76</div>
        </div>
        <span class="screen-badge badge-bridge">Ancient Company</span>
        <h1 class="screen-title">What the valley teaches.</h1>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">The Book of Psalms is not merely ancient literature preserved by human appreciation. These sacred writings were inspired by God, Jehovah — recorded by faithful servants whose words were guided by a purpose far greater than their own, and whose lives became living testimonies of His loving kindness. The psalmists wrote from real moments of danger, fear, and deep distress — times when Jehovah protected them, helped them, and never abandoned them, even in life-and-death situations. Carefully copied by devoted scribes and sung in worship across generations, these writings have been preserved because Jehovah ensured that these testimonies would reach every person who would need them — including you, at this very moment.</div>
          </div>
        </div>
        <p class="screen-body-text">
          The passage we are about to read was written by someone who understood — deeply and personally — that difficult seasons produce something in us that easier seasons never could. Not because suffering is good. But because something in us responds to difficulty in ways that can surprise us, if we let it. Read the next screen slowly.
        </p>
      </div>
    `
  },

  {
    id: 'S-74',
    session: 'Session 20',
    sessionTitle: 'The scripture anchor',
    week: 'Week 4',
    weekTitle: 'The Iron Mind',
    badge: 'anchor',
    badgeLabel: 'Scripture',
    render: () => `
      <div class="screen">
        <div class="scripture-screen">
          <div class="scripture-ref">Romans 5:3-4 &nbsp;·&nbsp; NLT</div>
          <p class="scripture-text">
            "We can rejoice, too, when we run into problems and trials,<br>
            for we know that they help us develop endurance.<br>
            And endurance develops strength of character,<br>
            and character strengthens our confident hope of salvation."
          </p>
          <div class="scripture-divider"></div>
          <div class="scripture-translation-note">New Living Translation</div>
        </div>
      </div>
    `
  },

  {
    id: 'S-75',
    session: 'Session 20',
    sessionTitle: 'The scripture anchor',
    week: 'Week 4',
    weekTitle: 'The Iron Mind',
    badge: 'insight',
    badgeLabel: 'Insight',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 4 — The Iron Mind</div>
          <div class="week-session">Session 20 of 20 &nbsp;·&nbsp; Screen 75 of 76</div>
        </div>
        <span class="screen-badge badge-insight">What Endurance Actually Is</span>
        <h1 class="screen-title">Not happiness. Endurance.</h1>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Endurance. That word keeps stopping me. Not happiness. Not the absence of pain. Not resolution. Endurance — the capacity to keep going, to remain yourself, to not be entirely consumed — in the middle of something hard. That is what four weeks of this program has been building. Not a cure. Endurance. And I think you have more of it now than you did when you arrived here. Even if it does not feel that way yet.</div>
          </div>
        </div>
        <p class="screen-body-text">
          The passage says trials develop endurance, and endurance develops character, and character develops hope. That sequence is not theological abstraction. It is a description of what you have been doing for four weeks. Sitting with the pain without fleeing it. Examining the lies without being destroyed by them. Practicing something new under duress.
        </p>
        <div class="insight-block">
          <p class="screen-body-text" style="margin-bottom:0">
            Post-traumatic growth research<a class="cite" title="Tedeschi & Calhoun, post-traumatic growth, 1996">⁵</a> by Richard Tedeschi and Lawrence Calhoun confirms what this passage names: people who have walked through significant difficulty — and stayed with it rather than avoiding it — frequently report developing capacities they did not have before. Strength of character is not inherited. It is built. You are building it right now.
          </p>
          <div class="insight-source">
            <sup>5</sup> Tedeschi, R.G. &amp; Calhoun, L.G. (1996). Post-traumatic growth research. <em>Journal of Traumatic Stress</em>.
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-76',
    session: 'Session 20',
    sessionTitle: 'The scripture anchor',
    week: 'Week 4',
    weekTitle: 'The Iron Mind',
    badge: 'close',
    badgeLabel: 'Week 4 Complete',
    render: () => `
      <div class="screen">
        <div class="week-complete">
          <div class="week-complete-icon">✦</div>
          <h1 class="week-complete-title">You made it through Week 4.</h1>
          <p class="week-complete-text">
            Week 4 was the hardest week. I want you to know that I know that. You sat at the bottom of something real and you did not run. You asked the hardest question — who do I want to be while this is still here — and you answered it with your values. That is not nothing. That is the turn. From here the program moves in a different direction. Not easier — but upward. You have earned Week 5.
          </p>
          <div class="benne-bar" style="text-align:left; margin-bottom:2rem">
            <div class="benne-avatar"></div>
            <div class="benne-content">
              <div class="benne-name">Benne Hart</div>
              <div class="benne-text">Your passenger name, your values, your self-compassion letter — all saved. Week 5 is where everything you have planted starts to grow. The Tree of Life is waiting. Rest here first. You earned it.</div>
            </div>
          </div>
          <button class="save-btn" onclick="saveProgress()">
            ✓ &nbsp; Save Progress
          </button>
        </div>
      </div>
    `
  }

,

,

  // ============================================================
  // WEEK 5 — THE TREE OF LIFE (Screens 77–95)
  // ============================================================

  // --- SESSION 21: The story has more in it (S-77 to S-80) ---

  {
    id: 'S-77',
    session: 'Session 21',
    sessionTitle: 'The story has more in it',
    week: 'Week 5',
    weekTitle: 'The Tree of Life',
    badge: 'story',
    badgeLabel: 'Story',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 5 — The Tree of Life</div>
          <div class="week-session">Session 21 of 25 &nbsp;·&nbsp; Screen 77 of 95</div>
        </div>
        <span class="screen-badge badge-story">Story</span>
        <h1 class="screen-title">The chapter loneliness forgot to include.</h1>
        <div class="story-block">
          <div class="story-character">Marcus — returning from Week 1</div>
          <p class="story-text">Marcus — from Week 1, the man at the full table who said nothing true all evening — sits with a counsellor who asks him to tell her about himself. He begins with his loneliness. She gently redirects: "Tell me about something you are good at. Tell me about a time you helped someone."</p>
          <p class="story-text" style="margin-top:1rem">He is surprised to discover that when he tells those stories he sounds like a completely different person — fuller, more alive — than the story loneliness has been telling about him. The dominant story is not the whole story. It never was.</p>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">This week we are going to build something together — the Tree of Life. Not to pretend the pain is not there. The roots of a real tree grow through difficult ground. But a tree is more than its difficult ground. And so are you.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-78',
    session: 'Session 21',
    sessionTitle: 'The story has more in it',
    week: 'Week 5',
    weekTitle: 'The Tree of Life',
    badge: 'insight',
    badgeLabel: 'Insight',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 5 — The Tree of Life</div>
          <div class="week-session">Session 21 of 25 &nbsp;·&nbsp; Screen 78 of 95</div>
        </div>
        <span class="screen-badge badge-insight">Insight</span>
        <h1 class="screen-title">The Tree of Life.</h1>
        <div class="insight-block">
          <p class="screen-body-text" style="margin-bottom:1rem">The Tree of Life exercise was developed by therapists Ncazelo Ncube and David Denborough<a class="cite" title="Ncube & Denborough, Dulwich Centre, 2006">&#185;</a> at the Dulwich Centre — now used in trauma recovery programs across more than 40 countries. It maps the person across six dimensions: roots, trunk, branches, leaves, fruits, and ground.</p>
          <p class="screen-body-text" style="margin-bottom:0">Each dimension recovers a part of the person that the dominant story of loneliness has pushed to the margins. The result is not a new fiction — it is a more complete truth. Everything you build this week comes from your own life. Nothing is invented.</p>
          <div class="insight-source">&#185; Ncazelo Ncube &amp; David Denborough, <em>Tree of Life</em> (Dulwich Centre, 2006). Used in 40+ countries in trauma recovery.</div>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">We will build the tree one section at a time. By the end you will see yourself whole — perhaps for the first time in a very long while.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-79',
    session: 'Session 21',
    sessionTitle: 'The story has more in it',
    week: 'Week 5',
    weekTitle: 'The Tree of Life',
    badge: 'insight',
    badgeLabel: 'Insight',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 5 — The Tree of Life</div>
          <div class="week-session">Session 21 of 25 &nbsp;·&nbsp; Screen 79 of 95</div>
        </div>
        <span class="screen-badge badge-insight">Insight</span>
        <h1 class="screen-title">What you bring to connection.</h1>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Robert Waldinger and his team at Harvard followed the same people across 85 years of life.<a class="cite" title="Waldinger & Schulz, The Good Life, 2023">&#178;</a> Their conclusion: the quality of relationships — not wealth or achievement — is the single greatest predictor of a long, healthy, meaningful life. But here is the part most people miss: relationships are built on what we bring to them. Your tree is what you bring.</div>
          </div>
        </div>
        <div class="insight-block">
          <p class="screen-body-text" style="margin-bottom:0">The loneliness story has been editing out everything you bring — every skill, every value, every quiet contribution, every person who has mattered to you. This week we recover what was edited out.</p>
          <div class="insight-source">&#178; Robert Waldinger &amp; Marc Schulz, <em>The Good Life</em> (2023). Harvard Study of Adult Development — 85-year longitudinal study.</div>
        </div>
      </div>
    `
  },

  {
    id: 'S-80',
    session: 'Session 21',
    sessionTitle: 'The story has more in it',
    week: 'Week 5',
    weekTitle: 'The Tree of Life',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 5 — The Tree of Life</div>
          <div class="week-session">Session 21 of 25 &nbsp;·&nbsp; Screen 80 of 95</div>
        </div>
        <span class="screen-badge badge-practice">Tree — Roots</span>
        <h1 class="screen-title">My roots.</h1>
        <div class="insight-block" style="margin-bottom:1.25rem">
          <p class="screen-body-text" style="margin-bottom:0"><strong style="color:var(--teal)">Roots</strong> — where you come from. Origins, formative places and people, values inherited or chosen, early experiences. Include difficult ground — a tree with deep roots grew through all of it.</p>
        </div>
        <div class="practice-prompt">My roots include…</div>
        <textarea class="practice-textarea" id="input-S-80"
          placeholder="Where you grew up. Who shaped you. What you were formed by — difficult and good alike…"
          oninput="saveAnswerKey('tree', 'roots', this.value)"
        >${(state.answers['tree'] || {}).roots || ''}</textarea>
        <div class="benne-bar" style="margin-top:1rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">There is no right length. Write what feels true — including the difficult parts. Roots include everything the tree grew through.</div>
          </div>
        </div>
      </div>
    `
  },

  // --- SESSION 22: Trunk and branches (S-81 to S-86) ---

  {
    id: 'S-81',
    session: 'Session 22',
    sessionTitle: 'Trunk and branches',
    week: 'Week 5',
    weekTitle: 'The Tree of Life',
    badge: 'story',
    badgeLabel: 'Story',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 5 — The Tree of Life</div>
          <div class="week-session">Session 22 of 25 &nbsp;·&nbsp; Screen 81 of 95</div>
        </div>
        <span class="screen-badge badge-story">Story</span>
        <h1 class="screen-title">The person loneliness undersells.</h1>
        <div class="story-block">
          <div class="story-character">Priya — returning from Week 1</div>
          <p class="story-text">Priya — from Week 1, who sat on the edge of her bed with the unexplained heaviness — is asked by a colleague to help with a difficult project. She stays late. Brings her full attention and genuine care. Her colleague is visibly grateful.</p>
          <p class="story-text" style="margin-top:1rem">On the drive home Priya realises: in that room she was completely present, completely herself, completely valuable. The loneliness story does not include that room. It only includes the empty apartment. The story has been selecting its evidence very carefully.</p>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">The loneliness story is highly selective. It includes every moment of disconnection. It almost never includes the moments you were genuinely present, genuinely yourself. The trunk of your tree is made of exactly those things.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-82',
    session: 'Session 22',
    sessionTitle: 'Trunk and branches',
    week: 'Week 5',
    weekTitle: 'The Tree of Life',
    badge: 'insight',
    badgeLabel: 'Insight',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 5 — The Tree of Life</div>
          <div class="week-session">Session 22 of 25 &nbsp;·&nbsp; Screen 82 of 95</div>
        </div>
        <span class="screen-badge badge-insight">Insight</span>
        <h1 class="screen-title">What loneliness has been leaving out.</h1>
        <div class="insight-block">
          <p class="screen-body-text" style="margin-bottom:1rem">Narrative Therapy calls the dominant story a <strong style="color:var(--text-primary)">thin description</strong> — thin because it is selective.<a class="cite" title="White & Epston, 1990">&#179;</a> The thick description recovers the full complexity of the person. The dominant story is not lying about the pain. It is simply leaving out everything else.</p>
          <p class="screen-body-text" style="margin-bottom:0">Martin Seligman's character strengths research<a class="cite" title="Seligman & Peterson, VIA, 2004">&#8308;</a> identified 24 universal human strengths present in every person. You are not being asked to invent strengths. You are being asked to acknowledge the ones already there.</p>
          <div class="insight-source">&#179; White &amp; Epston (1990) &nbsp; &#8308; Seligman &amp; Peterson, VIA Character Strengths (2004)</div>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Think about what people have genuinely thanked you for. Think about what you do when no one is watching. Think about what you would defend if it were under threat. That is your trunk.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-83',
    session: 'Session 22',
    sessionTitle: 'Trunk and branches',
    week: 'Week 5',
    weekTitle: 'The Tree of Life',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 5 — The Tree of Life</div>
          <div class="week-session">Session 22 of 25 &nbsp;·&nbsp; Screen 83 of 95</div>
        </div>
        <span class="screen-badge badge-practice">Tree — Trunk</span>
        <h1 class="screen-title">My trunk.</h1>
        <div class="insight-block" style="margin-bottom:1.25rem">
          <p class="screen-body-text" style="margin-bottom:0"><strong style="color:var(--teal)">Trunk</strong> — who you actually are. Skills, values, strengths, capacities. What you carry even in the hardest seasons. What the loneliness story has been editing out.</p>
        </div>
        <div id="values-display-83"></div>
        <div class="practice-prompt">My trunk — skills, strengths, and values — includes…</div>
        <textarea class="practice-textarea" id="input-S-83"
          placeholder="What are you good at? What do you do when no one is watching? What would you defend if threatened? Include quiet things…"
          oninput="saveAnswerKey('tree', 'trunk', this.value)"
        >${(state.answers['tree'] || {}).trunk || ''}</textarea>
        <div class="benne-bar" style="margin-top:1rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Include quiet things. The strengths nobody applauded. The care you gave without recognition. The consistency you maintained when it was hard. Those count most of all.</div>
          </div>
        </div>
        <script>
          (function() {
            var vals = state.answers['S-69'];
            if (vals && vals.length > 0) {
              document.getElementById('values-display-83').innerHTML =
                '<div class="clinical-note" style="margin-bottom:1rem"><strong style="color:var(--teal)">Your Week 4 values are already here:</strong> ' + vals.join(' &middot; ') + '</div>';
            }
          })();
        </script>
      </div>
    `
  },

  {
    id: 'S-84',
    session: 'Session 22',
    sessionTitle: 'Trunk and branches',
    week: 'Week 5',
    weekTitle: 'The Tree of Life',
    badge: 'story',
    badgeLabel: 'Story',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 5 — The Tree of Life</div>
          <div class="week-session">Session 22 of 25 &nbsp;·&nbsp; Screen 84 of 95</div>
        </div>
        <span class="screen-badge badge-story">Story</span>
        <h1 class="screen-title">Still allowed to hope.</h1>
        <div class="story-block">
          <div class="story-character">Leon — returning from Week 3</div>
          <p class="story-text">Leon — from Week 3, who learned his social bracing was survival intelligence — sits quietly one morning and notices something unexpected: a small flutter of hope. He has not felt it in a long time. He almost dismisses it — it feels presumptuous, dangerous.</p>
          <p class="story-text" style="margin-top:1rem">Then he remembers something Benne said about values and direction. Hope is not a prediction. It is a direction. He does not have to know if it will come true. He just has to notice that it is still alive in him — that it survived everything.</p>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">C.R. Snyder showed that hope is not a feeling — it is a cognitive process.<a class="cite" title="Snyder, The Psychology of Hope, 1994">&#8309;</a> The belief that pathways forward exist and that you have capacity to move along them. You do not need to know the destination. You just need to believe a path exists.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-85',
    session: 'Session 22',
    sessionTitle: 'Trunk and branches',
    week: 'Week 5',
    weekTitle: 'The Tree of Life',
    badge: 'insight',
    badgeLabel: 'Insight',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 5 — The Tree of Life</div>
          <div class="week-session">Session 22 of 25 &nbsp;·&nbsp; Screen 85 of 95</div>
        </div>
        <span class="screen-badge badge-insight">Insight</span>
        <h1 class="screen-title">Hope is a direction, not a guarantee.</h1>
        <div class="insight-block">
          <p class="screen-body-text" style="margin-bottom:1rem">Snyder's Hope Theory<a class="cite" title="Snyder, 1994">&#8309;</a> — supported by over 1,000 studies — shows hope as two components: <strong style="color:var(--text-primary)">agency thinking</strong> ("I can do this") and <strong style="color:var(--text-primary)">pathways thinking</strong> ("there is a way"). Both have been under development throughout this program. You have been building hope without knowing it.</p>
          <p class="screen-body-text" style="margin-bottom:0">Branches do not know exactly where they will end up. They just keep reaching toward the light.</p>
          <div class="insight-source">&#8309; C.R. Snyder, <em>The Psychology of Hope</em> (1994). 1,000+ supporting studies.</div>
        </div>
      </div>
    `
  },

  {
    id: 'S-86',
    session: 'Session 22',
    sessionTitle: 'Trunk and branches',
    week: 'Week 5',
    weekTitle: 'The Tree of Life',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 5 — The Tree of Life</div>
          <div class="week-session">Session 22 of 25 &nbsp;·&nbsp; Screen 86 of 95</div>
        </div>
        <span class="screen-badge badge-practice">Tree — Branches</span>
        <h1 class="screen-title">My branches.</h1>
        <div class="insight-block" style="margin-bottom:1.25rem">
          <p class="screen-body-text" style="margin-bottom:0"><strong style="color:var(--teal)">Branches</strong> — what you hope for. Directions, not destinations. Even tentative, even quiet hopes count here.</p>
        </div>
        <div id="unique-outcome-86"></div>
        <div class="practice-prompt">My branches — what I am reaching toward — include…</div>
        <textarea class="practice-textarea" id="input-S-86"
          placeholder="What do you hope for — in connection, in life, in who you are becoming? Even small things count…"
          oninput="saveAnswerKey('tree', 'branches', this.value)"
        >${(state.answers['tree'] || {}).branches || ''}</textarea>
        <div class="benne-bar" style="margin-top:1rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Branches do not know exactly where they will end up. They just keep reaching toward the light. Write what you are reaching toward — however quietly.</div>
          </div>
        </div>
        <script>
          (function() {
            var uo = state.answers['S-51'];
            if (uo) {
              document.getElementById('unique-outcome-86').innerHTML =
                '<div class="clinical-note" style="margin-bottom:1rem"><strong style="color:var(--teal)">Your unique outcome from Week 3 is already a branch:</strong><div style="margin-top:6px;font-style:italic;color:var(--text-secondary);font-size:12px">&ldquo;' + uo + '&rdquo;</div><div style="margin-top:4px;font-size:11px;color:var(--text-muted)">This already happened — which means it can happen again.</div></div>';
            }
          })();
        </script>
      </div>
    `
  },

  // --- SESSION 23: Leaves, fruits and ground (S-87 to S-90) ---

  {
    id: 'S-87',
    session: 'Session 23',
    sessionTitle: 'Leaves, fruits and ground',
    week: 'Week 5',
    weekTitle: 'The Tree of Life',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 5 — The Tree of Life</div>
          <div class="week-session">Session 23 of 25 &nbsp;·&nbsp; Screen 87 of 95</div>
        </div>
        <span class="screen-badge badge-practice">Tree — Leaves</span>
        <h1 class="screen-title">My leaves.</h1>
        <div class="insight-block" style="margin-bottom:1.25rem">
          <p class="screen-body-text" style="margin-bottom:0"><strong style="color:var(--teal)">Leaves</strong> — people who have mattered to you. Past and present, close and distant. Include people who mattered briefly. A teacher who said one thing that stayed. A stranger who was kind at the right moment. Not all leaves last the whole season — that does not make them not real.</p>
        </div>
        <div id="true-thing-87"></div>
        <div class="practice-prompt">My leaves — people who have mattered — include…</div>
        <textarea class="practice-textarea" id="input-S-87"
          placeholder="Names or descriptions. Past or present. Close or brief. All of them count…"
          oninput="saveAnswerKey('tree', 'leaves', this.value)"
        >${(state.answers['tree'] || {}).leaves || ''}</textarea>
        <div class="benne-bar" style="margin-top:1rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Most people discover they have more leaves than the loneliness story allowed them to count. Take your time here.</div>
          </div>
        </div>
        <script>
          (function() {
            var tt = state.answers['S-37'];
            if (tt) {
              document.getElementById('true-thing-87').innerHTML =
                '<div class="clinical-note" style="margin-bottom:1rem"><strong style="color:var(--teal)">From Week 2 — what you wanted someone to know:</strong><div style="margin-top:6px;font-style:italic;color:var(--text-secondary);font-size:12px">&ldquo;' + tt + '&rdquo;</div><div style="margin-top:4px;font-size:11px;color:var(--text-muted)">This is what a true leaf would hold — the real thing, not the edited version.</div></div>';
            }
          })();
        </script>
      </div>
    `
  },

  {
    id: 'S-88',
    session: 'Session 23',
    sessionTitle: 'Leaves, fruits and ground',
    week: 'Week 5',
    weekTitle: 'The Tree of Life',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 5 — The Tree of Life</div>
          <div class="week-session">Session 23 of 25 &nbsp;·&nbsp; Screen 88 of 95</div>
        </div>
        <span class="screen-badge badge-practice">Tree — Fruits</span>
        <h1 class="screen-title">My fruits.</h1>
        <div class="insight-block" style="margin-bottom:1.25rem">
          <p class="screen-body-text" style="margin-bottom:0"><strong style="color:var(--teal)">Fruits</strong> — what you have given. Not achievements — what you have given to others. The difference matters. A fruit falls from the tree and feeds something else. Quiet contributions count most here.</p>
        </div>
        <div class="practice-prompt">My fruits — things I have given or contributed — include…</div>
        <textarea class="practice-textarea" id="input-S-88"
          placeholder="Conversations that helped someone. Kindnesses given quietly. Ways you showed up for others…"
          oninput="saveAnswerKey('tree', 'fruits', this.value)"
        >${(state.answers['tree'] || {}).fruits || ''}</textarea>
        <div class="benne-bar" style="margin-top:1rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Research by Lara Aknin and Elizabeth Dunn<a class="cite" title="Aknin & Dunn, 2012">&#8310;</a> shows consistently that giving to others produces wellbeing in the giver. Benefits the lonely person has often been generating without knowing it. Your tree has more fruits than you realise.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-89',
    session: 'Session 23',
    sessionTitle: 'Leaves, fruits and ground',
    week: 'Week 5',
    weekTitle: 'The Tree of Life',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 5 — The Tree of Life</div>
          <div class="week-session">Session 23 of 25 &nbsp;·&nbsp; Screen 89 of 95</div>
        </div>
        <span class="screen-badge badge-practice">Tree — Ground</span>
        <h1 class="screen-title">My ground.</h1>
        <div class="insight-block" style="margin-bottom:1.25rem">
          <p class="screen-body-text" style="margin-bottom:0"><strong style="color:var(--teal)">Ground</strong> — what sustains you. What you stand on when everything else is uncertain. Faith. Nature. A daily practice. A conviction that has survived everything you have been through.</p>
        </div>
        <div class="practice-prompt">My ground — what sustains and roots me — includes…</div>
        <textarea class="practice-textarea" id="input-S-89"
          placeholder="Faith. A daily rhythm. A place that restores you. A practice that grounds you. A conviction that has never left…"
          oninput="saveAnswerKey('tree', 'ground', this.value)"
        >${(state.answers['tree'] || {}).ground || ''}</textarea>
        <div class="benne-bar" style="margin-top:1rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">You have some of this ground already — we have been building it together. Include all of it. The tree is nearly complete.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-90',
    session: 'Session 23',
    sessionTitle: 'Leaves, fruits and ground',
    week: 'Week 5',
    weekTitle: 'The Tree of Life',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 5 — The Tree of Life</div>
          <div class="week-session">Session 23 of 25 &nbsp;·&nbsp; Screen 90 of 95</div>
        </div>
        <span class="screen-badge" style="background:var(--teal-dim);color:var(--teal);border:1px solid var(--teal-border)">The Full Tree — Revealed</span>
        <h1 class="screen-title">Look at what you have built.</h1>
        <div class="benne-bar" style="margin-bottom:1.5rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">This tree has been growing your entire life. The loneliness story only ever showed you the empty parts. This is the whole thing.</div>
          </div>
        </div>
        <div id="full-tree-display"></div>
        <script>
          (function() {
            var tree = state.answers['tree'] || {};
            var parts = [
              {key:'roots', label:'Roots', color:'var(--teal-dim)', border:'var(--teal-border)', tc:'var(--teal)'},
              {key:'trunk', label:'Trunk', color:'rgba(201,168,76,0.12)', border:'rgba(201,168,76,0.3)', tc:'var(--gold)'},
              {key:'branches', label:'Branches', color:'var(--teal-dim)', border:'var(--teal-border)', tc:'var(--teal)'},
              {key:'leaves', label:'Leaves', color:'rgba(91,130,191,0.12)', border:'rgba(91,130,191,0.25)', tc:'#7BA3D4'},
              {key:'fruits', label:'Fruits', color:'rgba(212,130,106,0.12)', border:'rgba(212,130,106,0.25)', tc:'var(--coral)'},
              {key:'ground', label:'Ground', color:'rgba(201,168,76,0.08)', border:'rgba(201,168,76,0.2)', tc:'var(--gold)'}
            ];
            var filled = parts.filter(function(p){return tree[p.key];});
            var container = document.getElementById('full-tree-display');
            if (filled.length === 0) {
              container.innerHTML = '<div class="clinical-note">Your tree sections will appear here as you complete them. Return to Screens 80, 83, 86, 87, 88, and 89 to build each part.</div>';
            } else {
              container.innerHTML = '<div style="display:flex;flex-direction:column;gap:12px">' +
                filled.map(function(p) {
                  return '<div style="padding:14px 16px;border-radius:10px;background:' + p.color + ';border:1px solid ' + p.border + '">' +
                    '<div style="font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:' + p.tc + ';margin-bottom:6px">' + p.label + '</div>' +
                    '<p style="font-size:13px;color:var(--text-secondary);line-height:1.7;font-weight:300;white-space:pre-wrap">' + (tree[p.key]||'') + '</p>' +
                    '</div>';
                }).join('') + '</div>';
            }
          })();
        </script>
      </div>
    `
  },

  // --- SESSION 24: The new story (S-91 to S-93) ---

  {
    id: 'S-91',
    session: 'Session 24',
    sessionTitle: 'The new story',
    week: 'Week 5',
    weekTitle: 'The Tree of Life',
    badge: 'story',
    badgeLabel: 'Story',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 5 — The Tree of Life</div>
          <div class="week-session">Session 24 of 25 &nbsp;·&nbsp; Screen 91 of 95</div>
        </div>
        <span class="screen-badge badge-story">Story</span>
        <h1 class="screen-title">The story that has been waiting.</h1>
        <div class="story-block">
          <div class="story-character">Diane — returning from Week 3</div>
          <p class="story-text">Diane — from Week 3, who had never told anyone her full loneliness story — sits alone with her tree displayed. She reads it slowly. The roots: a childhood full of movement. The trunk: a capacity for deep listening that colleagues rely on. The branches: a long-held hope to find one person who really knows her. The leaves: more names than she expected.</p>
          <p class="story-text" style="margin-top:1rem">She reads it and thinks: <em>this is also true. This has also been true all along.</em></p>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">The loneliness is real. The pain is real. None of that disappears because we built a tree. But it is also true that you are more than that ache. Both things are true at the same time. The work of this program is learning to hold both.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-92',
    session: 'Session 24',
    sessionTitle: 'The new story',
    week: 'Week 5',
    weekTitle: 'The Tree of Life',
    badge: 'insight',
    badgeLabel: 'Insight',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 5 — The Tree of Life</div>
          <div class="week-session">Session 24 of 25 &nbsp;·&nbsp; Screen 92 of 95</div>
        </div>
        <span class="screen-badge badge-insight">Insight</span>
        <h1 class="screen-title">Two true things.</h1>
        <div class="insight-block">
          <p class="screen-body-text" style="margin-bottom:1rem">The ability to hold two apparently contradictory truths simultaneously is a hallmark of psychological maturity. Marsha Linehan's Dialectical Behaviour Therapy<a class="cite" title="Linehan, DBT, 1993">&#8311;</a> is built on this foundation — the both/and rather than the either/or.</p>
          <p class="screen-body-text" style="margin-bottom:0">You do not have to choose between "I am lonely" and "I am a full person." Both are true. The program has been building your capacity to hold both.</p>
          <div class="insight-source">&#8311; Marsha Linehan, DBT foundational framework (1993).</div>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">I carry this pain. AND I am this person. Neither one cancels the other. That AND is where you are learning to live.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-93',
    session: 'Session 24',
    sessionTitle: 'The new story',
    week: 'Week 5',
    weekTitle: 'The Tree of Life',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 5 — The Tree of Life</div>
          <div class="week-session">Session 24 of 25 &nbsp;·&nbsp; Screen 93 of 95</div>
        </div>
        <span class="screen-badge badge-practice">Practice</span>
        <h1 class="screen-title">My new opening sentence.</h1>
        <div id="dominant-story-93"></div>
        <p class="screen-body-text">The loneliness story is not gone. But it is not the only sentence anymore. Write what the tree has shown you is also true.</p>
        <div class="practice-prompt">And also true is…</div>
        <textarea class="practice-textarea" id="input-S-93"
          placeholder="What does your tree show you about who you also are? Write the other sentence — the one the dominant story left out…"
          oninput="saveAnswer('S-93', this.value)"
        >${state.answers['S-93'] || ''}</textarea>
        <div class="benne-bar" style="margin-top:1rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">This sentence — alongside your dominant story — will appear at the final screen of this program. It is one of the most important things you will write in Beyond Alone.</div>
          </div>
        </div>
        <div class="clinical-note">This entry is saved and will appear alongside your Week 3 dominant story at Screen 147 — the final declaration.</div>
        <script>
          (function() {
            var ds = state.answers['S-41'];
            if (ds) {
              document.getElementById('dominant-story-93').innerHTML =
                '<div style="padding:14px 16px;border-radius:10px;background:var(--coral-dim);border:1px solid rgba(212,130,106,0.3);margin-bottom:1.25rem">' +
                '<div style="font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--coral);margin-bottom:6px">Your dominant story — from Week 3</div>' +
                '<p style="font-size:13px;color:var(--text-secondary);line-height:1.7;font-style:italic">&ldquo;I am someone who ' + ds + '&rdquo;</p>' +
                '</div>';
            }
          })();
        </script>
      </div>
    `
  },

  // --- SESSION 25: The scripture anchor (S-94 to S-95) ---

  {
    id: 'S-94',
    session: 'Session 25',
    sessionTitle: 'The scripture anchor',
    week: 'Week 5',
    weekTitle: 'The Tree of Life',
    badge: 'anchor',
    badgeLabel: 'Scripture',
    render: () => `
      <div class="screen">
        <div class="scripture-screen">
          <div class="scripture-ref">2 Corinthians 12:9 &nbsp;·&nbsp; NLT</div>
          <p class="scripture-text">
            "Each time he said,<br>
            &lsquo;My grace is all you need.<br>
            My power works best in weakness.&rsquo;<br>
            So now I am glad to boast about my weaknesses,<br>
            so that the power of Christ can work through me."
          </p>
          <div class="scripture-divider"></div>
          <div class="scripture-translation-note">New Living Translation</div>
        </div>
      </div>
    `
  },

  {
    id: 'S-95',
    session: 'Session 25',
    sessionTitle: 'The scripture anchor',
    week: 'Week 5',
    weekTitle: 'The Tree of Life',
    badge: 'close',
    badgeLabel: 'Week 5 Complete',
    render: () => `
      <div class="screen">
        <div class="week-complete">
          <div class="week-complete-icon">&#10022;</div>
          <h1 class="week-complete-title">You made it through Week 5.</h1>
          <p class="week-complete-text">
            You built a tree this week. From your own life. From the things that were already there — the roots, the strengths, the hopes, the people, the gifts, the ground you stand on. None of it was invented. All of it was already yours. The loneliness story just never told you about it.
          </p>
          <div class="insight-block" style="text-align:left;margin-bottom:1.5rem">
            <p class="screen-body-text" style="margin-bottom:0">"My power works best in weakness." The tree you built this week — rooted in difficult ground, shaped by hard seasons, still growing toward the light — is the living evidence of that.</p>
          </div>
          <div class="benne-bar" style="text-align:left;margin-bottom:2rem">
            <div class="benne-avatar"></div>
            <div class="benne-content">
              <div class="benne-name">Benne Hart</div>
              <div class="benne-text">Week 6 takes everything you have built and moves it outward — toward community, toward the people who might become your leaves. You are not starting from emptiness. You are starting from a tree that is already growing.</div>
            </div>
          </div>
          <button class="save-btn" onclick="saveProgress()">&#10003; &nbsp; Save Progress</button>
        </div>
      </div>
    `
  }
,

  // ============================================================
  // WEEK 6 — THE BODY CORPORATE (Screens 96–114)
  // ============================================================

  // --- SESSION 26: Connection is built not found (S-96 to S-98) ---

  {
    id: 'S-96',
    session: 'Session 26',
    sessionTitle: 'Connection is built not found',
    week: 'Week 6',
    weekTitle: 'The Body Corporate',
    badge: 'story',
    badgeLabel: 'Story',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 6 — The Body Corporate</div>
          <div class="week-session">Session 26 of 30 &nbsp;·&nbsp; Screen 96 of 114</div>
        </div>
        <span class="screen-badge badge-story">Story</span>
        <h1 class="screen-title">The people who seem to do it naturally.</h1>
        <div class="story-block">
          <div class="story-character">Thomas — returning from Week 2</div>
          <p class="story-text">Thomas — from Week 2, who believed something in his wiring made deep connection impossible — watches a colleague move through a gathering with apparent ease. Warm greetings, genuine laughter, effortless transitions. Thomas feels the familiar ache: that is something I will never have.</p>
          <p class="story-text" style="margin-top:1rem">Then the colleague catches him after the event and admits quietly: "I rehearsed three conversation starters on the drive here. I almost did not come." Thomas realises he has been comparing his interior — his fear, his effort, his doubt — to someone else's exterior. He has been playing an unwinnable game.</p>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">The people who appear most connected are not people who found connection easily. They are people who kept showing up — awkwardly, imperfectly, sometimes unsuccessfully — until something took hold. Connection is not a talent some people are born with. It is a practice.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-97',
    session: 'Session 26',
    sessionTitle: 'Connection is built not found',
    week: 'Week 6',
    weekTitle: 'The Body Corporate',
    badge: 'insight',
    badgeLabel: 'Insight',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 6 — The Body Corporate</div>
          <div class="week-session">Session 26 of 30 &nbsp;·&nbsp; Screen 97 of 114</div>
        </div>
        <span class="screen-badge badge-insight">Insight</span>
        <h1 class="screen-title">What the research actually shows.</h1>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Vivek Murthy<a class="cite" title="Murthy, Together, 2020">&#185;</a> found that the people who appear most socially connected are not those who found it easily. They are people who kept showing up — awkwardly, imperfectly — until something took hold. And the "mere exposure effect"<a class="cite" title="Zajonc, mere exposure effect, 1968">&#178;</a> documented by Robert Zajonc shows that familiarity itself generates liking. Showing up consistently, even quietly, is the foundation of connection.</div>
          </div>
        </div>
        <div class="insight-block">
          <p class="screen-body-text" style="margin-bottom:0">You do not need to be brilliant or effortless. You need to keep showing up. That is the whole practice. And you have already been practicing — for five weeks now — by showing up here.</p>
          <div class="insight-source">&#185; Vivek Murthy, <em>Together</em> (2020) &nbsp; &#178; Robert Zajonc, mere exposure effect (1968)</div>
        </div>
      </div>
    `
  },

  {
    id: 'S-98',
    session: 'Session 26',
    sessionTitle: 'Connection is built not found',
    week: 'Week 6',
    weekTitle: 'The Body Corporate',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 6 — The Body Corporate</div>
          <div class="week-session">Session 26 of 30 &nbsp;·&nbsp; Screen 98 of 114</div>
        </div>
        <span class="screen-badge badge-practice">Practice</span>
        <h1 class="screen-title">The comparison I have been making.</h1>
        <p class="screen-body-text">Identify the specific comparison that has most deeply reinforced your sense of social inadequacy — the person or type of person you have been measuring yourself against.</p>
        <div class="practice-prompt">The comparison I have been making is:</div>
        <textarea class="practice-textarea" style="min-height:80px" id="input-S-98a"
          placeholder="Who or what have you been measuring yourself against?"
          oninput="saveAnswerKey('S-98', 'comparison', this.value)"
        >${(state.answers['S-98'] || {}).comparison || ''}</textarea>
        <div class="practice-prompt" style="margin-top:1rem">What I would do differently if I stopped making that comparison:</div>
        <textarea class="practice-textarea" style="min-height:80px" id="input-S-98b"
          placeholder="What becomes possible when you stop comparing your interior to someone else's exterior?"
          oninput="saveAnswerKey('S-98', 'different', this.value)"
        >${(state.answers['S-98'] || {}).different || ''}</textarea>
        <div class="benne-bar" style="margin-top:1rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">You have been comparing your interior — your fear, your effort, your doubt — to someone else's exterior. That comparison was never fair. And it has cost you more than you know.</div>
          </div>
        </div>
      </div>
    `
  },

  // --- SESSION 27: Recovery capital (S-99 to S-102) ---

  {
    id: 'S-99',
    session: 'Session 27',
    sessionTitle: 'Recovery capital',
    week: 'Week 6',
    weekTitle: 'The Body Corporate',
    badge: 'story',
    badgeLabel: 'Story',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 6 — The Body Corporate</div>
          <div class="week-session">Session 27 of 30 &nbsp;·&nbsp; Screen 99 of 114</div>
        </div>
        <span class="screen-badge badge-story">Story</span>
        <h1 class="screen-title">The assets hidden in plain sight.</h1>
        <div class="story-block">
          <div class="story-character">Grace — returning from Week 2</div>
          <p class="story-text">Grace — from Week 2, who stopped accepting invitations — is sitting with her tree from last week. She looks at the leaves section: more names than she remembered. A neighbour she has spoken to three times but who always seems genuinely pleased to see her. A former colleague who messaged twice in the past year and she did not respond. A woman from a weekly group she stopped attending.</p>
          <p class="story-text" style="margin-top:1rem">She has been treating these as neutral facts. Looking at them now she realises they are connection assets she has been leaving untended. Not abandoned friendships. Untended ones. There is a difference.</p>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Recovery capital means the sum of everything you have available to support your movement toward connection — internal and external. Most people have more than they have been counting. You are about to count yours.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-100',
    session: 'Session 27',
    sessionTitle: 'Recovery capital',
    week: 'Week 6',
    weekTitle: 'The Body Corporate',
    badge: 'insight',
    badgeLabel: 'Insight',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 6 — The Body Corporate</div>
          <div class="week-session">Session 27 of 30 &nbsp;·&nbsp; Screen 100 of 114</div>
        </div>
        <span class="screen-badge badge-insight">Insight</span>
        <h1 class="screen-title">What recovery capital means.</h1>
        <div class="insight-block">
          <p class="screen-body-text" style="margin-bottom:1rem">Recovery capital<a class="cite" title="White & Miller, recovery capital framework">&#179;</a> is the sum of an individual's internal and external resources available to support connection and wellbeing. Internal capital: values, strengths, capacities — your tree trunk and ground. External capital: people in your life, communities, places where you are known even slightly.</p>
          <p class="screen-body-text" style="margin-bottom:0">You are not starting from zero. You built your internal capital across five weeks. Your leaves section already mapped your external capital. The work now is to count what you have — and to distinguish untended connections from abandoned ones.</p>
          <div class="insight-source">&#179; William White &amp; William Miller, recovery capital framework</div>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Untended is not the same as lost. An untended connection is one that still has life in it — if someone reached toward it.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-101',
    session: 'Session 27',
    sessionTitle: 'Recovery capital',
    week: 'Week 6',
    weekTitle: 'The Body Corporate',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 6 — The Body Corporate</div>
          <div class="week-session">Session 27 of 30 &nbsp;·&nbsp; Screen 101 of 114</div>
        </div>
        <span class="screen-badge badge-practice">Practice</span>
        <h1 class="screen-title">My internal capital.</h1>
        <div id="internal-capital-display"></div>
        <div class="practice-prompt">What internal resources do I bring to connection?</div>
        <textarea class="practice-textarea" id="input-S-101"
          placeholder="What do you bring? What has the program shown you about your own capacities, values, and strengths?"
          oninput="saveAnswer('S-101', this.value)"
        >${state.answers['S-101'] || ''}</textarea>
        <div class="benne-bar" style="margin-top:1rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">This does not disappear when the feeling is heavy. It is there whether you feel it or not. This is what you bring to every connection — whether you have been acknowledging it or not.</div>
          </div>
        </div>
        <script>
          (function() {
            var tree = state.answers['tree'] || {};
            var vals = state.answers['S-69'] || [];
            var parts = [];
            if (tree.trunk) parts.push('<strong style="color:var(--teal)">Trunk:</strong> ' + tree.trunk.substring(0, 100) + (tree.trunk.length > 100 ? '...' : ''));
            if (tree.ground) parts.push('<strong style="color:var(--teal)">Ground:</strong> ' + tree.ground.substring(0, 100) + (tree.ground.length > 100 ? '...' : ''));
            if (vals.length > 0) parts.push('<strong style="color:var(--teal)">Values:</strong> ' + vals.join(' &middot; '));
            if (parts.length > 0) {
              document.getElementById('internal-capital-display').innerHTML =
                '<div class="clinical-note" style="margin-bottom:1rem">' + parts.join('<br>') + '</div>';
            }
          })();
        </script>
      </div>
    `
  },

  {
    id: 'S-102',
    session: 'Session 27',
    sessionTitle: 'Recovery capital',
    week: 'Week 6',
    weekTitle: 'The Body Corporate',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 6 — The Body Corporate</div>
          <div class="week-session">Session 27 of 30 &nbsp;·&nbsp; Screen 102 of 114</div>
        </div>
        <span class="screen-badge badge-practice">Practice</span>
        <h1 class="screen-title">My external capital.</h1>
        <div id="leaves-display-102"></div>
        <div class="practice-prompt">What external connections and communities do I have — including untended ones?</div>
        <textarea class="practice-textarea" id="input-S-102"
          placeholder="Include things you have been discounting. The weekly group you attend but feel distant from. The neighbour who knows your name. The colleague who always seems pleased to see you…"
          oninput="saveAnswer('S-102', this.value)"
        >${state.answers['S-102'] || ''}</textarea>
        <div class="benne-bar" style="margin-top:1rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Mark Granovetter showed that weak ties — acquaintances, not close friends — are often the most powerful connectors.<a class="cite" title="Granovetter, weak ties research, 1973">&#8308;</a> Include those here. The person who knows your face. The group you have not fully entered yet. These are starting points, not finished products.</div>
          </div>
        </div>
        <script>
          (function() {
            var leaves = (state.answers['tree'] || {}).leaves;
            if (leaves) {
              document.getElementById('leaves-display-102').innerHTML =
                '<div class="clinical-note" style="margin-bottom:1rem"><strong style="color:var(--teal)">Your leaves from Week 5:</strong><div style="margin-top:6px;font-size:12px;color:var(--text-secondary);font-style:italic">' + leaves.substring(0, 200) + (leaves.length > 200 ? '...' : '') + '</div></div>';
            }
          })();
        </script>
      </div>
    `
  },

  // --- SESSION 28: The four circles (S-103 to S-107) ---

  {
    id: 'S-103',
    session: 'Session 28',
    sessionTitle: 'The four circles',
    week: 'Week 6',
    weekTitle: 'The Body Corporate',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 6 — The Body Corporate</div>
          <div class="week-session">Session 28 of 30 &nbsp;·&nbsp; Screen 103 of 114</div>
        </div>
        <span class="screen-badge badge-practice">Circle Map — Inner</span>
        <h1 class="screen-title">The inner circle.</h1>
        <div class="insight-block" style="margin-bottom:1.25rem">
          <p class="screen-body-text" style="margin-bottom:0"><strong style="color:var(--teal)">Inner circle</strong> — one to three people of deepest trust. People who know something true about you and stay anyway. Robin Dunbar's research<a class="cite" title="Dunbar, social circle research">&#8309;</a> shows most people have between one and five truly close relationships across a lifetime. One is enough to begin.</p>
        </div>
        <div class="practice-prompt">My inner circle — people of deepest trust — includes (include aspirational names too):</div>
        <textarea class="practice-textarea" style="min-height:80px" id="input-S-103"
          placeholder="Names or descriptions. Past, present, or hoped for. An aspirational name is also valid here…"
          oninput="saveAnswerKey('circles', 'inner', this.value)"
        >${(state.answers['circles'] || {}).inner || ''}</textarea>
        <div class="benne-bar" style="margin-top:1rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">If your inner circle feels empty right now — that is not failure. That is precisely what brings you here. And the program will help you take one step toward changing it.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-104',
    session: 'Session 28',
    sessionTitle: 'The four circles',
    week: 'Week 6',
    weekTitle: 'The Body Corporate',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 6 — The Body Corporate</div>
          <div class="week-session">Session 28 of 30 &nbsp;·&nbsp; Screen 104 of 114</div>
        </div>
        <span class="screen-badge badge-practice">Circle Map — Friendship</span>
        <h1 class="screen-title">The friendship circle.</h1>
        <div class="insight-block" style="margin-bottom:1.25rem">
          <p class="screen-body-text" style="margin-bottom:0"><strong style="color:var(--teal)">Friendship circle</strong> — people of genuine warmth and reasonably regular contact. Not perfect friendships. Not frictionless ones. Someone you could call after six months of silence and pick up mid-sentence. Dunbar estimates this circle at five to fifteen people for most adults.</p>
        </div>
        <div class="practice-prompt">My friendship circle includes:</div>
        <textarea class="practice-textarea" style="min-height:80px" id="input-S-104"
          placeholder="People you genuinely like and who genuinely like you — even if contact has become irregular…"
          oninput="saveAnswerKey('circles', 'friendship', this.value)"
        >${(state.answers['circles'] || {}).friendship || ''}</textarea>
        <div class="benne-bar" style="margin-top:1rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Most lonely adults discover their friendship circle is smaller than average — but not absent. It has simply been untended. There is a difference between abandoned and untended.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-105',
    session: 'Session 28',
    sessionTitle: 'The four circles',
    week: 'Week 6',
    weekTitle: 'The Body Corporate',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 6 — The Body Corporate</div>
          <div class="week-session">Session 28 of 30 &nbsp;·&nbsp; Screen 105 of 114</div>
        </div>
        <span class="screen-badge badge-practice">Circle Map — Community</span>
        <h1 class="screen-title">The community circle.</h1>
        <div class="insight-block" style="margin-bottom:1.25rem">
          <p class="screen-body-text" style="margin-bottom:0"><strong style="color:var(--teal)">Community circle</strong> — groups and shared-purpose spaces. A congregation, a class, a running group, a creative gathering. Holt-Lunstad's research<a class="cite" title="Holt-Lunstad, group membership research">&#185;</a> shows that group membership is one of the most robust protective factors against loneliness. You do not have to love everyone in the group. You just have to keep showing up.</p>
        </div>
        <div class="practice-prompt">My community circle — groups and gatherings — includes:</div>
        <textarea class="practice-textarea" style="min-height:80px" id="input-S-105"
          placeholder="Current and aspirational. Online or in person. Even groups you attend but feel distant from count here…"
          oninput="saveAnswerKey('circles', 'community', this.value)"
        >${(state.answers['circles'] || {}).community || ''}</textarea>
        <div class="benne-bar" style="margin-top:1rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Include things you currently have and things you are moving toward. Both are valid entries here.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-106',
    session: 'Session 28',
    sessionTitle: 'The four circles',
    week: 'Week 6',
    weekTitle: 'The Body Corporate',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 6 — The Body Corporate</div>
          <div class="week-session">Session 28 of 30 &nbsp;·&nbsp; Screen 106 of 114</div>
        </div>
        <span class="screen-badge badge-practice">Circle Map — Service</span>
        <h1 class="screen-title">The service circle.</h1>
        <div class="insight-block" style="margin-bottom:1.25rem">
          <p class="screen-body-text" style="margin-bottom:0"><strong style="color:var(--teal)">Service circle</strong> — people or communities you give to. Research by Aknin and Dunn shows consistently that giving to others produces connection in the giver — before, not after, the relationship deepens. You do not wait to feel close before you serve. You serve, and closeness grows from it.</p>
        </div>
        <div class="practice-prompt">My service circle — where I give or could give — includes:</div>
        <textarea class="practice-textarea" style="min-height:80px" id="input-S-106"
          placeholder="Places or people you contribute to, care for, or could move toward with your fruits and strengths…"
          oninput="saveAnswerKey('circles', 'service', this.value)"
        >${(state.answers['circles'] || {}).service || ''}</textarea>
        <div class="benne-bar" style="margin-top:1rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Think about the fruits you listed in Week 5. Where could those fruits go? The service circle is not a strategy to extract connection. It is a way of becoming more outwardly alive — and a fully alive person attracts connection naturally.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-107',
    session: 'Session 28',
    sessionTitle: 'The four circles',
    week: 'Week 6',
    weekTitle: 'The Body Corporate',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 6 — The Body Corporate</div>
          <div class="week-session">Session 28 of 30 &nbsp;·&nbsp; Screen 107 of 114</div>
        </div>
        <span class="screen-badge" style="background:var(--teal-dim);color:var(--teal);border:1px solid var(--teal-border)">Full Circle Map</span>
        <h1 class="screen-title">My full circle map.</h1>
        <div class="benne-bar" style="margin-bottom:1.5rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">This is not a report card. It is a map. Maps show you where you are and where you can go. Every circle with even one name is a direction. Every empty circle is an invitation, not a verdict.</div>
          </div>
        </div>
        <div id="full-circles-display"></div>
        <script>
          (function() {
            var circles = state.answers['circles'] || {};
            var parts = [
              {key:'inner', label:'Inner Circle', color:'var(--teal-dim)', border:'var(--teal-border)', tc:'var(--teal)'},
              {key:'friendship', label:'Friendship Circle', color:'rgba(91,130,191,0.12)', border:'rgba(91,130,191,0.25)', tc:'#7BA3D4'},
              {key:'community', label:'Community Circle', color:'rgba(201,168,76,0.1)', border:'rgba(201,168,76,0.25)', tc:'var(--gold)'},
              {key:'service', label:'Service Circle', color:'rgba(212,130,106,0.1)', border:'rgba(212,130,106,0.25)', tc:'var(--coral)'}
            ];
            var container = document.getElementById('full-circles-display');
            container.innerHTML = '<div style="display:flex;flex-direction:column;gap:10px">' +
              parts.map(function(p) {
                var val = circles[p.key];
                return '<div style="padding:12px 14px;border-radius:10px;background:' + p.color + ';border:1px solid ' + p.border + '">' +
                  '<div style="font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:' + p.tc + ';margin-bottom:5px">' + p.label + '</div>' +
                  (val ? '<p style="font-size:13px;color:var(--text-secondary);line-height:1.6;font-weight:300">' + val + '</p>'
                       : '<p style="font-size:12px;color:var(--text-muted);font-style:italic">Not yet filled — an invitation, not a verdict.</p>') +
                  '</div>';
              }).join('') + '</div>';
          })();
        </script>
      </div>
    `
  },

  // --- SESSION 29: The brave reach (S-108 to S-111) ---

  {
    id: 'S-108',
    session: 'Session 29',
    sessionTitle: 'The brave reach',
    week: 'Week 6',
    weekTitle: 'The Body Corporate',
    badge: 'story',
    badgeLabel: 'Story',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 6 — The Body Corporate</div>
          <div class="week-session">Session 29 of 30 &nbsp;·&nbsp; Screen 108 of 114</div>
        </div>
        <span class="screen-badge badge-story">Story</span>
        <h1 class="screen-title">The message she almost did not send.</h1>
        <div class="story-block">
          <div class="story-character">Ama — returning from Week 2</div>
          <p class="story-text">Ama — from Week 2, who left the gathering early thinking no one would notice — sits with her circle map. In the friendship circle she has written one name: a woman she met at a community event eight months ago who gave her a warm smile and said "we should have coffee sometime."</p>
          <p class="story-text" style="margin-top:1rem">Ama has thought about that invitation every week since and done nothing with it. Tonight she types: "I know it has been a while — I was thinking of you and wondered if you still wanted to get that coffee?" She stares at it for three minutes. Then she sends it. Her heart is pounding. That is the bravest thing she has done in this entire program. That is also the smallest possible action. Both things are true.</p>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">The gap between thinking about reaching out and actually reaching out is where loneliness lives. Ama closed that gap tonight. Not dramatically. Just with one sent message.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-109',
    session: 'Session 29',
    sessionTitle: 'The brave reach',
    week: 'Week 6',
    weekTitle: 'The Body Corporate',
    badge: 'insight',
    badgeLabel: 'Insight',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 6 — The Body Corporate</div>
          <div class="week-session">Session 29 of 30 &nbsp;·&nbsp; Screen 109 of 114</div>
        </div>
        <span class="screen-badge badge-insight">Insight</span>
        <h1 class="screen-title">Why small is the right size.</h1>
        <div class="insight-block">
          <p class="screen-body-text" style="margin-bottom:1rem">Behavioral activation research<a class="cite" title="Martell, behavioral activation, 2001">&#8310;</a> is clear: the size of the first step does not predict the size of the outcome. What predicts the outcome is whether you take the step at all. And BJ Fogg's tiny habits research<a class="cite" title="Fogg, Tiny Habits, 2019">&#8311;</a> shows that small consistent steps compound — action precedes motivation, not the other way around.</p>
          <p class="screen-body-text" style="margin-bottom:0">John Gottman's research on relationships identifies the foundation of every close relationship as "bids for connection" — small, ordinary, repeated moments of turning toward another person. A text. A question. Showing up to the same place twice. These are not small things disguised as large ones. They are the actual building blocks.</p>
          <div class="insight-source">&#8310; Martell, behavioral activation (2001) &nbsp; &#8311; BJ Fogg, <em>Tiny Habits</em> (2019)</div>
        </div>
      </div>
    `
  },

  {
    id: 'S-110',
    session: 'Session 29',
    sessionTitle: 'The brave reach',
    week: 'Week 6',
    weekTitle: 'The Body Corporate',
    badge: 'insight',
    badgeLabel: 'Insight',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 6 — The Body Corporate</div>
          <div class="week-session">Session 29 of 30 &nbsp;·&nbsp; Screen 110 of 114</div>
        </div>
        <span class="screen-badge badge-insight">Insight</span>
        <h1 class="screen-title">Safe people — a necessary distinction.</h1>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Before we talk about reaching out I want to say something important. Not every person is worth reaching toward. Desperate connection — reaching toward anyone just to fill the silence — tends to deepen loneliness rather than relieve it. Safe connection has specific qualities: the other person is genuinely interested in you. They respond with care when you are honest. They do not require you to shrink in order to belong. Reach toward those people. Not every open door.</div>
          </div>
        </div>
        <div class="insight-block">
          <p class="screen-body-text" style="margin-bottom:0">Henry Cloud and John Townsend identified safe people<a class="cite" title="Cloud & Townsend, Safe People, 1995">&#8312;</a> as those who draw out the best in you, are honest with you, and remain stable when you are not. The distinction between wise connection and desperate connection is one of the most important things this program teaches. Quality over quantity — always.</p>
          <div class="insight-source">&#8312; Henry Cloud &amp; John Townsend, <em>Safe People</em> (1995)</div>
        </div>
      </div>
    `
  },

  {
    id: 'S-111',
    session: 'Session 29',
    sessionTitle: 'The brave reach',
    week: 'Week 6',
    weekTitle: 'The Body Corporate',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 6 — The Body Corporate</div>
          <div class="week-session">Session 29 of 30 &nbsp;·&nbsp; Screen 111 of 114</div>
        </div>
        <span class="screen-badge badge-practice">Practice</span>
        <h1 class="screen-title">My one brave step.</h1>
        <p class="screen-body-text">Identify one specific, real, low-stakes outward action — to be taken within the next seven days. Not a plan. Not an intention. A specific action with a specific person or community named.</p>
        <div class="practice-prompt">What I will do:</div>
        <input type="text" class="practice-input" id="input-S-111a"
          placeholder="Specific action — a message, a reply, showing up somewhere, asking one question…"
          value="${(state.answers['S-111'] || {}).action || ''}"
          oninput="saveAnswerKey('S-111', 'action', this.value)">
        <div class="practice-prompt">To whom or where:</div>
        <input type="text" class="practice-input" id="input-S-111b"
          placeholder="Name the specific person or community…"
          value="${(state.answers['S-111'] || {}).who || ''}"
          oninput="saveAnswerKey('S-111', 'who', this.value)">
        <div class="practice-prompt">Roughly when:</div>
        <input type="text" class="practice-input" id="input-S-111c"
          placeholder="This week — be specific if you can…"
          value="${(state.answers['S-111'] || {}).when || ''}"
          oninput="saveAnswerKey('S-111', 'when', this.value)">
        <div class="benne-bar" style="margin-top:0.5rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Small and real is better than grand and imagined. This is the program's first commitment to action that extends beyond the screen. Week 7 will ask you what happened.</div>
          </div>
        </div>
        <div class="clinical-note">This brave step commitment is saved. Week 7 opens by asking what happened — whatever the outcome, it is useful information.</div>
      </div>
    `
  },

  // --- SESSION 30: The scripture anchor (S-112 to S-114) ---

  {
    id: 'S-112',
    session: 'Session 30',
    sessionTitle: 'The scripture anchor',
    week: 'Week 6',
    weekTitle: 'The Body Corporate',
    badge: 'bridge',
    badgeLabel: 'Bridge',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 6 — The Body Corporate</div>
          <div class="week-session">Session 30 of 30 &nbsp;·&nbsp; Screen 112 of 114</div>
        </div>
        <span class="screen-badge badge-bridge">Ancient Company</span>
        <h1 class="screen-title">Bearing weight together.</h1>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">The Book of Psalms is not merely ancient literature preserved by human appreciation. These sacred writings were inspired by God, Jehovah — recorded by faithful servants whose words were guided by a purpose far greater than their own, and whose lives became living testimonies of His loving kindness. The psalmists wrote from real moments of danger, fear, and deep distress — times when Jehovah protected them, helped them, and never abandoned them, even in life-and-death situations. Carefully copied by devoted scribes and sung in worship across generations, these writings have been preserved because Jehovah ensured that these testimonies would reach every person who would need them — including you, at this very moment.</div>
          </div>
        </div>
        <p class="screen-body-text">Something has been on my mind this week as we built the circle map and talked about reaching out. There is a passage that says something so straightforward about human community that it almost sounds simple. But I have been thinking about how much courage it actually requires to live it. Read the next screen slowly.</p>
      </div>
    `
  },

  {
    id: 'S-113',
    session: 'Session 30',
    sessionTitle: 'The scripture anchor',
    week: 'Week 6',
    weekTitle: 'The Body Corporate',
    badge: 'anchor',
    badgeLabel: 'Scripture',
    render: () => `
      <div class="screen">
        <div class="scripture-screen">
          <div class="scripture-ref">Galatians 6:2 &nbsp;·&nbsp; NLT</div>
          <p class="scripture-text">
            "Share each other's burdens,<br>
            and in this way obey the law of Christ."
          </p>
          <div class="scripture-divider"></div>
          <div class="scripture-translation-note">New Living Translation</div>
        </div>
      </div>
    `
  },

  {
    id: 'S-114',
    session: 'Session 30',
    sessionTitle: 'The scripture anchor',
    week: 'Week 6',
    weekTitle: 'The Body Corporate',
    badge: 'close',
    badgeLabel: 'Week 6 Complete',
    render: () => `
      <div class="screen">
        <div class="week-complete">
          <div class="week-complete-icon">&#10022;</div>
          <h1 class="week-complete-title">You made it through Week 6.</h1>
          <p class="week-complete-text">
            Six weeks ago you arrived here feeling invisible — present in rooms but not truly known in them. Look at what you have built since then. A tree with real roots. A circle map with real names. A brave step written down and waiting to be taken.
          </p>
          <div class="insight-block" style="text-align:left;margin-bottom:1.5rem">
            <p class="screen-body-text" style="margin-bottom:0">"Share each other's burdens." That assumes something: that you are willing to let someone know you have weight to carry. You have been letting this program know for six weeks. That is not a small thing. You are more ready than you think.</p>
          </div>
          <div class="benne-bar" style="text-align:left;margin-bottom:2rem">
            <div class="benne-avatar"></div>
            <div class="benne-content">
              <div class="benne-name">Benne Hart</div>
              <div class="benne-text">Week 7 takes you somewhere unexpected: after six weeks of moving toward people, it teaches you to be alone differently. Not as a wound. As a practice. As the foundation that makes everything else possible.</div>
            </div>
          </div>
          <button class="save-btn" onclick="saveProgress()">&#10003; &nbsp; Save Progress</button>
        </div>
      </div>
    `
  }
,

  // ============================================================
  // WEEK 7 — THE SOLITUDE ARCHITECT (Screens 115–133)
  // ============================================================

  // --- SESSION 31: The brave step check-in (S-115 to S-117) ---

  {
    id: 'S-115',
    session: 'Session 31',
    sessionTitle: 'The brave step check-in',
    week: 'Week 7',
    weekTitle: 'The Solitude Architect',
    badge: 'practice',
    badgeLabel: 'Check-In',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 7 — The Solitude Architect</div>
          <div class="week-session">Session 31 of 35 &nbsp;·&nbsp; Screen 115 of 133</div>
        </div>
        <span class="screen-badge badge-practice">Check-In</span>
        <h1 class="screen-title">What happened with your brave step?</h1>
        <div id="brave-step-recall"></div>
        <p class="screen-body-text">Seven days have passed since you made a commitment. Whatever happened is useful information — it does not have to have gone well to be worth examining.</p>
        <div class="choice-list">
          ${[
            { id: 'a', text: 'I did it. It went better than I feared.' },
            { id: 'b', text: 'I did it. It was awkward but I did it.' },
            { id: 'c', text: 'I did it. The response was not what I hoped for.' },
            { id: 'd', text: 'I started to and stopped. Almost.' },
            { id: 'e', text: 'I did not do it. The week got difficult.' },
            { id: 'f', text: 'I did not do it. I am not ready yet.' }
          ].map(opt => `
            <button class="choice-item ${state.answers['S-115'] === opt.id ? 'selected' : ''}"
              onclick="selectChoice('S-115', '${opt.id}', this)">
              <div class="choice-radio"></div>
              <span class="choice-text">${opt.text}</span>
            </button>
          `).join('')}
        </div>
        <script>
          (function() {
            var step = state.answers['S-111'] || {};
            if (step.action || step.who) {
              document.getElementById('brave-step-recall').innerHTML =
                '<div class="clinical-note" style="margin-bottom:1.25rem">' +
                '<strong style="color:var(--teal)">Your Week 6 commitment:</strong>' +
                (step.action ? '<div style="margin-top:6px;font-size:13px;color:var(--text-secondary)">' + step.action + '</div>' : '') +
                (step.who ? '<div style="font-size:12px;color:var(--text-muted);margin-top:3px">With: ' + step.who + '</div>' : '') +
                (step.when ? '<div style="font-size:12px;color:var(--text-muted)">When: ' + step.when + '</div>' : '') +
                '</div>';
            }
          })();
        </script>
      </div>
    `
  },

  {
    id: 'S-116',
    session: 'Session 31',
    sessionTitle: 'The brave step check-in',
    week: 'Week 7',
    weekTitle: 'The Solitude Architect',
    badge: 'insight',
    badgeLabel: 'Insight',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 7 — The Solitude Architect</div>
          <div class="week-session">Session 31 of 35 &nbsp;·&nbsp; Screen 116 of 133</div>
        </div>
        <span class="screen-badge badge-insight">Insight</span>
        <h1 class="screen-title">Every outcome is information.</h1>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">If it went well — that is evidence. Evidence against the story that said connection was impossible for you specifically. If it went badly or you did not do it — that is also information. Information about what makes it hard, what still needs attention, what the next smaller step might be. There is no wrong outcome from a brave step. There is only data.</div>
          </div>
        </div>
        <div class="insight-block">
          <p class="screen-body-text" style="margin-bottom:0">Behavioral activation research<a class="cite" title="Martell, behavioral activation">&#185;</a> consistently shows that the response to action — whether positive or negative — produces more useful learning than continued planning. You have already learned something this week that you could not have learned from inside this screen. Whatever it was, it belongs in your building materials for Week 8.</p>
          <div class="insight-source">&#185; Martell et al., behavioral activation framework</div>
        </div>
      </div>
    `
  },

  {
    id: 'S-117',
    session: 'Session 31',
    sessionTitle: 'The brave step check-in',
    week: 'Week 7',
    weekTitle: 'The Solitude Architect',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 7 — The Solitude Architect</div>
          <div class="week-session">Session 31 of 35 &nbsp;·&nbsp; Screen 117 of 133</div>
        </div>
        <span class="screen-badge badge-practice">Practice</span>
        <h1 class="screen-title">What I learned.</h1>
        <div class="practice-prompt">What the brave step taught me — whatever happened:</div>
        <textarea class="practice-textarea" id="input-S-117"
          placeholder="What did you learn about yourself, about the other person, about what makes connection hard or possible for you?"
          oninput="saveAnswer('S-117', this.value)"
        >${state.answers['S-117'] || ''}</textarea>
        <div class="benne-bar" style="margin-top:1rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">This learning goes into your Week 8 plan. You are not building from theory anymore. You are building from experience. That is a different and much stronger foundation.</div>
          </div>
        </div>
      </div>
    `
  },

  // --- SESSION 32: Solitude vs loneliness (S-118 to S-120) ---

  {
    id: 'S-118',
    session: 'Session 32',
    sessionTitle: 'Solitude vs loneliness',
    week: 'Week 7',
    weekTitle: 'The Solitude Architect',
    badge: 'story',
    badgeLabel: 'Story',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 7 — The Solitude Architect</div>
          <div class="week-session">Session 32 of 35 &nbsp;·&nbsp; Screen 118 of 133</div>
        </div>
        <span class="screen-badge badge-story">Story</span>
        <h1 class="screen-title">The first Sunday that felt different.</h1>
        <div class="story-block">
          <div class="story-character">Marcus — returning from Weeks 1 and 5</div>
          <p class="story-text">Marcus — from Week 1, who checked his phone so he had somewhere to look; from Week 5, who discovered he sounded like a different person when asked the right questions — wakes alone on a Sunday morning. The familiar inventory does not run automatically. He notices the quiet differently than before.</p>
          <p class="story-text" style="margin-top:1rem">It is still quiet. He is still alone. But the quality of the alone is different. He is not waiting for the phone to ring. He is making coffee. Reading slowly. Being present to his own life rather than measuring it against an absence. He does not know the word for this yet. The word is solitude.</p>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">This is unexpected, I know. After six weeks of building the tree, mapping the circles, sending the message — Week 7 asks you to learn how to be alone. Not as a wound. As a practice. The capacity for true solitude is what makes genuine community possible. You cannot bring your full self to others if you have never learned to be with your full self.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-119',
    session: 'Session 32',
    sessionTitle: 'Solitude vs loneliness',
    week: 'Week 7',
    weekTitle: 'The Solitude Architect',
    badge: 'insight',
    badgeLabel: 'Insight',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 7 — The Solitude Architect</div>
          <div class="week-session">Session 32 of 35 &nbsp;·&nbsp; Screen 119 of 133</div>
        </div>
        <span class="screen-badge badge-insight">Insight</span>
        <h1 class="screen-title">The difference that changes everything.</h1>
        <div class="insight-block">
          <p class="screen-body-text" style="margin-bottom:1rem">Ester Buchholz<a class="cite" title="Buchholz, The Call of Solitude, 1997">&#178;</a> argued that solitude — genuine, chosen aloneness — is as fundamental a human need as connection. The two are not opposites. They are complements. A person who cannot be alone cannot be genuinely present to others — they bring their emptiness into every room and try to fill it there.</p>
          <p class="screen-body-text" style="margin-bottom:0">Matthew Crawford<a class="cite" title="Crawford, The World Beyond Your Head, 2015">&#179;</a> and Sherry Turkle<a class="cite" title="Turkle, Alone Together, 2011">&#8308;</a> independently documented how the erosion of solitude — through constant connectivity, device dependency, ambient noise — has degraded the capacity for both deep thought and genuine presence. Learning to be alone, genuinely, restores something that most modern adults have quietly lost.</p>
          <div class="insight-source">&#178; Buchholz (1997) &nbsp; &#179; Crawford (2015) &nbsp; &#8308; Turkle, <em>Alone Together</em> (2011)</div>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Loneliness is unchosen, depleting, empty. Solitude is chosen, restorative, full. You have been living in the first. This week we practice the second.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-120',
    session: 'Session 32',
    sessionTitle: 'Solitude vs loneliness',
    week: 'Week 7',
    weekTitle: 'The Solitude Architect',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 7 — The Solitude Architect</div>
          <div class="week-session">Session 32 of 35 &nbsp;·&nbsp; Screen 120 of 133</div>
        </div>
        <span class="screen-badge badge-practice">Practice</span>
        <h1 class="screen-title">What solitude currently feels like.</h1>
        <p class="screen-body-text">Before we build new solitude practices, name honestly where you currently are with being alone.</p>
        <div class="choice-list">
          ${[
            { id: 'a', text: 'Being alone is mostly painful. I try to fill the silence whenever I can.' },
            { id: 'b', text: 'Being alone is tolerable but not restoring. It is neutral at best.' },
            { id: 'c', text: 'I sometimes experience moments of genuine solitude but they are rare.' },
            { id: 'd', text: 'I have a complicated relationship with being alone — sometimes fine, sometimes devastating.' },
            { id: 'e', text: 'I am beginning to sense the difference but I am not there yet.' }
          ].map(opt => `
            <button class="choice-item ${state.answers['S-120'] === opt.id ? 'selected' : ''}"
              onclick="selectChoice('S-120', '${opt.id}', this)">
              <div class="choice-radio"></div>
              <span class="choice-text">${opt.text}</span>
            </button>
          `).join('')}
        </div>
        <div class="benne-bar" style="margin-top:1.5rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Wherever you are is the right starting point. Solitude is a practice — it is built, not suddenly arrived at. We are going to build it deliberately this week.</div>
          </div>
        </div>
      </div>
    `
  },

  // --- SESSION 33: The neuroscience of solitude (S-121 to S-123) ---

  {
    id: 'S-121',
    session: 'Session 33',
    sessionTitle: 'The neuroscience of solitude',
    week: 'Week 7',
    weekTitle: 'The Solitude Architect',
    badge: 'story',
    badgeLabel: 'Story',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 7 — The Solitude Architect</div>
          <div class="week-session">Session 33 of 35 &nbsp;·&nbsp; Screen 121 of 133</div>
        </div>
        <span class="screen-badge badge-story">Story</span>
        <h1 class="screen-title">The walk without the phone.</h1>
        <div class="story-block">
          <div class="story-character">Elena — returning from Week 1</div>
          <p class="story-text">Elena — from Week 1, who sat alone on her birthday watching the light — takes a walk one evening without her phone. It lasts eleven minutes. For the first four she is restless — reaching for the phone that is not there, composing texts in her head, reviewing the day.</p>
          <p class="story-text" style="margin-top:1rem">Then something shifts. The restlessness settles. She begins to notice: the quality of light on a wall, the sound of her own footsteps, a thought she has not had in years arriving without being summoned. She returns home feeling something she cannot name — fuller, somehow, than when she left. And entirely alone the whole time.</p>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">What Elena experienced in those eleven minutes is what Daniel Siegel calls "open awareness" — the mind freed from task and input, allowed to consolidate, integrate, and restore. The restlessness is not failure. It is the noise leaving before the quiet arrives.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-122',
    session: 'Session 33',
    sessionTitle: 'The neuroscience of solitude',
    week: 'Week 7',
    weekTitle: 'The Solitude Architect',
    badge: 'insight',
    badgeLabel: 'Insight',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 7 — The Solitude Architect</div>
          <div class="week-session">Session 33 of 35 &nbsp;·&nbsp; Screen 122 of 133</div>
        </div>
        <span class="screen-badge badge-insight">Insight</span>
        <h1 class="screen-title">What the brain does when you stop filling the silence.</h1>
        <div class="insight-block">
          <p class="screen-body-text" style="margin-bottom:1rem">Neuroscientist Daniel Siegel's<a class="cite" title="Siegel, Mindsight, 2010">&#8309;</a> research on integration and the default mode network shows that the brain requires periods of unprompted quiet to consolidate memory, integrate experience, and regulate emotion. The mind that is always consuming — always scrolling, always connected — never gets the time to process what has happened to it.</p>
          <p class="screen-body-text" style="margin-bottom:0">Eric Klinenberg's sociological research on solo living<a class="cite" title="Klinenberg, Going Solo, 2012">&#8310;</a> found that people who live alone and have learned to manage solitude well report higher wellbeing than those who live alone and have not. The variable is not the aloneness. It is the relationship with the aloneness.</p>
          <div class="insight-source">&#8309; Daniel Siegel, <em>Mindsight</em> (2010) &nbsp; &#8310; Eric Klinenberg, <em>Going Solo</em> (2012)</div>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">The restlessness Elena felt in those first four minutes is what most people feel and immediately medicate with their phones. She waited it out. What came after the restlessness was the actual solitude. The medicine was not the silence. It was the willingness to stay in the silence long enough for the restlessness to pass through.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-123',
    session: 'Session 33',
    sessionTitle: 'The neuroscience of solitude',
    week: 'Week 7',
    weekTitle: 'The Solitude Architect',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 7 — The Solitude Architect</div>
          <div class="week-session">Session 33 of 35 &nbsp;·&nbsp; Screen 123 of 133</div>
        </div>
        <span class="screen-badge badge-practice">Practice</span>
        <h1 class="screen-title">My current noise habits.</h1>
        <p class="screen-body-text">Identify honestly how you currently fill silence. No judgment — naming the pattern is the first step to changing the relationship with it.</p>
        <div class="choice-list">
          ${[
            { id: 'a', text: 'Phone — scrolling, checking, composing messages I may not send.' },
            { id: 'b', text: 'Audio — podcasts, music, anything that keeps the quiet at bay.' },
            { id: 'c', text: 'Screen — television, streaming, something in the background.' },
            { id: 'd', text: 'Work — staying busy so I do not have to sit with myself.' },
            { id: 'e', text: 'Food or substances — filling the physical space of the quiet.' },
            { id: 'f', text: 'Multiple. I layer them.' }
          ].map(opt => `
            <button class="choice-item ${(state.answers['S-123'] || []).includes(opt.id) ? 'selected' : ''}"
              onclick="toggleMultiChoice('S-123', '${opt.id}', this)">
              <div class="choice-radio" style="border-radius:3px"></div>
              <span class="choice-text">${opt.text}</span>
            </button>
          `).join('')}
        </div>
        <div class="benne-bar" style="margin-top:1.5rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">These are not moral failures. They are coping strategies — some of them very sensible ones that became habits. We are not removing them. We are making a small amount of space around them.</div>
          </div>
        </div>
      </div>
    `
  },

  // --- SESSION 34: The solivagant toolkit (S-124 to S-129) ---

  {
    id: 'S-124',
    session: 'Session 34',
    sessionTitle: 'The solivagant toolkit',
    week: 'Week 7',
    weekTitle: 'The Solitude Architect',
    badge: 'insight',
    badgeLabel: 'Insight',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 7 — The Solitude Architect</div>
          <div class="week-session">Session 34 of 35 &nbsp;·&nbsp; Screen 124 of 133</div>
        </div>
        <span class="screen-badge badge-insight">Insight</span>
        <h1 class="screen-title">What the solivagant knows.</h1>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">A solivagant is someone who wanders alone — who has made peace with solitude enough to move through the world in it without it being painful. That is not a personality type you are born with. It is a relationship you build. The toolkit is simply the set of practices that make chosen aloneness restorative rather than depleting.</div>
          </div>
        </div>
        <div class="insight-block">
          <p class="screen-body-text" style="margin-bottom:0">Your toolkit is already partly built. You have your grounding practice from Screen 66. Your values from Screen 69. Your ground section from the tree. What we are doing now is assembling them into a daily architecture — a set of anchors that give shape to time spent alone.</p>
        </div>
        <div id="existing-toolkit"></div>
        <script>
          (function() {
            var parts = [];
            if (state.answers['S-66']) parts.push('<strong style="color:var(--teal)">Grounding practice (S-66):</strong> ' + state.answers['S-66'].substring(0, 80) + (state.answers['S-66'].length > 80 ? '...' : ''));
            var tree = state.answers['tree'] || {};
            if (tree.ground) parts.push('<strong style="color:var(--teal)">Your ground (Week 5):</strong> ' + tree.ground.substring(0, 80) + (tree.ground.length > 80 ? '...' : ''));
            if (parts.length > 0) {
              document.getElementById('existing-toolkit').innerHTML =
                '<div class="clinical-note" style="margin-top:1rem">' + parts.join('<br>') + '</div>';
            }
          })();
        </script>
      </div>
    `
  },

  {
    id: 'S-125',
    session: 'Session 34',
    sessionTitle: 'The solivagant toolkit',
    week: 'Week 7',
    weekTitle: 'The Solitude Architect',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 7 — The Solitude Architect</div>
          <div class="week-session">Session 34 of 35 &nbsp;·&nbsp; Screen 125 of 133</div>
        </div>
        <span class="screen-badge badge-practice">Toolkit — Daily Anchors</span>
        <h1 class="screen-title">My morning anchor.</h1>
        <p class="screen-body-text">A morning anchor is a brief, repeatable practice that begins your day in your own company rather than in the company of noise. Not a routine — an anchor. Something small enough to do every day, specific enough to be real.</p>
        <div class="insight-block" style="margin-bottom:1.25rem">
          <p class="screen-body-text" style="margin-bottom:0">Options that work: five minutes of complete silence before the phone. One page of writing. A short walk without audio. Sitting with coffee and looking out a window without any other input. Reading one page of something meaningful. The specificity matters more than the activity.</p>
        </div>
        <div class="practice-prompt">My morning anchor will be:</div>
        <input type="text" class="practice-input" id="input-S-125"
          placeholder="Specific and small — something you could do tomorrow morning…"
          value="${(state.answers['toolkit'] || {}).morning || ''}"
          oninput="saveAnswerKey('toolkit', 'morning', this.value)">
        <div class="benne-bar" style="margin-top:0.5rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Small and specific. Not "I will be more mindful." Something real you can do tomorrow before anything else.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-126',
    session: 'Session 34',
    sessionTitle: 'The solivagant toolkit',
    week: 'Week 7',
    weekTitle: 'The Solitude Architect',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 7 — The Solitude Architect</div>
          <div class="week-session">Session 34 of 35 &nbsp;·&nbsp; Screen 126 of 133</div>
        </div>
        <span class="screen-badge badge-practice">Toolkit — Technology</span>
        <h1 class="screen-title">My technology boundary.</h1>
        <p class="screen-body-text">Technology is not the enemy of solitude — but without intention it becomes the enemy of quiet. One specific, sustainable boundary is more powerful than a dramatic purge.</p>
        <div class="practice-prompt">My one technology boundary will be:</div>
        <input type="text" class="practice-input" id="input-S-126"
          placeholder="e.g. No phone for the first 20 minutes of the morning. Phone out of the bedroom. No scrolling after 9pm…"
          value="${(state.answers['toolkit'] || {}).tech || ''}"
          oninput="saveAnswerKey('toolkit', 'tech', this.value)">
        <div class="benne-bar" style="margin-top:0.5rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">One boundary you can actually keep is worth ten you cannot. Make it specific. Make it sustainable.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-127',
    session: 'Session 34',
    sessionTitle: 'The solivagant toolkit',
    week: 'Week 7',
    weekTitle: 'The Solitude Architect',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 7 — The Solitude Architect</div>
          <div class="week-session">Session 34 of 35 &nbsp;·&nbsp; Screen 127 of 133</div>
        </div>
        <span class="screen-badge badge-practice">Toolkit — Restorative Practice</span>
        <h1 class="screen-title">My restorative practice.</h1>
        <p class="screen-body-text">A restorative practice is something you do alone that genuinely fills you — that you return from feeling more like yourself than when you left. Not productivity. Not obligation. Something that restores.</p>
        <div class="practice-prompt">My restorative practice is:</div>
        <input type="text" class="practice-input" id="input-S-127"
          placeholder="Walking. Reading. Cooking slowly. A creative practice. Being in nature. Writing. Something that restores you…"
          value="${(state.answers['toolkit'] || {}).restore || ''}"
          oninput="saveAnswerKey('toolkit', 'restore', this.value)">
        <div class="practice-prompt" style="margin-top:0.75rem">How often and for how long:</div>
        <input type="text" class="practice-input" id="input-S-127b"
          placeholder="Realistic frequency and duration — not aspirational…"
          value="${(state.answers['toolkit'] || {}).restore_freq || ''}"
          oninput="saveAnswerKey('toolkit', 'restore_freq', this.value)">
        <div class="benne-bar" style="margin-top:0.5rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">This is not a luxury. It is maintenance. A person who never restores gradually has less and less to bring to others. Your restorative practice is part of how you sustain connection.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-128',
    session: 'Session 34',
    sessionTitle: 'The solivagant toolkit',
    week: 'Week 7',
    weekTitle: 'The Solitude Architect',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 7 — The Solitude Architect</div>
          <div class="week-session">Session 34 of 35 &nbsp;·&nbsp; Screen 128 of 133</div>
        </div>
        <span class="screen-badge badge-practice">Toolkit — Complete</span>
        <h1 class="screen-title">My solivagant toolkit.</h1>
        <div class="benne-bar" style="margin-bottom:1.5rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">This is your architecture for being alone without being lonely. It goes into your Week 8 rhythm — the full life plan you will build at the end of this program.</div>
          </div>
        </div>
        <div id="toolkit-display"></div>
        <script>
          (function() {
            var t = state.answers['toolkit'] || {};
            var g66 = state.answers['S-66'];
            var parts = [];
            if (t.morning) parts.push({label:'Morning anchor', val:t.morning, color:'var(--teal-dim)', border:'var(--teal-border)', tc:'var(--teal)'});
            if (t.tech) parts.push({label:'Technology boundary', val:t.tech, color:'rgba(201,168,76,0.1)', border:'rgba(201,168,76,0.25)', tc:'var(--gold)'});
            if (t.restore) parts.push({label:'Restorative practice', val:t.restore + (t.restore_freq ? ' — ' + t.restore_freq : ''), color:'rgba(91,130,191,0.1)', border:'rgba(91,130,191,0.2)', tc:'#7BA3D4'});
            if (g66) parts.push({label:'Grounding practice (from S-66)', val:g66.substring(0,100) + (g66.length>100?'...':''), color:'rgba(212,130,106,0.08)', border:'rgba(212,130,106,0.2)', tc:'var(--coral)'});
            var container = document.getElementById('toolkit-display');
            if (parts.length === 0) {
              container.innerHTML = '<div class="clinical-note">Complete Screens 125, 126, and 127 to build your toolkit here.</div>';
            } else {
              container.innerHTML = '<div style="display:flex;flex-direction:column;gap:10px">' +
                parts.map(function(p){
                  return '<div style="padding:12px 14px;border-radius:10px;background:'+p.color+';border:1px solid '+p.border+'">' +
                    '<div style="font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:'+p.tc+';margin-bottom:5px">'+p.label+'</div>' +
                    '<p style="font-size:13px;color:var(--text-secondary);line-height:1.6;font-weight:300">'+p.val+'</p></div>';
                }).join('') + '</div>';
            }
          })();
        </script>
      </div>
    `
  },

  {
    id: 'S-129',
    session: 'Session 34',
    sessionTitle: 'The solivagant toolkit',
    week: 'Week 7',
    weekTitle: 'The Solitude Architect',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 7 — The Solitude Architect</div>
          <div class="week-session">Session 34 of 35 &nbsp;·&nbsp; Screen 129 of 133</div>
        </div>
        <span class="screen-badge badge-practice">Practice</span>
        <h1 class="screen-title">Life not on hold.</h1>
        <p class="screen-body-text">One of the most insidious effects of chronic loneliness is the "when then" pattern — when I have friends, then I will travel. When I belong somewhere, then I will take up the creative practice. When I am not lonely, then I will start living fully.</p>
        <div class="insight-block" style="margin-bottom:1.25rem">
          <p class="screen-body-text" style="margin-bottom:0">Research on life satisfaction consistently shows that deferred living — holding the full life in reserve until some condition is met — is one of the strongest predictors of regret. You do not have to wait for the loneliness to be resolved before you begin the life you want. The life you want is part of what resolves the loneliness.</p>
        </div>
        <div class="practice-prompt">One thing I have been putting on hold until connection arrives:</div>
        <input type="text" class="practice-input" id="input-S-129a"
          placeholder="A place, a practice, an experience, a version of yourself you have been saving for later…"
          value="${(state.answers['S-129'] || {}).hold || ''}"
          oninput="saveAnswerKey('S-129', 'hold', this.value)">
        <div class="practice-prompt" style="margin-top:0.75rem">One step I could take toward it this week, alone:</div>
        <input type="text" class="practice-input" id="input-S-129b"
          placeholder="Specific. Small. This week. Alone is allowed."
          value="${(state.answers['S-129'] || {}).step || ''}"
          oninput="saveAnswerKey('S-129', 'step', this.value)">
        <div class="benne-bar" style="margin-top:0.5rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">You are allowed to begin. You do not need to wait.</div>
          </div>
        </div>
      </div>
    `
  },

  // --- SESSION 35: The scripture anchor (S-130 to S-133) ---

  {
    id: 'S-130',
    session: 'Session 35',
    sessionTitle: 'The scripture anchor',
    week: 'Week 7',
    weekTitle: 'The Solitude Architect',
    badge: 'story',
    badgeLabel: 'Story',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 7 — The Solitude Architect</div>
          <div class="week-session">Session 35 of 35 &nbsp;·&nbsp; Screen 130 of 133</div>
        </div>
        <span class="screen-badge badge-story">Story</span>
        <h1 class="screen-title">Through the valley — not around it.</h1>
        <div class="story-block">
          <div class="story-character">Nadia — returning from Weeks 2, 4, and 6</div>
          <p class="story-text">Nadia — from Week 2 exhausted by the morning inventory; from Week 4 standing at her kitchen window changed; from Week 6 somewhere between where she was and where she is going — sits alone at the end of a long week. The loneliness is not gone. But she is not the same person who arrived here seven weeks ago.</p>
          <p class="story-text" style="margin-top:1rem">She knows the loop now. She knows her dominant story. She has named the lie. She has her tree. She has sent one brave message. She has a toolkit. The valley is not over. But she knows she is in it — not lost in it. There is a difference. Someone told her about that difference a long time ago. She is beginning to understand what they meant.</p>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">There is a psalm that has been with me this whole week as I have thought about solitude and the valley. It does not promise the valley ends. It promises something better: that you are not alone in it. Read the next screen slowly.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-131',
    session: 'Session 35',
    sessionTitle: 'The scripture anchor',
    week: 'Week 7',
    weekTitle: 'The Solitude Architect',
    badge: 'bridge',
    badgeLabel: 'Bridge',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 7 — The Solitude Architect</div>
          <div class="week-session">Session 35 of 35 &nbsp;·&nbsp; Screen 131 of 133</div>
        </div>
        <span class="screen-badge badge-bridge">Ancient Company</span>
        <h1 class="screen-title">Not alone in the valley.</h1>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">The Book of Psalms is not merely ancient literature preserved by human appreciation. These sacred writings were inspired by God, Jehovah — recorded by faithful servants whose words were guided by a purpose far greater than their own, and whose lives became living testimonies of His loving kindness. The psalmists wrote from real moments of danger, fear, and deep distress — times when Jehovah protected them, helped them, and never abandoned them, even in life-and-death situations. Carefully copied by devoted scribes and sung in worship across generations, these writings have been preserved because Jehovah ensured that these testimonies would reach every person who would need them — including you, at this very moment.</div>
          </div>
        </div>
        <p class="screen-body-text">Psalm 23 is perhaps the most well-known psalm in human history. It has been translated into more languages than almost any other piece of writing. The reason is not that it is poetically beautiful. The reason is that it tells the truth about the valley — and about what walks through it with you.</p>
        <p class="screen-body-text">Read the next screen slowly. Give it everything you have been carrying for seven weeks.</p>
      </div>
    `
  },

  {
    id: 'S-132',
    session: 'Session 35',
    sessionTitle: 'The scripture anchor',
    week: 'Week 7',
    weekTitle: 'The Solitude Architect',
    badge: 'anchor',
    badgeLabel: 'Scripture',
    render: () => `
      <div class="screen">
        <div class="scripture-screen">
          <div class="scripture-ref">Psalm 23:4 &nbsp;·&nbsp; NLT</div>
          <p class="scripture-text">
            "Even when I walk<br>
            through the darkest valley,<br>
            I will not be afraid,<br>
            for you are close beside me.<br>
            Your rod and your staff<br>
            protect and comfort me."
          </p>
          <div class="scripture-divider"></div>
          <div class="scripture-translation-note">New Living Translation</div>
        </div>
      </div>
    `
  },

  {
    id: 'S-133',
    session: 'Session 35',
    sessionTitle: 'The scripture anchor',
    week: 'Week 7',
    weekTitle: 'The Solitude Architect',
    badge: 'close',
    badgeLabel: 'Week 7 Complete',
    render: () => `
      <div class="screen">
        <div class="week-complete">
          <div class="week-complete-icon">&#10022;</div>
          <h1 class="week-complete-title">You made it through Week 7.</h1>
          <p class="week-complete-text">
            Week 7 asked something counterintuitive: after six weeks of building toward others, to learn how to be alone — genuinely, restoratively, without the phone and without the noise. You named where you are with solitude. You built a toolkit. You chose a morning anchor. You took something off hold.
          </p>
          <div class="insight-block" style="text-align:left;margin-bottom:1.5rem">
            <p class="screen-body-text" style="margin-bottom:0">"Even when I walk through the darkest valley, I will not be afraid — for you are close beside me." That is not a promise that the valley ends on schedule. It is something better: a presence that does not leave you alone in it. You have walked through seven weeks of this valley. One week remains. And the new song is waiting.</p>
          </div>
          <div class="benne-bar" style="text-align:left;margin-bottom:2rem">
            <div class="benne-avatar"></div>
            <div class="benne-content">
              <div class="benne-name">Benne Hart</div>
              <div class="benne-text">Week 8 is the new song. Everything you planted — every seed, every answer, every brave thing you wrote in this program — comes home. Rest here. Save your progress. You are almost through.</div>
            </div>
          </div>
          <button class="save-btn" onclick="saveProgress()">&#10003; &nbsp; Save Progress</button>
        </div>
      </div>
    `
  }
,

  // ============================================================
  // WEEK 8 — THE NEW SONG (Screens 134–150)
  // ============================================================

  // --- SESSION 36: All four return (S-134 to S-136) ---

  {
    id: 'S-134',
    session: 'Session 36',
    sessionTitle: 'All four return',
    week: 'Week 8',
    weekTitle: 'The New Song',
    badge: 'story',
    badgeLabel: 'Story',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 8 — The New Song</div>
          <div class="week-session">Session 36 of 40 &nbsp;·&nbsp; Screen 134 of 150</div>
        </div>
        <span class="screen-badge badge-story">Story</span>
        <h1 class="screen-title">The four who walked through it.</h1>
        <div class="story-block">
          <div class="story-character">Nadia, Marcus, Ama, Elena — all returning</div>
          <p class="story-text">Four people began this program in different places. Nadia, exhausted before the day started. Marcus, checking his phone so he had somewhere to look. Ama, leaving the gathering early, certain no one had noticed. Elena, watching the light on her birthday, alone.</p>
          <p class="story-text" style="margin-top:1rem">None of them is finished with loneliness. The ache has not been surgically removed. But each of them knows something now they did not know eight weeks ago. They have a tree. They have a circle map. They have sent at least one brave message. They have a toolkit. They know the name of the lie. They have found one exception to the story that said connection was impossible.</p>
          <p class="story-text" style="margin-top:1rem">That is not nothing. That is a completely different foundation to stand on.</p>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Welcome to Week 8. This is not the end of the journey. It is the beginning of a different chapter — one where you have better materials to build with. This week we harvest everything that was planted.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-135',
    session: 'Session 36',
    sessionTitle: 'All four return',
    week: 'Week 8',
    weekTitle: 'The New Song',
    badge: 'insight',
    badgeLabel: 'Insight',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 8 — The New Song</div>
          <div class="week-session">Session 36 of 40 &nbsp;·&nbsp; Screen 135 of 150</div>
        </div>
        <span class="screen-badge badge-insight">Insight</span>
        <h1 class="screen-title">What eight weeks actually builds.</h1>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">This program has not been therapy. It has not been a cure. It has been eight weeks of honest looking — at the pain, at the story, at the lie, at the tree, at the circles, at the solitude, at the valley. And honest looking, consistently done, changes the person who does it. Not because they suddenly feel better. Because they see differently.</div>
          </div>
        </div>
        <div class="insight-block">
          <p class="screen-body-text" style="margin-bottom:1rem">Post-traumatic growth research<a class="cite" title="Tedeschi & Calhoun, 1996">&#185;</a> consistently shows that the people who report the greatest long-term wellbeing gains from programs like this are not those who felt the most positive during it — but those who engaged most honestly. You have been engaging honestly for eight weeks. That is the whole mechanism.</p>
          <p class="screen-body-text" style="margin-bottom:0">Week 8 does not add new insight. It assembles what is already there. It builds the plan. It writes the declaration. It receives the certificate. And it sings — in whatever way is yours — the new song.</p>
          <div class="insight-source">&#185; Tedeschi &amp; Calhoun (1996), post-traumatic growth research</div>
        </div>
      </div>
    `
  },

  {
    id: 'S-136',
    session: 'Session 36',
    sessionTitle: 'All four return',
    week: 'Week 8',
    weekTitle: 'The New Song',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 8 — The New Song</div>
          <div class="week-session">Session 36 of 40 &nbsp;·&nbsp; Screen 136 of 150</div>
        </div>
        <span class="screen-badge badge-practice">Practice</span>
        <h1 class="screen-title">Where I am now.</h1>
        <p class="screen-body-text">Before the harvest — an honest check-in. Not where you expected to be. Not where you wished you were. Where you actually are.</p>
        <div class="choice-list">
          ${[
            { id: 'a', text: 'I feel genuinely different from when I started. Something has shifted.' },
            { id: 'b', text: 'I understand myself better. The feeling is still present but I see it differently.' },
            { id: 'c', text: 'I have made some progress but the loneliness is still significant.' },
            { id: 'd', text: 'It has been harder than expected. I am still in the middle of it.' },
            { id: 'e', text: 'I am not sure how to measure it. I just kept showing up.' }
          ].map(opt => `
            <button class="choice-item ${state.answers['S-136'] === opt.id ? 'selected' : ''}"
              onclick="selectChoice('S-136', '${opt.id}', this)">
              <div class="choice-radio"></div>
              <span class="choice-text">${opt.text}</span>
            </button>
          `).join('')}
        </div>
        <div class="benne-bar" style="margin-top:1.5rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">Every one of those answers is a valid ending. The program was not designed to produce a specific feeling. It was designed to produce a different relationship with the feeling you have. Whatever you chose — you kept showing up. That is the whole thing.</div>
          </div>
        </div>
      </div>
    `
  },

  // --- SESSION 37: The BEYOND method (S-137 to S-141) ---

  {
    id: 'S-137',
    session: 'Session 37',
    sessionTitle: 'The BEYOND method',
    week: 'Week 8',
    weekTitle: 'The New Song',
    badge: 'insight',
    badgeLabel: 'Insight',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 8 — The New Song</div>
          <div class="week-session">Session 37 of 40 &nbsp;·&nbsp; Screen 137 of 150</div>
        </div>
        <span class="screen-badge badge-insight">Insight</span>
        <h1 class="screen-title">What to do when the feeling arrives.</h1>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">The loneliness will return. Not because you failed — because it is a signal, and signals recur. What changes is not the signal but what you do with it. The BEYOND method is a six-step practice that assembles everything you have built across eight weeks into a single response protocol. It is yours. It is personalised. It is built from your actual answers.</div>
          </div>
        </div>
        <div class="insight-block">
          <p class="screen-body-text" style="margin-bottom:0">
            <strong style="color:var(--teal)">B</strong> — Body: locate the feeling physically. Where is it?<br>
            <strong style="color:var(--teal)">E</strong> — Examine: name the passenger thought. What is it saying?<br>
            <strong style="color:var(--teal)">Y</strong> — You: defuse it. "I notice I am having the thought that..."<br>
            <strong style="color:var(--teal)">O</strong> — Orient: name one value. What do I actually care about?<br>
            <strong style="color:var(--teal)">N</strong> — Next: choose one small action aligned with that value.<br>
            <strong style="color:var(--teal)">D</strong> — Defuse and ground: use your grounding practice. Breathe around it.
          </p>
        </div>
      </div>
    `
  },

  {
    id: 'S-138',
    session: 'Session 37',
    sessionTitle: 'The BEYOND method',
    week: 'Week 8',
    weekTitle: 'The New Song',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 8 — The New Song</div>
          <div class="week-session">Session 37 of 40 &nbsp;·&nbsp; Screen 138 of 150</div>
        </div>
        <span class="screen-badge badge-practice">Practice</span>
        <h1 class="screen-title">Your personalised BEYOND card.</h1>
        <div id="beyond-card"></div>
        <div class="clinical-note" style="margin-top:1rem">This card is built from your actual answers throughout the program. Save this screen or screenshot it — it is your personal response protocol for when the feeling returns.</div>
        <script>
          (function() {
            var s63 = state.answers['S-63'] || {};
            var s66 = state.answers['S-66'] || '';
            var s69 = state.answers['S-69'] || [];
            var s09 = state.answers['S-09'] || [];
            var passenger = s63.thought || 'Your loudest passenger thought';
            var pname = s63.name || 'The Passenger';
            var defuse = s63.defuse || 'I notice I am having the thought that...';
            var values = s69.length > 0 ? s69.slice(0,3).join(', ') : 'Your chosen values';
            var body = s09.length > 0 ? s09.join(', ') : 'chest, shoulders, or stomach';
            var ground = s66 ? s66.substring(0,60) + (s66.length>60?'...':'') : 'Breathe around the feeling. Give it space.';
            document.getElementById('beyond-card').innerHTML =
              '<div style="display:flex;flex-direction:column;gap:8px">' +
              [
                {letter:'B', label:'Body', val:'Notice where you feel it: ' + body},
                {letter:'E', label:'Examine', val:'The passenger (' + pname + ') says: "' + passenger.substring(0,60) + (passenger.length>60?'...' : '') + '"'},
                {letter:'Y', label:'You', val:defuse.substring(0,80) + (defuse.length>80?'...':'')},
                {letter:'O', label:'Orient', val:'My values: ' + values},
                {letter:'N', label:'Next', val:'One small action aligned with what I care about'},
                {letter:'D', label:'Defuse & Ground', val:ground}
              ].map(function(row) {
                return '<div style="display:grid;grid-template-columns:32px 80px 1fr;gap:8px;align-items:start;padding:10px 12px;background:var(--bg-card);border:1px solid var(--border);border-radius:8px">' +
                  '<div style="font-size:18px;font-weight:700;color:var(--teal);font-family:var(--font-serif)">' + row.letter + '</div>' +
                  '<div style="font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--text-muted);padding-top:3px">' + row.label + '</div>' +
                  '<div style="font-size:12px;color:var(--text-secondary);line-height:1.5;font-weight:300">' + row.val + '</div>' +
                  '</div>';
              }).join('') + '</div>';
          })();
        </script>
      </div>
    `
  },

  {
    id: 'S-139',
    session: 'Session 37',
    sessionTitle: 'The BEYOND method',
    week: 'Week 8',
    weekTitle: 'The New Song',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 8 — The New Song</div>
          <div class="week-session">Session 37 of 40 &nbsp;·&nbsp; Screen 139 of 150</div>
        </div>
        <span class="screen-badge badge-practice">Seed Harvest — S-13</span>
        <h1 class="screen-title">The signal sentence — transformed.</h1>
        <div id="signal-seed-display"></div>
        <p class="screen-body-text">Eight weeks ago you wrote what your loneliness might be signalling that you need. Read it. Then write what you understand now that you did not understand then.</p>
        <div class="practice-prompt">What I now understand my loneliness has been signalling:</div>
        <textarea class="practice-textarea" id="input-S-139"
          placeholder="Not just what you need — but what you now understand about the signal itself, and what you are doing about it…"
          oninput="saveAnswer('S-139', this.value)"
        >${state.answers['S-139'] || ''}</textarea>
        <div class="benne-bar" style="margin-top:1rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">The signal has not changed. You have changed. And a different person receiving the same signal does something different with it.</div>
          </div>
        </div>
        <script>
          (function() {
            var s13 = state.answers['S-13'];
            if (s13) {
              document.getElementById('signal-seed-display').innerHTML =
                '<div style="padding:14px 16px;border-radius:10px;background:var(--teal-dim);border:1px solid var(--teal-border);margin-bottom:1.25rem">' +
                '<div style="font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--teal);margin-bottom:6px">Your signal sentence — written in Week 1 (Screen 13)</div>' +
                '<p style="font-size:13px;color:var(--text-secondary);line-height:1.7;font-style:italic">"My loneliness may be signaling that I need ' + s13 + '"</p>' +
                '</div>';
            }
          })();
        </script>
      </div>
    `
  },

  {
    id: 'S-140',
    session: 'Session 37',
    sessionTitle: 'The BEYOND method',
    week: 'Week 8',
    weekTitle: 'The New Song',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 8 — The New Song</div>
          <div class="week-session">Session 37 of 40 &nbsp;·&nbsp; Screen 140 of 150</div>
        </div>
        <span class="screen-badge badge-practice">Seed Harvest — S-31</span>
        <h1 class="screen-title">The shame sentence — answered.</h1>
        <div id="shame-seed-display"></div>
        <p class="screen-body-text">In Week 2 you named the sentence shame has been whispering about you. Eight weeks of honest work later — what do you know about that sentence now?</p>
        <div class="practice-prompt">What I now know about that shame sentence:</div>
        <textarea class="practice-textarea" id="input-S-140"
          placeholder="Is it true? Where did it come from? What does your tree say about it? What does eight weeks of evidence say about it?"
          oninput="saveAnswer('S-140', this.value)"
        >${state.answers['S-140'] || ''}</textarea>
        <div class="benne-bar" style="margin-top:1rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">The sentence shame whispered was not the truth. It was a conclusion drawn from pain. You now have eight weeks of evidence that points in a different direction.</div>
          </div>
        </div>
        <script>
          (function() {
            var s31 = state.answers['S-31'];
            var s31own = state.answers['S-31-own'];
            var text = (typeof s31 === 'string' ? s31 : '') || s31own || '';
            if (text) {
              document.getElementById('shame-seed-display').innerHTML =
                '<div style="padding:14px 16px;border-radius:10px;background:var(--coral-dim);border:1px solid rgba(212,130,106,0.3);margin-bottom:1.25rem">' +
                '<div style="font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--coral);margin-bottom:6px">The shame sentence — from Week 2 (Screen 31)</div>' +
                '<p style="font-size:13px;color:var(--text-secondary);line-height:1.7;font-style:italic">"' + text + '"</p>' +
                '</div>';
            }
          })();
        </script>
      </div>
    `
  },

  {
    id: 'S-141',
    session: 'Session 37',
    sessionTitle: 'The BEYOND method',
    week: 'Week 8',
    weekTitle: 'The New Song',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 8 — The New Song</div>
          <div class="week-session">Session 37 of 40 &nbsp;·&nbsp; Screen 141 of 150</div>
        </div>
        <span class="screen-badge badge-practice">Evidence Review</span>
        <h1 class="screen-title">What the evidence says.</h1>
        <div id="evidence-display"></div>
        <p class="screen-body-text">The backpack inventory from Week 2 listed thoughts that felt like facts. Looking at your tree, your circle map, your brave step, your toolkit — what does the evidence from eight weeks actually show?</p>
        <div class="practice-prompt">What the evidence of eight weeks shows about me:</div>
        <textarea class="practice-textarea" id="input-S-141"
          placeholder="What has eight weeks of honest work demonstrated about who you are, what you are capable of, what you bring to connection?"
          oninput="saveAnswer('S-141', this.value)"
        >${state.answers['S-141'] || ''}</textarea>
        <div class="benne-bar" style="margin-top:1rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">This is not positive thinking. This is evidence. You built a tree from real things. You sent a real message. You took a real step. You named a real lie. Evidence is what changes the story — not affirmations.</div>
          </div>
        </div>
        <script>
          (function() {
            var backpack = state.answers['S-22'] || [];
            if (backpack.length > 0) {
              var opts = {a:"Nobody thinks of me first.",b:"I always end up on the outside.",c:"People are polite to me but not truly interested in me.",d:"I try and it never quite works.",e:"There is something about me that keeps connection just out of reach.",f:"Other people find this easy. I do not."};
              var items = backpack.map(function(k){return opts[k]||k;});
              document.getElementById('evidence-display').innerHTML =
                '<div class="clinical-note" style="margin-bottom:1rem"><strong style="color:var(--teal)">Your Week 2 backpack thoughts:</strong><div style="margin-top:6px">' +
                items.map(function(i){return '<div style="font-size:12px;color:var(--text-muted);margin-top:3px;font-style:italic">&ldquo;' + i + '&rdquo;</div>';}).join('') +
                '</div><div style="margin-top:8px;font-size:11px;color:var(--text-muted)">What does your tree and eight weeks of evidence say about each of these?</div></div>';
            }
          })();
        </script>
      </div>
    `
  },

  // --- SESSION 38: The connection rhythm plan (S-142 to S-144) ---

  {
    id: 'S-142',
    session: 'Session 38',
    sessionTitle: 'The connection rhythm plan',
    week: 'Week 8',
    weekTitle: 'The New Song',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 8 — The New Song</div>
          <div class="week-session">Session 38 of 40 &nbsp;·&nbsp; Screen 142 of 150</div>
        </div>
        <span class="screen-badge badge-practice">Connection Rhythm</span>
        <h1 class="screen-title">My weekly connection rhythm.</h1>
        <p class="screen-body-text">Not a goal. A rhythm. Sustainable, specific, and yours. Built from your circle map and your values.</p>
        <div id="rhythm-context"></div>
        <div class="practice-prompt">Weekly — one small consistent connection action:</div>
        <input type="text" class="practice-input"
          placeholder="e.g. Send one message to someone in my friendship circle. Attend one community gathering…"
          value="${(state.answers['rhythm'] || {}).weekly || ''}"
          oninput="saveAnswerKey('rhythm', 'weekly', this.value)">
        <div class="practice-prompt">Monthly — one deeper connection investment:</div>
        <input type="text" class="practice-input"
          placeholder="e.g. Meet someone face to face. Volunteer one afternoon. Have one honest conversation…"
          value="${(state.answers['rhythm'] || {}).monthly || ''}"
          oninput="saveAnswerKey('rhythm', 'monthly', this.value)">
        <div class="practice-prompt">Quarterly — one community commitment:</div>
        <input type="text" class="practice-input"
          placeholder="e.g. Join or re-join a group. Commit to one regular gathering for three months…"
          value="${(state.answers['rhythm'] || {}).quarterly || ''}"
          oninput="saveAnswerKey('rhythm', 'quarterly', this.value)">
        <div class="benne-bar" style="margin-top:0.5rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">A rhythm is different from a resolution. A resolution is broken once and abandoned. A rhythm is returned to, always, whenever you have drifted from it.</div>
          </div>
        </div>
        <script>
          (function() {
            var circles = state.answers['circles'] || {};
            var vals = state.answers['S-69'] || [];
            var parts = [];
            if (circles.inner) parts.push('Inner: ' + circles.inner.substring(0,50));
            if (circles.friendship) parts.push('Friendship: ' + circles.friendship.substring(0,50));
            if (vals.length > 0) parts.push('Values: ' + vals.slice(0,3).join(', '));
            if (parts.length > 0) {
              document.getElementById('rhythm-context').innerHTML =
                '<div class="clinical-note" style="margin-bottom:1rem"><strong style="color:var(--teal)">Building from your circles and values:</strong><div style="margin-top:6px;font-size:12px;color:var(--text-secondary)">' +
                parts.join('<br>') + '</div></div>';
            }
          })();
        </script>
      </div>
    `
  },

  {
    id: 'S-143',
    session: 'Session 38',
    sessionTitle: 'The connection rhythm plan',
    week: 'Week 8',
    weekTitle: 'The New Song',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 8 — The New Song</div>
          <div class="week-session">Session 38 of 40 &nbsp;·&nbsp; Screen 143 of 150</div>
        </div>
        <span class="screen-badge badge-practice">Solitude Rhythm</span>
        <h1 class="screen-title">My full life rhythm.</h1>
        <p class="screen-body-text">A full life rhythm balances connection and solitude — both are essential. Your toolkit from Week 7 forms the solitude half. This screen assembles the whole.</p>
        <div id="full-rhythm-display"></div>
        <div class="practice-prompt">My full life rhythm — connection and solitude together:</div>
        <textarea class="practice-textarea" id="input-S-143"
          placeholder="What does a week look like when you are living the rhythm you have built? Morning anchor. Technology boundary. Weekly connection action. Restorative practice. How does it fit together?"
          oninput="saveAnswer('S-143', this.value)"
        >${state.answers['S-143'] || ''}</textarea>
        <div class="benne-bar" style="margin-top:1rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">This rhythm does not require the loneliness to be gone before you begin it. You begin it now. The loneliness, where it remains, is worked on from within a life that is already moving.</div>
          </div>
        </div>
        <script>
          (function() {
            var tk = state.answers['toolkit'] || {};
            var rh = state.answers['rhythm'] || {};
            var parts = [];
            if (tk.morning) parts.push('<strong style="color:var(--teal)">Morning anchor:</strong> ' + tk.morning);
            if (tk.tech) parts.push('<strong style="color:var(--teal)">Technology:</strong> ' + tk.tech);
            if (tk.restore) parts.push('<strong style="color:var(--teal)">Restoration:</strong> ' + tk.restore);
            if (rh.weekly) parts.push('<strong style="color:var(--teal)">Weekly connection:</strong> ' + rh.weekly);
            if (rh.monthly) parts.push('<strong style="color:var(--teal)">Monthly:</strong> ' + rh.monthly);
            if (parts.length > 0) {
              document.getElementById('full-rhythm-display').innerHTML =
                '<div class="clinical-note" style="margin-bottom:1rem">' +
                parts.map(function(p){return '<div style="font-size:12px;color:var(--text-secondary);margin-top:4px">' + p + '</div>';}).join('') +
                '</div>';
            }
          })();
        </script>
      </div>
    `
  },

  {
    id: 'S-144',
    session: 'Session 38',
    sessionTitle: 'The connection rhythm plan',
    week: 'Week 8',
    weekTitle: 'The New Song',
    badge: 'practice',
    badgeLabel: 'Practice',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 8 — The New Song</div>
          <div class="week-session">Session 38 of 40 &nbsp;·&nbsp; Screen 144 of 150</div>
        </div>
        <span class="screen-badge badge-practice">Warning Signs</span>
        <h1 class="screen-title">My warning signs map.</h1>
        <p class="screen-body-text">The loneliness loop can return. Naming your early warning signs — before they become the full loop — is the last line of protection the program builds.</p>
        <div class="practice-prompt">My early warning signs that the loop is starting again:</div>
        <div class="choice-list" style="margin-bottom:1rem">
          ${[
            { id: 'a', text: 'I start checking my phone more frequently.' },
            { id: 'b', text: 'I stop accepting invitations or making plans.' },
            { id: 'c', text: 'The morning inventory starts running automatically again.' },
            { id: 'd', text: 'I stop my morning anchor or restorative practice.' },
            { id: 'e', text: 'The shame sentence starts sounding true again.' },
            { id: 'f', text: 'I stop reaching out to anyone for more than two weeks.' }
          ].map(opt => `
            <button class="choice-item ${(state.answers['S-144'] || []).includes(opt.id) ? 'selected' : ''}"
              onclick="toggleMultiChoice('S-144', '${opt.id}', this)">
              <div class="choice-radio" style="border-radius:3px"></div>
              <span class="choice-text">${opt.text}</span>
            </button>
          `).join('')}
        </div>
        <div class="practice-prompt">When I notice these signs, my first action will be:</div>
        <input type="text" class="practice-input" id="input-S-144"
          placeholder="Return to my BEYOND card. Re-read my tree. Send one message. Use my morning anchor…"
          value="${state.answers['S-144-action'] || ''}"
          oninput="saveAnswer('S-144-action', this.value)">
        <div class="benne-bar" style="margin-top:0.5rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">The loop that is seen coming is much easier to interrupt than the loop that arrives unnoticed. You have named it. You have a first action. That is protection that most people do not have.</div>
          </div>
        </div>
      </div>
    `
  },

  // --- SESSION 39: The final declaration (S-145 to S-147) ---

  {
    id: 'S-145',
    session: 'Session 39',
    sessionTitle: 'The final declaration',
    week: 'Week 8',
    weekTitle: 'The New Song',
    badge: 'story',
    badgeLabel: 'Story',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 8 — The New Song</div>
          <div class="week-session">Session 39 of 40 &nbsp;·&nbsp; Screen 145 of 150</div>
        </div>
        <span class="screen-badge badge-story">Story</span>
        <h1 class="screen-title">The sentence they did not expect to write.</h1>
        <div class="story-block">
          <div class="story-character">Nadia, Marcus, Ama, Elena — at the end</div>
          <p class="story-text">Nadia did not expect to write: "I am someone who knows how to be alone without disappearing into it." Marcus did not expect to write: "I am someone who has more to offer than the loneliness story said." Ama did not expect to write: "I am someone who sent a message and waited with an open hand." Elena did not expect to write: "I am someone who is still here — still watching the light — and that is not nothing."</p>
          <p class="story-text" style="margin-top:1rem">None of them expected to arrive at these sentences when they started. They arrived at them the only way anyone does — by walking through the valley rather than around it.</p>
        </div>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">The final declaration is not a performance. It is not a positive affirmation. It is a truthful sentence — built from eight weeks of evidence — about who you have been in this program and who you are becoming. Read the next two screens slowly. What you write there will appear on your certificate.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-146',
    session: 'Session 39',
    sessionTitle: 'The final declaration',
    week: 'Week 8',
    weekTitle: 'The New Song',
    badge: 'anchor',
    badgeLabel: 'Scripture',
    render: () => `
      <div class="screen">
        <div class="scripture-screen">
          <div class="scripture-ref">Psalm 40:3 &nbsp;·&nbsp; NLT</div>
          <p class="scripture-text">
            "He has given me a new song to sing,<br>
            a hymn of praise to our God.<br>
            Many will see what he has done<br>
            and be amazed.<br>
            They will put their trust in the Lord."
          </p>
          <div class="scripture-divider"></div>
          <div class="scripture-translation-note">New Living Translation</div>
        </div>
      </div>
    `
  },

  {
    id: 'S-147',
    session: 'Session 39',
    sessionTitle: 'The final declaration',
    week: 'Week 8',
    weekTitle: 'The New Song',
    badge: 'practice',
    badgeLabel: 'Final Declaration',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 8 — The New Song</div>
          <div class="week-session">Session 39 of 40 &nbsp;·&nbsp; Screen 147 of 150</div>
        </div>
        <span class="screen-badge" style="background:var(--gold-dim);color:var(--gold);border:1px solid var(--gold-border)">The Final Declaration</span>
        <h1 class="screen-title">The whole truth — both sentences.</h1>
        <div id="both-stories-display"></div>
        <div class="practice-prompt">My final declaration — the full truth of who I am now:</div>
        <textarea class="practice-textarea" id="input-S-147"
          placeholder="Both sentences, held together. The dominant story and the new sentence. The lie named and the truth answered. Write the full truth of who you are — including everything you brought here and everything you built here."
          oninput="saveAnswer('S-147', this.value)"
        >${state.answers['S-147'] || ''}</textarea>
        <div class="benne-bar" style="margin-top:1rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">This declaration — your words — will be the centrepiece of your certificate. Take your time. Write the truest thing you can. It will carry eight weeks of honest work.</div>
          </div>
        </div>
        <script>
          (function() {
            var s41 = state.answers['S-41'];
            var s56 = state.answers['S-56'] || {};
            var s93 = state.answers['S-93'];
            var html = '';
            if (s41) html += '<div style="padding:12px 14px;border-radius:8px;background:var(--coral-dim);border:1px solid rgba(212,130,106,0.3);margin-bottom:8px"><div style="font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--coral);margin-bottom:4px">Dominant story — Week 3</div><p style="font-size:12px;color:var(--text-secondary);font-style:italic">&ldquo;' + s41 + '&rdquo;</p></div>';
            if (s56.lie) html += '<div style="padding:12px 14px;border-radius:8px;background:var(--coral-dim);border:1px solid rgba(212,130,106,0.3);margin-bottom:8px"><div style="font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--coral);margin-bottom:4px">Named lie — Week 3</div><p style="font-size:12px;color:var(--text-secondary);font-style:italic">&ldquo;' + s56.lie + '&rdquo;</p></div>';
            if (s93) html += '<div style="padding:12px 14px;border-radius:8px;background:var(--teal-dim);border:1px solid var(--teal-border);margin-bottom:12px"><div style="font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--teal);margin-bottom:4px">New opening sentence — Week 5</div><p style="font-size:12px;color:var(--text-secondary);font-style:italic">&ldquo;And also true is: ' + s93 + '&rdquo;</p></div>';
            if (html) document.getElementById('both-stories-display').innerHTML = html;
          })();
        </script>
      </div>
    `
  },

  // --- SESSION 40: The certificate and close (S-148 to S-150) ---

  {
    id: 'S-148',
    session: 'Session 40',
    sessionTitle: 'The certificate and close',
    week: 'Week 8',
    weekTitle: 'The New Song',
    badge: 'close',
    badgeLabel: 'Graduation',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 8 — The New Song</div>
          <div class="week-session">Session 40 of 40 &nbsp;·&nbsp; Screen 148 of 150</div>
        </div>
        <span class="screen-badge" style="background:var(--gold-dim);color:var(--gold);border:1px solid var(--gold-border)">Programme Graduation</span>
        <h1 class="screen-title">You finished. That is a permanent fact.</h1>

        <!-- Achievements -->
        <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:1.75rem">
          <div style="font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--text-muted);margin-bottom:2px">What You Have Built</div>
          ${[
            {label:'150 screens completed', sub:'CBT · ACT · Narrative Therapy · Biblical principles', color:'var(--teal-dim)', border:'var(--teal-border)', tc:'var(--teal)'},
            {label:'8 weeks navigated', sub:'Descent · Awakening · Reconstruction · Integration', color:'rgba(201,168,76,0.1)', border:'rgba(201,168,76,0.25)', tc:'var(--gold)'},
            {label:'11 seeds planted and harvested', sub:'Signal · Shame · Dominant story · Unique outcome · Values · BEYOND method', color:'rgba(91,130,191,0.1)', border:'rgba(91,130,191,0.25)', tc:'#7BA3D4'},
            {label:'You are a programme graduate.', sub:'That is a permanent fact.', color:'rgba(91,191,170,0.15)', border:'var(--teal-border)', tc:'var(--teal)'}
          ].map(a => `
            <div style="padding:10px 14px;border-radius:8px;background:${a.color};border:1px solid ${a.border}">
              <div style="font-size:13px;font-weight:500;color:${a.tc}">${a.label}</div>
              <div style="font-size:11px;color:var(--text-muted);margin-top:2px">${a.sub}</div>
            </div>
          `).join('')}
        </div>

        <!-- Certificate form -->
        <div id="cert-form-wrap">
          <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-lg);padding:20px;margin-bottom:1rem">
            <div style="font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--gold);margin-bottom:1rem">Certificate of Completion</div>
            <p style="font-size:13px;color:var(--text-secondary);margin-bottom:1.25rem;line-height:1.6">Beyond Alone &mdash; A Guided Journey Through Loneliness, Faith, and Meaningful Connection</p>

            <div class="practice-prompt">Your name (for your certificate):</div>
            <input type="text" class="practice-input" id="cert-name-input"
              placeholder="Your name or chosen name from Screen 3…"
              value="${state.answers['S-03'] || ''}">

            <div class="practice-prompt" style="margin-top:.75rem">Date of completion:</div>
            <input type="text" class="practice-input" id="cert-date-input"
              value="${new Date().toISOString().slice(0,10)}" readonly
              style="color:var(--text-muted)">

            <div class="practice-prompt" style="margin-top:.75rem">One word that describes who you are now:</div>
            <input type="text" class="practice-input" id="cert-word-input"
              placeholder="One word…">

            <button class="save-btn" style="width:100%;justify-content:center;margin-top:1rem" onclick="submitCertificate()">
              Submit for Certificate Approval
            </button>
          </div>
        </div>

        <!-- Approval result (hidden until submitted) -->
        <div id="cert-approval-result" style="display:none"></div>

        <!-- Certificate register -->
        <div id="cert-register-wrap" style="margin-top:1rem"></div>

        <!-- Admin button -->
        <div style="text-align:center;margin-top:1.5rem">
          <button onclick="openCertAdmin()" style="background:none;border:1px solid var(--border);color:var(--text-tertiary);font-family:var(--font-sans);font-size:12px;padding:8px 16px;border-radius:20px;cursor:pointer">Admin: Approve Certificates</button>
        </div>

        <script>
          (function() {
            renderCertRegister();
          })();
        </script>
      </div>
    `
  },

  {
    id: 'S-149',
    session: 'Session 40',
    sessionTitle: 'The certificate and close',
    week: 'Week 8',
    weekTitle: 'The New Song',
    badge: 'close',
    badgeLabel: 'Closing',
    render: () => `
      <div class="screen">
        <div class="week-header">
          <div class="week-label">Week 8 — The New Song</div>
          <div class="week-session">Session 40 of 40 &nbsp;·&nbsp; Screen 149 of 150</div>
        </div>
        <span class="screen-badge badge-close">Benne Hart</span>
        <h1 class="screen-title">What I want to say to you.</h1>
        <div class="benne-bar">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">You came here feeling like you were slowly vanishing. Like the world was full of people who had found something you had not. Like there was something in you specifically that made deep, lasting, genuine connection just slightly out of reach — always — no matter what you did.</div>
          </div>
        </div>
        <p class="screen-body-text">You were not vanishing. You were in pain. And in pain, the mind narrows. It selects its evidence carefully. It writes the story that confirms what hurts most.</p>
        <p class="screen-body-text">You looked at that story for eight weeks. You did not look away. You named the lie. You found the exception. You built the tree. You sent the message. You walked through the valley — not around it.</p>
        <div class="insight-block">
          <p class="screen-body-text" style="margin-bottom:0;font-family:var(--font-serif);font-size:16px;line-height:1.8;color:var(--text-primary)">You came here feeling like you were slowly vanishing. You are leaving here knowing this: <strong>you were seen here.</strong></p>
        </div>
        <div class="benne-bar" style="margin-top:1.5rem">
          <div class="benne-avatar"></div>
          <div class="benne-content">
            <div class="benne-name">Benne Hart</div>
            <div class="benne-text">The new song is not a feeling that arrives fully formed. It is a practice — built note by note, day by day, brave step by brave step. You have the materials now. The song is yours to sing.</div>
          </div>
        </div>
      </div>
    `
  },

  {
    id: 'S-150',
    session: 'Session 40',
    sessionTitle: 'The certificate and close',
    week: 'Week 8',
    weekTitle: 'The New Song',
    badge: 'anchor',
    badgeLabel: 'Scripture',
    render: () => `
      <div class="screen">
        <div class="scripture-screen">
          <div class="scripture-ref">Psalm 40:3 &nbsp;·&nbsp; NLT</div>
          <p class="scripture-text">
            "He has given me a new song to sing."
          </p>
          <div class="scripture-divider"></div>
          <div class="scripture-translation-note">New Living Translation</div>
          <p style="margin-top:2.5rem;font-size:13px;color:var(--text-muted);letter-spacing:0.05em">Beyond Alone &nbsp;·&nbsp; Brave Feelings Lab</p>
          <p style="margin-top:0.5rem;font-size:12px;color:var(--text-muted)">Scripture: Holy Bible, New Living Translation, copyright &copy; 1996, 2004, 2015 Tyndale House Foundation.</p>
        </div>
      </div>
    `
  }

];

// ============================================================
// NAVIGATION
// ============================================================
function goNext() {
  if (state.currentScreen < screens.length - 1) {
    state.currentScreen++;
    renderScreen();
    saveToStorage();
  }
}

function goBack() {
  if (state.currentScreen > 0) {
    state.currentScreen--;
    renderScreen();
  }
}

function renderScreen() {
  const container = document.getElementById('screen-container');
  const screen = screens[state.currentScreen];

  // Render content
  var raw = screen.render();
  var badge = screen.badge || '';

  var imgSrc = getScreenImage(screen.id);

  if (badge === 'anchor') {
    container.innerHTML = raw;

  } else if (imgSrc) {
    // Image exists — full two-column layout
    var imgPanel = '<div class="screen-img-panel"><div class="screen-img-panel-bg" style="background-image:url(\'' + imgSrc + '\')" ></div></div>';
    var bodyContent = badge === 'story'
      ? raw.replace(/<div class="story-cinema-band">[^]*?<\/div>\s*<\/div>/, '')
      : raw;
    container.innerHTML =
      '<div class="screen-single">' + imgPanel +
      '<div class="screen-content-panel">' + bodyContent + '</div></div>';

  } else {
    // No image yet — clean centred single column, looks professional not broken
    container.innerHTML =
      '<div class="screen-fallback"><div class="screen-fallback-inner">' + raw + '</div></div>';
  }
  container.scrollTo({ top: 0, behavior: 'smooth' });
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Top bar: count / progress fill / phase name
  const globalNum = state.currentScreen + 1;
  const topbarNum  = document.getElementById('topbar-num');
  const topbarFill = document.getElementById('topbar-progress-fill');
  const topbarPhase = document.getElementById('topbar-phase');
  if (topbarNum)  topbarNum.textContent  = globalNum;
  if (topbarFill) topbarFill.style.width = ((globalNum / 150) * 100) + '%';
  if (topbarPhase) topbarPhase.textContent = screen.weekTitle || screen.week;

  // Nav buttons
  const backBtn = document.getElementById('nav-back');
  const nextBtn = document.getElementById('nav-next');
  backBtn.disabled = state.currentScreen === 0;
  if (state.currentScreen === screens.length - 1) {
    nextBtn.textContent = 'Complete ✓';
    nextBtn.disabled = true;
  } else {
    nextBtn.textContent = 'Next →';
    nextBtn.disabled = false;
  }

  // Track visited
  if (!state.visited) state.visited = [];
  if (!state.visited.includes(state.currentScreen)) state.visited.push(state.currentScreen);

  updateDots();
  updateMenuProgress();
}

function updateDots() {
  const dotsContainer = document.getElementById('nav-dots');
  const session = screens[state.currentScreen].session;
  const sessionScreens = screens.filter(s => s.session === session);
  const sessionIndex = sessionScreens.findIndex(s => s.id === screens[state.currentScreen].id);
  dotsContainer.innerHTML = sessionScreens.map((s, i) => {
    let cls = 'nav-dot';
    if (i === sessionIndex) cls += ' active';
    else if (screens.indexOf(s) < state.currentScreen) cls += ' visited';
    return '<div class="' + cls + '"></div>';
  }).join('');
}

function updateMenuProgress() {
  const globalNum = state.currentScreen + 1;
  const pct = (globalNum / 150) * 100;
  const footerFill = document.getElementById('menu-footer-fill');
  const footerText = document.getElementById('menu-footer-text');
  const footerWeek = document.getElementById('menu-footer-week');
  if (footerFill) footerFill.style.width = pct + '%';
  if (footerText) footerText.textContent = 'Screen ' + globalNum + ' of 150';
  if (footerWeek) footerWeek.textContent = 'Week 1 of 8';
  buildMenuScreenList();
}

const SCREEN_TITLE_MAP = {
  // Week 1 — The Anatomy of the Void
  'S-01':'The Room Empties',
  'S-02':'What This Journey Is',
  'S-03':'Your Private Space',
  'S-04':'The Crowded Room',
  'S-05':'Two Different Aches',
  'S-06':'Which Ache Is Mine?',
  'S-07':'The Chest That Tightens',
  'S-08':'What Loneliness Does to the Body',
  'S-09':'Where Do You Carry It?',
  'S-10':'The Dashboard Light',
  'S-11':'What the Signal Is Saying',
  'S-12':'How Long Have You Been Here?',
  'S-13':'My Signal Sentence',
  'S-14':'A Voice from the Wilderness',
  'S-15':'Ancient Company',
  'S-16':'Psalm 102:6-7',
  'S-17':'Still Alive, Still Watching',
  'S-18':'What I Would Write',
  'S-19':'Week 1 Complete',
  // Week 2 — The Story Loneliness Tells
  'S-20':'The Weight on the Shoulders',
  'S-21':'Thoughts We Did Not Pack',
  'S-22':'What Is in My Backpack?',
  'S-23':'They Did Not Wave Back',
  'S-24':'The Mind-Reading Trap',
  'S-25':'Three Other Explanations',
  'S-26':'The Shrinking World',
  'S-27':'How the Loop Runs',
  'S-28':'Where Am I in the Loop?',
  'S-29':'The Thing Under the Loneliness',
  'S-30':'Sadness and Shame Are Not the Same',
  'S-31':'The Sentence Shame Whispers',
  'S-32':'Where Did That Sentence Come From?',
  'S-33':'The Person No One Noticed',
  'S-34':'A Cry from the Darkest Corner',
  'S-35':'Psalm 142:4',
  'S-36':'No One Gives Me a Passing Thought',
  'S-37':'What I Would Want Someone to Know',
  'S-38':'Week 2 Complete',
  // Week 3 — Resisting Erasure Through Truth
  'S-39':'Something Must Be Wrong With Me',
  'S-40':'The Story Is Not the Person',
  'S-41':'The Story I Have Been Living Inside',
  'S-42':'The Brain That Learned to Brace',
  'S-43':'What the Research Actually Shows',
  'S-44':'What My Nervous System Learned',
  'S-45':'The Parts Kept in Corners',
  'S-46':'Why Hiding Makes It Worse',
  'S-47':'One True Thing — Said Here First',
  'S-48':'The Sentences That Close the Door',
  'S-49':'What Absolute Language Does',
  'S-50':'My Always and Never Sentences',
  'S-51':'One Exception to the Rule',
  'S-52':'Living Inside a Lie',
  'S-53':'What Kind of Freedom',
  'S-54':'John 8:32',
  'S-55':'Free. Not Comfortable. Free.',
  'S-56':'The Lie I Am Ready to Name',
  'S-57':'Week 3 Complete',
  // Week 4 — The Iron Mind
  'S-58':'The Feeling That Moved In',
  'S-59':'The Third Option',
  'S-60':'I Notice I Am Feeling',
  'S-61':'The Loudest Voice on the Bus',
  'S-62':'You Are the Driver',
  'S-63':'My Loudest Passenger',
  'S-64':'The Tightening That Will Not Stop',
  'S-65':'Acceptance Is Not Surrender',
  'S-66':'Breathing Around the Feeling',
  'S-67':'The Question at the Bottom',
  'S-68':'What Viktor Frankl Understood',
  'S-69':'What I Care About — Even Now',
  'S-70':'What You Would Say to Someone You Love',
  'S-71':'What I Would Say to Someone I Love',
  'S-72':'Still Here — Still Standing',
  'S-73':'What the Valley Teaches',
  'S-74':'Romans 5:3-4',
  'S-75':'Not Happiness. Endurance.',
  'S-76':'Week 4 Complete',
  // Week 5 — The Tree of Life
  'S-77':'The Chapter Loneliness Forgot',
  'S-78':'The Tree of Life',
  'S-79':'What You Bring to Connection',
  'S-80':'My Roots',
  'S-81':'The Person Loneliness Undersells',
  'S-82':'What Loneliness Has Been Leaving Out',
  'S-83':'My Trunk',
  'S-84':'Still Allowed to Hope',
  'S-85':'Hope Is a Direction Not a Guarantee',
  'S-86':'My Branches',
  'S-87':'My Leaves',
  'S-88':'My Fruits',
  'S-89':'My Ground',
  'S-90':'The Full Tree — Revealed',
  'S-91':'The Story That Has Been Waiting',
  'S-92':'Two True Things',
  'S-93':'My New Opening Sentence',
  'S-94':'2 Corinthians 12:9',
  'S-95':'Week 5 Complete',
  // Week 6 — The Body Corporate
  'S-96':'The People Who Seem to Do It Naturally',
  'S-97':'What the Research Actually Shows',
  'S-98':'The Comparison I Have Been Making',
  'S-99':'The Assets Hidden in Plain Sight',
  'S-100':'What Recovery Capital Means',
  'S-101':'My Internal Capital',
  'S-102':'My External Capital',
  'S-103':'Circle Map — Inner Circle',
  'S-104':'Circle Map — Friendship Circle',
  'S-105':'Circle Map — Community Circle',
  'S-106':'Circle Map — Service Circle',
  'S-107':'My Full Circle Map',
  'S-108':'The Message She Almost Did Not Send',
  'S-109':'Why Small Is the Right Size',
  'S-110':'Safe People — A Necessary Distinction',
  'S-111':'My One Brave Step',
  'S-112':'Bearing Weight Together',
  'S-113':'Galatians 6:2',
  'S-114':'Week 6 Complete',
  // Week 7 — The Solitude Architect
  'S-115':'The Brave Step Check-In',
  'S-116':'Every Outcome Is Information',
  'S-117':'What I Learned',
  'S-118':'The First Sunday That Felt Different',
  'S-119':'The Difference That Changes Everything',
  'S-120':'What Solitude Currently Feels Like',
  'S-121':'The Walk Without the Phone',
  'S-122':'What the Brain Does When You Stop Filling the Silence',
  'S-123':'My Current Noise Habits',
  'S-124':'What the Solivagant Knows',
  'S-125':'My Morning Anchor',
  'S-126':'My Technology Boundary',
  'S-127':'My Restorative Practice',
  'S-128':'My Solivagant Toolkit',
  'S-129':'Life Not on Hold',
  'S-130':'Through the Valley — Not Around It',
  'S-131':'Not Alone in the Valley',
  'S-132':'Psalm 23:4',
  'S-133':'Week 7 Complete',
  // Week 8 — The New Song
  'S-134':'The Four Who Walked Through It',
  'S-135':'What Eight Weeks Actually Builds',
  'S-136':'Where I Am Now',
  'S-137':'What to Do When the Feeling Arrives',
  'S-138':'Your Personalised BEYOND Card',
  'S-139':'The Signal Sentence — Transformed',
  'S-140':'The Shame Sentence — Answered',
  'S-141':'What the Evidence Says',
  'S-142':'My Weekly Connection Rhythm',
  'S-143':'My Full Life Rhythm',
  'S-144':'My Warning Signs Map',
  'S-145':'The Sentence They Did Not Expect to Write',
  'S-146':'Psalm 40:3',
  'S-147':'The Final Declaration',
  'S-148':'Certificate of Completion',
  'S-149':'What I Want to Say to You',
  'S-150':'The New Song'
};

function buildMenuScreenList() {
  const container = document.getElementById('menu-screen-list');
  if (!container) return;

  // Group by session
  const sessions = [];
  let cur = null;
  screens.forEach((s, idx) => {
    if (s.session !== cur) {
      cur = s.session;
      sessions.push({ label: s.session, sessionTitle: s.sessionTitle, items: [] });
    }
    sessions[sessions.length - 1].items.push({ screen: s, idx });
  });

  let html = '<div class="menu-phase-header">Program Screens</div>';
  sessions.forEach(sess => {
    html += '<div class="menu-session-header">' + sess.label + ' — ' + sess.sessionTitle + '</div>';
    sess.items.forEach(function(item) {
      const isActive  = item.idx === state.currentScreen;
      const isVisited = state.visited && state.visited.includes(item.idx);
      const title = SCREEN_TITLE_MAP[item.screen.id] || item.screen.id;
      html += '<button class="menu-screen-item' + (isActive ? ' active' : '') + '" onclick="jumpToScreen(' + item.idx + '); closeMenu();">'
        + '<span class="menu-screen-num">' + (item.idx + 1) + '</span>'
        + '<span class="menu-screen-name">' + title + '</span>'
        + '<span class="menu-screen-check">' + (isVisited ? '✓' : '') + '</span>'
        + '</button>';
    });
  });

  container.innerHTML = html;
  setTimeout(function() {
    const active = container.querySelector('.menu-screen-item.active');
    if (active) active.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, 120);
}

function jumpToScreen(idx) {
  state.currentScreen = idx;
  renderScreen();
  saveToStorage();
}

// Story caption text for left panel
function getStoryCaption(screenId) {
  var captions = {
    'S-04': 'Marcus, 34. A full table — and still invisible.',
    'S-07': 'Priya, 27. The body carries what the mind has not named.',
    'S-10': 'James, 42. The signal has been glowing for months.',
    'S-14': 'Elena, 51. Watching the light on her birthday morning.',
    'S-20': 'Nadia, 38. The inventory runs before she speaks a word.',
    'S-23': 'Daniel, 22. Three seconds — and the story is written.',
    'S-26': 'Grace, 45. One withdrawal at a time.',
    'S-29': 'Thomas, 29. The thing he has never said to anyone.',
    'S-33': 'Ama, 33. She could stop coming. No one would notice for weeks.',
    'S-39': 'Sofia, 31. Waiting for the verdict she already expects.',
    'S-42': 'Leon, 36. The bracing that became a personality.',
    'S-45': 'Diane, 58. Decades of edited truth.',
    'S-48': 'Ray, 44. Always and never — sentences he never questions.',
    'S-52': 'Mara, 26. Performing so long she forgot what unedited feels like.',
    'S-58': 'Kai, 25. Every strategy tried. The loneliness stayed.',
    'S-61': 'Amara, 40. Almost turned around. Did not.',
    'S-64': 'Petra, 52. Gripping tighter has never made it lighter.',
    'S-72': 'Nadia returns. Still here. Standing now.',
    'S-77': 'Marcus returns. A different story he did not expect to tell.',
    'S-81': 'Priya returns. The room the loneliness story never mentions.',
    'S-84': 'Leon returns. The flutter he almost dismissed.',
    'S-91': 'Diane returns. Reading what the tree says about her.',
    'S-96': 'Thomas returns. The colleague who rehearsed three starters.',
    'S-99': 'Grace returns. More names than she remembered.',
    'S-108': 'Ama returns. Three minutes before she pressed Send.',
    'S-118': 'Marcus returns. The Sunday that felt different.',
    'S-121': 'Elena returns. Eleven minutes without the phone.',
    'S-130': 'Nadia returns. Seven weeks walked.',
    'S-134': 'All four. Changed — not fixed.',
    'S-145': 'The sentence none of them expected to write.'
  };
  return captions[screenId] || '';
}

// Image mapping — add image filenames here as they are produced
function getScreenImage(screenId) {
  var images = {
    // Uncomment each line as you produce and upload the image:
    // --- WEEK 1 ---
    'S-01': 'assets/images/s01-welcome.webp',
    'S-02': 'assets/images/s02-honest-journey.webp',
    'S-03': 'assets/images/s03-name.webp',
    'S-04': 'assets/images/s04-marcus.webp',
    'S-05': 'assets/images/s05-two-aches.webp',
    'S-06': 'assets/images/s06-which-ache.webp',
    'S-07': 'assets/images/s07-priya.webp',
    'S-08': 'assets/images/s08-body-effects.webp',
    'S-09': 'assets/images/s09-body-map.webp',
    'S-10': 'assets/images/s10-james.webp',
    'S-11': 'assets/images/s11-signal.webp',
    'S-12': 'assets/images/s12-how-long.webp',
    'S-13': 'assets/images/s13-signal-sentence.webp',
    'S-14': 'assets/images/s14-elena.webp',
    'S-15': 'assets/images/s15-ancient-company.webp',
    'S-16': 'assets/images/s16-psalm.webp',
    'S-17': 'assets/images/s17-still-alive.webp',
    'S-18': 'assets/images/s18-what-i-write.webp',
    'S-19': 'assets/images/s19-week1-complete.webp',
    // --- WEEKS 2-8 ---
    'S-20': 'assets/images/s20-nadia.webp',
    'S-21': 'assets/images/s21-insight-backpack.webp',
    'S-22': 'assets/images/s22-practice-backpack.webp',
    'S-23': 'assets/images/s23-daniel.webp',
    'S-24': 'assets/images/s24-insight-mindreading.webp',
    'S-25': 'assets/images/s25-practice-explanations.webp',
    'S-26': 'assets/images/s26-grace.webp',
    'S-27': 'assets/images/s27-insight-loop.webp',
    'S-28': 'assets/images/s28-practice-loop.webp',
    'S-29': 'assets/images/s29-thomas.webp',
    'S-30': 'assets/images/s30-insight-shame.webp',
    'S-31': 'assets/images/s31-practice-shame.webp',
    'S-32': 'assets/images/s32-practice-where.webp',
    'S-33': 'assets/images/s33-ama.webp',
    'S-34': 'assets/images/s34-bridge-cry.webp',
    'S-35': 'assets/images/s35-psalm142.webp',
    'S-36': 'assets/images/s36-insight-seen.webp',
    'S-37': 'assets/images/s37-practice-want.webp',
    'S-38': 'assets/images/s38-week2-complete.webp',
    'S-39': 'assets/images/s39-sofia.webp',
    'S-40': 'assets/images/s40-insight-story.webp',
    'S-41': 'assets/images/s41-practice-dominant.webp',
    'S-42': 'assets/images/s42-leon.webp',
    'S-43': 'assets/images/s43-insight-research.webp',
    'S-44': 'assets/images/s44-practice-nervous.webp',
    'S-45': 'assets/images/s45-diane.webp',
    'S-46': 'assets/images/s46-insight-hiding.webp',
    'S-47': 'assets/images/s47-practice-true.webp',
    'S-48': 'assets/images/s48-ray.webp',
    'S-49': 'assets/images/s49-insight-absolute.webp',
    'S-50': 'assets/images/s50-practice-always.webp',
    'S-51': 'assets/images/s51-practice-exception.webp',
    'S-52': 'assets/images/s52-mara.webp',
    'S-53': 'assets/images/s53-bridge-freedom.webp',
    'S-54': 'assets/images/s54-john832.webp',
    'S-55': 'assets/images/s55-insight-free.webp',
    'S-56': 'assets/images/s56-practice-lie.webp',
    'S-57': 'assets/images/s57-week3-complete.webp',
    'S-58': 'assets/images/s58-kai.webp',
    'S-59': 'assets/images/s59-insight-third.webp',
    'S-60': 'assets/images/s60-practice-notice.webp',
    'S-61': 'assets/images/s61-amara.webp',
    'S-62': 'assets/images/s62-insight-driver.webp',
    'S-63': 'assets/images/s63-practice-passenger.webp',
    'S-64': 'assets/images/s64-petra.webp',
    'S-65': 'assets/images/s65-insight-acceptance.webp',
    'S-66': 'assets/images/s66-practice-breathing.webp',
    'S-67': 'assets/images/s67-climax.webp',
    'S-68': 'assets/images/s68-insight-frankl.webp',
    'S-69': 'assets/images/s69-practice-values.webp',
    'S-70': 'assets/images/s70-insight-compassion.webp',
    'S-71': 'assets/images/s71-practice-letter.webp',
    'S-72': 'assets/images/s72-nadia2.webp',
    'S-73': 'assets/images/s73-bridge-valley.webp',
    'S-74': 'assets/images/s74-romans.webp',
    'S-75': 'assets/images/s75-insight-endurance.webp',
    'S-76': 'assets/images/s76-week4-complete.webp',
    'S-77': 'assets/images/s77-marcus2.webp',
    'S-78': 'assets/images/s78-insight-tree.webp',
    'S-79': 'assets/images/s79-insight-connection.webp',
    'S-80': 'assets/images/s80-practice-roots.webp'
  };
  return images[screenId] || '';
}

function getWeekHeroImage(weekNum) {
  var heroes = {
    // Uncomment as you produce and upload each week hero:
    // 1: 'assets/images/hero-week1.jpg',
    // 2: 'assets/images/hero-week2.jpg',
    // 3: 'assets/images/hero-week3.jpg',
    // 4: 'assets/images/hero-week4.jpg',
    // 5: 'assets/images/hero-week5.jpg',
    // 6: 'assets/images/hero-week6.jpg',
    // 7: 'assets/images/hero-week7.jpg',
    // 8: 'assets/images/hero-week8.jpg'
  };
  return heroes[weekNum] || '';
}

var WEEK_HEROES = {
  1: { label: 'Week 1', title: 'The Anatomy of the Void' },
  2: { label: 'Week 2', title: 'The Story Loneliness Tells' },
  3: { label: 'Week 3', title: 'Resisting Erasure Through Truth' },
  4: { label: 'Week 4', title: 'The Iron Mind' },
  5: { label: 'Week 5', title: 'The Tree of Life' },
  6: { label: 'Week 6', title: 'The Body Corporate' },
  7: { label: 'Week 7', title: 'The Solitude Architect' },
  8: { label: 'Week 8', title: 'The New Song' }
};

function buildWeekHero(weekNum) {
  var src = getWeekHeroImage(weekNum);
  var info = WEEK_HEROES[weekNum] || {};
  if (src) {
    return '<div class="week-hero-img" style="background-image:url(' + src + ')"></div>';
  }
  return '<div class="week-hero-img-placeholder">' +
    '<div class="week-hero-week-label">' + (info.label || '') + '</div>' +
    '<div class="week-hero-title">' + (info.title || '') + '</div>' +
    '</div>';
}

// ============================================================
// MENU
// ============================================================
function openMenu() {
  const overlay = document.getElementById('menu-overlay');
  overlay.style.display = 'block';
  setTimeout(() => overlay.classList.add('active'), 10);
  updateMenuProgress();
}

function closeMenu() {
  const overlay = document.getElementById('menu-overlay');
  overlay.classList.remove('active');
  setTimeout(() => overlay.style.display = 'none', 250);
}

function menuAction(action) {
  closeMenu();
  setTimeout(() => {
    switch(action) {
      case 'citations':
        showCitationsPage();
        break;
      case 'restart':
        if (confirm('Restart the program from the beginning? Your saved answers will be kept.')) {
          state.currentScreen = 0;
          renderScreen();
        }
        break;
      case 'week1':
        state.currentScreen = 0;
        renderScreen();
        break;
      case 'save':
        saveProgress();
        break;
      case 'logoff':
        saveToStorage();
        document.getElementById('program').style.display = 'none';
        document.getElementById('password-gate').style.display = 'flex';
        break;
      case 'exit':
        saveToStorage();
        if (confirm('Exit Beyond Alone? Your progress has been saved.')) {
          window.close();
          // Fallback
          document.getElementById('program').style.display = 'none';
          document.getElementById('password-gate').style.display = 'flex';
        }
        break;
    }
  }, 300);
}

// Close menu on overlay click
document.getElementById('menu-overlay').addEventListener('click', function(e) {
  if (e.target === this) closeMenu();
});

// ============================================================
// PASSWORD GATE
// ============================================================
function checkPassword() {
  const input = document.getElementById('gate-input');
  const error = document.getElementById('gate-error');
  const val = input.value.trim();

  if (val === CONFIG.password) {
    // Correct password
    error.textContent = '';
    enterProgram();
  } else {
    error.textContent = 'Access code not recognized. Please try again.';
    input.value = '';
    input.focus();
    // Shake animation
    input.style.animation = 'none';
    input.offsetHeight;
    input.style.animation = 'shake 0.4s ease';
  }
}

// Allow Enter key on password field — bound after DOM ready (see INIT below)

function togglePasswordVisibility() {
  var input = document.getElementById('gate-input');
  var label = document.getElementById('gate-eye-label');
  if (!input || !label) return;
  var isHidden = input.type === 'password';
  input.type = isHidden ? 'text' : 'password';
  label.textContent = isHidden ? 'Hide' : 'Show';
  // Keep focus on input after toggle
  input.focus();
}

function enterProgram() {
  // Load saved progress safely
  loadFromStorage();

  // Clamp currentScreen to valid range — prevents stale localStorage breaking navigation
  if (typeof state.currentScreen !== 'number' || state.currentScreen < 0 || state.currentScreen >= screens.length) {
    state.currentScreen = 0;
  }

  // Hide gate, show program
  const gate = document.getElementById('password-gate');
  const program = document.getElementById('program');

  gate.style.opacity = '0';
  gate.style.transition = 'opacity 0.5s ease';

  setTimeout(() => {
    gate.style.display = 'none';
    program.style.display = 'flex';
    program.style.opacity = '0';
    program.style.transition = 'opacity 0.5s ease';
    setTimeout(() => { program.style.opacity = '1'; }, 10);
    try {
      renderScreen();
    } catch(e) {
      console.error('renderScreen error:', e);
      state.currentScreen = 0;
      renderScreen();
    }
  }, 400);

  if (!state.startedAt) {
    state.startedAt = new Date().toISOString();
    saveToStorage();
  }
}

// ============================================================
// ANSWER MANAGEMENT
// ============================================================
function saveAnswer(screenId, value) {
  state.answers[screenId] = value;
  saveToStorage();
}

function saveAnswerKey(screenId, key, value) {
  if (!state.answers[screenId] || typeof state.answers[screenId] !== 'object') {
    state.answers[screenId] = {};
  }
  state.answers[screenId][key] = value;
  saveToStorage();
}

function toggleMultiChoice(screenId, value, btn) {
  let current = state.answers[screenId];
  if (!Array.isArray(current)) current = [];
  const idx = current.indexOf(value);
  if (idx === -1) {
    current.push(value);
    btn.classList.add('selected');
  } else {
    current.splice(idx, 1);
    btn.classList.remove('selected');
  }
  state.answers[screenId] = current;
  saveToStorage();
}

function selectChoice(screenId, value, btn) {
  state.answers[screenId] = value;
  saveToStorage();

  // Update UI
  const parent = btn.closest('.choice-list');
  parent.querySelectorAll('.choice-item').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}

function selectSlider(screenId, value, btn) {
  state.answers[screenId] = value;
  saveToStorage();

  const parent = btn.closest('.slider-track');
  parent.querySelectorAll('.slider-option').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}

function toggleBodyPart(partId, btn) {
  let current = state.answers['S-09'] || [];
  const idx = current.indexOf(partId);
  if (idx === -1) {
    current.push(partId);
    btn.classList.add('selected');
  } else {
    current.splice(idx, 1);
    btn.classList.remove('selected');
  }
  state.answers['S-09'] = current;
  saveToStorage();
}

// ============================================================
// STORAGE
// ============================================================
function saveToStorage() {
  try {
    state.lastSaved = new Date().toISOString();
    state.storageVersion = CONFIG.storageVersion;
    localStorage.setItem(CONFIG.storageKey, JSON.stringify(state));
  } catch(e) {
    console.warn('Storage save failed:', e);
  }
}

function loadFromStorage() {
  try {
    const saved = localStorage.getItem(CONFIG.storageKey);
    if (saved) {
      const parsed = JSON.parse(saved);
      // Version check — if storage is from an older build, discard to prevent errors
      if (parsed.storageVersion && parsed.storageVersion === CONFIG.storageVersion) {
        state = { ...state, ...parsed };
      } else {
        // Stale storage — keep answers but reset navigation
        console.info('Storage version mismatch — resetting navigation, keeping answers.');
        if (parsed.answers) state.answers = parsed.answers;
        if (parsed.visited) state.visited = parsed.visited;
        state.currentScreen = 0;
        state.storageVersion = CONFIG.storageVersion;
        saveToStorage();
      }
    }
  } catch(e) {
    console.warn('Storage load failed — starting fresh:', e);
    localStorage.removeItem(CONFIG.storageKey);
  }
}

// Utility: call clearProgress() in browser console to fully reset
function clearProgress() {
  localStorage.removeItem(CONFIG.storageKey);
  location.reload();
}

function saveProgress() {
  saveToStorage();
  // Visual feedback
  const btn = document.querySelector('.save-btn');
  if (btn) {
    const original = btn.innerHTML;
    btn.innerHTML = '✓ &nbsp; Saved';
    btn.style.background = 'var(--teal)';
    setTimeout(() => { btn.innerHTML = original; }, 2000);
  }
  // Also show a gentle notification
  showNotification('Progress saved');
}

function showNotification(msg) {
  const notif = document.createElement('div');
  notif.style.cssText = `
    position:fixed; bottom:80px; left:50%; transform:translateX(-50%);
    background:var(--bg-card); border:1px solid var(--teal-border);
    color:var(--teal); font-family:var(--font-sans); font-size:13px;
    padding:8px 18px; border-radius:20px; z-index:9999;
    animation: slideUp 0.3s ease both;
  `;
  notif.textContent = msg;
  document.body.appendChild(notif);
  setTimeout(() => notif.remove(), 2500);
}

// ============================================================
// CITATIONS — MASTER DATA
// All weeks accumulate here as program is built
// ============================================================

const ALL_CITATIONS = {

  week1: {
    weekNum: 1,
    weekTitle: 'The Anatomy of the Void',
    scripture: {
      label: 'Scripture Translation',
      text: 'Holy Bible, <em>New Living Translation</em>, copyright &copy; 1996, 2004, 2015 by Tyndale House Foundation. Used by permission of Tyndale House Publishers, Carol Stream, Illinois 60188. All rights reserved.',
      screens: 'All scripture screens throughout the program'
    },
    categories: [
      {
        label: 'Books & Research',
        entries: [
          {
            num: 1,
            author: 'Cacioppo, J.T. & Patrick, W.',
            year: '2008',
            title: 'Loneliness: Human Nature and the Need for Social Connection',
            publisher: 'W.W. Norton & Company',
            type: 'book',
            note: 'Foundational neuroscience of loneliness as biological signal; social threat hypervigilance research.',
            screens: 'Screens 5, 8'
          },
          {
            num: 2,
            author: 'Holt-Lunstad, J., Smith, T.B., Baker, M., Harris, T., & Stephenson, D.',
            year: '2015',
            title: 'Loneliness and social isolation as risk factors for mortality: A meta-analytic review',
            publisher: '<em>Perspectives on Psychological Science</em>, 10(2), 227–237',
            type: 'journal',
            note: 'Health risk equivalence of loneliness to smoking 15 cigarettes per day; HPA axis research.',
            screens: 'Screen 8'
          },
          {
            num: 3,
            author: 'Murthy, V.',
            year: '2020',
            title: 'Together: The Healing Power of Human Connection in a Sometimes Lonely World',
            publisher: 'Harper Wave',
            type: 'book',
            note: 'Loneliness as societal condition; epidemic framing; connection as clinical necessity.',
            screens: 'Screens 11, 12'
          },
          {
            num: 4,
            author: 'van der Kolk, B.',
            year: '2014',
            title: 'The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma',
            publisher: 'Viking',
            type: 'book',
            note: 'Somatic awareness; body-based emotional processing; nervous system and adverse experience.',
            screens: 'Screen 9'
          },
          {
            num: 5,
            author: 'Pennebaker, J.W.',
            year: '1990',
            title: 'Opening Up: The Healing Power of Expressing Emotions',
            publisher: 'Guilford Press',
            type: 'book',
            note: 'Expressive writing and psychological health; private disclosure as physiological benefit.',
            screens: 'Screen 18'
          }
        ]
      },
      {
        label: 'Institutional & Government Sources',
        entries: [
          {
            num: 6,
            author: 'World Health Organization',
            year: '2023',
            title: 'Loneliness: A global public health concern',
            publisher: 'WHO Commission on Social Connection. WHO Press',
            type: 'report',
            note: '1 in 6 people worldwide experience loneliness; global epidemic declaration.',
            screens: 'Screens 11, 12'
          },
          {
            num: 7,
            author: 'Centers for Disease Control and Prevention',
            year: '2023',
            title: 'Social Connectedness: How It Can Improve Health',
            publisher: 'CDC National Center for Chronic Disease Prevention and Health Promotion',
            type: 'report',
            note: 'Loneliness vs. social isolation distinction; physical health consequences.',
            screens: 'Screens 5, 11'
          }
        ]
      }
    ]
  },

  week2: {
    weekNum: 2,
    weekTitle: 'The Story Loneliness Tells',
    scripture: {
      label: 'Scripture Translation',
      text: 'Holy Bible, <em>New Living Translation</em>, copyright &copy; 1996, 2004, 2015 by Tyndale House Foundation. Used by permission of Tyndale House Publishers, Carol Stream, Illinois 60188. All rights reserved.',
      screens: 'Screen 35 (Psalm 142:4 NLT)'
    },
    categories: [
      {
        label: 'Books & Research',
        entries: [
          {
            num: 1,
            author: 'Beck, A.T.',
            year: '1979',
            title: 'Cognitive Therapy of Depression',
            publisher: 'Guilford Press',
            type: 'book',
            note: 'Foundational cognitive therapy model; automatic negative thoughts; cognitive distortion taxonomy including mind-reading and personalising.',
            screens: 'Screens 21, 24'
          },
          {
            num: 2,
            author: 'Burns, D.D.',
            year: '1980',
            title: 'Feeling Good: The New Mood Therapy',
            publisher: 'William Morrow',
            type: 'book',
            note: 'Cognitive distortions made accessible; mind-reading, personalising, all-or-nothing thinking. Widely used clinical self-help resource.',
            screens: 'Screens 21, 24'
          },
          {
            num: 3,
            author: 'Cacioppo, J.T. & Patrick, W.',
            year: '2008',
            title: 'Loneliness: Human Nature and the Need for Social Connection',
            publisher: 'W.W. Norton & Company',
            type: 'book',
            note: 'The loneliness loop; social threat hypervigilance; neuroimaging of threat-detection circuits in chronic loneliness.',
            screens: 'Screens 23, 27'
          },
          {
            num: 4,
            author: 'Brown, B.',
            year: '2012',
            title: 'Daring Greatly: How the Courage to Be Vulnerable Transforms the Way We Live, Love, Parent, and Lead',
            publisher: 'Gotham Books',
            type: 'book',
            note: 'Shame as the most corrosive social emotion; shame vs. guilt distinction; naming shame as the first step to reducing its power.',
            screens: 'Screens 29, 30'
          },
          {
            num: 5,
            author: 'Brown, B.',
            year: '2010',
            title: 'The Gifts of Imperfection',
            publisher: 'Hazelden Publishing',
            type: 'book',
            note: 'Shame resilience; vulnerability as the birthplace of connection; worthiness and belonging research.',
            screens: 'Screen 30'
          },
          {
            num: 6,
            author: 'Pennebaker, J.W.',
            year: '1990',
            title: 'Opening Up: The Healing Power of Expressing Emotions',
            publisher: 'Guilford Press',
            type: 'book',
            note: 'Naming inner experience reduces psychological and physiological weight; private written disclosure as therapeutic tool.',
            screens: 'Screen 37'
          }
        ]
      }
    ]
  },

  week3: {
    weekNum: 3,
    weekTitle: 'Resisting Erasure Through Truth',
    scripture: {
      label: 'Scripture Translation',
      text: 'Holy Bible, <em>New Living Translation</em>, copyright &copy; 1996, 2004, 2015 by Tyndale House Foundation. Used by permission of Tyndale House Publishers, Carol Stream, Illinois 60188. All rights reserved.',
      screens: 'Screen 54 (John 8:32 NLT)'
    },
    categories: [
      {
        label: 'Books & Research',
        entries: [
          {
            num: 1,
            author: 'White, M. & Epston, D.',
            year: '1990',
            title: 'Narrative Means to Therapeutic Ends',
            publisher: 'W.W. Norton & Company',
            type: 'book',
            note: 'Foundational Narrative Therapy framework; dominant story vs. counter-story; the person is not the problem, the story is the problem; unique outcomes.',
            screens: 'Screens 40, 51'
          },
          {
            num: 2,
            author: 'Cacioppo, J.T. & Patrick, W.',
            year: '2008',
            title: 'Loneliness: Human Nature and the Need for Social Connection',
            publisher: 'W.W. Norton & Company',
            type: 'book',
            note: 'Amygdala hypervigilance in chronic loneliness; threat-detection circuits shaped by repeated social pain.',
            screens: 'Screen 43'
          },
          {
            num: 3,
            author: 'van der Kolk, B.',
            year: '2014',
            title: 'The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma',
            publisher: 'Viking',
            type: 'book',
            note: 'How adverse experiences reshape the nervous system; survival intelligence; neuroplasticity as basis for change.',
            screens: 'Screen 43'
          },
          {
            num: 4,
            author: 'Brown, B.',
            year: '2012',
            title: 'Daring Greatly',
            publisher: 'Gotham Books',
            type: 'book',
            note: 'Vulnerability as the birthplace of connection; self-concealment as barrier to genuine relationship; armor vs. authentic presence.',
            screens: 'Screen 46'
          },
          {
            num: 5,
            author: 'Pennebaker, J.W.',
            year: '1990',
            title: 'Opening Up: The Healing Power of Expressing Emotions',
            publisher: 'Guilford Press',
            type: 'book',
            note: 'Private written disclosure produces measurable immune, sleep, and emotional resilience benefits even without sharing with others.',
            screens: 'Screens 47, 47 clinical note'
          },
          {
            num: 6,
            author: 'Seligman, M.E.P.',
            year: '1991',
            title: 'Learned Optimism: How to Change Your Mind and Your Life',
            publisher: 'Knopf',
            type: 'book',
            note: 'Explanatory style research; permanent, pervasive, personal as the three hallmarks of depressive and loneliness-maintaining thought patterns.',
            screens: 'Screen 49'
          }
        ]
      }
    ]
  },

  week4: {
    weekNum: 4,
    weekTitle: 'The Iron Mind',
    scripture: {
      label: 'Scripture Translation',
      text: 'Holy Bible, <em>New Living Translation</em>, copyright &copy; 1996, 2004, 2015 by Tyndale House Foundation. Used by permission of Tyndale House Publishers, Carol Stream, Illinois 60188. All rights reserved.',
      screens: 'Screen 74 (Romans 5:3-4 NLT)'
    },
    categories: [
      {
        label: 'Books & Research',
        entries: [
          {
            num: 1,
            author: 'Hayes, S.C., Strosahl, K.D., & Wilson, K.G.',
            year: '2005',
            title: 'Get Out of Your Mind and Into Your Life: The New Acceptance and Commitment Therapy',
            publisher: 'New Harbinger Publications',
            type: 'book',
            note: 'ACT foundational framework; psychological flexibility; acceptance as the third option beyond fighting or surrendering to painful feelings. 300+ randomized controlled trials.',
            screens: 'Screens 59, 67, 68, 69'
          },
          {
            num: 2,
            author: 'Harris, R.',
            year: '2007',
            title: 'The Happiness Trap: How to Stop Struggling and Start Living',
            publisher: 'Shambhala Publications',
            type: 'book',
            note: 'Cognitive defusion techniques; the passenger on the bus metaphor; reducing thought believability without elimination. 40+ RCTs on defusion specifically.',
            screens: 'Screens 61, 62, 63'
          },
          {
            num: 3,
            author: 'Neff, K.',
            year: '2011',
            title: 'Self-Compassion: The Proven Power of Being Kind to Yourself',
            publisher: 'William Morrow',
            type: 'book',
            note: 'Self-kindness, common humanity, mindfulness as the three components of self-compassion; meeting painful feelings with kindness reduces their duration and intensity.',
            screens: 'Screens 65, 70, 71'
          },
          {
            num: 4,
            author: 'Frankl, V.E.',
            year: '1959',
            title: "Man's Search for Meaning",
            publisher: 'Beacon Press (originally published 1946)',
            type: 'book',
            note: "Logotherapy; meaning-centered psychotherapy; the last of human freedoms is the ability to choose one's attitude in any given circumstances. Direct precursor to ACT values framework.",
            screens: 'Screen 68'
          },
          {
            num: 5,
            author: 'Tedeschi, R.G. & Calhoun, L.G.',
            year: '1996',
            title: 'The Posttraumatic Growth Inventory: Measuring the positive legacy of trauma',
            publisher: '<em>Journal of Traumatic Stress, 9</em>(3), 455–471',
            type: 'journal',
            note: 'Post-traumatic growth research; adversity and the development of new capacities; strength of character built through difficulty rather than inherited.',
            screens: 'Screen 75'
          }
        ]
      }
    ]
  },

  week5: {
    weekNum: 5,
    weekTitle: 'The Tree of Life',
    scripture: {
      label: 'Scripture Translation',
      text: 'Holy Bible, <em>New Living Translation</em>, copyright &copy; 1996, 2004, 2015 by Tyndale House Foundation. Used by permission of Tyndale House Publishers, Carol Stream, Illinois 60188. All rights reserved.',
      screens: 'Screen 94 (2 Corinthians 12:9 NLT)'
    },
    categories: [
      {
        label: 'Books & Research',
        entries: [
          {
            num: 1,
            author: 'Ncube, N. & Denborough, D.',
            year: '2006',
            title: 'Tree of Life',
            publisher: 'Dulwich Centre Publications',
            type: 'book',
            note: 'Narrative Therapy exercise mapping six dimensions of the person: roots, trunk, branches, leaves, fruits, ground. Used in 40+ countries in trauma recovery, refugee support, and chronic illness programs.',
            screens: 'Screens 78, 80, 83, 86, 87, 88, 89, 90'
          },
          {
            num: 2,
            author: 'Waldinger, R. & Schulz, M.',
            year: '2023',
            title: "The Good Life: Lessons from the World's Longest Scientific Study of Happiness",
            publisher: 'Simon & Schuster',
            type: 'book',
            note: 'Harvard Study of Adult Development — 85-year longitudinal study. Relationship quality is the single greatest predictor of a long, healthy, meaningful life.',
            screens: 'Screen 79'
          },
          {
            num: 3,
            author: 'White, M. & Epston, D.',
            year: '1990',
            title: 'Narrative Means to Therapeutic Ends',
            publisher: 'W.W. Norton & Company',
            type: 'book',
            note: 'Thin description vs thick description; dominant story editing out counter-evidence; the counter-story recovered from the margins of existing life.',
            screens: 'Screen 82'
          },
          {
            num: 4,
            author: 'Seligman, M.E.P. & Peterson, C.',
            year: '2004',
            title: 'Character Strengths and Virtues: A Handbook and Classification',
            publisher: 'Oxford University Press',
            type: 'book',
            note: "VIA Character Strengths — 24 universal human strengths present in every person. Strengths acknowledged rather than invented; already present in the participant's life.",
            screens: 'Screen 82'
          },
          {
            num: 5,
            author: 'Snyder, C.R.',
            year: '1994',
            title: 'The Psychology of Hope: You Can Get There from Here',
            publisher: 'Free Press',
            type: 'book',
            note: 'Hope Theory — agency thinking plus pathways thinking. Hope as learnable cognitive skill, not innate temperament. 1,000+ supporting studies.',
            screens: 'Screens 84, 85, 86'
          },
          {
            num: 6,
            author: 'Aknin, L.B. & Dunn, E.W.',
            year: '2012',
            title: 'Spending money on others promotes happiness',
            publisher: '<em>Journal of Personality and Social Psychology</em>',
            type: 'journal',
            note: 'Prosocial behaviour and wellbeing research. Giving to others produces connection and wellbeing for the giver before the relationship deepens.',
            screens: 'Screen 88'
          },
          {
            num: 7,
            author: 'Linehan, M.M.',
            year: '1993',
            title: 'Cognitive-Behavioral Treatment of Borderline Personality Disorder',
            publisher: 'Guilford Press',
            type: 'book',
            note: 'Dialectical Behaviour Therapy foundational framework; both/and thinking as core psychological maturity; holding two truths simultaneously.',
            screens: 'Screen 92'
          }
        ]
      }
    ]
  },

  week6: {
    weekNum: 6,
    weekTitle: 'The Body Corporate',
    scripture: {
      label: 'Scripture Translation',
      text: 'Holy Bible, <em>New Living Translation</em>, copyright &copy; 1996, 2004, 2015 by Tyndale House Foundation. Used by permission of Tyndale House Publishers, Carol Stream, Illinois 60188. All rights reserved.',
      screens: 'Screen 113 (Galatians 6:2 NLT)'
    },
    categories: [
      {
        label: 'Books & Research',
        entries: [
          { num: 1, author: 'Murthy, V.', year: '2020', title: 'Together: The Healing Power of Human Connection', publisher: 'Harper Wave', type: 'book', note: 'Connection as practice not talent; showing up consistently as the foundation of relationship.', screens: 'Screen 97' },
          { num: 2, author: 'Zajonc, R.B.', year: '1968', title: 'Attitudinal effects of mere exposure', publisher: 'Journal of Personality and Social Psychology, 9(2)', type: 'journal', note: 'Mere exposure effect — familiarity generates liking. Consistent presence is the foundation of connection.', screens: 'Screen 97' },
          { num: 3, author: 'White, W. & Miller, W.', year: '2007', title: 'Recovery capital framework', publisher: 'Counselor Magazine', type: 'journal', note: 'Internal and external resources available to support wellbeing and connection. Internal capital: values, strengths. External: people, communities.', screens: 'Screens 100, 101, 102' },
          { num: 4, author: 'Granovetter, M.', year: '1973', title: 'The strength of weak ties', publisher: 'American Journal of Sociology, 78(6)', type: 'journal', note: 'Weak ties — acquaintances rather than close friends — are often the most powerful connectors.', screens: 'Screen 102' },
          { num: 5, author: 'Dunbar, R.I.M.', year: '1992', title: 'Neocortex size as a constraint on group size in primates', publisher: 'Journal of Human Evolution, 22(6)', type: 'journal', note: 'Social circle research — inner circle 1-5, friendship layer 5-15, community 50+. Most adults have fewer close relationships than expected.', screens: 'Screens 103, 104, 105' },
          { num: 6, author: 'Martell, C.R., Addis, M.E., & Jacobson, N.S.', year: '2001', title: 'Depression in Context: Strategies for Guided Action', publisher: 'W.W. Norton', type: 'book', note: 'Behavioral activation — action precedes motivation. Size of first step does not predict outcome; taking the step does.', screens: 'Screen 109' },
          { num: 7, author: 'Fogg, B.J.', year: '2019', title: 'Tiny Habits: The Small Changes That Change Everything', publisher: 'Houghton Mifflin Harcourt', type: 'book', note: 'Small consistent steps compound. Behavior design anchored in existing routines.', screens: 'Screen 109' },
          { num: 8, author: 'Cloud, H. & Townsend, J.', year: '1995', title: 'Safe People', publisher: 'Zondervan', type: 'book', note: 'Safe people draw out the best in you, are honest, and remain stable when you are not. Quality over quantity.', screens: 'Screen 110' }
        ]
      }
    ]
  },

  week7: {
    weekNum: 7,
    weekTitle: 'The Solitude Architect',
    scripture: {
      label: 'Scripture Translation',
      text: 'Holy Bible, <em>New Living Translation</em>, copyright &copy; 1996, 2004, 2015 by Tyndale House Foundation. Used by permission of Tyndale House Publishers, Carol Stream, Illinois 60188. All rights reserved.',
      screens: 'Screen 132 (Psalm 23:4 NLT)'
    },
    categories: [
      {
        label: 'Books & Research',
        entries: [
          { num: 1, author: 'Martell, C.R., Addis, M.E., & Jacobson, N.S.', year: '2001', title: 'Depression in Context: Strategies for Guided Action', publisher: 'W.W. Norton', type: 'book', note: 'Behavioral activation — every outcome is data. Response to action produces more useful learning than planning.', screens: 'Screen 116' },
          { num: 2, author: 'Buchholz, E.S.', year: '1997', title: 'The Call of Solitude: Alonetime in a World of Attachment', publisher: 'Simon & Schuster', type: 'book', note: 'Solitude as fundamental human need as essential as connection. Capacity for solitude as complement to community.', screens: 'Screen 119' },
          { num: 3, author: 'Crawford, M.B.', year: '2015', title: 'The World Beyond Your Head', publisher: 'Farrar, Straus and Giroux', type: 'book', note: 'Erosion of solitude through constant connectivity; degraded capacity for deep thought and genuine presence.', screens: 'Screen 119' },
          { num: 4, author: 'Turkle, S.', year: '2011', title: 'Alone Together: Why We Expect More from Technology and Less from Each Other', publisher: 'Basic Books', type: 'book', note: 'Technology erosion of solitude and genuine presence; constant connectivity as barrier to self-knowledge.', screens: 'Screen 119' },
          { num: 5, author: 'Siegel, D.J.', year: '2010', title: 'Mindsight: The New Science of Personal Transformation', publisher: 'Bantam Books', type: 'book', note: 'Default mode network; brain requires periods of unprompted quiet to consolidate memory and regulate emotion.', screens: 'Screen 122' },
          { num: 6, author: 'Klinenberg, E.', year: '2012', title: 'Going Solo: The Extraordinary Rise and Surprising Appeal of Living Alone', publisher: 'Penguin Press', type: 'book', note: 'Solo living and wellbeing; the variable is not aloneness but the relationship with aloneness.', screens: 'Screen 122' }
        ]
      }
    ]
  },
  week8: {
    weekNum: 8,
    weekTitle: 'The New Song',
    scripture: {
      label: 'Scripture Translation',
      text: 'Holy Bible, <em>New Living Translation</em>, copyright &copy; 1996, 2004, 2015 by Tyndale House Foundation. Used by permission of Tyndale House Publishers, Carol Stream, Illinois 60188. All rights reserved.',
      screens: 'Screens 146 & 150 (Psalm 40:3 NLT)'
    },
    categories: [
      {
        label: 'Books & Research',
        entries: [
          { num: 1, author: 'Tedeschi, R.G. & Calhoun, L.G.', year: '1996', title: 'The Posttraumatic Growth Inventory: Measuring the positive legacy of trauma', publisher: 'Journal of Traumatic Stress, 9(3), 455-471', type: 'journal', note: 'Honest engagement with difficulty produces greater long-term wellbeing gains than positive reframing. The mechanism of this program.', screens: 'Screen 135' },
          { num: 2, author: 'Hayes, S.C., Strosahl, K.D., & Wilson, K.G.', year: '2005', title: 'Get Out of Your Mind and Into Your Life', publisher: 'New Harbinger Publications', type: 'book', note: 'BEYOND method foundational framework: body awareness, defusion, values orientation, committed action, grounding.', screens: 'Screens 137, 138' },
          { num: 3, author: 'Harris, R.', year: '2007', title: 'The Happiness Trap', publisher: 'Shambhala Publications', type: 'book', note: 'Personalised defusion technique using passenger naming and the I-notice reframe. Referenced in BEYOND card.', screens: 'Screen 138' },
          { num: 4, author: 'Fogg, B.J.', year: '2019', title: 'Tiny Habits: The Small Changes That Change Everything', publisher: 'Houghton Mifflin Harcourt', type: 'book', note: 'Rhythm vs resolution; small consistent actions compound; returning to rhythm after drift.', screens: 'Screen 142' },
          { num: 5, author: 'Gottman, J.M.', year: '1994', title: 'Why Marriages Succeed or Fail', publisher: 'Simon & Schuster', type: 'book', note: 'Bids for connection as the building blocks of every close relationship. Small repeated moments of turning toward.', screens: 'Screen 142' },
          { num: 6, author: 'Pennebaker, J.W.', year: '1990', title: 'Opening Up: The Healing Power of Expressing Emotions', publisher: 'Guilford Press', type: 'book', note: 'Final declaration as the culmination of eight weeks of expressive writing. The named truth changes the person who names it.', screens: 'Screen 147' }
        ]
      }
    ]
  }
};

// ============================================================
// CITATIONS PAGE RENDERER
// ============================================================

function showCitationsPage(weekKey) {
  weekKey = weekKey || getCurrentWeekKey();
  const data = ALL_CITATIONS[weekKey];
  if (!data) return;

  const container = document.getElementById('screen-container');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Build week tab pills
  const availableWeeks = Object.keys(ALL_CITATIONS);
  const weekTabsHtml = availableWeeks.map(wk => {
    const wkData = ALL_CITATIONS[wk];
    const isActive = wk === weekKey;
    return '<button class="cite-tab' + (isActive ? ' cite-tab-active' : '') + '" onclick="showCitationsPage(\'' + wk + '\')">'
      + 'Week ' + wkData.weekNum + '</button>';
  }).join('');

  // Build all category sections
  function buildCategories(cats) {
    return cats.map(cat => {
      const entries = cat.entries.map(e => {
        let titleFormatted = (e.type === 'book' || e.type === 'report')
          ? '<em>' + e.title + '</em>'
          : e.title;
        return ''
          + '<div class="cite-entry">'
          +   '<div class="cite-entry-top">'
          +     '<span class="cite-num">' + e.num + '</span>'
          +     '<div class="cite-body">'
          +       '<p class="cite-full">'
          +         '<span class="cite-author">' + e.author + '</span>'
          +         ' (' + e.year + '). '
          +         titleFormatted + '. '
          +         e.publisher + '.'
          +       '</p>'
          +       '<p class="cite-note">' + e.note + '</p>'
          +     '</div>'
          +   '</div>'
          +   '<div class="cite-screens">Referenced in: ' + e.screens + '</div>'
          + '</div>';
      }).join('');
      return ''
        + '<div class="cite-category">'
        +   '<div class="cite-category-label">' + cat.label + '</div>'
        +   entries
        + '</div>';
    }).join('');
  }

  container.innerHTML = ''

    // ── PAGE HEADER ──────────────────────────────────────────
    + '<div class="screen citations-page">'
    + '<div class="cite-header">'
    +   '<button class="cite-back-btn" onclick="renderScreen()">← Back to Program</button>'
    +   '<div class="cite-page-eyebrow">Beyond Alone &nbsp;·&nbsp; Brave Feelings Lab</div>'
    +   '<h1 class="cite-page-title">Citations &amp; Sources</h1>'
    +   '<p class="cite-page-desc">Every insight shared in Beyond Alone is grounded in published research, peer-reviewed clinical work, or established psychological frameworks. Superscript numbers throughout the program — such as <sup style="color:var(--gold);font-weight:600">¹</sup> — reference the sources documented here. This page is your permanent reference for the intellectual and clinical foundations of the program.</p>'
    + '</div>'

    // ── WEEK TABS ─────────────────────────────────────────────
    + '<div class="cite-tabs-wrap">'
    +   '<div class="cite-tabs-label">Select Week</div>'
    +   '<div class="cite-tabs">' + weekTabsHtml + '</div>'
    + '</div>'

    // ── WEEK HEADING ──────────────────────────────────────────
    + '<div class="cite-week-heading">'
    +   '<div class="cite-week-tag">Week ' + data.weekNum + ' of 8</div>'
    +   '<div class="cite-week-name">' + data.weekTitle + '</div>'
    + '</div>'

    // ── SCRIPTURE BLOCK — always first, gold-bordered ─────────
    + '<div class="cite-scripture-block">'
    +   '<div class="cite-scripture-icon">✦</div>'
    +   '<div class="cite-scripture-inner">'
    +     '<div class="cite-scripture-label">Scripture Translation — All Weeks</div>'
    +     '<p class="cite-scripture-text">' + data.scripture.text + '</p>'
    +     '<div class="cite-scripture-applies">Applies to: ' + data.scripture.screens + '</div>'
    +   '</div>'
    + '</div>'

    // ── CITATION CATEGORIES ───────────────────────────────────
    + buildCategories(data.categories)

    // ── PROGRAM STATEMENT ─────────────────────────────────────
    + '<div class="cite-program-statement">'
    +   '<div class="cite-program-statement-label">About This Program</div>'
    +   '<p>Beyond Alone is an educational and spiritual reflection program informed by published psychological research and clinical practice. It is not therapy, medical care, crisis intervention, or a substitute for professional mental health support.</p>'
    +   '<p style="margin-top:0.75rem">The clinical frameworks referenced — Cognitive Behavioral Therapy (CBT), Acceptance and Commitment Therapy (ACT), and Narrative Therapy — are established, evidence-based approaches used by licensed mental health professionals worldwide. Their inclusion here is educational and does not constitute clinical treatment.</p>'
    +   '<p style="margin-top:0.75rem">If you are experiencing significant emotional distress, feel unable to function, or feel at risk of harming yourself, please contact a qualified mental health professional or emergency service immediately.</p>'
    + '</div>'

    // ── FULL BIBLIOGRAPHY NOTE ────────────────────────────────
    + '<div class="cite-bib-note">'
    +   '<div class="cite-bib-note-label">Citation Format</div>'
    +   '<p>References follow APA 7th Edition format. Book titles and journal names appear in italics. All sources cited were current and available as of the program&#39;s publication date.</p>'
    + '</div>'

    + '</div>'; // end citations-page

  // Update topbar
  const topbarNum = document.getElementById('topbar-num');
  const topbarPhase = document.getElementById('topbar-phase');
  const topbarFill = document.getElementById('topbar-progress-fill');
  if (topbarNum) topbarNum.textContent = '¹';
  if (topbarPhase) topbarPhase.textContent = 'Citations — Week ' + data.weekNum;
  if (topbarFill) topbarFill.style.width = '0%';
}


function getCurrentWeekKey() {
  // Returns the citations week matching the current screen position
  // Expands as more weeks are added
  return 'week1';
}


// ============================================================
// CERTIFICATE SYSTEM — Beyond Alone
// Brave Feelings Lab
// Pure localStorage — no database required
// Max 5 prints per certificate
// ============================================================

const CERT_CONFIG = {
  programme:     'Beyond Alone',
  maxPrints:     5,
  adminPassword: 'BFLAdmin2025$'
};

// ── Helpers ──────────────────────────────────────────────────

function certMonthName(d) {
  return ['January','February','March','April','May','June',
          'July','August','September','October','November','December'][d.getMonth()];
}

function certDateDisplay(isoStr) {
  var d = isoStr ? new Date(isoStr + 'T12:00:00') : new Date();
  return certMonthName(d) + ' ' + d.getDate() + ', ' + d.getFullYear();
}

function certApprovalNo() {
  var d   = new Date();
  var pad = function(n){ return String(n).padStart(2,'0'); };
  var ds  = d.getFullYear() + pad(d.getMonth()+1) + pad(d.getDate());
  var key = 'bfl_ba_seq_' + ds;
  var seq = parseInt(localStorage.getItem(key) || '0') + 1;
  localStorage.setItem(key, String(seq));
  return 'BFL-BA-' + ds + '-' + String(seq).padStart(4,'0');
}

// ── Local storage ─────────────────────────────────────────────

function certSaveLocal(cert) {
  localStorage.setItem('bfl_ba_cert_' + cert.approval_no, JSON.stringify(cert));
  var idx = JSON.parse(localStorage.getItem('bfl_ba_cert_index') || '[]');
  if (!idx.includes(cert.approval_no)) idx.push(cert.approval_no);
  localStorage.setItem('bfl_ba_cert_index', JSON.stringify(idx));
}

function certLoadLocal(approvalNo) {
  try { return JSON.parse(localStorage.getItem('bfl_ba_cert_' + approvalNo)); }
  catch(e) { return null; }
}

function certLoadAll() {
  var idx = JSON.parse(localStorage.getItem('bfl_ba_cert_index') || '[]');
  return idx.map(certLoadLocal).filter(Boolean);
}

// ── Submit — instant approval, no password ────────────────────

function submitCertificate() {
  var nameEl = document.getElementById('cert-name-input');
  var wordEl = document.getElementById('cert-word-input');
  if (!nameEl || !wordEl) return;

  var name = (nameEl.value || '').trim();
  var word = (wordEl.value || '').trim();
  if (!name) { alert('Please enter your name for the certificate.'); nameEl.focus(); return; }
  if (!word) { alert('Please enter one word that describes who you are now.'); wordEl.focus(); return; }

  var cert = {
    approval_no:     certApprovalNo(),
    recipient_name:  name,
    programme:       CERT_CONFIG.programme,
    completion_date: new Date().toISOString().slice(0, 10),
    word:            word,
    declaration:     state.answers['S-147'] || '',
    prints_used:     0,
    max_prints:      CERT_CONFIG.maxPrints,
    status:          'approved',
    approved_at:     new Date().toISOString()
  };

  certSaveLocal(cert);

  // Hide form
  var fw = document.getElementById('cert-form-wrap');
  if (fw) fw.style.display = 'none';

  showApprovalResult(cert);
  renderCertRegister();
}

// ── Approval result block ─────────────────────────────────────

function showApprovalResult(cert) {
  var el = document.getElementById('cert-approval-result');
  if (!el) return;
  var remaining = CERT_CONFIG.maxPrints - (parseInt(cert.prints_used) || 0);

  el.style.display = 'block';
  el.innerHTML =
    '<div style="background:#0D3D2E;border:1px solid #1D9E75;border-radius:14px;padding:20px;margin-bottom:1.25rem">' +
      '<div style="font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#5DCAA5;margin-bottom:8px">Official Approval Recorded</div>' +
      '<h3 style="font-size:1.15rem;color:#E8FAF5;margin-bottom:10px">Your certificate is approved and ready.</h3>' +
      '<p style="font-size:13px;color:#A8DFD0;line-height:1.8;margin-bottom:14px">' +
        'Approval No. <strong style="color:#fff">' + cert.approval_no + '</strong> is active for <strong style="color:#fff">' + cert.recipient_name + '</strong>.<br>' +
        'Completed ' + certDateDisplay(cert.completion_date) + '.<br>' +
        'Prints used: <strong style="color:#fff">' + (parseInt(cert.prints_used) || 0) + '</strong> of ' + CERT_CONFIG.maxPrints + '. Remaining: <strong style="color:#fff">' + remaining + '</strong>.' +
      '</p>' +
      '<button onclick="printBACert(' + "'" + cert.approval_no + "'" + ')" ' +
        'style="background:#1D9E75;color:#fff;border:none;border-radius:8px;padding:10px 22px;font-size:13px;font-weight:500;cursor:pointer">' +
        '&#128438;&nbsp; Print Certificate' +
      '</button>' +
    '</div>';
}

// ── Certificate register ──────────────────────────────────────

function renderCertRegister() {
  var wrap = document.getElementById('cert-register-wrap');
  if (!wrap) return;

  // Always reload fresh from localStorage to reflect latest print counts
  var certs = certLoadAll();
  if (!certs.length) { wrap.innerHTML = ''; return; }

  var cards = certs.map(function(cert) {
    var pu        = parseInt(cert.prints_used) || 0;
    var remaining = CERT_CONFIG.maxPrints - pu;
    var canPrint  = remaining > 0 && cert.status !== 'revoked';

    return '<div style="background:var(--bg-card);padding:14px 16px;border-radius:10px;border:1px solid var(--teal-border)">' +
      '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">' +
        '<div style="font-size:10px;color:var(--text-muted);text-transform:uppercase;letter-spacing:.06em;font-weight:500">Approved Record</div>' +
        '<div style="font-size:10px;background:var(--teal-dim);color:var(--teal);border:1px solid var(--teal-border);border-radius:10px;padding:2px 8px">' +
          (cert.status === 'revoked' ? 'Revoked' : 'Approved') +
        '</div>' +
      '</div>' +
      '<div style="font-size:15px;font-weight:500;color:var(--text-primary);margin-bottom:2px">' + cert.recipient_name + '</div>' +
      '<div style="font-size:12px;color:var(--text-tertiary);margin-bottom:5px">' + cert.programme + '</div>' +
      '<div style="font-size:11px;color:var(--text-muted)">Completed ' + cert.completion_date + '</div>' +
      '<div style="font-size:11px;color:var(--text-muted)">Approval No. ' + cert.approval_no + '</div>' +
      '<div style="font-size:11px;color:var(--text-muted)">Prints: ' + pu + '/' + CERT_CONFIG.maxPrints + ' &middot; ' + remaining + ' remaining</div>' +
      (cert.word ? '<div style="font-size:12px;color:var(--text-secondary);font-style:italic;margin-top:4px">&ldquo;' + cert.word + '&rdquo;</div>' : '') +
      (canPrint
        ? '<button onclick="printBACert(' + "'" + cert.approval_no + "'" + ')" style="margin-top:10px;background:var(--teal);color:var(--bg);border:none;border-radius:6px;padding:7px 14px;font-size:12px;cursor:pointer;font-family:var(--font-sans)">&#128438; Print</button>'
        : '<div style="margin-top:8px;font-size:11px;color:var(--text-muted);font-style:italic">' + (cert.status === 'revoked' ? 'Certificate revoked.' : 'Maximum prints reached.') + '</div>') +
    '</div>';
  }).join('');

  wrap.innerHTML =
    '<div style="margin-top:1rem">' +
      '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">' +
        '<div>' +
          '<div style="font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--text-muted)">Official Certificate Centre</div>' +
          '<div style="font-size:15px;font-weight:500;color:var(--text-primary);margin-top:2px">Approved Certificates</div>' +
          '<p style="font-size:11px;color:var(--text-muted);margin-top:3px">Stored in this browser. Your certificate remains fully printable.</p>' +
        '</div>' +
        '<div style="background:var(--teal-dim);border:1px solid var(--teal-border);border-radius:20px;padding:3px 12px;font-size:12px;font-weight:500;color:var(--teal)">' + certs.length + ' approved</div>' +
      '</div>' +
      '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:10px">' + cards + '</div>' +
    '</div>';
}

// ── Print certificate ─────────────────────────────────────────

function printBACert(approvalNo) {
  var cert = certLoadLocal(approvalNo);
  if (!cert) { alert('Certificate not found.'); return; }

  var pu = parseInt(cert.prints_used) || 0;
  if (pu >= CERT_CONFIG.maxPrints) {
    alert('Maximum of ' + CERT_CONFIG.maxPrints + ' prints reached. Contact Brave Feelings Lab to reissue.');
    return;
  }

  // Increment immediately — most reliable cross-browser approach
  cert.prints_used = pu + 1;
  certSaveLocal(cert);
  renderCertRegister();

  // Show undo toast for 12 seconds in case user cancelled
  showPrintUndoToast(approvalNo, pu + 1);

  var word        = cert.word || '';
  var declaration = cert.declaration || state.answers['S-147'] || 'I walked through the valley honestly. I am not alone in it.';
  var printNo     = cert.prints_used;

  var cornerSVG = '<svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M5 85 Q5 5 85 5" stroke="#c9a84c" stroke-width="1.5" fill="none"/>' +
    '<path d="M5 85 Q10 10 85 5" stroke="#c9a84c" stroke-width="0.5" fill="none"/>' +
    '<circle cx="5" cy="85" r="3" fill="#c9a84c"/><circle cx="85" cy="5" r="3" fill="#c9a84c"/>' +
    '<path d="M15 75 Q15 15 75 15" stroke="#c9a84c" stroke-width="0.5" fill="none" stroke-dasharray="3 4"/>' +
    '<path d="M5 55 Q20 20 55 5" stroke="#c9a84c" stroke-width="0.8" fill="none"/>' +
    '<circle cx="5" cy="55" r="2" fill="#c9a84c"/><circle cx="55" cy="5" r="2" fill="#c9a84c"/>' +
    '<path d="M5 35 Q30 30 35 5" stroke="#c9a84c" stroke-width="0.6" fill="none"/>' +
    '<circle cx="5" cy="35" r="1.5" fill="#c9a84c"/><circle cx="35" cy="5" r="1.5" fill="#c9a84c"/>' +
    '</svg>';

  var html = '<!DOCTYPE html><html><head><meta charset="UTF-8">' +
    '<title>Beyond Alone Certificate</title>' +
    '<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@400;500&family=Pinyon+Script&display=swap" rel="stylesheet">' +
    '<style>' +
    '*{box-sizing:border-box;margin:0;padding:0}' +
    '@page{size:11in 8.5in;margin:0}' +
    'html,body{width:11in;height:8.5in;overflow:hidden;background:#faf8f3;font-family:"DM Sans",Georgia,serif}' +
    '.cp{background:#faf8f3;width:10.2in;height:7.7in;position:relative;margin:0.4in auto 0;padding:0.45in 0.65in 0.35in;display:flex;flex-direction:column;align-items:center;text-align:center;border:3px solid #1a2744}' +
    '.corner{position:absolute;width:88px;height:88px}.corner svg{width:88px;height:88px}' +
    '.c-tl{top:6px;left:6px}.c-tr{top:6px;right:6px;transform:scaleX(-1)}' +
    '.c-bl{bottom:6px;left:6px;transform:scaleY(-1)}.c-br{bottom:6px;right:6px;transform:scale(-1,-1)}' +
    '.ib{position:absolute;inset:16px;border:1px solid #c9a84c;pointer-events:none}' +
    '.ey{font-size:11px;font-weight:500;letter-spacing:.2em;text-transform:uppercase;color:#c9a84c;margin-bottom:10px}' +
    '.ct{font-family:"Playfair Display",Georgia,serif;font-size:40px;font-weight:700;color:#1a2744;line-height:1.1;margin-bottom:12px}' +
    '.dr{display:flex;align-items:center;gap:10px;margin:8px 0;width:100%}.dr hr{flex:1;border:none;border-top:1px solid #c9a84c}.di{color:#c9a84c;font-size:14px}' +
    '.ps{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#1a2744;margin-bottom:8px}' +
    '.cl{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#777;margin:10px 0 6px}' +
    '.rn{font-family:"Playfair Display",Georgia,serif;font-size:36px;font-weight:700;color:#1a2744;margin-bottom:10px}' +
    '.ct2{font-size:14px;color:#555;line-height:1.7;margin-bottom:5px}' +
    '.pn{font-family:"Playfair Display",Georgia,serif;font-size:32px;font-weight:700;color:#1a2744;margin:3px 0 5px}' +
    '.ft{font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#666;margin-bottom:14px}' +
    '.db{font-family:"Playfair Display",Georgia,serif;font-size:12px;color:#666;font-style:italic;line-height:1.7;max-width:500px;margin:0 auto 16px;padding:10px 16px;border-top:1px solid #ddd;border-bottom:1px solid #ddd}' +
    '.cf{display:flex;justify-content:space-between;align-items:flex-end;width:100%;margin-top:auto;padding-top:14px}' +
    '.sb{text-align:left}.ss{font-family:"Pinyon Script",cursive;font-size:32px;color:#1a2744;line-height:1.1}' +
    '.sl{width:180px;border-top:1px solid #1a2744;margin:4px 0}' +
    '.sn{font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#1a2744}' +
    '.sr{font-size:10px;color:#777;margin-top:1px}' +
    '.seal{width:88px;height:88px;border-radius:50%;background:#1a2744;border:4px solid #c9a84c;display:flex;align-items:center;justify-content:center;box-shadow:0 0 0 2px #1a2744,0 0 0 6px #c9a84c,0 0 0 8px #1a2744}' +
    '.sw{font-family:"Pinyon Script",cursive;font-size:17px;color:#c9a84c;text-align:center;line-height:1.2}' +
    '.ab{text-align:right}.al{font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:#999}' +
    '.ad{font-size:15px;font-weight:600;color:#1a2744}.an{font-size:11px;font-weight:600;color:#c9a84c;margin-top:3px}' +
    '.ap{font-size:9px;color:#bbb;margin-top:3px}' +
    '.cb{margin-top:12px;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#1a2744}' +
    '.cd{font-size:9px;color:#aaa;margin-top:4px;font-style:italic;letter-spacing:0;text-transform:none;max-width:520px}' +
    '@media print{@page{size:11in 8.5in;margin:0}html,body{width:11in;height:8.5in;background:#faf8f3}.cp{margin:0.4in auto 0;box-shadow:none}}' +
    '</style></head><body>' +
    '<div class="cp">' +
    '<div class="corner c-tl">' + cornerSVG + '</div>' +
    '<div class="corner c-tr">' + cornerSVG + '</div>' +
    '<div class="corner c-bl">' + cornerSVG + '</div>' +
    '<div class="corner c-br">' + cornerSVG + '</div>' +
    '<div class="ib"></div>' +
    '<div class="ey">Brave Feelings Lab</div>' +
    '<div class="ct">Certificate of Completion</div>' +
    '<div class="ps">A Guided Journey Through Loneliness, Faith, and Meaningful Connection</div>' +
    '<div class="cl">This Certifies That</div>' +
    '<div class="rn">' + cert.recipient_name + '</div>' +
    '<div class="ct2">has successfully completed all 150 screens across eight weeks of</div>' +
    '<div class="pn">Beyond Alone</div>' +
    '<div class="ft">CBT &nbsp;&middot;&nbsp; ACT &nbsp;&middot;&nbsp; Narrative Therapy &nbsp;&middot;&nbsp; Biblical Principles &nbsp;&middot;&nbsp; Eight Weeks</div>' +
    '<div class="db">&ldquo;' + declaration + '&rdquo;</div>' +
    '<div class="cf">' +
      '<div class="sb">' +
        '<div class="ss">Benne Hart</div><div class="sl"></div>' +
        '<div class="sn">Benne Hart</div>' +
        '<div class="sr">Guide &amp; Mentor</div>' +
        '<div class="sr">Brave Feelings Lab</div>' +
      '</div>' +
      '<div><div class="seal"><div class="sw">' + word + '</div></div></div>' +
      '<div class="ab">' +
        '<div class="al">Completed:</div><div class="ad">' + cert.completion_date + '</div>' +
        '<div class="al" style="margin-top:6px">Approval No.:</div>' +
        '<div class="an">' + cert.approval_no + '</div>' +
        '<div class="ap">Print ' + printNo + ' of ' + CERT_CONFIG.maxPrints + '</div>' +
      '</div>' +
    '</div>' +
    '<div class="cb">Brave Feelings Lab &nbsp;&middot;&nbsp; bravefeelings.com &nbsp;&middot;&nbsp; beyondalone.bravefeelings.com</div>' +
    '<div class="cd">This certificate acknowledges programme completion only and does not confer licensure, professional certification, or authorisation to practise. Issued exclusively by Brave Feelings Lab. Valid only if recorded, approved and verifiable by the issuer.</div>' +
    '</div>' +
    '<script>window.onload=function(){setTimeout(function(){window.print();setTimeout(function(){window.close();},400);},600);};<' + '/script>' +
    '</body></html>';

  var win = window.open('', '_blank');
  if (!win) { alert('Please allow pop-ups to print your certificate.'); return; }
  win.document.write(html);
  win.document.close();

  // Refresh the approval result block so counter updates on screen
  showApprovalResult(cert);
}

// Show undo toast — user can reverse the count if they cancelled the print
function showPrintUndoToast(approvalNo, newCount) {
  // Remove any existing toast
  var existing = document.getElementById('print-undo-toast');
  if (existing) existing.remove();

  var toast = document.createElement('div');
  toast.id = 'print-undo-toast';
  toast.style.cssText = 'position:fixed;bottom:90px;left:50%;transform:translateX(-50%);' +
    'background:var(--bg-card);border:1px solid var(--teal-border);border-radius:12px;' +
    'padding:12px 20px;z-index:9999;display:flex;align-items:center;gap:14px;' +
    'box-shadow:0 4px 20px rgba(0,0,0,0.4);min-width:280px;max-width:380px;' +
    'animation:slideUp 0.3s ease both;font-family:var(--font-sans)';

  var countdown = 12;
  toast.innerHTML =
    '<div style="flex:1">' +
      '<div style="font-size:13px;color:var(--text-primary);font-weight:500">Print counted (' + newCount + ' of ' + CERT_CONFIG.maxPrints + ')</div>' +
      '<div style="font-size:11px;color:var(--text-muted);margin-top:2px">Did you cancel? <span id="undo-timer">' + countdown + 's</span> to undo.</div>' +
    '</div>' +
    '<button id="undo-print-btn" style="background:var(--coral-dim);border:1px solid rgba(212,130,106,0.3);' +
      'color:var(--coral);border-radius:8px;padding:6px 14px;font-size:12px;font-weight:500;' +
      'cursor:pointer;font-family:var(--font-sans);white-space:nowrap">Undo</button>';

  document.body.appendChild(toast);

  // Countdown timer
  var timerEl;
  var interval = setInterval(function() {
    countdown--;
    timerEl = document.getElementById('undo-timer');
    if (timerEl) timerEl.textContent = countdown + 's';
    if (countdown <= 0) {
      clearInterval(interval);
      var t = document.getElementById('print-undo-toast');
      if (t) t.remove();
    }
  }, 1000);

  // Undo button
  document.getElementById('undo-print-btn').onclick = function() {
    clearInterval(interval);
    var cert = certLoadLocal(approvalNo);
    if (cert) {
      cert.prints_used = Math.max(0, (parseInt(cert.prints_used) || 1) - 1);
      certSaveLocal(cert);
      renderCertRegister();
    }
    var t = document.getElementById('print-undo-toast');
    if (t) t.remove();
    showNotification('Print undone — count restored');
  };
}

