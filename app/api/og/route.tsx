import { ImageResponse } from 'next/og'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

export const runtime = 'nodejs'

export function GET() {
  const photoBuffer = readFileSync(join(process.cwd(), 'public/img/slider/avatar.png'))
  const photo = `data:image/png;base64,${photoBuffer.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: 'linear-gradient(135deg, #0f172a 0%, #1a1040 50%, #0f172a 100%)',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '60px 80px',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Blue glow top-left */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '-100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)',
          }}
        />

        {/* Violet glow bottom-right */}
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            right: '200px',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)',
          }}
        />

        {/* Left content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            paddingRight: '60px',
            zIndex: 1,
          }}
        >
          {/* Available badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '28px',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#4ade80',
              }}
            />
            <span style={{ color: '#94a3b8', fontSize: '15px', letterSpacing: '0.05em' }}>
              Available for new projects
            </span>
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: '62px',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.05,
              marginBottom: '14px',
              letterSpacing: '-1px',
            }}
          >
            Nilesh Lagdhir
          </div>

          {/* Gradient title bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '28px',
            }}
          >
            <div
              style={{
                width: '4px',
                height: '28px',
                borderRadius: '4px',
                background: 'linear-gradient(180deg, #2563eb, #7c3aed)',
                marginRight: '14px',
              }}
            />
            <span
              style={{
                fontSize: '22px',
                color: '#93c5fd',
                fontWeight: 600,
              }}
            >
              Web Development · AI Automation · MVP Development
            </span>
          </div>

          {/* Tech tags */}
          <div
            style={{
              display: 'flex',
              gap: '10px',
              marginBottom: '36px',
              flexWrap: 'wrap',
            }}
          >
            {['Next.js', 'Laravel', 'React', 'AI / Automation', 'WhatsApp'].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: '6px 16px',
                  borderRadius: '8px',
                  background: 'rgba(37, 99, 235, 0.15)',
                  border: '1px solid rgba(37, 99, 235, 0.35)',
                  color: '#93c5fd',
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              >
                {tag}
              </div>
            ))}
          </div>

          {/* Stats row */}
          <div style={{ display: 'flex', gap: '32px', marginBottom: '28px' }}>
            {[
              { value: '7+', label: 'Years Exp.' },
              { value: '100+', label: 'Projects' },
              { value: '4+', label: 'Countries' },
            ].map((stat) => (
              <div key={stat.label} style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '26px', fontWeight: 800, color: '#ffffff' }}>
                  {stat.value}
                </span>
                <span style={{ fontSize: '13px', color: '#64748b' }}>{stat.label}</span>
              </div>
            ))}
          </div>

          {/* URL */}
          <div style={{ color: '#475569', fontSize: '16px', letterSpacing: '0.05em' }}>
            nlagdhir.in
          </div>
        </div>

        {/* Right: Photo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            zIndex: 1,
          }}
        >
          {/* Glow ring */}
          <div
            style={{
              position: 'relative',
              width: '260px',
              height: '260px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: '-6px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                opacity: 0.6,
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: '-2px',
                borderRadius: '50%',
                background: '#0f172a',
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo}
              alt="Nilesh Lagdhir"
              style={{
                position: 'absolute',
                width: '248px',
                height: '248px',
                borderRadius: '50%',
                objectFit: 'cover',
                objectPosition: 'center top',
              }}
            />
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
