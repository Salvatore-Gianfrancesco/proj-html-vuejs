import { reactive } from 'vue'

export const store = reactive({
    activeStory: 0,
    address: '382 NE 191st St # 87394 Miami, FL 33179-3899',
    contact: '+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)',
    email: 'support@maxcoach.com',

    headerLinks: [
        'Home',
        'Pages',
        'Courses',
        'Features',
        'Blog',
        'Shop'
    ],

    courses: [
        {
            id: '01',
            price: '19.99',
            title: 'Management Skills: The Science of Leadership',
            lessons: 17,
            students: 50
        },
        {
            id: '02',
            price: '25.99',
            title: 'Body Language Sectrets for Entrepreneurs',
            lessons: 19,
            students: 50
        },
        {
            id: '03',
            price: '20.00',
            title: 'Effective Time Menagement Mastery - Complete Guide',
            lessons: 18,
            students: 50
        },
        {
            id: '04',
            price: '20.00',
            title: 'Productivity Machine - Focus in a Distracted World',
            lessons: 5,
            students: 50
        },
        {
            id: '05',
            price: '30.00',
            title: 'How to Build Confidence in Your Abilities',
            lessons: 1,
            students: 50
        },
        {
            id: '06',
            price: '30.00',
            title: 'How to be Successfull: Create A Growth Mindset For Success',
            lessons: 3,
            students: 50
        }
    ],

    stories: [
        {
            src: '01',
            text: 'I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.',
            name: 'Mina Hollace',
            role: 'Freelancer'
        },

        {
            src: '02',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ab modi fugit, et accusamus possimus veniam in obcaecati soluta laudantium ipsum.',
            name: 'Tim Walter',
            role: 'Personal Trainer'
        },

        {
            src: '03',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo voluptate sunt eos aperiam ipsam quos sapiente odio architecto!',
            name: 'John Doe',
            role: 'Freelancer'
        },

        {
            src: '04',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
            name: 'Paul Williams',
            role: 'Freelancer'
        }
    ],

    articles: [
        {
            src: '01',
            date: 'May 13, 2020',
            title: 'How to Stay True to Your Personal Brand',
            text: 'When it comes to your business or career, you want to...'
        },
        {
            src: '02',
            date: 'May 13, 2020',
            title: '5 Vital Lessons in 5 Years of Freelancing',
            text: 'Being self-employed and working from home, it\'s easy to get...'
        },
        {
            src: '03',
            date: 'May 13, 2020',
            title: '11 Super Useful Tips for Small-Business Owners',
            text: 'Being a small-business owner poses a ton of challenges. We...'
        },
        {
            src: '04',
            date: 'May 13, 2020',
            title: 'How to Give Yourself Grace to Start Again',
            text: 'Forgive yourself for bad habits you may have started or...'
        }
    ],

    footerLinks: [
        {
            title: 'Explore',
            links: ['Start here', 'Blog', 'About us']
        },
        {
            title: '',
            links: ['Success story', 'Courses', 'Contact us']
        },
        {
            title: 'Information',
            links: ['Membership', 'Purchase guide', 'Privacy policy', 'Terms of service']
        }
    ]
})