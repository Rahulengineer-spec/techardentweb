import { Container, Section } from '@/components/Layout'
import { FadeIn } from '@/components/Animations'
import { ArrowRight, Code2, Smartphone, Cloud } from 'lucide-react'

const products = [
	{
		title: 'Enterprise Platform',
		description:
			'A comprehensive solution for large organizations, featuring advanced analytics, workflow automation, and enterprise-grade security.',
		features: [
			'Advanced Analytics Dashboard',
			'Workflow Automation',
			'Role-based Access Control',
			'API Integration Hub',
			'Custom Reporting',
			'Audit Logging',
		],
		icon: Code2,
		color: 'from-blue-500/20 to-blue-600/20',
	},
	{
		title: 'SaaS Solution',
		description:
			'A scalable platform for growing businesses, with subscription management, user analytics, and automated billing.',
		features: [
			'Subscription Management',
			'User Analytics',
			'Automated Billing',
			'Multi-tenant Architecture',
			'Usage-based Pricing',
			'Customer Portal',
		],
		icon: Cloud,
		color: 'from-purple-500/20 to-purple-600/20',
	},
	{
		title: 'Mobile Experience',
		description:
			'Native mobile applications for iOS and Android, delivering seamless user experiences across all devices.',
		features: [
			'Cross-platform Development',
			'Offline Capabilities',
			'Push Notifications',
			'Biometric Authentication',
			'Deep Linking',
			'App Analytics',
		],
		icon: Smartphone,
		color: 'from-green-500/20 to-green-600/20',
	},
]

export default function ProductPage() {
	return (
		<main className="min-h-screen bg-black text-white">
			{/* Hero Section */}
			<Section className="bg-gradient-to-b from-gray-900 to-black">
				<Container>
					<div className="max-w-3xl mx-auto text-center">
						<FadeIn>
							<h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
								Our Products
							</h1>
						</FadeIn>
						<FadeIn delay={0.2}>
							<p className="text-xl text-gray-400 mb-8">
								Discover our suite of powerful solutions designed to transform
								your business and drive innovation.
							</p>
						</FadeIn>
					</div>
				</Container>
			</Section>

			{/* Products Grid */}
			<Section className="bg-black">
				<Container>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{products.map((product) => (
							<FadeIn key={product.title}>
								<div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-colors">
									<div
										className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`}
									/>
									<div className="relative">
										<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 mb-6">
											<product.icon className="w-6 h-6 text-white" />
										</div>
										<h3 className="text-2xl font-semibold text-white mb-4">
											{product.title}
										</h3>
										<p className="text-gray-400 mb-6">
											{product.description}
										</p>
										<ul className="space-y-3 mb-8">
											{product.features.map((feature) => (
												<li
													key={feature}
													className="flex items-center text-gray-300"
												>
													<div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3" />
													{feature}
												</li>
											))}
										</ul>
										<a
											href="#contact"
											className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
										>
											Learn More
											<ArrowRight className="ml-2 h-5 w-5" />
										</a>
									</div>
								</div>
							</FadeIn>
						))}
					</div>
				</Container>
			</Section>

			{/* Integration Section */}
			<Section className="bg-gray-900">
				<Container>
					<div className="max-w-3xl mx-auto text-center">
						<FadeIn>
							<h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
								Seamless Integration
							</h2>
						</FadeIn>
						<FadeIn delay={0.2}>
							<p className="text-xl text-gray-400 mb-12">
								Our products are designed to work together seamlessly, providing a
								unified experience across your entire organization.
							</p>
						</FadeIn>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
							{['API', 'Webhooks', 'SDKs', 'CLI'].map((item) => (
								<FadeIn key={item} delay={0.3}>
									<div className="bg-white/5 rounded-xl p-6 border border-white/10">
										<h3 className="text-lg font-medium text-white mb-2">
											{item}
										</h3>
									</div>
								</FadeIn>
							))}
						</div>
					</div>
				</Container>
			</Section>

			{/* CTA Section */}
			<Section className="bg-black">
				<Container>
					<div className="max-w-3xl mx-auto text-center">
						<FadeIn>
							<h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
								Ready to Get Started?
							</h2>
						</FadeIn>
						<FadeIn delay={0.2}>
							<p className="text-xl text-gray-400 mb-8">
								Join thousands of companies already using our products to transform
								their business.
							</p>
						</FadeIn>
						<FadeIn delay={0.3}>
							<a
								href="#contact"
								className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
							>
								Contact Sales
								<ArrowRight className="ml-2 h-5 w-5" />
							</a>
						</FadeIn>
					</div>
				</Container>
			</Section>
		</main>
	)
}