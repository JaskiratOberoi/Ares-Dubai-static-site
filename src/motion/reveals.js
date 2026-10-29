import { gsap, ScrollTrigger, SplitText, ease, isTouch } from './engine.js'

/**
 * The page's motion, declared in markup:
 *   data-intro            the hero's orchestrated entrance, in DOM order
 *   data-split            a head whose lines rise one after another (inside data-intro)
 *   data-reveal           rises into place the first time it scrolls into view
 *   data-stagger          a container whose children reveal in sequence
 *   data-count="200"      a figure that counts up to its real value, once
 *   data-fill             a control whose fill floods from where the pointer entered
 *   data-draw             an SVG path that draws itself when seen
 */
export function runPageMotion(root = document) {
  intro(root)
  reveals(root)
  counters(root)
  fills(root)
  draws(root)
}

function intro(root) {
  const hero = root.querySelector('[data-intro]')
  if (!hero) return
  const tl = gsap.timeline({ defaults: { ease: ease.out } })
  const head = hero.querySelector('[data-split]')
  if (head) {
    const split = new SplitText(head, { type: 'lines', linesClass: 'split-line' })
    split.lines.forEach((line) => {
      const inner = document.createElement('span')
      inner.className = 'split-inner'
      inner.append(...line.childNodes)
      line.append(inner)
    })
    gsap.set(head, { autoAlpha: 1 })
    tl.fromTo(head.querySelectorAll('.split-inner'), { yPercent: 110 }, { yPercent: 0, duration: 1.1, stagger: 0.09 }, 0)
  }
  const rest = hero.querySelectorAll('[data-intro-item]')
  if (rest.length) tl.fromTo(rest, { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.07 }, 0.35)
  const tiles = hero.querySelectorAll('[data-intro-tile]')
  if (tiles.length) tl.fromTo(tiles, { y: 28, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1.1, stagger: 0.08 }, 0.5)
  const figure = hero.querySelector('[data-intro-figure]')
  if (figure) tl.fromTo(figure, { scale: 0.92, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 1.4 }, 0.6)
}

function reveals(root) {
  const singles = [...root.querySelectorAll('[data-reveal]')].filter((el) => !el.closest('[data-intro]'))
  ScrollTrigger.batch(singles, {
    start: 'top 88%',
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, { y: 0, autoAlpha: 1, duration: 1, ease: ease.out, stagger: 0.08, overwrite: true }),
  })
  root.querySelectorAll('[data-stagger]').forEach((group) => {
    const kids = [...group.children]
    ScrollTrigger.create({
      trigger: group,
      start: 'top 85%',
      once: true,
      onEnter: () => gsap.to(kids, { y: 0, autoAlpha: 1, duration: 0.9, ease: ease.out, stagger: 0.07 }),
    })
  })
}

function counters(root) {
  root.querySelectorAll('[data-count]').forEach((el) => {
    const target = parseFloat(el.dataset.count)
    const pad = el.dataset.pad ? parseInt(el.dataset.pad, 10) : 0
    const o = { v: 0 }
    const fmt = (v) => {
      const n = Math.round(v).toString()
      return pad ? n.padStart(pad, '0') : n
    }
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () =>
        gsap.fromTo(o, { v: 0 }, {
          v: target,
          duration: 1.5,
          ease: ease.out,
          onUpdate: () => {
            el.textContent = fmt(o.v)
          },
          onComplete: () => {
            el.textContent = fmt(target)
          },
        }),
    })
  })
}

function fills(root) {
  if (isTouch()) return
  root.querySelectorAll('[data-fill]').forEach((btn) => {
    if (btn.querySelector('.btn-fill')) return
    const fill = document.createElement('span')
    fill.className = 'btn-fill'
    fill.setAttribute('aria-hidden', 'true')
    btn.prepend(fill)
    const at = (e) => {
      const r = btn.getBoundingClientRect()
      return `${e.clientX - r.left}px ${e.clientY - r.top}px`
    }
    let closed = true
    const open = (point) => {
      if (closed) gsap.set(fill, { clipPath: `circle(0% at ${point})` })
      closed = false
      btn.classList.add('is-filled')
      gsap.to(fill, { clipPath: `circle(150% at ${point})`, duration: 0.55, ease: ease.soft, overwrite: true })
    }
    const close = (point) => {
      btn.classList.remove('is-filled')
      gsap.to(fill, {
        clipPath: `circle(0% at ${point})`,
        duration: 0.45,
        ease: ease.soft,
        overwrite: true,
        onComplete: () => {
          closed = true
        },
      })
    }
    btn.addEventListener('pointerenter', (e) => open(at(e)))
    btn.addEventListener('pointerleave', (e) => close(at(e)))
    btn.addEventListener('focus', () => btn.matches(':focus-visible') && open('50% 50%'))
    btn.addEventListener('blur', () => close('50% 50%'))
  })
}

function draws(root) {
  root.querySelectorAll('[data-draw]').forEach((path) => {
    const length = path.getTotalLength()
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })
    ScrollTrigger.create({
      trigger: path.closest('[data-draw-trigger]') || path,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(path, { strokeDashoffset: 0, duration: 2.2, ease: 'power2.inOut' })
        const after = path.closest('svg')?.querySelectorAll('[data-draw-after]')
        if (after?.length) gsap.to(after, { autoAlpha: 1, duration: 0.6, delay: 1.9, stagger: 0.1 })
      },
    })
  })
}
