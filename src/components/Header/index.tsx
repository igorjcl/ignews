
import Link from 'next/link'
import { useRouter } from 'next/router';
import { SignInButton } from '../SignInButton'
import styles from './styles.module.scss'

export function Header() {
  const router = useRouter();

  function isActivePage(path: string): string {
    return router.pathname === path ? styles.active : ''
  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <Link href="/">
            <a className={isActivePage("/")}>Home</a>
          </Link>

          <Link href="posts">
            <a className={isActivePage("/posts")}>Posts</a>
          </Link>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}