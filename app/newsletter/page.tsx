'use client'

import Image from 'next/image'

import styles from './page.module.scss'

import mobileIllustration from '@/newsletter/_projectFiles/assets/images/illustration-sign-up-mobile.svg'

import listIcon from '@/newsletter/_projectFiles/assets/images/icon-list.svg'

export default function NewsletterPage() {
	return (
		<div className={styles.container}>
			<Image src={mobileIllustration} alt="sign up illustration" />
			<h1 className={styles.header}>Stay updated!</h1>
			<p className={styles.paragraph}>
				Join 60,000+ product managers receiving monthly updates on:
			</p>
			<ul>
				<li>
					<Image src={listIcon} alt="list icon" />
					<p>Product discovery and building what matters</p>
				</li>
				<li>
					<Image src={listIcon} alt="list icon" />
					<p>Measuring to ensure updates are a success</p>
				</li>
				<li>
					<Image src={listIcon} alt="list icon" />
					<p>And much more!</p>
				</li>
			</ul>
			<form
				onSubmit={(e) => {
					e.preventDefault()
					console.log(e.target)
				}}
			>
				<label htmlFor="emailAddress">Email address</label>
				<input type="email" id="emailAddress" placeholder="email@company.com" />
				<button type="submit">Subscribe to monthly newsletter</button>
			</form>
		</div>
	)
}
