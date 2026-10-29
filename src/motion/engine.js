import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import Lenis from 'lenis'

/*
 * One clock. Lenis and ScrollTrigger both run off the GSAP ticker, every
 * page effect lives in a gsap.context that is reverted on navigation, and
 * nothing here moves when the visitor asked for reduced motion.
 */
gsap.registerPlugin(ScrollTrigger, SplitText)

export { gsap, ScrollTrigger, SplitText }

export const ease = {
  out: 'expo.out',
  soft: 'power3.out',
  inOut: 'expo.inOut',
}

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const isTouch = () =>
  typeof window !== 'undefined' && !window.matchMedia('(hover: hover) and (pointer: fine)').matches

export const isNarrow = () =>
  typeof window !== 'undefined' && window.matchMedia('(max-width: 60rem)').matches

let lenis = null
let booted = false

export function boot() {
  if (booted || typeof window === 'undefined') return
  booted = true
  document.documentElement.classList.add('js')
  if (prefersReducedMotion()) return

  lenis = new Lenis({
    lerp: 0.11,
    wheelMultiplier: 0.95,
    smoothWheel: true,
  })
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((t) => lenis.raf(t * 1000))
  gsap.ticker.lagSmoothing(0)

  // the nav steps aside on the way down and returns on the way up
  let last = 0
  lenis.on('scroll', ({ scroll }) => {
    if (Math.abs(scroll - last) < 6) return
    document.documentElement.classList.toggle('nav-away', scroll > 200 && scroll > last)
    last = scroll
  })
}

export function scrollToTop(immediate = true) {
  if (lenis) lenis.scrollTo(0, { immediate })
  else window.scrollTo({ top: 0, behavior: 'instant' })
}

export function scrollToElement(el) {
  const offset = -(parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 96)
  if (lenis) lenis.scrollTo(el, { offset, immediate: true })
  else el.scrollIntoView({ block: 'start' })
}

export function stopScroll() {
  lenis?.stop()
}

export function startScroll() {
  lenis?.start()
}

/**
 * Run page-level motion inside a context that reverts when the route changes.
 * The callback receives the gsap context and returns nothing; everything it
 * creates (tweens, triggers, splits) is cleaned up on leave.
 */
export function usePage(effect, deps = []) {
  const location = useLocation()
  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined
    const ctx = gsap.context(() => {})
    ctx.add(() => effect(ctx))
    const refresh = () => ScrollTrigger.refresh()
    const id = window.setTimeout(refresh, 120)
    window.addEventListener('load', refresh, { once: true })
    return () => {
      window.clearTimeout(id)
      window.removeEventListener('load', refresh)
      ctx.revert()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, ...deps])
}
