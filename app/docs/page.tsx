'use client' // Added for client-side interactivity

import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { FadeIn } from '@/components/Animations'
import { Book, Code, Terminal, Database, Server, Shield } from 'lucide-react'
import { useState, useMemo } from 'react' // Added useState and useMemo

const categories = [
	{
		title: 'Getting Started',
		description: 'Learn the basics and set up your development environment',
		icon: Book,
		guides: [
			{ title: 'Quick Start Guide', href: '/docs/quickstart' },
			{ title: 'Installation', href: '/docs/installation' },
			{ title: 'Configuration', href: '/docs/configuration' },
		],
	},
	{
		title: 'API Reference',
		description: 'Detailed documentation of our API endpoints',
		icon: Code,
		guides: [
			{ title: 'Authentication', href: '/docs/api/auth' },
			{ title: 'Endpoints', href: '/docs/api/endpoints' },
			{ title: 'Rate Limiting', href: '/docs/api/rate-limiting' },
		],
	},
	{
		title: 'CLI Tools',
		description: 'Command-line interface tools and utilities',
		icon: Terminal,
		guides: [
			{ title: 'CLI Installation', href: '/docs/cli/installation' },
			{ title: 'Basic Commands', href: '/docs/cli/commands' },
			{ title: 'Advanced Usage', href: '/docs/cli/advanced' },
		],
	},
	{
		title: 'Database',
		description: 'Database setup and management',
		icon: Database,
		guides: [
			{ title: 'Schema Design', href: '/docs/database/schema' },
			{ title: 'Migrations', href: '/docs/database/migrations' },
			{ title: 'Backup & Restore', href: '/docs/database/backup' },
		],
	},
	{
		title: 'Deployment',
		description: 'Deploy your applications with TechArdent',
		icon: Server,
		guides: [
			{ title: 'Deployment Guide', href: '/docs/deployment/guide' },
			{ title: 'Environment Setup', href: '/docs/deployment/environment' },
			{ title: 'Scaling', href: '/docs/deployment/scaling' },
		],
	},
	{
		title: 'Security',
		description: 'Security best practices and guidelines',
		icon: Shield,
		guides: [
			{ title: 'Security Overview', href: '/docs/security/overview' },
			{ title: 'Authentication', href: '/docs/security/auth' },
			{ title: 'Data Protection', href: '/docs/security/data' },
		],
	},
]

export default function DocsPage() {
	const [searchTerm, setSearchTerm] = useState('')

	const filteredCategories = useMemo(() => {
		if (!searchTerm) {
			return categories
		}
		return categories
			.map((category) => {
				const filteredGuides = category.guides.filter((guide) =>
					guide.title.toLowerCase().includes(searchTerm.toLowerCase())
				)
				if (filteredGuides.length > 0) {
					return { ...category, guides: filteredGuides }
				}
				// Also check if category title or description matches
				if (
					category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
					category.description.toLowerCase().includes(searchTerm.toLowerCase())
				) {
					return category // Return the whole category if title or description matches
				}
				return null
			})
			.filter(Boolean) // Remove null entries
	}, [searchTerm])

	return (
		<Container>
			<Section className="py-20">
				<FadeIn>
					<div className="text-center mb-16">
						<h1 className="text-4xl font-bold mb-4">Documentation</h1>
						<p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
							Comprehensive guides and documentation to help you get the most out of
							TechArdent
						</p>
					</div>

					{/* Search */}
					<div className="max-w-2xl mx-auto mb-16">
						<div className="relative">
							<input
								type="text"
								placeholder="Search documentation..."
								className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600"
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
							/>
							<Book className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
						</div>
					</div>

					{/* Categories */}
					{filteredCategories.length > 0 ? (
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{filteredCategories.map((category) => (
								// Ensure category is not null before rendering
								category && (
									<div
										key={category.title}
										className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6"
									>
										<category.icon className="w-12 h-12 text-purple-600 mb-4" />
										<h2 className="text-xl font-bold mb-2">
											{category.title}
										</h2>
										<p className="text-gray-600 dark:text-gray-400 mb-4">
											{category.description}
										</p>
										<ul className="space-y-2">
											{category.guides.map((guide) => (
												<li key={guide.title}>
													<a
														href={guide.href}
														className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
													>
														{guide.title}
													</a>
												</li>
											))}
										</ul>
									</div>
								)
							))}
						</div>
					) : (
						<div className="text-center text-gray-500 dark:text-gray-400">
							No results found for &quot;{searchTerm}&quot;.
						</div>
					)}

					{/* Quick Links */}
					<div className="mt-16">
						<h2 className="text-2xl font-bold mb-6 text-center">Quick Links</h2>
						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
							{[
								{ title: 'API Reference', href: '/docs/api' },
								{ title: 'SDK Downloads', href: '/docs/sdk' },
								{ title: 'Code Examples', href: '/docs/examples' },
								{ title: 'Tutorials', href: '/docs/tutorials' },
							].map((link) => (
								<a
									key={link.title}
									href={link.href}
									className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 text-center hover:border-purple-600 transition-colors"
								>
									{link.title}
								</a>
							))}
						</div>
					</div>

					{/* Need Help */}
					<div className="mt-16 text-center">
						<h2 className="text-2xl font-bold mb-4">Need Help?</h2>
						<p className="text-gray-600 dark:text-gray-400 mb-8">
							Can&apos;t find what you&apos;re looking for? Our support team is here to help.
						</p>
						<div className="flex justify-center space-x-4">
							<a
								href="/community"
								className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
							>
								Community Forum
							</a>
							<a
								href="/contact"
								className="bg-white dark:bg-gray-800 text-purple-600 px-6 py-2 rounded-lg font-semibold border border-purple-600 hover:bg-purple-50 dark:hover:bg-gray-700 transition-colors"
							>
								Contact Support
							</a>
						</div>
					</div>
				</FadeIn>
			</Section>
		</Container>
	)
}