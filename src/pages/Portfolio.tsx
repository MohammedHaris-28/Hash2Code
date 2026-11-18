import { useEffect } from "react";
import type { CSSProperties } from "react";

/* ------------------------------ DATA ------------------------------ */
type Project = [name: string, title: string, desc: string, stack: string, url: string];
const PROJECTS: Project[] = [
  ["VorkHubs", "Hyperlocal on-demand network", "Worker, business and customer dashboards with Supabase Auth and row-level security. Job board, directories, mobile-first, live on its own domain.", "React · TypeScript · Supabase", "https://vorkhubs.com/"],
  ["RestroSync", "Restaurant management", "QR digital menus and restaurant workflows, delivered as a white-label hospitality product for a paying client.", "React · TypeScript · Supabase", "https://restrosync-hash2code.netlify.app/"],
  ["CampusClock", "School management ERP", "Multi-platform system with workflows for admins, teachers, students and parents. Interest from two schools; still in development.", "Flutter · PostgreSQL · Django", "https://campusclockproject.netlify.app/"],
  ["ThreadIt", "Campus social and placement", "Social and placement platform, piloted and reviewed by four professors at a government computer science college.", "React · Supabase", "https://threadit.netlify.app/"],
  ["PulsPense", "Offline finance app", "Offline expense tracking, spending charts, PDF reports, EMI reminders and Google Drive backup.", "Flutter · SQLite · Drive API", "https://pulspense.netlify.app/"],
  ["BloodSync", "Blood donor platform", "Donor discovery and blood-request flows, exploring collaboration with a blood bank and an NGO.", "React · TypeScript · Supabase", "https://bloodsyncproject.netlify.app/"],
];
const STACK: [string, string[]][] = [
  ["Frontend", ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind", "Framer Motion"]],
  ["Backend", ["Supabase", "PostgreSQL", "SQLite", "REST APIs", "Django", "Auth + RLS"]],
  ["Mobile", ["Flutter", "Dart", "Offline-first"]],
  ["Ship", ["Git", "GitHub", "Vercel", "Netlify", "Drive API"]],
  ["Product", ["Requirements", "UI design", "Prototyping", "Testing", "Docs", "Handover"]],
  ["Creative", ["UI design", "Branding", "Graphics", "Photography"]],
];
const CLIENTS: [string, string][] = [
  ["Sir M. V. Govt Science College", "Library website"],
  ["Dr. Holla’s Wide Smiles", "Dental clinic site"],
  ["ProSmile Dental Clinic", "Recovery and upkeep"],
  ["Mayya’s Residency Cloud 9", "Site, QR menu, bookings"],
  ["ThunderFitness", "Gym website"],
];
const MARQUEE = ["React", "TypeScript", "Supabase", "PostgreSQL", "Flutter", "Tailwind", "Framer Motion", "Vercel", "Netlify", "Django"];
const TRACE = "M-20 160H380L470 250V520L560 610H1000L1090 700V1000L1180 1090H1460";

/* ------------------------------ STYLES ------------------------------ */
const CSS = `
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap");
:root{--bg:#f7fafb;--ink:#090a0b;--mute:rgb(9 10 11/.4);--line:#dfe5e9;--dark:#090a0b;--panel:#0e0f14;--acc:#02d2e3;--soft:#b6c1c8;--ease:cubic-bezier(.2,0,0,1);--disp:"Oswald",Impact,sans-serif;--sans:"Space Grotesk",system-ui,sans-serif;box-sizing:border-box}
*,*::before,*::after{box-sizing:inherit}
html{scroll-behavior:smooth;scroll-padding-top:4rem}
body{margin:0;background:var(--bg);color:var(--ink);font-family:var(--sans);text-transform:uppercase;line-height:1.1;overflow-x:hidden;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}
a{color:inherit;text-decoration:none;transition:color .15s var(--ease)}a:hover{color:var(--acc)}
a:focus-visible,button:focus-visible{outline:2px solid var(--acc);outline-offset:3px}
h1,h2,h3{font-family:var(--disp);font-weight:700;line-height:.95;margin:0}
.w{display:inline-block;overflow:visible}.w>i{display:inline-block;font-style:normal;opacity:0;transform:translateY(.35em);transition:opacity .7s var(--ease),transform .7s var(--ease)}
.in .w>i,.w.in>i{opacity:1;transform:none}
[data-r]{opacity:0;transform:translateY(1.25rem);transition:opacity .8s var(--ease),transform .8s var(--ease)}[data-r].in{opacity:1;transform:none}
canvas.bg{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}
#veil{position:fixed;inset:0;z-index:60;background:var(--bg);display:flex;flex-direction:column;align-items:center;justify-content:center;transition:opacity .7s .25s var(--ease)}
#veil.off{opacity:0;pointer-events:none}
#veil b{font-family:var(--disp);font-size:4.5rem;letter-spacing:.04em;display:flex;gap:.04em}
#veil b span{opacity:.12;transition:opacity .2s}#veil b span.on{opacity:1}
#veil p{margin:1rem 0 0;font-size:1rem;letter-spacing:.18em}
#meter{position:absolute;left:0;bottom:0;height:4px;width:100%;background:var(--line)}#meter i{display:block;height:100%;background:var(--ink);transform:scaleX(0);transform-origin:left;transition:transform .25s}
header{position:fixed;top:0;left:0;right:0;z-index:50;display:flex;align-items:center;justify-content:space-between;padding:calc(1.1rem + env(safe-area-inset-top,0px)) 1.5rem 1rem;mix-blend-mode:normal}
header .logo{font-family:var(--disp);font-weight:700;font-size:1.5rem}
header nav{display:flex;gap:2.5rem;font-size:1rem}
header .hire{font-weight:700;font-size:1rem}
@media(max-width:800px){header nav{display:none}}
.hero{position:relative;min-height:100vh;min-height:100lvh;display:flex;flex-direction:column;justify-content:center;padding:6rem 1.5rem 2rem;overflow:hidden;isolation:isolate}
.hero .id{color:var(--mute);font-size:1rem;margin-bottom:1rem}
.hero h1{font-size:clamp(3.6rem,10.5vw,9.5rem);max-width:7em}
.meta{list-style:none;padding:0;margin:2.2rem 0 0;display:grid;gap:.9rem;font-size:1.125rem}
.meta li{display:flex;align-items:center;gap:.6rem}.meta svg{width:1rem;height:1rem;stroke:var(--ink);fill:none;stroke-width:1.5}
.stage{position:absolute;right:2vw;top:50%;transform:translateY(-50%);width:min(46vw,640px);aspect-ratio:1;z-index:-1}
.stage canvas{width:100%;height:100%}
.term{position:absolute;right:1.5rem;bottom:2rem;width:min(30rem,calc(100% - 3rem));background:var(--panel);color:#fff;padding:1.1rem 1.3rem;font:500 .78rem/1.55 ui-monospace,Menlo,monospace;text-transform:none;clip-path:polygon(0 0,100% 0,100% calc(100% - 14px),calc(100% - 14px) 100%,0 100%);border:0}
.term pre{margin:0;white-space:pre-wrap;min-height:9.3em}.term .c{color:var(--acc)}.term .m{color:var(--soft)}
.term::after{content:"";position:absolute;inset:0;border:1px solid var(--acc);opacity:.35;pointer-events:none}
.br{position:relative;padding:1rem 1.2rem}.br::before,.br::after,.br i::before,.br i::after{content:"";position:absolute;width:10px;height:10px;border:solid currentColor;border-width:0}
.br::before{top:0;left:0;border-width:1px 0 0 1px}.br::after{top:0;right:0;border-width:1px 1px 0 0}.br i::before{bottom:0;left:0;border-width:0 0 1px 1px}.br i::after{bottom:0;right:0;border-width:0 1px 1px 0}
.stats{display:flex;gap:2.2rem;margin-top:2.4rem;width:max-content;max-width:100%}
.stats em{display:block;font:normal 400 .75rem var(--sans);letter-spacing:-.02em;color:var(--acc);margin-bottom:.7rem}
.stats strong{font:500 2.4rem/.8 var(--disp);letter-spacing:-.08em}
@media(max-width:900px){.stage{opacity:.55;width:90vw;right:-20vw;top:62%}.term{position:relative;right:auto;bottom:auto;margin-top:2rem}}
.scrollcue{position:absolute;left:1.5rem;bottom:1.5rem;font-size:.875rem;display:flex;gap:.6rem;align-items:center}
.scrollcue::before{content:"";width:2rem;height:1px;background:var(--ink)}
@media(max-width:900px){.scrollcue{display:none}}
.mq{background:var(--acc);color:var(--dark);overflow:hidden;white-space:nowrap;border-block:1px solid var(--dark)}
.mq div{display:inline-flex;animation:none;will-change:transform;font:700 1.5rem var(--disp);padding:.7rem 0}
.mq span{padding:0 1.6rem}.mq span::after{content:"";display:inline-block;width:.5rem;height:.5rem;background:var(--dark);margin-left:3.2rem;vertical-align:middle;transform:rotate(45deg)}
.dark{background:var(--dark);color:#fff;position:relative;isolation:isolate;overflow:hidden}
.work{padding:7rem 1.5rem 6rem}
.work h2,.exp h2,.stack h2{font-size:clamp(2.6rem,5.2vw,4.4rem);color:var(--acc);max-width:7em}
.work h2 b,.exp h2 b,.stack h2 b,.foot h2 b{color:#fff;font-weight:700}
.work .lead{margin:1.6rem 0 0;max-width:20rem;font-size:1.125rem}
.trace{position:absolute;inset:0;width:100%;height:100%;z-index:-1;opacity:.9}
.trace path.base{stroke:#2a2d36;fill:none;stroke-width:2;stroke-dasharray:12 8}
.trace path.run{fill:none;stroke:var(--acc);stroke-width:4;stroke-linecap:round;filter:drop-shadow(0 0 7px rgb(2 210 227/.6))}
.trace polygon{fill:var(--acc);opacity:0;transition:opacity .4s}.trace polygon.on{opacity:1}
.list{margin-top:4rem;border-top:1px solid #2a2d36}
.row{display:grid;grid-template-columns:3.5rem 1.2fr 1.6fr auto;gap:1.5rem;align-items:center;padding:1.7rem 0;border-bottom:1px solid #2a2d36;transition:opacity .5s var(--ease),padding .4s var(--ease),background .3s}
.list:hover .row{opacity:.35}.list .row:hover{opacity:1;padding-left:1rem;background:linear-gradient(90deg,rgb(2 210 227/.1),transparent)}
.row .n{color:var(--acc);font-size:.875rem}.row h3{font-size:clamp(1.6rem,3vw,2.4rem)}
.row p{margin:0;font-size:.875rem;color:var(--soft);line-height:1.35;max-width:30rem}.row p small{display:block;margin-top:.5rem;color:#fff;font-size:.75rem;letter-spacing:.04em}
.row a.go{font-size:.875rem;border:1px solid var(--acc);padding:.7rem 1rem;color:var(--acc);clip-path:polygon(0 0,100% 0,100% 70%,90% 100%,0 100%);transition:background .25s var(--ease),color .25s}
.row a.go:hover{background:var(--acc);color:var(--dark)}
@media(max-width:800px){.row{grid-template-columns:2rem 1fr;gap:.6rem 1rem}.row p,.row a.go{grid-column:2}.row a.go{justify-self:start}}
.stack{padding:6rem 1.5rem}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(15rem,1fr));gap:1.5rem;margin-top:3rem}
.card{padding:1.4rem;position:relative;border:1px solid var(--line);background:rgb(255 255 255/.5);transition:transform .35s var(--ease),border-color .25s,background .25s}
.card:hover{transform:translateY(-6px);border-color:var(--acc);background:#fff}
.card h3{font-size:1.3rem;margin-bottom:1rem}.card ul{list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;gap:.45rem}
.card li{font-size:.75rem;padding:.4rem .6rem;border:1px solid var(--ink);transition:background .2s,color .2s}.card:hover li{background:var(--ink);color:var(--acc);border-color:var(--ink)}
.stack h2{color:var(--ink)}.stack h2 b{color:var(--acc)}
.clients{margin-top:4rem;display:flex;flex-wrap:wrap;gap:1rem}.clients a{font:700 1.15rem var(--disp);padding:.9rem 1.2rem;border:1px solid var(--ink);position:relative;overflow:hidden;isolation:isolate}
.clients a::before{content:"";position:absolute;inset:0;background:var(--acc);transform:scaleX(0);transform-origin:left;transition:transform .25s cubic-bezier(.33,0,0,1);z-index:-1}.clients a:hover{color:var(--ink)}.clients a:hover::before{transform:scaleX(1)}
.clients small{display:block;font:400 .7rem var(--sans);opacity:.6;margin-top:.35rem}
.exp{padding:6rem 1.5rem}
.tl{position:relative;margin:4rem auto 0;max-width:62rem;padding-left:3rem}
.rail{position:absolute;left:0;top:0;bottom:0;width:16px}.rail::before{content:"";position:absolute;left:7.5px;top:0;bottom:0;width:1px;background:rgb(255 255 255/.2)}
.rail i{position:absolute;left:7.5px;top:0;width:1px;background:#fff;height:0}.rail b{position:absolute;left:3px;top:0;width:10px;height:10px;background:#fff;margin-top:-5px}
.ev{padding-bottom:3.5rem;position:relative}.ev time{font:700 2.25rem var(--disp);color:var(--acc);opacity:.4;transition:opacity .6s}.ev.in time{opacity:1}
.ev h3{font-size:1.5rem;margin:.6rem 0 .8rem}.ev p{margin:0;max-width:34rem;font-size:.95rem;line-height:1.4;color:var(--soft)}
.foot{background:var(--acc);padding:1rem;position:relative}
.foot .pan{background:var(--dark);color:#fff;position:relative;overflow:hidden;isolation:isolate;padding:5rem 2rem 2rem;min-height:30rem;display:flex;flex-direction:column;justify-content:space-between;gap:4rem}
.foot h2{font-size:clamp(3.2rem,9vw,8rem);color:var(--acc)}
.foot .big{font:700 clamp(1.4rem,3vw,2.4rem) var(--disp);word-break:break-all}
.foot .row2{display:flex;flex-wrap:wrap;gap:1.5rem 3rem;justify-content:space-between;font-size:.875rem;align-items:center}
.cta{display:inline-block;color:var(--acc);border:1px solid var(--acc);padding:1rem 1.6rem;font-size:1.1rem;clip-path:polygon(0 0,100% 0,100% 82%,96% 100%,0 100%);position:relative;overflow:hidden;isolation:isolate;margin-top:1.8rem}
.cta::before{content:"";position:absolute;inset:0;background:var(--acc);transform:scaleX(0);transform-origin:left;transition:transform .25s cubic-bezier(.33,0,0,1);z-index:-1}.cta:hover{color:var(--dark)}.cta:hover::before{transform:scaleX(1)}
.faint{color:rgb(255 255 255/.4)}
@media(prefers-reduced-motion:reduce){*{transition:none!important;animation:none!important}.w>i,[data-r]{opacity:1;transform:none}}
`;

/* ------------------------- SPLIT-TEXT HEADING ------------------------- */
type Part = string | { b: string };
type SplitProps = { as?: "h1" | "h2"; parts: Part[]; style?: CSSProperties };

function Split({ as: Tag = "h2", parts, style }: SplitProps) {
  let k = 0;
  const words = (text: string, p: number) =>
    text.split(/(\s+)/).map((t, i) =>
      !t.trim() ? (
        t
      ) : (
        <span className="w" key={`${p}-${i}`}>
          <i style={{ transitionDelay: `${k++ * 90}ms` }}>{t}</i>
        </span>
      )
    );
  return (
    <Tag data-split="" style={style}>
      {parts.map((part, p) =>
        typeof part === "string" ? words(part, p) : <b key={p}>{words(part.b, p)}</b>
      )}
    </Tag>
  );
}

/* ------------------------------ COMPONENT ------------------------------ */
export default function Portfolio() {
  useEffect(() => {
    const $ = <T extends Element = HTMLElement>(s: string) => document.querySelector(s) as T;
    const RM = matchMedia("(prefers-reduced-motion:reduce)").matches;
    const observers: IntersectionObserver[] = [];
    const timers: number[] = [];
    let raf = 0;
    let alive = true;

    const mq = $("#mq");
    let mx = 0;

    /* reveal */
    const count = (box: Element) => {
      box.querySelectorAll<HTMLElement>("[data-n]").forEach((n) => {
        const T = +(n.dataset.n || 0), t0 = performance.now();
        const f = (t: number) => {
          const u = Math.min(1, (t - t0) / 1200);
          n.textContent = String(Math.round(T * (1 - Math.pow(1 - u, 3))));
          if (u < 1) requestAnimationFrame(f);
        };
        requestAnimationFrame(f);
      });
    };
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
            if (e.target.querySelector("[data-n]")) count(e.target);
          }
        }),
      { rootMargin: "0px 0px -12% 0px" }
    );
    observers.push(io);
    const start = () => {
      document.querySelectorAll<HTMLElement>("[data-r],[data-split],.ev").forEach((e, i) => {
        if (e.dataset.r !== undefined && !e.closest(".hero")) e.style.transitionDelay = (i % 4) * 70 + "ms";
        io.observe(e);
      });
    };

    /* terminal */
    const code: [string, string][] = [
      ["m", "// haris.config.ts"],
      ["", "const dev = {"],
      ["", "  name: 'Mohammed Haris',"],
      ["", "  stack: ['React','TS','Supabase'],"],
      ["", "  ships: 'end to end',"],
      ["c", "  status: 'open to work'"],
      ["", "};"],
    ];
    const txt = code.map((l) => l[1]).join("\n");
    const type = () => {
      const pre = $("#pre");
      if (RM) {
        pre.innerHTML = code.map((l) => `<span class="${l[0]}">${l[1]}</span>`).join("\n");
        return;
      }
      let i = 0;
      const go = () => {
        if (!alive) return;
        i += 2;
        let n = 0, h = "";
        for (const l of code) {
          const t = l[1].slice(0, Math.max(0, i - n));
          h += `<span class="${l[0]}">${t.replace(/</g, "&lt;")}</span>\n`;
          n += l[1].length + 1;
        }
        pre.innerHTML = h + (i < txt.length ? "▌" : "");
        if (i < txt.length + 4) timers.push(window.setTimeout(go, 28));
      };
      go();
    };

    /* contours */
    const contour = (cv: HTMLCanvasElement, col: string, alpha: number) => {
      const x = cv.getContext("2d")!;
      let vis = true;
      const o = new IntersectionObserver((e) => (vis = e[0].isIntersecting));
      o.observe(cv);
      observers.push(o);
      const field = (a: number, b: number, t: number) => {
        const f =
          Math.sin(a + t * 0.6) * 0.5 + Math.sin(b * 0.85 - t * 0.45) * 0.45 +
          Math.sin((a + b) * 0.65 + t * 0.35) * 0.35 + Math.sin((a - b) * 0.95 - t * 0.55) * 0.25;
        return f * 0.5 + 0.5;
      };
      let last = 0;
      return (t: number) => {
        if (!vis || t - last < 40) return;
        last = t;
        const r = devicePixelRatio > 1.5 ? 1.5 : 1, w = cv.clientWidth, h = cv.clientHeight;
        if (cv.width !== w * r) { cv.width = w * r; cv.height = h * r; }
        x.setTransform(r, 0, 0, r, 0, 0);
        x.clearRect(0, 0, w, h);
        const T = (t / 1000) * 1.66,
          cols = w >= h ? 80 : Math.max(8, Math.round((80 * w) / h)),
          rows = Math.max(8, Math.round((cols * h) / w)),
          sx = w / cols, sy = h / rows, asp = w / h,
          v = new Float32Array((cols + 1) * (rows + 1));
        for (let j = 0; j <= rows; j++)
          for (let i = 0; i <= cols; i++) {
            const nx = ((i / cols) * 2 - 1) * asp * 3.8, ny = ((j / rows) * 2 - 1) * 3.8;
            v[j * (cols + 1) + i] =
              field(nx + Math.sin(ny * 0.8 + T * 0.7) * 0.37, ny + Math.cos(nx * 0.7 - T * 0.6) * 0.37, T) * 2.5;
          }
        x.strokeStyle = col; x.globalAlpha = alpha; x.lineWidth = 1; x.beginPath();
        for (let L = 0.5; L < 2.5; L++)
          for (let j = 0; j < rows; j++)
            for (let i = 0; i < cols; i++) {
              const a = v[j * (cols + 1) + i], b = v[j * (cols + 1) + i + 1],
                c = v[(j + 1) * (cols + 1) + i + 1], d = v[(j + 1) * (cols + 1) + i];
              const k = (a > L ? 8 : 0) | (b > L ? 4 : 0) | (c > L ? 2 : 0) | (d > L ? 1 : 0);
              if (!k || k === 15) continue;
              const x0 = i * sx, y0 = j * sy,
                tp = [x0 + sx * ((L - a) / (b - a)), y0],
                rt = [x0 + sx, y0 + sy * ((L - b) / (c - b))],
                bt = [x0 + sx * ((L - d) / (c - d)), y0 + sy],
                lf = [x0, y0 + sy * ((L - a) / (d - a))];
              const s = (p: number[], q: number[]) => { x.moveTo(p[0], p[1]); x.lineTo(q[0], q[1]); };
              switch (k) {
                case 1: case 14: s(lf, bt); break;
                case 2: case 13: s(bt, rt); break;
                case 3: case 12: s(lf, rt); break;
                case 4: case 11: s(tp, rt); break;
                case 6: case 9: s(tp, bt); break;
                case 7: case 8: s(lf, tp); break;
                case 5: s(lf, tp); s(bt, rt); break;
                case 10: s(lf, bt); s(tp, rt);
              }
            }
        x.stroke(); x.globalAlpha = 1;
      };
    };
    const d1 = contour($<HTMLCanvasElement>("#c1"), "#dfe5e9", 1);
    const d2 = contour($<HTMLCanvasElement>("#c2"), "#fff", 0.1);

    /* wireframe globe */
    const gc = $<HTMLCanvasElement>("#globe"), gx = gc.getContext("2d")!, N = 110;
    const pts: number[][] = [];
    for (let i = 0; i < N; i++) {
      const y = 1 - (2 * (i + 0.5)) / N, r = Math.sqrt(1 - y * y), a = i * 2.39996;
      pts.push([Math.cos(a) * r, y, Math.sin(a) * r]);
    }
    let px = 0, py = 0, tx = 0, ty = 0;
    const onMove = (e: PointerEvent) => {
      tx = (e.clientX / innerWidth) * 2 - 1;
      ty = (e.clientY / innerHeight) * 2 - 1;
    };
    addEventListener("pointermove", onMove);
    const globe = (t: number) => {
      const r = devicePixelRatio > 1.5 ? 1.5 : 1, s = gc.clientWidth;
      if (!s) return;
      if (gc.width !== s * r) { gc.width = gc.height = s * r; }
      gx.setTransform(r, 0, 0, r, 0, 0);
      gx.clearRect(0, 0, s, s);
      px += (tx - px) * 0.06; py += (ty - py) * 0.06;
      const ay = t / 5000 + px * 0.8, ax = 0.35 + py * 0.5,
        cy = Math.cos(ay), sy = Math.sin(ay), cx = Math.cos(ax), sx = Math.sin(ax),
        R = s * 0.36, c = s / 2;
      const q = pts.map((p) => {
        const x = p[0] * cy + p[2] * sy;
        let z = -p[0] * sy + p[2] * cy;
        const y = p[1] * cx - z * sx;
        z = p[1] * sx + z * cx;
        const k = 1 / (1.9 - z * 0.5);
        return [c + x * R * k * 1.5, c + y * R * k * 1.5, z];
      });
      gx.lineWidth = 1;
      for (let i = 0; i < N; i++)
        for (let j = i + 1; j < N; j++) {
          const dx = pts[i][0] - pts[j][0], dy = pts[i][1] - pts[j][1], dz = pts[i][2] - pts[j][2];
          if (dx * dx + dy * dy + dz * dz < 0.17) {
            gx.strokeStyle = `rgba(9,10,11,${0.1 + (0.22 * ((q[i][2] + q[j][2]) / 2 + 1)) / 2})`;
            gx.beginPath(); gx.moveTo(q[i][0], q[i][1]); gx.lineTo(q[j][0], q[j][1]); gx.stroke();
          }
        }
      q.forEach((p, i) => {
        const a = (p[2] + 1) / 2;
        gx.fillStyle = i % 9 === 0 ? "#02d2e3" : `rgba(9,10,11,${0.3 + a * 0.6})`;
        const z = i % 9 === 0 ? 3.4 : 1.8;
        gx.fillRect(p[0] - z / 2, p[1] - z / 2, z, z);
      });
      gx.strokeStyle = "rgba(2,210,227,.55)";
      for (let k = 0; k < 3; k++) {
        gx.beginPath();
        gx.ellipse(c, c, R * 1.6, R * (0.5 + k * 0.25), (t / 7000) * (k % 2 ? -1 : 1) + k, 0, 6.283);
        gx.stroke();
      }
      const m = (t / 1500) % 1, oa = (t / 1500) * 3;
      gx.fillStyle = "#02d2e3"; gx.beginPath();
      gx.arc(c + Math.cos(oa) * R * 1.6, c + Math.sin(oa) * R * 0.8, 4 + 3 * m, 0, 6.283);
      gx.fill();
    };

    /* scroll */
    const tb = $<SVGPathElement>("#tb"), tr = $<SVGPathElement>("#tr");
    const L = tb.getTotalLength();
    const tris = document.querySelectorAll(".trace polygon");
    const work = $("#work");
    tr.style.strokeDasharray = String(L);
    tr.style.strokeDashoffset = String(L);
    const fr = [0.2, 0.4, 0.62, 0.84];
    const scroll = () => {
      const vh = innerHeight;
      const r = work.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (vh * 0.7 - r.top) / (r.height * 0.8)));
      tr.style.strokeDashoffset = String(L * (1 - p));
      tris.forEach((t, i) => t.classList.toggle("on", p >= fr[i]));
      const tl = $("#tl"), b = tl.getBoundingClientRect();
      const u = Math.min(1, Math.max(0, (vh * 0.6 - b.top) / b.height)), H = b.height - 20;
      $("#rp").style.height = u * H + "px";
      const m = $("#rm");
      m.style.top = u * H + "px";
      m.style.transform = `rotate(${u * 1800}deg)`;
    };

    const loop = (t: number) => {
      if (!alive) return;
      d1(t); d2(t); globe(t);
      mx -= 0.7;
      const h = mq.scrollWidth / 2;
      if (-mx > h) mx = 0;
      mq.style.transform = `translateX(${mx}px)`;
      scroll();
      raf = requestAnimationFrame(loop);
    };

    /* boot */
    const vl = $("#vl");
    vl.innerHTML = "";
    "HARIS".split("").forEach((c) => {
      const s = document.createElement("span");
      s.textContent = c;
      vl.append(s);
    });
    const sp = [...vl.children], mt = $("#meter i");
    let k = 0;
    const iv = window.setInterval(() => {
      if (sp[k]) sp[k].classList.add("on");
      k++;
      mt.style.transform = `scaleX(${Math.min(1, k / 5)})`;
      if (k > 5) {
        clearInterval(iv);
        $("#veil").classList.add("off");
        start();
        timers.push(window.setTimeout(type, 500));
      }
    }, RM ? 10 : 160);
    timers.push(iv);
    raf = requestAnimationFrame(loop);

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      timers.forEach((t) => { clearTimeout(t); clearInterval(t); });
      observers.forEach((o) => o.disconnect());
      removeEventListener("pointermove", onMove);
    };
  }, []);

  const doubled = [0, 1].flatMap((n) => MARQUEE.map((w) => ({ w, key: `${n}-${w}` })));

  return (
    <>
      <style>{CSS}</style>

      <div id="veil" role="status" aria-label="Loading">
        <b id="vl"></b>
        <p>Booting portfolio</p>
        <div id="meter"><i></i></div>
      </div>


      <main id="top">
        <section className="hero">
          <canvas className="bg" id="c1" aria-hidden="true"></canvas>
          <div className="stage" aria-hidden="true"><canvas id="globe"></canvas></div>
          <div className="id" data-r="">dev_001 / bhadravathi, karnataka</div>
          <Split as="h1" parts={["Mohammed Haris"]} />
          <ul className="meta" data-r="">
            <li>
              <svg viewBox="0 0 16 16"><path d="M5 4 1 8l4 4M11 4l4 4-4 4M9 2 7 14" /></svg>
              Full-stack developer
            </li>
            <li>
              <svg viewBox="0 0 16 16"><path d="M8 1l2 5 5 .5-4 3.5 1.5 5L8 12l-4.5 3L5 10 1 6.500 6 6z" /></svg>
              Founder, #2Code Studio
            </li>
            <li>
              <svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" /><path d="M2 8h12M8 2c3 3 3 9 0 12M8 2c-3 3-3 9 0 12" /></svg>
              Open to remote, hybrid, on-site
            </li>
          </ul>
          <div className="br stats" data-r="">
            <i></i>
            <div><em>Live products</em><strong data-n="6">0</strong><strong>+</strong></div>
            <div><em>Clients served</em><strong data-n="5">0</strong></div>
            <div><em>Years building</em><strong data-n="2">0</strong><strong>+</strong></div>
          </div>
          <div className="term" data-r=""><pre id="pre"></pre></div>
          <div className="scrollcue">Scroll</div>
        </section>

        <div className="mq" aria-hidden="true">
          <div id="mq">
            {doubled.map(({ w, key }) => <span key={key}>{w}</span>)}
          </div>
        </div>

        <section className="dark work" id="work">
          <svg className="trace" viewBox="0 0 1440 1400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <path className="base" id="tb" d={TRACE} />
            <path className="run" id="tr" d={TRACE} />
            <polygon points="12,0 -6,10 -6,-10" transform="translate(425,205) rotate(45)" />
            <polygon points="12,0 -6,10 -6,-10" transform="translate(515,565) rotate(45)" />
            <polygon points="12,0 -6,10 -6,-10" transform="translate(1045,655) rotate(45)" />
            <polygon points="12,0 -6,10 -6,-10" transform="translate(1135,1045) rotate(45)" />
          </svg>
          <Split parts={["Selected work", { b: "." }]} />
          <p className="lead" data-r="">Real products, shipped to real businesses. Built end to end.</p>
          <div className="list" id="list">
            {PROJECTS.map((p, i) => (
              <div className="row" data-r="" key={p[0]}>
                <span className="n">0{i + 1}</span>
                <h3>{p[0]}</h3>
                <p>{p[2]}<small>{p[3]}</small></p>
                <a className="go" href={p[4]} rel="noopener" aria-label={`Open ${p[0]}`}>Live →</a>
              </div>
            ))}
          </div>
        </section>

        <section className="stack" id="stack">
          <Split parts={["The stack", { b: "." }]} />
          <div className="grid" id="grid">
            {STACK.map((s) => (
              <div className="card" data-r="" key={s[0]}>
                <h3>{s[0]}</h3>
                <ul>{s[1].map((x) => <li key={x}>{x}</li>)}</ul>
              </div>
            ))}
          </div>
          <Split
            parts={["Clients served", { b: "." }]}
            style={{ marginTop: "6rem", fontSize: "clamp(2rem,4vw,3rem)" }}
          />
          <div className="clients" id="clients">
            {CLIENTS.map((c) => (
              <a href="#contact" data-r="" key={c[0]}>{c[0]}<small>{c[1]}</small></a>
            ))}
          </div>
        </section>

        <section className="dark exp" id="exp">
          <Split parts={["The journey", { b: "." }]} />
          <div className="tl" id="tl">
            <div className="rail"><i id="rp"></i><b id="rm"></b></div>
            <div className="ev">
              <time>2025 – Now</time>
              <h3>Founder, #2Code Studio</h3>
              <p>Plan, design, build and hand over websites, apps and digital business solutions. Requirements to deployment, with documentation for every client.</p>
            </div>
            <div className="ev">
              <time>2021 – 2024</time>
              <h3>Site supervisor, construction</h3>
              <p>Coordinated workers, materials and quality across about five residential and two commercial buildings. Field surveys and document audits for LHM Real-Estate Layout Developers.</p>
            </div>
            <div className="ev">
              <time>2019 – 2025</time>
              <h3>Operations, Ashir Concrete Block</h3>
              <p>Family business. Production coordination, quality checks, sales, customer communication, administration and accounts support.</p>
            </div>
            <div className="ev">
              <time>Award</time>
              <h3>District-level INSPIRE Award</h3>
              <p>For a plastic-recycling-based tile, roof tile and paver-block concept.</p>
            </div>
          </div>
        </section>

        <section className="foot" id="contact">
          <div className="pan">
            <canvas className="bg" id="c2" aria-hidden="true"></canvas>
            <div>
              <Split parts={["Let’s build ", { b: "something" }, " real", { b: "." }]} />
              <a className="cta" href="mailto:mohammedharis2805@gmail.com">Email me →</a>
            </div>
            <div>
              <div className="big">mohammedharis2805@gmail.com</div>
              <div className="row2" style={{ marginTop: "2rem" }}>
                <span className="faint">© 2026 Mohammed Haris. Bhadravathi, Karnataka.</span>
                <span><a href="tel:+919902804425">+91 99028 04425</a></span>
                <span style={{ display: "flex", gap: "2rem" }}>
                  <a href="https://github.com/MohammedHaris-28" rel="noopener">GitHub</a>
                  <a href="https://vorkhubs.com/" rel="noopener">VorkHubs</a>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}