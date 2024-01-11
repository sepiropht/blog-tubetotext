import Link from './Link'
import HomeLink from './HomeLink'
import AutoRefresh from './AutoRefresh'
import { serif } from './fonts'
import './global.css'

export default function RootLayout({ children }) {
  return (
    <AutoRefresh>
      <html lang="en" className={serif.className}>
        <body className="mx-auto max-w-2xl bg-[--bg] px-5 py-12 text-[--text]">
          <header className="mb-14 flex flex-row place-content-between">
            <HomeLink />
          </header>
          <main>{children}</main>
        </body>
        <script
          async
          src="https://analytics.sepiropht.me/script.js"
          data-website-id="c546b911-4ba4-4f90-a89a-39f1640c4892"
        ></script>
      </html>
    </AutoRefresh>
  )
}
