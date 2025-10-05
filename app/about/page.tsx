import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { FadeIn } from '@/components/Animations'
import { Users, Target, Award, Heart } from 'lucide-react'
import { AnimatedCounter } from '@/components/AnimatedCounter'

const stats = [
	{ label: 'Team Members', value: '50+' },
	{ label: 'Countries', value: '10+' },
	{ label: 'Clients', value: '1000+' },
	{ label: 'Projects', value: '500+' },
]

const values = [
	{
		title: 'Innovation',
		description:
			'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.',
		icon: Target,
	},
	{
		title: 'Excellence',
		description:
			'We strive for excellence in everything we do, from code quality to customer service.',
		icon: Award,
	},
	{
		title: 'Collaboration',
		description:
			'We believe in the power of teamwork and foster a culture of open communication.',
		icon: Users,
	},
	{
		title: 'Integrity',
		description:
			'We operate with honesty and transparency, building trust with our clients and team.',
		icon: Heart,
	},
]

export default function AboutPage() {
		return (
			<Container>
				<Section className="py-20 bg-black text-white">
					<FadeIn>
						<div className="text-center mb-16">
							<h1 className="text-4xl font-bold mb-4 text-yellow-400">About TechArdent</h1>
							<p className="text-xl text-gray-200 max-w-3xl mx-auto">
								We&apos;re a team of passionate technologists dedicated to building
								innovative solutions that help businesses thrive in the digital age.
							</p>
						</div>

						{/* Stats */}
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
							{stats.map((stat) => (
								<div
									key={stat.label}
									className="text-center p-6 bg-gray-900 rounded-xl border border-gray-800"
								>
									<div className="text-3xl font-bold text-yellow-400 mb-2">
										<AnimatedCounter value={parseInt(stat.value)} />
										{stat.value.includes('+') && '+'}
									</div>
									<div className="text-gray-300">
										{stat.label}
									</div>
								</div>
							))}
						</div>

						{/* Mission */}
						<div className="mb-16">
							<h2 className="text-3xl font-bold mb-6 text-center text-yellow-400">Our Mission</h2>
							<p className="text-lg text-gray-200 max-w-3xl mx-auto text-center">
								To empower businesses with innovative technology solutions that drive
								growth, efficiency, and success in an ever-evolving digital landscape.
							</p>
						</div>

						{/* Values */}
						<div className="mb-16">
							<h2 className="text-3xl font-bold mb-8 text-center text-yellow-400">Our Values</h2>
							<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
								{values.map((value) => (
									<div
										key={value.title}
										className="p-6 bg-gray-900 rounded-xl border border-gray-800"
									>
										<value.icon className="w-12 h-12 text-yellow-400 mb-4" />
										<h3 className="text-xl font-bold mb-2 text-white">{value.title}</h3>
										<p className="text-gray-300">
											{value.description}
										</p>
									</div>
								))}
							</div>
						</div>

						{/* Team */}
						<div>
							<h2 className="text-3xl font-bold mb-8 text-center text-yellow-400">
								Our Leadership Team
							</h2>
							<div className="grid md:grid-cols-3 gap-8">
								{[
									{
										name: 'John Doe',
										role: 'CEO & Founder',
										bio: 'Visionary leader with 15+ years of experience in technology and business.',
									},
									{
										name: 'Jane Smith',
										role: 'CTO',
										bio: 'Technical expert specializing in cloud architecture and AI solutions.',
									},
									{
										name: 'Mike Johnson',
										role: 'COO',
										bio: 'Operations specialist focused on scaling businesses and optimizing processes.',
									},
								].map((member) => (
									<div
										key={member.name}
										className="p-6 bg-gray-900 rounded-xl border border-gray-800"
									>
										<div className="w-24 h-24 bg-gray-800 rounded-full mx-auto mb-4" />
										<h3 className="text-xl font-bold text-center mb-1 text-white">
											{member.name}
										</h3>
										<p className="text-yellow-400 text-center mb-2">
											{member.role}
										</p>
										<p className="text-gray-300 text-center">
											{member.bio}
										</p>
									</div>
								))}
							</div>
						</div>
					</FadeIn>
				</Section>
			</Container>
		)
}