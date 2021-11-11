import programmingLanguages from './progLangList';

const industries = [
	'Agriculture/Oil/Gas/Mining/Chemicals',
	'ASP/SSP/MSP',
	'Communication (Local/Long distance/Independent/Cable)',
	'Computer/Data processing/Information Technology Services',
	'Construction/Engineering/Architecture',
	'Consulting/Professional Services (Computer Related)',
	'Consulting/Professional Services (Non-Computer-related)',
	'Education',
	'Finance/Banking/Investment',
	'Food/Beverage',
	'Government',
	'Healthcare/Pharmaceutical',
	'Hospitality/Travel',
	'Insurance/Real Estate',
	'Manufacturing (Computer-related)',
	'Manufacturing (Non-Computer-related)',
	'Marketing/Advertising/PR',
	'Media/Entertainment/Publishing',
	'Non-Profit/Trade',
	'Research & Development',
	'Retailer/Distributor/Wholesale (Computer-Related)',
	'Retailer/Distributor/Wholesale (Non-Computer-Related)',
	'Service Provider (Web Hosting/Data/Wireless/Online)',
	'Transportation',
	'Utilities/Energy',
	'VAR/VAD/Systems House/Systems Integrator',
	'Other'
];

const roles = [
	'Product Manager',
	'Project Manager',
	'Architect',
	'Team Lead',
	'Support',
	'Developer',
	'DevOps',
	'Upper Management / Director',
	'Consultant / Self Employed',
	'Owner / Founder',
	'Student'
];

const yearRanges = [
	'0 - 2 years',
	'3 - 5 years',
	'6 - 8 years',
	'9 - 11 years',
	'12 - 14 years',
	'15 - 17 years',
	'18 - 20 years',
	'21 - 23 years',
	'24 - 26 years',
	'27 - 29 years',
	'30 or more years'
];

const purchasing = [
	`I make final purchasing decisions`,
	`I am highly involved but don't make final decision`,
	`I influence purchasing decisions`,
	`I have no involvement in purchasing decisions  `
];

const teamRole = ['Front End', 'Back End', 'Full Stack', 'DBA', 'DevOps', 'Infrastructure  '];

const teamStack = [
	'Django',
	'JAMSTACK',
	'Java',
	'LAMP',
	'MEAN',
	'MERN',
	'MEVN',
	'Meteor',
	'Microsoft .NET',
	'Node',
	'Open Source',
	'Python',
	'Rails',
	'Other'
];

const employeeCountRange = [
	'1',
	'2 - 9',
	'10 - 50',
	'51 - 199',
	'200 - 999',
	'1,000 - 2,999',
	'3,000 - 9,999',
	'10,000 - 49,999',
	'50,000 or more'
];

const jobChange = [
  'Actively looking',
  'Next 3 months',
  'Next 6 months',
  'Next year',
  'Happy, but always willing to consider',
  'Happy, not considering  ',
]

export default [
	{
		type: 'select',
		name: 'idustry',
		attributes: {
			id: 'id-industry',
			label: 'Which of the following best describes the industry you work in? 🏛️ '
		},
		extra: {
			options: industries.map((d) => ({
				title: d,
				value: d
			}))
		}
	},
	{
		type: 'select',
		name: 'myRole',
		attributes: {
			id: 'id-my-role',
			label: 'Which of the following best describes your **role** in the industry?'
		},
		extra: {
			options: roles.map((d) => ({
				title: d,
				value: d
			}))
		}
	},
	{
		type: 'select',
		name: 'myYears',
		attributes: {
			id: 'id-my-years',
			label: 'How many years have you been working professionally?'
		},
		extra: {
			options: yearRanges.map((d) => ({
				title: d,
				value: d
			}))
		}
	},
	{
		type: 'select',
		name: 'purchasing',
		attributes: {
			id: 'id-purchase-decision',
			label: `What is your involvement in your team's purchasing decisions?`
		},
		extra: {
			options: purchasing.map((d) => ({
				title: d,
				value: d
			}))
		}
	},
	{
		type: 'select',
		name: 'myTeam',
		attributes: {
			id: 'id-my-team',
			label: `Which of the following best describes the team you work on? ⚙️ 🔧`
		},
		extra: {
			options: teamRole.map((d) => ({
				title: d,
				value: d
			}))
		}
	},
	{
		type: 'checkbox',
		name: 'programmingLangs',
		attributes: {
			id: 'id-prefer-langs',
			label: 'What are your 3 top preferred programming languages? 💻 '
		},
		extra: {
			items: programmingLanguages.map((d) => ({
				name: d,
				value: d,
				title: d
			}))
		}
	},
	{
		type: 'select',
		name: 'teamStack',
		attributes: {
			id: 'id-team-stack',
			label: `What is the primary stack **your team** works in? 👩‍💻`
		},
		extra: {
			options: teamStack.map((d) => ({
				title: d,
				value: d
			}))
		}
	},
	{
		type: 'input',
		name: 'myCompany',
		attributes: {
			type: 'text',
			id: 'id-my-company',
			label: 'Which company do you work for?',
			placeholder: ''
		}
	},
	{
		type: 'select',
		name: 'companySize',
		attributes: {
			id: 'id-company-size',
			label: `How many employees, worldwide, work at your company?`
		},
		extra: {
			options: employeeCountRange.map((d) => ({
				title: d,
				value: d
			}))
		}
	},
	{
		type: 'select',
		name: 'jobChange',
		attributes: {
			id: 'id-job-change',
			label: `Are you considering a job change in:`
		},
		extra: {
			options: jobChange.map((d) => ({
				title: d,
				value: d
			}))
		}
	}
];
