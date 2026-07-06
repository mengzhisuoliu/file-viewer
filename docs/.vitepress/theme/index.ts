import DefaultTheme from 'vitepress/theme'
import { inBrowser } from 'vitepress'
import { onMounted } from 'vue'
import './custom.css'

const githubRepositoryUrl = 'https://github.com/flyfish-dev/file-viewer'
const githubRepositoryApiUrl = 'https://api.github.com/repos/flyfish-dev/file-viewer'
const githubStarsCacheKey = 'flyfish-docs-github-stars'
const githubStarsFallback = '938'
const githubStarsCacheTtl = 1000 * 60 * 60 * 6

function formatGithubStars(stars: number) {
  if (stars >= 100000) {
    return `${Math.round(stars / 1000)}k`
  }

  if (stars >= 1000) {
    return `${(stars / 1000).toFixed(1).replace(/\.0$/, '')}k`
  }

  return String(stars)
}

function enhanceGithubStarLinks(stars = githubStarsFallback) {
  const links = document.querySelectorAll<HTMLAnchorElement>(
    `a.VPSocialLink[href="${githubRepositoryUrl}"]`
  )

  for (const link of links) {
    link.classList.add('docs-github-star-button')
    link.dataset.stars = stars
    link.setAttribute('aria-label', `Star Flyfish Viewer on GitHub, ${stars} stars`)
  }
}

function readCachedGithubStars() {
  try {
    const cached = window.sessionStorage.getItem(githubStarsCacheKey)
    if (!cached) {
      return
    }

    const parsed = JSON.parse(cached) as { expiresAt?: number; stars?: string }
    if (typeof parsed.expiresAt === 'number' && parsed.expiresAt > Date.now() && parsed.stars) {
      return parsed.stars
    }
  } catch {
    return
  }
}

function writeCachedGithubStars(stars: string) {
  try {
    window.sessionStorage.setItem(
      githubStarsCacheKey,
      JSON.stringify({
        expiresAt: Date.now() + githubStarsCacheTtl,
        stars
      })
    )
  } catch {
    // Session storage can be unavailable in privacy-restricted browsing modes.
  }
}

async function hydrateGithubStars() {
  const cachedStars = readCachedGithubStars()
  if (cachedStars) {
    enhanceGithubStarLinks(cachedStars)
    return
  }

  try {
    const response = await fetch(githubRepositoryApiUrl, {
      headers: {
        Accept: 'application/vnd.github+json'
      }
    })

    if (!response.ok) {
      return
    }

    const data = await response.json() as { stargazers_count?: unknown }
    if (typeof data.stargazers_count !== 'number') {
      return
    }

    const stars = formatGithubStars(data.stargazers_count)
    writeCachedGithubStars(stars)
    enhanceGithubStarLinks(stars)
  } catch {
    // Keep the fallback star treatment when GitHub is rate-limited or offline.
  }
}

function setupGithubStarButtons() {
  enhanceGithubStarLinks()
  void hydrateGithubStars()

  let updateScheduled = false
  const observer = new MutationObserver(() => {
    if (updateScheduled) {
      return
    }

    updateScheduled = true
    window.requestAnimationFrame(() => {
      updateScheduled = false
      enhanceGithubStarLinks(readCachedGithubStars() ?? githubStarsFallback)
    })
  })

  observer.observe(document.body, {
    childList: true,
    subtree: true
  })
}

export default {
  extends: DefaultTheme,
  setup() {
    onMounted(() => {
      if (!inBrowser) {
        return
      }

      setupGithubStarButtons()

      const path = window.location.pathname.replace(/\/index\.html$/, '/')
      const isDocsRoot = path === '/' || path === ''
      if (!isDocsRoot || window.location.search.includes('no_lang_redirect=1')) {
        return
      }

      const languages = navigator.languages?.length
        ? navigator.languages
        : [navigator.language].filter(Boolean)
      const prefersChinese = languages.some(language => language.toLowerCase().startsWith('zh'))
      const redirected = window.sessionStorage.getItem('flyfish-docs-lang-redirect')

      if (prefersChinese && !redirected) {
        window.sessionStorage.setItem('flyfish-docs-lang-redirect', 'zh')
        window.location.replace('/zh/')
      }
    })
  }
}
