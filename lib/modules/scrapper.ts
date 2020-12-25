import puppeteer from 'puppeteer'

export interface Instance {
  page: puppeteer.Page
  browser: puppeteer.Browser
  shutdown: () => Promise<void>
}

export const createInstance = async (
  url: string,
  path: string,
): Promise<Instance> => {
  const instanceUrl = `${url}/${path ?? ''}`

  const browser = await puppeteer.launch({
    // comment if you're not running WSL2
    executablePath: '/usr/bin/chromedriver',
  })

  const page = await browser.newPage()

  await page.goto(instanceUrl, {
    waitUntil: 'load',
  })

  return {
    browser,
    page,
    shutdown: async (): Promise<void> => {
      await browser.close()
    },
  }
}
