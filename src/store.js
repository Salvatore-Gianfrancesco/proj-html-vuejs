import { reactive } from 'vue'

export const store = reactive({
    activeStory: 0,
    isShowedDemo: false,
    previewNumbers: 14,
    address: '382 NE 191st St # 87394 Miami, FL 33179-3899',
    contact: '+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)',
    email: 'support@maxcoach.com',

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
            text: 'I am happy with their arrangement of lessons and subjects. They reflect a scientific  investigation into effective methods to adopt for learners.',
            name: 'Luvic Dubble',
            role: 'Private tutor'
        },

        {
            src: '03',
            text: 'I\'m a very strict person so I require everything to be organized and neat.Then, I\'ll be able to make things right and shine. MaxCoach guys just got me.',
            name: 'Florence Themes',
            role: 'Multimedia Admin'
        },

        {
            src: '04',
            text: 'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.',
            name: 'Madley Pondor',
            role: 'IT Specialist'
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

    headerLinks: [
        {
            name: 'Home',
            dropdown: ['Landing Page', 'Education', 'Multimedia Pedagogy', 'Modern Schooling', 'Gym Coaching', 'Business', 'Kitchen', 'Motivation', 'Yoga', 'Dancing'],
            visible: false
        },
        {
            name: 'Pages',
            dropdown: ['Start Here', 'About me', 'Latest Online Courses', 'Book Store', 'Real Stories', 'Posts'],
            visible: false
        },
        {
            name: 'Courses',
            dropdown: ['Learn more', 'Our Courses', 'Become a Teacher'],
            visible: false
        },
        {
            name: 'Features',
            dropdown: ['Events'],
            visible: false
        },
        {
            name: 'Blog',
            dropdown: ['Blog List', 'Writers'],
            visible: false
        },
        {
            name: 'Shop',
            dropdown: ['Wishlist', 'Cart', 'Purchase Guide', 'Privacy Policy', 'Terms of Service'],
            visible: false
        }
    ],

    footerLinks: [
        {
            title: 'Explore',
            links: ['Start here', 'Blog', 'About us', 'Success story', 'Courses', 'Contact us']
        },
        {
            title: 'Information',
            links: ['Membership', 'Purchase guide', 'Privacy policy', 'Terms of service']
        }
    ]
})