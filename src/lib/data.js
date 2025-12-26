
export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.png',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.png',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.png',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    data_science:[
        {
            name:"Python",
            icon:'/logo/python.png'
        },
         {
            name:"Numpy",
            icon:'/logo/numpy.png'
        },
        {
            name:"Pandas",
            icon:'/logo/pandas.png'
        },
        {
            name:"Matplotlib",
            icon:'/logo/matplotlib.png'
        },
        {
            name:"Scikit Learn",
            icon:'/logo/sklearn.png'
        },
         {
            name:"Keras",
            icon:'/logo/keras.png'
        },
        {
            name:"Power BI",
            icon:'/logo/powerbi.png'
        },
         {
            name:"Flask",
            icon:'/logo/flask.png'
        },
],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.png',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
    ],
};


export const projectsData = [
  {
    id: 1,
    title: "Ecommerce",
    year: "2024",
    category: "Web Development",
    imageSrc:"/project/ecommerce.png",
    link:"https://mern-ecommerce-rquj.vercel.app/",
    stack:"React,Node Js,MongoDB,Redux,OAuth",
    description: {
      overview: "A full-stack, responsive e-commerce application built with the MERN stack (MongoDB, Express, React, Node.js). It features secure user authentication (including Google OAuth), real-time product management, and a streamlined checkout process integrated with the Khalti Payment Gateway.",
      features: [
        "Authentication: User registration, login, and Google OAuth sign-in.",
        "Shopping: Product browsing, persistent shopping cart, and order history.",
        "Payments: Secure checkout via Khalti payment gateway.",
        "Admin Tools: Complete CRUD operations for products, stock control, and user/order management."
      ],
      techStack: [
        { layer: "Frontend", technologies: "React.js (Redux, React Router DOM)" },
        { layer: "Backend", technologies: "Node.js / Express.js (Mongoose, JWT)" }
      ]
    },
    github:"https://github.com/alvert-git/MERN-Ecommerce"
  },
  {
    id: 2,
    title: "Nepal Mathematics Society",
    year: "2023",
    category: "Web Development",
    imageSrc: "/project/nms.png",
    link:"https://nm-society.org/",
     description: {
      overview: "A Full Stack Real World Project,Build while Working at my first Internship.",
     }
  },
  {
    id: 3,
    title: "SMS Spam Classifier",
    year: "2024",
    category: "Data Science",
    imageSrc: "/project/sms_spam.png",
    link:"https://sms-spam-classifier-lyart.vercel.app/",
    stack:"React,Node.js,PostgreSQL,Scikit Learn,Flask",
    description: {
      overview: "A full-stack web application designed to accurately predict whether a given text message is 'Spam' or 'Ham' (Not Spam) using a trained Machine Learning model. The application features a modern, responsive interface and a robust, scalable backend architecture.",
      features: [
        "Real-time Classification: Instantly classify SMS messages via the web interface.",
        "High Accuracy ML Model: Utilizes a robust classification algorithm (e.g., Naive Bayes, SVM, or LSTM) trained on a large corpus of SMS data.",
        "Modern UI: Built with React and features a clean, intuitive design.",
        "Theme Toggle: Supports both Dark and Light Modes for personalized viewing.",
        "Global State Management: Seamless application state handling using React Context API.",
        "Scalable Architecture: Separate services for the web API (Node/Express) and the ML model (Python/Flask)."
      ],
      techStack: [
        { layer: "Frontend", technologies: "React.js (Context-API, React Router DOM)" },
        { layer: "Backend", technologies: "Node.js / Express.js (Mongoose, JWT)" },
        { layer: "Backend", technologies: "Python / Flask" }
      ]
    },
  },
];

export const MY_EXPERIENCE = [
    {
        title: 'Graphic Designer Intern',
        company: 'Wild Boar Technology ',
        duration: '2022-2023 ( 1 Year )',
        letterImage: '/experience/wbt.png'
    },
    
];