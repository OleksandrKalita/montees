import {Head, Html, Main, NextScript} from "next/document"

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            
            <body>
                <Main />
                <NextScript />
                <script src="/libs/ScrollTrigger.min.js" />
            </body>
        </Html>
    )
}
