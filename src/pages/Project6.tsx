import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

/* ─── Reusable Pill Button ───────────────────────────────────────────────── */
type PillButtonProps = {
  label: string;
  variant: 'dark' | 'light';
};

function PillButton({ label, variant }: PillButtonProps) {
  const isLight = variant === 'light';

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
        cursor: 'pointer',
        borderRadius: '9999px',
        // 0.6px white outer border via a 0.6px padding + white background
        padding: '0.6px',
        background: 'white',
      }}
    >
      {/* Inner pill */}
      <div
        style={{
          borderRadius: '9999px',
          background: isLight ? '#ffffff' : '#000000',
          paddingTop: '11px',
          paddingBottom: '11px',
          paddingLeft: '29px',
          paddingRight: '29px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Glow / light-streak blob at the top edge */}
        <div
          style={{
            position: 'absolute',
            top: '-2px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '55%',
            height: '8px',
            background: isLight
              ? 'radial-gradient(ellipse at center, rgba(255,255,255,0.60) 0%, transparent 70%)'
              : 'radial-gradient(ellipse at center, rgba(255,255,255,0.45) 0%, transparent 70%)',
            filter: 'blur(3px)',
            pointerEvents: 'none',
          }}
        />
        <span
          style={{
            fontSize: '14px',
            fontWeight: 500,
            color: isLight ? '#000000' : '#ffffff',
            fontFamily: '"General Sans", sans-serif',
            position: 'relative',
            zIndex: 1,
            lineHeight: 1,
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

/* ─── Main Page ──────────────────────────────────────────────────────────── */
export default function Project6() {
  return (
    /*
     * height: 100dvh → fills exactly the viewport, no scrolling
     * overflow: hidden → prevents any overflow / scroll
     * display: flex / flex-direction: column → navbar on top, content below
     */
    <div
      style={{
        position: 'relative',
        height: '100dvh',
        width: '100%',
        overflow: 'hidden',
        background: '#000000',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: '"General Sans", sans-serif',
        color: '#ffffff',
      }}
    >
      {/* ── Background Video ─────────────────────────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'center center',
          }}
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4"
            type="video/mp4"
          />
        </video>

      </div>

      {/* ── Back to Dashboard (floating) ─────────────────────────────────── */}
      <Link
        to="/#dashboard"
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          zIndex: 100,
          background: 'rgba(255,255,255,0.10)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.20)',
          color: '#ffffff',
          borderRadius: '9999px',
          fontSize: '12px',
          fontWeight: 500,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          padding: '8px 16px',
          textDecoration: 'none',
          fontFamily: '"General Sans", sans-serif',
          transition: 'background 0.2s',
        }}
      >
        ← Dashboard
      </Link>

      {/* ── Navbar ───────────────────────────────────────────────────────── */}
      <nav
        style={{
          position: 'relative',
          zIndex: 50,
          width: '100%',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '20px',
          paddingBottom: '20px',
          paddingLeft: 'clamp(24px, 8.5vw, 120px)',
          paddingRight: 'clamp(24px, 8.5vw, 120px)',
        }}
      >
        {/* LEFT: Logo + Nav links */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Logo wordmark — 187 × 25 px bounding box */}
          <div
            style={{
              width: '187px',
              height: '25px',
              display: 'flex',
              alignItems: 'center',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                color: '#ffffff',
                fontSize: '17px',
                fontWeight: 700,
                letterSpacing: '0.22em',
                fontFamily: '"General Sans", sans-serif',
                lineHeight: 1,
                textTransform: 'uppercase',
              }}
            >
              Tushankar
            </span>
          </div>

          {/* Desktop-only nav links */}
          <div
            className="hidden md:flex"
            style={{ alignItems: 'center', marginLeft: '30px', gap: '30px' }}
          >
            {['Get Started', 'Developers', 'Features', 'Resources'].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontFamily: '"General Sans", sans-serif',
                  transition: 'opacity 0.2s',
                  whiteSpace: 'nowrap',
                }}
              >
                {item}
                <ChevronDown size={14} color="#ffffff" strokeWidth={2} />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT: Join Waitlist (dark pill) */}
        <PillButton label="Join Waitlist" variant="dark" />
      </nav>

      {/* ── Hero Content — flex-1 so it fills the remaining space, content centered ── */}
      <main
        style={{
          position: 'relative',
          zIndex: 10,
          flex: 1,
          display: 'flex',
          alignItems: 'center',      /* vertical center in remaining space */
          justifyContent: 'center',  /* horizontal center */
          paddingLeft: '24px',
          paddingRight: '24px',
          paddingBottom: '40px',     /* slight bottom offset so it reads centered */
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '40px',
            width: '100%',
            textAlign: 'center',
          }}
        >
          {/* ── Badge / Pill ─────────────────────────────────────── */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.20)',
              background: 'rgba(255,255,255,0.10)',
              padding: '6px 16px',
            }}
          >
            {/* 4px white dot */}
            <span
              style={{
                display: 'inline-block',
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: '#ffffff',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: '13px',
                fontWeight: 500,
                fontFamily: '"General Sans", sans-serif',
                lineHeight: 1,
              }}
            >
              <span style={{ color: 'rgba(255,255,255,0.60)' }}>
                Early access available from
              </span>
              <span style={{ color: '#ffffff' }}> May 1, 2026</span>
            </span>
          </div>

          {/* ── Heading + Subtitle ───────────────────────────────── */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1
              className="web3-gradient-text"
              style={{
                maxWidth: '613px',
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: 500,
                lineHeight: 1.28,
                letterSpacing: '-0.01em',
                fontFamily: '"General Sans", sans-serif',
                margin: 0,
              }}
            >
              Web3 at the Speed of Experience
            </h1>

            {/* Subtitle — 24px gap */}
            <p
              style={{
                marginTop: '24px',
                fontSize: '15px',
                fontWeight: 400,
                color: 'rgba(255,255,255,0.70)',
                maxWidth: '680px',
                lineHeight: 1.65,
                fontFamily: '"General Sans", sans-serif',
                margin: '24px auto 0',
              }}
            >
              Powering seamless experiences and real-time connections, EOS is the base for
              creators who move with purpose, leveraging resilience, speed, and scale to shape
              the future.
            </p>
          </div>

          {/* ── CTA Button (white / light variant) ──────────────── */}
          <PillButton label="Join Waitlist" variant="light" />
        </div>
      </main>
    </div>
  );
}
