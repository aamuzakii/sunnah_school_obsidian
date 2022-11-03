/* eslint-disable @next/next/next-script-for-ga */
import React from 'react'
// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, {Html, Head, Main, NextScript} from 'next/document'
import {ServerStyleSheets} from '@material-ui/styles'

class ArunaDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          // eslint-disable-next-line react/display-name
          enhanceApp: (App: any) => (props: JSX.IntrinsicAttributes) =>
            sheet.collect(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      ctx.renderPage(sheet)
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/aruna_favicon.ico" />
          <style>{`body { margin: 0 } /* custom! */`}</style>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-2H7VTEREDH" />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-2H7VTEREDH');`,
            }}
          />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default ArunaDocument
