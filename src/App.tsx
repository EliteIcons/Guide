import { useState } from 'react';
import {
  Rocket,
  Code,
  Bolt,
  Mosque,
  ShieldCheck,
  Terminal,
  Copy,
  Check,
  Sparkles,
  Layers,
} from 'elite-icons-react';

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="code-wrap">
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? (
          <>
            <Check size={14} color="#000" /> COPIED
          </>
        ) : (
          <>
            <Copy size={14} /> COPY
          </>
        )}
      </button>
      <pre>{code}</pre>
    </div>
  );
}

export function App() {
  const [demoSize, setDemoSize] = useState(36);
  const [demoStroke, setDemoStroke] = useState(2);
  const [demoColor, setDemoColor] = useState('#ccff00');

  const reactExample = `import { Rocket, Mosque, Bolt, ShieldCheck } from 'elite-icons-react';

export function App() {
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Rocket size={${demoSize}} color="${demoColor}" strokeWidth={${demoStroke}} />
      <Mosque size={${demoSize}} color="${demoColor}" strokeWidth={${demoStroke}} />
      <Bolt size={${demoSize}} color="${demoColor}" strokeWidth={${demoStroke}} />
      <ShieldCheck size={${demoSize}} color="${demoColor}" strokeWidth={${demoStroke}} />
    </div>
  );
}`;

  const cdnExample = `<!-- Use any EliteIcon directly via jsDelivr CDN (no install needed) -->
<img
  src="https://jsdelivr.net"
  width="24"
  height="24"
  alt="Rocket"
/>`;

  const rawSvgExample = `<svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
</svg>`;

  return (
    <div className="guide">
      <header className="topbar">
        <div className="brand">
          <Sparkles size={20} color="#ccff00" />
          <h1>
            ELITE<span>ICONS</span> / GUIDE
          </h1>
        </div>
        <nav className="nav">
          <a href="https://eliteicons.github.io">GALLERY ↗</a>
          <a href="https://eliteicons.github.io/Icon-Studio/">ICON STUDIO ↗</a>
      <a href="https://eliteicons.github.io/Showcase/">SHOWCASE 🡕</a>
        </nav>
      </header>

      <main className="content">
        {/* Hero */}
        <section className="hero-box">
          <span className="pill">DEVELOPER DOCUMENTATION // V1.0</span>
          <h2>
            USE <span className="accent">ELITE-ICONS-REACT</span> &amp; SVGS IN SECONDS
          </h2>
          <p>
            Every icon in EliteIcons is built on a strict 24×24 pixel grid with 2px round strokes,
            compiled automatically into tree-shakeable TypeScript React components and zero-bloat SVGs.
          </p>
        </section>

        {/* Interactive React Component Playground */}
        <section className="section">
          <div className="section-head">
            <Code size={18} color="#ccff00" />
            <h3>1. LIVE REACT COMPONENT PLAYGROUND</h3>
          </div>
          <p className="desc">
            These icons below are rendered live using <code>elite-icons-react</code>. Adjust the props
            to see how they respond in real time:
          </p>

          <div className="playground">
            <div className="live-stage">
              <Rocket size={demoSize} color={demoColor} strokeWidth={demoStroke} />
              <Mosque size={demoSize} color={demoColor} strokeWidth={demoStroke} />
              <Bolt size={demoSize} color={demoColor} strokeWidth={demoStroke} />
              <ShieldCheck size={demoSize} color={demoColor} strokeWidth={demoStroke} />
            </div>

            <div className="sliders">
              <label>
                <span>COLOR</span>
                <input
                  type="color"
                  value={demoColor}
                  onChange={(e) => setDemoColor(e.target.value)}
                />
              </label>
              <label>
                <span>SIZE: {demoSize}PX</span>
                <input
                  type="range"
                  min="16"
                  max="64"
                  value={demoSize}
                  onChange={(e) => setDemoSize(Number(e.target.value))}
                />
              </label>
              <label>
                <span>STROKE: {demoStroke}PX</span>
                <input
                  type="range"
                  min="1"
                  max="3.5"
                  step="0.25"
                  value={demoStroke}
                  onChange={(e) => setDemoStroke(Number(e.target.value))}
                />
              </label>
            </div>
          </div>

          <CodeBlock code={reactExample} />
        </section>

        {/* Props Table */}
        <section className="section">
          <div className="section-head">
            <Layers size={18} color="#ccff00" />
            <h3>2. REACT COMPONENT PROPS</h3>
          </div>
          <table className="props-table">
            <thead>
              <tr>
                <th>PROP</th>
                <th>TYPE</th>
                <th>DEFAULT</th>
                <th>DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>size</code></td>
                <td><code>number | string</code></td>
                <td><code>24</code></td>
                <td>Sets both width and height in pixels.</td>
              </tr>
              <tr>
                <td><code>color</code></td>
                <td><code>string</code></td>
                <td><code>"currentColor"</code></td>
                <td>Stroke color (hex, RGB, or CSS variable).</td>
              </tr>
              <tr>
                <td><code>strokeWidth</code></td>
                <td><code>number | string</code></td>
                <td><code>2</code></td>
                <td>Thickness of the SVG vector paths.</td>
              </tr>
              <tr>
                <td><code>...rest</code></td>
                <td><code>SVGProps</code></td>
                <td>—</td>
                <td>Any standard SVG attribute (<code>className</code>, <code>onClick</code>, <code>style</code>).</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Zero-Install CDN Usage */}
        <section className="section">
          <div className="section-head">
            <Terminal size={18} color="#ccff00" />
            <h3>3. ZERO-INSTALL CDN (HTML &amp; GITHUB READMES)</h3>
          </div>
          <p className="desc">
            Using plain HTML, Markdown, or Notion? Load any icon directly from jsDelivr CDN by replacing{' '}
            <code>rocket.svg</code> with any icon name from the gallery:
          </p>
          <CodeBlock code={cdnExample} />
        </section>

        {/* Inline SVG Usage */}
        <section className="section">
          <div className="section-head">
            <Bolt size={18} color="#ccff00" />
            <h3>4. COPY-PASTE INLINE SVG</h3>
          </div>
          <p className="desc">
            Click the <strong>SVG</strong> button on any card in the main gallery to copy clean,
            minified markup ready for HTML, Vue, Svelte, or Tailwind CSS:
          </p>
          <CodeBlock code={rawSvgExample} />
        </section>
      </main>
    </div>
  );
}

export default App;
