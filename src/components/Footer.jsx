import React from 'react'

const Footer = () => {
   return (
        <footer className="bg-gray-100 py-12 mt-12">
            <div className="max-w-7xl mx-auto text-center text-gray-600">
                <p>&copy; {new Date().getFullYear()} Albert. All rights reserved.</p>
                <p className="mt-2 text-sm">Built with React and Tailwind CSS</p>
            </div>
        </footer>
    );
}

export default Footer