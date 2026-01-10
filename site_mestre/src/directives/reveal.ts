export default {
  mounted(el: HTMLElement) {
    el.classList.add('reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return

        if (entry.isIntersecting) {
          el.classList.add('reveal-visible')
        } else {
          el.classList.remove('reveal-visible')
        }
      },
      {
        threshold: 0.2,
      }
    )

    observer.observe(el)
  },
}

