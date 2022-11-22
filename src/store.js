import { reactive } from 'vue'

export const store = reactive({
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
    ]
})