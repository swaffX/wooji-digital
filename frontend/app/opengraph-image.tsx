import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Wooji Digital'

export const size = { width: 1200, height: 630 }

export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '96px',
          backgroundColor: '#0c0f18',
          backgroundImage:
            'radial-gradient(circle at 18% 22%, rgba(123, 134, 247, 0.22), transparent 46%), radial-gradient(circle at 86% 84%, rgba(94, 158, 122, 0.18), transparent 44%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '20px',
              height: '20px',
              borderRadius: '9999px',
              backgroundColor: '#8d8cf7',
            }}
          />
          <div
            style={{
              fontSize: '28px',
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: '#9aa3b8',
              fontWeight: 600,
            }}
          >
            Wooji Digital
          </div>
        </div>

        <div
          style={{
            fontSize: '108px',
            lineHeight: 1.04,
            fontWeight: 800,
            color: '#f4f7f4',
            letterSpacing: '-0.02em',
          }}
        >
          Wooji Digital
        </div>

        <div
          style={{
            marginTop: '32px',
            fontSize: '44px',
            lineHeight: 1.3,
            color: '#c4cad8',
            fontWeight: 500,
            maxWidth: '880px',
          }}
        >
          Dijital Pazarlama &amp; Marka Büyütme
        </div>

        <div
          style={{
            marginTop: '64px',
            width: '180px',
            height: '8px',
            borderRadius: '9999px',
            background: 'linear-gradient(90deg, #8d8cf7 0%, #5e9e7a 100%)',
          }}
        />
      </div>
    ),
    { ...size },
  )
}
