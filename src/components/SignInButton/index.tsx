import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'

const colors = {
  yellow: "#EBA417",
  green: "#04D361",
  gray: "#737380"
}

export function SignInButton() {
  const [userLoggedIn, setUserLoggedIn] = useState(true)

  return userLoggedIn ?
    (
      <button type="button" className={styles.signIn}>
        <FaGithub color={colors.green} />
        Igor José
        <FiX color={colors.gray} />
      </button>
    ) : (
      <button type="button" className={styles.signIn}>
        <FaGithub color={colors.yellow} />
        Sign in with Github
      </button>
    )
}