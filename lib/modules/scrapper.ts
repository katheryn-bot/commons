import puppeteer from 'puppeteer'
import {
  Page,
  Browser,
} from 'puppeteer'

export interface Instance {
  page: Page,
  browser: Browser,
  shutdown: () => Promise<void>
}

export const createInstance = async (url: string, path = ''): Promise<Instance> => {
  const instanceUrl = `${url}/${path}`

  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(instanceUrl, {
    waitUntil: 'load'
  })

  return {
    browser,
    page,
    shutdown: async (): Promise<void> => {
      await browser.close()
    }
  }
}
