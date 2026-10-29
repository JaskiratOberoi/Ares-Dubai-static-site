import { useMemo, useRef, useState } from 'react'

/*
 * A sample luminescence kinetic curve: the signal an immunoassay reads as the
 * reaction develops, rising to a plateau, with the result taken at ten
 * minutes. It is a drawing of the mechanism, not a measured run; the
 * figures on the axes are the real ones (ten minutes to the first result).
 */
const W = 640
const H = 300
const PAD = { l: 44, r: 20, t: 20, b: 40 }
const MINUTES = 10

const signalAt = (t) => 1 - Math.exp(-t / 2.6)

const KineticTrace = () => {
  const [hover, setHover] = useState(null)
  const svgRef = useRef(null)

  const { d, points } = useMemo(() => {
    const pts = []
    const n = 120
    for (let i = 0; i <= n; i++) {
      const t = (i / n) * MINUTES
      const x = PAD.l + (t / MINUTES) * (W - PAD.l - PAD.r)
      const y = PAD.t + (1 - signalAt(t)) * (H - PAD.t - PAD.b)
      pts.push([x, y, t])
    }
    return { d: pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' '), points: pts }
  }, [])

  const onMove = (e) => {
    const svg = svgRef.current
    if (!svg) return
    const rect = svg.getBoundingClientRect()
    const px = ((e.clientX - rect.left) / rect.width) * W
    const t = Math.min(MINUTES, Math.max(0, ((px - PAD.l) / (W - PAD.l - PAD.r)) * MINUTES))
    const x = PAD.l + (t / MINUTES) * (W - PAD.l - PAD.r)
    const y = PAD.t + (1 - signalAt(t)) * (H - PAD.t - PAD.b)
    setHover({ t, x, y })
  }

  const end = points[points.length - 1]
  const gridY = [0, 0.25, 0.5, 0.75, 1].map((v) => PAD.t + (1 - v) * (H - PAD.t - PAD.b))

  return (
    <figure className="trace" data-draw-trigger>
      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label="Sample luminescence kinetic curve: the signal rises and settles, and the result is read at ten minutes"
        className="trace-svg"
        onPointerMove={onMove}
        onPointerLeave={() => setHover(null)}
      >
        <g className="trace-grid" aria-hidden="true">
          {gridY.map((y) => (
            <line key={y} x1={PAD.l} x2={W - PAD.r} y1={y} y2={y} />
          ))}
          {[0, 2, 4, 6, 8, 10].map((m) => {
            const x = PAD.l + (m / MINUTES) * (W - PAD.l - PAD.r)
            return (
              <g key={m}>
                <line x1={x} x2={x} y1={H - PAD.b} y2={H - PAD.b + 6} />
                <text x={x} y={H - PAD.b + 22} textAnchor="middle" className="trace-tick">
                  {m} min
                </text>
              </g>
            )
          })}
          <text x={PAD.l - 8} y={PAD.t + 10} textAnchor="end" className="trace-tick">
            signal
          </text>
        </g>
        <path d={d} className="trace-line" data-draw fill="none" />
        <g data-draw-after className="trace-result" aria-hidden="true">
          <line x1={end[0]} x2={end[0]} y1={PAD.t} y2={H - PAD.b} />
          <circle cx={end[0]} cy={end[1]} r="5" />
          <text x={end[0] - 10} y={end[1] - 14} textAnchor="end" className="trace-label">
            result at 10 min
          </text>
        </g>
        {hover && (
          <g className="trace-cursor" aria-hidden="true">
            <line x1={hover.x} x2={hover.x} y1={PAD.t} y2={H - PAD.b} />
            <circle cx={hover.x} cy={hover.y} r="4" />
            <text x={hover.x + (hover.t > 7 ? -10 : 10)} y={PAD.t + 14} textAnchor={hover.t > 7 ? 'end' : 'start'} className="trace-label">
              {hover.t.toFixed(1)} min
            </text>
          </g>
        )}
      </svg>
      <figcaption className="trace-caption">
        A sample kinetic curve, drawn to show the mechanism. Move over it to read the clock.
      </figcaption>
    </figure>
  )
}

export default KineticTrace
