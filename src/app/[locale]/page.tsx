import {useTranslations} from 'next-intl';
import Link from "next/link";

export default function Index() {
    const t = useTranslations('Index');
    return (<main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="mb-24 font-semibold text-4xl">{t('title')}Next internalization project</h1>
        <p>I use <Link href={"https://next-intl-docs.vercel.app/"} className="underline">next-intl</Link> lib for
            internalization for NextJS 14 App Router setup with i18n routing</p>
    </main>)
}
