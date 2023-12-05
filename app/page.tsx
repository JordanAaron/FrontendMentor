import Link from 'next/link'

export default function Home() {
	return (
		<main>
			<ul>
				<li>
					<Link href={'/newsletter'}>Newsletter</Link>
				</li>
			</ul>
		</main>
	)
}
