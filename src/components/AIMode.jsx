import React, { useEffect, useMemo, useState } from 'react';
import { FaRobot, FaTimes, FaCopy, FaCheck } from 'react-icons/fa';
import { toMarkdown } from '../data/toMarkdown';
import '../styles/AIMode.css';

const llmsUrl = `${import.meta.env.BASE_URL}llms.txt`;

// Side tab that opens a plain-text view of the whole site, so a person can paste it
// into an assistant, or an agent can read it. The same text is served at /llms.txt.
function AIMode() {
  const [open, setOpen] = useState(() => window.location.hash === '#ai');
  const [copied, setCopied] = useState(false);
  const text = useMemo(() => toMarkdown(), []);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard blocked; the text is still selectable */
    }
  };

  return (
    <>
      <button
        className={`ai-tab ${open ? 'hidden' : ''}`}
        onClick={() => setOpen(true)}
        aria-label="Open AI mode"
      >
        <FaRobot />
        <span>AI mode</span>
      </button>

      <aside className={`ai-panel ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="ai-panel-head">
          <div>
            <h3>AI mode</h3>
            <p>This whole site as plain text, for AI assistants and agents.</p>
          </div>
          <button className="ai-close" onClick={() => setOpen(false)} aria-label="Close AI mode">
            <FaTimes />
          </button>
        </div>
        <div className="ai-actions">
          <button onClick={copy}>
            {copied ? <FaCheck /> : <FaCopy />} {copied ? 'Copied' : 'Copy all'}
          </button>
          <a href={llmsUrl} target="_blank" rel="noopener noreferrer">
            Open llms.txt
          </a>
        </div>
        <pre className="ai-text">{text}</pre>
      </aside>
      {open && <div className="ai-scrim" onClick={() => setOpen(false)} />}
    </>
  );
}

export default AIMode;
