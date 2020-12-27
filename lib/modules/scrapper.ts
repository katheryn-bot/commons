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
    args: [
      '--disable-gpu',
      '--disable-dev-shm-usage',
      '--disable-setuid-sandbox',
      '--no-first-run',
      '--no-sandbox',
      '--no-zygote',
      '--single-process',
    ],
  })

  const page = await browser.newPage()

  await page.goto(instanceUrl, {
    waitUntil: 'load',
  })

  return {
    browser,
    page,
    shutdown: async (): Promise<void> => {
      await page.close()
      await browser.close()
    },
  }
}
